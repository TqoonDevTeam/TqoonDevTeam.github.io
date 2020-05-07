---
title: "개발 가이드 템플릿"
description: "문서 설명"
tags: [개발가이드, 템플릿 ]
---

# 개발 가이드 템플릿
이 개발 가이드에서 설명하려는 내용 요약

## 제목 h2
### 제목 h3
#### 제목 h4
##### 제목 h5
###### 제목 h6


## 코드 영역 표시

```csharp
public class Test : AbstractTest // 주석
{
  public void Run()
  {
    return;
  }
}
```

```js
// 주석
var test = { 
  "valA" : 1,
  "valB" : 2
};
```

설명 중에 `public void Code()` 삽입


## 리스트

1. 아이템
2. 아이템
3. 아이템
4. 아이템
   1. 아이템
   2. 아이템
      1. 아이템
      2. 아이템
   3. 아이템
5. 아이템

- 아이템
- 아이템
  - 아이템
  - 아이템
    - 아이템
    - 아이템
- 아이템


## 텍스트

### 강조

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

~~cancelline~~


## 표

| 항목 | 항목 | 항목 |
| --- | :---: | ---: |
| A | B | C |
| AA | BB | CC |
| AAAA | BBBB | CCCC |


## 수평선
---


## 링크

```md
```


## 들여쓰기

> 내용
> ### 소재목
> ```cs
> public class Test
> {
> 
> }
> ```
> > 또 들여쓰기
> > 가능
> > > 여러번
> > > 들여쓰기
> > > 가능 함


## 이미지

<img src="https://partner.adprint.jp/PartnerData/AD/PartnerInfo/2020/01/17/0cjetiva.jpd.gif">

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAaCAYAAABsONZfAAAAnElEQVQ4EWP4TwZgIEPP/6Go6d7xr/9hGJufsfqpVffmfxgeJJqWpT6GOwnmNHQa5E8QgPuJLE3Xdn6ChxiyDbBQBMm/f/wL1SbkUELWhCwOY8OdBxMA0aOaoKFBVkD0Wt+Bh+C+/tfg+APReONpW+MLuCZkWzGSEXI8ff/45z/I5LnhD8GaQTaDkhleTcgGYGNjTRHYFCKL0U8TALAs4EiA6HOLAAAAAElFTkSuQmCC">

base64 컨버팅은 `imageToBase64.html` 파일을 사용