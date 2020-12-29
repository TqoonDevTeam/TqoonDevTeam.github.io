---
title: "PB 중계 시스템"
description: "문서 설명"
tags: [개발가이드, 템플릿 ]
---

# Payment Gateway Bridge
PG 사가 추가될 때마다 복잡해지는 라이브러리 해결 및 참조 충돌 해결을 위해 티쿤 시스템과 분리된 별도 API 서버에서 PG와 통신할 수 있도로 구성된 시스템
PGB 서버는 티쿤 시스템과 분리되서 PGB 는 티쿤을 모르도록, 티쿤은 PG 를 모르도록 개발
공통 모듈 사용을 위해 티쿤 라이브러리를 참조 하지만 직접 서비스 로직을 호출 하지 않음


## PGB 시스템 구성도
![image](https://user-images.githubusercontent.com/12683073/103264460-11867280-49ee-11eb-88af-ec4ed2804d1b.png)

1. 결제 시작시 티쿤 시스템은 PGB 에 결제 시작 요청 후 응답 데이터로 페이지 이동
2. PGB 페이지, 혹은 PG 페이지에서 결제 완료
3. 결제 완료 처리는 PGB 에서 확인해서 pg.tqoon.com 에서 입금 완료 처리
4. 취소시 티쿤 시스템에서 PGB 에 취소 요청, PGB 에서 PG로 취소 요청, 결과 값을 티쿤 시스템에 전달.

## PGB 서버에서 구현해야 하는 API 인터페이스

### 결제 시작

| Method | Url | 설명 |
| --- | --- | --- |
| Post | /PGB/PayStart | 결제 정보를 전송하고 결과를 가지고 온다 |

#### Request
```json
{
  "DBType" : "",
  "OrderId" : 123456,
  "PayType" : "TELEGRAM_CARD_REQUEST",
  "TotalPrice" : "499.99"
}
```

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| DBType | String | AD / OM DB 타입을 받아서 처리할지 여부는 추후 다시 판단해볼 필요 있음 |
| OrderId | Int | 주문번호 |
| PayType | String | 결제 종별 |
| TotalPrice | String | 결제 금액 |

#### Response
```json
{
  "IsSuccess" : true,
  "ErrorMessage" : "접속오류",
  "Type" : "PAGEPOPUP",
  "RedirectUrl" : "https://api.pg.com/transaction/hosted-payment?token=83sasdfjkh223fsDF234G2957" 
}
```

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| IsSuccess | Boolean | 성공 여부 |
| ErrorMessage | String | 실패 메세지 |
| Type | String | 결제 처리 결과, 결제 페이지 팝업 : PAGEPOPUP, 나머지는 미구현 |
| RedirectUrl | String | PAGEPOPUP Type 일때 대상 Url |



### 부분 취소

| Method | Url | 설명 |
| --- | --- | --- |
| Post | /PGB/PartialCancel | 주문 금액의 일부분을 환불 처리한다. |

#### Request
```json
{
  "DBType" : "AD",
  "OrderId" : 123456,
  "RefundPrice" : "99.99",
  "CurrentTotalPrice" : "499.99",
  "ModifedTotalPrice" : "400.00"
}
```

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| DBType | String | AD / OM DB 타입을 받아서 처리할지 여부는 추후 다시 판단해볼 필요 있음 |
| OrderId | Int | 주문번호 |
| RefundPrice | String | 환불 금액 |
| CurrentTotalPrice | String | 환불 전 금액 |
| ModifedTotalPrice | String | 환불 후 금액 |

#### Response
200 OK / 400 Error



### 전체 취소

| Method | Url | 설명 |
| --- | --- | --- |
| Post | /PGB/FullCancel | 주문 금액 전부를 환불 처리한다. |

#### Request
```json
{
  "DBType" : "AD",
  "OrderId" : 123456,
  "CurrentTotalPrice" : "499.99",
}
```

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| DBType | String | AD / OM DB 타입을 받아서 처리할지 여부는 추후 다시 판단해볼 필요 있음 |
| OrderId | Int | 주문번호 |
| CurrentTotalPrice | String | 환불 전 금액 |

#### Response
200 OK / 400 Error

## PGB 에서 입금 완료 처리
PG 에서 입급 완료 메세지를 받은경우 PGB 가 받아서 티쿤 pg.tqoon.com의 입금 완료 api를 호출하여 입금 완료 처리 한다. 입금 완료 처리는 pg.tqoon.com의 다음 api 를 이용한다.

### 입금 완료
| Method | Url | 설명 |
| --- | --- | --- |
| Post | {각 국가 pg.tqoon.com}/PGB/PayComplete | 주문 금액 전부를 환불 처리한다. |

#### Request
```json
{
  "DBType" : "AD",
  "OrderId" : 123456,
}
```

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| DBType | String | AD / OM DB 타입을 받아서 처리할지 여부는 추후 다시 판단해볼 필요 있음 |
| OrderId | Int | 주문번호 |

#### Response
200 OK / 400 Error


## PGB 사용하기 위해 티쿤 시스템에서 세팅해야 하는 것

티쿤 시스템이 PGB 서버 정보를 알기 위해 다음 내용이 스프링 컨텍스트 안에 주입 되어 있어야 한다.

```xml
<?xml version="1.0" encoding="utf-8"?>
<objects xmlns="http://www.springframework.net">
  <object id="PGBServerAllowedIp" type="System.Collections.Generic.List&lt;string>">
    <constructor-arg>
      <list>
        <value>222.122.209.240</value>
        <value>211.63.134.196</value>
      </list>
    </constructor-arg>
  </object>
  <object id="PGBServerInfoRepo" type="Adprint.Service.PGIntegration.Module.PGB.Model.PGBServerInfoRepo, AdprintLib">
    <property name="PGBServerInfos" ref="PGBServerInfos" />
  </object>
  <object id="PGBServerInfos" type="System.Collections.Generic.List&lt;Adprint.Service.PGIntegration.Module.PGB.Model.PGBServerInfo>">
    <constructor-arg>
      <list>
        <ref object="ElavonPGBServerInfo"/>
      </list>
    </constructor-arg>
  </object>
  <object id="ElavonPGBServerInfo" type="Adprint.Service.PGIntegration.Module.PGB.Model.PGBServerInfo, AdprintLib">
    <property name="PGName" value="ELAVON" />
    <property name="PGBUrl" value="http://elavon.pgb.tqoon.com" />
  </object>
</objects>
```

| ID | 타입 | 설명 |
| --- | --- | --- |
| PGBServerIp | Int | pg.tqoon.com 에서 PGB 서버 아이피 차단을 위해 필요한 정보 |
| TqoonPGServerInfo | PGBServerInfoRepo | PGB 서버 목록 저장 객체 |
| PGBServerInfos | List<PGBServerInfo> | 사용가능한 PGB 서버 목록 |
| PGBServerInfo | PGBServerInfo | 각 PGB 서버 정보 |