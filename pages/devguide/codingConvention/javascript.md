---
title: ""
description: ""
tags: [개발가이드, 기술]
history:
  - version: '1.0'
    date: '2020-03-20'
    user: '김정훈'
    desc: '초안'
---

# 티쿤 javascript 코딩 스타일 가이드
Visual Studio 2015 설치 시 세팅되는 값을 기본으로 합니다.

## use strict
항상 strict 모드를 사용합니다. strict 모드 사용을 위해 모든 javascript 코드 최상단에는 `"use strict";` 라는 문자가 있어야 합니다.
```js
"use strict";
alert("test");
```
**`"use strict";` 가 문서 중간에 위치할 경우 정상 동작 안합니다.**

## ECMA6 지원
티쿤 플렛폼은 IE11을 지원합니다. IE11에서 완벽하게 지원하지 않는 ECMA6 문법은 사용하지 않습니다.

## 변수
기본적으로 camelCase를 사용합니다. 하지만 C# 객체를 그대로 Serialize 하는 경우 PascalCase 사용 합니다.
한 줄에 변수 하나만 선언 / 할당합니다.

```js
//good
var intVarA = 1;
var intVarB = 2;
var objA = { "SomeCSharpObject": { "VarA" : "A" }};
var objb = { "javascriptObject": { "varA" : "B" }};

//bad
var IntVarA = 9;
var IntVarB, IntVarC;
```

## 들여쓰기
들여쓰기는 띄어쓰기 4개를 사용합니다. VS를 사용하는 경우 옵션 > 텍스트 편집기 > JavaScript > 탭 항목이 `탭 크기: 4, 들여쓰기 크기: 4, 공백 삽입` 인지 확인해주세요.
```js
$tq(function (module) {
    module.directive('tqMenuTree', ['$rootScope', function ($rootScope) {
        return {
```

## 블럭
제어문 블럭의 코드가 한줄일 경우 블럭을 사용하지 않습니다.
```js
//good
if (isTrue) return;

if (isTrue == true)
    return Action(item);

//bad
if (isTrue) { return; }
if (isTrue == true)
{
    return Action(item);
}
```



## 줄바꿈

코드의 길이가 길어질 경우 ` ,.()` 혹은 연산자를 기점으로 줄바꿈합니다. 줄 바꿈 이후 들여쓰기 합니다.

```js
if (이러면안되지만함수명이너무너무길던가(
    파라메터도, 너무, 많이, 전달, 받아야, 하는, 상황이면) 
    && 줄바꿈하여.표시합니다(하지만, 이런경우, 별도, 펑션, 사용을, 권장합니다))
{
    return;
}

$("#first").child("div.second").child("span.third")
    .addClass("bgWhite").addClass("fontSizeMax")
    .addClass("centerText").addClass("h3");
```
