---
title: "QuickStart"
description: "프론트엔드 작성 > 1. QuickStart"
tags: [개발가이드, 프론트엔드, QuickStart]
history:
  - version: "1.0"
    date: "2019-09-09"
    user: "최동호"
    desc: "초안"
---
# 1. QuickStart

## 1.1. 소개
이 문서는 프론트엔드(Front-End) 서비스 개발에 대한 간략한 설명과 빠른 시작 예제를 담고 있습니다.

## 1.2. 프론트엔드(Front-End) 서비스 설명
티쿤의 프론트엔드 개발은 .NET MVC 기술을 사용하며 IIS에서 서비스 됩니다.
이들 웹 에플리케이션은 모바일 친화적이며, 향후 SPA 아키텍처를 포함하고 있습니다.
그리고 jQuery, momentjs, underscore, angularJs와 같은 익숙하고 널리 사용되는 자바스크립트 라이브러리가 포함되어 있습니다.

티쿤은 몇가지 상징될만한 기술들의 조합으로 개발하고 있으며, 이를 명명하여 웹 에플리케이션의 기술분표를 구분 짓고 있습니다.

| 기술명명 | 사용기술 | 프로젝트 |
| --- | --- | --- |
| V1아키텍처 | .NET MVC + jQuery | V1프로젝트, adprint, makumaku, admin2, partner  |
| V2아키텍처 | .NET MVC + jQuery + angularJs (SPA지원) | V2프로젝트, partner, tqTrading, tqHeadQuater |

## 1.3. 간단한 사용자정보관리 웹 에플리케이션 만들기
백앤드와 마찬가지로 프론트엔드 또한 모든 개발의 기초가 되는 데이터의 입력, 조회, 수정, 삭제 (CRUD)에 대한 기능구현에 익숙해야 합니다.
따라서 이러한 기초가되는 프론트엔드의 CRUD작성방법을 앞선 백앤드 예제였던 **간단한 사용자정보 관리서비스**를 사용하여 아래의 **간단한 사용자정보관리 웹 에플리케이션** 작성 예제를 통해 설명합니다.

아래 **간단한 사용자정보관리 웹 에플리케이션**예제는 V2아키텍처를 사용하여 고객을 조회하고 입력, 수정, 삭제할 수 있는 간단한 웹 에플리케이션입니다.

### 1.3.1. Controller 만들기
백앤드 서비스의 **간단한 사용자정보 관리서비스**를 사용하는 Controller를 생성합니다.
이 컨트롤러는 간단한고객정보 관리를 하며, 컨트롤러를 통해 고객을 등록, 조회, 수정, 삭제할 수 있습니다.

```cs
public class SimpleUserInfoManagementController : AbstractPageController
{
  [Autowire]
  public ISimplerUserInfoCrudService SimplerUserInfoCrudService { get; set; }
  
  public ViewResult Index()
  {
    return View();
  }

  // 고객을 등록합니다.
  [HttpPost]
  public JsonResult AddNewUserAndGet(string fullName, int age, string birthDay)
  {
    int id = SimplerUserInfoCrudService.AddNewUser(fullName, age, birthDay);
    SimpleUserInfoItem userUserItem = SimplerUserInfoCrudService.FindById(id);
    return Json(userUserItem);
  }

  // 모든 고객을 조회합니다.
  public JsonResult FindAllUsers()
  {
    return Json(SimpleUserInfoCrudService.FindAllUsers());
  }

  // 고객정보를 삭제합니다.
  public JsonResult DeleteUserById(int id)
  {
    return Json(SimpleUserInfoCrudService.DeleteUserById(id));
  }

  // 고객정보를 수정합니다.
  public JsonResult UserInfoModification(SimpleUserInfoDbItem item)
  {
    return Json(SimpleUserInfoCrudService.UserInfoModification(item));
  }
}
```
컨트롤러는 이미 고객의 니즈에 가까운 자연어에 가까운 인터페이스를 가지는 서비스 객체를 호출합니다.
때문에, 컨트롤러들에 구현된 많은 주소는 서비스 객체의 명과 같거나 비슷하게 됩니다.

### 1.3.2. View 만들기 (cshtml)
티쿤의 웹 에플리케이션의 화면 구성은 헤더, 푸터, 메뉴 등 일반화 할 수 있는 많은 것들이 공통화 되어 있고 layout 의해 자동으로 include 됩니다.
때문에 View를 생성할 때는 이러한 공통화된 내용을 제외하고 기능적 측면에 집중하여 구현할 수 있습니다.
아래의 예제는 **간단한 사용자정보 관리서비스** 기능에 집중하여 구현된 View(cshtml) 입니다.

```html
<!-- Index.cshtml -->
{% raw %}<div class="col col-md-12" ng-controller="Page.SimpleUserInfoManagementCtrl as ctrl">
    <table class="table table-borded">
      <thead>
        <tr>
          <th>Id</th>
          <th>FullName</th>
          <th>Age</th>
          <th>BirthDay</th>
          <th><button class="btn btn-primary btn-sm" ng-click="evt.addNew()">등록</button><th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="item in ctrl.userlist">
          <td>{{item.Id}}</td>
          <td>{{item.FullName}}</td>
          <td>{{item.Age}}</td>
          <td>{{item.BirthDay}}</td>
          <td>
            <button class="btn btn-danger btn-sm" ng-click="evt.remove(item)">삭제</button>
            <button class="btn btn-warning btn-sm" ng-click="evt.update(item)">수정</button>
          </td>
        </tr>
      </tbody>
    </table>
</div>{% endraw %}
```

### 1.3.3. View Controller 만들기 (js)
웹 에플리케이션은 서버사이드 스크립트(cshtml, aspx, razor)에 의해 구성되고 DOM의 컨트롤을 위해 javascript를 사용합니다.
티쿤의 웹 에플리케이션은 여기서 좀 더 빠른 응답과 향상된 UX를 위해 angularJs의 MVC 패턴을 사용하고 있습니다.
View는 자신의 DOM을 컨트롤하기 위해 하나이상의 javascript로 된 controller를 갖게 됩니다.
아래의 예제는 View를 컨트롤하기 위한 javascript 예제 입니다.

```js
$tq(function(module){ // 아직은 $tq에 대해 신경쓰지 마십시오
  module.service('Page.SimpleUserInfoManagement.svc', ['$http', function($http){
    return {
      FindAllUsers: function(){
        return $http.post('/SimpleUserInfoManagement/FindAllUsers');
      },
      /* ... */
    };
  }]);
  module.controller('Page.SimpleUserInfoManagementCtrl', ['$scope', 'Page.SimpleUserInfoManagement.svc', function($scope, svc){
    var ctrl = this;
    // event
    $scope.evt = {
      addNew: function(){
        /* ... */
      },
      /* ... */
    }
    // fn
    function initUserlist(){
      return svc.FindAllUsers().then(function(res){
        ctrl.userlist = res.data;
      });
    }
    /* ... */

    // init
    $scope.$onInit = function(){
      // vm 정의
      ctrl.userlist = [];

    }
  }]);
})(angular.module('Page.SimpleUserInfoManagement', []))
```