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

# 티쿤 C# 코딩 스타일 가이드
---
Visual Studio 2015 설치 시 세팅되는 값을 기본으로 합니다.


## 변수
camelCase를 사용합니다.
지역변수일 경우에도 _ 언더바는 사용하지 않습니다.
```csharp
//good
int intValue;
string strValue;
ClassObject classObject;
var list = new List<string>();

//bad
int IntValue;
string _strValue;
ClassObject class_object;
var list = new List<string>();
```

## 상수
PascalCase를 사용합니다.
`const` 키워드 대신 `readonly` 를 사용합니다.
```csharp
//good
public readonly int MaxValue;
public static readonly MinValue ;

//bad
public const int MaxValue;
public static readonly MIN_VALUE ;
```

### 프로퍼티
PascalCase를 사용합니다.
property 문에서는 별도의 throw 처리를 하지 않습니다. 예외가 발생하는 상황이면 메서드를 사용하시기 바랍니다.
get 접근자를 사용하여 객체의 상태를 변경하면 안됩니다.

```csharp
// 일반적인 경우
public int Size { get; set; } 
// get, set 접근 권한을 다르게 설정할 경우
int MaxSize { public get; private set; } 
// 기본값 설정
public string Name { get; set; } = string.Empty;

// set, get 접근자에서 특별한 작업을 위해 변수를 명시적으로 선언해서 사용할 경우
private string companyName;
public string CompanyName 
{
    get => companyName + " : ";
    set => companyName = value;
}
public string CompanyName2 
{
    get 
    {
        if (companyName == "Special") return "!!!!!!";
        return companyName;
    }
    set 
    {
        companyName = value;
    }
}

//bad
public string CompanyNameBad
{
    get 
    {
        // get 접근자에서 상태를 변경하지 마세요.
        companyName = companyName + " : ";
        return companyName;
    }
    set 
    {
        companyName = value;
    }
}
```



## 들여쓰기
들여쓰기는 띄어쓰기 4개를 사용합니다. VS를 사용하는 경우 옵션 > 텍스트 편집기 > C# > 탭 항목이 `탭 크기: 4, 들여쓰기 크기: 4, 공백 삽입` 인지 확인해주세요.
```csharp
class Test
{
    static void Main()
    {
```

## 블럭
제어문 블럭의 코드가 한줄일 경우 블럭을 사용하지 않습니다.
```csharp
// good
if (isTrue) return;

foreach (var item in list) Action(item);

if (isTrue == true)
    return Action(item);

foreach (var item in list) 
    OtherClass.Action(item);

// bad
if (isTrue) { return; }

foreach (var item in list) { Action(item); }

if (isTrue == true)
{
    return Action(item);
}

foreach (var item in list) 
{
    OtherClass.Action(item);
}

```

## 줄바꿈
코드의 길이가 길어질 경우 ` ,.()` 혹은 연산자를 기점으로 줄바꿈합니다. 줄 바꿈 이후 들여쓰기 합니다.

```csharp
if (이러면안되지만함수명이너무너무길던가(
    파라메터도, 너무, 많이, 전달, 받아야, 하는, 상황이면) 
    && 줄바꿈하여.표시합니다(하지만, 이런경우, 별도, 펑션, 사용을, 권장합니다))
{
    return;
```


## 쿼리 
코드내에 쿼리 구문 을 생성할경우 string 값 할당을 다음과 같은 방식으로 합니다. StringBuilder는 사용하지 않습니다.

```csharp
{
    string query = $@"
SELECT * 
FROM tblOrder
WHERE strUserId = @userId
AND { subConditionString }
";
    return query;
}
```

