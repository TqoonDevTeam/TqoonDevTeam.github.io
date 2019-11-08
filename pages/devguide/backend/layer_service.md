---
title: "서비스 계층"
description: "백엔드 작성 > 3. 서비스 계층"
tags: [개발가이드, 백엔드, 계층, 서비스]
history:
  - version: '1.0'
    date: '2019-09-09'
    user: '최동호'
    desc: '초안'
---
# 3. 서비스 계층

## 3.1. 소개
이 문서는 백엔드 개발 중 비지니스 구현을 당담하는 서비스 계층에 대한 설명과 예제를 담고 있습니다.

## 3.2. 서비스 계층 설명
서비스 계층은 비지니스를 구현하는데 있어 가장 중요한 계층 중 하나입니다.
이 계층에서는 여러 DataAccess 계층을 호출하여 데이터를 준비하고 처리한 내용을 저장할 수 있습니다. 그리고 다른 Service들을 호출할 수도 있습니다.

### 3.2.1. 서비스 계층 구성
서비스 계층은 Service객체와 Model과 자식 Module들로 구성됩니다.

최상위 Service 객체는 고객의 요구사항 중심으로 자연어에 가까운 인터페이스로 구현됩니다.
Module계층은 서비스 계층의 구조와 유사하며 상위 Service객체로 부터 기능적인 관점을 가지고 모듈화되어 있는 것이 Module계층 입니다. 이 계층은 서비스 계층이 객체지향의 관점을 가진 구현코드가 파편화되지 않고 모듈화 될 수 있는 위치이기도 합니다.
Model객체는 UI계층으로 보낼 리터널한 VO객체나, 서비스간 모듈간 통신을 위한 파라메터 객체가 존재하는 위치입니다.

이 구조의 관리는 네임스페이스의 패턴화된 구조로 관리하고 있습니다.

#### 3.2.1.1. 네임스페이스 구조
서비스의 객체들은 아래의 네임스페이스 구조로 구성됩니다.

```cs
namespace myApp.Service.SimpleUserInfo {}
namespace myApp.Service.SimpleUserInfo.Model {}
namespace myApp.Service.SimpleUserInfo.Module {}
namespace myApp.Service.SimpleUserInfo.Module.Model {} // Module 부터 다시 Service의 namespace 패턴을 반복한다
namespace myApp.Service.SimpleUserInfo.Module.MySubModule {}
namespace myApp.Service.SimpleUserInfo.Module.MySubModule.Model {}
namespace myApp.Service.SimpleUserInfo.Module.MySubModule.Module.AnyModules {}
```

##### 네임스페이스 설명
항상 Service로 시작합니다.

| namespace | 설명 |
| --- | --- |
| ..Service.{서비스명} | 서비스명 까지 네임스페이스가 구성됩니다. 이 곳에 서비스 객체들이 위치 합니다.<br/>고객의 요구사항을 중심으로 생성되는 서비스 네임스페이스는 아래에는 당연히 서비스 지향적인 여러 서비스 객체가 존재할 수 있습니다. |
| ..Service.{서비스명}.Model | 프리젠테이션으로 보낼 리터널한 VO객체나, 서비스와 모듈간 통신을 위한 파라메터 객체가 존재하는 위치입니다. |
| ..Service.{서비스명}.Module.{모듈명} | 상위 서비스 객체의 기능을 풀이하기 위해 객체지향의 관점을 가진 구현코드가 파편화되지 않고 모듈화 될 수 있는 위치입니다. |
| ..Service.{서비스명}.Module.{모듈명}.{서브서비스명} | Module은 Service 네임스페이스 구조와 패턴과 마찬가지로 아래 Model, Module 네임스페이스를 추가로 둘 수 있습니다. |

#### 3.2.1.2. 디렉토리 구조
서비스 계층에서 필요한 메시지와 메소드가 위치하는 디렉토리 구조 입니다.
보통 아래의 모습처럼 디렉토리를 생성합니다.

```diff
.
├──📁Service
|   └──📁Model
|   └──📁Module
|
└──📁Service
    └──📁Model
    └──📁Module
        └──📁Service /* 모듈아래 Service 디렉토기 구조가 반복될 수 있다. */
            └──📁Model
            └──📁Module
```

## 3.3. Service 객체 생성
Service 객체의 인스턴스는 Spring의 IoC, DI에 의해 관리됩니다. 때문에 반드시 인터페이스를 가지게 됩니다.
여느 인터페이스와 마찬가지로 인터페이스에는 Service가 구현해야 할 계약관계가 메소드로 표현되고, 인터페이스를 통해 Service 객체는 비지니스를 구현하게 됩니다.
아래 예제는 인터페이스와 Service 객체의 모습이며, 대부분의 서비스는 아래와 같은 형태를 갖습니다.
네임스페이스 Service로 시작하는 첫번째 깊이의 Service객체는 사용자의 요구사항에 맞는 자연어에 가까운 인터페이스를 갖는다는 것을 명심하십시오.
```cs
public class IMyStoreService
{
  /// <summary>
  /// 포인트로 지불
  /// <param name="orderId">주문번호</param>
  /// <param name="usePoint">사용포인트</param>
  /// </summary>
  void PayByPoints(int orderId, int usePoint);
}

public class MyStoreService : IMyStoreService
{
  [Autowire]
  public IOrderDao OrderDao { get; set; }

  [Autowire]
  public IPointDao PointDao { get; set; }
  
  public void PayByPoints(int orderId, int usePoint)
  {
    /* ... */
  }
}
```

### 3.3.1. 서비스 객체 특징
서비스 객체는 Spring에 의해 대부분 싱글톤으로 관리 됩니다.
때문에, 서비스 객체는 변경 가능성이 있는 속성이나 필드를 포함하지 않습니다.

```cs
public class MyStoreService : IMyStoreService
{
  private DateTime Now = DateTime.Now; // [X] 변동가능성이 있는 필드를 포함해서는 안됩니다.
  private int AnyCount; // [X] 서비스는 싱글톤 객체임으로 값을 할당하는 필드를 사용해서는 안됩니다.

  public void RunAnything(int count)
  {
    AnyCount = count; // [X] 서비스는 싱글톤 객체임으로 값을 할당하는 필드를 사용해서는 안됩니다.
    /* ... */
  }

  public void RunAnything2(int count)
  {
    var myVariables = new MyVariables(); // 계산이나 에스컬레이팅 되어야 하는 변수들의 집합은 객체로 생성하여 직접 인스턴스를 관리하거나 파라메터로 전달해야 합니다.
    myVariables.AnyCount = count;
    /* ... */
  }
}
```

### 3.3.2. 서비스 객체 구현에 포함되는 다른 계층과 비지니스 트랜잭션 처리
서비스 객체는 DataAccces 계층의 DAO들과 다른 Service, 그리고 자식 Module들로 구성됩니다.
이들은 모두 Spring DI에 의해 관리되며 이들 구성과 함께 Spring에서 DI수행을 판단할 수 있도록 `Autowire` 특성을 선언 합니다.
또한, `Transcation` 특성을 사용하여 Spring의 트랜잭션 관리를 사용할 수 있습니다.

`Autowire` 특성은 티쿤에서 자체 제작한 특성으로 Spring Framework가 Context생성을 자동으로 생성하게 하는 커스텀 특성입니다.
자세한 설명은 [5. Autowire](/pages/devguide/backend/autowire.html) 장에서 설명합니다.
```cs
public class MyStoreService : IMyStoreService
{
  [Autowire] // Spring Framework 의 IoC, DI가 적절히 동작할 수 있도록 Autowire 특성을 선언합니다.
  public IPointDao PointDao { get; set; }

  [Transaction]
  public void RunAnything(int count){
    /* ... */
  }
}
```
