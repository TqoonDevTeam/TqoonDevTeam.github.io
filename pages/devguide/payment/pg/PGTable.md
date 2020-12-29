---
title: "PG Table"
description: "PG 관련 테이블 용도 정리"
tags: [개발가이드, PG, 기술 ]
---

# PG 관련 테이블

## PG사 정보, 결제 방법 관련 테이블

이용사 결제 방법 조회 : TqoonLibraries > OrderPaymentService.cs > GetValidPayTypeInfo

### Joiner

| 컬럼명 | 내용 |
| pgType | 사용하는 PG사 |  
| useFrex | 청구서 지불(NP 결제) 사용 여부 | 

기존에는 PG 개발할 때 pgType을 Joiner 테이블의 pgType 컬럼에 등록했습니다. 
그러나 한 이용사에서 하나의 PG사만 사용할 수 있다는 단점이 있습니다.
또한 구조적으로 좋지 않기 때문에 이제는 pgType을 Joiner에 넣는 방법은 사용하지 않습니다.
앞으로는 Jangbogo에 있는 PG 관련 테이블에 PG사 정보를 등록합니다.

### Jangbogo.dbo.PG

| 컬럼명 | 내용 |
| name | PG사 이름 |

향에서 사용 중인 모든 PG사의 이름(pgType과 동일)이 들어가 있습니다.

### Jangbogo.dbo.PGCommission

| 컬럼명 | 내용 |
| pgType | PG사 |
| payType | 결제 방법 |
| rate | PG수수료 |
| allowPartialCancel | 부분취소 가능 여부 |
| pgId | PG 테이블의 id |

PG사에서 제공하는 결제 방법 정보가 들어가 있습니다.
rate 컬럼 정보를 이용해 PG 수수료가 정산됩니다.

### Jangbogo.dbo.JoinerPgCommission

| 컬럼명 | 내용 |
| pgType | PG사 |
| joinerId와 | Joiner 테이블의 id |
| pgCommissionId | PGCommission 테이블의 id |

이용사가 어떤 PG사를 사용하고, 어떤 결제 방법을 사용하는지 확인할 수 있습니다.

## API 통신, 주문 결제 완료 처리 관련 테이블

### Jangbogo.dbo.PGCommonResult

| 컬럼명 | 내용 |
| payType | 결제방법 |
| joinerId | Joiner 테이블의 id |
| orderId | 주문번호 |
| state | 결제 상태 ( PAID = 결제완료, UNPAID = 미결제 ) |
| request | API 통신 request |
| response | API 통신 response |
| fee | 결제 금액 |
| paymentId | pg사 시스템에서의 주문번호 |

결제가 완료되면 state가 PAID인 데이터를 INSERT 합니다.
state가 PAID인 데이터가 INSERT 되면 tr_PgCommonResult_Insert 트리거가 주문의 결제상태를 결제 완료로 변경합니다.