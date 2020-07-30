---
title: "후가공_AMCalc_Sub_1_HAKU"
description: "AMCalc_Sub_1_HAKU"
tags: [개발가이드, AMCalc_Sub_1_HAKU ]
---

### 후가공_AMCalc_Sub_1_HAKU

---

``` sql
USE [adprintNewDB]
GO
/****** Object:  StoredProcedure [dbo].[AMCalc_Sub_1]    Script Date: 2020-07-22 오후 2:31:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[AMCalc_Sub_1]
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
  
  DECLARE @계산금액 int, @달러전환 int, @환율 float, @float10 float, @야리통수 int, @박지단가 float, @동판단가 int, @가공비기본 int, @세금 float, @박비용 float
  SET @계산금액 = 0
  SET @달러전환 = 100
  SET @환율 = 800
  SET @float10 = 10
  SET @야리통수 = 2000
  SET @박지단가 = 0.2
  SET @동판단가 = 250
  SET @가공비기본 = 100000
  SET @세금 = 1.07
  SET @박비용 = 0.5

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
    SELECT @넓이 = CASE WHEN ISNUMERIC(Value) = CAST(1 AS BIT) THEN CAST(Value AS INT) ELSE 0 END FROM @RequestForm WHERE Name = 'widthLeaf'
    SELECT @높이 = CASE WHEN ISNUMERIC(Value) = CAST(1 AS BIT) THEN CAST(Value AS INT) ELSE 0 END FROM @RequestForm WHERE Name = 'heightLeaf'
    SELECT @후가공종류값 = CASE WHEN @AfterMakeValue = '' THEN 0
                           WHEN @AfterMakeValue = 'Hologram Gold gloss' THEN 3
                           WHEN @AfterMakeValue = 'Hologram Silver gloss' THEN 3
                           ELSE 1 END
    
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

