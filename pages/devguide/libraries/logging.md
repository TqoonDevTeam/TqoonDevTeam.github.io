---
title: "로깅 가이드"
description: "Libraries > 로깅"
tags: [개발가이드, 백앤드, 로깅]
history:
  - version: '1.0'
    date: '2020-09-09'
    user: '안현규'
    desc: ''
---

## 로깅 가이드

* 개요
  * 이 문서는 Tqlogger 사용법과 상황별로 어떤 레벨에 로깅을 사용해야 하는지 가이드한 문서 입니다.

---

#### Log4net 설정 방법

* 로그를 남기기 위해 데이터베이스 연결이 필요 합니다.

* log4net.xml의 위치는 provider 내부에 위치해 있습니다.

  ![image](https://user-images.githubusercontent.com/40411714/92543649-f816ba80-f286-11ea-9708-ed127f9d4680.png)

* Tqlogger를 사용하기전에 각 프로젝트 시작전에 아래 예제와 같이 Log4net 설정을 해주어야 합니다.

  ``` c#
  log4net.Config.XmlConfigurator.ConfigureAndWatch(new FileInfo(Server.MapPath("~/App_Config/Provider/log4net.xml")));
  ```

---

#### 로그 저장 DB

* Tqlogger로 남긴 로그는 BizLog 테이블에 저장됩니다.

* 로그가 저장되는 BizLog 테이블은 두가지로 나눌 수 있습니다.
  1. 향별 DB에 저장되는 TqoonLog.dbo.BizLog
  2. 글로벌 DB에 저장되는 TqoonLog.dbo.BizLog
* 역활
  * 향별 DB에 저장되는 TqoonLog.dbo.BizLog
    * 프로젝트에서 발생하는 오류, 디버그 등 로그 저장
  * 글로벌 DB에 저장되는 TqoonLog.dbo.BizLog
    * 224 작업 서버에서 동작 중인 작업 워커에서 발생하는 오류, 디버깅 등 로그 저장

---

#### TqLogger 사용법

* TqLogger는 아래와 같이 TqLogger.{LEVEL} 로 사용할 수 있습니다. 

  ``` c#
  var orderItem = AdprintOrderDao.FindById(pgCommonResultItem.OrderId);
  
  if (orderItem.IsPaid())
  {
      TqLogger.Debug("이미 지불된 주문입니다.", "AlibabaNotifyController");
      return true;
  }
  ```

* 매개변수

  * | message            | logKey    | exception     | request      | callerMemberName | callerFilePath   | callerLineNumber |
    | ------------------ | --------- | ------------- | ------------ | ---------------- | ---------------- | ---------------- |
    | 로깅시 남길 메세지 | 로깅 위치 | 발생한 입셉션 | 받은 Request | 호출한 곳의 이름 | 발생한 파일 위치 | 발생한 줄 위치   |

---

#### LEVEL에 종류와 사용 예시

* Debug 

  * Debug는 말 그대로 디버깅을 위한 용도로 특정 상황 발생시 디버그 로그를 남겨 놓기위해 사용 합니다.

  * 현재 Error와 Debug가 용도가 구분되지 못하고 혼용되어 사용되고 있음

  * Debug는 Error와 구분하여 디버그 로그를 남길때만 사용 요망

    ``` c#
    public static void Debug(object message, string logKey = "", Exception exception = null, HttpRequestBase request = null, [CallerMemberName] string callerMemberName = "", [CallerFilePath] string callerFilePath = "", [CallerLineNumber] int callerLineNumber = 0)
    {
        BizLog.Debug(message, logKey, exception, request, callerMemberName, callerFilePath, callerLineNumber);
    }
    ```

* Error

  * 에러 발생시 로그를 남기기 위한 레벨 입니다.

  * 마찬 가지로 Debug와 개념을 혼동하지 않고 사용 요망

    ``` c#
    public static void Error(object message, string logKey = "", Exception exception = null, HttpRequestBase request = null, [CallerMemberName] string callerMemberName = "", [CallerFilePath] string callerFilePath = "", [CallerLineNumber] int callerLineNumber = 0)
    {
        BizLog.Error(message, logKey, exception, request, callerMemberName, callerFilePath, callerLineNumber);
    }
    ```

* Fatal

  * 단순 에러가 아닌 발생하면 안되는 크리티컬한 에러가 발생할 경우 사용할 레벨입니다.

    ``` c#
    public static void Fatal(object message, string logKey = "", Exception exception = null, HttpRequestBase request = null, [CallerMemberName] string callerMemberName = "", [CallerFilePath] string callerFilePath = "", [CallerLineNumber] int callerLineNumber = 0)
    {
        BizLog.Fatal(message, logKey, exception, request, callerMemberName, callerFilePath, callerLineNumber);
    }
    ```

* Info

  * 메소드로 넘어오는 파라미터 값 및 필요한 정보 개발환경에서 확인하기 어려운 내용을 로그로 남길때 사용 합니다.

    ``` c#
    public static void Info(object message, string logKey = "", Exception exception = null, HttpRequestBase request = null, [CallerMemberName] string callerMemberName = "", [CallerFilePath] string callerFilePath = "", [CallerLineNumber] int callerLineNumber = 0)
    {
        BizLog.Info(message, logKey, exception, request, callerMemberName, callerFilePath, callerLineNumber);
    }
    ```

* Warn

  * 오류까진 아니더라도 발생시 주의가 필요한 경우 해당 로그를 남깁니다.

    ``` C#
    public static void Warn(object message, string logKey = "", Exception exception = null, HttpRequestBase request = null, [CallerMemberName] string callerMemberName = "", [CallerFilePath] string callerFilePath = "", [CallerLineNumber] int callerLineNumber = 0)
    {
        BizLog.Warn(message, logKey, exception, request, callerMemberName, callerFilePath, callerLineNumber);
    }
    ```







