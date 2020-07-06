### GoodsOptionDependencyRule 사용법

---

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

    * | 컬럼 |    id    |      goodsId       |       whenRule        |    WhenOptionGroup    |             whenStandardTypeCode              | whenStandardValueCode | thenRule | thenOptionGroup | thenStandardTypeCode | thenStandardValueCode | thenRuleValue | reverseRule | ruleOrder | state | regDate |
      | :--: | :------: | :----------------: | :-------------------: | :-------------------: | :-------------------------------------------: | --------------------- | -------- | --------------- | -------------------- | --------------------- | ------------- | ----------- | --------- | ----- | ------- |
      | 개요 | 자동생성 | 적용할 상품 아이디 | 해당 룰이 발생할 조건 |   룰이 작동할 그룹    |           룰이 작동할 **옵션 **그룹           | 룰이 작동할           |          |                 |                      |                       |               |             |           |       |         |
      | 참고 |          |                    | [whenRule](#whenrule) | ex ) GoodsAddedOption | [whenStandardTypeCode](#whenstandardtypecode) |                       |          |                 |                      |                       |               |             |           |       |         |

---

#### whenRule

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

#### whenStandardTypeCode

* ex )

  <img src="https://user-images.githubusercontent.com/40411714/86560712-f20c1100-bf99-11ea-9a9f-47f78f2740d8.png" alt="WhenOptionGroup"  />

  * 룰이 작동할 옵션의 Group명을 명시해주면 됩니다.

---

