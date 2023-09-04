# Matching Request Form

> 견적 요청 폼 구현

## Install & Start

```
 yarn
```

> install node_modules

```
yarn dev
```

> execute app in local as dev mode

## Structure

```
src
 ├── components  # each component of a page
 ├── hooks       # custom hooks collection
 ├── pages       # pages component
 ├── store       # state collection
 ├── styles      # style files
 |
 ├── main.tsx    # entry point file
 └── router.tsx  # routes specification file

```

- store : `redux-toolkit(rtk)`을 사용하여 상태관리를 진행하였고, rtk에 내재된 `redux-thunk`를 통해서 API 통신을 구현하였습니다.

## Features

- [x] 3개의 페이지 구성

  > Home, Form, Result : using `React Router`

- [x] 체크박스, 셀렉트박스 폼 구현

- [x] 이전 버튼 클릭시 선택한 답변 유지

- [x] 폼에 대한 유효성 검사 → 선택여부 판단

- [x] 제출버튼을 통한 결과페이지 이동

- [x] 결과 페이지에서 폼에서 선택한 결과값 노출

- [ ] 결과값에 대한 json파일 만들고 다운로드 기능 추가
