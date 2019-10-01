---
title: "QuickStart"
description: "백엔드 작성 > 1. QuickStart"
tags: [개발가이드, 백엔드, QuickStart]
history:
  - version: "1.1"
    date: "2019-10-01"
    user: "최동호"
    desc: "잘못된 예제 코드 수정"
  - version: "1.0"
    date: "2019-09-09"
    user: "최동호"
    desc: "초안"
---
# 1. QuickStart

## 1.1. 소개
이 문서는 백엔드(Back-End) 서비스 개발에 대한 간략한 설명과 빠른 시작 예제를 담고 있습니다.

## 1.2. 백엔드(Back-End) Service 설명
해외직판 솔루션 개발에는 주문, 결제, 배송, 정산, 등 여러 기능을 제공할 수 있는 엔터프라이즈 급 에플리케이션의 구축이 필요합니다.
티쿤 개발 조직은 이러한 엔터프라이즈급 애플리케이션 구축을 보다 쉽고, 빠르게 개발하기 위해 경량화 되고 강력한 도구에 관심이 많습니다.
이러한 목표와 관점아래 우리의 백엔드 서비스 개발은 웹서비스에 관한 모든 기능을 갖춘 ASP.NET 프레임 워크와 강력한 IoC, DI, Transaction 처리가 가능한 Spring.NET 솔루션을 사용하고 있습니다.

## 1.3. 간단한 사용자정보 관리서비스 만들기
복잡한 비지니스를 구현하기 앞서 이러한 모든 개발의 기초가 되는 데이터의 입력, 조회, 수정, 삭제 (CRUD)에 대한 기능 구현에 익숙해야 합니다.
아래는 이러한 기초가 되는 CRUD 작성 방법을 **간단한 사용자정보 관리서비스** 작성 예제를 통해 설명합니다.

### 1.3.1. 간단한 사용자정보 Table 만들기
사용자의 이름, 나이, 생년월일을 저장하는 테이블을 생성합니다.
이 테이블은 값이 자동증가되는 id 컬럼을 가지고 있으며 그것은 PK입니다.

예제는 이 테이블을 관리할 수 있는 백엔드 서비스를 개발합니다.
```sql
/* Sql Server */
CREATE TABLE SimpleUserInfo (
  id int IDENTITY(1,1) NOT NULL, /* Identity Column */
  fullName nvarchar(20) NOT NULL, /* 이름 */
  age int NOT NULL, /* 나이 */
  birthDay varchar(8), /* 생일(yyyyMMdd) */
  CONSTRAIN PK_SimpleUserInfo PRIMARY KEY(id)
)
```
### 1.3.2. DAO 만들기
데이터베이스의 데이터를 처리하기 위해서는 테이블과 관계를 가지는 DAO를 생성해야만 합니다.
티쿤은 ADO.NET 기술을 사용하고 있으며, 이 것을 일관된 방식으로 쉽게 사용하기 위해 Spring.NET이 제공하는 AdoDaoSupport 지원 객체를 사용하고 있습니다.
때문에 티쿤의 DAO 객체의 개발패턴는 ADO.NET 과 Spring.NET의 그것에 많은 영향을 받았으며, 때문에 예제와 실제 구현코드의 대부분은 Spring.NET의 개발패턴을 사용하거나 그 것으로 부터 파생된 패턴입니다.

DAO는 엔티티 객체와 모델 객체로 구성됩니다.
엔티티 객체는 실제 Table과 매칭됨으로 써 CRUD를 간편하게 처리하게 하며, 모델객체는 조회에 특화된 리터럴한 객체이거나 조회 파라메터 객체로 사용됩니다.
DAO개발의 자세한 설명은 논리적 계층으로 구분하고 설명하는 [4.DataAccess 계층](/pages/devguide/backend/layer_dataaccess.html) 장에서 설명합니다.

우선은 아래 예제 SimpleUserInfo 테이블을 핸들링 하기위한 DAO 작성 방법에 집중해 주십시오.

#### 1.3.2.1. 엔티티 및 모델 객체(DTO) 만들기
SimpleUserInfo 테이블을 쉽게 핸들링 하기 위해선, 테이블과 매칭이 되는 엔티티 객체와 모델객체를 만들어야 합니다.

```cs
namespace myApp.Info.SimpleUserInfo.Model
{
  /// <summary>
  /// SimpleUserInfo Table의 컬럼과 매핑되는 엔티티 객체
  /// </summary>
  [TableInfo("SimperUserInfo")]
  public class SimpleUserInfoDbItem
  {
    [IdColumn]
    public int Id { get; set; } // id int identity(1,1)
    public string FullName { get; set; } // fullName nvarchar(20)
    public int Age { get; set; } // age int
    public string BirthDay { get; set; } // birthDay varchar(8)
  }

  /// <summary>
  /// SimpleUserInfo Table을 관리하기 위한 모델 객체
  // 이 객체는 엔티티 객체인 SimpleUserInfoDbItem로 부터 상속됨으로 엔티티객체기반의 CRUD 작업을 수행할 수도 있습니다.
  /// </summary>
  public class SimpleUserInfoItem : SimpleUserInfoDbItem
  {
    // 엔티티 객체에 추가적인 속성이 필요할 때, 엔티티 객체를 상속 받을 수 있습니다.
    public string Address { get; set; }
  }
}
```

#### 1.3.2.2. DAO 객체 만들기
SimpleUserInfo Table 정보를 주고 받을 엔티티 객체나 모델 객체가 준비되었다면, 이제 실제로 테이블을 핸들링 할 수 있는 DAO 객체를 만들게 됩니다.

전통적으로 DAO를 만들게 될 때, Table 데이터를 처리하기 위한 CRUD 기능은 항상 반복적으로 구현된다는 것을 예상할 수 있습니다.
특히, Identity Column과 엔티티 객체를 기준으로 하는 CRUD 기능은 그중에서도 가장 일반화할 수 있는 기능입니다.

##### Identity Column과 엔티티 객체를 기준으로 하는 일반화된 CRUD의 예
```cs
Insert(SimpleUserInfoItem newItem);
FindItem(int id);
Update(SimpleUserInfoItem item);
Delete(int id);
```

##### 일반화된 CRUD 메소드를 제외한 DAO 객체 작성
티쿤의 **ObjectDao** 앞서 설명한 일반화된 CRUD 메소드를 제공합니다.
때문에 아래 예제에서 우리는 일반화된 CRUD 기능을 제외하고, 모든 데이터를 삭제하는 **DeleteAll** 기능 하나만을 추가 구현할 것입니다.

**ObjectDao** 지원 객체의 자세한 설명은 [4.3.2. DAO (Data Access Object) 객체 생성](/pages/devguide/backend/layer_dataaccess.html#432-dao-data-access-object-%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1)장에서 설명합니다.

우선 DAO객체 작성을 살펴 보십시오.
```cs
namespace myApp.Info.SimpleUserInfo.Dao
{
  public interface ISimpleUserInfoDao
  {
    /// <summary>
    /// 모든 고객을 조회합니다.
    /// </summary>
    /// <returns>
    /// 고객 리스트
    /// <returns>
    IList<SimpleUserInfoItem> FindAll();
  }

  /// <summary>
  /// SimpleUserInfo 테이블의 간단한 입력, 수정, 삭제, 조회 기능을 제공합니다.
  /// </summary>
  public class SimpleUserInfoDao : ObjectDao<SimpleUserInfoItem>, ISimpleUserInfoDao
  {
    public IList<SimpleUserInfoItem> FindAll()
    {
      return Query(new ListQuery("SELECT * FROM SimpleUserInfo"));
    }
  }
}
```

### 1.3.3. 서비스 객체 만들기
서비스 객체는 구현하고자 하는 비지니스 범위에서 가장 간결하고 명확하게 응집할 수 있는 기능들의 집합 입니다.
이들 서비스 객체는 보통 비지니스 범위에서 시작하는 사용자의 요구사항이 인터페이스로 노출되고 구현됩니다.
즉, 서비스는 DAO가 가지는 기능적인 관점의 인터페이스와 달리 좀더 사용자가 인지하는 범위의 언어가 인터페이스에 포함되어야 함을 의미합니다.
때문에, 우리는 단순히 DAO를 래핑하는 서비스를 만들게 될지라도 비지니스 범위의 관점에서 서비스 객체의 인터페이스와 DAO객체의 인터페이스는 다르다는 점을 중요하게 생각해야 합니다.

이로인해 DataAccess계층과 Service계층이 나뉘게 되며, 비지니스를 구현하는 Service 계층의 자세한 설명은 [3.Service 계층](/pages/devguide/backend/layer_service.html)장에서 설명합니다.

아래는 사용자 관점에서 서비스 객체를 생성한에제 입니다.
SimpleUserInfo 관리를 위한 사용자의 니즈를 해결하기위해 작성된 서비스가 기능적 관검의 DAO를 어떻게 사용하는지 살펴볼 수 있습니다.
```cs
namespace myApp.Service.SimpleUserInfo
{
  /// <summary>
  /// 간단한사용자정보CRUD 서비스
  /// </summary>
  public interface ISimpleUserInfoCrudService
  {
    /// <summary>
    /// 새로운 사용자을 추가 합니다.
    /// <summary>
    /// <param name="fullName">사용자명</param>
    /// <param name="age">나이</param>
    /// <param name="birthDay">생년월일(yyyyMMdd)</param>
    /// <returns>
    /// 새로 생성된 유저의 Identity 값을 반환합니다.
    /// </returns>
    int AddNewUser(string fullName, int age, string birthDay);

    /// <summary>
    /// 사용자 정보를 수정합니다.
    /// <summary>
    /// <param name="userItem">사용자 정보 객체</param>
    void UserInfoModification(SimpleUserInfoDbItem userItem);

    /// <summary>
    /// ID 값으로 사용자 정보를 삭제 합니다.
    /// <summary>
    /// <param name="id">Identity</param>
    /// </returns>
    void DeleteUserById(int id);

    /// <summary>
    /// ID에 해당하는 사용자 정보 단건을 찾습니다.
    /// </summary>
    /// <returns>
    /// 삭제된 유저정보 수
    /// </returns>
    SimperUserInfoItem FindById();

    /// <summary>
    /// 모든 고객을 조회합니다.
    /// </summary>
    /// <returns>
    /// 고객리스트
    /// </returns>
    IList<SimperUserInfoItem> GetAllUsers();
  }

  public class SimpleUserInfoCrudService : ISimplerUserInfoCrudService
  {
    [Autowire]
    public ISimplerUserInfoDao SimplerUserInfoDao { get; set; }

    public int AddNewUser(string fullName, int age, string birthDay)
    {
      var newUser = new SimpleUserInfoItem();
      newUser.FullName = fullName;
      newUser.Age = age;
      newUser.BirthDay = birthDay;

      // ObjectDao 지원객체에 의해 일반화된 기본제공 함수 Insert를 사용합니다.
      // Insert 함수는 새로운 ROW를 생성하고 그 ROW에 자동 생성된 Identity 값을 반환합니다.
      return SimplerUserInfoDao.Insert(newUser);
    }

    public void UserInfoModification(SimpleUserInfoDbItem userItem)
    {
      // ObjectDao 지원객체에 의해 일반화된 기본제공 함수 Update를 사용합니다.
      // Update 함수는 객체의 Identity 값으로 관련된 ROW을 갱신하고 영향받은 ROW 수를 반환합니다.
      SimplerUserInfoDao.Update(userItem);
    }

    public void DeleteUserById(int id)
    {
      // ObjectDao 지원객체에 의해 일반화된 기본제공 함수 DeleteById를 사용합니다.
      // DeleteById 함수는 테이블의 Identity 컬럼을 조건으로 관련된 ROW을 삭제하고 영향받은 ROW 수를 반환합니다.
      SimplerUserInfoDao.DeleteById(id);
    }

    public SimperUserInfoItem FindById(int id)
    {
      // ObjectDao 지원객체에 의해 일반화된 기본제공 함수 FindById를 사용합니다.
      // FindById 함수는 테이블의 Identity 컬럼을 조건으로 관련된 ROW 1건을 반환합니다.
      return SImperUserInfoDao.FindById(id);
    }

    public IList<SimperUserInfoItem> GetAllUsers()
    {
      // 단순한 명령의 전달 처럼 보이지만, 우리는 서비스 객체의 비지니스를 위한 인터페이스 계약과 서비스와 DAO간의 계약은 다르다는 것을 중요하게 생각합니다.
      return SImperUserInfoDao.FindAll();
    }
  }
}
```

## 1.4. 백엔드의 Controller
전체 구조를 물리적으로 양분하여 바라본다면, Service, DataAccess 계층이 포함된 라이브러리와 .NET MVC 기술을 사용하는 웹 에플리케이션으로 구분될 수 있습니다.
때문에 .NET MVC 웹 에플리케이션의 Controller는 물리적인 계층으로 나누어 지며, 비지니스 로직 구현이 존재 하지 않습니다.

이들 에플리케이션의 Controller에는 해당 웹 에플리케이션에 종속된 세션, 파일, 로깅 처리와 간단한 분기문, 연속처리문 만이 구현됩니다.
그리고 비지니스 처리를 위해 Controller에는 서비스 계층의 객체를 주입하여 사용합니다.

```cs
public class SimpleUserInfoManagementController : AbstractPageController
{
  [Autowire]
  public ISimplerUserInfoCrudService SimplerUserInfoCrudService { get; set; }

  [HttpPost]
  public JsonResult AddNewUserAndGet(string fullName, int age, string birthDay)
  {
    TqLogger.DebugReq("새로운사용자추가요청");
    int id = SimplerUserInfoCrudService.AddNewUser(fullName, age, birthDay);
    SimpleUserInfoItem userUserItem = SimplerUserInfoCrudService.FindById(id);
    return Json(userUserItem);
  }

  /* ... */
}
```