---
title: "Tqoon Config"
description: "Tqoon Config "
tags: [개발가이드, 기술, tCon, config]
history:
  - version: '1.0'
    date: '2020-02-21'
    user: '김정훈'
    desc: '초안'
---

# Common Code
---
이용사별 카테고리나 상품 재질, 옵션의 코드 값을 다룹니다. 코드를 고객 측 언어로 출력하거나, 관리자측 언어로 변화합니다.
개발 시점이나, 사용 용도에 따라 저장되는 디비 테이블이 달라서 직접사용이 어렵기 때문에 `JangBoGo.CommonCode.CommonCode` 클래스를 이용합니다.

## Quick Start
---

```cs
// 결제방법 값인 code 를 관리자 언어로 변경
var payTypeTextForAdmin = CommonCode.CodeMember[CommonCodeGroupType.PAYMENTTYPE, code, CommonCodeLang.KR];
// 결제방법 값인 code 를 고객 언어로 변경
var payTypeTextForUser = CommonCode.CodeMember["PAYMENTTYPE", code, CommonCodeLang.JP];
```

## 동작 방식
1. 사이트 구동시점에 tblCategory, tblCodeType, tblCode, partnerCodeType, partnerCodeType 테이블의 값을 메모리에 로드
2. `CommonCode.CodeMember[string type, string code, CommonCodeLang lang, int joinerId]` 연산자를 이용해 값을 취득

## 값 취득 우선순위
CommonCode에서 다루는 코드는 크게 세가지 종류입니다. 
1. ~~카테고리 코드~~
2. 파트너코드
3. 코드

이중 1번 카테고리코드는 로직상에 존재하지만 사용하지 않습니다.
나머지 2. 파트너코드와 와 3. 코드는 같은 type, code를 가질 수 있습니다.
이때는 2. 파트너코드의 값을 우선시 하며 3. 코드는 무시됩니다.


## DataBase 구조
---
tblCodeType 와 tblCode 가 한쌍으로
parterCodeType 와 parterCode 가 한쌍으로 동작합니다.
각 테이블은 adprintNewDb와 OrderMall 데이터베이스에 별도 존재합니다.

| 테이블 | 설명 |
| --- | --- |
|  adprintNewDB.dbo.tblCodeType <br> OrderMall.dbo.tblCodeType | 공통 코드 타입 정보 |
|  adprintNewDB.dbo.tblCode <br> OrderMall.dbo.tblCode | 공통 코드 정보 |
| --- | --- |
|  adprintNewDB.dbo.parterCodeType <br> OrderMall.dbo.parterCodeType | 이용사별 코드 타입 정보 |
|  adprintNewDB.dbo.parterCode <br> OrderMall.dbo.parterCode | 이용사별 코드 정보 |



### tblCodeType Table

| tblCodeType Table | 설명 | partnerCodeType Table | 
| --- | --- | --- |
| intCodeTypeNum | id | id |
| - | 이용사 id | joinerId |
| strCodeType |  관리자용 표기값 |  name |
| strCodeTypeEng |  코드값 | code |
| strCodeTypeJP | 유저용 표기값 | nameJP |
| strState | 상태 (DEL, REG) | state |
| strCodeTypeCN | 중국유저용 표기값 | - |



### tblCode Table

| tblCode Table | 설명 | parterCode Table |
| --- | --- | --- |
| intCodeNum | id | id |
| intCodeTypeNum | 코드 타입 id (FK) | partnerCodeTypeId |
| strCodeNameEng |  코드값 | code |
| strCodeName | 관리자용 표기값 | name |
|strCodeNameJP | 유저용 표기값 | nameJP |
|strState | 상태 (DEL, REG) | state |
|strCodeNameCN | 중국유저용 표기값 | - |
