---
title: "후가공_AMCalc_Sub_2_KATAOSI_New2"
description: "AMCalc_Sub_2_KATAOSI_New2"
tags: [개발가이드, AMCalc_Sub_2_KATAOSI_New2 ]
---

### 후가공_AMCalc_Sub_2_KATAOSI_New2

---

``` sql
USE [adprintNewDB]
GO
/****** Object:  StoredProcedure [dbo].[AMCalc_Sub_2]    Script Date: 2020-07-28 오후 3:06:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[AMCalc_Sub_2]
@GoodsId int, @JoinerId int, @SellUnit int, @AfterMakeCalcDataId int, @AfterMakeName nvarchar(200), @AfterMakeValue nvarchar(200), @JSON nvarchar(MAX), @DEBUG int
WITH EXEC AS CALLER
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @AfterMakePrice TABLE (
		AfterMakePrice	INT,
		AfterMakeName	NVARCHAR(1000),
		AfterMakeValue	NVARCHAR(1000)
	);
  DECLARE @RequestForm TABLE (
		Name NVARCHAR(200),
		Value NVARCHAR(200)
	);

  DECLARE @TempCalcData TABLE (
		element_id int
		, StringValue nvarchar(100)
  )

  INSERT INTO @TempCalcData ( element_id, StringValue)
  SELECT	element_id, convert(nvarchar(100), StringValue)
  FROM		parseJSON( (SELECT [contents] 
						FROM	calcData with(nolock) 
						WHERE	id = (SELECT calcDataId FROM tblGoods with(nolock) WHERE intGoodsNum = @GoodsId)	))	
  
  DECLARE @계산금액 int, @float10 float, @달러전환 int, @환율 float,  @야리통수 int, @박지단가 float, @동판단가 int, @가공비기본 int, @세금 float, @박비용 float
  SET @계산금액 = 0
  SET @float10 = 10

  SET @달러전환 = ISNULL((SELECT StringValue FROM @TempCalcData WHERE element_id = 13), 100) 
  SET @환율 = ISNULL((SELECT StringValue FROM @TempCalcData where element_id = 14), 800) 
  SET @야리통수 = ISNULL((SELECT StringValue FROM @TempCalcData where element_id = 15),2000)
  SET @박지단가 = ISNULL((SELECT StringValue FROM @TempCalcData where element_id = 16),0.2)
  SET @동판단가 = ISNULL((SELECT StringValue FROM @TempCalcData where element_id = 17),250)
  SET @가공비기본 = ISNULL((SELECT StringValue FROM @TempCalcData where element_id = 18),100000)
  SET @세금 = ISNULL((SELECT StringValue FROM @TempCalcData where element_id = 19),1.07)
  SET @박비용 = ISNULL((SELECT StringValue FROM @TempCalcData where element_id = 20),0.5)
						  

	BEGIN TRY
    -- init
    -- RequrstForm
    INSERT INTO @RequestForm (Name, Value)
		SELECT NAME, StringValue
	  FROM parseJSON(@JSON);
    
    -- 변수
    DECLARE @넓이 float, @높이 float, @후가공종류값 int
    SET @넓이 = 0
    SET @높이 = 0
    SET @후가공종류값 = 0
    SELECT @넓이 = CASE WHEN ISNUMERIC(Value) = CAST(1 AS BIT) THEN CAST(Value AS INT) ELSE 0 END FROM @RequestForm WHERE Name = 'widthPress'
    SELECT @높이 = CASE WHEN ISNUMERIC(Value) = CAST(1 AS BIT) THEN CAST(Value AS INT) ELSE 0 END FROM @RequestForm WHERE Name = 'heightPress'
    SELECT @후가공종류값 = 1
    
    /* 박지값 */
    DECLARE @박지값 int
    SET @박지값 = ((@넓이 + 20) / @float10) * ((@높이 + 20) / @float10) * (@SellUnit + @야리통수) * @박지단가;
    
    /* 동판비 */
    DECLARE @동판비 int
    SET @동판비 = ((@넓이 + 20) / @float10) * ((@높이 + 20) / @float10) * @동판단가 * 2
    
    /* 가공비 */
    DECLARE @가공비 int
    DECLARE @기준가공비 int
    SET @기준가공비 = (@넓이 / @float10) * (@높이 / @float10) * @박비용 * (@SellUnit + @야리통수)
    IF (@기준가공비 <= @가공비기본)
      BEGIN
        SET @가공비 = @가공비기본
      END
    ELSE
      BEGIN
        SET @가공비 = @기준가공비
      END
    
    /* 총제작비 */
    DECLARE @총제작비 int
    SET @총제작비 = @박지값 + @동판비 + @가공비
    
    /* 마진금액 */
    DECLARE @마진금액 int
    SET @마진금액 = @총제작비 * 0.5
    
    /* 판매가 */
    DECLARE @판매가 float
    SET @판매가 = ROUND((@총제작비 + @마진금액) * @세금 / @환율, 0) * @후가공종류값
    SET @계산금액 = CAST(@판매가 * @달러전환 AS INT)
    
    IF @DEBUG = 1
      BEGIN
        SELECT @박지값 [@박지값], @동판비 [@동판비], @가공비 [@가공비], @총제작비 [@총제작비], @마진금액 [@마진금액], @판매가 [@판매가]
      END
    
    INSERT INTO @AfterMakePrice VALUES (@계산금액, @AfterMakeName, @AfterMakeValue)
	END TRY
	BEGIN CATCH
		DECLARE @ErrNo INT = @@ERROR;
		DECLARE @ErrMsg NVARCHAR(4000) = ERROR_MESSAGE();

		INSERT INTO ErrorLog (userAgent, errorMsg, url, writeDate)
		VALUES (OBJECT_NAME(@@PROCID), @ErrMsg, @ErrNo, GETDATE());

		RAISERROR(@ErrNo, -1, -1, @ErrMsg);

		IF @DEBUG = 1
		BEGIN
			PRINT @@ERROR;
			PRINT ERROR_MESSAGE();
		END
	END CATCH
	SELECT * FROM @AfterMakePrice;
END
```

