---
title: ""
description: ""
tags: [개발가이드, 기술]
history:
  - version: '2.0'
    date: '2020-08-26'
    user: '권예은'
    desc: ''
---

# 티쿤 2.0 페이징 처리
티쿤 2.0의 페이징 처리 기능을 설명합니다.

## PagingListQuery<T>
페이징 처리 쿼리는 PagingListQuery<t>를 사용하며 DAO로 호출하여 페이징 처리 합니다. 
리스트를 검색하는 ListQuery, 리스트 카운트 CountQuery, 페이징 정보를 갖는 PaingInfo 객체로 구성 되어 있습니다. 
``` c#
    public class PagingListQuery<T>
        {
            public string ListQuery { get; set; }
            public string CountQuery { get; set; }
            public object DbParam { get; set; }
            public PagingInfo PagingInfo { get; set; }
        }
```
## 사용 방법
### DAO 호출
 Service단에서 COD 호출이 아닌 DAO에서 호출합니다.

``` c#
 public PagingListResult<UserItem> GetUserlist(PagingParam param)
    {
           return UserDao.GetUser(new PagingInfo() { Page = param.Page, PageSize = param.PageSize});
    }
```
### PagingInfo 객체
PagingInfo 객체에는 현재 페이지 수 Page와 페이지 당 리스트 수 PageSize가 정의 되어있습니다.
스크립트,컨트롤러단에서 전달받은 객체를 PagingInfo 객체에 바인딩하여 사용합니다.
스크립트 및 컨트롤러 구현방법은 <https://tqoondevteam.github.io/pages/devguide/webProject/partner/common/pagination.html> 기술 되어있습니다. 

```c#
 public class PagingInfo
    {
            public int Page { get; set; } = 1;
            public int PageSize { get; set; } = 20;
    }
```
###  PagingListQuery<T>
 * ListQuery의 경우 정렬 필수 (ORDER BY 정확한 컬럼명 기재) 

```c#
 public PagingListResult<UserItem> GetUser(PagingInfo pagingInfo)
    {
      return Query(new PagingListQuery<UserItem>
       {
          ListQuery = $@
              "SELECT * FROM tblUser with(nolock) ORDER BY intUserNum DES",
          CountQuery = $@
             "SELECT COUNT(*) FROM tblUser with(nolock)",
          PagingInfo = pagingInfo
        });
    }
```

