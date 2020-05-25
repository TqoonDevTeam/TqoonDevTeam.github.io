---
title: "예외처리"
description: "프론트엔드 작성 > 5. 예외처리"
tags: [개발가이드, 프론트엔드, 예외]
history:
  - version: '1.1'
    date: '2020-05-22'
    user: '안현규'
    desc: ''
---
# 5. 예외처리

## 5.1. 소개
이 문서는 프론트엔드 서비스의 예외처리 설명과 간단한 예제를 포함하고 있습니다.

## 5.2. 예외 종류
프론트엔드의 예외는 2가지로 분리됩니다.
- **비관리된 예외**: 외부 모듈에서 발생하는 예외나, 스크립트 버그로 인해 발생한 의도치 않은 예외
- **관리되는 예외**: 서버측에서 발생시키는 모든 예외, script validation에 의한 의도적인 예외

### 5.2.1. 비관리된 예외
외부 모듈이나 스크립트 버그로 인해 발생하는 이 예외는 현재 별도 관리하고 있지 않습니다.
이 후, 예외를 서버측에 전달하여 확인할 수 있도록 하는 방법을 고려 중입니다.

### 5.2.2. 관리되는 예외
프론트엔드의 관리되는 예외는 서버측에서 발생시키는 모든 예외와 script validation에 의해 발생 시키는 예외로 나뉩니다.

#### 5.2.2.1. 서버측에서 발생시키는 예외
서버측에서 발생시키는 관리되는 예외는 웹페이지에서 자동으로 인지하여 화면에 표시 합니다.

jQuery의 $.ajax, angularJs $http를 사용하여 Ajax기술을 사용할 때, 기본적으로 모든 에러를 핸들링하여 필요한 경우 화면에 표시 하거나 alert으로 알리게 됩니다.

서버측에서 exception 던지는 방식은 [Libraries 예외처리](pages/devguide/libraries/exceptions.html) 에서 확인할 수 있습니다.

서버에서 발생시킨 ParamException을 클라이언트에서 의미있는 단어로 변경하여 처리하거나 에러를 표기할 수 있습니다. 크게 두 가지 경우로 나눌수 있습니다.

* #####  form 사용하는 경우

* ##### form 사용하지 않는 경우

##### 5.2.2.1.1 form 사용하는 경우

form을 사용하는 경우 formCheck 디렉티브를 사용합니다. 

~~~ html
<form name="userInfoForm" novalidate form-check>
            <fieldset>
                <div>
                    <div>
                        <label for="OrderUserInfo-name">{{::L.Name}}</label>
                        <div class="box-input">
                            <input type="text" id="OrderUserInfo-name" name="name" placeholder="{{::L.PlaceHolder_Name}}" ng-model="$ctrl.sel.name" required>
                        </div>
                    </div>
                </div>
               <div class="box-btn">
                    <button type="submit" class="toggle-$ctrl.Select action" ng-click="evt.onUpdate()">
                        <span class="msg-err"><span>{{::L.InvalidSubmit}}</span></span>
                        <span>{{::L.Continue}}</span>   
                    </button>
                </div> 
	    </fieldset>
</form>
~~~

submit 버튼 클릭시 service에서 ParamException을 발생시킨 경우 msg-err class를 지정한 내용을 보여줍니다.

data-err 디렉티브를 사용하여 ParamException을 발생 시킬때  pramName 인자로 표기할 메세지를 구분할 수 있습니다.

~~~ html
<button type="submit" class="join" tq-loading="regBtn">
    <span class="msg-err">
        <span data-err="required">{{::L.InputError_Required}}</span>
        <span data-err="email">{{::L.InputError_Email}}</span>
        <span data-err="$http_duplicate">{{::L.InputError_Duplicate}}</span>
        <span data-err="pattern,maxlength">{{::L.InputError_Password}}</span>
        <span data-err="$http_leaved">{{::L.InputError_Leaved}}</span>
    </span>
    <span>{{::L.Join}}</span>
</button>
~~~

##### 5.2.2.1.2 form 사용하지 않는 경우

form을 사용하지 않고 exception 처리를 하는 부분은 아직 개발되지 않은 것으로 추측 됩니다.

form을 사용하지 않을 경우의 패턴을 아시는 분은 추가 바랍니다.

#### 5.2.2.2. Script Validation 예외
Script에 의해 발생시키는 예외는 Form Validation 규칙을 이용한 예외와 직접 alert 메시지를 발생시키는 예외가 있습니다.

기본적으로 입력 Form의 Validation은 규칙을 이용하며, 특별한 경우가 아니라면 직접 alert 메시지를 처리하지 않습니다.

##### angularJs를 이용한 validation
angularJs의 입력 폼 체크는 directive를 이용하여 처리 합니다.
```html
<form name="frmInput" novalidate>
  <input type="text" name="search" ng-model="ctrl.param.search" require/> <!-- require directive에 의한 validation -->
  <input type="number" name="age" ng-model="ctrl.param.age" must-even/> <!-- custom validation 사용 -->
</form>
<script>
  module.directive('mustEven', {
    require: 'ngModel',
    link: function(scopr, elements, attrs, ngModel){
      ngModel.$validators.mustEven = function(modelValue){
        return modelValue % 2 == 0;
      }
    }
  });
</script>
```

#### jQuery를 이용한 validation
jQuery에 의해 제어되는 입력 폼 체크는 jQuery.validate.js, additional-methods.min.js를 이용하여 처리합니다.
```html
<form id="frmInput" novalidate>
  <input type="text" name="search" require/>
  <input type="number" name="age" must-even/>
</form>
<script>
  $("#frmInput").validate({
    rules: {
      /* ... */
    }
  });
</script>
```