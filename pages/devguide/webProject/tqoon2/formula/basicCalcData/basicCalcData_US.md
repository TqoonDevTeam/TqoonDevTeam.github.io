---
title: "calcData.basicCalcData 데이터 변경 쿼리"
description: "BasicCalcData_US"
tags: [개발가이드, BasicCalcData ]
---

## BasicCalcData_US

* US ST01
  ``` json
  UPDATE CalcData SET basicCalcData = N'{
      "ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.406"},{"sellUnit":200,"rate":"0.766"},{"sellUnit":300,"rate":"0.552"},{"sellUnit":400,"rate":"0.446"},{"sellUnit":500,"rate":"0.382"},{"sellUnit":1000,"rate":"0.276"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.644"},{"sellUnit":200,"rate":"0.886"},{"sellUnit":300,"rate":"0.632"},{"sellUnit":400,"rate":"0.506"},{"sellUnit":500,"rate":"0.43"},{"sellUnit":1000,"rate":"0.3"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.038"},{"sellUnit":200,"rate":"1.082"},{"sellUnit":300,"rate":"0.764"},{"sellUnit":400,"rate":"0.604"},{"sellUnit":500,"rate":"0.508"},{"sellUnit":1000,"rate":"0.338"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.278"},{"sellUnit":200,"rate":"1.202"},{"sellUnit":300,"rate":"0.842"},{"sellUnit":400,"rate":"0.664"},{"sellUnit":500,"rate":"0.556"},{"sellUnit":1000,"rate":"0.362"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.262"},{"sellUnit":200,"rate":"0.694"},{"sellUnit":300,"rate":"0.504"},{"sellUnit":400,"rate":"0.41"},{"sellUnit":500,"rate":"0.352"},{"sellUnit":1000,"rate":"0.246"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.502"},{"sellUnit":200,"rate":"0.814"},{"sellUnit":300,"rate":"0.584"},{"sellUnit":400,"rate":"0.47"},{"sellUnit":500,"rate":"0.4"},{"sellUnit":1000,"rate":"0.27"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"1.894"},{"sellUnit":200,"rate":"1.01"},{"sellUnit":300,"rate":"0.716"},{"sellUnit":400,"rate":"0.568"},{"sellUnit":500,"rate":"0.48"},{"sellUnit":1000,"rate":"0.31"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.134"},{"sellUnit":200,"rate":"1.13"},{"sellUnit":300,"rate":"0.794"},{"sellUnit":400,"rate":"0.628"},{"sellUnit":500,"rate":"0.528"},{"sellUnit":1000,"rate":"0.334"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.236"},{"sellUnit":200,"rate":"1.2"},{"sellUnit":300,"rate":"0.854"},{"sellUnit":400,"rate":"0.682"},{"sellUnit":500,"rate":"0.578"},{"sellUnit":1000,"rate":"0.378"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.642"},{"sellUnit":200,"rate":"1.402"},{"sellUnit":300,"rate":"0.99"},{"sellUnit":400,"rate":"0.784"},{"sellUnit":500,"rate":"0.66"},{"sellUnit":1000,"rate":"0.42"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.212"},{"sellUnit":200,"rate":"1.688"},{"sellUnit":300,"rate":"1.18"},{"sellUnit":400,"rate":"0.926"},{"sellUnit":500,"rate":"0.774"},{"sellUnit":1000,"rate":"0.476"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.618"},{"sellUnit":200,"rate":"1.89"},{"sellUnit":300,"rate":"1.314"},{"sellUnit":400,"rate":"1.028"},{"sellUnit":500,"rate":"0.854"},{"sellUnit":1000,"rate":"0.518"}]}
  	]
  }' WHERE name = 'Common Sticker ST 01'
  ```

* US ST02
  
  ```
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.87"},{"sellUnit":200,"rate":"0.996"},{"sellUnit":300,"rate":"0.706"},{"sellUnit":400,"rate":"0.56"},{"sellUnit":500,"rate":"0.472"},{"sellUnit":1000,"rate":"0.306"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.276"},{"sellUnit":200,"rate":"1.2"},{"sellUnit":300,"rate":"0.84"},{"sellUnit":400,"rate":"0.662"},{"sellUnit":500,"rate":"0.554"},{"sellUnit":1000,"rate":"0.346"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.764"},{"sellUnit":200,"rate":"1.444"},{"sellUnit":300,"rate":"1.004"},{"sellUnit":400,"rate":"0.784"},{"sellUnit":500,"rate":"0.652"},{"sellUnit":1000,"rate":"0.396"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.17"},{"sellUnit":200,"rate":"1.646"},{"sellUnit":300,"rate":"1.138"},{"sellUnit":400,"rate":"0.884"},{"sellUnit":500,"rate":"0.732"},{"sellUnit":1000,"rate":"0.436"}]}
  	]
  }' WHERE name = 'Common Sticker ST 02'
  ```
  
* US ST03
  ```
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.09"},{"sellUnit":200,"rate":"1.142"},{"sellUnit":300,"rate":"0.828"},{"sellUnit":400,"rate":"0.67"},{"sellUnit":500,"rate":"0.574"},{"sellUnit":1000,"rate":"0.394"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.496"},{"sellUnit":200,"rate":"1.346"},{"sellUnit":300,"rate":"0.962"},{"sellUnit":400,"rate":"0.772"},{"sellUnit":500,"rate":"0.656"},{"sellUnit":1000,"rate":"0.434"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.13"},{"sellUnit":200,"rate":"1.662"},{"sellUnit":300,"rate":"1.174"},{"sellUnit":400,"rate":"0.93"},{"sellUnit":500,"rate":"0.782"},{"sellUnit":1000,"rate":"0.498"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.536"},{"sellUnit":200,"rate":"1.866"},{"sellUnit":300,"rate":"1.31"},{"sellUnit":400,"rate":"1.032"},{"sellUnit":500,"rate":"0.864"},{"sellUnit":1000,"rate":"0.538"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.13"},{"sellUnit":200,"rate":"1.662"},{"sellUnit":300,"rate":"1.174"},{"sellUnit":400,"rate":"0.93"},{"sellUnit":500,"rate":"0.782"},{"sellUnit":1000,"rate":"0.498"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.536"},{"sellUnit":200,"rate":"1.866"},{"sellUnit":300,"rate":"1.31"},{"sellUnit":400,"rate":"1.032"},{"sellUnit":500,"rate":"0.864"},{"sellUnit":1000,"rate":"0.538"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.17"},{"sellUnit":200,"rate":"2.184"},{"sellUnit":300,"rate":"1.52"},{"sellUnit":400,"rate":"1.19"},{"sellUnit":500,"rate":"0.99"},{"sellUnit":1000,"rate":"0.602"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.576"},{"sellUnit":200,"rate":"2.386"},{"sellUnit":300,"rate":"1.656"},{"sellUnit":400,"rate":"1.292"},{"sellUnit":500,"rate":"1.072"},{"sellUnit":1000,"rate":"0.642"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"4.17"},{"sellUnit":200,"rate":"2.184"},{"sellUnit":300,"rate":"1.52"},{"sellUnit":400,"rate":"1.19"},{"sellUnit":500,"rate":"0.99"},{"sellUnit":1000,"rate":"0.602"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"4.576"},{"sellUnit":200,"rate":"2.386"},{"sellUnit":300,"rate":"1.656"},{"sellUnit":400,"rate":"1.292"},{"sellUnit":500,"rate":"1.072"},{"sellUnit":1000,"rate":"0.642"}]}
  	]
  }' WHERE name = 'Common Sticker ST 03'
  ```
  
* US ST04
  ```json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.114"},{"sellUnit":200,"rate":"1.16"},{"sellUnit":300,"rate":"0.84"},{"sellUnit":400,"rate":"0.682"},{"sellUnit":500,"rate":"0.586"},{"sellUnit":1000,"rate":"0.404"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.52"},{"sellUnit":200,"rate":"1.362"},{"sellUnit":300,"rate":"0.976"},{"sellUnit":400,"rate":"0.784"},{"sellUnit":500,"rate":"0.668"},{"sellUnit":1000,"rate":"0.444"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.17"},{"sellUnit":200,"rate":"1.688"},{"sellUnit":300,"rate":"1.192"},{"sellUnit":400,"rate":"0.946"},{"sellUnit":500,"rate":"0.798"},{"sellUnit":1000,"rate":"0.508"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.576"},{"sellUnit":200,"rate":"1.89"},{"sellUnit":300,"rate":"1.328"},{"sellUnit":400,"rate":"1.048"},{"sellUnit":500,"rate":"0.878"},{"sellUnit":1000,"rate":"0.55"}]}
  	]
  }' WHERE name = 'Common Sticker ST 04'
  ```
  
* US ST05
  ```json
UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.65"},{"sellUnit":200,"rate":"1.476"},{"sellUnit":300,"rate":"1.084"},{"sellUnit":400,"rate":"0.888"},{"sellUnit":500,"rate":"0.772"},{"sellUnit":1000,"rate":"0.544"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"3.056"},{"sellUnit":200,"rate":"1.68"},{"sellUnit":300,"rate":"1.22"},{"sellUnit":400,"rate":"0.99"},{"sellUnit":500,"rate":"0.852"},{"sellUnit":1000,"rate":"0.586"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.902"},{"sellUnit":200,"rate":"2.102"},{"sellUnit":300,"rate":"1.502"},{"sellUnit":400,"rate":"1.202"},{"sellUnit":500,"rate":"1.022"},{"sellUnit":1000,"rate":"0.67"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.308"},{"sellUnit":200,"rate":"2.304"},{"sellUnit":300,"rate":"1.638"},{"sellUnit":400,"rate":"1.304"},{"sellUnit":500,"rate":"1.102"},{"sellUnit":1000,"rate":"0.71"}]}
  	]
  }' WHERE name = 'Common Sticker ST 05'
  ```
  
* US ST06
  
  ```json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.48"},{"sellUnit":200,"rate":"1.362"},{"sellUnit":300,"rate":"0.99"},{"sellUnit":400,"rate":"0.804"},{"sellUnit":500,"rate":"0.692"},{"sellUnit":1000,"rate":"0.476"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.886"},{"sellUnit":200,"rate":"1.566"},{"sellUnit":300,"rate":"1.126"},{"sellUnit":400,"rate":"0.906"},{"sellUnit":500,"rate":"0.774"},{"sellUnit":1000,"rate":"0.518"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.618"},{"sellUnit":200,"rate":"1.932"},{"sellUnit":300,"rate":"1.37"},{"sellUnit":400,"rate":"1.088"},{"sellUnit":500,"rate":"0.92"},{"sellUnit":1000,"rate":"0.59"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.024"},{"sellUnit":200,"rate":"2.134"},{"sellUnit":300,"rate":"1.504"},{"sellUnit":400,"rate":"1.19"},{"sellUnit":500,"rate":"1"},{"sellUnit":1000,"rate":"0.63"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.618"},{"sellUnit":200,"rate":"1.932"},{"sellUnit":300,"rate":"1.37"},{"sellUnit":400,"rate":"1.088"},{"sellUnit":500,"rate":"0.92"},{"sellUnit":1000,"rate":"0.59"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"4.024"},{"sellUnit":200,"rate":"2.134"},{"sellUnit":300,"rate":"1.504"},{"sellUnit":400,"rate":"1.19"},{"sellUnit":500,"rate":"1"},{"sellUnit":1000,"rate":"0.63"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"4.756"},{"sellUnit":200,"rate":"2.5"},{"sellUnit":300,"rate":"1.748"},{"sellUnit":400,"rate":"1.372"},{"sellUnit":500,"rate":"1.146"},{"sellUnit":1000,"rate":"0.704"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"5.162"},{"sellUnit":200,"rate":"2.704"},{"sellUnit":300,"rate":"1.884"},{"sellUnit":400,"rate":"1.474"},{"sellUnit":500,"rate":"1.228"},{"sellUnit":1000,"rate":"0.744"}]}
  	]
  }' WHERE name = 'Common Sticker ST 06'
  ```
* US ST07

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.626"},{"sellUnit":200,"rate":"1.46"},{"sellUnit":300,"rate":"1.072"},{"sellUnit":400,"rate":"0.876"},{"sellUnit":500,"rate":"0.76"},{"sellUnit":1000,"rate":"0.534"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"3.032"},{"sellUnit":200,"rate":"1.662"},{"sellUnit":300,"rate":"1.206"},{"sellUnit":400,"rate":"0.978"},{"sellUnit":500,"rate":"0.842"},{"sellUnit":1000,"rate":"0.576"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.862"},{"sellUnit":200,"rate":"2.078"},{"sellUnit":300,"rate":"1.482"},{"sellUnit":400,"rate":"1.186"},{"sellUnit":500,"rate":"1.008"},{"sellUnit":1000,"rate":"0.658"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.268"},{"sellUnit":200,"rate":"2.28"},{"sellUnit":300,"rate":"1.618"},{"sellUnit":400,"rate":"1.288"},{"sellUnit":500,"rate":"1.088"},{"sellUnit":1000,"rate":"0.7"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.862"},{"sellUnit":200,"rate":"2.078"},{"sellUnit":300,"rate":"1.482"},{"sellUnit":400,"rate":"1.186"},{"sellUnit":500,"rate":"1.008"},{"sellUnit":1000,"rate":"0.658"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"4.268"},{"sellUnit":200,"rate":"2.28"},{"sellUnit":300,"rate":"1.618"},{"sellUnit":400,"rate":"1.288"},{"sellUnit":500,"rate":"1.088"},{"sellUnit":1000,"rate":"0.7"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"5.096"},{"sellUnit":200,"rate":"2.696"},{"sellUnit":300,"rate":"1.894"},{"sellUnit":400,"rate":"1.494"},{"sellUnit":500,"rate":"1.254"},{"sellUnit":1000,"rate":"0.782"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"5.502"},{"sellUnit":200,"rate":"2.898"},{"sellUnit":300,"rate":"2.03"},{"sellUnit":400,"rate":"1.596"},{"sellUnit":500,"rate":"1.336"},{"sellUnit":1000,"rate":"0.822"}]}
  	]
  }' WHERE name = 'Common Sticker ST 07'
  ```

* US SS01

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.406"},{"sellUnit":200,"rate":"0.766"},{"sellUnit":300,"rate":"0.552"},{"sellUnit":400,"rate":"0.446"},{"sellUnit":500,"rate":"0.382"},{"sellUnit":1000,"rate":"0.276"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.644"},{"sellUnit":200,"rate":"0.886"},{"sellUnit":300,"rate":"0.632"},{"sellUnit":400,"rate":"0.506"},{"sellUnit":500,"rate":"0.43"},{"sellUnit":1000,"rate":"0.3"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.038"},{"sellUnit":200,"rate":"1.082"},{"sellUnit":300,"rate":"0.764"},{"sellUnit":400,"rate":"0.604"},{"sellUnit":500,"rate":"0.508"},{"sellUnit":1000,"rate":"0.338"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.278"},{"sellUnit":200,"rate":"1.202"},{"sellUnit":300,"rate":"0.842"},{"sellUnit":400,"rate":"0.664"},{"sellUnit":500,"rate":"0.556"},{"sellUnit":1000,"rate":"0.362"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.262"},{"sellUnit":200,"rate":"0.694"},{"sellUnit":300,"rate":"0.504"},{"sellUnit":400,"rate":"0.41"},{"sellUnit":500,"rate":"0.352"},{"sellUnit":1000,"rate":"0.246"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.502"},{"sellUnit":200,"rate":"0.814"},{"sellUnit":300,"rate":"0.584"},{"sellUnit":400,"rate":"0.47"},{"sellUnit":500,"rate":"0.4"},{"sellUnit":1000,"rate":"0.27"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"1.894"},{"sellUnit":200,"rate":"1.01"},{"sellUnit":300,"rate":"0.716"},{"sellUnit":400,"rate":"0.568"},{"sellUnit":500,"rate":"0.48"},{"sellUnit":1000,"rate":"0.31"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.134"},{"sellUnit":200,"rate":"1.13"},{"sellUnit":300,"rate":"0.794"},{"sellUnit":400,"rate":"0.628"},{"sellUnit":500,"rate":"0.528"},{"sellUnit":1000,"rate":"0.334"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.236"},{"sellUnit":200,"rate":"1.2"},{"sellUnit":300,"rate":"0.854"},{"sellUnit":400,"rate":"0.682"},{"sellUnit":500,"rate":"0.578"},{"sellUnit":1000,"rate":"0.378"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.642"},{"sellUnit":200,"rate":"1.402"},{"sellUnit":300,"rate":"0.99"},{"sellUnit":400,"rate":"0.784"},{"sellUnit":500,"rate":"0.66"},{"sellUnit":1000,"rate":"0.42"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.212"},{"sellUnit":200,"rate":"1.688"},{"sellUnit":300,"rate":"1.18"},{"sellUnit":400,"rate":"0.926"},{"sellUnit":500,"rate":"0.774"},{"sellUnit":1000,"rate":"0.476"}]}
  		,{"bandage":"K1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.618"},{"sellUnit":200,"rate":"1.89"},{"sellUnit":300,"rate":"1.314"},{"sellUnit":400,"rate":"1.028"},{"sellUnit":500,"rate":"0.854"},{"sellUnit":1000,"rate":"0.518"}]}
  	]
  }' WHERE name = 'Common Sticker SS 01'
  ```

* US SS02

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"1.87"},{"sellUnit":200,"rate":"0.996"},{"sellUnit":300,"rate":"0.706"},{"sellUnit":400,"rate":"0.56"},{"sellUnit":500,"rate":"0.472"},{"sellUnit":1000,"rate":"0.306"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.276"},{"sellUnit":200,"rate":"1.2"},{"sellUnit":300,"rate":"0.84"},{"sellUnit":400,"rate":"0.662"},{"sellUnit":500,"rate":"0.554"},{"sellUnit":1000,"rate":"0.346"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"2.764"},{"sellUnit":200,"rate":"1.444"},{"sellUnit":300,"rate":"1.004"},{"sellUnit":400,"rate":"0.784"},{"sellUnit":500,"rate":"0.652"},{"sellUnit":1000,"rate":"0.396"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.17"},{"sellUnit":200,"rate":"1.646"},{"sellUnit":300,"rate":"1.138"},{"sellUnit":400,"rate":"0.884"},{"sellUnit":500,"rate":"0.732"},{"sellUnit":1000,"rate":"0.436"}]}
  	]
  }' WHERE name = 'Common Sticker SS 02'
  ```

* US SS03

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.09"},{"sellUnit":200,"rate":"1.142"},{"sellUnit":300,"rate":"0.828"},{"sellUnit":400,"rate":"0.67"},{"sellUnit":500,"rate":"0.574"},{"sellUnit":1000,"rate":"0.394"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.496"},{"sellUnit":200,"rate":"1.346"},{"sellUnit":300,"rate":"0.962"},{"sellUnit":400,"rate":"0.772"},{"sellUnit":500,"rate":"0.656"},{"sellUnit":1000,"rate":"0.434"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.13"},{"sellUnit":200,"rate":"1.662"},{"sellUnit":300,"rate":"1.174"},{"sellUnit":400,"rate":"0.93"},{"sellUnit":500,"rate":"0.782"},{"sellUnit":1000,"rate":"0.498"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.536"},{"sellUnit":200,"rate":"1.866"},{"sellUnit":300,"rate":"1.31"},{"sellUnit":400,"rate":"1.032"},{"sellUnit":500,"rate":"0.864"},{"sellUnit":1000,"rate":"0.538"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.13"},{"sellUnit":200,"rate":"1.662"},{"sellUnit":300,"rate":"1.174"},{"sellUnit":400,"rate":"0.93"},{"sellUnit":500,"rate":"0.782"},{"sellUnit":1000,"rate":"0.498"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.536"},{"sellUnit":200,"rate":"1.866"},{"sellUnit":300,"rate":"1.31"},{"sellUnit":400,"rate":"1.032"},{"sellUnit":500,"rate":"0.864"},{"sellUnit":1000,"rate":"0.538"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"4.17"},{"sellUnit":200,"rate":"2.184"},{"sellUnit":300,"rate":"1.52"},{"sellUnit":400,"rate":"1.19"},{"sellUnit":500,"rate":"0.99"},{"sellUnit":1000,"rate":"0.602"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"4.576"},{"sellUnit":200,"rate":"2.386"},{"sellUnit":300,"rate":"1.656"},{"sellUnit":400,"rate":"1.292"},{"sellUnit":500,"rate":"1.072"},{"sellUnit":1000,"rate":"0.642"}]}
  	]
  }' WHERE name = 'Common Sticker SS 03'
  ```

* US SS04

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.114"},{"sellUnit":200,"rate":"1.16"},{"sellUnit":300,"rate":"0.84"},{"sellUnit":400,"rate":"0.682"},{"sellUnit":500,"rate":"0.586"},{"sellUnit":1000,"rate":"0.404"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.52"},{"sellUnit":200,"rate":"1.362"},{"sellUnit":300,"rate":"0.976"},{"sellUnit":400,"rate":"0.784"},{"sellUnit":500,"rate":"0.668"},{"sellUnit":1000,"rate":"0.444"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.17"},{"sellUnit":200,"rate":"1.688"},{"sellUnit":300,"rate":"1.192"},{"sellUnit":400,"rate":"0.946"},{"sellUnit":500,"rate":"0.798"},{"sellUnit":1000,"rate":"0.508"}]}
  		,{"bandage":"L1","coating":"NOLAMINATION","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.576"},{"sellUnit":200,"rate":"1.89"},{"sellUnit":300,"rate":"1.328"},{"sellUnit":400,"rate":"1.048"},{"sellUnit":500,"rate":"0.878"},{"sellUnit":1000,"rate":"0.55"}]}
  	]
  }' WHERE name = 'Common Sticker SS 04'
  ```

* US SS05

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.65"},{"sellUnit":200,"rate":"1.476"},{"sellUnit":300,"rate":"1.084"},{"sellUnit":400,"rate":"0.888"},{"sellUnit":500,"rate":"0.772"},{"sellUnit":1000,"rate":"0.544"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"3.056"},{"sellUnit":200,"rate":"1.68"},{"sellUnit":300,"rate":"1.22"},{"sellUnit":400,"rate":"0.99"},{"sellUnit":500,"rate":"0.852"},{"sellUnit":1000,"rate":"0.586"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.902"},{"sellUnit":200,"rate":"2.102"},{"sellUnit":300,"rate":"1.502"},{"sellUnit":400,"rate":"1.202"},{"sellUnit":500,"rate":"1.022"},{"sellUnit":1000,"rate":"0.67"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.308"},{"sellUnit":200,"rate":"2.304"},{"sellUnit":300,"rate":"1.638"},{"sellUnit":400,"rate":"1.304"},{"sellUnit":500,"rate":"1.102"},{"sellUnit":1000,"rate":"0.71"}]}
  	]
  }' WHERE name = 'Common Sticker SS 05'
  ```

* US SS06

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.48"},{"sellUnit":200,"rate":"1.362"},{"sellUnit":300,"rate":"0.99"},{"sellUnit":400,"rate":"0.804"},{"sellUnit":500,"rate":"0.692"},{"sellUnit":1000,"rate":"0.476"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.886"},{"sellUnit":200,"rate":"1.566"},{"sellUnit":300,"rate":"1.126"},{"sellUnit":400,"rate":"0.906"},{"sellUnit":500,"rate":"0.774"},{"sellUnit":1000,"rate":"0.518"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.618"},{"sellUnit":200,"rate":"1.932"},{"sellUnit":300,"rate":"1.37"},{"sellUnit":400,"rate":"1.088"},{"sellUnit":500,"rate":"0.92"},{"sellUnit":1000,"rate":"0.59"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.024"},{"sellUnit":200,"rate":"2.134"},{"sellUnit":300,"rate":"1.504"},{"sellUnit":400,"rate":"1.19"},{"sellUnit":500,"rate":"1.0"},{"sellUnit":1000,"rate":"0.63"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.618"},{"sellUnit":200,"rate":"1.932"},{"sellUnit":300,"rate":"1.37"},{"sellUnit":400,"rate":"1.088"},{"sellUnit":500,"rate":"0.92"},{"sellUnit":1000,"rate":"0.59"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"4.024"},{"sellUnit":200,"rate":"2.134"},{"sellUnit":300,"rate":"1.504"},{"sellUnit":400,"rate":"1.19"},{"sellUnit":500,"rate":"1.0"},{"sellUnit":1000,"rate":"0.63"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"4.756"},{"sellUnit":200,"rate":"2.5"},{"sellUnit":300,"rate":"1.748"},{"sellUnit":400,"rate":"1.372"},{"sellUnit":500,"rate":"1.146"},{"sellUnit":1000,"rate":"0.704"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"5.162"},{"sellUnit":200,"rate":"2.704"},{"sellUnit":300,"rate":"1.884"},{"sellUnit":400,"rate":"1.474"},{"sellUnit":500,"rate":"1.228"},{"sellUnit":1000,"rate":"0.744"}]}
  	]
  }' WHERE name = 'Common Sticker SS 06'
  ```

* US SS07

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRateCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"MarginRateThomsonCut006":[
  		 {"sellUnit":"100",		"marginRate":"0.0"}
  		,{"sellUnit":"200",		"marginRate":"0.0"}
  		,{"sellUnit":"300",		"marginRate":"0.0"}
  		,{"sellUnit":"400",		"marginRate":"0.0"}
  		,{"sellUnit":"500",		"marginRate":"0.0"}
  		,{"sellUnit":"1000",	"marginRate":"0.0"}
  		,{"sellUnit":"2000",	"marginRate":"0.0"}
  		,{"sellUnit":"3000",	"marginRate":"0.0"}
  		,{"sellUnit":"4000",	"marginRate":"0.0"}
  		,{"sellUnit":"5000",	"marginRate":"0.0"}
  		,{"sellUnit":"6000",	"marginRate":"0.0"}
  		,{"sellUnit":"7000",	"marginRate":"0.0"}
  		,{"sellUnit":"8000",	"marginRate":"0.0"}
  		,{"sellUnit":"9000",	"marginRate":"0.0"}
  		,{"sellUnit":"10000",	"marginRate":"0.0"}
  		,{"sellUnit":"20000",	"marginRate":"0.0"}
  		,{"sellUnit":"30000",	"marginRate":"0.0"}
  		,{"sellUnit":"40000",	"marginRate":"0.0"}
  		,{"sellUnit":"50000",	"marginRate":"0.0"}
  		,{"sellUnit":"60000",	"marginRate":"0.0"}
  		,{"sellUnit":"70000",	"marginRate":"0.0"}
  		,{"sellUnit":"80000",	"marginRate":"0.0"}
  		,{"sellUnit":"90000",	"marginRate":"0.0"}
  		,{"sellUnit":"100000",	"marginRate":"0.0"}
  		,{"sellUnit":"110000",	"marginRate":"0.0"}
  		,{"sellUnit":"120000",	"marginRate":"0.0"}
  		,{"sellUnit":"130000",	"marginRate":"0.0"}
  		,{"sellUnit":"140000",	"marginRate":"0.0"}
  		,{"sellUnit":"150000",	"marginRate":"0.0"}
  		,{"sellUnit":"160000",	"marginRate":"0.0"}
  		,{"sellUnit":"170000",	"marginRate":"0.0"}
  		,{"sellUnit":"180000",	"marginRate":"0.0"}
  		,{"sellUnit":"190000",	"marginRate":"0.0"}
  	],
  	"OneCmRate":[
  		 {"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"2.626"},{"sellUnit":200,"rate":"1.46"},{"sellUnit":300,"rate":"1.072"},{"sellUnit":400,"rate":"0.876"},{"sellUnit":500,"rate":"0.76"},{"sellUnit":1000,"rate":"0.534"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4","cmRate":[{"sellUnit":100,"rate":"3.032"},{"sellUnit":200,"rate":"1.662"},{"sellUnit":300,"rate":"1.206"},{"sellUnit":400,"rate":"0.978"},{"sellUnit":500,"rate":"0.842"},{"sellUnit":1000,"rate":"0.576"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"3.862"},{"sellUnit":200,"rate":"2.078"},{"sellUnit":300,"rate":"1.482"},{"sellUnit":400,"rate":"1.186"},{"sellUnit":500,"rate":"1.008"},{"sellUnit":1000,"rate":"0.658"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4B1","cmRate":[{"sellUnit":100,"rate":"4.268"},{"sellUnit":200,"rate":"2.28"},{"sellUnit":300,"rate":"1.618"},{"sellUnit":400,"rate":"1.288"},{"sellUnit":500,"rate":"1.088"},{"sellUnit":1000,"rate":"0.7"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"3.862"},{"sellUnit":200,"rate":"2.078"},{"sellUnit":300,"rate":"1.482"},{"sellUnit":400,"rate":"1.186"},{"sellUnit":500,"rate":"1.008"},{"sellUnit":1000,"rate":"0.658"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1","cmRate":[{"sellUnit":100,"rate":"4.268"},{"sellUnit":200,"rate":"2.28"},{"sellUnit":300,"rate":"1.618"},{"sellUnit":400,"rate":"1.288"},{"sellUnit":500,"rate":"1.088"},{"sellUnit":1000,"rate":"0.7"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"CUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"5.096"},{"sellUnit":200,"rate":"2.696"},{"sellUnit":300,"rate":"1.894"},{"sellUnit":400,"rate":"1.494"},{"sellUnit":500,"rate":"1.254"},{"sellUnit":1000,"rate":"0.782"}]}
  		,{"bandage":"L1","coating":"GLOSSY","shape":"THOMSON_DCUT","color":"F4F1B1","cmRate":[{"sellUnit":100,"rate":"5.502"},{"sellUnit":200,"rate":"2.898"},{"sellUnit":300,"rate":"2.03"},{"sellUnit":400,"rate":"1.596"},{"sellUnit":500,"rate":"1.336"},{"sellUnit":1000,"rate":"0.822"}]}
  	]
  }' WHERE name = 'Common Sticker SS 07'
  ```

* US SB

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"MarginRate":[
  		 {"minSellUnit":"0"		,"maxSellUnit":"200",	"marginRate":"0.0"}
  		,{"minSellUnit":"200"	,"maxSellUnit":"300",	"marginRate":"0.0"}
  		,{"minSellUnit":"300"	,"maxSellUnit":"400",	"marginRate":"0.0"}
  		,{"minSellUnit":"400"	,"maxSellUnit":"500",	"marginRate":"0.0"}
  		,{"minSellUnit":"500"	,"maxSellUnit":"600",	"marginRate":"0.0"}
  		,{"minSellUnit":"600"	,"maxSellUnit":"700",	"marginRate":"0.0"}
  		,{"minSellUnit":"700"	,"maxSellUnit":"800",	"marginRate":"0.0"}
  		,{"minSellUnit":"800"	,"maxSellUnit":"900",	"marginRate":"0.0"}
  		,{"minSellUnit":"900"	,"maxSellUnit":"1000",	"marginRate":"0.0"}
  		,{"minSellUnit":"1000"	,"maxSellUnit":"1100",	"marginRate":"0.0"}
  		,{"minSellUnit":"1100"	,"maxSellUnit":"1200",	"marginRate":"0.0"}
  		,{"minSellUnit":"1200"	,"maxSellUnit":"1300",	"marginRate":"0.0"}
  		,{"minSellUnit":"1300"	,"maxSellUnit":"1400",	"marginRate":"0.0"}
  		,{"minSellUnit":"1400"	,"maxSellUnit":"1500",	"marginRate":"0.0"}
  		,{"minSellUnit":"1500"	,"maxSellUnit":"1600",	"marginRate":"0.0"}
  		,{"minSellUnit":"1600"	,"maxSellUnit":"1700",	"marginRate":"0.0"}
  		,{"minSellUnit":"1700"	,"maxSellUnit":"1800",	"marginRate":"0.0"}
  		,{"minSellUnit":"1800"	,"maxSellUnit":"1900",	"marginRate":"0.0"}
  		,{"minSellUnit":"1900"	,"maxSellUnit":"2000",	"marginRate":"0.0"}
  		,{"minSellUnit":"2000"	,"maxSellUnit":"2100",	"marginRate":"0.0"}
  		,{"minSellUnit":"2100"	,"maxSellUnit":"2200",	"marginRate":"0.0"}
  		,{"minSellUnit":"2200"	,"maxSellUnit":"2300",	"marginRate":"0.0"}
  		,{"minSellUnit":"2300"	,"maxSellUnit":"2400",	"marginRate":"0.0"}
  		,{"minSellUnit":"2400"	,"maxSellUnit":"2500",	"marginRate":"0.0"}
  		,{"minSellUnit":"2500"	,"maxSellUnit":"2600",	"marginRate":"0.0"}
  		,{"minSellUnit":"2600"	,"maxSellUnit":"2700",	"marginRate":"0.0"}
  		,{"minSellUnit":"2700"	,"maxSellUnit":"2800",	"marginRate":"0.0"}
  		,{"minSellUnit":"2800"	,"maxSellUnit":"2900",	"marginRate":"0.0"}
  		,{"minSellUnit":"2900"	,"maxSellUnit":"3000",	"marginRate":"0.0"}
  		,{"minSellUnit":"3000"	,"maxSellUnit":"1000000000","marginRate":"0.0"}
  	]
  }' WHERE name = 'Common Sticker SB 01'
  ```

* US SE

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	]
  }' WHERE name = 'Common Sticker SE 01'
  ```

* US PD1

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
           {"minWeight":"0.0",	"maxWeight":"0.5",		"DeliveryCost":"0"}
          ,{"minWeight":"0.5",	"maxWeight":"1.0",		"DeliveryCost":"0"}
          ,{"minWeight":"1.0",	"maxWeight":"1.5",		"DeliveryCost":"0"}
          ,{"minWeight":"1.5",	"maxWeight":"2.0",		"DeliveryCost":"0"}
          ,{"minWeight":"2.0",	"maxWeight":"2.5",		"DeliveryCost":"0"}
          ,{"minWeight":"2.5",	"maxWeight":"3.0",		"DeliveryCost":"0"}
          ,{"minWeight":"3.0",	"maxWeight":"3.5",		"DeliveryCost":"0"}
          ,{"minWeight":"3.5",	"maxWeight":"4.0",		"DeliveryCost":"0"}
          ,{"minWeight":"4.0",	"maxWeight":"4.5",		"DeliveryCost":"0"}
          ,{"minWeight":"4.5",	"maxWeight":"5.0",		"DeliveryCost":"0"}
          ,{"minWeight":"5.0",	"maxWeight":"5.5",		"DeliveryCost":"0"}
          ,{"minWeight":"5.5",	"maxWeight":"6.0",		"DeliveryCost":"0"}
          ,{"minWeight":"6.0",	"maxWeight":"6.5",		"DeliveryCost":"0"}
          ,{"minWeight":"6.5",	"maxWeight":"7.0",		"DeliveryCost":"0"}
          ,{"minWeight":"7.0",	"maxWeight":"7.5",		"DeliveryCost":"0"}
          ,{"minWeight":"7.5",	"maxWeight":"8.0",		"DeliveryCost":"0"}
          ,{"minWeight":"8.0",	"maxWeight":"8.5",		"DeliveryCost":"0"}
          ,{"minWeight":"8.5",	"maxWeight":"9.0",		"DeliveryCost":"0"}
          ,{"minWeight":"9.0",	"maxWeight":"9.5",		"DeliveryCost":"0"}
          ,{"minWeight":"9.5",	"maxWeight":"10.0",		"DeliveryCost":"0"}
          ,{"minWeight":"10.0",	"maxWeight":"10.5",		"DeliveryCost":"0"}
          ,{"minWeight":"10.5",	"maxWeight":"11.0",		"DeliveryCost":"0"}
          ,{"minWeight":"11.0",	"maxWeight":"11.5",		"DeliveryCost":"0"}
          ,{"minWeight":"11.5",	"maxWeight":"12.0",		"DeliveryCost":"0"}
          ,{"minWeight":"12.0",	"maxWeight":"12.5",		"DeliveryCost":"0"}
          ,{"minWeight":"12.5",	"maxWeight":"13.0",		"DeliveryCost":"0"}
          ,{"minWeight":"13.0",	"maxWeight":"13.5",		"DeliveryCost":"0"}
          ,{"minWeight":"13.5",	"maxWeight":"14.0",		"DeliveryCost":"0"}
          ,{"minWeight":"14.0",	"maxWeight":"14.5",		"DeliveryCost":"0"}
          ,{"minWeight":"14.5",	"maxWeight":"15.0",		"DeliveryCost":"0"}
          ,{"minWeight":"15.0",	"maxWeight":"15.5",		"DeliveryCost":"0"}
          ,{"minWeight":"15.5",	"maxWeight":"16.0",		"DeliveryCost":"0"}
          ,{"minWeight":"16.0",	"maxWeight":"16.5",		"DeliveryCost":"0"}
          ,{"minWeight":"16.5",	"maxWeight":"17.0",		"DeliveryCost":"0"}
          ,{"minWeight":"17.0",	"maxWeight":"17.5",		"DeliveryCost":"0"}
          ,{"minWeight":"17.5",	"maxWeight":"18.0",		"DeliveryCost":"0"}
          ,{"minWeight":"18.0",	"maxWeight":"18.5",		"DeliveryCost":"0"}
          ,{"minWeight":"18.5",	"maxWeight":"19.0",		"DeliveryCost":"0"}
          ,{"minWeight":"19.0",	"maxWeight":"19.5",		"DeliveryCost":"0"}
          ,{"minWeight":"19.5",	"maxWeight":"20.0",		"DeliveryCost":"0"}
          ,{"minWeight":"20.0",	"maxWeight":"20.5",		"DeliveryCost":"0"}
          ,{"minWeight":"20.5",	"maxWeight":"21.0",		"DeliveryCost":"0"}
          ,{"minWeight":"21.0",	"maxWeight":"21.5",		"DeliveryCost":"0"}
          ,{"minWeight":"21.5",	"maxWeight":"22.0",		"DeliveryCost":"0"}
          ,{"minWeight":"22.0",	"maxWeight":"22.5",		"DeliveryCost":"0"}
          ,{"minWeight":"22.5",	"maxWeight":"23.0",		"DeliveryCost":"0"}
          ,{"minWeight":"23.0",	"maxWeight":"23.5",		"DeliveryCost":"0"}
          ,{"minWeight":"23.5",	"maxWeight":"24.0",		"DeliveryCost":"0"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",		"DeliveryCost":"0"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",		"DeliveryCost":"0"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",		"DeliveryCost":"0"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",		"DeliveryCost":"0"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",		"DeliveryCost":"0"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",		"DeliveryCost":"0"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",		"DeliveryCost":"0"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",		"DeliveryCost":"0"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",		"DeliveryCost":"0"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",		"DeliveryCost":"0"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",		"DeliveryCost":"0"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",		"DeliveryCost":"0"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0",	"DeliveryCost":"0"}
  	],
  	"BandageRateDic":[
  		 {"key":"L1","value":"0.0"}
  		,{"key":"K1","value":"0.0"}
  	],
  	"CoatingRateDic":[
  		 {"key":"NOLAMINATION",	"value":"0.0"}
  		,{"key":"GLOSSY",		"value":"0.1"}
  		,{"key":"MATTE",		"value":"0.15"}
  	]
  }' WHERE name = 'Common Sticker PD 0101'
  ```
  
* US PD2

  ``` json
  UPDATE CalcData SET basicCalcData = N'{
  	"ExportDeliveryCost":[
  		 {"minWeight":"0.0",	"maxWeight":"0.5",	"DeliveryCost":"5180"}
  		,{"minWeight":"0.5",	"maxWeight":"1.0",	"DeliveryCost":"5860"}
  		,{"minWeight":"1.0",	"maxWeight":"1.5",	"DeliveryCost":"6550"}
  		,{"minWeight":"1.5",	"maxWeight":"2.0",	"DeliveryCost":"7230"}
  		,{"minWeight":"2.0",	"maxWeight":"2.5",	"DeliveryCost":"7920"}
  		,{"minWeight":"2.5",	"maxWeight":"3.0",	"DeliveryCost":"8590"}
  		,{"minWeight":"3.0",	"maxWeight":"3.5",	"DeliveryCost":"9630"}
  		,{"minWeight":"3.5",	"maxWeight":"4.0",	"DeliveryCost":"10680"}
  		,{"minWeight":"4.0",	"maxWeight":"4.5",	"DeliveryCost":"11720"}
  		,{"minWeight":"4.5",	"maxWeight":"5.0",	"DeliveryCost":"12770"}
  		,{"minWeight":"5.0",	"maxWeight":"5.5",	"DeliveryCost":"13810"}
  		,{"minWeight":"5.5",	"maxWeight":"6.0",	"DeliveryCost":"14850"}
  		,{"minWeight":"6.0",	"maxWeight":"6.5",	"DeliveryCost":"15900"}
  		,{"minWeight":"6.5",	"maxWeight":"7.0",	"DeliveryCost":"16940"}
  		,{"minWeight":"7.0",	"maxWeight":"7.5",	"DeliveryCost":"17990"}
  		,{"minWeight":"7.5",	"maxWeight":"8.0",	"DeliveryCost":"19020"}
  		,{"minWeight":"8.0",	"maxWeight":"8.5",	"DeliveryCost":"20070"}
  		,{"minWeight":"8.5",	"maxWeight":"9.0",	"DeliveryCost":"21110"}
  		,{"minWeight":"9.0",	"maxWeight":"9.5",	"DeliveryCost":"22150"}
  		,{"minWeight":"9.5",	"maxWeight":"10.0",	"DeliveryCost":"23200"}
  		,{"minWeight":"10.0",	"maxWeight":"10.5",	"DeliveryCost":"24240"}
  		,{"minWeight":"10.5",	"maxWeight":"11.0",	"DeliveryCost":"25290"}
  		,{"minWeight":"11.0",	"maxWeight":"11.5",	"DeliveryCost":"26330"}
  		,{"minWeight":"11.5",	"maxWeight":"12.0",	"DeliveryCost":"27370"}
  		,{"minWeight":"12.0",	"maxWeight":"12.5",	"DeliveryCost":"28420"}
  		,{"minWeight":"12.5",	"maxWeight":"13.0",	"DeliveryCost":"29450"}
  		,{"minWeight":"13.0",	"maxWeight":"13.5",	"DeliveryCost":"30500"}
  		,{"minWeight":"13.5",	"maxWeight":"14.0",	"DeliveryCost":"31540"}
  		,{"minWeight":"14.0",	"maxWeight":"14.5",	"DeliveryCost":"32580"}
  		,{"minWeight":"14.5",	"maxWeight":"15.0",	"DeliveryCost":"33630"}
  		,{"minWeight":"15.0",	"maxWeight":"15.5",	"DeliveryCost":"34670"}
  		,{"minWeight":"15.5",	"maxWeight":"16.0",	"DeliveryCost":"35720"}
  		,{"minWeight":"16.0",	"maxWeight":"16.5",	"DeliveryCost":"36760"}
  		,{"minWeight":"16.5",	"maxWeight":"17.0",	"DeliveryCost":"37800"}
  		,{"minWeight":"17.0",	"maxWeight":"17.5",	"DeliveryCost":"38850"}
  		,{"minWeight":"17.5",	"maxWeight":"18.0",	"DeliveryCost":"39880"}
  		,{"minWeight":"18.0",	"maxWeight":"18.5",	"DeliveryCost":"40930"}
  		,{"minWeight":"18.5",	"maxWeight":"19.0",	"DeliveryCost":"41970"}
  		,{"minWeight":"19.0",	"maxWeight":"19.5",	"DeliveryCost":"43020"}
  		,{"minWeight":"19.5",	"maxWeight":"20.0",	"DeliveryCost":"44060"}
  		,{"minWeight":"20.0",	"maxWeight":"20.5",	"DeliveryCost":"45100"}
  		,{"minWeight":"20.5",	"maxWeight":"21.0",	"DeliveryCost":"46150"}
  		,{"minWeight":"21.0",	"maxWeight":"21.5",	"DeliveryCost":"47190"}
  		,{"minWeight":"21.5",	"maxWeight":"22.0",	"DeliveryCost":"48240"}
  		,{"minWeight":"22.0",	"maxWeight":"22.5",	"DeliveryCost":"49280"}
  		,{"minWeight":"22.5",	"maxWeight":"23.0",	"DeliveryCost":"50310"}
  		,{"minWeight":"23.0",	"maxWeight":"23.5",	"DeliveryCost":"51360"}
  		,{"minWeight":"23.5",	"maxWeight":"24.0",	"DeliveryCost":"52400"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",	"DeliveryCost":"53450"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",	"DeliveryCost":"54490"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",	"DeliveryCost":"55530"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",	"DeliveryCost":"56580"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",	"DeliveryCost":"57620"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",	"DeliveryCost":"58670"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",	"DeliveryCost":"59710"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",	"DeliveryCost":"60750"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",	"DeliveryCost":"61790"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",	"DeliveryCost":"62830"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",	"DeliveryCost":"63880"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",	"DeliveryCost":"64920"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0","DeliveryCost":"2100"}
  	],
  	"ImportDeliveryCost":[
  		 {"minWeight":"0.0",	"maxWeight":"0.5",	"DeliveryCost":"21000"}
  		,{"minWeight":"0.5",	"maxWeight":"1.0",	"DeliveryCost":"23100"}
  		,{"minWeight":"1.0",	"maxWeight":"1.5",	"DeliveryCost":"25200"}
  		,{"minWeight":"1.5",	"maxWeight":"2.0",	"DeliveryCost":"27300"}
  		,{"minWeight":"2.0",	"maxWeight":"2.5",	"DeliveryCost":"29400"}
  		,{"minWeight":"2.5",	"maxWeight":"3.0",	"DeliveryCost":"31500"}
  		,{"minWeight":"3.0",	"maxWeight":"3.5",	"DeliveryCost":"33600"}
  		,{"minWeight":"3.5",	"maxWeight":"4.0",	"DeliveryCost":"35700"}
  		,{"minWeight":"4.0",	"maxWeight":"4.5",	"DeliveryCost":"37800"}
  		,{"minWeight":"4.5",	"maxWeight":"5.0",	"DeliveryCost":"39900"}
  		,{"minWeight":"5.0",	"maxWeight":"5.5",	"DeliveryCost":"42000"}
  		,{"minWeight":"5.5",	"maxWeight":"6.0",	"DeliveryCost":"44100"}
  		,{"minWeight":"6.0",	"maxWeight":"6.5",	"DeliveryCost":"46200"}
  		,{"minWeight":"6.5",	"maxWeight":"7.0",	"DeliveryCost":"48300"}
  		,{"minWeight":"7.0",	"maxWeight":"7.5",	"DeliveryCost":"50400"}
  		,{"minWeight":"7.5",	"maxWeight":"8.0",	"DeliveryCost":"52500"}
  		,{"minWeight":"8.0",	"maxWeight":"8.5",	"DeliveryCost":"54600"}
  		,{"minWeight":"8.5",	"maxWeight":"9.0",	"DeliveryCost":"56700"}
  		,{"minWeight":"9.0",	"maxWeight":"9.5",	"DeliveryCost":"58800"}
  		,{"minWeight":"9.5",	"maxWeight":"10.0",	"DeliveryCost":"60900"}
  		,{"minWeight":"10.0",	"maxWeight":"10.5",	"DeliveryCost":"63000"}
  		,{"minWeight":"10.5",	"maxWeight":"11.0",	"DeliveryCost":"65100"}
  		,{"minWeight":"11.0",	"maxWeight":"11.5",	"DeliveryCost":"67200"}
  		,{"minWeight":"11.5",	"maxWeight":"12.0",	"DeliveryCost":"69300"}
  		,{"minWeight":"12.0",	"maxWeight":"12.5",	"DeliveryCost":"71400"}
  		,{"minWeight":"12.5",	"maxWeight":"13.0",	"DeliveryCost":"73500"}
  		,{"minWeight":"13.0",	"maxWeight":"13.5",	"DeliveryCost":"75600"}
  		,{"minWeight":"13.5",	"maxWeight":"14.0",	"DeliveryCost":"77700"}
  		,{"minWeight":"14.0",	"maxWeight":"14.5",	"DeliveryCost":"79800"}
  		,{"minWeight":"14.5",	"maxWeight":"15.0",	"DeliveryCost":"81900"}
  		,{"minWeight":"15.0",	"maxWeight":"15.5",	"DeliveryCost":"84000"}
  		,{"minWeight":"15.5",	"maxWeight":"16.0",	"DeliveryCost":"86100"}
  		,{"minWeight":"16.0",	"maxWeight":"16.5",	"DeliveryCost":"88200"}
  		,{"minWeight":"16.5",	"maxWeight":"17.0",	"DeliveryCost":"90300"}
  		,{"minWeight":"17.0",	"maxWeight":"17.5",	"DeliveryCost":"92400"}
  		,{"minWeight":"17.5",	"maxWeight":"18.0",	"DeliveryCost":"94500"}
  		,{"minWeight":"18.0",	"maxWeight":"18.5",	"DeliveryCost":"96600"}
  		,{"minWeight":"18.5",	"maxWeight":"19.0",	"DeliveryCost":"98700"}
  		,{"minWeight":"19.0",	"maxWeight":"19.5",	"DeliveryCost":"100800"}
  		,{"minWeight":"19.5",	"maxWeight":"20.0",	"DeliveryCost":"102900"}
  		,{"minWeight":"20.0",	"maxWeight":"20.5",	"DeliveryCost":"105000"}
  		,{"minWeight":"20.5",	"maxWeight":"21.0",	"DeliveryCost":"107100"}
  		,{"minWeight":"21.0",	"maxWeight":"21.5",	"DeliveryCost":"109200"}
  		,{"minWeight":"21.5",	"maxWeight":"22.0",	"DeliveryCost":"111300"}
  		,{"minWeight":"22.0",	"maxWeight":"22.5",	"DeliveryCost":"113400"}
  		,{"minWeight":"22.5",	"maxWeight":"23.0",	"DeliveryCost":"115500"}
  		,{"minWeight":"23.0",	"maxWeight":"23.5",	"DeliveryCost":"117600"}
  		,{"minWeight":"23.5",	"maxWeight":"24.0",	"DeliveryCost":"119700"}
  		,{"minWeight":"24.0",	"maxWeight":"24.5",	"DeliveryCost":"121800"}
  		,{"minWeight":"24.5",	"maxWeight":"25.0",	"DeliveryCost":"123900"}
  		,{"minWeight":"25.0",	"maxWeight":"25.5",	"DeliveryCost":"126000"}
  		,{"minWeight":"25.5",	"maxWeight":"26.0",	"DeliveryCost":"128100"}
  		,{"minWeight":"26.0",	"maxWeight":"26.5",	"DeliveryCost":"130200"}
  		,{"minWeight":"26.5",	"maxWeight":"27.0",	"DeliveryCost":"132300"}
  		,{"minWeight":"27.0",	"maxWeight":"27.5",	"DeliveryCost":"134400"}
  		,{"minWeight":"27.5",	"maxWeight":"28.0",	"DeliveryCost":"136500"}
  		,{"minWeight":"28.0",	"maxWeight":"28.5",	"DeliveryCost":"138600"}
  		,{"minWeight":"28.5",	"maxWeight":"29.0",	"DeliveryCost":"140700"}
  		,{"minWeight":"29.0",	"maxWeight":"29.5",	"DeliveryCost":"142800"}
  		,{"minWeight":"29.5",	"maxWeight":"30.0",	"DeliveryCost":"144900"}
  		,{"minWeight":"30.0",	"maxWeight":"999999.0","DeliveryCost":"4200"}
  	]
  }' WHERE name = 'Common Sticker PD 02'
  ```

* 
