---
title: "로컬 IIS 디버깅"
description: "로컬 IIS 세팅, VS 세팅, 디버깅 방법"
tags: [IIS, VS, VisualStudio, 디버깅 ]
---

# 로컬 IIS 디버깅을 하기 위해 다음 작업
티쿤 프로젝트는 하나의 솔루션으로 다양한 사이트를 구동하기 위해 사이트 별로 도메인 주소 및 가상 디렉토리 연결 설정이 필요합니다.
그래서 사이트별로 IIS 세팅 후 Visual Stduio 와 IIS 프로세스를 연결하여 디버깅 합니다.


## 로컬 IIS 세팅
각 프로젝트별 환경 설정은 다음 문서를 참고 바랍니다.
[프로젝트별 설정](/devGuide/devEnv/projectEvn.html)


## Visual Studio 관리자 권한 실행
IIS 디버깅 연결을 위해서는 Visual Studio가 관리자 권한으로 실행되어야 합니다. 

1. Visual Studio 가 설치된 폴더로 이동 ex) "C:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\IDE\"
2. devenv.exe 파일에서 우측 클릭, 호환성 문제 해결
3. 프로그램 문제 해결
![image](https://user-images.githubusercontent.com/12683073/98492905-8fdf5780-227c-11eb-91ac-ed56969c1de2.png)

4. "프로그램에 추가 권한 필요" 체크
![image](https://user-images.githubusercontent.com/12683073/98493115-011f0a80-227d-11eb-8e19-1347a9d1f5b4.png)

5. 프로그램 테스트
6. 예, 이프로그램에 대한 현재 설정을 저장합니다<br/>
![image](https://user-images.githubusercontent.com/12683073/98493165-20b63300-227d-11eb-9146-04f1562201bc.png)


## 프로세스에 연결

1. Visual Studio 메뉴 디버그 > 프로세스에 연결 (CTRL + ALT + P)
![image](https://user-images.githubusercontent.com/12683073/98494618-c4551280-2280-11eb-88d8-fce6ddb627d6.png)
2. 모든 사용자의 프로세스 표시 체크
3. w3wp.exe 프로세스 선택