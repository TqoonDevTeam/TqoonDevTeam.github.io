---
title: "PG Class"
description: "PG 관련 클래스 정리"
tags: [개발가이드, PG, 기술 ]
---

# PG 관련 클래스

## v2Test 

### PgOpenController.cs

PG 결제창, 모달 등 결제를 위한 페이지를 호출하는 ActionResult는 PgOpenController에 구현합니다.
보통 Pg/OrderStart > PgOpenController > 모달 또는 PG 결제 창 표시 순서로 진행됩니다.

### OrderCompleteController.cs > CheckPayment

OrderRegService.CheckValidOrderCompletePopupProcess(int orderId)

주문의 결제 상태를 체크하는 로직입니다. 

## TqoonLibraries

### PG 환불(취소) 서비스 클래스  

참고 : PaymentFactory.GetPaymentCancelService(string pgType)   
                      
| namespace 규칙 | Adprint.Service.PaymentGateway.Provider.{pgTypeTitle} |
| className 규칙 | {pgTypeTitle}PaymentCancelService.cs |
| implement | IPaymentCancelService |

### 파트너 PG (전표)취소 가능 여부 설정 클래스

참고 : PaymentFactory.GetPGInfo(string pgType)  

| namespace 규칙 | Adprint.Service.PaymentGateway.Provider.{pgTypeTitle} |
| className 규칙 | {pgTypeTitle}Info.cs |
| implement | IPgInfo |
| IPgInfo > IsTelegramTarget | PG (전표)취소 가능 여부 |