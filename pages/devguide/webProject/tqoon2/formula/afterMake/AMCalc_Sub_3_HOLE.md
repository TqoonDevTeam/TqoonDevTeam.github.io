---
title: "후가공_AMCalc_Sub_3_HOLE"
description: "AMCalc_Sub_3_HOLE"
tags: [개발가이드, AMCalc_Sub_3_HOLE]
---

### 후가공_AMCalc_Sub_3_HOLE

---

``` sql
USE [adprintNewDB]
GO
/****** Object:  StoredProcedure [dbo].[AMCalc_Sub_3]    Script Date: 2020-07-22 오후 2:42:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[AMCalc_Sub_3]
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
		Name VARCHAR(200),
		Value NVARCHAR(200)
	);
  
  DECLARE @타공 int, @타공기본금액 int, @계산금액 float, @달러전환 int, @환율 float
  SET @계산금액 = 0
  SET @달러전환 = 100
  SET @환율 = 800

	BEGIN TRY
    -- init
    -- RequrstForm
    INSERT INTO @RequestForm (Name, Value)
		SELECT NAME, StringValue
	  FROM parseJSON(@JSON);
    
    -- 변수
    SET @타공기본금액 = 35000; -- 1천매 기준 (1천 이하 35000)
    SELECT @타공 = CASE WHEN Value = 'one' THEN 1
                      WHEN Value = 'two' THEN 2
                      ELSE 0
                 END
    FROM @RequestForm WHERE Name = 'HOLE'

		IF @DEBUG = 1
		BEGIN
			SELECT @GoodsId GoodsdId
				, @JoinerId JoinerId
				, @SellUnit SellUnit
				, @AfterMakeCalcDataId AfterMakeCalcDataId
				, @JSON JSON
        , @타공 Hole
		END
    
    IF @타공 = 0
      BEGIN
        SET @계산금액 = 0
      END
    ELSE IF @SellUnit < 1000
      BEGIN
        SET @계산금액 = @타공기본금액 * @타공
      END
    ELSE
      BEGIN
        SET @계산금액 = @SellUnit / CAST(1000 AS FLOAT) * @타공기본금액 * @타공
      END
    
    SET @계산금액 = CAST(ROUND(@계산금액 / @환율, 0) AS INT) * @달러전환
    
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

