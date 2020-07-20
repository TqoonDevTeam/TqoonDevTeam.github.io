---
title: "범용 스티커 계산식"
description: ""
tags: [개발가이드, 범용 스티커 계산식, 계산식, V2]
history:
  - version: '1.0'
    date: '2020-07-07'
    user: '유현철'
    desc: '초안'
---

## 범용스티커 계산식

### 개요

* TqoonLibraires > AdprintLib > Service > AdprintGoodsPrice > Calculator > Goods 에 개발되어 있는 스티커 계산식이 향진출 할 때마다 국가별 복사하여 **하드코딩**으로 추가해야 한다.
* 이는 **코드의 중복** 이라는 문제를 야기시키며, 매번 계산을 위한 요율 및 파라메터 값을 변경할 때마다 개발자가 일일히 손대야 하는 문제가 발생한다.
* 따라서 **표준 티쿤 계산식**을 하나 만들어 공통으로 사용하고, 필요 값들은 **DB**에 저장하여 각 국가마다 다른 값을 적용할 수 있도록 프로그램을 수정했다.

---

### 프로그램 구조

* 기존 프로그램 구조

  * 기존 프로그램 구조는 국가에 진출할 때마다 폴더별로 **관련 계산 클래스**를 **복사**하여 추가한다. 
    * ![그림_2_1_1](https://user-images.githubusercontent.com/40411714/87750172-ada03100-c835-11ea-89c5-0ae72833e59f.PNG)

* 변경된 프로그램 구조

  * 변경된 프로그램 구조는 한개의 Tqoon 폴더에 있는 계산식을 **공통**으로 사용한다.
    * ![그림_2_2_1](https://user-images.githubusercontent.com/40411714/87750239-de806600-c835-11ea-8501-ead70cafaf59.PNG)

* 프로그램 진입

  * 해당 클래스로 진입하기 위해서는 Adprint.Service.AdprintGoodsPrice.Calculator.**OrderMallGoodsPriceCalculatorFactory** 의

    ``` c#
     if (IsStickerSiteCode(info.GoodsItem.CodePath) && info.RequestorInfo.AUTH_JOINER_ITEM.UserSiteNationCode != "CL" && info.RequestorInfo.AUTH_JOINER_ITEM.UserSiteNationCode != "SG") return StickerSiteCalc(info); 
    ```

    에서 **StickerSiteCalc(info)** 를 통한 각 클래스로의 이동이 아니라 **tblGoods.orderType**을 이용한 계산식 클래스로 진입 하도록 조치 해야한다. 이때 계산식을 사용하는 orderType은 **ETYPE** 과 **FTYPE** 이다.

    * ![그림_2_3_1](https://user-images.githubusercontent.com/40411714/87750460-75e5b900-c836-11ea-87f8-8d2c347bc49e.PNG)

  * ETYPE 과 FTYPE 구분은 **주문**시 수량을 **입력**하는 것(ETYPE)과 수량을 **선택**하는 것(FTYPE)의 차이다. 싱가폴 향 스티커 상품들의 경우 수량을 선택하는 UI이기 때문에 "FTYPE"으로 값을 변경한다. ([4-1](###query). 참고) 

    계산식에 의한 **tblGoods.calcDataId** 와 **partnerGoods.calcDataId** 를 통해 calcData에서 적용되는 계산식 데이터를 조회하여 해당 계산식 클래스로 이동한다. 이때 Code는 **TQ_** 로 확인한다.

    * ![그림_2_3_2](https://user-images.githubusercontent.com/40411714/87752125-9adc2b00-c83a-11ea-8723-d8e3b1b38927.PNG)

* 계산식 클래스

  * 계산식 클래스는 크게 **6개**로 존재한다. 클래스 구조는 아래와 같다.

    * > AbstractFreeSizeGoodsPriceCalculator.cs >  AbstractFreeSizeGoods_TQ_STICKER_Common.cs   > AbstractFreeSizeGoods_TQ_STICKER_SingleType.cs  > 
      > > FreeSizeGoods_TQ_STICKER_SS_01.cs
      > >
      > > FreeSizeGoods_TQ_STICKER_SB_01.cs
      > >
      > > FreeSizeGoods_TQ_STICKER_SE_01.cs
      > >
      > > FreeSizeGoods_TQ_STICKER_PD_01.cs
      > >
      > > FreeSizeGoods_TQ_STICKER_PD_02.cs

* 클래스 종류

  * FreeSizeGoods_TQ_STICKER_ST_01 : SINGLE STICKER (7종) 
    
    * Art 90g, Simili 80g, Kraft 80g, WhitePP 80μ, WhitePP 100μ, TransparentPET 38μ, SilverPET 25μ
    
  * FreeSizeGoods_TQ_STICKER_SS_01 : STICKER SHEET (7종)

    * Art 90g, Simili 80g, Kraft 80g, WhitePP 80μ, WhitePP 100μ, TransparentPET 38μ, SilverPET 25μ

  *  FreeSizeGoods_TQ_STICKER_SB_01 : EPOXY STICKER (1종)

      * WhitePP 80μ
    
  * FreeSizeGoods_TQ_STICKER_SE_01 : OUTDOOR STICKER (2종)
    
    * WhitePVC 90g, TransparentPVC 90g
    
  * FreeSizeGoods_TQ_STICKER_PD_01 : ROLL LABEL Type 1 (11종)
    
    * Art 90g, Simili 80g, Kraft 60g, Gold Paper 80g, Silver Paper 80g, WhitePP 80μ, WhitePP 100μ, TransparentPET 25μ, SilverPET 25μ, TransparentPET 50μ, SilverPET 50μ
    
  * FreeSizeGoods_TQ_STICKER_PD_02 : ROLL LABEL Type 2 (3종)
  
    * Rayon Paper 139g, Washi Paper 139g, Shoji Paper 139g
  
* SetDB설정값()

  * 모든 클래스는 **SetDB설정값()** 메서드를 가지고 있다. 여기서 calcData.**contents**와 calData.**basicCalcData**에 있는 데이터를 읽어 계산식에 사용한다.

    * ![그림_2_6_1](https://user-images.githubusercontent.com/40411714/87754308-8fd7c980-c83f-11ea-804b-4f7507cc9306.PNG)

    * ![그림_2_6_2](https://user-images.githubusercontent.com/40411714/87754338-9d8d4f00-c83f-11ea-958e-6a9abbce3103.PNG)

  * A

    * calcData.contents 에 **지정된 데이터**들을 가져온다. calcData.contents는 파트너의 언어별로 계산식 데이터를 저장할 수 있기 때문에 읽어오기 위해서 배열의 순서로 읽어옴.
  * B
  
    * calcData.basicCalcData에서 **마진 요율**을 읽어온다. 마진 요율은 calcData.basicCalcData에 JSON 형식으로 저장되어 있다. ST, SS 상품만 적용된다.
  * C

    * calcData.basicCalcData에서 **1cm요율**을 읽어온다. 1cm요율은 calcData.basicCalcData에 JSON 형식으로 저장되어 있다. ST, SS 상품만 적용된다.
  * D
  
    * calcData.basicCalcData에서 **재질요율**, **접착요율**, **코팅요율**을 읽어온다. 이들은 calcData.basicCalcData에 JSON 형식으로 저장되어 있다. PD 01 상품만 적용된다.
  
* GetPrice()와 GetSupplierPrice() 분리

  * 기존에는 GetPrice()안에 **관리자 로그인**인경우 (tblUser.userType = ADMIN, PADMIN) **공급가**를 제공하기 위해 if (관리자권한여부) return 판매가(); 식의 처리를 했으나 **공급가 제공 메서드**를 **분리** 했음.
  * 이를 위해 공급가 호출하는 부분은 OrderMallGoodsPriceInfo.cs의 **PriceCalculate()**에서 분기처리함.
    * ![그림_2_7_1](https://user-images.githubusercontent.com/40411714/87756376-ca436580-c843-11ea-8a59-d06924944605.PNG)

---

### DB

* 변경된 DB 구조
  * CalcInfo.code 를 **varchar(3)**에서 **nvarchar(20)**으로 변경 : 보통 이코드를 categoryCode 중카테고리 코드와 맞췄는데 프로그램 로직상 연관관계는 없음. 따라서 TQ_STICKER_XX_NN 형식으로 코드를 저장하려고 사이즈 변경
    * XX : 중카테고리
    * NN : 순번 
  * calcData.basicCalcData 컬럼추가 : basicCalcData에는 송료, 마진등의 요율 정보가 JSON 형식으로 저장됨.
* 데이터 변경
  * tblGoods : orderType & calcDataId
  * partnerGoods : orderType & calcDataId
* calcInfo 데이터
  * 언어별 계산식 내용 추가하면
* calcData 데이터
  * 계산식 기본 값 및 basicCalcData 데이터 추가 

---

### Query

* DDL

  * CalcInfo.code 를 varchar(3)에서 nvarchar(20)으로 변경

    ``` sql
    IF EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where table_name='CalcInfo' and column_name='code')
    BEGIN
    	ALTER TABLE CalcInfo ALTER COLUMN code NVARCHAR(20) NULL
    END
    ```

  * calcData.basicCalcData 컬럼추가 : basicCalcData에는 송료, 마진등의 요율 정보가 JSON 형식으로 저장됨.

    ``` sql
    IF NOT EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where table_name='calcData' and column_name='basicCalcData')
    BEGIN
    	ALTER TABLE calcData ADD basicCalcData nvarchar(max) NULL;
    END
    ```

* calcInfo 데이터 변경 쿼리

  * CalcInfo ST

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES 
    (0, N'Common Sticker ST', 'TQ_STICKER_ST_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "" }
    	, "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "" }
    	, "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "" }
    	, "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "" }}', NULL, NULL)
  ```
    
  * CalcInfo SS

    ``` sql
    NSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES 
    (0, N'Common Sticker SS', 'TQ_STICKER_SS_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "", "도무송기본형단가" : "", "도무송특수형단가" : "", "도무송기본매수" : "" }
    	, "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "", "priceForStandardCutShapes" : "", "priceForCustomCutShape" : "", "baseStickerCountPerSheet" : "" }
    	, "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "", "トムソン基本型単価" : "", "トムソン特殊型単価" : "", "トムソン基本枚数" : "" }
    	, "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "", "基本形刀版单价" : "", "特殊形刀版单价" : "", "刀版基本张数" : "" }}', NULL, NULL)
    ```

  * CalcInfo SB

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES
    (0, N'Common Sticker SB', 'TQ_STICKER_SB_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "", "최소제작비" : "", "간격" : "", "mmTocm" : "", "가격비율_기본형" : "", "가격비율_특수형" : "", "개별재단비YES" : "", "무게요율" : "", "기본매수" : "" }
    	, "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "", "minimumPrice" : "", "spacing" : "", "mmTocm" : "", "priceRateStandardShapes" : "", "priceRateCustomShapes" : "", "individualCutFees" : "", "shippingRateByWeight" : "", "minimumStickerCount" : "" }
    	, "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "", "最小製作費" : "", "間隔" : "", "mmTocm" : "", "価格比率＿基本型" : "", "価格比率＿特殊型" : "", "個別裁断費YES" : "", "重量料率" : "", "基本枚数" : "" }
    	, "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "", "最低制作费用" : "", "间隔" : "", "mmTocm" : "", "价格比率_基本型" : "", "价格比率_特殊型" : "", "个别剪裁费用YES" : "", "重量费率" : "", "基本张数" : "" }}', NULL, NULL)
    ```

  * CalcInfo SE 

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES
    (0, N'Common Sticker SE', 'TQ_STICKER_SE_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "", "용지사이즈W" : "", "용지사이즈H" : "", "내외측" : "", "기본자리수" : "", "도당필름값" : "", "도당인쇄값" : "", "야리지" : "", "배달비용" : "", "무게요율" : "", "마진" : "" }
    	, "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "", "materialWidth" : "", "materialHeight" : "", "stickerMargin" : "", "stickersPerSheet" : "", "filmPricePerColor" : "", "printingPricePerColor" : "", "proofCount" : "", "shippingCosts" : "", "shippingRateByWeight" : "", "priceMargin" : "" }
    	, "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "", "用紙サイズ_幅" : "", "用紙サイズ_高さ" : "", "内外側" : "", "基本桁数" : "", "1色毎フィルム料金" : "", "1色毎印刷料金" : "", "ヤレ紙" : "", "国内送料" : "", "海外運送費" : "", "マージン" : "" }
    	, "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "", "用纸尺寸W" : "", "用纸尺寸H" : "", "内外侧" : "", "基本排版数" : "", "1色印刷胶卷费用" : "", "1色印刷费用" : "", "多余印刷张数" : "", "国内运费" : "", "海外运输费" : "", "成本" : "" }}', NULL, NULL)
    ```

  * CalcInfo PD 01

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES
    (0, N'Common Sticker PD 01', 'TQ_STICKER_PD_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "", "무게요율" : "", "마진" : "", "필름원" : "", "수지원" : "", "수지간격" : "", "사이드간격" : "", "스티커간격" : "", "야리통수" : "", "통인쇄비" : "", "기본통수" : "" }
    	, "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "", "shippingRateByWeight" : "", "priceMargin" : "", "filmCost" : "", "plateCost" : "", "plateSpacing" : "", "spacingFromEdges" : "", "stickerSpacing" : "", "proofCount" : "", "costPerRoll" : "", "rollCount" : "" }
    	, "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "", "重量率" : "", "マージン" : "", "フィルムコスト" : "", "印刷版コスト" : "", "印刷版の間隔" : "", "左右の間隔" : "", "ステッカーの間隔" : "", "ヤレ紙ロール数" : "", "ロール印刷費" : "", "基本ロール数" : "" }
    	, "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "", "重量费率" : "", "成本" : "", "印版成本" : "", "印刷版费用" : "", "印刷版间隔" : "", "左右间隔" : "", "贴纸间隔" : "", "废弃_印刷纸卷数" : "", "印刷费" : "", "基本卷数" : "" }}', NULL, NULL)
    ```

  * CalcInfo PD 02

    ```sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES
    (0, N'Common Sticker PD 02', 'TQ_STICKER_PD_02', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "", "마진" : "", "원단가격" : "", "원단폭" : "", "야리지길이" : "", "사이드간격" : "", "스티커간격" : "", "여분매수" : "", "기본통수" : "", "재단비용" : "", "통인쇄비" : "", "인쇄비기본" : "", "인쇄기본통수" : "", "원단무게" : "" }
    	, "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "", "priceMargin" : "", "materialCosts" : "", "materialWidth" : "", "proofingLength" : "", "spacingFromEdges" : "", "stickerSpacing" : "", "excessPrintCount" : "", "baseRollCount" : "", "cuttingFees" : "", "costPerRoll" : "", "basePrintingFee" : "", "basePrintingRollCount" : "", "materialWeight" : "" }
    	, "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "", "マージン" : "", "生地価格" : "", "生地幅" : "", "ヤレ紙長さ" : "", "左右の間隔" : "", "ステッカーの間隔" : "", "余分枚数" : "", "基本ロール数" : "", "裁断費用" : "", "ロール印刷費" : "", "印刷費基本" : "", "印刷基本ロール数" : "", "生地重さ" : "" }
    	, "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "", "成本" : "", "材质单价" : "", "材质宽度" : "", "废弃_印刷纸长" : "", "左右间隔" : "", "贴纸间隔" : "", "多余张数" : "", "基本卷数" : "", "切割费用" : "", "卷筒印刷费" : "", "基本印刷费用" : "", "印刷基本卷数" : "", "材质重量" : "" }}', NULL, NULL)
    ```

* calcData 데이터 변경 쿼리

  * CalcData ST

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100 }', '', NULL, NULL)        
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 02', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 03', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 04', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 05', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 06', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 07', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100 }', '', NULL, NULL) 
    ```

  * CalcData SS

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 02', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 03', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 04', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 05', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 06', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 07', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    ```

  * CalcData SB

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SB_01'), N'Common Sticker SB 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "최소제작비" : 50000, "간격" : 5, "mmTocm" : 100, "가격비율_기본형" : 10, "가격비율_특수형" : 12, "개별재단비YES" : 200, "무게요율" : 1.0, "기본매수" : 1000 }', '', NULL, NULL)
    ```

  * CalcData SE

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SE_01'), N'Common Sticker SE 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "용지사이즈W" : 450, "용지사이즈H" : 370, "내외측" : 14, "기본자리수" : 12, "도당필름값" : 10000, "도당인쇄값" : 300, "야리지" : 100, "배달비용" : 10000, "무게요율" : 0.0003, "마진" : 0.5 }', '', NULL, NULL)
    ```

  * CalcData PD 01

    ``` SQL
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_01'), N'Common Sticker PD 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "무게요율" : 0.0002, "마진" : 0.5, "필름원" : 10000, "수지원" : 100, "수지간격" : 50, "사이드간격" : 10, "스티커간격" : 5, "야리통수" : 2000, "통인쇄비" : 15, "기본통수" : 3000 }', '', NULL, NULL)  
    ```

  * CalcData PD 02

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_02'), N'Common Sticker PD 02', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "마진" : 0.3, "원단가격" : 3500, "원단폭" : 230, "야리지길이" : 150, "사이드간격" : 20, "스티커간격" : 5, "여분매수" : 500, "기본통수" : 2000, "재단비용" : 50000, "통인쇄비" : 120, "인쇄비기본" : 180000, "인쇄기본통수" : 2000, "원단무게" : 0.025  }', '', NULL, NULL)  
    ```

* calcData.basicCalcData 데이터 변경 쿼리

  * [BasicCalcData_SG](/pages/devguide/webProject/tqoon2/formula/basiccalcdata/BasicCalcData_SG.html) (싱가폴)
  * [BasicCalcData_AU](/pages/devguide/webProject/tqoon2/formula/basiccalcdata/BasicCalcData_AU.html) (호주)
  * [BasicCalcData_MY](/pages/devguide/webProject/tqoon2/formula/basiccalcdata/BasicCalcData_MY.html)  (말레이시아)
  * [BasicCalcData_US](/pages/devguide/webProject/tqoon2/formula/basiccalcdata/BasicCalcData_US.html) (미국)

* tblGoods.orderType & partnerGoods.orderType 데이터 변경 및 calcDataId 변경하는 쿼리

  * ST 01

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01' AND [name] = 'Common Sticker ST 01') ) 
            WHERE strCategoryPath = '06ST01'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01' AND [name] = 'Common Sticker ST 01' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryPath = '06ST01')
    ```

  * ST 02

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_02' AND [name] = 'Common Sticker ST 02' ) ) 
            WHERE strCategoryPath = '06ST02'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_02' AND [name] = 'Common Sticker ST 02' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryPath = '06ST02')
    ```

  * ST 03

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_03' AND [name] = 'Common Sticker ST 03' ) ) 
            WHERE strCategoryPath = '06ST03'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_03' AND [name] = 'Common Sticker ST 03' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryPath = '06ST03')
    ```

  * ST 04

    ``` sql
     UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_04' AND [name] = 'Common Sticker ST 04' ) ) 
            WHERE strCategoryPath = '06ST04'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_04' AND [name] = 'Common Sticker ST 04' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryPath = '06ST04')
    ```

  * ST 05

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_05' AND [name] = 'Common Sticker ST 05' ) ) 
            WHERE strCategoryPath = '06ST05'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_05' AND [name] = 'Common Sticker ST 05' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryPath = '06ST05')
    ```

  * ST 06

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_06' AND [name] = 'Common Sticker ST 06' ) ) 
            WHERE strCategoryPath = '06ST06'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_06' AND [name] = 'Common Sticker ST 06' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryPath = '06ST06')
    ```

  * ST 07

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_07' AND [name] = 'Common Sticker ST 07' ) ) 
            WHERE strCategoryPath = '06ST07'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_07' AND [name] = 'Common Sticker ST 07' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryPath = '06ST07')
    ```

  * SS 01

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01' AND [name] = 'Common Sticker SS 01' ) ) 
            WHERE strCategoryCodePath = '06SS01'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01' AND [name] = 'Common Sticker SS 01' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS01')
    ```

  * SS 02

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_02' AND [name] = 'Common Sticker SS 02' ) ) 
            WHERE strCategoryCodePath = '06SS02'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_02' AND [name] = 'Common Sticker SS 02' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS02')
    ```

  * SS 03

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_03' AND [name] = 'Common Sticker SS 03' ) ) 
            WHERE strCategoryCodePath = '06SS03'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_03' AND [name] = 'Common Sticker SS 03' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS03')
    ```

  * SS 04

    ``` sql
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_04' AND [name] = 'Common Sticker SS 04' ) ) 
            WHERE strCategoryCodePath = '06SS04'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_04' AND [name] = 'Common Sticker SS 04' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS04')
    ```

  * SS 05

    ``` SQL
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_05' AND [name] = 'Common Sticker SS 05' ) ) 
            WHERE strCategoryCodePath = '06SS05'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_05' AND [name] = 'Common Sticker SS 05' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS05')
    
    ```

  * SS 06

    ``` SQL
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_06' AND [name] = 'Common Sticker SS 06' ) ) 
            WHERE strCategoryCodePath = '06SS06'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_06' AND [name] = 'Common Sticker SS 06' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS06')
    ```

  * SS 07

    ``` SQL
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_07' AND [name] = 'Common Sticker SS 07' ) ) 
            WHERE strCategoryCodePath = '06SS07'
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_07' AND [name] = 'Common Sticker SS 07' ) )  
            WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS07')
    ```

  * SB 01

    ``` SQL
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SB_01' ) ) 
            WHERE strCategoryCodePath = '06SB01' AND orderType = 'DTYPE'
    ```

  * SE 01

    ``` SQL
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SE_01' ) ) 
            WHERE strCategoryCodePath IN ('06SE01', '06SE02') AND orderType = 'DTYPE'
    
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SE_01' ) )  
            WHERE id IN (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath IN ('06SE01', '06SE02') AND orderType = 'FTYPE')
    ```

  * PD 01

    ``` SQL
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_01' ) ) 
            WHERE strCategoryCodePath IN ('06PD01', '06PD02', '06PD03', '06PD04', '06PD05', '06PD09', '06PD10', '06PD11', '06PD12', '06PD13', '06PD14') AND orderType = 'DTYPE'
    
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_01' ) )  
            WHERE id IN (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath IN ('06PD01', '06PD02', '06PD03', '06PD04', '06PD05', '06PD09', '06PD10', '06PD11', '06PD12', '06PD13', '06PD14') AND orderType = 'FTYPE')
    ```

  * PD 02

    ``` SQL
    UPDATE tblGoods 
            SET  orderType = 'FTYPE'
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_02' ) ) 
            WHERE strCategoryCodePath IN ('06PD06', '06PD07', '06PD08') AND orderType = 'DTYPE'
    
    
            UPDATE partnerGoods 
            SET  orderType = 'FTYPE' 
            ,    calcDataId = ( SELECT    id 
                                FROM      CalcData with(nolock) 
                                WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_02' ) )  
            WHERE id IN (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath IN ('06PD06', '06PD07', '06PD08') AND orderType = 'FTYPE')
    ```

---

### 향진출 할 때 주의해야 할 사항

* 국가별 계산식 클래스 소스를 추가하면 안됨. (이후 해당 소스들은 지울 예정)
  * ![그림_5_1_1](https://user-images.githubusercontent.com/40411714/87893422-c9484900-ca7a-11ea-998a-239b72b82f63.PNG)
  * calcInfo 데이터 추가
  * CalcData 데이터 추가
  * tblGoods & partnerGoods 에서 스티커 상품 orderType 변경 (FType)
  * tblGoods & partnerGoods 에서 calcDataId 맞춰 줌
  * 테스트 실행
  * JSON 데이터 입력시 [] (배열) 처리 잘 확인해야함.