---
title: "배열 파라미터 처리"
description: "배열 파라미터 처리"
tags: [개발가이드, 기술 ]
---
# 배열 파라미터 처리

## QuickStart
1. 배열 파라미터는 프론트엔드에서부터 배열로 전달합니다. 
2. comma separated string은 사용하지 않습니다.
3. IN 쿼리는 배열 파라미터를 메소드에 `IEnumerable`타입으로 전달한 뒤 `ToInQueryParam()`를 사용해 만듭니다.

## 배열 파라미터 생성 후 웹 요청

여러 개의 숫자 또는 문자 데이터를 전달할 때는 배열 형태로 전달합니다. (ex - 주문번호, 아이디)
데이터들을 콤마 또는 다른 구분자로 연결해 string으로 전달하는 방법(comma separated string)은 사용하지 않습니다. 

```js
// good
var ids = [1111111,2222222,3333333];

// bad 
var ids = "1111111,2222222,3333333";

$.post(url, { ids : ids }, function (data) {
    if (data.result == "success") {
      location.reload();
    } else {
      alert(data.message);
    }
});
```

## 컨트롤러 바인딩
컨트롤러 파라미터 배열 타입으로 바인딩 (ex - `int[]`)

```csharp
public JsonResult ArrayParam(int[] ids)
{
  /* ... */
}
```

## 배열 파라미터로 IN 쿼리 만들기

### Service

```csharp
public class ArrayParamService : IArrayParamService
{
  [Autowire]
  public IArrayParamDao ArrayParamDao { get; set; }

  public IList<ArrayParamItem> FindByIds(int[] ids)
  {
    return ArrayParamDao.FindByIds(ids);
  }
}
```

### DAO

`IList<int>`, `IList<string>` 대신 `IEnumerable<int>`, `IEnumerable<string>`을 사용합니다.
확장함수 `ToInQueryParam()`으로 IN 쿼리를 만듭니다. 
SQL Injection 공격을 방지하기 위함입니다.

```csharp
public class ArrayParamDao : ObjectDao<ArrayParamItem>, IArrayParamDao
{
  public IList<ArrayParamItem> FindByIds(IEnumerable<int> ids)
  {
    return Query(new ListQuery<ArrayParamItem>
    {
        Query = $@"SELECT * FROM ArrayParam WITH(NOLOCK) WHERE Id IN ({ids.ToInQueryParam()})"
    });
  }
}
```