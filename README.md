# TRUSTA Cockpit — 3 Mockups

화장품/의료 마케팅 대행 사업을 위한 1인 운영 대시보드 목업 3종.
앱이 아니라 **단일 HTML**입니다. 빌드 도구 없음, npm install 없음.
브라우저에서 `index.html`을 더블클릭하면 바로 열립니다.

## 파일 구성

| 파일 | 변형 | 용도 |
|---|---|---|
| `index.html` | Hub | 3가지 변형으로 가는 허브 페이지 |
| `v1-calendar.html` | V1 캘린더 중심 | 월간 발행 캘린더가 70% 차지, 셀 클릭 시 우측 패널 |
| `v2-cockpit.html` | V2 코크핏 3단 | 좌(에이전트) + 중앙(5탭) + 우(승인/백업) |
| `v3-mobile.html` | V7 모바일 우선 | 단일 컬럼, 외출 중 빠른 확인 |
| `mock_data.js` | 데이터 | 3개 변형이 공유하는 가짜 데이터 |

## 사용 방법

### 로컬에서 열기 (가장 빠름)
```
index.html 더블클릭 → 기본 브라우저에서 열림
```
※ `file://` 로 열리므로 외부 폰트/CDN은 인터넷 필요

### GitHub Pages 라이브 미리보기
배포 완료 후 URL 안내 예정.

## 키보드 단축키

| 키 | 동작 |
|---|---|
| `D` | 다크 / 라이트 토글 |

## 디자인 토큰 요약

**Light:** bg #FFFFFF / surface #F8FAFC / text #0F172A / primary #2563EB
**Dark:** bg #0F1115 / surface #171A21 / text #E5E7EB / primary #818CF8

**SNS 컬러:** IG 핑크 / Threads 검정·흰 / YouTube 빨강 / TikTok 시안 / Blog 파랑

## 다음 단계 (목업 → 실제 연결)

1. 3개 중 손에 익는 것 1개 선택
2. `mock_data.js` 구조 그대로 → 실제 데이터로 1회 수동 교체
3. SOTDA Threads/YouTube 스코어링 → 자동 채움
4. Apify MCP 로 SNS 게시물 → 같은 형식 JSON 생성
5. 매일 04:00 cron으로 `mock_data.js` 자동 갱신 → 사람 승인은 유지

## 기술 스택

- HTML + Tailwind CSS (CDN v3)
- Vanilla JS (프레임워크 없음)
- Pretendard + Inter (Google Fonts CDN)
- Material Symbols Outlined (Google Fonts CDN)

빌드 도구, 패키지 매니저, 백엔드 없음.

## 라이선스

내부 사용 목업. 공개 배포 X.

---

*2026-05-27 작성 · 사업화에이젼트_260527 프로젝트*
