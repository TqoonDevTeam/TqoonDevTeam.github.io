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

# 공통기능
---
데이터베이스에서 사용하는 공통기능을 설명합니다. 각 기능별로 사용 가능한 데이터베이스가 다릅니다.

## TqDate
데이터베이스의 시간은 모두 한국 시간으로 동작하지만 데이터는 해당 국가의 시간을 기준으로 저장되어야 하기 때문에 그 변환을 위해 사용됩니다. **GetTqDate() 는 사용하면 안됩니다. 쿼리 속도에 심각한 영향을 끼칩니다.**
_(adprintNewDb, OrderMall, JangBoGo)_

```sql
SELECT dbo.tqdate(getutcdate()) 

--- RESULT ---

2020-03-04 08:55:41.673
```


## Tqoon Config
몰별 설정 값을 가지고 오기 위해 사용됩니다.
_(adprintNewDb, OrderMall)_

```sql
SELECT dbo.GetTqoonConfigValue('Product_Order','DisplayReview', 182, null, null) -- group, key, joinerId, (categoryCode), (goodsId)

--- RESULT ---

True
```

## Split Table Char
문자열을 잘라서 문자 테이블로 변환합니다.
_(adprintNewDb, OrderMall)_

```sql
SELECT * FROM dbo.funSplitTableChar('a,b,c,d,e', ',')

--- RESULT ---

intIdx	intValue
1	a
2	b
3	c
4	d
5	e
```


## Split Table Int
문자열을 잘라서 숫자 테이블로 변환합니다.
_(adprintNewDb, OrderMall)_

```sql
SELECT * FROM dbo.funSplitTableInt('1=10,2=20,3=30,4=40,5=50', ',')

--- RESULT ---

intIdx	intValue
1	10
2	20
3	30
4	40
5	50
```

## Split Table Int 2
문자열을 잘라서 숫자 테이블로 변환합니다.
_(adprintNewDb, OrderMall)_

```sql
SELECT * FROM dbo.funSplitTableInt2('1,2,3,4,5', ',')

--- RESULT ---

intIdx	intValue
1	1
2	2
3	3
4	4
5	5
```