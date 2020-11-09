---
title: "프로젝트 환경 설정"
description: "문서 설명"
tags: [개발가이드, 템플릿, 환경설정 ]
---

# 개발 환경 설정
각 프로젝트별 IIS 세팅을 위한 정보

## Adprint

### git
https://github.com/TqoonDevTeam/AdprintWeb.git

### Host
www.adprint.jp
local.{provider.Ip}.adprint.jp

### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|/WebData/{Location}/{DB}/UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|/WebData/{Location}/{DB}/PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|
|/HQUploadData|/WebData/{Location}/{DB}/HQUploadData|/WebDataFolder_{Location}//HQUploadData|


## Admin2

### git
https://github.com/TqoonDevTeam/AdAdmin.git

### Host

www.admin2.adprint.jp
www.admin.mantenmall.jp
adadmin.tqoon.com
admin.tqoon.com

local.{provider.Ip}.admin2.adprint.jp
local.{provider.Ip}.admin.mantenmall.jp
local.{provider.Ip}.adadmin.tqoon.{LocationCode}
local.{provider.Ip}.admin.tqoon.{LocationCode}


### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|/WebData/{Location}/{DB}/UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|/WebData/{Location}/{DB}/PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|
|/HQUploadData|/WebData/{Location}/{DB}/HQUploadData|/WebDataFolder_{Location}//HQUploadData|

## Makumaku

### git
https://github.com/TqoonDevTeam/Placard.git

### Host

www.makumaku.jp
local.{provider.Ip}.makumaku.jp

### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/MakuMakuUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/MakuMakuUploadData|
|/UploadData/PartnerDesignGoods| -- |/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData/PartnerDesignGoods|

## Tqoon 1.0

### svn
http://192.168.1.42:81/svn/TqoonWeb

### host
www.adfile.jp
local.{provider.Ip}.{siteUrl}


### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/App_Config/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|/WebData/{Location}/{DB}/UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|/WebData/{Location}/{DB}/PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|
|/HQUploadData|/WebData/{Location}/{DB}/HQUploadData|/WebDataFolder_{Location}//HQUploadData|


## Tqoon 2.0

### git
https://github.com/TqoonDevTeam/v2Test.git

### host
www.ad-sign.jp
local.{provider.Ip}.{siteUrl}

### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/App_Config/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|/WebData/{Location}/{DB}/UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|/WebData/{Location}/{DB}/PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|

## Partner

### git
https://github.com/TqoonDevTeam/Partner.git

### host
local.{provider.Ip}.partner.adprint.jp
local.{provider.Ip}.partner.mantenmall.jp
local.{provider.Ip}.adpartner.tqoon.{LocationCode}
local.{provider.Ip}.partner.tqoon.{LocationCode}


www.partner.adprint.jp
www.partner.mantenmall.jp
www.adpartner.tqoon.cn
www.partner.tqoon.cn


### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|/WebData/{Location}/{DB}/UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|/WebData/{Location}/{DB}/PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|
|/HQUploadData|/WebData/{Location}/{DB}/HQUploadData|/WebDataFolder_{Location}//HQUploadData|



## TqoonPG

### git
https://github.com/TqoonDevTeam/TqoonPg.git

### host
local.{provider.Ip}.pg.tqoon.com
pg.tqoon.com

### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/CertData|/WebData/{Location}/{DB}/CertData|/WebDataFolder_{Location}/WebData{ForOrderMall}/CertData|


## HeadQuarter

### git
https://github.com/TqoonDevTeam/HeadQuarter.git

### host
local.{provider.Ip}.hq.tqoon.com
hq.tqoon.com

### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|
|/HQUploadData|HQUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/HQUploadData|


## TqSale

### git
https://github.com/TqoonDevTeam/TqSale.git

### host
local.{provider.Ip}.sc.tqoon.{LocationCode}
sc.tqoon.jp

### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|/WebData/{Location}/{DB}/UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|/WebData/{Location}/{DB}/PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|
|/HQUploadData|/WebData/{Location}/{DB}/HQUploadData|/WebDataFolder_{Location}//HQUploadData|



## TqTrading

### git 
https://github.com/TqoonDevTeam/TqTrading.git

### host
local.{provider.Ip}.tc.tqoon.{LocationCode}
tc.tqoon.jp

### 가상 디렉토리

| 가상 디렉토리 경로 | 대상 디렉토리 (로컬) | 대상 디렉토리 (서버) |
| :--- |:--- |:--- |
|/Provider|/Provider/{dbFolder}|/Provider/{dbFolder}|
|/UploadData|/WebData/{Location}/{DB}/UploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UploadData|
|/UserUploadData|/WebData/{Location}/{DB}/UserUploadData|/WebDataFolder_{Location}/WebData{ForOrderMall}/UserUploadData|
|/PartnerData|/WebData/{Location}/{DB}/PartnerData|/WebDataFolder_{Location}/WebData{ForOrderMall}/artnerData|
|/HQUploadData|/WebData/{Location}/{DB}/HQUploadData|/WebDataFolder_{Location}//HQUploadData|

