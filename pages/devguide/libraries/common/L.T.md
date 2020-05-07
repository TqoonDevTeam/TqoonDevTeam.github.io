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

# Tqoon Config
이용사별 설정 항목들을 저장하고 읽습니다. 이용사가 따로 설정하지 않은 값은 기본값을 사용합니다.
**PG정보같은 보안이슈가 있는 항목을 TCon에 저장하면 안됩니다. TCon 에 저장된 값은 외부로 공개되어 있습니다.**

## Quick Start
1. JangBoGo.dbo.TqoonBaseConfig 에 신규 항목 추가
2. Partner 관리자 페이지에서 이용사별 설정값 수정
3. 웹 프로젝트에서 `Tcon` 스태틱 객체의 `Val(string group, string key)` 메서드 사용하여 값 획득

```cs
var autoMailConfigItem = TCon.Val<Adprint.TqService.TqoonConfig.Model.AutoMailConfigItem>("AutoMail", "MakeBegin");
bool canOrdEndCancel = TCon.Val<bool>("MyPage", "OrdEndCancel");
string goodsListSort = TCon.Val("Product", "GoodsListSort");
```
```
// angularjs 코드는 현제 오류가 있어서 정상 작동 하지 않음
module.controller("ctrl", ["$scope", "$tCon", function($scope, $tCon){
  var value = $tCon.group.key;
}]);
```


## DataBase 구조

| 테이블 | 설명 |
| --- | --- |
|  JangBoGo.dbo.TqoonBaseConfig | 설정 항목들과 기본 값이 저장 |
|  adprintNewDB.dbo.TqoonDetailConfig | 애드프린트 디비를 사용하는 이용사별 설정값이 저장 |
|  OrderMall.dbo.TqoonDetailConfig | 오더몰 디비를 사용하는 이용사별 설정값이 저장 |


## 신규 설정 항목 생성
JangBoGo.dbo.TqoonBaseConfig 에 신규 행을 추가합니다. 
항목 추가기능은 따로 없으면 테이블에 직접 인서트 해야 합니다.

| Field | 설명 (* 필수) | 비고 |
| --- | --- |  |
| group | 항목분류* |  |
| key | 항목키* |  |
| spec | 해당 항목에 할당될 수 있는 값 | string 값을 입력 받을 경우 사용 \|로 항목 분류 |
| dataType | 저장되는 값의 타입* | 기본 타입 외에 객체명을 지정할 경우 JsonSerialize된 값이 저장됨 |
| inputType | 항목분류* | 관리자 페이지에서 수정할때 사용 하는 돔 객체 종류 |
| scope | 적용 범위* (joiner 이외에 사용되지 않음) | |
| description | 설명 |  |
| defaultValue | 기본값* |  |


## 이용사별 설정 항목 수정
Parter 관리자 페이지 > 사이트 > [사이트설정](https://partner.adprint.jp/Config/Main) 항목에서 값 변경

## 웹 사이트에서 Tcon 사용
웹페이지 최초 로딩시 `TCon` 스태틱 객체에 `TqoonBaseConfig`와 이용사의  `TqoonDetailConfig`를 로딩하고
`TCon.Val` 로 값을 가지고 올때 `TqoonDetailConfig`에 값이 있으면 이 값을, 없으면 `TqoonBaseConfig`의 `defaultValue`의 값을 가지고 옵니다.

```cs
var autoMailConfigItem = TCon.Val<Adprint.TqService.TqoonConfig.Model.AutoMailConfigItem>("AutoMail", "MakeBegin");
bool canOrdEndCancel = TCon.Val<bool>("MyPage", "OrdEndCancel");
string goodsListSort = TCon.Val("Product", "GoodsListSort");
```
```
// angularjs 코드는 현제 오류가 있어서 정상 작동 하지 않음
module.controller("ctrl", ["$scope", "$tCon", function($scope, $tCon){
  var value = $tCon.group.key;
}]);
```