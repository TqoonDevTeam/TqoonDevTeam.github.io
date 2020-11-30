---
title: "admin2"
description: "admin2"
tags: [개발가이드, admin2 ]
---

## ADMIN
Admin2는 관리자 페이지로 관리자 권한을 갖고 있는 관리자 유저만 로그인이 가능합니다.
티쿤에서 확인하는 경영, 통계 등을 확인하며 ADPRINT사이트의 ADMIN2상품을 관리합니다.
페이지별 접근 권한을 설정할 수 있습니다.

---

 **형상관리**
  ㅁ 어드민2 > https://github.com/TqoonDevTeam/AdAdmin
  ㅁ 라이브러리 > https://github.com/TqoonDevTeam/TqoonLibraries



  **사이트**
  ㅁ 각 향별(DB기준)로 관리자 페이지가 존재합니다.

| adprintNewDb  | ordermall | 
|  https://www.admin2.adprint.jp | https://admin.mantenmall.jp/| 
|  http://adadmin.tqoon.(국가코드)|http://admin.tqoon.(국가코드) | 




## 관리자 계정

  **관리자 계정 부여** 
   관리자 권한을 갖은 계정만 접근 가능합니다.

    [dbo].[SetAdmin] '부여할 관리자 ID' , '1'

    프로시저를 실행하여 관리자 계정부여가 가능합니다.
      - 1일경우 - Admin 관리자 (정직원)
      - 2일경우 - PAdmin 관리자

  참조 : https://tqoondevteam.github.io/pages/devguide/libraries/common/rolecheck.html 

  **Ordermall 회원 동기화**
    adprintNewDB의 계정으로 Ordermall 접근 불가능합니다.
  
    EXEC SyncUserForOrderMall '아이디'
    프로시저를 사용하여 ordermall 관리자 사이트에서도 접속가능하도록 관리자 계정을 부여합니다.
    

## 권한별 페이지 제어

    [TqAuthorize(Roles = "정직원,이용사")]
     
     TqAuthorize객체에 Roles를 부여하여 권한별로 페이지 접근을 제어합니다.
     Roles는 AdminMember테이블의 adminRoles를 참조합니다.

   
