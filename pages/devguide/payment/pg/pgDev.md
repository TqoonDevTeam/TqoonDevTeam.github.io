---
title: "신규 PG 개발 절차"
description: "문서 설명"
tags: [개발가이드, 템플릿 ]
---

# 신규 PG 개발 절차

## DB에 PG 정보 추가

### PG 테이블에 정보 추가
```sql
INSERT INTO pg (name) values ('ELAVON')
```

### PGCommission 테이블에 정보 추가
```sql
INSERT INTO PGCommission(payType, rate, writeDate, pgId, pgType, AllowPartialCancel) values ('TELEGRAM_CARD_REQUEST','1.100',GETDATE(), 2, 'ELAVON', 1)
```

### JoinerPGCommission 테이블에 정보 추가
```sql
INSERT INTO jangbogo.dbo.JoinerPGCommission (joinerId, pgCommissionId, [KEY], [state]) values (15, 3, '', 'REG')
```
### 엑심베이 카드결제 연동 예시

```sql
update joiner set pgType ='EXIMBAY' where id =540; 
INSERT INTO jangbogo.dbo.JoinerPGCommission (joinerId, pgCommissionId, [KEY], [state]) values (540, 11, '{"mid":"","secretKey": ""}', 'REG')
```
PG 테이블과 PGCommission 테이블도 추가를 해야하지만 이미 추가가 되어있다면 위에 쿼리 처럼 Jangbogo DB의 joinerPGCommission과 joiner 테이블에 정보 추가 및 수정을 하면 된다.

## Lib 작업
Lib 내용은 BGP 개선 하면서 제거 해야함

### PG 정보 추가
AdprintLib/Service/PaymentGateway/Provider/{PG}/{PG}Info.cs
 - IPGInfo 구현

### 주문시 PG 정보 획득 로직 수정
TqoonLib/Service/OrderPayment/OrderPaymentService.cs
 - UserSiteNationCode == "CN" 구조 추가

```c#
 if(joinerItem.UserSiteNationCode == "CN" || joinerItem.UserSiteNationCode == "US") // 국가 추가
```

TqoonLib/Service/OrderReg/Module/OrderRegCompleteInfo/PaymentInfo/DefaultPaymentInfoGetter.cs 
```c#
private void SetPgPayInformations(DefaultOrderRegPaymentCompleteInfo paymentInfo, OrderRegCompleteEscalateInfo escalateInfo) {
...
  else if (paymentInfo.PgType == "ELAVON") // 아래 내용 구현
  {
      paymentInfo.PayData = new Dictionary<string, object>();
      paymentInfo.PayData.Add("InvalidReq", true);
      paymentInfo.PayData.Add("IsInValidReq", true);
      paymentInfo.PayData.Add("IsLinkType", true);
  }
}
```

## Tqoon 2.0 작업

### PG 타입별 결제 페이지 분기추가
PageSub/Views/Common/OrderComplete/OrderComplete.js
```js
ctrl.goPgPay = function() {
  if (pgType == "ELAVON") { // pgb 사용시 조건 추가
    ctrl.pgbPayStart();
    return;
  }
```