---
title: "V1 아키텍처"
description: "프론트엔드 작성 > 2. V1 아키텍처"
tags: [개발가이드, V2아키텍처]
history:
  - version: '1.0'
    date: '2019-09-09'
    user: '최동호'
    desc: '초안'
---
# 4. V1아키텍처

## 4.1. 소개
이 문서는 프론트엔드 개발 구성방식중 하나인 V1아키텍처에 대해 설명합니다.
V1아키텍처는 .NET MVC 기술과 jQuery로 이루어져 있으며 여러 유용한 외부 라이브러리를 함께 포함하고 있습니다.

V1아키텍처의 명명은 V2와 구분하기 위해 부르기 시작하였으며, 기술적인 관점에서 전통적인 WebForm, .NET MVC 기술과 어떠한 차별성도 갖지 않습니다.

즉, 우리는 웹 에플리케이션의 오래된 프로젝트와 그 코드들을 V1아키텍처라고 구분하고 있습니다.

## 4.2. V1아키텍처로 구분 된 이유
티쿤의 웹사이트는 처음 WebForm 기술을 이용하여 개발되었습니다.
WebForm 2-Tire 구조로 부터 시작된 이벤트 중심의 개발코드들은 MVC를 도입하였지만, 당장의 Tire 정리보단 점차적으로 정리 하도록 선택하였습니다.
이 후, 개발자의 인식부족과 초반 여러 기술적인 한계 때문에 WebForm의 View와 Model의 강결합 구조는 MVC에 와서도 많은 코드들이 그대로 유지되어 있습니다.

때문에 우리는 이러한 레거시 코드들이 앞으로 점진적으로 개선되기 위해 V1아키텍처 라는 이름으로 구분하고 있습니다.

## 4.3. V1아키텍처 프로젝트의 리팩토링
기본적으로 V1아키텍처의 리팩토링은 WebForm 기술로 개발된 레거시 코드들과 MVC 전환 시 발생한 개발자들의 2-Tire 중심의 개발된  코드들을 MVC 패턴에 맞게 수정하는 것 입니다.

이 것은 V2아키텍처로 변경하는 것을 의미하지 않습니다.
즉, V1아키텍처의 리팩토링은 View와 Model이 강결합 되어 있는 구조를 느슨하게 하고, 사용되지 않고 정리되지 않은 script들을 정리하는 것 입니다.

따라서 리팩토링은 다음의 기준을 충족하여야 합니다.
- WebForm으로 개발된 View를 MVC로 변경하십시오.
  - Razor(cshtml)로 전환하십시오.
- 강결합된 View와 Model를 분리하십시오.
  - View에서 사용될 Property를 Model에 적용한 코드 제거
  - Data 계층의 Model을 View에서 직접사용한 코드 제거
  - View에서 Model에서 사용하기 위해 선언된 public 메소드 제거 또는 internal 처리
  - 해당 웹 프로젝트에 Presenter를 두십시오. 웹프로젝트에 종속된 모델을 백엔드 라이브러리로 내리지 마십시오.
- 백엔드 코드를 비하인드 코드 또는 Controller에서 제거 하십시오.
- 무리하게 angularJs를 도입하시 마십시오.
  - angularJs는 V2아키텍처부터 사용됩니다. 계획된 프로젝트아 아니라면 리팩토링에서 무리하게 도입하지 마십시오. 정리가 우선입니다.

## 4.4. V1아키텍처 구조
V1아키텍처는 전통적인 .NET MVC 기술을 사용하며, DOM의 제어는 jQuery를 사용하고 있습니다.

폴더 구성
```diff
.
├── 📁Controllers
|   └── MainController.cs
└── 📁Model
    └── 📁V1Service
        └── Home.aspx
        └── Login.cshtml
        └── etc.aspx
```

## 4.5. 페이지 개발
전통적인 .NET MVC 기술을 사용하는 V1아키텍처는 Page에 모든 기능을 구현합니다.
WebForm으로 출발한 V1아키텍처는 성능에 영향을 주는 viewstate를 사용하는 ASPX 페이지가 다수 존재합니다. 그들을 삭제할 수 없음으로 Razor를 사용하여 개발 또는 리팩토링 하십시오.

### 4.5.1. ASPX를 사용하는 Page

```html
<!-- Page에 타이틀명 직접 구현 -->
<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	 관리자페이지
</asp:Content>
<!-- Page에 스크립트 직접 구현 -->
<asp:Content ID="JsContent" ContentPlaceHolderId= "JsContent" runat="server">
  <script>
    $(function(){
      /* ... */
    });
  </script>
</asp:Content>
```

### 4.5.2. Razor(cshtml)을 사용하는 Page

```html
<!-- ViewBag에 타이틀명 직접 구현 -->
@{
  ViewBag.Title = "관리자페이지";
}
<!-- Page에 스크립트 직접 구현 -->
@scripts
{
  <script>
    $(function(){
      /* ... */
    });
  </script>
}
```