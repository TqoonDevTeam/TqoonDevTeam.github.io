---
title: "TDD (FrontEnd)"
description: "개발 산출물 > 2. TDD (FrontEnd)"
categories: [devGuide, dao]
tags: [devGuide, item, crud]
history:
  - version: '1.0'
    date: '2019-09-09'
    user: '최동호'
    desc: '초안'
---
# 2. TDD (BackEnd)

## 2.1. 소개
이 문서는 프론트엔드 프로그램의 산출물 중 하나인 TDD 작성방법에 대해 설명합니다.

## 2.2. 산출물에 TDD 코드가 포함 된 이유
비지니스 서비스 구현 시, 안정된 개발을 위해 많은 설계 문서가 필요합니다.
프로젝트 계획서, 요구사항 관리문서, 설게문서, 테스트 계획서, 품질관리 방안, 메뉴얼 등, 수행과정과 결과의 검증 또는 인수인계를 위한 산출물이 그 것입니다.

하지만, 이러한 프로젝트 산출물은 프로젝트 마다 각각 달라 매번 다른 환경에서의 작성이 부담이 되며, 때로는 프로젝트 진행에 부담이 되는 경우도 있습니다.

우리는 프로그램 개발의 수행과정과 결과의 검증에 관심이 많으며, 테스트 주도 개발(TDD)이 지켜지기를 원합니다.
때문에, 부담이 되는 여러 산출물을 대폭 줄이고, 테스트코드가 산출물의 기본이 되길 바랍니다.

## 2.3. 프론트엔드 TDD 작성 방법
프론트엔드의 TDD는 작성된 javascript를 중심으로 합니다.
이들 테스트를 위해 `jasmine` 프레임워크를 사용합니다.
테스트 코드를 작성하기 위해서는 `jasmine`에 대한 사전 지식이 필요합니다.

### 2.3.1. angularJs 테스트 만들기
angularJs로 작성되는 controller, directive, service, fillter 등은 jasmine과 angularJs.mock 를 이용하여 테스트 코드를 작성합니다.

$tqtdd의 tdd 지원함수를 사용하십시오.
$tqtdd 지원함수는 테스트 대상객체의 인스턴스 관리와, mock, $httpBackend 등을 손쉽게 할수 있는 `tdd()`함수를 포함하고 있습니다.

#### 2.3.1.1. Test Script 만들기
V2아키텍처에서 테스트 하고자 하는 모듈 스크립트와 동일한 위치에 테스트 스크립트를 작성하십시오.
테스트 스크립트는 `_Test`를 접두어로 사용합니다.
```diff
.
└── 📁SimpleUserInfoManagement
    └── Index.js
    └── Index_Test.js <-- Index.js를 테스트 하기위한 테스트 스크립트
```

#### 2.3.1.2. $tqtdd 사용하기 - $tqtdd로 테스트 함수 시작
테스트 지원함수 $tqtdd는 테스트대상 참조 힌트와 테스트대상 명과 tdd를 파라메터로 받는 테스트 함수로 구성됩니다.
```js
/// <reference path="{참조힌트}" />
$tqtdd('{테스트대상모듈명}', function(tdd){
});
```
- **{참조힌트}**: 참조대상의 상대경로를 입력합니다.
- **{테스트대상모듈명}**: angularJs.module 의 선언된 모듈명을 입력합니다.
- **function(tdd){}**: 테스트 코드가 구현될 함수 입니다.

##### 테스트대상 모듈에 의존관계가 있다면 어떻게 해야 하나요?
아래 처럼 테스트 대상 모듈에 의존관계가 있다면, 테스트를 위하여 인스턴스를 생성할 때, 예외가 발생할 수 있습니다.
이 때는 $tqtdd를 시작할 때 fake의존을 주입하여 작성될 수 있습니다.
```js
angular.module('myModule', ['whatever']);
$tqtdd(['myModule', 'fake:whatever'], function(tddd){
  /* 배열로 시작하며 2번째 부터는 fake: 접미어를 붙여 모듈을 $tqtdd 지원함수에 필요한 모듈을 fake로 준비하도록 한다. */
});
```

#### 2.3.1.3. $tqtdd 사용하기 - service 테스트하기
V2아키텍처의 angualrJs service는 대부분 $http를 통하여 ajax요청을 하고 promise를 반환합니다.
그리고 promise의 성공 응답 시, response 내용을 그대로 전달하거나 가공하여 전달하게 됩니다.
아래는 그런 가정을 테스트 하기위한 예제 입니다.

```js
/// <reference path="Index.js" />
$tqtdd('Page.SimpleUserInfoManagement', function(tdd){
  describe('Page.SimpleUserInfoManagement.svc', function(){
    var service;

    beforeEach(function(){
      service = tdd('Page.SimpleUserInfoManagement.svc', {
        $http: jasmine.createSpyObj('$http', ['post'])
      }); // tdd지원함수를 이용하여 angualrJs service 객체 생성
    });

    describe('GetAllUsers()', function(){
      if('호출시 GetAllUsers 주소로 요청하고 응답 reponse를 promise에 그대로 전달한다.', function(){
        // Arrange
        var rtn_response = { data: [{Id:1, FullName: 'TestUser'}] };
        tdd.$http.post.and.callFake(tdd._promise().resolve(rtn_response));

        // Act
        var rtn = ctrl.GetAllUsers();
        tdd._promise().flush(); // tdd 지원함수에 의해 생성된 모든 promise flush

        // Assert
        expect(tdd.$http.post).toHaveBeenCalledWith('/SimpleUserInfoManagement/GetAllUsers')
        expect(rtn).toEqual(rtn_respose);
      });
    });

    /* ... */
  });
});
```

#### 2.3.1.4. $tqtdd 사용하기 - controller 테스트하기
컨트롤러에서는 여러 angularJs 모듈들을 주입받고 많은 이벤트와 함수들이 처리가 됩니다.
필요한 모듈들을 목킹하고 기능적인 관점으로 접근하여 테스트코드를 작성하십시오.

```js
/// <reference path="Index.js" />
$tqtdd('Page.SimpleUserInfoManagement', function(tdd){
  /* ... */
  describe('Page.SimpleUserInfoManagementCtrl', function(){
    var controller;
    beforeEach(function(){
        controller = tdd('Page.SimpleUserInfoManagementCtrl', {
            'Page.SimpleUserInfoManagement.Locale': { Btn: '버튼' },
            'Page.SimpleUserInfoManagement.svc': jasmine.createSpyObj('Page.SimpleUserInfoManagement.svc', ['GetAllUsers', 'DeleteUserById',,,]),
            '$uibModal': jasmine.createSpyObj('$uibModal', ['open'])
        });
    });

    describe('$onInit()', function(){
      it('초기화 시, $scope의 언어와 컨트롤러의 ViewModel을 초기화한다.', function(){
        // Arrange
        var rtn_getAllUsers = { data: [{Id:1, FullName: 'Tester'}] };
        tdd['Page.SimpleUserInfoManagement.svc'].GetAllUsers.and.callFake(tdd._promise().resolve(rtn_getAllUsers));

        // Act
        controller.$onInit();
        tdd._promise().flush();

        // Assert
        expect(tdd.$scope.L).toEquals({Btn: '버튼'});
        expect(controller.userlist).toEquals(rtn_getAllUsers);
      });
    });
    /* ... */
  });
});
```

#### 2.3.1.4. 테스트 객체 네이밍

##### $tqtdd() 생성자에 전달되는 첫번째 파라메터 네이밍 
$tqtdd(moduleName, fn), $tqtdd([moduleName, fake:requrieModuleName], fn) 지원함수에 전달되는 첫번째 파라메터는 테스트하고자 하는 모듈명이 그대로 입력됩니다.

##### describe() 네이밍
jasmine의 describe() 함수의 첫번째 파라메터는 테스트하고자 하는 함수명 또는 변수명이 입력됩니다.
보통 함수명이 입력되며 nUnit의 테스트 코드와는 다르게 javascript의 테스트는 함수명으로 부터 접근하게 됩니다.

네이밍으로 부터 함수의 여부와 파라메터를 유추할 수있도록 작성합니다.
또한 $scope에 바로 포함된 함수는 접미어로 $scope를 사용합니다.
단, $scope의 evt에 포함된 함수를 접미어로 evt만을 사용합니다.

```js
describe('$onInit()', function(){ /* ... */ });
describe('$scope.anyFunction(item)', function(){ /* ... */ });
describe('evt.onClick(item, anyParams)', function(){ /* ... */ });
```

##### it() 네이밍
jasmine의 it() 함수의 첫번째 파라메터는 상위 describe에서 알리고 있는 함수명에 이어서 어떻게 테스트 하려고 하는지 이해하도록 해야 합니다.

어떤 관점으로 테스트를 하려고 하는지 it()에 표현하고, 함수가 가져야 할 명확한 기능의 이해에 도움을 주십시오.

it()의 첫번째 파라메터는 기본적으로 GWT 구조를 갖습니다.
Given / When / Then (GWT) 구조로 네이밍을 하여 테스트가 어떤 조건하에 어떠한 결과를 원하는지 기능적인 관점으로 접근 하도록 작성합니다.

```js
it('초기화 시, $scope의 언어와 컨트롤러의 ViewModel을 초기화 한다.', function(){ /* */ });
it('X가 입력되면, 아무런 처리를 하지 않는다.', function(){ /* */ });
```

##### it() 테스트 함수 구성
앞서 GWT 구조의 네이밍으로 기능적인 관점의 테스트 함수가 작성되면, 이어서 테스트 코드를 채워 넣어야 합니다.
우리는 이 때, 고전적인 방식의 AAA 패턴으로 테스트 코드를 작성합니다.
Arrange / Act / Assert (AAA) 구조로 테스트 코드를 작성하여 테스트 코드를 정리하고, 실행하고, 검증하십시오.
이러한 패턴의 테스트 코드 작성은 다른 테스트 코드들과의 일관성을 유지 합니다.
아래의 예제처럼 주석을 유지하여 주십시오.

```js
it('초기화 시, $scope의 언어와 컨트롤러의 ViewModel을 초기화한다.', function(){
  // Arrange
  var rtn_getAllUsers = { data: [{Id:1, FullName: 'Tester'}] };
  tdd['Page.SimpleUserInfoManagement.svc'].GetAllUsers.and.callFake(tdd._promise().resolve(rtn_getAllUsers));

  // Act
  controller.$onInit();
  tdd._promise().flush();

  // Assert
  expect(tdd.$scope.L).toEquals({Btn: '버튼'});
  expect(controller.userlist).toEquals(rtn_getAllUsers);
});
```

#### 2.3.1.5. tdd 지원함수
angularJs.mock과 jasmine만을 사용한다면, 테스트코드 작성에 너무나 많은 리소스를 요구하게 됩니다.
$tqtdd에서 제공하는 tdd지원함수를 사용하면 이러한 일들을 대폭 줄여 테스트 코드 작성에 집중할 수 있게 도움을 줍니다.

##### tdd 지원함수 정보

| tdd | 설명 |
| --- | --- |
| `tdd(target, moq)` | target에 해당하는 angular 객체의 인스턴스를 생성하고 반환합니다.<br>인스턴스 생성시 필요한 주입될 객체를 moq를 통해 전달할 수 있습니다.<br>$scope, $rootScope는 목킹하지 마십시오. 그것들은 기본적으로 angularJs mock 아키텍처에 의해 관리되도록 구현하였습니다.<br>tdd는 target에 해당하는 angular 객체의 인스턴스 생성에 필요한 주입될 객체를 자동으로 분석 및 생성하여 목킹하지 않습니다. 이 것은 주입될 대상의 형식을 유추 할 수 없기 때문이며 이런방식은 지극히 정상적입니다. |
| `tdd[moqProperty]` | tdd함수 실행 시 목킹된 대상은 moqProperty로 접근할 수 있습니다.<br>즉, 목킹될 대상을 따로 테스트 함수 범위에 변수로 선언하고 접근하지 않아도 됩니다.<br>자동으로 생성되는 $scope, $rootScope또한 접근할 수 있습니다. |
| `tdd._promise()` | angularJs.mock의 $httpbackend를 _promise() 지원함수로 손쉽게 처리할 수 있습니다.<br>인스턴스는 항상 _promise() 함수를 호출하여 얻습니다.<br>자세한 설명은 아래 표를 참고 하십시오.  |

| tdd._promise() | 설명 |
| --- | --- |
| `resolve(res)` | 파라메터로 전달되는 데이터로 resolve될 가능성이 있는 promise 객체를 반환합니다.<br>flush하지 않으면 resolve되지 않습니다. |
| `reject(res)` | 파라메터로 전달되는 데이터로 reject될 가능성이 있는 promise 객체를 반환합니다.<br>flush하지 않으면 reject되지 않습니다. |
| `flush()` | _promise()에 의해 생성된 모든 promise 객체를 resolve또는 reject 처리합니다.  | 

### 2.3.2. jQuery 테스트 만들기
현재는 jQuery로만 작성되는 코드들의 테스트 코드를 원하지 않습니다.