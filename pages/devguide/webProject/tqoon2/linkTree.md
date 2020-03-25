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

# 메뉴구성
---
티쿤 2.0의 메뉴를 구성하기 위한 기능을 설명합니다.

# 관련 항목

| 타입 | 위치 | 용도 |
| --- | --- | --- |
| table | adprintNewDb.dbo.LinkTree | 메뉴 트리구조가 저장된 테이블 |
| lib | TqoonLib.Service.LinkTree.LinkTreeService | 메뉴 구성 변경을 위한 서비스 |
| lib | TqoonLib.Service.MenuTree.MenuTreeService | 티쿤 2.0 에서 메뉴를 출력하기 위한 서비스, 현제 페이지 선택, 네비게이션, 페이지 타이틀 을 구성 |
| tqoon 2.0 | Page/Shared/ngConstants.cshtml | angularjs 모듈 $PageContext 에 메뉴 구조 선언 |
| tqoon 2.0 | Plugins/MenuTreeService | 메뉴 출력 플러그인 |

## 데이터 구조
adprintNewDb 혹은 OrderMall 데이터베이스의 LinkTree 테이블에 저장되어 있습니다.

|컬럼명|데이터타입|용도|
|---|---|---|
| id |  int | 고유 ID | 
| parentId | int |  |
| joinerId | int |  |
| code | nvarchar |  |
| content | nvarchar |  |
| link | nvarchar |  |
| state | nvarchar |  |
| step | nvarchar | 같은 뎁스의 정렬 기준 |
| isHtml | bit | 해당 메뉴의 ContentHtml 사용 여부 |
| contentHtml | nvarchar | isHtml 가 true 일시 사용, 메뉴 구성시 content의 text 가 아닌 이 필드의 html 마크업이 추가됩니다.  |
| isDisplayMenu | bit | 화면에 출력하지 않는 메뉴 |
| class | nvarchar | 메뉴 구성시 li 또는 a TAG에 추가될 class |
| linkPath | nvarchar | link Url의 Path 영역 / 계산필드이므로 Insert, Update 하지 않습니다. |
| linkQuery | nvarchar | link Url의 Query 영역 / 계산필드이므로 Insert, Update 하지 않습니다. |


## 메뉴 표시 처리 흐름
1. 페이지 접근시 `AbstractPageController` 의 `OnActionExecuting` 에 의해 동작
2. `TqPageContextService.GetContext(CurrentSite.JoinerId, Request.Url)` 를 이용하여 전체 메뉴 목록 및 선택된 항목을 취득 하여 `HttpContext.Items["TqPageContext"]` 에 저장
3. `Page/Shared/ngConstants.cshtml` 에서 angular `$PageContext` constant에 선언
4. `Plugins/MenuTreeService` 에 구현된 `tq-menu-tree` directive 에 의해 화면 출력
