---
title: "Autowire"
description: "서비스작성가이드 > 5. Autowire"
categories: [devGuide, dao]
tags: [devGuide, item, crud]
history:
  - version: '1.0'
    date: '2019-09-09'
    user: '최동호'
    desc: '초안'
---
# 5. Autowire

## 5.1. 소개
이 문서는 Autowire의 설명과 사용방법에 대해 설명하고 있습니다.

## 5.2. Autowire 설명
백엔드 서비스가 사용하는 Spring.NET 기술은 전통적으로 XML을 이용하여 구성합니다.
Spring.NET의 XML구성은 에플리케이션이 동작하기 전에 사용되는 모든 객체들에 반드시 유효한 XML형태로 구성되어야만 합니다.
이 방식은 코드의 변화가 활발한 개발환경에서 항상 정확하게 XKML을 구성해야만 하는 추가 자원을 필요로 합니다.

개발자에 의해 구성되는 XML은 변경 빈도가 높을 수록 리스크를 발생시키게 되며, 높은 확율로 프로덕션 환경에서 예외를 발생시키곤 합니다.
때문에, 이러한 리스크에서 벗어나기 위해 Autowire 특성을 사용하여 코드 레벨에서 Spring을 구성하는 방식을 사용하고 있습니다.

백앤드 서비스에서 사용하는 Autowire 특성은 Controller와, Service 계층 에서 사용됩니다.
이 특성은 Spring.NET Framework의 필수적으료 필요로 하고 변화가 적은 Database 접속정보등은 XML 구성을 사용하되 변화가 활발한 Controller와 Service에서는 사전 XML 구성없이 동작 가능하도록 하기위해 자체 제작된 특성입니다.

이 특성의 선언만으로 많은 XML구성을 작성하지 않아도 되며, 그 만큼 환경 구성의 리스크에서 벗어나게 됩니다.

사실 이러한 방법은 이미 Spring.NET CodeConfig에서 강력하게 지원하고 있습다만, 현재 프로젝트에서는 프로젝트 환경에 맞게 구성을 분리하고 간결히 사용하기위해 자체 개발한 Autowire 특성을 사용하고 있습니다.

## 5.3. Autowire 동작방식
Runtime에서 Spring.NET이 처음 인스턴스를 생성할 때, 해당 객체에 선언된 Autowire 특성을 판단하여 재귀적으로 모든 속성을 분석하여 Spring 컨텍스트 구성을 동적으로 완료 합니다.
한번 정의된 내용은 다른 Spring 컨텍스트 구성과 마찬가지로 초기화 될 때까지 유효하며, 초기화 되면 다시 분석하여 구성을 완료 합니다.

> Spring 컨텍스트 구성 시, 모든 계층의 오브젝트 정의는 XML이 아닌 `[Autowire]` 특성을 이용하십시오.

## 5.4. Autowire 사용
아래는 Autowire 특성을 사용하는 예제 입니다. 또한 Autowire 특성과 함께 사용하는 다른 특수한 특성에 대해 설명합니다.

### 5.4.1. Autowire 특성 설명
```cs
public class MyStoreService : IMyStoreService
{
  [Autowire(Singleton = false)]
  public IOrderDao OrderDao { get; set; }

  [Autowire]
  public IPointDao PointDao { get; set; }
  
  [Autowire(Type = typeof(CashPointDao))]
  public IPointDao CashPointDao { get; set; }

  [Autowire(ContextName = "PASSWORD_KEY")]  // 에플리케이션이 동작하기 전 XML 구성에 PASSWORD_KEY 가 정의되어 있어야 한다.
  public string PasswordFromXmlContext { get; set; }

  [Autowire(BasicContextName = "GoogleSnsService")] // 이미 XML구성에 정의되어 있는 내용으로 병합합니다. <object id="GoogleSnsService" ...><property name="PrivateKey" value="privateKey..." />
  public IGoogleSnsService GoogleSnsService { get; set; }
  /* ... */
}

public class GoogleSnsService
{
  public string PrivateKey { get; set; }
  /* ... */
}
```

Autowire 특성은 spring XML 구성의 Object에 설정하는 몇가지 기능을 지원합니다.

| Autowire 특성 | 설명 |
| --- | --- |
| Type | 정의될 인스턴스의 타입입니다.<br>타입이 지정되지 않으면 특성이 선언된 인터페이스나 추상객체를 상속받는 가장 가까운 클래스를 대상으로 합니다. |
| ContextName | 이미 XML구성에 정의되어 있을 때, 사용합니다. 보통 파일로 Private한 정보를 주입할 때 사용합니다. |
| BasicContextName | 이미 XML구성에 정의되어 있는 내용을 기준으로 새롭게 병합하여 정의하고 Spring 컨텍스트에 등록합니다. |

### 5.4.2. Autowire 특성과 함께 쓰이는 특성
Autowire 특성은 기본적으로 DI될 속성만을 가르킵니다.
하지만 대상의 타입이 가지는 내부 속성을 정의하고 싶을 때, 같이 사용하는 특성이 있습니다.
이 특성들은 XML 구성에서 Object의 Property 속성을 정의 하는 것과 유사한 기능을 제공합니다.

#### `AdoTemplateName(string adoTemplateName)`
Spring.NET 기술을 사용하는 DAO 객체는 AdoTemplate 정보가 주입되어야 합니다.
때문에 AdoTemplate에 대한 구성이 Spring 컨텍스트에 등록되어 있어야 하며, 티쿤에서 이 구성은 동적이 아닌 사전 XML로 구성됩니다.

AdoTemplateName 특성은 사전 구성된 AdoTempate을 DAO에 주입하기 위해 DAO의 AdoTemplate 속성의 정의하기 위한 특성입니다.

```cs
public class MyStoreService : IMyStoreService
{
  [Autowire]
  public IOrderDao OrderDao { get; set; } // DAO객체에 AdoTemplate특성이 선언되어 있지 않으면 기본 생성자로 선언된것으로 판단하며 XML 구성에 AdoTemplate 이름으로 등록된 AdoTemplate 정의를 사용합니다.

  [Autowire]
  [AdoTemplateName("AdoTemplateOtherDatabase")]
  public IOrderDao2 OrderDao2 { get; set; }

  // XML 구성
  // <object id="AdoTemplate" type="Spring.Data.Generic.AdoTemplate, Spring.Data"> ... </object>
  // <object id="AdoTemplateOtherDatabase" type="Spring.Data.Generic.AdoTemplate, Spring.Data"> ... </object>
}
```

티쿤의 DAO는 모두 AdoTemplate 속성이 주입되어야 하며, AdoTemplateName 규칙상 특성이 선언되어야 합니다.
하지만, 개발 편의를 위해 DAO는 AdoTemplateName특성을 선언하지 않더라도 `[AdoTemplateName("AdoTemplate")]`이 선언된것과 동일하게 동작합니다.

#### `AdoTemplateChange(string before, string after)`
티쿤에서는 법인에 따라 완전 동일한 Table 구조를 갖는 다른 법인용 Database를 가지고 있습니다.
때문에, 두 곳 이상의 Database를 같은 특정 서비스 객체에서 처리하고자 할 때, 특정 위치로 부터 주입되는 DAO객체들은 모두 AdoTemplateName 특성을 달리 가질필요가 있습니다.

이 때, 각기 다른 AdoTemplateName 특성을 가지는 서비스 클래스들을 모두 새로 만들어야 합니다.

```cs
public class MyAdoTemplate1Service : IMyAdoTemplate1Service
{
  [Autowire]
  [AdoTemplateName("AdoTemplate1")]
  public IOrderDao OrderDao { get; set; }

  /* 같은 로직 */
}

public class MyAdoTemplate2Service : IMyAdoTemplate2Service
{
  [Autowire]
  [AdoTemplateName("AdoTemplate2")]
  public IOrderDao OrderDao { get; set; }

  /* 같은 로직 */
}

public class ParentService : IParentService
{
  [Autowire]
  public IMyAdoTemplate1Service MyAdoTemplate1Service { get; set; }

  [Autowire]
  public IMyAdoTemplate2Service MyAdoTemplate2Service { get; set; }
}
```
위와같이 되면 같은 구현로직을 갖는 객체를 계속 생성해야 함으로 관리적으로 엄청난 비효율이 발생하게 되며 이 것을 XML구성을 사용하더라도 마찬가지로 많은 관리적인 비효율이 발생하게 됩니다.

이 때, AdoTemplateChange 특성을 사용하여 특정 위치로 부터 주입되는 연속적인 DAO객체들의 모든 AdoTemplate를 교체할 수 있습니다.

```cs
public class MyAdoTemplateService : IMyAdoTemplateService
{
  [Autowire]
  [AdoTemplateName("AdoTemplate")]
  public IOrderDao OrderDao { get; set; }
  /* ... */
}

public class ParentService : IParentService
{
  [Autowire]
  [AdoTemplateChange("AdoTemplate", "AdoTemplate2")] // 이 속성으로 부터 전파되어 정의되는 모든 DAO들은 'AdoTemplate' 이름으로 정의하려 한다면 이를 취소하고 AdoTemplate2로 정의한다
  public IMyAdoTemplateService MyAdoTemplateService_AdoTemplate { get; set; }

  [Autowire]
  public IMyAdoTemplateService MyAdoTemplateService_AdoTemplate2 { get; set; }
}
```