---
title: "DataAccess 계층"
description: "백엔드 작성 > 5. DataAccess 계층"
tags: [개발가이드, 백엔드, 계층, DataAccess, DAL]
history:
  - version: '1.0'
    date: '2019-09-09'
    user: '최동호'
    desc: '초안'
---
# 4. DataAccess 계층

## 4.1. 소개
이 문서는 백엔드 개발 중 DataAccess 계층 개발에 대한 설명을 담고 있습니다.

## 4.2. DataAccess 계층 설명
DataAccess 계층은 백엔드 개발 중 Database를 핸들링을 하기 위한 계층입니다.
이 계층은 Database에 접근할 수 있는 최상위 계층이자 마지막 계층입니다.
이 계층에서는 여러 DAO 객체를 생성하여 Database에 접근하며 테이블 뿐만 아니라 뷰, 프로시져 또는 특정목적의 접근방식의 필요로 모듈화 하여 구현할 수 있습니다.

### 4.2.1. DataAccess 계층 구성
DataAccess 계층은 DAO(Data Access Object)객체와 DTO(Data Transfer Object)객체로 이루어져 있습니다.
DataAccess 계층 개발은 데이터 처리적 측면의 핵심관심사항이 파편화 되지 않고 모듈화 되도록 주의하며 관리 해야 합니다.
관리 방법은 모두 디렉토리 및 네임스페이스의 패턴화된 구조로 관리하고 있습니다.

#### 4.2.1.1. 네임스페이스 구조
서비스의 객체들은 아래의 네임스페이스 구조 아래 생성됩니다.

```cs
namespace app.info.MyDaoName.Dao {}
namespace app.info.MyDaoName.Dao.Model {}
```
네임스페이스 설명

| namespace | 설명 |
| --- | --- |
| info.MyDaoName.Dao | `MyDaoName`가 의미하는 데이터 처리적 측면의 DAO(Data Access Object)객체가 위치 합니다. |
| info.MyDaoName.Dao.Model | 테이블 또는 뷰에서 조회하는 데이터와 매칭되는 DTO(Data Transfer Object) 객체 또는 특수한 엔티티 객체가 위치 하는 곳 입니다. |

#### 4.2.1.2. 디렉토리 구조
DataAccess 계층에서 필요한 DAO객체와, DTO객체가 위치해야 하는 규칙입니다.
보통 아래의 모습처럼 디렉토리를 생성합니다.

```diff
.
└──📁info
    └──📁DaoName /* ex, Orders */
        └──📁Dao /* Dao 객체가 위치 */
        └──📁Model /* Dao 객체가 사용하는 엔티티객체 또는 모델객체가 위치 */
```

## 4.3. DataAccess 계층 생성
DAO(Data Access Object)객체와 DTO(Data Transfer Object)객체로 구성됩니다.
이 중 DAO객체는 ADO.NET 기술을 사용하며 이를 지원하는 Spring.NET의 템플릿 기반의 DAO작성 패턴을 따릅니다.
티쿤은 자체개발한 Spring.NET의 AdoDaoSupport로 부터 파생된 ObjectDao 지원객체를 이용하여 일반화된 기능이 추가된 DAO객체를 만듭니다.
ObjectDao를 사용함으로써 티쿤의 DAO객체는 대부분 Generic 기술(Spring.Data.Generic)을 사용하며, 때문에 DTO객체가 항상 함께 구성될 필요가 있습니다.

### 4.3.1 DTO (엔티티, 모델) 객체 생성
티쿤의 DAO는 Spring.NET의 Spring.Data.Generic 네임스페이스에 포함된 기술을 사용합니다. 때문에 이 기술의 Generic 객체로 사용할 DTO 객체는 항상 필요합니다.
DTO 객체는 조회 전용의 리터럴한 모델 객체로 사용하거나, Database의 테이블과 매칭되는 엔티티 객체를 통해 제공되는 일반화된 CRUD 기능을 시도할 수 있습니다.

#### 4.3.1.1. 엔티티 객체 생성 (~DbItem)
엔티티 객체는 Database의 테이블과 매칭됩니다.
이 객체는 테이블이름을 유추할 수 있는 이름과 함께 접미어 **DbItem**를 사용하여 명명되거나, 또는 기능적 측면의 이름을 사용한다면 **TableInfo**특성을 사용하여 Database의 Table을 유추할 수 있도록 해야합니다.
제공되는 특별한 특성과 함께 DAO객체에서 사용하면 Table의 입력, 수정, 삭제, 조회를 쉽게 작성할 수 있습니다.

```cs
/// <summary>
/// SimpleUserInfo Table의 컬럼과 매핑되는 엔티티 객체
/// </summary>
[TableInfo]
public class SimpleUserInfoDbItem
{
  [IdColumn]
  public int Id { get; set; } // id int identity(1,1)
  public string FullName { get; set; } // fullName nvarchar(20)
  public int Age { get; set; } // age int
  public string BirthDay { get; set; } // birthDay varchar(8)
}
```

예제에 포함된 특성의 설명

| attribute | 설명 |
| --- | --- |
| `TableInfo(string tableName)` | 테이블명을 가르키는 정보가 들어있는 특성입니다.<br>클래스명이 접미어 `DbItem`을 사용하고 있다면, 이 특성을 선언하지 않아도 됩니다.<br>`tableName`을 전달하지 않으면, 클래스명으로 부터 유추 합니다.
| `IdColumn` | 엔티티객체의 속성 중, 자동증가되는 Identity임을 명시하는 특성입니다.<br>이 특성이 선언되면 입력, 수정 시 해당 속성에 접근하지 않도록 처리됩니다.  |

#### 4.3.1.2. Model 객체 생성
모델 객체는 View나 Join된 데이터를 가져올 때, 리터럴하게 사용되는 객체 입니다.
또는 특별하게 입력, 수정, 삭제가 필요할 경우에도 목적에 맞는 객체로써 생성될 수 있습니다.
또한, 조회조건이 되는 파라메터 객체가 될 수도 있습니다.

```cs
// SimpleUserInfo에 고객의 주소가 추가 포함하는 객체
public class SimpleUserInfoItem : SimpleUserInfoDbItem
{
  public string Address { get; set; }
}

// SimpleUserInfo에 고객별 주문번호가 추가 포함되는 객체
public class SimpleUserOrderItem : SimpleUserInfoDbItem
{
  public int OrderId { get; set; }
}

// 간단한유저정보 조회 파라메터
public class SimpleUserSearchParam
{
  public string NameLike { get; set; }
  public int? Age { get; set; }
}
```

#### 4.3.1.3. DTO 접미어 규칙
Model과 엔티티 객체는 사용방법에 따라 접미어 규칙을 가지고 있습니다.
이 규칙들은 프로그램에 의해 특별하게 제어되지는 않지만, 객체의 사용용도에 따라 약속된 명명 규칙입니다.

접미어 규칙 설명

| 접미어 | 용도 | 설명 |
| --- | --- |
| `DbItem` | 엔티티 | 테이블과 매칭되는 객체, 이 접미어가 선언된 객체는 Database Table과 매칭 됩니다. 즉, Table의 Column들이 이 객체의 속성이 됩니다.
| `Item` | 엔티티 & 모델 | `DbItem`을 부터 상속한 객체들은 `Item`을 접미어를 갖습니다. 이 객체는 상속받은 `DbItem`객체 기준의 CRUD가 가능하며, 조회 시 Join 되는 컬럼은 `Item`객체에 추가적인 속성으로 선언합니다. |
| `Param` | 파라메터 | 특별한 입력, 수정, 삭제, 조회에 필요한 파라메터 묶음 객체 입니다. 메시징 기반의 많은 파라메터가 필요한 경우 이 객체를 사용합니다. |
| `VO` | 모델 | 조회결과 만을 표현하기 위한 읽기전용 객체 입니다. 이 객체로 입력, 수정, 삭제의 기능을 수행해서는 안됩니다.<br>알려진 VO의 의미및 용도와는 조금 다르지만 조회영역에서 리터럴하게 사용한다는 것에 공통점을 두고 있습니다. |

### 4.3.1.4. DTO 객체에서 사용하는 특성들
아래는 DTO객체 생성시 사용되는 특성에 관한 설명입니다.
이들 특성으로 **ObjectDao**지원객체에서 테이블명과 컬럼명 매핑방식 등의 힌트를 얻고 동작하게 됩니다.

```cs
[TableInfo("tblMyTable")]
public class MyTableDbItem
{
  [IdColumn]
  public int Id { get; set; }
  
  [JsonParsing]
  public MyClass MyClass { get; set; }

  [XmlParsing]
  public MyClass MyClass2 { get; set; }

  /* ... */
}
```

| 특성 | 대상 | 설명 |
| --- | --- | --- |
| `TableInfo` | Class | 객체가 Table과 매칭되는 엔티티 객체임을 선언합니다.<br>`[TableInfo()]` - 테이블명이 전달되지 않으면 특성이 선언된 클래스 이름에서 유추 합니다. (보통 접미어를 제거하여 유추)<br>`[TableInfo(string TableName = className)]` - 테이블명을 파라메터로 전달하여 명시합니다. |
| `InsertIgnore` | Property | Insert시 입력되면 안되는 속성임을 선언합니다.<br>이 특성이 선언되면 `ObjectDao`지원객체가 제공하는 Insert 기능에서 해당 속성이 쿼리에서 제외 됩니다. |
| `UpdateIgnore` | Property | Update시 갱신되면 안되는 속성임을 선언합니다.<br>이 특성이 선언되면 `ObjectDao`지원객체가 제공하는 Update 기능에서 해당 속성이 쿼리에서 제외 됩니다. |
| `IdColumn` | Property | 속성이 Identity 컬럼임을 선언합니다. 이 특성은 `UpdateIgnore`, `InsertIgnore` 특성의 기능이 포함 됩니다.<br>`[IdColumn(bool Autoincrement = true)]]` - 자동증가 타입이 아님을 선언하면 `InsertIgnore` 특성의 기능은 제거 됩니다. |
| `Hashbytes` | Property | 입력, 수정, 삭제 시, 속성의 값을 단방향 암호화 처리하여 전달 합니다.<br>암호화 알고리즘은 Database에 설정된 알고리즘을 사용합니다.<br>`[Hashbytes(string Algorithm = "SHA2_512")]` - 알고리즘을 지정하지 않으면 SHA2_512 알고리즘으로 암호화 합니다. |
| `EncryptByKey` | Property | 입력, 수정, 삭제 시, 속성의 값을 양방향 암호화 처리하여 전달 합니다.<br>암호화 알고리즘은 Database에 커스텀 설정된 키를 사용합니다.<br>`[EncryptByKey(string SYMMETRIC_KEY = "SYMMETRIC_KEY_TqoonDefault")]` - 알고리즘을 지정하지 않으면 SYMMETRIC_KEY_TqoonDefault키에 정의된 알고리즘으로 암호화 합니다. |
| `DecryptByKey` | Property | 조회 시, 데이터 값을 복호화 하여 가져 옵니다.<br>암호화 알고리즘은 Database에 커스텀 설정된 키를 사용합니다.<br>`[DecryptByKey(string SYMMETRIC_KEY = "SYMMETRIC_KEY_TqoonDefault")]` - 알고리즘을 지정하지 않으면 SYMMETRIC_KEY_TqoonDefault키에 정의된 알고리즘으로 복호화 합니다. |
| `XmlParsing` | Property | 속성을 XML로 변환하여 전달 합니다. 또 반대로 XML데이터를 객체로 변환하여 속성에 할당합니다. |
| `JsonParsing` | Property | 속성을 Json String으로 변환하여 전달 합니다. 또 반대로 Json String을 객체로 변환하여 속성에 할당합니다. |
| `NameChanged` | Property | 속성의 명칭과 컬럼의 명칭이 다를 때, 실제 컬럼명과 매칭을 위해 사용합니다.<br>`[NameChanged(string ChangedName)]]` - 특성에 값을 선언하면 해당 속성은 자동 생성 쿼리에서 변경된 이름으로 동작합니다.<br>엔티티 객체는 가능한한 컬럼명과 일치 시키십시오. |

### 4.3.2. DAO (Data Access Object) 객체 생성
DAO객체는 기본적으로 ADO.NET 기술을 사용하며 Spring.NET의 AdoDaoSupport 지원객체로 부터 파생된 **ObjectDao** 객체를 상속받음으로 써 생성합니다.
보통 DTO 객체를 통하여 단일 인스턴스 템플릿기반의 DAO를 생성합니다만, 필요한 경우 Generic 형태가 아닌 비템플릿 기반의 DAO또한 생성할 수 있습니다.
단일 인스턴스 템플릿과의 차이를 두기위해 **ObjectDao**는 ObjectDao&lt;ModelClass&gt;와 ObjectDao로 존재 합니다.
이 객체들은 Spring.NET의 각각 Spring.Data.Object, Spring.Data.Generic의 AdoDaoSupport 지원객체를 상속받으며 그 기능과 함께 티쿤에서 제작한 추가적인 기본기능을 제공받습니다.

```cs
// 단일인스턴스 기반 Generic형 DAO
public class SimpleUserInfoDao : ObjectDao<SimpleUserInfoItem>, ISimpleUserInfoDao
{
  public int void DeleteAll()
  {
    return Query("DELETE SimpleUserInfo");
  }

  public int void UpdateUserName(int id, string fullName)
  {
    return Query("UPDATE SimpleUserInfo SET fullName = @fullName WHERE id = @id", new { id, fullName });
  }

  public IList<SimpleUserInfoItem> FindListByAge(int age)
  {
    return Query(new ListQuery<SimpleUserInfoItem>
    {
        Query = "SELECT * FROM SimpleUserInfo WHERE age = @age",
        DbParam = new { age }
    });
  }
}

// DataTable, DataSet 등의 기술지원을 하는 Object형 DAO
public class SimpleUserInfoDao2 : ObjectDao, ISimpleUserInfoDao2
{
  /* ... */
}
```

#### 4.3.2.1. ObjectDao의 기본제공 기능
티쿤의 **ObjectDao** 지원객체는 Spring.NET의 AdoDaoSupport로 부터 파생되었습니다.
때문에 **ObjectDao**를 상속받는 모든 DAO들은 AdoTemplate속성에 접근하여 Spring에서 제공하는 기능을 그대로 사용할 수 있습니다.
또한 티쿤에서 자체 제공하는 일반화된 편의 기능을 사용할 수 있습니다.

아래는 여기에 추가로 **ObjectDao**에서 제공하는 일반화된 편의기능에 대해 설명합니다.

##### Insert<T>(T item)
전달된 객체에서 테이블명을 유추하여 새로운 행을 입력합니다.
Identity 컬럼이 존재하면 증가된 Identity 값을 반환합니다.

```cs
MyDao.Insert(myTableItem);
// SQL> INSERT INTO (col1, col2) VALUES ('', '')
```

##### Insert<T>(T item, bool triggerOff)
전달된 객체에서 테이블명을 유추하여 새로운 행을 입력합니다.
Identity 컬럼이 존재하면 증가된 Identity 값을 반환합니다.
트리거 OFF 옵션을 켜면, INSERT 트리거가 동작하지 않습니다.

```cs
MyDao.Insert(myTableItem, true);
// TRIGGER OFF 됨
// SQL> INSERT INTO (col1, col2) VALUES ('', '')
```

##### Update<T>(T item)
전달된 객체에서 테이블명과 Identity 속성을 유추합니다.
유추된 정보와 객체의 내용으로 행을 갱신합니다.

```cs
MyDao.Update(myTableItem);
// SQL> UPDATE MyTable SET col1 = '', col2 = '' WHERE id = 1234
```

##### Update<T>(T item, bool triggerOff)
전달된 객체에서 테이블명과 Identity 속성을 유추합니다.
유추된 정보와 객체의 내용으로 행을 갱신합니다.
트리거 OFF 옵션을 켜면, UPDATE 트리거가 동작하지 않습니다.

```cs
MyDao.Update(myTableItem, true);
// TRIGGER OFF 됨
// SQL> UPDATE MyTable SET col1 = '', col2 = '' WHERE id = 1234
```

##### Delete<T>(T item)
전달된 객체에서 Identity인 속성을 찾아 단건 1건을 삭제 합니다.
또는, Identity인 속성을 찾을 수 없는 경우 모든 속성을 Where절 조건으로 하여 삭제합니다.

```cs
MyDao.Delete(myTableItem);
```

##### Delete<T>(int id)
전달된 타입에서 테이블명을 유추하고 해당 id컬럼을 조건으로 ROW를 삭제 합니다.

```cs
MyDao.Delete<MyTableDbItem>(10);
// SQL>  DELETE MyTable WHERE id = 10;
```

##### T Query<T>(ItemQuery<T> query)
단건 조회를 지원합니다. 이 메소드는 DAO 객체 내에서 구현합니다. (protected)

```cs
return Query(new ItemQuery<MyClassDbItem>
  {
    Query = "SELECT * FROM MyClass WHERE id = @id",
    DbParam = new { id = 1234 }
  });

// Generic Type에 Primitive한 Value 타입이나 string, DateTime 형식이 할당되면, 쿼리는 Scalar로 동작합니다.
return Query(new ItemQuery<string>
  {
    Query = "SELECT TOP 1 col FROM MyClass"
  });
```

| ItemQuery 속성 | 설명 |
| --- | --- |
| Query | SQL Text을 할당합니다. |
| DbParam | Query 속성에 할당될 DbParameter를 지정합니다. |


##### IList<T> Query(ListQuery<T> query)
다건 조회를 지원합니다. 이 메소드는 DAO 객체 내에서 구현합니다. (protected)

```cs
return Query(new ListQuery<MyClassDbItem>
  {
    Query = "SELECT * FROM MyClass WHERE id > @id",
    DbParam = new { id = 1 }
  });

return Query(new ListQuery<int>
  {
    Query = "SELECT TOP 100 id FROM MyClass"
  });
```

| ListQuery 속성 | 설명 |
| --- | --- |
| Query | SQL Text을 할당합니다. |
| DbParam | Query 속성에 할당될 DbParameter를 지정합니다. |


##### int Query(ExecuteQuery query)
단순 실행 후 영향받은 ROW를 반환하는 기능입니다.
보통 프로시져를 호출하거나 삭제 및 갱신 할 때 사용합니다.
이 메소드는 DAO 객체 내에서 구현합니다. (protected)

```cs
return Query(new ExecuteQuery
  {
    Query = "UPDATE MyClass SET col1 = '123'"
  });

return Query(new ExecuteQuery
{
  Query = "EXEC dbo.RunProgram @key, @val",
  DbParam = new { key = "a", val = "b" }
});

return Query(new ExecuteQuery
{
  Query = "DELETE MyClass WHERE id = @id",
  DbParam = new { id = 123 }
});
```

### 4.3.3. Spring.NET의 AdoQuery, MappingAdoQuery, AdoNonQuery, StoredProcedure
Spring.NET은 객체로써의 RDBMS 작업을 위해 AdoQuery, MappingAdoQuery, AdoNonQuery, StoredProcedure와 같은 매우 편리한 추상객체를 지원합니다.
하지만, 티쿤에서는 위의 나열된 지원객체들은 사용하지 않습니다.

위의 나열된 지원객체에서 지원하는 기능은 여럿 사용함으로써 다른 패턴이 발생하는 것을 주의하고 있습니다. 때문에, 티쿤에서는 위의 나열된 지원객체들은 사용하지 않습니다.

자체 제공하는 일반화된 기본 제공기능을 사용하십시오.
