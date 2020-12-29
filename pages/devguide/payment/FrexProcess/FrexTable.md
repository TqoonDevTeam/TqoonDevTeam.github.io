---
title: "Frex Process"
description: "신용결제테이블"
tags: [개발가이드, 신용결제, 기술 ]
---


### 신용 결제 관련 테이블

>> 신용 결제 워커가 동작되면서 삽입 및 갱신이 진행됩니다.
주문 등록 시 FrexStateinfo와 FrexUserInfo 테이블에 해당 주문의 정보가 등록됩니다.
등록된 주문은 FrexRequest 테이블에 주문 등록 단계인 ORDERREG - STANDBY 상태 등록되며 신용결제워커 단계별로 상태가 저장되어 관리됩니다.
신용결제워커는 신용결제 프로세스에 기술되어있습니다.

# FrexStateinfo (dbconnection - ADPRINT)
 신용 결제사와 통신하며 진행단계를 저장하는 테이블입니다. 

| 컬럼 |  내용
| regState | 주문 등록 상태
| authorizeState |  심사 결과 상태
| billingState | 청구 결과 상태
| npTransactionId | FREX 거래 ID
| acceptNO | 접수 번호

# FrexUserInfo (dbconnection - ADPRINT)
 신용 결제를 시도한 유저의 암호화 된 정보 테이블입니다.
 이 정보를 토대로 신용 결제사에 심사 요청을 진행합니다. 


# FrexRequest (dbconnection -JANGBOGO)
신용 결제사에 통신 요청한 정보입니다.  워커 단계별로 저장됩니다.

| 컬럼 |  내용
| type | 워커 진행 단계 
| requestSafeInfo |  신용 결제사 요청 정보
| state | 워커 단계 진행 중 상태
| response | 신용 결제사 응답 정보

# FrexResponseDetail  (dbconnection -JANGBOGO)
 신용 결제사에서 응답 받은 정보 테이블입니다.

| 컬럼 |  내용
| requestType | 워커 진행 단계
| acceptNo |  접수 번호
| npTransactionId |  등록시 생성된 FREX 거래 ID
| shopTransactionId | 가맹점 거래 ID
| authoriResult | 심사 결과 완료 (1 - 완료)

