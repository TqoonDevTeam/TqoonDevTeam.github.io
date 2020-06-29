---
title: "2.0 권한체크"
description: "권한체크"
tags: [개발가이드, 권한체크 ]
---

# 2.0 권한체크
 Tqoon 2.0에서 로그인/ 비로그인와 관리자 (Admin,PAadmin)의 접근 가능한 페이지 세팅 방법을 설명합니다.




## 로그인 여부
 1. CurrentUser.IsLogin으로 로그인 여부를 확인 가능합니다.
 2. [Authorize] 속성으로 로그인/비로그인 페이지 설정이 가능합니다.


 

## 관리자(Admin,Padmin)
관리자 계정의 경우에는 Admin 관리자 계정과 PAdmin 관리자 계정으로 분류합니다. 
  1. Admin의 경우 Admin2 관리자 페이지에서 사용하는 Master 관리자 계정을 의미합니다.
  2. PAdmin의 경우 Partner 관리자 페이지에서 관리자 권한을 부여한 계정을 의미합니다.
  3. **tbluser 테이블의 strusertype 컬럼으로 확인** 가능하며 admin의 경우 ADMIN, PAdmin의 경우 PAdmin으로 등록 되어있습니다.


---
**TqoonUserIdentity.cs에서 user의 role 세팅**

```csharp
public class TqoonUserIdentity : ClaimsIdentity 
{

   public TqoonUserIdentity(UserItem userItem)
            : base(DefaultAuthenticationTypes.ApplicationCookie)
        {
            //생략
            if ("ADMIN".Equals(userItem.UserType)) claims.Add(new Claim(ClaimTypes.Role, TqAuthenticationRoleType.MasterAdmin));
            if ("PADMIN".Equals(userItem.UserType)) claims.Add(new Claim(ClaimTypes.Role, TqAuthenticationRoleType.PartnerAdmin));
            //생략
        }
}
```

**CurrentUser에 권한 추가**

```csharp
public class CurrentUser
{

   public static bool IsManager 
        {
            get
            {
                var managerRole = new List<string>();
                managerRole.Add(TqAuthenticationRoleType.MasterAdmin); //admin 관리자 계정
                managerRole.Add(TqAuthenticationRoleType.PartnerAdmin); //partner 관리자 계정
                return AnyInRole(managerRole);
            }
        }

        public static bool IsMasterAdmin
        {
            get
            {
                var masterAdminRole = new List<string>();
                masterAdminRole.Add(TqAuthenticationRoleType.MasterAdmin);
                return AnyInRole(masterAdminRole);
            }
        }

        private static bool AnyInRole(List<string> roleList)
        {
            return AuthenticationManager.User.FindAll(ClaimTypes.Role).Any(w => roleList.Contains(w.Value));
        }
}
```


##  접근 가능한 페이지 세팅 방법

**Controller 권한 확인 및 세팅 방법**

```csharp
 public class rolecheck 
    {
        public ActionResult rolecheck1()
        {
            if (CurrentUser.IsMasterAdmin) //admin 마스터 관리자일 경우만
            if (CurrentUser.IsManager)  //관리자 계정일 경우 (admin, Partner 관리자)
            //생략
        }


      //Authorize 속성에서 Role을 설정하여 페이지별 권한 설정 가능 합니다.
      [Authorize(Roles = TqAuthenticationRoleType.MasterAdmin)] 
         public ActionResult rolecheck2()
        {
            //생략
        }
    }
```


**View 권한 확인 --ngConstants.cshtml**


```csharp
  app.constant("$CurrentUser", {
            IsSigned: @(CurrentUser.IsLogin ? "true" : "false"),
            IsManager : @(CurrentUser.IsManager ? "true" : "false"),
            IsNonmember: @(CurrentUser.IsNonmember ? "true" : "false"),
            IsSnsUser: @(CurrentUser.IsSnsUser ? "true" : "false"),
            UserId: "@(CurrentUser.UserId)",
            UserName: "@(CurrentUser.UserName)",
            UserSiteNickName: "@(CurrentUser.UserSiteNickName)",
            UserEmail: "@(CurrentUser.Email)",
            UnConvertUserId: "@(UserPath.GetUnConvertId(CurrentUser.UserId))",
            Roles:"@(CurrentUser.Role)",
            IsMobileDevice: @(CurrentUser.IsMobileDevice ? "true" : "false"),
            IsInRole: function(hasRoles) {
                var rolesArray = _.map("@(CurrentUser.Role)".split(','), function(d){return d.trim();});
                var hasRolesArray = _.map(hasRoles.split(','), function(d){return d.trim();});

                for (var i = 0; i < rolesArray.length; i++) {
                    if(_.contains(hasRolesArray, rolesArray[i])) return true;
                }
                return false;
            },
            UserLocale : "@(CurrentUser.Locale)"
        });
```
```csharp

angular.module("Page.TqCafeBoardArticleModify", [])
.controller("Page.TqCafeBoardArticleModify.PluginCtrl", ["$scope","$CurrentUser",
      function ($scope, $CurrentUser) {
          $scope.canDelete = function (userId) {
              return $CurrentUser.UserId === userId || $CurrentUser.IsInRole("MasterAdmin, PartnerAdmin");
          }
tqAddModule("Page.TqCafeBoardArticleModify");

```





