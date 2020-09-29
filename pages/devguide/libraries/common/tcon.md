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

## Quick Start
1. JangBoGo.dbo.TqoonBaseConfig 에 신규 항목 추가
2. Partner 관리자 페이지에서 이용사별 설정값 수정
3. `Tcon` 스태틱 객체의 `Val<T>(string group, string key)` 메서드 사용하여 값 획득
```cs
var autoMailConfigItem = TCon.Val<Adprint.TqService.TqoonConfig.Model.AutoMailConfigItem>("AutoMail", "MakeBegin");
bool canOrdEndCancel = TCon.Val<bool>("MyPage", "OrdEndCancel");
string goodsListSort = TCon.Val("Product", "GoodsListSort");
```
```
// angularjs
module.controller("ctrl", ["$scope", "$TCon", function($scope, $TCon){
  var value = $TCon.group.key;
}]);
```

## DataBase 구조

| 테이블 | 설명 |
| --- | --- |
|  JangBoGo.dbo.TqoonBaseConfig | 설정 항목들과 기본 값이 저장 |
|  adprintNewDB.dbo.TqoonDetailConfig | 애드프린트 디비를 사용하는 이용사별 설정값이 저장 |
|  OrderMall.dbo.TqoonDetailConfig | 오더몰 디비를 사용하는 이용사별 설정값이 저장 |

### JangBoGo.dbo.TqoonBaseConfig

| Field | Type | 설명 (* 필수) | 비고 |
| --- | --- | --- |  |
| id | int | id값 | |
| group | string | 항목분류 * |  |
| key | string | 항목키 * |  |
| spec | string | 해당 항목에 할당될 수 있는 값 | string 값을 입력 받을 경우 사용 \| 로 항목 분류 |
| dataType | string | 저장되는 값의 타입* | 기본 타입 외에 객체명을 지정할 경우 JsonSerialize된 값이 저장됨 |
| inputType | string | 항목분류* | `select`, `checkbox`, `text`, `orderedCheckbox`, `system` |
| ~~scope~~ | string | 적용 범위* (joiner 이외에 사용되지 않음) | __더이상 사용하지 않습니다.__ |
| description | string | 설명 |  |
| defaultValue | string | 기본값* |  |
| updateRole | int | 수정 권한 | 1: System - 어드민2에서만 수정 가능 <br> 2: Joiner - 파트너에서 수정 가능 |
| readRole | int | 읽기 권한 | 1: System - cs 단에서만 확인 가능<br>2: Joiner - 파트너 관리 시스템에서 확인 가능<br>3: User - 티쿤 2.0 에서 클라이언트로 정보 전달 |

### AdprintNewDb.dbo.TqoonDetailConfig / OrderMall.dbo.TqoonDetailConfig 

| Field | Type | 설명 (* 필수) | 비고 |
| --- | --- | --- |  |
| id | int | id값* | |
| baseId | int | TqoonBaseConfig의 id값* | |
| joinerId | int | Joiner의 id값* | |
| ~~categoryCodePath~~ | string | 상품 카테고리 | __더이상 사용하지 않습니다.__ |
| ~~goodsId~~ | int | tblGoods의 id값 | __더이상 사용하지 않습니다.__ |
| value | string | 설정 값 상세* | |
| sysLatestUpdateDate | datetime | 마지막 업데이트 날짜 | |


## Group 과 Key
TCon 설정 구분하기 위한 항목입니다.
TqoonBaseConfig 테이블에는 동일한 Group내에 같은Key 가 존재하면 안 됩니다.


## DataType과 InputType, Spec
각 항목에 저장되는 값의 타입과 입력 방법을 결정하는 항목입니다.
DataType 항목에 저장되는 데이터 형식 `string`, `int`, `float`, `double`, `bool` 타입과 객체 타입을 서언할 수 있습니다. 
InputType 항목 설정 방법  `select`, `checkbox`, `text`, `orderedCheckbox` 는 기본 관리 화면에서 수정하며,  `system` 일 경우 별도 기능에서 수정되는 항목입니다.
Spec 은 InputType에 의해 기본 관리 화면에서 수정될 경우 선택할 수 있는 값들을 `|`로 구분하여 저장합니다.


## Scope
Tcon 개발 당시 설정 항목을 상품 카테고리나 상품별로 다르게 하기 위해 만들어진 기능이나 사용하지 않아 폐기 예정인 기능입니다.

## DefaultValue와 TqoonDetailConfig
JoinerId와 BaseId에 해당하는 TqoonDetailConfig 값이 있을 경우 TqoonDetailConfig의 Value를 사용하고, 없을 경우 TqoonBaseConfig의 DefaultValue를 사용합니다.
DataType에 객체 타입이 지정되는 경우 JSon 시리얼라이즈한 값이 저장됩니다.

## UpdateRole과 ReadRole의 이해
이 필드는 TCon 값의 보안을 위해 만들어졌습니다. 해당 값에 따라 파트너에서 수정, 확인 가능 여부를 판단하고 Tqoon 2.0 `$TCon` 앵귤러 모듈 주입 여부를 판단합니다.
__국가코드, PG 정보, HSCode 패턴 같은 시스템 환경 변수나 계정 정보등은 이 항목을 주의 깊게 설정해야 합니다.__
UpdateRole은 이용사가 해당 값을 변경하면 안 되는 항목을 구분하는 용도입니다. 
ReadRole은 이용사나 Tqoon2.0의 클라이언트에서 확인할 수 있는 항목을 구분하는 용도입니다.

### Role
UpdateRole과 ReadRole은 데이터 베이스에는 int 형식으로 저장되고, 코드에서는 enum Role 형식으로 사용됩니다.
```c#
[Flags]
public enum Role
{
    None = 0,
    System = 1, //시스템, 서버사이드에서 사용 가능
    Joiner = 2, //파트너 에서 사용 가능
    User = 4 //Tqoon 2.0 클라이언트에서 사용 가능
}
```
자세한 사용법은 다음 문서 참조 바랍니다.
[EnumFlag](https://docs.microsoft.com/ko-kr/dotnet/api/system.flagsattribute?view=netframework-4.8) , [HasFlag](https://docs.microsoft.com/ko-kr/dotnet/api/system.enum.hasflag?view=netframework-4.8)


### UpdateRole
이용사가 해당 값을 변경하면 안 되는 항목을 구분하는 용도입니다. 
CBM당 단가, 패킹 리스트 면장 처리 비율, 지역코드, 현지 통화, PG 정보 등 이용사가 수정하면 안되는 항목 : 1 (Role.System)
상품 문의 사용 여부, 리뷰 작성 설정등 이용사가 수정해야 하는 항목 : 3 (Role.System | Role.Joiner)

### ReadRole
Tqoon 2.0 클라이언트에서 화면 구성에 쓰이는 항목, Role.User 권한이 있는 항목만 앵귤러 `$TCon` 에 포함 됩니다. : 7 (Role.System | Role.Joiner | Role.User)
파트너 관리화면에서 확인 할 수 있는 항목 : 3 (Role.System | Role.Joiner)
PG 정보 등 공개되면 안되는 보안 항목 : 1 (Role.System)


## 신규 설정 항목 생성
JangBoGo.dbo.TqoonBaseConfig 에 신규 행을 추가합니다. 
항목 추가기능은 따로 없으면 테이블에 직접 인서트 해야 합니다.
모든 국가별 테이블에 같은 항목이 존재해야 Tqoon 2.0 프로젝트가 정상 작동합니다.
__TqoonBaseConfig 배포는 꼭 디비 배포 담당자를 통해 진행해 주시기 바랍니다.__


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
```js
// angularjs
module.controller("ctrl", ["$scope", "$TCon", function($scope, $TCon){
  var value = $TCon.Group.Key; // 해당 값의 타입은 TqoonBaseConfig 의 DataType 에 따라 결정 됩니다.
}]);
```