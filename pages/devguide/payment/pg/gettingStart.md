---
title: "티쿤 PG 개요"
description: "티쿤 시스템의 PG 구조 설명"
tags: [PG, 결제, PGB]
---

# 티쿤 PG 개요

티쿤의 PG 결제시스템은 국가별로 다른 PG 사를 이용하고 각자 다른 방식으로 개발되었다. 신규 PG 개발은 Elavon 결제에 사용한 Paygent Gateway Bridge 구조를 사용하여 개발한다.

1. Paygent - 일본, 독립 구조
2. Zeus - 일본, 독립된 구조
3. Adyen - 싱가폴, Provider 패턴
4. Inicis - 한국, Provider 패턴
5. Paypal - 미국, 사용하지 않는다, Provider 패턴
6. Omise - 태국 (2019-09), Provider 패턴
7. Khipu - 칠레 (2020-03), Provider 패턴
8. Braintree - 호주 PG (2020-04), Provider 패턴
9. Razermerchant - 말레이시아 (2020-07), Provider 패턴
10. Alibaba - 중국 (2020-07), Provider 패턴
11. Tencent - 중국 (2020-07), Provider 패턴
12. Eximbay - 일본 BtoC 용 (2020-08), Provider 패턴
13. Elavon - 미국 (2020-11), PGB 패턴