---
title: "표준 날짜 검색 쿼리 가이드"
description: "문서 설명"
tags: [개발가이드, 템플릿 ]
---

# 표준 날짜 검색 쿼리  

## QuickStart
  1. 날짜 변수는 String이 아닌 DateTime 으로 전달합니다.
  2. String 날짜변수는 Front-End 혹은 Controller에서 DateTime 날짜변수로 변경하여 전달합니다. 

## javascript 

```csharp
               
     var _startDate = $("#startDate").val();
     var _endDate = $("#endDate").val();
          
           $http.post('/Customer/DateSearch', _startDate,_endDate).then(function (res) {
                 $scope.DateResultList = res.data.List;
        });

```



## Controller

```csharp

        public JsonResult DateSearch(string startDate, string endDate)
        {
           
            DateSearchService.FindById(Convert.ToDateTime(startDate),Convert.ToDateTime(endDate).AddDays(1));

        }

```


### Service

```csharp

      public class DateSearchService : IDateSearchService
      {
          [Autowire]
          public IDateSearchService DateSearchDao { get; set; }

            public IList<DateSearchitem> FindById(DateTime startDate, DateTime endDate)
            {
              return DateSearchDao.FindById(startDate,endDate);
            }


      }

```



### DAO
string 형식 아닌 DateTime 형식으로 전달합니다. 

 ```csharp

//good
  public class DateSearchDao :  ObjectDao<DateSearchitem>, IDateSearchDao
    {
      public IList<NameValueItem> FindById(DateTime startDate, DateTime endDate)
        {
          return Query(new ListQuery<NameValueItem>
          {
            
              Query = @"SELECT * FROM DateSearch WHERE writeDate >= @StartDate AND writeDate < @EndDate"
               DbParam = new {StartDate = startDate, EndDate = endDate}
          });
        }
   }
```
