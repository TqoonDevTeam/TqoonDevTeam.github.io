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

# 페이징 처리
---
페이징 처리를 위한 공통모듈을 설명합니다. 페이징 처리를 화면에 표시하고, 페이지 정보를 전달해 주는 angularjs 로직과 이를 받아 쿼리를 만드는 로직으로 나뉘어져 있습니다.


## 화면 구현
---
페이징 화면 처리는 angularjs 디렉티브를 사용하여 구현합니다.

```
<tq-paging ng-model="ctrl.val.pagingResult" ng-change="ctrl.evt.list.onClickPaging()"></tq-paging>
```

| 속성 | 용도 |
| --- | --- |
| ng-model | 페이징 정보를 가진 모델을 전달합니다. | 
| ng-change | 페이지 변경시 목록을 갱신하기 위한 함수를 호출합니다. | 

## ng-change 구현
---
페이지 변경시 해당 목록을 가지고 오는 로직을 구현합니다.
```js
ctrl.evt.list.onClickPaging = function()
{
    $http.post('/SomeController/GetList', { pagingParam : ctrl.val.pagingResult.Paging}).then(function (res)
    {
        // 조회목록을 할당합니다.
        ctrl.val.list = res.data.List;

        // 페이징 정보를 할당합니다.
        ctrl.val.pagingResult = res.data;
    });
}
```

## 컨트롤러 액션 구현
---
Angularjs 스크립트에서 전달한 객체를 `JangBoGo.Model.Param.Common.PagingParam` 객체에 바인딩 하여 사용하고
`JangBoGo.Model.Param.Common.PagingResult<T>` 객체를 리턴합니다. 여기에는 Paging 정보와 조회내용, 총 항목 수 (TotalCount) 가 포함되어 있습니다.

```csharp
public JsonResult GetList(PagingParam pagingParam)
{
    PagingResult<TItem> result = SomeService.GetList(pagingParam);
    return Json(result);
}
```

---
백앤드 관련 페이징 처리는 <https://tqoondevteam.github.io/pages/pages/devguide/webProject/tqoon2/paging.html> 기술되어 있습니다.