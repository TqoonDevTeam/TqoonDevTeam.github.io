---
title: "티쿤 프로젝트 구성"
description: ""
tags: [개발가이드, 기술, 구성, 프로젝트]
history:
  - version: '1.0'
    date: '2020-03-20'
    user: '김정훈'
    desc: '초안'
---


# 티쿤 프로젝트 구성


## Web Project
> <div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">V1 프로젝트</h3>
>           <p class="panel-subtitle">첫 해외직판 플랫폼</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">V2 프로젝트</h3>
>           <p class="panel-subtitle">모바일 친화적인 해외직판 플랫폼</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Adprint</h3>
>           <p class="panel-subtitle">일본직판 인쇄/사무/판촉/광고/매장/단체 종합몰</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>       <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Makumaku</h3>
>           <p class="panel-subtitle">실사출력물 일본직판 사이트</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Partner</h3>
>           <p class="panel-subtitle">V1, V2 플랫폼의 관리자 사이트</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Admin2</h3>
>           <p class="panel-subtitle">애드프린트 관리자 / 해외직판 지원 사이트 (구)</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqTrading</h3>
>           <p class="panel-subtitle">해외직판 지원 사이트</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonPG</h3>
>           <p class="panel-subtitle">PG API 처리 사이트</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
> </div>

<br><br>

## Worker Project
> <div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">SianControl</h3>
>           <p class="panel-subtitle">224작업서버 제작 지원 워커</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">SianControl2</h3>
>           <p class="panel-subtitle">224작업서버 제작 지원 워커, 다운로드</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">PdfConverter</h3>
>           <p class="panel-subtitle">PDF 파일 자동 체크 워커</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
> </div>

<br><br>

## API Project
> <div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonApi</h3>
>           <p class="panel-subtitle">애드프린트 API 처리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonApiLog</h3>
>           <p class="panel-subtitle">API / Notify 로그 확인 및 재처리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
> </div>

<br><br>

## Libraries
> <div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">JangBoGo</h3>
>           <p class="panel-subtitle">공용모듈 라이브러리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">AdprintLib</h3>
>           <p class="panel-subtitle">애드프린트와 티쿤 비지니스 처리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonLib</h3>
>           <p class="panel-subtitle">티쿤 전용 라이브러리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonGlobalLib</h3>
>           <p class="panel-subtitle">티쿤글로벌 공용 라이브러리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Yusurun.Web</h3>
>           <p class="panel-subtitle">VB로 만들어진 공통 라이브러리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Yusurun.Common</h3>
>           <p class="panel-subtitle">VB로 만들어진 스프링 지원 라이브러리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Batch</h3>
>           <p class="panel-subtitle">젠키스로 이전 중인 워커용 라이브러리</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
>
> </div>

<br><br>

## CCNET Worker
> <div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonCcnetPlugin</h3>
>           <p class="panel-subtitle">배치 및 배포 작업을 위한 CCNET 용 Plugin</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
> </div>

<br><br>

## Database
#### Local Database Engine

> <div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">JangBoGo</h3>
>           <p class="panel-subtitle">향 종속 데이터 저장소</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">adprintNewDb</h3>
>           <p class="panel-subtitle">몰 종속 데이터</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">OrderMall</h3>
>           <p class="panel-subtitle">회원 비공유 몰 종속 데이터</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">Placard</h3>
>           <p class="panel-subtitle">Makuamku 용 데이터</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonLog</h3>
>           <p class="panel-subtitle">향별 로그</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonGlobalProxy</h3>
>           <p class="panel-subtitle">TqoonGlobal 데이터베이스 연결</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
> </div>

#### Global Database Engine

> <div>
>   <div class="row">
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonGlobal</h3>
>           <p class="panel-subtitle">티쿤 서비스 공통 데이터</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>     <div class="col col-md-3">
>       <div class="panel panel-headline">
>         <div class="panel-heading">
>           <h3 class="panel-title">TqoonLog</h3>
>           <p class="panel-subtitle">작업 워커 로그</p>
>         </div>
>         <div class="panel-body">
>         </div>
>       </div>
>     </div>
>   </div>
> </div>