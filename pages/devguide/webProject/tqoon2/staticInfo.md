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

# Static Info
---
Static 클래스를 이용하여 자주 사용하는 정보를 손쉽게 접근할 수 있도록 지원합니다. 이 정보들은 사이트 로딩시 혹은 회원 로그인시 세팅됩니다.
`CurrentUser`, `CurrentSite`는 프로젝트 별로 별도의 객체를 사용하며 `TCon`, `L.T`, `CommonCode` 는 Libraries의 공통 객체를 사용합니다.


## CurrentUser
---
접속 중인 유저 정보에 접근합니다.
로그인 시점에 `TqoonUserAccount.SignIn(UserItem userItem)` 메서드를 통해 `AuthenticationManager` 에 등록됩니다.

### 중요기능

| `CurrentUser` | `UserItem` | 설명 |
| --- | --- | --- |
| .UserId | .UserId | 고객 로그인 아이디, 비로그인시 string.empty |
| .UserName | .Name1 | 고객명 |
| .Email | .Email | 고객 이메일 |
| .AccountType | .LoginDealerId | 가입경로 : Facebook, Google, Twitter, Yahoo, Nonmember, Kakao, Naver, Account |
| .CustomerType | .CustomerType | 고객 : NORMAL, SELLER |
| .Role | | 사용자 규칙 : MasterAdmin, PartnerAdmin, MemberUser, NonmemberUser, SnsUser
| .IsManager |  | 관리자인지 여부, Role 이 MasterAdmin or PartnerAdmin |
| .IsMasterAdmin ||마스터 관리자인지 여부, Role 이 MasterAdmin |




## CurrentSite
---
접속 중인 사이트 정보에 접근합니다.
`Global.asax`의 `Application_BeginRequest()` 시점에 세팅합니다. 
최초 일회 `JoinerItem`, `TCon`, `TimeZone`, `L.T`, `CommonCode`, `ViewEngines`, `Bundles` 정보가 모두 설정 된후, 이후에는 메모리에 저장된 정보를 사용합니다. 별도 Refresh 메서드를 통해 특정 정보를 갱신할 수 있습니다.
`JoinerItem` 관련 정보는 `CurrentSite` 객체를 통해 접근 하지만, `TCon`, `L.T`, `CommonCode` 는 별도의 Static 객체를 통해 접근합니다.


### 중요 기능

| `CurrentSite` | `JoinerItem` | 설명 |
| --- | --- | --- |
| .JoinerItem |  | 이용사 VO 모델 |
| .UserSiteNationCode | .UserSiteNationCode | 몰의 국가 코드 : jp, kr, sg, in |
| .Locale | .UserSiteNationCode 참조 | 몰의 언어코드 : ja-jp, ko-kr, en-sg, en-in, id |
| .JoinerId | .Id | 이용사 ID |
| .SiteUrlWithScheme | .SiteUrl.PrependWWW() | 메일컨텐츠에 절대 경로가 필요한 경우 사용 : href="@(CurrentSite.SiteUrlWithScheme)/MyPage/Orders" |

## CommonCode
---
`tblCategory`, `tblCode`, `tblCodeType`, `partnerCode`, `partnerCodeType` 테이블에 저장되어 있는 해당 이용사의 코드 정보를 불러옵니다.

자세한 사항은 Libraries 항목의 StaticInfo 항목을 참고 바랍니다.

## TCon
---
이용사별 설정 값 및 기본 값을 가지고 옵니다.

자세한 사항은 Libraries 항목의 티콘 항목을 참고 바랍니다.