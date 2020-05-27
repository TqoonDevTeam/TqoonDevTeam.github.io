---
title: "표준 날짜 검색 쿼리 가이드"
description: "문서 설명"
tags: [개발가이드, 템플릿 ]
---

# 표준 날짜 검색 쿼리  

## QuickStart
 1. 날짜 변수는 DateTime 으로 전달합니다.
 2. 날짜 변수는 string 으로 전달하지 않습니다.

## 날짜 변수

```csharp

        public JsonResult DateSearch()
        {
            DateTime startDate = new DateTime(2020, 1, 1); //2020-01-01 
            DateTime endDate = new DateTime(2020, 1, 31).AddDays(1); //2020-02-01

            DateSearchService.FindById(startDate,EndDate)

        }


```
```csharp

        public JsonResult DateSearch(string startDate, string EndDate)
        {
            //startDate = 2020-01-01 
            //EndDate = 2020-01-01 
      
            DateSearchService.FindById(startDate,EndDate)

        }


```



## 표준 날짜 검색 쿼리 만들기

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

             public IList<DateSearchitem> FindById(string startDate, string endDate)
            {
              return DateSearchDao.FindById(startDate,endDate);
            }

      }

```



### DAO
 날짜 변수는 string 형식 아닌 DateTime 형식으로 전달합니다. string 형식으로 전달하지 않습니다.

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

//good
 public IList<NameValueItem> FindById(string startDate,string endDate)
      {

         DateTime startDt = DateTime.Parse(startDate);
         DateTime EndDt = DateTime.Parse(endDate).AddDays(1); 
          
          return Query(new ListQuery<NameValueItem>
          {
            
              Query = @"SELECT * FROM DateSearch WHERE writeDate >= @StartDate AND writeDate < @EndDate"
               DbParam = new {StartDate = startDate, EndDate = endDate}
          });
        }

    }

  //bad
   public class DateSearchDao :  ObjectDao<DateSearchitem>, IDateSearchDao
    {
      public IList<NameValueItem> FindById(string startDate, string endDate)
        {

            return Query(new ListQuery<NameValueItem>
            {
              
                Query = @"SELECT * FROM DateSearch WHERE writeDate >= @StartDate AND writeDate < @EndDate"
                DbParam = new {StartDate = startDate, EndDate = endDate}
            });
        }
    }

```
