---
title: "후가공_AMCalc_Main_New4"
description: "AMCalc_Main_New4"
tags: [개발가이드, AMCalc_Main_New4 ]
---

### 후가공_AMCalc_Main_New4

---

``` sql
USE [adprintNewDB]
GO
/****** Object:  StoredProcedure [dbo].[AMCalc_Main]    Script Date: 2020-09-03 오후 4:18:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		WB Kim
-- Create date: 2017-01-24
-- Description:	후가공 가격 조회 Stored Procedure
-- =============================================
/*
EXEC AmCalc_Main N'{"goodsId":"48570","unit":"3000","PRESS":"","LEAF":"銀色箔(無光)-FREESIZE1","widthLeaf1":"25","heightLeaf1":"40"}', 0
-- 22800
EXEC AmCalc_Main N'{"goodsId":"68312","priceId":"2580514","unit":"1000","multipleOrderCount":"1","designOrderYn":"undefined","PRESS":"FREESIZE1","LEAF":"金ホログラム箔(有光)-FREESIZE1","widthLeaf1":"50","heightLeaf1":"100","widthPress1":"25","heightPress1":"40","color":"F4","options:SHAPE:":"SQAURE","options:DIRECTION:":"A","options:ROW:":"1","options:SIKAN:":"75MM","options:SYONECUTTING:":"NONE","options":"SQAURE,A,1,75MM,NONE","addedPrice":"0","printYn":"N","count":"1000","reorderItemNum":"undefined","width":"0","height":"0","_":"1485914170862","__ulfpc":"201612071010284771","__ywapbuk":"0.027","ASP.NET_SessionId":"quryyhv1swrolr1vugtdqg1c","_ga":"GA1.2.1085888846.1481017059,GA1.3.1085888846.1481017059","__utmt":"1","wcs_bt":"fcbfb65dd01f58:1485913593","__asc":"147f2545159f73bd7f89304b726","__auc":"f320749e15914b06cab229375fb","_gat_UA-7187249-5":"1","__utma":"152359145.1085888846.1481017059.1485851461.1485911611.32","__utmb":"152359145.15.8.1485913607624","__utmc":"152359145","__utmz":"152359145.1483520977.18.4.utmcsr=partner.adprint.jp|utmccn=(referral)|utmcmd=referral|utmcct=/PartnerGoods/PartnerGoodsList","__utmli":"heightLeaf1"}', 0
-- 114700
*/
ALTER PROCEDURE [dbo].[AMCalc_Main]
@JSON nvarchar(MAX), @DEBUG int = 0
WITH EXEC AS CALLER
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	-- 선택된 후가공 결과 목록 테이블
	DECLARE @AfterMakePriceInfo TABLE (
		AfterMakePrice	INT,
		AfterMakeSupplierPrice INT,
		AfterMakeName	VARCHAR(1000),
		AfterMakeValue	VARCHAR(1000)
	);
	DECLARE @AfterMakePrice INT;
	DECLARE @GoodsId INT, @JoinerId INT, @SellUnit INT, @OrderType NVARCHAR(10);
	DECLARE @UnitSellCount INT, @UnitAFMakePrice INT, @AfterMakeCalcDataId INT, @AfterMakeCalcInfoId INT;
	DECLARE @Name NVARCHAR(200), @Value NVARCHAR(200);
	DECLARE @AfCount INT, @I INT;
	DECLARE @AfterMakeTable TABLE (
		strAfMakeType		NVARCHAR(200), 
		intWidth			INT,
		intHeight			INT,
		intSellCount		INT,
		intAFMakePrice		INT,
		intFormPrice		INT,
		intTotalPrice		INT, 
		afterMakeCalcDataId	INT, 
		intCateGoryNum		INT,
		strAfMakeName		NVARCHAR(200),
		strAfMakeNameEng	NVARCHAR(200),
		strAfMakeNameJp		NVARCHAR(200)
	);
	DECLARE @AfterMakeList TABLE (
		Id					INT IDENTITY(1, 1),
		strAfMakeNameEng	NVARCHAR(200)
	);
	DECLARE @RequestForm TABLE (
		Name VARCHAR(200),
		Value NVARCHAR(200)
	);
	DECLARE @SP_NAME NVARCHAR(100), @SQL NVARCHAR(2000);

	INSERT INTO @RequestForm (Name, Value)
	SELECT NAME, StringValue
	FROM parseJSON(@JSON);

	-- 상품ID, 구매수량, 이용사ID 조회
	SELECT @GoodsId = ISNULL(Value, 0) FROM @RequestForm WHERE Name = 'goodsId';
	SELECT @SellUnit = ISNULL(Value, 0) FROM @RequestForm WHERE Name = 'unit';

	SELECT @JoinerId = ISNULL(b.joinerId, '')
	FROM tblGoods a WITH (NOLOCK)
		JOIN PartnerGoods b WITH (NOLOCK) ON a.partnerGoodsId = b.id
	WHERE a.intGoodsNum = @GoodsId;

	IF @DEBUG = 1
	BEGIN
		SELECT @GoodsId GoodsId, @SellUnit SellUnit, @JoinerId JoinerId
	END

	BEGIN TRY
		-- JoinerId 없는 경우 오류
		IF @JoinerId <> ''
		BEGIN

			-- OrderType 조회
			SELECT @OrderType = CASE WHEN ISNULL(orderType, '') = '' THEN 'ATYPE' ELSE orderType END
			FROM tblGoods WITH (NOLOCK)
			WHERE intGoodsNum = @GoodsId;

			-- 등록된 모든 후가공 가격 목록
			INSERT INTO @AfterMakeTable (strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intTotalPrice, afterMakeCalcDataId, intCateGoryNum, strAfMakeName, strAfMakeNameEng, strAfMakeNameJp)
			SELECT e.strAfMakeType, e.intWidth, e.intHeight, e.intSellCount, e.intAFMakePrice, e.intFormPrice, e.intTotalPrice, e.afterMakeCalcDataId, a.intCateGoryNum, a.strAfMakeName, a.strAfMakeNameEng, a.strAfMakeNameJp
			FROM tblAfterMake a WITH (NOLOCK)
				INNER JOIN tblCategory b WITH (NOLOCK) ON a.intCateGoryNum = b.intCateGoryNum AND b.strState = 'REG'
				INNER JOIN tblGoods c WITH (NOLOCK) ON SUBSTRING(c.strCateGoryCodePath,1,2) = b.strCateGoryCodePath AND c.strState <> ''
				INNER JOIN partnerGoods d WITH (NOLOCK) ON c.partnerGoodsId = d.id
				INNER JOIN tblAfterMakePrice e WITH (NOLOCK) ON a.intAfterMakeNum = e.intAfterMakeNum
			WHERE a.strState = 'REG'
		        AND e.strState = 'REG'
				AND d.joinerId = @JoinerId
				AND c.intGoodsNum = @GoodsId
				AND (SELECT COUNT(*) FROM funSplitTableChar(c.strAfterMake, ',') WHERE intValue = a.strAfMakeNameEng)  > 0;

			IF @DEBUG = 1
			BEGIN
				SELECT * FROM @AfterMakeTable;
			END

			-- 후가공 종류 목록
			INSERT INTO @AfterMakeList (strAfMakeNameEng)
			SELECT DISTINCT strAfMakeNameEng
			FROM @AfterMakeTable;


			SELECT @AfCount = COUNT(*) FROM @AfterMakeList;

			IF @DEBUG = 1
			BEGIN
				SELECT * FROM @AfterMakeList;
			END

			SET @I = 0;
			
			-- 후가공별 금액 계산
			WHILE @I < @AfCount
			BEGIN
				-- 후가공 금액 초기화
				SET @UnitSellCount = 1;
				SET @AfterMakePrice = 0;
				SET @AfterMakeCalcDataId = '';

				SET @I = @I + 1;

				SELECT @Name = strAfMakeNameEng FROM @AfterMakeList WHERE Id = @I;

				IF EXISTS(SELECT Name FROM @RequestForm WHERE Name = @Name)
				BEGIN
					-- 여기서 @TotalPrice에 후가공 금액을 계산해서 더해준다
					SELECT @Value = Value FROM @RequestForm WHERE Name = @Name;

					IF @DEBUG = 1
					BEGIN
						SELECT @Value Value, @Name Name, @OrderType OrderType;
					END
					
					-- 후가공이 없는 경우
					IF ISNULL(@Value, '') = ''
					BEGIN
						SET @UnitSellCount = 1;
						SET @UnitAFMakePrice = 0;
						SET @AfterMakeCalcDataId = '';
					END
					-- 후가공이 선택된 경우
					ELSE
					BEGIN
						-- 후가공 계산식이 등록된 경우
						IF EXISTS(SELECT 1 FROM @AfterMakeTable WHERE strAfMakeNameEng = @Name AND strAfMakeType = @Value AND afterMakeCalcDataId IS NOT NULL AND afterMakeCalcDataId > 0)
						BEGIN
							SELECT @afterMakeCalcDataId = afterMakeCalcDataId
							FROM (SELECT TOP 1 *
								FROM @AfterMakeTable
								WHERE strAfMakeNameEng = @Name
								  AND strAfMakeType = @Value ) a;

							SELECT @AfterMakeCalcInfoId = ISNULL(calcInfoId, 0) FROM AfterMakeCalcData WITH (NOLOCK) WHERE id = @AfterMakeCalcDataId;
							
							IF @AfterMakeCalcInfoId = 0
							BEGIN
								INSERT INTO ErrorLog (userAgent, errorMsg, url, writeDate, browser)
								VALUES (OBJECT_NAME(@@PROCID), 'ERROR: AfterMake CalcInfo NOT EXISTS', @AfterMakeCalcDataId, GETDATE(), @JSON);

								RAISERROR(19200, -1, -1, 'ERROR: AfterMake CalcInfo NOT EXISTS');
							END
							ELSE
							BEGIN
								SET @SP_NAME = N'AMCalc_Sub_' + CONVERT(VARCHAR, ISNULL(@AfterMakeCalcInfoId, ''));
								
								IF OBJECT_ID(@SP_NAME) IS NOT NULL
								BEGIN
									SET @SQL = N'EXEC ' + @SP_NAME
												+ N' @GoodsId = ' + CONVERT(VARCHAR, @GoodsId)
												+ N', @JoinerId = ' + CONVERT(VARCHAR, @JoinerId)
												+ N', @SellUnit = ' + CONVERT(VARCHAR, @SellUnit)
												+ N', @AfterMakeCalcDataId = ' + CONVERT(VARCHAR, @AfterMakeCalcDataId)
												+ N', @AfterMakeName = ''' + @Name + ''''
												+ N', @AfterMakeValue = ''' + @Value + ''''
												+ N', @JSON = ''' + @JSON + ''''
												+ N', @DEBUG = ' + CONVERT(VARCHAR, @DEBUG) +  ';';
									
									IF @DEBUG = 1
									BEGIN
										PRINT @SQL;
										EXEC SP_EXECUTESQL @SQL;
									END
									ELSE
									BEGIN

										INSERT INTO @AfterMakePriceInfo
										EXEC SP_EXECUTESQL @SQL;
									END
								END
								ELSE
								BEGIN
									INSERT INTO ErrorLog (userAgent, errorMsg, url, writeDate, browser)
									VALUES (OBJECT_NAME(@@PROCID), 'ERROR: Stored Procedure NOT EXISTS', @SP_NAME, GETDATE(), @JSON);

									IF @DEBUG = 1
									BEGIN
										PRINT @SP_NAME;
									END

									RAISERROR(19000, -1, -1, 'ERROR: Stored Procedure NOT EXISTS');
								END
							END
						END
						ELSE
						BEGIN
							IF @OrderType = 'ATYPE' OR @OrderType = 'DTYPE' OR @OrderType = 'ETYPE'
							BEGIN
								-- 판매 수량과 동일한 후가공 금액이 등록된 경우
								IF EXISTS (SELECT 1 FROM @AfterMakeTable WHERE strAfMakeNameEng = @Name AND strAfMakeType = @Value AND intSellCount = @SellUnit)
								BEGIN
									SELECT @UnitSellCount = intSellCount, @UnitAFMakePrice = intAFMakePrice
									FROM @AfterMakeTable
									WHERE strAfMakeNameEng = @Name
										AND strAfMakeType = @Value
										AND intSellCount = @SellUnit;
								END
								-- 구매 수량과 동일한 후가공 금액이 없는 경우 등록된 수량 중 구매수량 보다 작은 경우 중 가장 큰 수량의 후가공 금액을 적용
								ELSE
								BEGIN
									SELECT @UnitSellCount = ISNULL(a.intSellCount, 1), @UnitAFMakePrice = ISNULL(a.intAFMakePrice, 0)
									FROM (
										SELECT TOP 1 *
										FROM @AfterMakeTable
										WHERE strAfMakeNameEng = @Name
											AND strAfMakeType = @Value
											AND intSellCount < @SellUnit
										ORDER BY intSellCount DESC
									) a;
								END
							END
							ELSE IF @OrderType = 'CTYPE'
							BEGIN
								SELECT @UnitSellCount = ISNULL(a.intSellCount, 1), @UnitAFMakePrice = ISNULL(a.intAFMakePrice, 0)
								FROM (
									SELECT TOP 1 *
									FROM @AfterMakeTable
									WHERE strAfMakeNameEng = @Name
										AND (intSellCount >= @SellUnit OR intSellCount = (SELECT MAX(intSellCount) FROM @AfterMakeTable)) 
										AND strAfMakeType = @Value) a
									ORDER BY intSellCount ASC;
							END

							IF @SellUnit = @UnitSellCount
							BEGIN
								SET @AfterMakePrice = @UnitAFMakePrice;
							END
							ELSE
							BEGIN
								IF @UnitSellCount = 0
								BEGIN
									SET @AfterMakePrice = @SellUnit * @UnitAFMakePrice;
								END
								ELSE
								BEGIN
									SET @AfterMakePrice = @SellUnit * (@UnitAFMakePrice / @UnitSellCount);
								END
							END

							INSERT INTO @AfterMakePriceInfo VALUES (@AfterMakePrice, 0, @Name, @Value);
						END
					END
				END
			END
		END
		ELSE
		BEGIN
			INSERT INTO ErrorLog (userAgent, errorMsg, url, writeDate, browser)
			VALUES (OBJECT_NAME(@@PROCID), 'ERROR: JoinerId NOT EXISTS', @JoinerId, GETDATE(), @JSON);

			RAISERROR(19100, -1, -1, 'ERROR: JoinerId NOT EXISTS');
		END
	END TRY
	BEGIN CATCH
		-- 오류 입력
		DECLARE @ErrNo INT = @@ERROR;
		DECLARE @ErrMsg NVARCHAR(4000) = ERROR_MESSAGE();

		INSERT INTO ErrorLog (userAgent, errorMsg, url, writeDate, browser)
		VALUES (OBJECT_NAME(@@PROCID), @ErrMsg, @ErrNo, GETDATE(), @JSON);

		RAISERROR(@ErrNo, -1, -1, @ErrMsg);

	END CATCH

	SELECT * FROM @AfterMakePriceInfo;

END
```

