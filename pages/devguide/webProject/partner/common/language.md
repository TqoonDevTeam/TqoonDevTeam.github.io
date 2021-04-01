---
title: ""
description: ""
tags: [개발가이드, 기술, 언어처리]
history:
  - version: '1.0'
    date: '2020-04-01'
    user: '김정훈'
    desc: '초안'
---

# 언어처리 방식
Partner 프로젝트의 언어 처리는 3가지 방식을 사용한다.

## C#, L.T({번역코드})
서버사이트 코드나 cshtml, ascx에서 사용
[https://admin2.adprint.jp/Partner/ConvertLang](https://admin2.adprint.jp/Partner/ConvertLang) 에서 관리 DB 에 데이터 저장, FileType : cs

```c#
@L.T("알림판")
```

## Javascript, "번역코드".L() 
JQuery 스트립트나 바닐라 스크립트에서 사용
`String.prototype.L` 에 정의
[https://admin2.adprint.jp/Partner/ConvertLang](https://admin2.adprint.jp/Partner/ConvertLang) 에서 관리 DB 에 데이터 저장, Filetype : js

``` js
alert("오류메세지".L())
```

## Javascript, AngularJS 의 i18n
AngualarJS 스크립트에서 사용한다. 
해당 스크립트의 i18n 폴더에 있는 스크립트 파일을 사용해서 언어 처리한다.

```js
var message = $scope.L("Error_Message");
```