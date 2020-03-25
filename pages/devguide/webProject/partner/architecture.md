---
title: "Partner 프로젝트 구조"
description: "파트너 이용사 관리 페이지 구조"
tags: [개발가이드, 기술]
history:
  - version: '1.0'
    date: '2020-03-20'
    user: '김정훈'
    desc: '초안'
---
 
# Partner 프로젝트 구조
---
이용사 관리자 시스템인 Partner 프로젝트에 대해 설명합니다.


## 구조 히스토리
---
파트너 시스템은 전통적인 .NET MVC 패턴으로 만들어진 이후 티쿤 2.0 아키텍처가 도입되었습니다. 
각 페이지의 구현은 Areas/Page 에 만들어져 있으며, 구현 시기에 따라 Page에 모두 구현 되어 있거나, PagSub, Plugins를 사용하여 구현되어 있기도 합니다.

티쿤 2.0 아키텍처에 대해서는 관련 문서를 참고 바랍니다.


## 사용하는 DB 에 따른 사이트
파트너 프로젝트를 이용하는 사이트는 향별로 AdprintNewDb를 사용하는 사이트와 OrderMall 을 사용하는 사이트 2개씩 생성 됩니다.

| 국가 | adprintNewDb | OrderMall |
| --- | --- |
| 일본향 | partner.adprint.jp | partner.mantenmall.jp |
| 중국향 | adpartner.tqoon.cn | |
| 한국향 | adpartner.tqoon.kr | adprintpartner.tqoon.kr |
| 칠레향 | adpartner.tqoon.cl | adprintpartner.tqoon.cl |
| 미국향 | adpartner.tqoon.com | adprintpartner.tqoon.com |


## 접속자 / 사용 언어에 따른 변화
하나의 사이트에 하나의 Joiner 정보와 이와 연관된 TCon, L.T 값을 가지고 있으면 되는 고객 사이트와 다르게 파트너 시스템은 로그인 계정에 따라 다른 Joiner 정보와 TCon, L.T 값을 가지고 있어야 합니다. 때문에 파트너에서는 로그인 시점에 접속한 관리자의 몰 정보와 사용하는 언어를 `Session` 에 설정 합니다. 연관된 `Session`은 다음과 같습니다.

| Static Info | Session |
| --- | --- |
| CurrentSite | `HttpContext.Current.Session["Joiner"]` |
| TCon | `HttpContext.Current.Session["joinerId"]` |
| L.T | `HttpContext.Current.Session["UserSiteNationCode"]` |