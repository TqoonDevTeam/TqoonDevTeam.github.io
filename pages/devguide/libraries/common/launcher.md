---
title: "TqoonLibrariesExecutor"
description: "TqoonLibrariesExecutor "
tags: [개발가이드, Woker, TqoonLibrariesExecutor]
history:
  - version: '1.0'
    date: '2020-05-29'
    user: '이종기'
    desc: '초안'
---

# TqoonLibrariesExecutor

TqoonLibraries를 CommandLine으로 실행시키기 위한 유틸리티 입니다.
보통 빌드 후 Libs 폴더를 그대로 복제하여 프로그램 실행을 위한 패키지로 구성하고 사용합니다.

### 사용방법

| 파라메터 | 설명 | 예 |
| :--- | :--- |:--- |
| `/T` | 수행할 메소드 경로 | /T:{네임스페이스를 포함한 클래스경로}.{메소드명}<br>/T:TqoonLib.Service.OrderInfo.OrderInfoService.GetOrderItemUserView |
| `[/P]` | 메소드에 전달될 파라메터(JSON형식) | /P:"\{orderId:123\}" |
| `[/MT]` | 수행할 메소드 파라메터의 타입을 지정한다.(AssemblyQualifiedName 이름의 JSON 배열)<br>오버로딩 형태의 메소드를 정확히 찾기위해 사용한다. | /MT:"['System.String', 'System.Int32']" |
| `[/A]` | 인스턴스에 Tqoon SpringAutwire를 사용할 경우 XML Provider 경로를 지정한다. | /A:"C:\DEV\Provider\DEV52_JP_AdprintNewDB\AppContext.xml" |
| `[/LM]` | 수행할 메소드를 포함한 라이브러리명을 특정할 때 사용한다.<br>지정하지 않으면 수행할 메소드 경로의 첫번째 세그먼트를 라이브러리 명으로 한다. | /LM:AdprintLib |
| `[/WDR]` | 작업디렉토리를 강제할 때 사용한다. | /WDR:"C:\DEV\Libs" |

### 예제

```bat
cd C:\DEV\Libs

TqoonLibrariesExecutor.exe /T:TqoonLib.Service.OrderInfo.OrderInfoService.GetOrderItemUserView /P:"{orderId: 123}" /A:"C:\DEV\Provider\DEV52_JP_AdprintNewDB\AppContext.xml"
```

### 주의

호출하고자 하는 서비스를 래핑하는 객체를 TqoonLibraries 솔루션의 Batch 프로젝트에 생성하십시오. 이러한 방식은 트랜잭션   처리에 안전하며, 비지니스 서비스가 TqoonLibrariesExecutor에 의해 호출되고 있음을 도메인화 하여 추정할 수 있습니다.
이 것은 영향분석에 매우 이롭습니다.

### 트랜잭션

이 프로그램이 호출하는 객체에 `[Transaction]` 특성이 선언되어 있다면, 현재는 트랜잭션 처리가 되지 않습니다.
그 이유는 최초 진입 인스턴스는 Spring이 아닌 이 프로그램에서 생성하며, 이후의 속성들의 Aop, DI를 Spring에서 관리하기 때문입니다. 이 것은, 해당 서비스를 호출하는 도메인 클래스를 Batch 프로젝트에 생성하여 호출함으로써 해결할 수 있습니다.