/* ============================================================
   번역 작품 목록 — 새 번역이 나오면 이 파일만 고치면 됩니다.

   작품 추가: WORKS 안의 아무 곳(맨 위 추천)에 아래 한 줄을 복사해 붙이세요.
   {y:2026, t:"《작품명》", c:"작곡가", type:"오페라", kind:"free", url:"https://..."},

   y     연도 (숫자, 따옴표 없이). 연도 순으로 자동 정렬됩니다.
   t     작품명. 《》는 직접 넣어 주세요.
   c     작곡가
   type  "오페라" / "교향곡" / "그 외" (새 분류를 쓰면 필터 버튼이 자동으로 생깁니다)
   kind  "free"(무료 공개) 또는 "ebook"(전자책)
   url   링크. 아직 없으면 "" 로 두면 '링크 준비 중'으로 표시됩니다.
   links 여러 판매처가 있을 때 url 대신 사용합니다. 카드에서 '판매처 N곳' 버튼을 누르면 펼쳐집니다.
         예: links:[{n:"예스24",u:"https://..."},{n:"알라딘",u:"https://..."}]
         (아직 링크가 없는 곳은 u:"" 로 두면 '준비 중'으로 표시됩니다.)
   note  (선택) 작은 부가 설명. 예: note:"TIMF 번역 개정 버전"

   줄 끝의 쉼표(,)와 따옴표(")를 지우지 않도록 주의하세요.
   ============================================================ */
var TIMF={year:2025,items:[
  {t:"《원인과 결과》",c:"황룽 판"},
  {t:"《4개의 가곡, Op. 2》",c:"쇤베르크"},
  {t:"《어린이의 이상한 뿔피리》 [4곡 발췌]",c:"말러"},
  {t:"《전쟁 레퀴엠》",c:"브리튼"}
]};
var WORKS=[
 {y:2026,t:"《몬테카를로의 여인》",c:"풀랑크",type:"그 외",kind:"free",url:"http://to.goclassic.co.kr/file/630"},
 {y:2025,t:"《현악 사중주 2번》",c:"쇤베르크",type:"그 외",kind:"free",url:"http://to.goclassic.co.kr/file/612"},
 {y:2025,t:"《교향곡 3번 “밤의 노래”》",c:"시마노프스키",type:"교향곡",kind:"free",url:"http://to.goclassic.co.kr/file/609"},
 {y:2025,t:"《전쟁 레퀴엠》",c:"브리튼",type:"그 외",kind:"free",url:"http://to.goclassic.co.kr/file/608",note:"TIMF 번역 개정 버전"},
 {y:2024,t:"《교향곡 2번 “부활”》",c:"말러",type:"교향곡",kind:"free",url:"http://to.goclassic.co.kr/file/606"},
 {y:2024,t:"《교향곡 14번》",c:"쇼스타코비치",type:"교향곡",kind:"free",url:"http://to.goclassic.co.kr/file/605"},
 {y:2023,t:"《죽음의 도시》",c:"코른골트",type:"오페라",kind:"ebook",links:[
   {n:"e퍼플",u:"https://ohdorong3.upaper.kr/content/1160698"},
   {n:"예스24",u:"https://www.yes24.com/product/goods/119271799"},
   {n:"알라딘",u:"https://aladin.kr/p/pz4pE"},
   {n:"교보문고",u:"https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005271314"},
   {n:"북큐브",u:"https://www.bookcube.com/detail.asp?series_num=923019495"},
   {n:"밀리의서재",u:"https://short.millie.co.kr/xeufpj"},
   {n:"윌라",u:"https://www.welaaa.com/ebook/detail/24759"}
 ]},
 {y:2023,t:"《투란도트》",c:"푸치니",type:"오페라",kind:"ebook",url:"https://www.epubple.com/mypage/books/7425"},
 {y:2022,t:"《카르멘》",c:"비제",type:"오페라",kind:"free",url:"http://to.goclassic.co.kr/file/460"},
 {y:2022,t:"《푸른 수염의 성》",c:"버르토크",type:"오페라",kind:"free",url:"http://to.goclassic.co.kr/file/459"}
];