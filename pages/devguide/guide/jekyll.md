---
title: "jekyll 환경설정"
description: ""
tags: [개발가이드, 기술, 구성, 프로젝트]
---


# Jekyll 환경 설정
Jekyll은 정적 사이트 생성기로 markdown 문서를 html 문서로 자동 변환하고 레이아웃을 사용하여 웹 사이트를 만들어 줍니다.

개발가이드는 jekyll 로 만들어졌으며 github에 호스팅 중입니다.
각 페이지는 markdown 으로 작성되어 markdown 뷰어로 확인, 편집할 수 있으나 
완벽한 구동 화면을 보기 위해서는 jekyll 구동환경을 구축하여 확인해야 합니다.


## 루비 설치

<https://rubyinstaller.org/downloads/>

jekyll 기동에 필요한 루비 권장 버전을 설치한다.

## jekyll 설치

커맨드 라인에서 다음 명령어 실행

```cmd
gem install jekyll bundler
```
Jekyll 버전 확인
```cmd
jekyll -v 
```

## 개발 가이드 클론

<https://github.com/TqoonDevTeam/tqoondevteam.github.io.git>

## jekyll 구동

클론 받은 폴더에서 start.bat 실행

```cmd
PS C:\Dev\Tqoon\tqoondevteam.github.io> ./start.bat

C:\Dev\Tqoon\tqoondevteam.github.io>bundle exec jekyll serve
Configuration file: C:/Dev/Tqoon/tqoondevteam.github.io/_config.yml
            Source: C:/Dev/Tqoon/tqoondevteam.github.io
       Destination: C:/Dev/Tqoon/tqoondevteam.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts

```

## 페이지 접속

<http://localhost:4000> 에서 확인
