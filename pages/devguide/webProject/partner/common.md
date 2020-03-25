---
title: "Partner 공통기능"
description: ""
tags: [개발가이드, Partner, 공통]
history:
  - version: "1.0"
    date: "2020-02-19"
    user: "김정훈"
    desc: "초안"
---

# 파트너 공통 모듈
이 문서는 파트너 페이지 구성을 위한 공통 모듈에 대해 설명합니다.

## 메뉴생성
### RenderAction 타입
  - 각 페이지 뷰 파일에 <%Html.RenderAction("PartnerGoods", "Nav"); %>
  - Partner.Areas.Page.Controllers.NavController 에서 페이지 메뉴 구조 생성
  - /Areas/Page/Views/Nav/Nav.ascx
  - 코드 참조 : partner - \Areas\Page\Views\PartnerGoods\PartnerGoodsList.aspx
  - 페이지 참조 : https://partner.adprint.jp/PartnerGoods/PartnerGoodsList


### Angularjs
  - 디렉티브 사용해서 구현, nav-url 속성으로 메뉴 Json 정보 취득
  - <nav-left nav-url="/Nav/SystemQnaJson"></nav-left>
  - 코드 참조 : partner - \Areas\Page\Views\SystemQna\DashBoard.cshtml
  - 페이지 참조 : https://partner.adprint.jp/SystemQna/



## 페이징 처리

 Angularjs
  - 디렉티브 사용해서 구현, ng-model 에 페이징 정보 전달
  - 보통 서비스에서 전달 받은 JangBoGo.Model.Param.Common.PagingResult<T> 모델을 그대로 Json 형식으로 리턴
  - <tq-paging ng-model="ctrl.val.pagingResult" ng-change="ctrl.evt.list.onClickPaging()"></tq-paging>
 - ng-model에서 페이징 처리를 위해 사용하는 데이터 형식
{
  Paging : {
    TotailPage : 100, // 총 페이지 수
    Paging.Page : 2, // 현제 페이지 번호
    PageSize : 20 // 페이지당 게시물 수
  },
  TotalCount : 2000, // 총 아이템 수
}
  - 코드 참조 : partner - /Scripts/tqoon/partner/PartnerSite/GoodsReviewListV2/ReviewService.js
  - 페이지 참조 : https://partner.adprint.jp/PartnerSite/GoodsReviewListV2
페이지의https://partner.adprint.jp/PartnerSite/GetGoodsReviewList 요청을 참고



## 팝업
  - 코드 참조 : /Areas/Page/Views/PartnerPromotion/GradeSetting.js, gradeSetting
  - 페이지참조 : https://partner.adprint.jp/PartnerPromotion/GradeSetting, 설정 버튼



## 유저 정보
 1. 서버측
  - 웹 프로젝트에서 TqoonV2.CurrentUser 로 접근
  - 코드 참조 : 2.0 - \Areas\Plugins\Controllers\MasterHeaderQuickMenuController.cs

 2. Angularjs
  - $CurrentUser constant service 사용
  - 코드 참조 : 2.0 - Areas\Plugins\Views\Common\MasterHeaderQuickMenu\MasterHeaderQuickMenu.cshtml
Areas\Plugins\Views\Common\MasterHeaderQuickMenu\MasterHeaderQuickMenu.js