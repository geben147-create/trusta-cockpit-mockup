// TRUSTA Cockpit — 공유 목업 데이터
// 3개 변형(V1/V2/V7)이 같은 데이터를 사용합니다.
window.MOCK = {
  today: "2026-05-27",
  todayLabel: "2026-05-27 (수)",
  user: "Owner",
  brand: "TRUSTA Cockpit",

  kpis: {
    backup: { status: "ok", time: "04:00", sizeMB: 12.3, path: "backups/2026-05-27/" },
    agentsRan: 4,
    approvalsPending: 3,
    drafts: 12,
    publishedThisMonth: 47,
    highRiskFlags: 2
  },

  agents: [
    { name: "content_score_agent",         status: "idle",    last: "06:12", out: "12건 점수화", fav: true },
    { name: "cosmetic_overseas_audit",     status: "running", last: "now",   out: "-",          fav: true },
    { name: "cro_landing_agent",           status: "idle",    last: "07:30", out: "랜딩 2건",    fav: false },
    { name: "lead_research_agent",         status: "idle",    last: "어제",   out: "리드 18건",   fav: true },
    { name: "medical_marketing_risk",      status: "idle",    last: "어제",   out: "-",          fav: false }
  ],
  skills: [
    { name: "trusta_report_html_skill",    fav: true  },
    { name: "localization_tone_skill",     fav: true  },
    { name: "detail_page_audit_skill",     fav: false },
    { name: "content_remix_skill",         fav: false },
    { name: "sotda_threads_score_skill",   fav: true  }
  ],
  hooks: [
    { name: "approval_required_hook",      enabled: true },
    { name: "risk_claim_guard_hook",       enabled: true }
  ],

  // 5월 한 달치 콘텐츠 데이터 (날짜별)
  calendar: {
    "2026-05-01": [{p:"blog", s:"published", t:"K-Beauty 미국 진출 가이드", risk:"low",  score:78}],
    "2026-05-03": [{p:"instagram", s:"published", t:"선크림 신제품 릴스", risk:"low",  score:82}],
    "2026-05-05": [{p:"threads", s:"published", t:"AHA 토너 후기 모음", risk:"low",  score:71}],
    "2026-05-06": [{p:"youtube", s:"published", t:"K-Beauty 루틴 1분 컷", risk:"low",  score:88}],
    "2026-05-08": [{p:"instagram", s:"published", t:"앰플 비교 캐러셀", risk:"medium", score:65}],
    "2026-05-10": [{p:"blog", s:"published", t:"FDA 화장품 라벨 가이드", risk:"low",  score:74}],
    "2026-05-12": [
      {p:"threads", s:"published", t:"수분크림 추천", risk:"low", score:69},
      {p:"instagram", s:"published", t:"가을 메이크업", risk:"low", score:80}
    ],
    "2026-05-14": [{p:"youtube", s:"published", t:"리뷰 영상 3분", risk:"low", score:91}],
    "2026-05-15": [{p:"tiktok", s:"published", t:"K-pop 메이크업", risk:"low", score:85}],
    "2026-05-17": [{p:"blog", s:"published", t:"브랜드 스토리", risk:"low", score:73}],
    "2026-05-19": [{p:"instagram", s:"published", t:"비포 애프터", risk:"low", score:79}],
    "2026-05-20": [{p:"threads", s:"published", t:"성분 분석 스레드", risk:"low", score:77}],
    "2026-05-22": [{p:"youtube", s:"published", t:"챌린지 영상", risk:"low", score:86}],
    "2026-05-24": [
      {p:"instagram", s:"published", t:"위클리 픽", risk:"low", score:81},
      {p:"blog", s:"published", t:"글로벌 트렌드", risk:"low", score:75}
    ],
    "2026-05-26": [{p:"threads", s:"published", t:"고객 후기 모음", risk:"low", score:72}],
    "2026-05-27": [
      {p:"threads", s:"approval_pending", t:"Glow Recipe 벤치마크 카피", risk:"medium", score:84},
      {p:"instagram", s:"approval_pending", t:"선크림 미국식 톤 변환", risk:"high", score:91},
      {p:"blog", s:"draft", t:"FTC 광고 가이드 정리", risk:"low", score:68}
    ],
    "2026-05-28": [{p:"youtube", s:"draft", t:"제품 영상 콘티", risk:"low", score:0}],
    "2026-05-29": [{p:"instagram", s:"draft", t:"위켄드 캠페인", risk:"medium", score:0}],
    "2026-05-30": [{p:"threads", s:"draft", t:"월말 정산 스레드", risk:"low", score:0}]
  },

  approvalQueue: [
    {
      id: "a1",
      title: "선크림 미국식 톤 변환 (Instagram)",
      preview: "Original: 자외선 차단 강력! → US tone: My ride-or-die SPF for daily wear",
      risk: "high",
      reason: "'강력' 단어가 FTC 효능 단정 가이드 위반 가능"
    },
    {
      id: "a2",
      title: "Glow Recipe 벤치마크 카피 (Threads)",
      preview: "after 1 week: skin smoother, less redness... (개인 후기 톤)",
      risk: "medium",
      reason: "효과 단정 표현 — 'may help'로 완화 권장"
    },
    {
      id: "a3",
      title: "FTC 광고 가이드 블로그 초안",
      preview: "한국 화장품 브랜드가 미국 진출 시 반드시 알아야 할...",
      risk: "low",
      reason: "교육 콘텐츠 — 단순 검토"
    }
  ],

  recentActivity: [
    { time: "04:00", icon: "backup",         text: "백업 완료 (12.3MB)" },
    { time: "06:12", icon: "smart_toy",      text: "content_score_agent 완료 — 12건 점수화" },
    { time: "07:30", icon: "smart_toy",      text: "cro_landing_agent 완료 — 랜딩 2건" },
    { time: "09:30", icon: "warning",        text: "위험표현 2건 발견 — 리뷰 필요",     warn: true },
    { time: "10:15", icon: "edit_note",      text: "Owner — Glow Recipe IG 학습자료 추가" },
    { time: "11:02", icon: "task_alt",       text: "Threads 게시물 1건 발행 승인" }
  ],

  references: [
    { id: "r1", title: "Glow Recipe IG 후킹 분석",    source: "instagram.com/glowrecipe", added: "2026-05-26", status: "learned" },
    { id: "r2", title: "Rare Beauty 콘텐츠 톤",        source: "instagram.com/rarebeauty",  added: "2026-05-25", status: "learned" },
    { id: "r3", title: "FDA Cosmetic Labeling Claims", source: "fda.gov",                   added: "2026-05-24", status: "learned" },
    { id: "r4", title: "Drunk Elephant Threads 분석",  source: "threads.net/@drunkelephant", added: "2026-05-27", status: "pending" }
  ],

  workflow: [
    { step: 1, title: "리드 추가",          agent: "lead_research_agent",       input: "data/cosmetic_lead_seed.csv",  output: "data/lead_feedback.jsonl",         time: "2~5분" },
    { step: 2, title: "광고법 1차 검증",     agent: "cosmetic_overseas_audit",   input: "고객사 광고문구 (붙여넣기)",     output: "outputs/reports/{client}/{date}.html", time: "3~7분" },
    { step: 3, title: "현지 톤 변환",        agent: "localization_tone_skill",   input: "한국어 카피",                  output: "outputs/sns_posts/{platform}/...",  time: "1~3분" },
    { step: 4, title: "콘텐츠 점수화",       agent: "sotda_threads_score_skill", input: "Apify로 수집한 게시물 데이터",   output: "data/best_content_library.jsonl",  time: "1~2분" },
    { step: 5, title: "HTML 리포트 생성",    agent: "trusta_report_html_skill",  input: "1~4 결과",                    output: "outputs/reports/{client}/{date}.html", time: "1분" },
    { step: 6, title: "사람 승인",          agent: "approval_required_hook",    input: "리포트 + 카피",                output: "outputs/approval_queue/done/",      time: "수동" },
    { step: 7, title: "고객 전달 / 발행",   agent: "(수동)",                    input: "승인된 산출물",                 output: "Notion DB / 이메일",                time: "수동" }
  ]
};

// SNS 플랫폼 메타
window.PLATFORMS = {
  instagram: { name: "Instagram", color: "#E4405F", darkColor: "#F472B6", icon: "📷" },
  threads:   { name: "Threads",   color: "#000000", darkColor: "#FFFFFF", icon: "🧵" },
  youtube:   { name: "YouTube",   color: "#FF0000", darkColor: "#EF4444", icon: "▶" },
  tiktok:    { name: "TikTok",    color: "#000000", darkColor: "#06B6D4", icon: "♪" },
  blog:      { name: "Blog",      color: "#2563EB", darkColor: "#60A5FA", icon: "✍" }
};

// 상태 메타
window.STATUS = {
  draft:             { label: "초안",     color: "slate"  },
  approval_pending:  { label: "승인 대기", color: "amber"  },
  published:         { label: "발행됨",   color: "emerald"},
  risk_high:         { label: "위험",     color: "rose"   }
};
