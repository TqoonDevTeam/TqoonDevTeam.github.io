---
title: ""
description: ""
tags: [개발가이드, 기술]
history:
  - version: '1.0'
    date: '2020-07-07'
    user: '안현규'
    desc: '초안'
---
## GoodsOptionDependencyRule 사용법

* 개요

  * 기능 설명 
    * 옵션 별 부가기능을 부여하기 위한 기능
    * ex 
      1. 옵션 별 하위 옵션 지정
      2. 옵션 별 최소, 최대 크기 지정
      3. 옵션 별 특정항목의 값 설정
      4. 옵션 별 스크립트 실행

* 사용법

  * AdprintNewDb.dbo.GoodsOptionDependencyRule 테이블에 insert

  * 테이블 개요

    * | 컬럼 |    id    |      goodsId       |       whenRule        |          whenoptionGroup          |                     whenStandardTypeCode                     |                    whenStandardValueCode                     |       thenRule        |       thenOptionGroup        |                     thenStandardTypeCode                     |                    thenStandardValueCode                     |          thenRuleValue          |                   reverseRule                    |                   ruleOrder                    | state | regDate  |
    | :--: | :------: | :----------------: | :-------------------: | :-------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------: | :--------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-----------------------------: | :----------------------------------------------: | :--------------------------------------------: | :---: | :------: |
    | 개요 | 자동생성 | 적용할 상품 아이디 |   룰이 작동할 조건    | 룰이 작동할 조건<br> **옵션영역** |                 룰 조건이 걸릴 **옵션그룹**                  |                          조건 옵션                           |       작동할 룰       | 룰이 작동될<br> **옵션영역** |                   룰이 작동될 **옵션그룹**                   |                     룰이 작동될 **옵션**                     |   룰이 작동될 옵션의 적용 값    | 반대 동작이 이루어질시 반대의 룰을 적용할 것인지 | 같은 상품의 룰이 여러개 있을경우 순서 order by | 상태  | 작성날짜 |
    | 참고 |          |                    | [whenRule](#whenrule) |       ex ) GoodsAddedOption       | [whenStandardTypeCode & thenStandardTypeCode](#whenstandardtypecode--thenstandardtypecode) | [whenStandardValueCode & thenStandardValueCode](#whenstandardvaluecode--thenstandardvaluecode) | [thenRule](#thenrule) |    ex ) GoodsAddedOption     | [whenStandardTypeCode & thenStandardTypeCode](#whenstandardtypecode--thenstandardtypecode) | [whenStandardValueCode & thenStandardValueCode](#whenstandardvaluecode--thenstandardvaluecode) | [thenRuleValue](#thenrulevalue) |             99 = true <br> 0 = false             |                                                |       |          |

  * 사용예시

    1. 적용할 상품 번호 및 옵션 정보 확인

    2. 쿼리 작성

       * ex ) 

         ~~~ mssql
         insert into GoodsOptionDependencyRule values (54,1,N'GoodsAddedOption',N'MATERIAL_PEGAMENTO',N'["PB80_RM"]',2,'GoodsAddedOption',N'LAMINATION','["NG","BR"]','true',99,2,'REG',GETDATE());
         insert into GoodsOptionDependencyRule values (54,1,N'GoodsAddedOption',N'MATERIAL_PEGAMENTO',N'["PB80_RM"]',2,'GoodsAddedOption',N'LAMINATION','["MT"]','false',99,1,'REG',GETDATE());
         ~~~

       * MATERIAL_PEGAMENTO 옵션 그룹에 **PB80_RM**옵션 선택시 LAMINATION 그룹에 **NG, BR** 옵션을 숨기는 룰

       * reverseRule을 99로 해놓고 반대 동작시에는 **MT**옵션이 보여지게 하는 룰

    3. 적용된 모습

       * 기존 옵션

         ![](https://user-images.githubusercontent.com/40411714/86860431-ca36bd80-c0ff-11ea-8ccf-9e98291b71e5.PNG)

       * **PB80_RM**옵션 선택

         ![](https://user-images.githubusercontent.com/40411714/86860434-cc008100-c0ff-11ea-88bd-470b450eba41.PNG)

         * **NG, BR**옵션 사라짐

       * 반대동작(PB80_RM 체크 해제)시 2번째 룰에 의해 돌아옴

         ![](https://user-images.githubusercontent.com/40411714/86860438-cd31ae00-c0ff-11ea-8979-8ff567c08a49.PNG)

---

### whenRule

* 입력 가능 값

  * **0**
    * 무조건 1회 즉시 작동	
    * ONETIME

  * **1**
    * 조건과 같을때
    * EQUALS

  * **2**
    * 이상
    * ORMORE

  * **3**
    * 이하
    * ORLESS
  * **4**
    * 초과
    * GREATER

  * **5**
    * 미만
    * LESS

  * **6**
    * 어떤것이든 변경시
    * ANYCHANGED
  * **10**
    * 유효하지 않는 값
    * 이 조건은 상위 ngForm의 $invalid에 영향을 받습니다.
  * **20**
    * 유효한 값
    * 이 조건은 상위 ngForm의 $valid에 영향을 받습니다.

---

### whenStandardTypeCode & thenStandardTypeCode

* ex )

  <img src="https://user-images.githubusercontent.com/40411714/86560712-f20c1100-bf99-11ea-9a9f-47f78f2740d8.png" alt="WhenOptionGroup"  />

  * 룰이 작동할 조건옵션의 Group명을 명시해주면 됩니다.

---

### whenStandardValueCode & thenStandardValueCode

* ex ) 

  ![](https://user-images.githubusercontent.com/40411714/86574179-65208200-bfb0-11ea-9eeb-112ed2d53eb4.png)
  
  * 룰이 작동할 조건 옵션을 명시 해주면 됩니다.

---

### thenRule

* 입력 가능 값
  * **1**
    * 조건에 따라, 대상 옵션의 특정항목의 disabled 속성을 설정 합니다.
    * DISABLED
  * **2**
    * 조건에 따라, 대상 옵션의 특정항목 또는 전체의 display(show or hide) 를 설정 합니다.
    * HIDE
  * **3**
    * 조건에 따라, 대상 옵션의 최소값 속성을 설정합니다.
    * MIN
  * **4**
    * 조건에 따라, 대상 옵션의 최소값 속성을 설정합니다.
    * MAX
  * **5**
    * 조건에 따라, 대상 옵션의 특정항목의 readonly 속성을 설정 합니다.
    * READONLY
  * **10**
    * 조건에 따라, 대상 옵션 전체의 display(show or hide) 를 설정 합니다.
    * OPTION_AREA_HIDE
  * **20**
    * 조건에 따라, 대상 옵션의 특정항목 값을 설정 합니다.
    * VALUE
  * **9999 & 1998**
    * 스크립트 실행
    * _SCRIPT_
    * MAIN_CONTROL_SCRIPT

---

### thenRuleValue

* ex )
  * thenRule : 1, 2, 5, 10
    * true 입력시 undisabled
    * false 입력시 disabled
  * thenRule : 3, 4, 20
    * 최솟값이나 최댓값 등 변화될 값을 작성
  * thenRule : 9999 & 1998
    * 실행될 스크립트를 작성

