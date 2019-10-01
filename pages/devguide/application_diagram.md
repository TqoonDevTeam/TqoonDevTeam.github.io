---
title: "CRUD 흐름 - DAO 만들기"
description: "CRUD 흐름 - DAO 만들기"
category: 가이드
subcategory: 백엔드
tags: [crud, flow, dao, 백엔드]
---

## DAO
컴퓨터 소프트웨어에서 데이터 접근 객체(data access object, DAO)는 일부 종류의 데이터베이스나 기타 퍼시스턴스 매커니즘에 추상 인터페이스를 제공하는 객체이다. 응용 프로그램의 호출들을 퍼시스턴스 계층에 매핑시킴으로써 DAO는 데이터베이스의 상세한 사항을 노출시키지 않고 특정 데이터의 일부 동작을 제공하게 된다. 이러한 분리는 단일 책임 원칙을 지원한다. 도메인 특화 객체 및 자료형(DAO의 퍼블릭 인터페이스) 관점에서 응용 프로그램이 필요로 하는 데이터 접근이 무엇인지를, 어떻게 이러한 요구사항을 특정 DBMS, 데이터 스키마 등을 만족할 수 있는지(DAO의 구현체)와 분리시킨다.


## DAO만들기
티쿤에서 DAO는 daoClass, interface, model(VO) 로 구성됩니다.

- ***daoClass***: 특정 테이블, 또는 여러테이블의 복합적인 작업(ViewTable대상의 조회 또는 그에 준하는 목적을 가진 조회쿼리 집합)을 위한 처리 객체
- ***interface***: daoClass의 인터페이스
- ***model***: 조회결과를 매핑하거나, daoClass가 특정 테이블에 대한 CRUD를 제공할 때, 특정 테이블에 대한 모델을 Dao생성 시, 제네릭으로 던지면 CRUD의 기본함수를 제공

###### ex)
```cs
/// <summary>
/// 고객테이블 DAO 객체
/// <summary>
public interface IUserDao : IObjectDao<TblUserDbItem>
{
  /// <summary>
  /// 사용자 Id로 이름을 가져온다.
  /// <param name="userId">고객ID</param>
  /// </summary>
  string GetUserName(string userId);

  /// <summary>
  /// 나이에 해당하는 유져 리스트를 조회한다.
  /// <param name="age">나이</param>
  /// </summary>
  IList<UserItem> GetUserList(int age);
}

public class UserDao : ObjectDao<TblUserDbItem>, IUserDao
{
  public string GetUserName(string userId)
  {
    return Query(new ItemQuery<string>("SELECT [Name] FROM [tblUser] WHERE [userId] = @UserId", new { UserId = userId }));
  }
  public IList<UserItem> GetUserList(int age)
  {
    return Query(new ListQuery<UserItem>("SELECT * FROM [tblUser] WHERE [age] = @Age", new { Age = age }));
  }
}
```

### 작성규칙
1. ObjectDao 또는 ObjectDao<Generic>을 상속받는다.
  - 제네릭 타입의 상속인 경우 해항 제네릭 모델의 기본 CRUD함수 를 제공한다.
2. 인터페이스를 생성한다.
  - 인터페이스는 IObjectDao 또는 IObjectDao<Generic>을 상속받는다.
3. 인터페이스에 주석을 반드시 작성한다.