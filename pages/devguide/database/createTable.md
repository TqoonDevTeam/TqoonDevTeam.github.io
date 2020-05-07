---
title: ""
description: ""
tags: [개발가이드, 기술]
history:
  - version: '1.0'
    date: '2020-03-20'
    user: '김정훈'
    desc: '초안'
---

# 테이블 생성
각 테이블은 대응하는 엔티티 객체 (~DbItem)에 ObjectDao를 통해 자동으로 맵핑될 수 있도록 정해진 형식과 이름을 사용합니다. 이 문서에서는 테이블에서 사용 가능한 데이터 형식과 테이블 규칙을 설명합니다.

## 생성 쿼리 예제
```sql
CREATE TABLE TableNameIsPascalCase(    -- 테이블명은 PascalCase 를 사용합니다.
	[id] int IDENTITY(1,1) NOT NULL,    -- 테이블의 첫번째 컬럼은 id 로 사용합니다.
	[columnIsCamelCase] nvarchar(max) null,    -- 컬럼 명은 camelCase 를 사용합니다.
	[intCol] int null,
	[floatCol] float null,
	[nvarcharCol] nvarchar(80) null,
	[bitCol] bit null,
	[datetimeCol] datetime null,
	[xmlCol] xml null,    -- Model의 XDocument 필드는 xml 타입으로 저장됩니다.
	[objectJsonSerializeCol] nvarchar(max) null,    -- Model의 Class 필드는 Json Serialize 되어 nvarchar 타입으로 저장됩니다.
	[encryptedCol] varbinary null,    -- 암호화될 컬럼은 varbinary 타입으로 지정합니다.
	CONSTRAINT [PK_TableNameIsPascalCase] PRIMARY KEY CLUSTERED (
		[id] DESC
	) 
) ON [PRIMARY]
```

## 컬럼 형식
다음 컬럼 형식만 사용합니다. 엔티티 객체에서 사용하려는 형식과 매칭되는 형식으로 선언해야 합니다. 암호화된 데이터는 `varbinary` 로 선언하며 VO 객체에서 선언한 형식으로 변환 됩니다.

| DbType | c# Type | 비고 |
| --- | --- | --- |
| int | int |  |
| float | double/float |  |
| nvarchar | string |  |
| bit | bool |  |
| datetime | DateTime |  |
| xml | XDocument |  |
| nvarchar | Object | Json Serialize 하여 저장 |
| varbinary | (any) | 암호화되어 저장 VO 객체에서 속성 지정 |

## 특별한 의미를 가지는 컬럼

| Name | DbType | 내용 |
| --- | --- | --- |
| id | int | 아이디 |
| regDate | DateTime | 등록일자입니다. Insert 시점을 기준으로 하며, Update 시에는 갱신 하지 않습니다. 업데이트 일시가 필요한 경우 별도의 컬럼을 사용합니다. |
| state | string | 등록 상태 입니다. 한번 Insert 된 값은 Delete 하지 않고 이 값만 변경합니다. 'REG' , 'DEL' |