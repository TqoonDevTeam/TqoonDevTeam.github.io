---
title: "개발 환경 설정"
description: "문서 설명"
tags: [개발가이드, 템플릿, 환경설정 ]
---

# 개발 환경 설정
개발을 시작하기 앞서 테스트 가능한 개발 환경을 만듭니다.


## 기본 폴더 생성
각 프로젝트를 체크아웃 받을 기본 폴더와 테스트에 사용할 데이터를 저장해둘 기본 폴더가 필요합니다.
보통 프로젝트는 C:\Dev 폴더에
데이터는 D:\WebData 폴더를 사용합니다.

## 기본 프로그램 설치
SVN과 GIT 을 사용하기 위해 다음 프로그램을 다운 후 순서대로 설치합니다.

TortoiseSVN https://tortoisesvn.net/downloads.html
Git https://git-scm.com/downloads
TortoiseGit https://tortoisegit.org/download/

## 소스 체크아웃
C:\Dev 에 필요한 각 프로젝트를 체크 아웃 합니다.
기본적으로 필요한 프로젝트는 다음과 같습니다.

### 필수

| 프로젝트명 | 저장소 | 주소 | 용도 |
| :--- |:--- | :--- | :--- |
| Libs | SVN | http://192.168.1.42:81/svn/Libs/trunk | 공통 라이브러리 저장용 |
| Providers | SVN | http://192.168.1.42:81/svn/Provider/trunk | DB 커넥션 정보 |
| TqoonLibraries | Github | https://github.com/TqoonDevTeam/TqoonLibraries.git | 티쿤 라이브러리 |


### 자주 사용하는 웹 프로젝트

| 프로젝트명 | 저장소 | 주소 | 용도 |
| :--- |:--- | :--- | :--- |
| AdprintWeb | Github | https://github.com/TqoonDevTeam/AdprintWeb.git | 애드프린트 |
| Admin2 | Github | https://github.com/TqoonDevTeam/AdAdmin.git | 어드민 관리 시스템 |
| Tqoon 2.0 | Github | https://github.com/TqoonDevTeam/v2Test.git | 티쿤 2.0 |
| Partner | Github | https://github.com/TqoonDevTeam/Partner | 이용사 관리 시스템 |


## 데이터 다운로드
D:\WebData 에 필요한 데이터를 다운로드 받습니다. 시스템 담당자에게 연락하면 필요한 파일을 전달 받을 수 있습니다.
데이터는 국가별, 데이터베이스 별로 구분되어 저장 됩니다.
가장 일반적으로 사용되는 일본향 AdprintNewDB 는 D:\WebData\JP\AdprintNewDB 경로에 저장 되어 있어야 합니다. 예를 들어 일본향 HQUploadData 폴더의 경우는 다음 경로에 저장됩니다. D:\WebData\JP\AdprintNewDB\HQUploadData

각 폴더별 역활은 다음과 같습니다.

| 폴더명 | 용도 |
| --- | --- |
| HQUploadData | 모집본부 데이터 저장용 |
| MakuMakuUploadData | 마쿠마쿠 전용 데이터 저장용 |
| PartnerData | 이용사별 데이터 자장용 |
| UploadData | 웹 사이트 업로드 데이터 (QNA, 게시판등) |
| UserUploadData | 고객 입고 파일 |

웹 데이터 파일을 받을 수 없는 경우 아래 템플릿 파일로 경로만 생성해 둡니다.
[WebData 템플릿](/contents/files/WebData.zip)


## 개발 환경 자동 설정 프로그램
[https://github.com/TqoonDevTeam/Helpo](https://github.com/TqoonDevTeam/Helpo)
다음 프로그램을 이용하여 각 프로젝트별로 개발 환경을 설정합니다.