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
  
* 후가공 처리

  * 후가공 계산식도 마찮가지로 기본 설정값을 변수화 하여 처리함. 따라서 변수값들을 DB에 같이 저장하여 불러오도록 수정 

  * 후가공 로직은 AMCalc_Sub_1, AMCalc_Sub_2, AMCalc_Sub_3

  * 기존 로직 : 후가공_ AMCalc_Sub_1_HAKU.txt, 후가공_ AMCalc_Sub_2_KATAOSI.txt, 후가공_ AMCalc_Sub_3_HOLE.txt

    변경 로직 : 후가공_ AMCalc_Sub_1_HAKU_New2.txt, 후가공_ AMCalc_Sub_2_KATAOSI_New2.txt, 후가공_ AMCalc_Sub_3_HOLE_New2.txt

  * 다음 세개의 이미지의 붉은 박스부분이 변경됨

    * ![image](https://user-images.githubusercontent.com/40411714/88768028-6dd23580-d1b5-11ea-930b-8452e61016e1.png)
    * AMCakc_Sub_1
      * ![image](https://user-images.githubusercontent.com/40411714/88768151-9fe39780-d1b5-11ea-9f24-9b0a0051f947.png)
    * AMCakc_Sub_2
      * ![image](https://user-images.githubusercontent.com/40411714/88768185-abcf5980-d1b5-11ea-9ea7-b935b4c9a1fc.png)
    * AMCakc_Sub_3
      * ![image](https://user-images.githubusercontent.com/40411714/88768214-b7228500-d1b5-11ea-9a6b-c9c8f5a06cae.png)

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
    IF NOT EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where table_name='calcData' and column_name='basicCalcData')

    BEGIN

        ALTER TABLE calcData ADD basicCalcData nvarchar(max) NULL;

    END

    IF NOT EXISTS (select * from INFORMATION_SCHEMA.COLUMNS where table_name='CalcInfo' and column_name='defaultBasicCalcData')
    
    BEGIN
    
        ALTER TABLE CalcInfo ADD defaultBasicCalcData nvarchar(max) NULL;
    
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
    VALUES (0, N'Common Sticker ST', 'TQ_STICKER_ST_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "",  "후가공_HAKU_달러전환" : "", "후가공_HAKU_환율" : "", "후가공_HAKU_야리통수" : "", "후가공_HAKU_박지단가" : "", "후가공_HAKU_동판단가" : "", "후가공_HAKU_가공비기본" : "", "후가공_HAKU_세금" : "", "후가공_HAKU_박비용" : "",  "후가공_KATAOSI_달러전환" : "", "후가공_KATAOSI_환율" : "", "후가공_KATAOSI_야리통수" : "", "후가공_KATAOSI_박지단가" : "", "후가공_KATAOSI_동판단가" : "", "후가공_KATAOSI_가공비기본" : "", "후가공_KATAOSI_세금" : "", "후가공_KATAOSI_박비용" : "", "후가공_HOLE_달러전환" : "", "후가공_HOLE_환율" : "", "후가공_HOLE_타공기본금액" : ""}
                                                                , "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "",  "postProc_HAKU_CurrencyExchange" : "", "postProc_HAKU_ExchangeRate" : "", "postProc_HAKU_ProofCount" : "", "postProc_HAKU_FoilCost" : "", "postProc_HAKU_FoilingDieProductionCost" : "", "postProc_HAKU_BaseCost" : "", "postProc_HAKU_Tax" : "", "postProc_HAKU_FoilPrintingCost" : "",  "postProc_KATAOSI_CurrencyExchange" : "", "postProc_KATAOSI_ExchangeRate" : "", "postProc_KATAOSI_ProofCount" : "", "postProc_KATAOSI_FoilCost" : "", "postProc_KATAOSI_FoilingDieProductionCost" : "", "postProc_KATAOSI_BaseCost" : "", "postProc_KATAOSI_Tax" : "", "postProc_KATAOSI_FoilPrintingCost" : "", "postProc_HOLE_CurrencyExchange" : "", "postProc_HOLE_ExchangeRate" : "", "postProc_HOLE_CostPerHolePunch" : "" }
                                                                , "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "",  "後加工_HAKU_外貨変換" : "", "後加工_HAKU_為替レート" : "", "後加工_HAKU_ヤレ紙ロール数" : "", "後加工_HAKU_ホイル単価" : "", "後加工_HAKU_銅版単価" : "", "後加工_HAKU_加工費基本" : "", "後加工_HAKU_税金" : "", "後加工_HAKU_箔費用" : "",  "後加工_KATAOSI_外貨変換" : "", "後加工_KATAOSI_為替レート" : "", "後加工_KATAOSI_ヤレ紙ロール数" : "", "後加工_KATAOSI_ホイル単価" : "", "後加工_KATAOSI_銅版単価" : "", "後加工_KATAOSI_加工費基本" : "", "後加工_KATAOSI_税金" : "", "後加工_KATAOSI_箔費用" : "", "後加工_HOLE_外貨変換" : "", "後加工_HOLE_為替レート" : "", "後加工_HOLE_穴加工基本料金" : "" }
                                                                , "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "",  "加工_HAKU_货币兑换" : "", "加工_HAKU_汇率" : "", "加工_HAKU_废弃_印刷纸卷数" : "", "加工_HAKU_烫金单价" : "", "加工_HAKU_铜板单价" : "", "加工_HAKU_加工基本费用" : "", "加工_HAKU_消费税率" : "", "加工_HAKU_烫金费用" : "",  "加工_KATAOSI_货币兑换" : "", "加工_KATAOSI_汇率" : "", "加工_KATAOSI_废弃_印刷纸卷数" : "", "加工_KATAOSI_烫金单价" : "", "加工_KATAOSI_铜板单价" : "", "加工_KATAOSI_加工基本费用" : "", "加工_KATAOSI_消费税率" : "", "加工_KATAOSI_烫金费用" : "", "加工_HOLE_货币兑换" : "", "加工_HOLE_汇率" : "", "加工_HOLE_打孔基本费用" : "" }}', NULL, NULL)
    ```
    
  * CalcInfo SS

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES(0, N'Common Sticker SS', 'TQ_STICKER_SS_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "",  "후가공_HAKU_달러전환" : "", "후가공_HAKU_환율" : "", "후가공_HAKU_야리통수" : "", "후가공_HAKU_박지단가" : "", "후가공_HAKU_동판단가" : "", "후가공_HAKU_가공비기본" : "", "후가공_HAKU_세금" : "", "후가공_HAKU_박비용" : "",  "후가공_KATAOSI_달러전환" : "", "후가공_KATAOSI_환율" : "", "후가공_KATAOSI_야리통수" : "", "후가공_KATAOSI_박지단가" : "", "후가공_KATAOSI_동판단가" : "", "후가공_KATAOSI_가공비기본" : "", "후가공_KATAOSI_세금" : "", "후가공_KATAOSI_박비용" : "", "후가공_HOLE_달러전환" : "", "후가공_HOLE_환율" : "", "후가공_HOLE_타공기본금액" : "", "도무송기본형단가" : "", "도무송특수형단가" : "", "도무송기본매수" : "" }
                                                            , "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "",  "postProc_HAKU_CurrencyExchange" : "", "postProc_HAKU_ExchangeRate" : "", "postProc_HAKU_ProofCount" : "", "postProc_HAKU_FoilCost" : "", "postProc_HAKU_FoilingDieProductionCost" : "", "postProc_HAKU_BaseCost" : "", "postProc_HAKU_Tax" : "", "postProc_HAKU_FoilPrintingCost" : "",  "postProc_KATAOSI_CurrencyExchange" : "", "postProc_KATAOSI_ExchangeRate" : "", "postProc_KATAOSI_ProofCount" : "", "postProc_KATAOSI_FoilCost" : "", "postProc_KATAOSI_FoilingDieProductionCost" : "", "postProc_KATAOSI_BaseCost" : "", "postProc_KATAOSI_Tax" : "", "postProc_KATAOSI_FoilPrintingCost" : "", "postProc_HOLE_CurrencyExchange" : "", "postProc_HOLE_ExchangeRate" : "", "postProc_HOLE_CostPerHolePunch" : "", "priceForStandardCutShapes" : "", "priceForCustomCutShape" : "", "baseStickerCountPerSheet" : "" }
                                                            , "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "",  "後加工_HAKU_外貨変換" : "", "後加工_HAKU_為替レート" : "", "後加工_HAKU_ヤレ紙ロール数" : "", "後加工_HAKU_ホイル単価" : "", "後加工_HAKU_銅版単価" : "", "後加工_HAKU_加工費基本" : "", "後加工_HAKU_税金" : "", "後加工_HAKU_箔費用" : "",  "後加工_KATAOSI_外貨変換" : "", "後加工_KATAOSI_為替レート" : "", "後加工_KATAOSI_ヤレ紙ロール数" : "", "後加工_KATAOSI_ホイル単価" : "", "後加工_KATAOSI_銅版単価" : "", "後加工_KATAOSI_加工費基本" : "", "後加工_KATAOSI_税金" : "", "後加工_KATAOSI_箔費用" : "", "後加工_HOLE_外貨変換" : "", "後加工_HOLE_為替レート" : "", "後加工_HOLE_穴加工基本料金" : "", "トムソン基本型単価" : "", "トムソン特殊型単価" : "", "トムソン基本枚数" : "" }
                                                            , "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "",  "加工_HAKU_货币兑换" : "", "加工_HAKU_汇率" : "", "加工_HAKU_废弃_印刷纸卷数" : "", "加工_HAKU_烫金单价" : "", "加工_HAKU_铜板单价" : "", "加工_HAKU_加工基本费用" : "", "加工_HAKU_消费税率" : "", "加工_HAKU_烫金费用" : "",  "加工_KATAOSI_货币兑换" : "", "加工_KATAOSI_汇率" : "", "加工_KATAOSI_废弃_印刷纸卷数" : "", "加工_KATAOSI_烫金单价" : "", "加工_KATAOSI_铜板单价" : "", "加工_KATAOSI_加工基本费用" : "", "加工_KATAOSI_消费税率" : "", "加工_KATAOSI_烫金费用" : "", "加工_HOLE_货币兑换" : "", "加工_HOLE_汇率" : "", "加工_HOLE_打孔基本费用" : "", "基本形刀版单价" : "", "特殊形刀版单价" : "", "刀版基本张数" : "" }}', NULL, NULL)
    ```

  * CalcInfo SB

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES(0, N'Common Sticker SB', 'TQ_STICKER_SB_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "",  "후가공_HAKU_달러전환" : "", "후가공_HAKU_환율" : "", "후가공_HAKU_야리통수" : "", "후가공_HAKU_박지단가" : "", "후가공_HAKU_동판단가" : "", "후가공_HAKU_가공비기본" : "", "후가공_HAKU_세금" : "", "후가공_HAKU_박비용" : "",  "후가공_KATAOSI_달러전환" : "", "후가공_KATAOSI_환율" : "", "후가공_KATAOSI_야리통수" : "", "후가공_KATAOSI_박지단가" : "", "후가공_KATAOSI_동판단가" : "", "후가공_KATAOSI_가공비기본" : "", "후가공_KATAOSI_세금" : "", "후가공_KATAOSI_박비용" : "", "후가공_HOLE_달러전환" : "", "후가공_HOLE_환율" : "", "후가공_HOLE_타공기본금액" : "", "최소제작비" : "", "간격" : "", "mmTocm" : "", "가격비율_기본형" : "", "가격비율_특수형" : "", "개별재단비YES" : "", "무게요율" : "", "기본매수" : "" }
                                                            , "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "",  "postProc_HAKU_CurrencyExchange" : "", "postProc_HAKU_ExchangeRate" : "", "postProc_HAKU_ProofCount" : "", "postProc_HAKU_FoilCost" : "", "postProc_HAKU_FoilingDieProductionCost" : "", "postProc_HAKU_BaseCost" : "", "postProc_HAKU_Tax" : "", "postProc_HAKU_FoilPrintingCost" : "",  "postProc_KATAOSI_CurrencyExchange" : "", "postProc_KATAOSI_ExchangeRate" : "", "postProc_KATAOSI_ProofCount" : "", "postProc_KATAOSI_FoilCost" : "", "postProc_KATAOSI_FoilingDieProductionCost" : "", "postProc_KATAOSI_BaseCost" : "", "postProc_KATAOSI_Tax" : "", "postProc_KATAOSI_FoilPrintingCost" : "", "postProc_HOLE_CurrencyExchange" : "", "postProc_HOLE_ExchangeRate" : "", "postProc_HOLE_CostPerHolePunch" : "", "minimumPrice" : "", "spacing" : "", "mmTocm" : "", "priceRateStandardShapes" : "", "priceRateCustomShapes" : "", "individualCutFees" : "", "shippingRateByWeight" : "", "minimumStickerCount" : "" }
                                                            , "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "",  "後加工_HAKU_外貨変換" : "", "後加工_HAKU_為替レート" : "", "後加工_HAKU_ヤレ紙ロール数" : "", "後加工_HAKU_ホイル単価" : "", "後加工_HAKU_銅版単価" : "", "後加工_HAKU_加工費基本" : "", "後加工_HAKU_税金" : "", "後加工_HAKU_箔費用" : "",  "後加工_KATAOSI_外貨変換" : "", "後加工_KATAOSI_為替レート" : "", "後加工_KATAOSI_ヤレ紙ロール数" : "", "後加工_KATAOSI_ホイル単価" : "", "後加工_KATAOSI_銅版単価" : "", "後加工_KATAOSI_加工費基本" : "", "後加工_KATAOSI_税金" : "", "後加工_KATAOSI_箔費用" : "", "後加工_HOLE_外貨変換" : "", "後加工_HOLE_為替レート" : "", "後加工_HOLE_穴加工基本料金" : "", "最小製作費" : "", "間隔" : "", "mmTocm" : "", "価格比率＿基本型" : "", "価格比率＿特殊型" : "", "個別裁断費YES" : "", "重量料率" : "", "基本枚数" : "" }
                                                            , "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "",  "加工_HAKU_货币兑换" : "", "加工_HAKU_汇率" : "", "加工_HAKU_废弃_印刷纸卷数" : "", "加工_HAKU_烫金单价" : "", "加工_HAKU_铜板单价" : "", "加工_HAKU_加工基本费用" : "", "加工_HAKU_消费税率" : "", "加工_HAKU_烫金费用" : "",  "加工_KATAOSI_货币兑换" : "", "加工_KATAOSI_汇率" : "", "加工_KATAOSI_废弃_印刷纸卷数" : "", "加工_KATAOSI_烫金单价" : "", "加工_KATAOSI_铜板单价" : "", "加工_KATAOSI_加工基本费用" : "", "加工_KATAOSI_消费税率" : "", "加工_KATAOSI_烫金费用" : "", "加工_HOLE_货币兑换" : "", "加工_HOLE_汇率" : "", "加工_HOLE_打孔基本费用" : "", "最低制作费用" : "", "间隔" : "", "mmTocm" : "", "价格比率_基本型" : "", "价格比率_特殊型" : "", "个别剪裁费用YES" : "", "重量费率" : "", "基本张数" : "" }}', NULL, NULL)
    ```

  * CalcInfo SE 

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES(0, N'Common Sticker SE', 'TQ_STICKER_SE_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "",  "후가공_HAKU_달러전환" : "", "후가공_HAKU_환율" : "", "후가공_HAKU_야리통수" : "", "후가공_HAKU_박지단가" : "", "후가공_HAKU_동판단가" : "", "후가공_HAKU_가공비기본" : "", "후가공_HAKU_세금" : "", "후가공_HAKU_박비용" : "",  "후가공_KATAOSI_달러전환" : "", "후가공_KATAOSI_환율" : "", "후가공_KATAOSI_야리통수" : "", "후가공_KATAOSI_박지단가" : "", "후가공_KATAOSI_동판단가" : "", "후가공_KATAOSI_가공비기본" : "", "후가공_KATAOSI_세금" : "", "후가공_KATAOSI_박비용" : "", "후가공_HOLE_달러전환" : "", "후가공_HOLE_환율" : "", "후가공_HOLE_타공기본금액" : "", "용지사이즈W" : "", "용지사이즈H" : "", "내외측" : "", "기본자리수" : "", "도당필름값" : "", "도당인쇄값" : "", "야리지" : "", "배달비용" : "", "무게요율" : "", "마진" : "" }
                                                            , "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "",  "postProc_HAKU_CurrencyExchange" : "", "postProc_HAKU_ExchangeRate" : "", "postProc_HAKU_ProofCount" : "", "postProc_HAKU_FoilCost" : "", "postProc_HAKU_FoilingDieProductionCost" : "", "postProc_HAKU_BaseCost" : "", "postProc_HAKU_Tax" : "", "postProc_HAKU_FoilPrintingCost" : "",  "postProc_KATAOSI_CurrencyExchange" : "", "postProc_KATAOSI_ExchangeRate" : "", "postProc_KATAOSI_ProofCount" : "", "postProc_KATAOSI_FoilCost" : "", "postProc_KATAOSI_FoilingDieProductionCost" : "", "postProc_KATAOSI_BaseCost" : "", "postProc_KATAOSI_Tax" : "", "postProc_KATAOSI_FoilPrintingCost" : "", "postProc_HOLE_CurrencyExchange" : "", "postProc_HOLE_ExchangeRate" : "", "postProc_HOLE_CostPerHolePunch" : "", "materialWidth" : "", "materialHeight" : "", "stickerMargin" : "", "stickersPerSheet" : "", "filmPricePerColor" : "", "printingPricePerColor" : "", "proofCount" : "", "shippingCosts" : "", "shippingRateByWeight" : "", "priceMargin" : "" }
                                                            , "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "",  "後加工_HAKU_外貨変換" : "", "後加工_HAKU_為替レート" : "", "後加工_HAKU_ヤレ紙ロール数" : "", "後加工_HAKU_ホイル単価" : "", "後加工_HAKU_銅版単価" : "", "後加工_HAKU_加工費基本" : "", "後加工_HAKU_税金" : "", "後加工_HAKU_箔費用" : "",  "後加工_KATAOSI_外貨変換" : "", "後加工_KATAOSI_為替レート" : "", "後加工_KATAOSI_ヤレ紙ロール数" : "", "後加工_KATAOSI_ホイル単価" : "", "後加工_KATAOSI_銅版単価" : "", "後加工_KATAOSI_加工費基本" : "", "後加工_KATAOSI_税金" : "", "後加工_KATAOSI_箔費用" : "", "後加工_HOLE_外貨変換" : "", "後加工_HOLE_為替レート" : "", "後加工_HOLE_穴加工基本料金" : "", "用紙サイズ_幅" : "", "用紙サイズ_高さ" : "", "内外側" : "", "基本桁数" : "", "1色毎フィルム料金" : "", "1色毎印刷料金" : "", "ヤレ紙" : "", "国内送料" : "", "海外運送費" : "", "マージン" : "" }
                                                            , "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "",  "加工_HAKU_货币兑换" : "", "加工_HAKU_汇率" : "", "加工_HAKU_废弃_印刷纸卷数" : "", "加工_HAKU_烫金单价" : "", "加工_HAKU_铜板单价" : "", "加工_HAKU_加工基本费用" : "", "加工_HAKU_消费税率" : "", "加工_HAKU_烫金费用" : "",  "加工_KATAOSI_货币兑换" : "", "加工_KATAOSI_汇率" : "", "加工_KATAOSI_废弃_印刷纸卷数" : "", "加工_KATAOSI_烫金单价" : "", "加工_KATAOSI_铜板单价" : "", "加工_KATAOSI_加工基本费用" : "", "加工_KATAOSI_消费税率" : "", "加工_KATAOSI_烫金费用" : "", "加工_HOLE_货币兑换" : "", "加工_HOLE_汇率" : "", "加工_HOLE_打孔基本费用" : "", "用纸尺寸W" : "", "用纸尺寸H" : "", "内外侧" : "", "基本排版数" : "", "1色印刷胶卷费用" : "", "1色印刷费用" : "", "多余印刷张数" : "", "国内运费" : "", "海外运输费" : "", "成本" : "" }}', NULL, NULL)
    ```
    
  * CalcInfo PD 01

    ``` sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES(0, N'Common Sticker PD 01', 'TQ_STICKER_PD_01', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "",  "후가공_HAKU_달러전환" : "", "후가공_HAKU_환율" : "", "후가공_HAKU_야리통수" : "", "후가공_HAKU_박지단가" : "", "후가공_HAKU_동판단가" : "", "후가공_HAKU_가공비기본" : "", "후가공_HAKU_세금" : "", "후가공_HAKU_박비용" : "",  "후가공_KATAOSI_달러전환" : "", "후가공_KATAOSI_환율" : "", "후가공_KATAOSI_야리통수" : "", "후가공_KATAOSI_박지단가" : "", "후가공_KATAOSI_동판단가" : "", "후가공_KATAOSI_가공비기본" : "", "후가공_KATAOSI_세금" : "", "후가공_KATAOSI_박비용" : "", "후가공_HOLE_달러전환" : "", "후가공_HOLE_환율" : "", "후가공_HOLE_타공기본금액" : "", "무게요율" : "", "마진" : "", "필름원" : "", "수지원" : "", "수지간격" : "", "사이드간격" : "", "스티커간격" : "", "야리통수" : "", "통인쇄비" : "", "기본통수" : "" }
                                                                , "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "",  "postProc_HAKU_CurrencyExchange" : "", "postProc_HAKU_ExchangeRate" : "", "postProc_HAKU_ProofCount" : "", "postProc_HAKU_FoilCost" : "", "postProc_HAKU_FoilingDieProductionCost" : "", "postProc_HAKU_BaseCost" : "", "postProc_HAKU_Tax" : "", "postProc_HAKU_FoilPrintingCost" : "",  "postProc_KATAOSI_CurrencyExchange" : "", "postProc_KATAOSI_ExchangeRate" : "", "postProc_KATAOSI_ProofCount" : "", "postProc_KATAOSI_FoilCost" : "", "postProc_KATAOSI_FoilingDieProductionCost" : "", "postProc_KATAOSI_BaseCost" : "", "postProc_KATAOSI_Tax" : "", "postProc_KATAOSI_FoilPrintingCost" : "", "postProc_HOLE_CurrencyExchange" : "", "postProc_HOLE_ExchangeRate" : "", "postProc_HOLE_CostPerHolePunch" : "", "shippingRateByWeight" : "", "priceMargin" : "", "filmCost" : "", "plateCost" : "", "plateSpacing" : "", "spacingFromEdges" : "", "stickerSpacing" : "", "proofCount" : "", "costPerRoll" : "", "rollCount" : "" }
                                                                , "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "",  "後加工_HAKU_外貨変換" : "", "後加工_HAKU_為替レート" : "", "後加工_HAKU_ヤレ紙ロール数" : "", "後加工_HAKU_ホイル単価" : "", "後加工_HAKU_銅版単価" : "", "後加工_HAKU_加工費基本" : "", "後加工_HAKU_税金" : "", "後加工_HAKU_箔費用" : "",  "後加工_KATAOSI_外貨変換" : "", "後加工_KATAOSI_為替レート" : "", "後加工_KATAOSI_ヤレ紙ロール数" : "", "後加工_KATAOSI_ホイル単価" : "", "後加工_KATAOSI_銅版単価" : "", "後加工_KATAOSI_加工費基本" : "", "後加工_KATAOSI_税金" : "", "後加工_KATAOSI_箔費用" : "", "後加工_HOLE_外貨変換" : "", "後加工_HOLE_為替レート" : "", "後加工_HOLE_穴加工基本料金" : "", "重量率" : "", "マージン" : "", "フィルムコスト" : "", "印刷版コスト" : "", "印刷版の間隔" : "", "左右の間隔" : "", "ステッカーの間隔" : "", "ヤレ紙ロール数" : "", "ロール印刷費" : "", "基本ロール数" : "" }
                                                                , "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "",  "加工_HAKU_货币兑换" : "", "加工_HAKU_汇率" : "", "加工_HAKU_废弃_印刷纸卷数" : "", "加工_HAKU_烫金单价" : "", "加工_HAKU_铜板单价" : "", "加工_HAKU_加工基本费用" : "", "加工_HAKU_消费税率" : "", "加工_HAKU_烫金费用" : "",  "加工_KATAOSI_货币兑换" : "", "加工_KATAOSI_汇率" : "", "加工_KATAOSI_废弃_印刷纸卷数" : "", "加工_KATAOSI_烫金单价" : "", "加工_KATAOSI_铜板单价" : "", "加工_KATAOSI_加工基本费用" : "", "加工_KATAOSI_消费税率" : "", "加工_KATAOSI_烫金费用" : "", "加工_HOLE_货币兑换" : "", "加工_HOLE_汇率" : "", "加工_HOLE_打孔基本费用" : "", "重量费率" : "", "成本" : "", "印版成本" : "", "印刷版费用" : "", "印刷版间隔" : "", "左右间隔" : "", "贴纸间隔" : "", "废弃_印刷纸卷数" : "", "印刷费" : "", "基本卷数" : "" }}', NULL, NULL)
    ```
    
  * CalcInfo PD 02

    ```sql
    INSERT INTO [dbo].[CalcInfo]([joinerId], [name], [code], [template], [goodsSizeInput], [tmp_id])
    VALUES(0, N'Common Sticker PD 02', 'TQ_STICKER_PD_02', N'{"KR" : {"환율" : "", "소비세율" : "", "타공기본금액" : "", "달러전환" : "",  "후가공_HAKU_달러전환" : "", "후가공_HAKU_환율" : "", "후가공_HAKU_야리통수" : "", "후가공_HAKU_박지단가" : "", "후가공_HAKU_동판단가" : "", "후가공_HAKU_가공비기본" : "", "후가공_HAKU_세금" : "", "후가공_HAKU_박비용" : "",  "후가공_KATAOSI_달러전환" : "", "후가공_KATAOSI_환율" : "", "후가공_KATAOSI_야리통수" : "", "후가공_KATAOSI_박지단가" : "", "후가공_KATAOSI_동판단가" : "", "후가공_KATAOSI_가공비기본" : "", "후가공_KATAOSI_세금" : "", "후가공_KATAOSI_박비용" : "", "후가공_HOLE_달러전환" : "", "후가공_HOLE_환율" : "", "후가공_HOLE_타공기본금액" : "", "마진" : "", "원단가격" : "", "원단폭" : "", "야리지길이" : "", "사이드간격" : "", "스티커간격" : "", "여분매수" : "", "기본통수" : "", "재단비용" : "", "통인쇄비" : "", "인쇄비기본" : "", "인쇄기본통수" : "", "원단무게" : "" }
                                                                , "EN" : {"exchangeRate" : "", "dutyRate" : "", "costPerHolePunch" : "", "currencyExhange" : "",  "postProc_HAKU_CurrencyExchange" : "", "postProc_HAKU_ExchangeRate" : "", "postProc_HAKU_ProofCount" : "", "postProc_HAKU_FoilCost" : "", "postProc_HAKU_FoilingDieProductionCost" : "", "postProc_HAKU_BaseCost" : "", "postProc_HAKU_Tax" : "", "postProc_HAKU_FoilPrintingCost" : "",  "postProc_KATAOSI_CurrencyExchange" : "", "postProc_KATAOSI_ExchangeRate" : "", "postProc_KATAOSI_ProofCount" : "", "postProc_KATAOSI_FoilCost" : "", "postProc_KATAOSI_FoilingDieProductionCost" : "", "postProc_KATAOSI_BaseCost" : "", "postProc_KATAOSI_Tax" : "", "postProc_KATAOSI_FoilPrintingCost" : "", "postProc_HOLE_CurrencyExchange" : "", "postProc_HOLE_ExchangeRate" : "", "postProc_HOLE_CostPerHolePunch" : "", "priceMargin" : "", "materialCosts" : "", "materialWidth" : "", "proofingLength" : "", "spacingFromEdges" : "", "stickerSpacing" : "", "excessPrintCount" : "", "baseRollCount" : "", "cuttingFees" : "", "costPerRoll" : "", "basePrintingFee" : "", "basePrintingRollCount" : "", "materialWeight" : "" }
                                                                , "JP" : {"為替レート" : "", "消費税率" : "", "穴加工基本料金" : "", "外貨変換" : "",  "後加工_HAKU_外貨変換" : "", "後加工_HAKU_為替レート" : "", "後加工_HAKU_ヤレ紙ロール数" : "", "後加工_HAKU_ホイル単価" : "", "後加工_HAKU_銅版単価" : "", "後加工_HAKU_加工費基本" : "", "後加工_HAKU_税金" : "", "後加工_HAKU_箔費用" : "",  "後加工_KATAOSI_外貨変換" : "", "後加工_KATAOSI_為替レート" : "", "後加工_KATAOSI_ヤレ紙ロール数" : "", "後加工_KATAOSI_ホイル単価" : "", "後加工_KATAOSI_銅版単価" : "", "後加工_KATAOSI_加工費基本" : "", "後加工_KATAOSI_税金" : "", "後加工_KATAOSI_箔費用" : "", "後加工_HOLE_外貨変換" : "", "後加工_HOLE_為替レート" : "", "後加工_HOLE_穴加工基本料金" : "", "マージン" : "", "生地価格" : "", "生地幅" : "", "ヤレ紙長さ" : "", "左右の間隔" : "", "ステッカーの間隔" : "", "余分枚数" : "", "基本ロール数" : "", "裁断費用" : "", "ロール印刷費" : "", "印刷費基本" : "", "印刷基本ロール数" : "", "生地重さ" : "" }
                                                                , "CN" : {"汇率" : "", "消费税率" : "", "打孔基本金额" : "", "货币兑换" : "",  "加工_HAKU_货币兑换" : "", "加工_HAKU_汇率" : "", "加工_HAKU_废弃_印刷纸卷数" : "", "加工_HAKU_烫金单价" : "", "加工_HAKU_铜板单价" : "", "加工_HAKU_加工基本费用" : "", "加工_HAKU_消费税率" : "", "加工_HAKU_烫金费用" : "",  "加工_KATAOSI_货币兑换" : "", "加工_KATAOSI_汇率" : "", "加工_KATAOSI_废弃_印刷纸卷数" : "", "加工_KATAOSI_烫金单价" : "", "加工_KATAOSI_铜板单价" : "", "加工_KATAOSI_加工基本费用" : "", "加工_KATAOSI_消费税率" : "", "加工_KATAOSI_烫金费用" : "", "加工_HOLE_货币兑换" : "", "加工_HOLE_汇率" : "", "加工_HOLE_打孔基本费用" : "", "成本" : "", "材质单价" : "", "材质宽度" : "", "废弃_印刷纸长" : "", "左右间隔" : "", "贴纸间隔" : "", "多余张数" : "", "基本卷数" : "", "切割费用" : "", "卷筒印刷费" : "", "基本印刷费用" : "", "印刷基本卷数" : "", "材质重量" : "" }}', NULL, NULL)
    ```

  * calcInfo.defaultBasicData 에 싱가폴 BasicCalcData_SG.txt의 각각 ST01, SS01, SB01, SE01, PD01, PD02 의 컨텐츠 Update

    * ![image](https://user-images.githubusercontent.com/40411714/90717166-e70f0500-e2e9-11ea-852f-f204edfe2085.png)

* calcData 데이터 변경 쿼리

  * CalcData ST

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000 }', '', NULL, NULL)        
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 02', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100", 후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 03', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 04', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 05', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 06', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000 }', '', NULL, NULL)  
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01'), N'Common Sticker ST 07', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000 }', '', NULL, NULL) 
    ```

  * CalcData SS

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 02', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 03', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 04', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 05', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 06', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01'), N'Common Sticker SS 07', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "도무송기본형단가" : 10000, "도무송특수형단가" : 15000, "도무송기본매수" : 500 }','', NULL, NULL)
    ```

  * CalcData SB

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SB_01'), N'Common Sticker SB 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "최소제작비" : 50000, "간격" : 5, "mmTocm" : 100, "가격비율_기본형" : 10, "가격비율_특수형" : 12, "개별재단비YES" : 200, "무게요율" : 1.0, "기본매수" : 1000 }', '', NULL, NULL)
    ```

  * CalcData SE

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SE_01'), N'Common Sticker SE 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "용지사이즈W" : 450, "용지사이즈H" : 370, "내외측" : 14, "기본자리수" : 12, "도당필름값" : 10000, "도당인쇄값" : 300, "야리지" : 100, "배달비용" : 10000, "무게요율" : 0.0003, "마진" : 0.5 }', '', NULL, NULL)
    ```

  * CalcData AU SE

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SE_01'), N'Common Sticker SE 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "용지사이즈W" : 450, "용지사이즈H" : 370, "내외측" : 14, "기본자리수" : 12, "도당필름값" : 10000, "도당인쇄값" : 300, "야리지" : 100, "배달비용" : 10000, "무게요율" : 0.0003, "마진" : 1.0 }', '', NULL, NULL)
    ```

  * CalcData PD 01

    ``` SQL
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_01'), N'Common Sticker PD 01', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "무게요율" : 0.0002, "마진" : 0.5, "필름원" : 10000, "수지원" : 100, "수지간격" : 50, "사이드간격" : 10, "스티커간격" : 5, "야리통수" : 2000, "통인쇄비" : 15, "기본통수" : 3000 }', '', NULL, NULL)  
    ```

  * CalcData PD 02

    ``` sql
    INSERT INTO [dbo].[CalcData]([calcInfoId], [name], [contents], [priceTableInfo], [goodsSizeInput], [tmp_id])
    VALUES((SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_PD_02'), N'Common Sticker PD 02', N'{"환율" : 800, "소비세율" : 1.07, "타공기본금액" : 35000, "달러전환" : 100, "후가공_HAKU_달러전환" : 100, "후가공_HAKU_환율" : 800, "후가공_HAKU_야리통수" : 2000, "후가공_HAKU_박지단가" : 0.2, "후가공_HAKU_동판단가" : 250, "후가공_HAKU_가공비기본" : 100000, "후가공_HAKU_세금" : 1.07, "후가공_HAKU_박비용" : 0.5,  "후가공_KATAOSI_달러전환" : 100, "후가공_KATAOSI_환율" : 800, "후가공_KATAOSI_야리통수" : 2000, "후가공_KATAOSI_박지단가" : 0.2, "후가공_KATAOSI_동판단가" : 250, "후가공_KATAOSI_가공비기본" : 100000, "후가공_KATAOSI_세금" : 1.07, "후가공_KATAOSI_박비용" : 0.5, "후가공_HOLE_달러전환" : 100, "후가공_HOLE_환율" : 800, "후가공_HOLE_타공기본금액" : 35000, "마진" : 0.3, "원단가격" : 3500, "원단폭" : 230, "야리지길이" : 150, "사이드간격" : 20, "스티커간격" : 5, "여분매수" : 500, "기본통수" : 2000, "재단비용" : 50000, "통인쇄비" : 120, "인쇄비기본" : 180000, "인쇄기본통수" : 2000, "원단무게" : 0.025  }', '', NULL, NULL) 
    ```
    
  * calcData.basicCalcData에 아래의 calcData.basicCalcData 데이터 변경쿼리의 내용들을 적용

    * ![image](https://user-images.githubusercontent.com/40411714/90717242-1c1b5780-e2ea-11ea-9c14-7ca034922f57.png)

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
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01' )
                        AND       [name] = 'Common Sticker ST 01' ) 
    WHERE strCategoryCodePath = '06ST01'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                    AND           [name] = 'Common Sticker ST 01'  )  
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06ST01')
    ```
  
  * ST 02
    
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 02'  ) 
    WHERE strCategoryCodePath = '06ST02'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 02' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06ST02')
    ```
    
  * ST 03
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 03' ) 
    WHERE strCategoryCodePath = '06ST03'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 03' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06ST03')
    ```
  
  * ST 04
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 04' ) 
    WHERE strCategoryCodePath = '06ST04'

    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 04' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06ST04')
    ```
  
  * ST 05
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 05' ) 
    WHERE strCategoryCodePath = '06ST05'

    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 05' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06ST05')
    ```
  
  * ST 06
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 06' )
    WHERE strCategoryCodePath = '06ST06'

    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 06' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06ST06')
    ```
  
  * ST 07
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 07' ) 
    WHERE strCategoryCodePath = '06ST07'

    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_ST_01')
                        AND       [name] = 'Common Sticker ST 07' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06ST07')
    ```
  
  * SS 01
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 01' ) 
    WHERE strCategoryCodePath = '06SS01'

    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 01' )  
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS01')
    ```
  
  * SS 02
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 02' ) 
    WHERE strCategoryCodePath = '06SS02'

    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 02' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS02')
    ```
  
  * SS 03
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 03' ) 
    WHERE strCategoryCodePath = '06SS03'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 03' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS03')
    ```
  
  * SS 04
  
    ``` sql
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 04' ) 
    WHERE strCategoryCodePath = '06SS04'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 04' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS04')
    ```
  
  * SS 05
  
    ``` SQL
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 05' )
    WHERE strCategoryCodePath = '06SS05'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 05' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS05')
    ```
  
  * SS 06
  
    ``` SQL
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 06' )
    WHERE strCategoryCodePath = '06SS06'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 06' )
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS06')
    ```
  
  * SS 07
  
    ``` SQL
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 07' ) 
    WHERE strCategoryCodePath = '06SS07'
    
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SS_01')
                        AND       [name] = 'Common Sticker SS 07' ) 
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SS07')
    ```
  
  * SB 01
  
    ``` SQL
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SB_01' ) ) 
    WHERE strCategoryCodePath = '06SB01' AND orderType = 'ETYPE'
    
  
    UPDATE partnerGoods 
    SET  orderType = 'FTYPE' 
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SB_01' ) )  
    WHERE id = (SELECT partnerGoodsId FROM tblGoods with(nolock) WHERE strCategoryCodePath = '06SB01' AND orderType = 'FTYPE')
    ```
  
  * SE 01
  
    ``` SQL
    UPDATE tblGoods 
    SET  orderType = 'FTYPE'
    ,    calcDataId = ( SELECT    id 
                        FROM      CalcData with(nolock) 
                        WHERE     calcInfoId = (SELECT id FROM CalcInfo with(nolock) WHERE [code] = 'TQ_STICKER_SE_01' ) ) 
    WHERE strCategoryCodePath IN ('06SE01', '06SE02') AND orderType = 'ETYPE'
    
  
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
  
  * 아래 select를 실행하여 FTYPE이 존재하는지 확인
  
    * ``` sql
      select a.*,b.strCodeTypeEng from tblCode a 
      inner join tblCodeType b on a.intCodeTypeNum = b.intCodeTypeNum 
      WHERE b.strCodeTypeEng = 'orderType' AND a.strState='REG'
      ```
  
  * FTYPE이 존재하지 않으면 아래를 실행하여 추가
  
    * ``` sql
      INSERT INTO tblCode ( intCodeTypeNum, strCodeNameEng, strCodeName, strCodeNameJP, strState, strCodeNameCN)
      VALUES (25, 'FTYPE', N'계산식(수량선택)', 'FTYPE', 'REG', 'FTYPE')
      ```
  
  * calcInfo 데이터 추가
  
  * CalcData 데이터 추가
  
  * tblGoods & partnerGoods 에서 스티커 상품 orderType 변경 (FType)
  
  * tblGoods & partnerGoods 에서 calcDataId 맞춰 줌
  
  * 테스트 실행
  
  * JSON 데이터 입력시 [] (배열) 처리 잘 확인해야함.
  
  * AMCalc_Sub_1, AMCalc_Sub_2, AMCalc_Sub_3 앞에 첨부된 신규 파일로 변경
    * [후가공_AMCalc_Sub_1_HAKU](/pages/devguide/webProject/tqoon2/formula/aftermake/AMCalc_Sub_1_HAKU.html) 
    * [후가공_AMCalc_Sub_1_HAKU_New2](/pages/devguide/webProject/tqoon2/formula/aftermake/AMCalc_Sub_1_HAKU_New2.html) 
    * [후가공_AMCalc_Sub_2_KATAOSI](/pages/devguide/webProject/tqoon2/formula/aftermake/AMCalc_Sub_2_KATAOSI.html) 
    * [후가공_AMCalc_Sub_2_KATAOSI_New2](/pages/devguide/webProject/tqoon2/formula/aftermake/AMCalc_Sub_2_KATAOSI_New2.html) 
    * [후가공_AMCalc_Sub_3_HOLE](/pages/devguide/webProject/tqoon2/formula/aftermake/AMCalc_Sub_3_HOLE.html) 
    * [후가공_AMCalc_Sub_3_HOLE_new2](/pages/devguide/webProject/tqoon2/formula/aftermake/AMCalc_Sub_3_HOLE_New2.html) 
    
  * 프로그램내에 변수 기본값 국가에 맞게 수정
    
    * ![image](https://user-images.githubusercontent.com/40411714/88866935-049b0280-d247-11ea-92d0-f417d6928ebe.png)
    
  * 후가공 정보 등록
  
    * ```sql
      -- tblAfterMake 데이터 추가
      INSERT INTO tblAfterMake (intCateGoryNum, strAfMakeName, strAfMakeNameEng, strAfMakeNameJP, strState, datRegDate)
      VALUES (40710, N'타공', N'HOLE', N'Hole Punching', 'REG', getDate())
      
      INSERT INTO tblAfterMake (intCateGoryNum, strAfMakeName, strAfMakeNameEng, strAfMakeNameJP, strState, datRegDate)
      VALUES (40710, N'박가공', N'HAKU', N'Foil', 'REG', getDate())
      
      INSERT INTO tblAfterMake (intCateGoryNum, strAfMakeName, strAfMakeNameEng, strAfMakeNameJP, strState, datRegDate)
      VALUES (40710, N'형압가공', N'KATAOSI', N'Emboss', 'REG', getDate())
      
      INSERT AfterMakeCalcInfo (joinerId, name, code, template, sizeInput)
      VALUES (15, N'스티커후가공-넓이높이-박가공', '01', '{}', '{"widthLeaf":"","heightLeaf":""}')
      
      -- AfterMakeCalcInfo 데이터 추가
      INSERT AfterMakeCalcInfo (joinerId, name, code, template, sizeInput)
      VALUES (15, N'스티커후가공-넓이높이-형압', '02', '{}', '{"widthPress":"","heightPress":""}')
      
      INSERT AfterMakeCalcInfo (joinerId, name, code, template, sizeInput)
      VALUES (15, N'스티커후가공-타공', '03', '', '')
      
      INSERT AfterMakeCalcData (calcInfoId, name, contents, sizeInput)
      VALUES (1, N'스티커후가공-넓이높이-박가공', '{}', '{"widthLeaf":"Width(mm)","heightLeaf":"Height(mm)"}')
      
      INSERT AfterMakeCalcData (calcInfoId, name, contents, sizeInput)
      VALUES (2, N'스티커후가공-넓이높이-형압', '{}', '{"widthPress":"Width(mm)","heightPress":"Height(mm)"}')
      
      INSERT AfterMakeCalcData (calcInfoId, name, contents, sizeInput)
      VALUES (3, N'스티커후가공-타공', '{}', '')
      
      -- tblAfterMakePrice 데이터 추가
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (7, 'one', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 3)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (7, 'two', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 3)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Gold gloss', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Gold matt', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Silver gloss', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Silver matt', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Red', 0, 0, 1, 1, 0, 0, 'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Blue', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Green', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Black', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Hologram Gold gloss ', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (8, 'Hologram Silver gloss', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 1)
      
      INSERT INTO tblAfterMakePrice (intAfterMakeNum, strAfMakeType, intWidth, intHeight, intSellCount, intAFMakePrice, intFormPrice, intPrintPrice, strState, datRegDate, intStep, afterMakeCalcDataId)
      VALUES (9, 'Embossing', 0, 0, 1, 1, 0, 0,  'REG', getDate(), NULL, 2)
      ```