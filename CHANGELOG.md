# Changelog — 에이전트 보안점검 현황 자동화

부천여성청소년재단 전략경영실 | Agent Security Check Automation Tool

---

## v4.9 — HWPX 맑은 고딕 적용 보강 `2026-06`

### 변경 내용
- HWPX 글꼴이 맑은 고딕으로 적용되지 않던 문제 보강
- 기존 글꼴 목록 부분 치환 대신 `fontfaces` 블록 전체를 맑은 고딕 기준으로 재구성

### 기술
- `HANGUL`, `LATIN`, `HANJA`, `JAPANESE`, `OTHER`, `SYMBOL`, `USER` fontface를 모두 맑은 고딕 계열로 생성
- regular font id `0`, `1`과 bold font id `2`를 명시

---

## v4.8 — HWPX 표 첫 행 볼드 보강 `2026-06`

### 변경 내용
- HWPX 표 첫 행이 한컴에서 더 확실히 볼드로 보이도록 글자 모양 참조 방식 개선
- 표 첫 행 전용 `맑은 고딕 Bold` font face 추가

### 기술
- 표 첫 행 `charPrIDRef`를 연속 ID인 `7`로 변경
- 섹션 제목 `charPrIDRef`를 연속 ID인 `8`로 변경
- `fontRef`가 명시적인 Bold font face를 참조하도록 보정

---

## v4.7 — HWPX 표 세부 서식 보정 `2026-06`

### 변경 내용
- 표 좌우 끝단만 투명 처리하고 내부 세로 테두리는 표시되도록 수정
- HWPX 표를 다시 단일 표 구조로 생성해 제목 행 반복은 유지하면서 표 분리감을 줄임
- 표 제목 행의 맑은 고딕/볼드 적용 안정화
- 중간 제목을 13pt 볼드로 변경하고 대괄호 제거
- 표 다음에 빈 줄 한 칸 추가
- 문서 시작부의 빈 텍스트 줄 제거

### 기술
- 첫/중간/마지막 셀 위치별 `borderFill` 참조 분리
- 섹션 제목용 `charPr id=22` 추가
- 단일 `hp:tbl` + `repeatHeader=1` 구조 유지

---

## v4.6 — HWPX 표 레이아웃 보정 `2026-06`

### 변경 내용
- 긴 HWPX 표가 페이지를 넘길 수 있도록 표 블록 분할 및 본문 흐름 배치 적용
- 표 안의 내용을 가운데 정렬하고 제목 행을 볼드 처리
- 제목 행 배경색을 `#D9D9D9`로 변경
- 전체 HWPX 글꼴을 맑은 고딕으로 보정
- 페이지 여백을 좌우 20mm, 상하 15mm로 변경
- 부서별 HWPX 상단의 기관명 표기를 부서명 표기로 변경
- 표 좌우 테두리는 숨기고 상하 테두리는 0.5mm로 변경

### 기술
- 표 위치 속성을 `treatAsChar="0"`로 변경해 문서 흐름 기반 배치 적용
- 긴 목록은 반복 헤더가 있는 여러 `hp:tbl` 블록으로 분할
- 가운데 정렬용 `paraPr`, 표 제목 행 볼드용 `charPr`, 표 전용 `borderFill` 스타일 추가

---

## v4.5 — HWPX 표 서식 개선 `2026-06`

### 변경 내용
- HWPX 보고서의 파이프 문자 기반 표를 실제 HWPX 표 객체로 변경
- 총괄/부서별 보고서의 요약, 부서별 현황, 조치 필요 대상, 취약 항목 분석, 점검 결과 표 서식 개선
- 표 헤더 배경색과 셀 테두리 스타일 추가

### 기술
- `hp:tbl`, `hp:tr`, `hp:tc`, `hp:subList` 기반 표 XML 생성
- `Contents/header.xml`에 표용 `borderFill` 스타일 추가
- GitHub `python-hwpx` 표 샘플 구조를 참고해 셀 주소, 셀 크기, 셀 여백, 반복 헤더 속성 적용

---

## v4.4 — HWPX 호환성 수정 `2026-06`

### 변경 내용
- 한컴에서 HWPX 파일 오류가 발생하던 문제 수정
- HWPX 내부 XML 패키지 구조를 GitHub HWPX 생성 샘플 구조에 맞춰 보정
- `version.xml`, `META-INF/manifest.xml`, `Contents/content.hpf`, `Contents/header.xml`, `Contents/section0.xml` 생성 방식 개선

### 기술
- `section0.xml` 루트를 `hp:sec` 단독 구조에서 `hs:sec` + `hp:secPr` 구조로 변경
- `content.hpf`를 `hc:package` 구조로 변경
- ODF manifest 네임스페이스와 `odf:file-entry` 속성 적용
- 기본 글꼴/문단/글자 모양 참조를 `header.xml`에 명시

---

## v4.3 — HWPX 보고서 추출 `2026-06`

### 변경 내용
- **총괄 HWPX 다운로드** 버튼 추가
- **부서별 HWPX ZIP 다운로드** 기능 추가
- 기존 Excel 총괄/부서별 보고서는 그대로 유지
- 부서별 HWPX에는 기존 부서별 Excel과 동일하게 IP 주소 미포함

### 기술
- `buildOverallReportModel()`, `buildDeptReportModel()` 추가: Excel/HWPX 공용 리포트 모델
- `createHwpxBlob()`: JSZip 기반 HWPX 패키지 생성
- `exportOverallHwpx()`: 종합 HWPX 단일 파일 생성
- `doExportDeptHwpxZip()`: 부서별 HWPX 파일 생성 후 ZIP 압축
- XML escape 및 파일명 sanitize 유틸 추가

---

## v4.2 — 보안 개선 `2026-06`

### 변경 내용
- GitHub Gist 인증 토큰(PAT) 저장 위치를 `localStorage` → `sessionStorage`로 변경
- 브라우저 종료 시 토큰 자동 소멸 (공용 PC 환경 보안 향상)

### 기술
- `getGistCfg()` / `saveGistCfg()`: PAT 참조 저장소 변경
- Gist ID는 `localStorage` 유지 (민감 정보 아님)

---

## v4.1 — 직원 명부 최신화 `2026-06`

### 변경 내용
- 담당자 정비 기준 직원 명부 128명 기본값 반영
- 이유림·윤남영 등 퇴직/이동 인원 제거
- 부서 체계 정비 (전략기획부+경영지원부 → 전략경영실 통합 등)

### 기술
- `DEFAULT_DIR_RAW` 128개 항목으로 교체

---

## v4.0 — 부서별 보고서 배포 기능 `2026-06`

### 변경 내용
- **부서별 보고서 ZIP 다운로드** 기능 추가
- 생성 전 미리보기 모달: 부서별 인원·취약·미점검 현황 확인
- "취약·미점검 있는 부서만" 필터 옵션
- 각 부서 파일: 점검결과·요약·조치필요·취약항목분석 4개 시트
- IP 주소 미포함 (배포용)
- 파일명 형식: `26년 06월 PC점검결과_부서명.xlsx`
- 총괄 보고서 / 부서별 보고서 버튼 분리

### 기술
- JSZip 3.10.1 CDN 추가
- `_buildDeptGroups()`: getDeptGroup() + deptOrderIdx() 정렬
- `doExportDeptZip()`: 부서별 workbook 생성 → ZIP 압축
- `showDeptPreview()` / `renderDeptPreview()`: 실시간 미리보기

---

## v3.2 — UI 전면 개선 `2026-06`

### 변경 내용
- 재단 로고 및 파비콘 적용 (ICO 임베딩)
- 헤더 색상 파스텔 블루(`#2B6CA3`)로 변경 → 로고 가시성 확보
- 색상 팔레트 정제: UI 크롬(블루) / 데이터(그린) 분리, 퍼플 제거
- 배경색 중립 회색 계열로 변경 (전체 초록빛 과포화 해소)
- 결과 배너 그라데이션 및 그림자 적용
- 헤더 `position:sticky` 적용
- 연도·월 분리 선택 UI (기존 `input[type=month]` 대체)
- 인쇄 시 활성 탭만 출력 (body 클래스 기반 @media print 분기)

### 버그 수정
- `renderStep3()` 미선언 변수 `rmEl` 참조로 인한 연쇄 중단 수정
- `renderTable()` tbody null 미체크 수정
- `switchTab()` 중복 호출 제거
- 대시보드 저장 버튼 상세 탭 진입 시 자동 숨김

### 기술
- CSS 변수 추가: `--hd`, `--amber`, 퍼플 계열 제거
- `initReportMonthUI()`: 현재 연도 ±2 범위 자동 생성
- `switchTab()`: `body.print-dash / print-detail` 클래스 추적

---

## v3.1 — 대시보드 저장 및 인쇄 `2026-06`

### 변경 내용
- **대시보드 PNG 이미지 저장** (html2canvas)
- **PDF 저장** — 브라우저 인쇄(print-to-PDF) 활용, A4 한 장 꽉 차게 출력
- **인쇄** 버튼 추가 (`@media print` CSS로 불필요 요소 자동 숨김)
- 저장 시 재단명·기준 연월·생성 일시 헤더 자동 삽입
- 드롭다운 저장 버튼 (`💾 대시보드 저장 ▾`)

### 기술
- html2canvas 1.4.1, jsPDF 2.5.1 CDN 추가
- `captureDashboard()`: onclone 콜백으로 `select` → `span` 교체 (한글 깨짐 방지)
- `save-dropdown` 컴포넌트: click-outside 자동 닫힘
- `printForPDF()`: `window.print()` 래퍼

---

## v3.0 — 부서별 대시보드 `2026-06`

### 변경 내용
- **부서별 보안 현황 테이블**: 기관 순서 고정, 점검률 막대, 합계 행
- **취약항목 분석**: 항목별 건수·비율, 점검 완료 기기 수 기준
- **전체 점검률 프로그레스바** (안전/취약/미점검 비율)
- **결과 배너**: 총원·안전·취약·미점검·점검률 한눈에
- **상세 데이터 탭**: 이름·부서·IP 실시간 검색, 안전/취약/미점검 필터
- 엑셀 보고서에 부서별현황·취약항목분석 시트 추가
- 정렬 옵션: 기관 순서·취약 많은 순·점검률 낮은 순·총원 순

### 버그 수정
- `buildFinalRows()` row 속성 6개소 누락 → 취약항목분석 항상 공백 문제 수정

### 기술
- `DEPT_ORDER` 배열 + `getDeptGroup()` 키워드 매핑
- `buildDeptSummary()`, `renderDeptTable()`, `buildVulnAnalysis()`, `renderVulnAnalysis()`
- `_cachedRows` 캐싱 + `goStep()` 호출 시 무효화
- `filterDetailTable()`: tbody tr 순회 실시간 필터

---

## v2.2 — GitHub Gist 연동 및 설정 백업 `2026-06`

### 변경 내용
- **GitHub Gist 연동**: 규칙·직원 명부를 클라우드에 저장·동기화
- **자동 동기화**: 앱 시작 시 Gist에서 자동 불러오기 (폴백: 로컬)
- **JSON 내보내기/가져오기**: 파일 기반 설정 백업·공유
- PAT(Personal Access Token) 브라우저 로컬 저장

### 기술
- GitHub Gist REST API (GET/PATCH/POST)
- `loadFromGist()` / `saveToGist()`: `bwyf_security_config.json` 단일 파일
- `initApp()` async: 순차적 초기화 (Gist → 로컬 → 기본값)
- `exportSettingsJson()` / `importSettingsJson()`: Blob·FileReader

---

## v2.1 — 직원 명부 직접 편집 `2026-06`

### 변경 내용
- **명부 Excel 내보내기**: 편집용 템플릿 다운로드
- **명부 Excel 가져오기**: 수정 후 업로드하면 즉시 반영
- 명부 초기화 버튼 (기본값 복원)
- 명부 상태 표시 (기본/커스텀, 최종 수정일)

### 기술
- `DEFAULT_DIR_RAW` 분리 + `let DIR` 재할당 구조
- `setDIR(raw)`: localStorage `bwyf_dir` 저장 + 타임스탬프
- `exportDirToExcel()`: 6컬럼 (순번·부서명·이름·직위·겸직여부·IP힌트)
- `importDirFromExcel()`: 헤더 행 자동 탐지, 겸직(Y) → `sameAs:true`

---

## v2.0 — 사전 매핑 규칙 UI 설정 `2026-06`

### 변경 내용
- **규칙 설정 모달**: 코드 없이 매핑 규칙 추가·삭제
- 4가지 규칙 유형: 이름→직원 / IP→직원 / 이름+IP→직원·공용 / 중복 스킵
- IP 비교 방식: 정확히 일치 / 앞부분 일치(대역)
- 설정 브라우저 자동 저장, 기본값 복원

### 기술
- `userRules` 배열 + `localStorage bwyf_map_rules`
- `ruleMatchesRow()` / `applyRuleToRow()`: 4종 유형 처리
- `doMapping()` 완전 재작성: 규칙 우선 → 이름 매핑 → 미확인
- 설정 모달 3섹션: Gist 연동 · 직원 명부 관리 · 매핑 규칙

---

## v1.0 — 최초 출시 `2026-06`

### 기능
- 에이전트 보안점검 결과 Excel 업로드 및 파싱
- 직원 명부와 자동 대조·이름 매핑
- 미확인 기기 수동 할당 (기본값: 공용 PC)
- IP 대역 기반 부서 추정
- 동명이인 IP 힌트 자동 구분
- 직원 명부 순서 기준 정렬 출력
- 결과 Excel 다운로드 (보안점검결과·요약 시트)
- 3단계 워크플로우: 업로드 → 검토·할당 → 내보내기

### 기술
- SheetJS 0.18.5 기반 xlsx 파싱, 헤더 행 자동 탐지
- `DIR` 배열: 전화번호부 PDF 등장 순서 인덱싱, `ipHint`/`sameAs` 속성
- `findDirEntry()`: 정확 매핑 → 부분 매핑 (컴퓨터명 포함 검사) → IP 대역 추정
- `buildNotes()`: CHECK_COLS 기반 취약 항목 집계, 점검불가 구분
- `buildFinalRows()`: DIR 전체 기준 생성 + 매핑 덮어쓰기
- EUC-KR/CP949·UTF-8 자동 인코딩 감지
- PC 2대 운영 자동 통합 (점수 높은 쪽 채택, "PC 2대 운영" 비고)

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| 구조 | 단일 HTML 파일 (서버 불필요) |
| 데이터 파싱 | SheetJS 0.18.5 |
| ZIP 생성 | JSZip 3.10.1 |
| 이미지 캡처 | html2canvas 1.4.1 |
| PDF | jsPDF 2.5.1 (이미지 삽입) |
| 클라우드 | GitHub Gist REST API |
| 저장소 | localStorage (설정·규칙·명부) |
| 언어 | Vanilla HTML/CSS/JS (프레임워크 없음) |

---

*개발: Claude (Anthropic) + 부천여성청소년재단 전략경영실*
