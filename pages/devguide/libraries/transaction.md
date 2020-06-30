---
title: "Transaction 처리"
description: "백엔드 작성 > Transaction"
tags: [개발가이드, 백엔드, Transaction]
history:
  - version: '1.0'
    date: '2020-06-29'
    user: '이정희'
    desc: '초안'
---
# 7. Transaction

## 7.1 소개

이 문서는 Transaction 처리 방법에 대해 설명하고 있습니다.

## 7.2 Transaction 처리 방법

기본적으로 클래스의 public 메소드 위에 `[Transaction]`을 사용하면 Transaction 처리가 가능합니다.

```cs
[Transaction]
public void Test(){
  // 생략
}
```

### 7.2.1 Autowire된 객체에서 Transaction 처리 가능

Spring.NET이 생성한 인스턴스(Proxy 객체)에서만 Transaction 처리가 가능합니다. 
그렇기 때문에 Autowire 된 객체에서 Transaction 처리가 가능합니다.

```cs
// Service 
public class TransactionTestService : ITransactionTestService
{
  [Autowire]    
  public ITransactionTestDao TransactionTestDao { get; set; }

  [Transaction]
  public void Do()
  {
    TransactionTestDao.Insert(1);
    TransactionTestDao.Delete(2);
  }
}
```

```cs
// Controller
public class TransactionController
{
  [Autowire]
  public ITransactionTestService TransactionTestService { get; set; }

  // transaction 처리 불가
  public ActionResult BadTest()
  {
    var transactionTestService = new TransactionTestService();
    transactionTestService.Do();
  }

  // transaction 처리 가능
  public ActionResult GoodTest()
  { 
    TransactionTestService.Do();
  }
}
```

### 7.2.2 호출하는 메소드에 Transaction Attribute 사용

실제 호출하는 메소드에 `[Transaction]`을 사용해야합니다.

```cs
// Service 
public class TransactionTestService : ITransactionTestService
{
  [Autowire]    
  public ITransactionTestDao TransactionTestDao { get; set; }

  public void Do1()
  {
    DoDbProc1();
  }

  [Transaction]
  public void Do2()
  {
    DoDbProc2();
  }

  [Transaction]
  public void DoDBProc1()
  {
    TransactionTestDao.Insert(1);
    TransactionTestDao.Delete(2);
  }

  public void DoDBProc2()
  {
    TransactionTestDao.Insert(1);
    TransactionTestDao.Delete(2);
  }
}
```

```cs
// Controller
public class TransactionController
{
  [Autowire]
  public ITransactionTestService TransactionTestService { get; set; }

  // transaction 처리 불가
  public ActionResult BadTest()
  {
    TransactionTestService.Do1();
  }

  // transaction 처리 가능
  public ActionResult GoodTest()
  { 
    TransactionTestService.Do2();
  }
}
```

## 7.3 여러 DB에 Transaction 처리

Provider에 Transaction Manager DB별로 선업합니다.
Attribute로 Manager 사용을 명시적으로 선언합니다.

```xml
<object id="transactionManager" type="Spring.Data.Core.AdoPlatformTransactionManager, Spring.Data">
    <property name="DbProvider" ref="DbProvider" />
</object>

<object id="transactionManagerJB" type="Spring.Data.Core.AdoPlatformTransactionManager, Spring.Data">
    <property name="DbProvider" ref="DbProvider_JangBoGo" />
</object>

<tx:attribute-driven transaction-manager="transactionManager"/>
<tx:attribute-driven transaction-manager="transactionManagerJB"/>
```

예시

```cs
public class TempTestService : ITempTestService
{
    [Autowire]
    public ICommonObjectDao COD { private get; set; }

    [Autowire]
    [AdoTemplateName("AdoTemplate_JangBoGo")]
    public ICommonObjectDao CODJ { private get; set; }
    
    [Autowire]
    [AdoTemplateName("AdoTemplate_OrderMall")]
    public ICommonObjectDao CODOM { private get; set; }

    [Transaction]
    public void Test()
    {
        COD.Query(new ExecuteQuery { Query = @"INSERT INTO TempTest(val) values (@val)", DbParam = new { val = Guid.NewGuid().ToString() } });

        CODJ.Query(new ExecuteQuery { Query = @"INSERT INTO TempTest(val) values (@val)", DbParam = new { val = Guid.NewGuid().ToString() } });
        
        CODOM.Query(new ExecuteQuery { Query = @"INSERT INTO TempTest(val) values (@val)", DbParam = new { val = Guid.NewGuid().ToString() } });
        
        throw new Exception();
    }
}
```

결과

```sql
select * from adprintNewDB.dbo.TempTest
select * from JangBoGo.dbo.TempTest
select * from ordermall.dbo.TempTest

Manager 설정을 안한 ordermall에만 데이터가 저장됩니다.
-----
empty
-----
empty
-----
1 | 6a923ac2-a325-4ffc-8efd-782b44c07cb9
-----
```