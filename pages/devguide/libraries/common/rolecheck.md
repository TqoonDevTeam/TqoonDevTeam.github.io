---
title: "2.0 권한체크"
description: "권한체크"
tags: [개발가이드, 권한체크 ]
---

# 2.0 권한체크
* Tqoon 2.0에서 로그인/ 비로그인와 관리자 (Admin,PAadmin)의 접근 가능한 페이지 세팅 방법을 설명합니다.


## 로그인 여부
1. CurrentUser.IsLogin으로 로그인 여부를 확인 가능합니다.
2. [Authorize] 속성으로 로그인/비로그인 페이지 설정이 가능합니다.


## 관리자(Admin,Padmin)
* 관리자 계정의 경우에는 Admin 관리자 계정과 PAdmin 관리자 계정으로 분류합니다. 
  1. Admin의 경우 Admin2 관리자 페이지에서 사용하는 Master 관리자 계정을 의미합니다.
  2. PAdmin의 경우 Partner 관리자 페이지에서 관리자 권한을 부여한 계정을 의미합니다.
  3. **tbluser 테이블의 strusertype 컬럼으로 확인** 가능하며 admin의 경우 ADMIN, PAdmin의 경우 PAdmin으로 등록 되어있습니다.


## 회원 분류(MemberUser,NonmemberUser,SnsUser)
*  회원은 회원가입 유무에 따라 일반 회원 빛 비회원, 가입 경로에 따라 SNS유저로 분류할 수 있습니다.
* **tblUser 테이블의 loginDealerId로 분류 합니다.**

#### TqoonAuthenticationOptions에서 확인

* ~~~ c#
  public static class TqoonAuthenticationOptions
  {
      public const int DealerId_Google = 489;
      public const int DealerId_Facebook = 487;
      public const int DealerId_Twitter = 488;
      public const int DealerId_Yahoo = 495;
      public const int DealerId_Naver = 1;
      public const int DealerId_Kakao = 2;
      public const int DealerId_Nonmember = 486;
  }
  ~~~

---

## 관리자 계정 부여 및 회원 분류

* **TqAuthenticationRoleType.cs V2 User 계정 종류 확인**

  * Tqoon2.0에는 관리자계정(MasterAdmin,PartnerAdmin)과 비회원,SNS계정이 있습니다.

  * ~~~ c#
    namespace TqoonV2.Models.Role
    {
        public class TqAuthenticationRoleType
        {
            public const string MasterAdmin = "MasterAdmin";
            public const string PartnerAdmin = "PartnerAdmin";
            public const string MemberUser = "MemberUser";
            public const string NonmemberUser = "NonmemberUser";
            public const string SnsUser = "SnsUser";
        }
    }
    ~~~



* **TqoonUserIdentity.cs에서 user의 role 세팅**

  * userType을 체크하여 관리자 계정(MasterAdmin,PartnerAdmin)을 판단하고, 회원 계정을 분류합니다.

  * ~~~ c#
    public class TqoonUserIdentity : ClaimsIdentity 
    {
    
       public TqoonUserIdentity(UserItem userItem)
                : base(DefaultAuthenticationTypes.ApplicationCookie)
            {
                //생략
                if ("ADMIN".Equals(userItem.UserType)) claims.Add(new Claim(ClaimTypes.Role, TqAuthenticationRoleType.MasterAdmin)); //admin 관리자 계정
                if ("PADMIN".Equals(userItem.UserType)) claims.Add(new Claim(ClaimTypes.Role, TqAuthenticationRoleType.PartnerAdmin)); //partner 관리자계정
                if (userItem.IsSNSUser()) claims.Add(new Claim(ClaimTypes.Role, TqAuthenticationRoleType.SnsUser));  //sns 계정
                   claims.Add(new Claim(ClaimTypes.Role, GetMemberRole(userItem))); //비회원 계정 
                //생략
            }
            
            
            private string GetMemberRole(UserItem userItem)
            {
                if (userItem.LoginDealerId != TqoonAuthenticationOptions.DealerId_Nonmember) return TqAuthenticationRoleType.MemberUser;
                if (!userItem.UserId.StartsWith("*")) return TqAuthenticationRoleType.MemberUser;
                return TqAuthenticationRoleType.NonmemberUser;
            }
    }
    ~~~

* **CurrentUser**

  * 판단한 관리자 계정 및 회원 계정을 CurrnetUser에 추가합니다.

  * ~~~ c#
    public class CurrentUser
    {
    
       public static bool IsManager 
            {
                get
                {
                    var managerRole = new List<string>();
                    managerRole.Add(TqAuthenticationRoleType.MasterAdmin); 
                    managerRole.Add(TqAuthenticationRoleType.PartnerAdmin); 
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
    
             public static bool IsNonmember 
            {
                get
                {
                    if (IsAuthenticated())
                    {
                        return AuthenticationManager.User.HasClaim(ClaimTypes.Role, TqAuthenticationRoleType.NonmemberUser);
                    }
                    else
                    {
                        return false;
                    }
                }
            }
    
              public static bool IsSnsUser 
            {
                get
                {
                    return !"Account".Equals(AccountType);
                }
            }
    }
    ~~~


##  접근 가능한 페이지 세팅 방법

* **Controller 권한 확인 및 세팅 방법**

  * 위의 CureentUser에서 세팅한 계정으로 권한 확인 및 접근 가능 페이지를 세팅할 수 있습니다. 

  * ~~~ c#
     public class rolecheck 
     {
         public ActionResult rolecheck1()
         {
             if(CurrentUser.IsMasterAdmin) //admin 마스터 관리자일 경우만
                 if(CurrentUser.IsManager)  //관리자 계정일 경우 (admin, Partner 관리자)
                     if(CurrentUser.IsNonmember) //비회원일때
                         if(CurrentUser.IsSnsUser) //SNS 계정일 때
                             //생략
                         }
    
    
         //Authorize 속성에서 Roles부여 설정하여 페이지별 권한 설정 가능 합니다.
         //TqAuthenticationRoleType.cs에 정의 되어진 속성으로 Roles부여 가능합니다
         [Authorize(Roles = TqAuthenticationRoleType.MasterAdmin)] 
         public ActionResult rolecheck2()
         {
             //생략
         }
     }
    ~~~

* **View 권한 확인 --ngConstants.cshtml**

  * ngConstants.cshtml에 유저 정보가  $CurrentUser 상수로 정의 되어있습니다.

  * ~~~ c#
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
    ~~~

  * ~~~ c#
    //$CurrentUser.isInRole을 사용하여 권한을 확인할 수 있습니다.
    //ngConstants.cshtml에 정의된 $CurrentUser상수 값을 활용하여 User의 계정을 분류할 수 있습니다.
    angular.module("Page.TqCafeBoardArticleModify", [])
    .controller("Page.TqCafeBoardArticleModify.PluginCtrl", ["$scope","$CurrentUser",
          function ($scope, $CurrentUser) {
              $scope.canDelete = function (userId) {
                  if($CureentUser.IsNonmember) return false; //비회원 판단
                  if($CureentUser.IsSnsUser) return false; //SNS 판단
                  return $CurrentUser.UserId === userId || $CurrentUser.IsInRole("MasterAdmin, PartnerAdmin"); 
              }
    tqAddModule("Page.TqCafeBoardArticleModify");
    
    ~~~




