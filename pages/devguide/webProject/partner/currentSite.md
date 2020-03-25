---
title: ""
description: ""
tags: [개발가이드, 기술, CurrentSite]
history:
  - version: '1.0'
    date: '2020-03-20'
    user: '김정훈'
    desc: '초안'
---

# CurrentSite
---
접속 중인 사이트 정보에 접근합니다.
`Global.asax`의 `Application_BeginRequest()` 시점에 세팅합니다. 
최초 일회 `JoinerItem`, `TCon`, `TimeZone`, `L.T`, `CommonCode` 정보가 모두 설정 된후, 이후에는 메모리에 저장된 정보를 사용합니다. 별도 Refresh 메서드를 통해 특정 정보를 갱신할 수 있습니다.
`JoinerItem` 관련 정보는 `CurrentSite` 객체를 통해 접근 하지만, `TCon`, `L.T`, `CommonCode` 는 별도의 Static 객체를 통해 접근합니다.
`CurrentSite` 객체는 웹 프로젝트마다 같은 이름의 스태틱 객체가 있으며 조금씩 동작 방식이 틀립니다.

## 중요 기능

| `CurrentSite` | `JoinerItem` | 설명 |
| --- | --- | --- |
| .JoinerItem |  | 이용사 VO 모델 |
| .UserSiteNationCode | .UserSiteNationCode | 몰의 국가 코드 : jp, kr, sg, in (일본 jp 인경우 빈 문자열을 리턴) |
| .Symbol | | 국가 통화 : S$, ₹, RM, Rp, $, 元, 円 |
| .Locale | .UserSiteNationCode 참조 | 몰의 언어코드 : ja-jp, ko-kr, en-sg, en-in, id |
| .JoinerId | .Id | 이용사 ID |
