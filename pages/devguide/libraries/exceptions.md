---
title: "예외처리"
description: "백엔드 작성 > 6. 예외처리"
tags: [개발가이드, 백엔드, 예외]
history:
  - version: '1.0'
    date: '2019-09-09'
    user: '최동호'
    desc: '초안'
---
# 6. 예외처리

## 6.1. 소개
이 문서는 백엔드 서비스의 예외처리 설명과 간단한 예제를 포함하고 있습니다.

## 6.2. 예외 종류
티쿤에서는 예외를 2가지로 분리합니다.
- **비관리된 예외**: 외부 모듈에서 발생하는 예외나, 프로그램 버그로 인해 발생한 의도치 않은 예외
- **관리되는 예외**: 의도적으로 발생시킨 관리되는 예외 (TqException)

이 중 관리되는 예외를 통해 클라이언트에서 적절히 처리됩니다.
예외는 `TqoonException` 객체를 통해 생성합니다

```cs
TqoonException.CreateBizException(string message, string title = "");
TqoonException.CreateParamException(string message, string title = "", string paramName = "");
```

예외의 종류

| TqException | 설명 |
| --- | --- |
| TqoonBizException | 업무처리중에 발생하는 크리티컬한 예외 입니다. |
| TqoonParamException | 전달된 파라메터에 의한 이유로 발생하는 예외 입니다. |

### 6.2.1. TqoonBizException
업무 처리중 발생하는 크리티컬한 예외를 발생시킬 때, 사용합니다.
이 예외는 클라이언트에 자동으로 Alert 되며 필요한 경우, 유의미한 메시지로 전환하여 표시할 수 있습니다.

```cs
if(usePoint < currentHavingPoint)
{
  // 고객포인트 부족
  TqoonException.CreateBizException("ORDER_ERROR001", "ORDER_ERROR"); // 클라이언트에서는 오류 코드를 유의미한 메시지로 전환하여 표시할 수 있습니다.
}
```

### 6.2.2. TqoonParamException
고객(클라이언트)가 입력(전달)한 파라메터가 원인이 되어 발생한 예외를 발생시킬 때, 사용합니다.
이 예외는 클라이언트에 자동으로 Alert 되지 않지만, 필요한 경우, Alert 시킬 수 있으며, 입력 양식의 Validation에 영향을 줄 수 있습니다.

```cs
if(string.IsNullOrEmpty(userName))
{
  // 고객이름 없음
  TqoonException.CreateParamException("SIGNIN_ERROR01", paramName = "UserName"); // 클라이언트에서는 오류 코드를 유의미한 메시지로 전환하여 표시할 수 있으며, 입력 양식의 Validation에 영향을 줄 수 있습니다.
}
```

## 6.2. 예외로깅과 트랜잭션처리
- 발생하는 모든 예외는 서비스 계층에서 Transaction 특성이 선언된 경우, AdoTemplate이 주입된 DAO들이 모두 롤백됩니다.
- 티쿤에서는 2개 이상의 Database에 접속하며 각각 명명된 AdoTemplate를 가지고 있으나 Transaction 처리는 AdoTemplate의 이름을 가지고 있는 접근에 한해서만 처리됩니다.
- TqoonBizException 예외는 TqoonLog.dbo.BizError에 자동으로 로깅됩니다.