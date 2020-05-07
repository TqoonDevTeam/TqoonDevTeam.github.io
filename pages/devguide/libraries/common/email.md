---
title: "메일발송"
description: "메일발송"
tags: [개발가이드, 기술]
history:
  - version: '1.0'
    date: '2020-02-21'
    user: '김정훈'
    desc: '초안'
---

# 메일발송
메일 컨텐츠 구성에 필요한 데이터가 (로고 이미지 / 헤더 / 푸터)는 웹 프로젝트에 포함 되어 있습니다.
메일이 트리거 되는 라이브러리에서는 이를 알 수 없기 때문에 컨텐츠가 담긴 url 만 저장해 두고 별도 워커에서 메일을 발송합니다.

## QuickStart
1. 웹프로젝트에 메일 컨텐츠 페이지를 생성합니다.
2. 메일을 발송하려는 로직에서는 `JangBoGo.Service.Email.EmailService` 혹은 `Adprint.Service.AutoMail.AutoMailService` 를 이용하여 메일을 발송 풀에 추가합니다.

```cs
EmailService.Insert(from, to, contentsUrl, contentsUrlparam);
AutoMailService.NewMailContents(id, siteUrl);
```


## 컨텐츠 작성

메일 컨텐츠는 메일을 발송하는 웹사이트에서 구성 합니다. 
접근 경로는 //{siteUrl}/Mail/{mailType}/{id} 형식으로 되어 있습니다.

### 웹페이지 Controller
```cs
[IsYusurunIP] //내부 접속만 허용합니다. 메일발송은 웹 프로젝트 내부에서 트리거 되거나 웹서버와 같이 동작하는 CCNET 워커에서 트리거 됩니다.
public ActionResult NewMailContents(int id)
{
  var data = NewMailContentsService.GetMailInfo(id);
  return View(data);
}
```

### 웹페이지 View
```html
<!DOCTYPE html>
<html lang="@CurrentSite.Locale">
  <head>
    <title>메타테그의 Title 항목을 메일 제목으로 사용하므로 의미 있게 적어주셔야 합니다.</title>
  </head>
  <body>
    <div>메일내용</div>
  </body>
</html>
```


## 전송풀에 추가
### EmailService 이용하기
`JangBoGo.Service.Email.EmailService`
`JangBoGo.dbo.Email` 테이블에 데이터를 삽입합니다.
```csharp
EmailService.Insert(new EmailItem{    //ContentsUrl에 접속하여 컨텐츠를 가지고 온다
  Type = "MAILTYPE",
  From = "from@email.com",
  To = "user@email.com",
  ContentsUrl = "site.url"
  ContentsUrlParam = "queryParam=data&param2=data"
});

EmailService.Insert(new EmailItem{    //Contents 내용을 바로 메일로 전송
  Type = "MAILTYPE",
  From = "from@email.com",
  To = "user@email.com",
  Contents = "MAILCONTENTS"
});
```

### AutoMailService 이용하기
`Adprint.Service.AutoMail.AutoMailService`
시스템에서 자동으로 발송하는 메일은 이 서비스를 이용하여 호출 됩니다. 보통 CCNET 워커에서 트리거 됩니다. 내부에서 `JangBoGo.Service.Email.EmailService` 호출합니다.

## 메일 전송 프로세스
1. `JangBoGo.dbo.Email` 테이블에 데이터 삽입
2. CCNET 워커에서 ContentsUrl 을 보고 Contents 에 컨텐츠 업데이트 하고 isContentsGet 컬럼을 업데이트
3. CCNET 워커에서 Contents가 있는 데이터를 전송 하고 isSendComplete 컬럼을 업데이트

### 메일 전송 CCNET 워커

TqoonCcnetPlugin.Worker.MailSender.MailSender
각 향별 웹서버 에서 CCNET에 의해 동작
