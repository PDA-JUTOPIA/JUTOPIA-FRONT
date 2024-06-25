// nextIndexes와 imageIndexes는 로직이 다름
// 만약 descriptionArr[3]에서 새로운 제목을 보여주고 싶다면 nextIndexes에는 2를 넣어야 함.
// 그런데 만약 descriptionArr[3]에서 새로운 이미지를 보여주고 싶다면 imageIndexes에는 3을 넣어야 함.
// why?
// 제목 인덱스는 바뀌고 난 다음번에 적용됨.
// 하지만 이미지 인덱스는 useEffect로 인해 바뀌는 값이 실시간으로 반영됨.
// 굳이 이렇게 한 이유? 프로그레스 바 이슈 때문...

export interface DescriptionItem {
  [key: string]: string;
}
export const descriptionArr2_0: DescriptionItem[] = [
  {
    "Unit2 에 오신 여러분, 환영합니다!":
      "Unit1 의 계좌 개설, 매수, 매도 튜토리얼은 잘 끝내고 오셨나요?\n지금부터는 관련 개념을 학습하고 문제를 풀어볼 거예요.\n먼저 금융 기초 지식부터 학습해보아요. 화이팅!",
  },
  {
    "수익, 비용, 자산에 대해 알아볼까요? 먼저 수익이란?":
      "개인이나 기업이 일정 기간 동안 벌어들인 돈을 의미합니다.\n예를 들어, 개인의 월급, 기업의 매출 등이 수익에 해당합니다.",
  },
  {
    "그렇다면 비용에 대해 알아볼까요? 비용이란?":
      "수익을 얻기 위해 지출한 금액을 말합니다.\n개인의 생활비, 기업의 원자재 비용 등이 비용에 포함됩니다.",
  },
  {
    "이제 자산에 대해 알아봅시다.":
      "자산은 현재 소유하고 있는 모든 재산의 가치를 말합니다.\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
  },
  {
    "그 다음 계좌에 대해서 알아봅시다. 계좌란 무엇일까요?":
      "은행이나 금융기관에 개설한 예금, 적금, 대출 등의 거래를 기록하는 장부입니다.",
  },
  {
    "계좌에는 예금계좌와 대출계좌가 있어요. 먼저 예금계좌란?":
      "고객이 돈을 맡기고 필요할 때 인출할 수 있는 계좌입니다.",
  },
  {
    "그렇다면 대출계좌란 무엇일까요?":
      "고객이 돈을 빌리고 일정 기간 동안 갚아야 하는 계좌입니다.",
  },
  {
    "추가로 신용에 대해서도 알아봅시다. 신용이란?":
      "개인이나 기업이 대출을 받을 때 그 상환 능력을 평가한 것입니다.\n신용도가 높으면 낮은 금리로 대출을 받을 수 있습니다.",
  },
  {
    "이제 이자율에 대해서 알아봐요. 이자율은 무엇일까요?":
      "예금이나 대출 시 적용되는 이자의 비율입니다.\n예금 이자율은 예금을 맡겼을 때 받는 이자의 비율이고, 대출 이자율은 돈을 빌렸을 때 갚아야 할 이자의 비율입니다.",
  },
  {
    "적금과 예금 또한 중요한 개념이랍니다. 먼저 적금이란 무엇일까요?":
      "일정 기간 동안 정기적으로 일정 금액을 저축하고 만기 시 이자와 함께 돌려받는 금융 상품입니다.",
  },
  {
    "그렇다면 예금이란 무엇일까요?":
      "한꺼번에 일정 금액을 예치하고 일정 기간 후 원금과 이자를 받는 금융 상품입니다.",
  },
  {
    "마지막으로 금융상품과 비금융상품에 대해서 알아봐요.\n먼저 금융상품부터 알아볼까요? 금융상품이란?":
      "은행, 증권사 등 금융기관에서 제공하는 투자 및 저축 상품입니다.\n예금, 적금, 주식, 채권, 펀드 등이 포함됩니다.",
  },
  {
    "마지막으로 비금융상품에 대해서도 알아봅시다.\n비금융상품이란 무엇일까요?":
      "금융기관에서 제공하지 않는 일반적인 상품 및 서비스입니다.\n예를 들어, 부동산, 골동품, 예술품 등이 이에 해당합니다.",
  },
];
export const images2_0 = [
  "UNIT2_3/축하원숭이.png",
  "UNIT2_0/001.png",
  "UNIT2_0/002.png",
  "UNIT2_0/003.png",
  "UNIT2_0/004.png",
  "UNIT2_0/005.png",
  "UNIT2_0/006.png",
  "UNIT2_0/007.png",
  "UNIT2_0/008.png",
  "UNIT2_0/009.png",
  "UNIT2_0/010.png",
  "UNIT2_0/011.png",
  "UNIT2_0/012.png",
];
export const nextIndexes2_0 = [0, 3, 7, 10, 12];
export const imageIndexes2_0 = Array.from(
  { length: descriptionArr2_0.length - 1 },
  (_, i) => i + 1,
);
export const titles2_0 = [
  "Unit2에 온 것을 환영해요!",
  "수익, 비용, 자산이란?",
  "계좌와 신용이란?",
  "이자율과 적금, 예금이란?",
  "금융 상품과 비금융 상품이란?",
];

export const descriptionArr2_1: DescriptionItem[] = [
  {
    "증시와 증권에 대해 알아봅시다. 먼저, 증시란?":
      "증권 시장의 줄임말인 증시는 주식, 채권 등 증권이 거래되는 시장을 의미합니다.\n대표적으로 뉴욕증권거래소(NYSE), 나스닥(NASDAQ), 한국거래소(KRX) 등이 있습니다.",
  },
  {
    "그렇다면 증권이란 무엇일까요?":
      "주식, 채권 등 투자 자산을 의미하며, 소유자가 일정한 권리를 가지게 되는 금융 상품입니다.",
  },
  {
    "이제 주식에 대해 알아봅시다. 먼저 자본금에 대해 알아볼까요?":
      "회사가 사업을 위해 주주들로부터 투자받은 돈을 말합니다.\n이는 회사의 주식을 발행해 조달됩니다.",
  },
  {
    "수익을 얻는 방법에는 시세 차익과 배당금이 있어요.\n먼저 시세 차익에 대해 알아볼까요?":
      "시세차익이란 주식을 낮은 가격에 사서 높은 가격에 팔아 차익을 얻는 방법입니다.",
  },
  {
    "시세 차익 외 수익을 얻는 방법인 배당금에 대해 알아봐요. 배당금이란?":
      "회사가 이익을 주주들에게 분배하는 돈을 말합니다.\n주주는 배당금을 통해 정기적인 수익을 얻을 수 있습니다.",
  },
  {
    "주식 외에도 ETF와 채권이라는 것이 있습니다. 먼저 ETF에 대해 알아볼까요?":
      "'상장지수펀드'라고도 하는 ETF는 주식처럼 거래소에 상장되어 거래되는 펀드입니다.\n'S&P 500'과 같은 특정 지수를 추종하며, 여러 주식이나 자산으로 구성되어 있어 분산 투자 효과를 제공합니다.",
  },
  {
    "마지막으로 채권에 대해 알아봅시다.":
      "채권이란 정부나 기업이 자금을 조달하기 위해 발행하는 일종의 차용 증서입니다.\n채권을 소유한 투자자는 정해진 이자(쿠폰)를 일정 기간 동안 받고, 만기 시 원금을 돌려받습니다.\n채권은 비교적 안정적인 투자 수단으로 간주됩니다.",
  },
];
export const images2_1 = [
  "UNIT2_1/014.png",
  "UNIT2_1/015.png",
  "UNIT2_1/016.png",
  "UNIT2_1/017.png",
  "UNIT2_1/018.png",
  "UNIT2_1/019.png",
  "UNIT2_1/020.png",
];
export const nextIndexes2_1 = [1, 2, 4, 5, 6];
export const imageIndexes2_1 = Array.from(
  { length: descriptionArr2_1.length - 1 },
  (_, i) => i + 1,
);
export const titles2_1 = [
  "증시와 증권이란?",
  "자본금이란?",
  "주식을 통해 수익을 얻는 방법?",
  "ETF란?",
  "채권이란?",
];

export const descriptionArr2_3: DescriptionItem[] = [
  {
    기업분석:
      "근거있는 투자의 필수, 기업분석은 뭘까요? \n 기업분석이란 기업의 경영 현황과 재무 상태를 종합적으로 살펴보는 것입니다.",
  },
  {
    왜: "기업 분석, 뭔가 귀찮은데... 왜 꼭 해야 하냐구요?\n기업 분석을 통해 투자할 기업을 판단하고, 기준에 따라 '이유 있는' 투자를 할 수 있기 때문이죠!",
  },
  {
    어디서:
      "이제 좀 이해가 되셨으려나...?\n좋아요! 그럼 이제 네이버 증권에 들어가서 기업 분석을 시작해볼까요?\n우선, 들어가서 종목 분석-> 기업 개요를 확인해봅시다!",
  },
  {
    무엇을:
      "좋아요! 기업이 뭘 하는지는 대충 알았고...\n으악! 뭐가 이렇게 복잡하냐구요? 우선 투자 첫걸음은 간단하게 기업실적분석부터 확인해봐요",
  },
  {
    기업실적분석:
      "기업실적분석을 보면 기업의 재무상태나 수익성 등을 파악할 수 있어요.\n 즉, 투자할만한 가치가 있는지 직접 두 눈으로 확인하는거죠! 놀랍지 않나요?",
  },
  {
    매출액:
      "매출액 부분부터 확인해볼까요?\n매출액은 특정 기간 동안 기업이 제품이나 서비스를 판매하여 얻은 총 수익을 의미합니다.\n이는 기업의 성장성과 시장 점유율을 판단하는 중요한 지표입니다.",
  },
  {
    영업이익:
      "영업이익이란 뭘까요?\n영업이익은 매출액에서 영업 비용을 차감한 금액으로, 기업의 주된 영업활동으로부터 벌어들인 순이익을 나타냅니다.\n이는 기업의 수익성 및 효율성을 평가하는 핵심 지표입니다.",
  },
  {
    순이익:
      "순이익은 또 뭐죠? 어렵지 않아요!\n순이익은 영업이익에서 이자 비용, 세금 등을 차감한 최종 이익을 의미합니다.\n이는 주주에게 돌아가는 이익으로, 기업의 전체적인 재무 건전성을 평가하는 데 사용됩니다.",
  },
  {
    부채비율:
      "부채비율을 확인해봐요.\n부채비율은 기업의 총 부채를 자기자본으로 나눈 비율로, 기업의 재무 건전성과 부채 부담을 나타냅니다.\n높은 부채비율은 재무 리스크가 크다는 신호일 수 있습니다.",
  },
  {
    PER: "엥? 웬 영어인가 싶죠?\nPER은 주가를 주당순이익(EPS)으로 나눈 비율로, 주가가 기업의 이익에 비해 고평가 또는 저평가되었는지를 판단하는 데 사용됩니다. 낮은 PER은 상대적으로 저평가된 주식을 의미할 수 있습니다.",
  },
  {
    그리고: "그 밖에도 여러가지 확인할 게 많아요!\n",
  },
  {
    축하해요:
      "축하드려요! 기업분석을 통해 기업을 판단할 수 있을 것 같아요.\n이제 무지성 침팬지 투자는 안하시겠죠?",
  },
];
export const images2_3 = [
  "UNIT2_3/기업분석.jpg",
  "UNIT2_3/기업실적분석왜.jpg",
  "UNIT2_3/네이버증권기업분석.png",
  "UNIT2_3/기업실적분석.png",

  "UNIT2_3/네이버기업실적분석.png",
  "UNIT2_3/삼전매출액.png",
  "UNIT2_3/삼전영업이익액.png",
  "UNIT2_3/삼전순이익.png",
  "UNIT2_3/삼전부채비율.png",

  "UNIT2_3/종목판단지표.png",
  "UNIT2_3/그외.png",
  "UNIT2_3/축하원숭이.png",
];
export const nextIndexes2_3 = Array.from(
  { length: descriptionArr2_3.length - 1 },
  (_, i) => i + 1,
);
export const imageIndexes2_3 = Array.from(
  { length: descriptionArr2_3.length - 1 },
  (_, i) => i + 1,
);
export const titles2_3 = Array.from(
  { length: descriptionArr2_3.length },
  () => "근거있는 투자, 기업분석이란 무엇일까요?",
);

// UNIT 3_0
export const descriptionArr3_0: DescriptionItem[] = [
  {
    "재무제표란 무엇인지 아시나요?": `재무제표는 회사의 건강 상태를 보여주는 증명서 같은 것입니다!
      재무상태표, 손익계산서, 자본변동표, 현금흐름표, 주석 5가지로 이루어져 있습니다. 
      하나씩 자세히 살펴볼까요?`,
  },
  {
    "재무제표 : 1. 재무상태표": `재무상태표는 회사의 자산, 부채, 자본을 한눈에 보여주는 표에요. 회사가 무엇을 가지고 있고, 얼마의 빚을 졌으며, 주인의 몫이 얼마인지 알 수 있어요.
예시로 치킨집이 가게(자산)와 대출(부채)을 가지고 있다면, 재무상태표는 이 둘을 비교해서 순수하게 주인의 몫(자본)이 얼마인지 보여줘요.`,
  },
  {
    "재무제표 : 2. 손익계산서": `손익계산서는 회사의 수익과 비용을 기록해서 최종적으로 얼마나 이익을 냈는지 보여주는 표에요.
예시로 치킨집이 한 달 동안 치킨을 팔아서 벌어들인 돈(수익)과 재료비, 월세, 인건비 등 지출한 돈(비용)을 기록해요. 최종적으로 남은 돈이 이익이죠.`,
  },
  {
    "재무제표 : 3. 자본변동표": `자본변동표는 회사의 자본이 어떻게 변동되었는지를 보여주는 표에요.
예시로 치킨집 주인이 매달 저금통에 얼마를 더 넣었는지, 빼갔는지를 기록해요. 이 표를 보면 자본이 어떻게 변했는지 알 수 있어요.`,
  },
  {
    "재무제표 : 4. 현금흐름표": `현금흐름표는 회사의 현금이 어떻게 흘러들어오고 나갔는지 보여주는 표에요.
예시로 치킨집이 한 달 동안 현금을 얼마나 벌었고, 어디에 썼는지 기록해요. 현금이 얼마나 잘 돌고 있는지 알 수 있어요.`,
  },
  {
    "재무제표 : 5. 주석": `주석은 재무제표에 대한 추가 설명이나 세부 정보를 제공해요. 재무제표를 이해하는 데 도움을 줘요.
예시로 치킨집 재무제표에 "이번 달 재료비가 비싼 이유는 특별한 행사 때문"이라는 설명을 덧붙이는 거에요.`,
  },
  {
    "빚도 자산이라는 것을 아시나요?": `재미있는 사실! 빚도 자산이 될 수 있습니다.
      "자산 = 부채 + 자본"
      즉, 본인이 가진 모든 것(자산)은 본인이 빌린 돈(부채)과 본인의 실제 돈(자본)을 합친 것입니다.`,
  },
  {
    "빚도 자산이라는 것을 아시나요? 예시": `왜냐하면 자산이 어떻게 구성되어 있는지 이해하기 위해서는 부채도 포함해서 봐야 해요.
예시로 치킨집이 대출을 받아서 새로운 주방 기계를 샀다면, 그 주방 기계는 자산이지만, 그 기계를 사기 위해 진 빚도 자산의 일부로 고려해야 해요.`,
  },
  {
    "손익거래와 비손익거래 구분": `손익거래와 비손익거래를 구분해봅시다.
"자산과 부채의 변화는 재무상태표"에, "손익은 손익계산서"에 기록됩니다.`,
  },
  {
    "손익거래와 비손익거래 구분: 1. 손익거래": `1. 손익거래: 수익과 비용을 발생시키는 거래에요.
예 시: 치킨을 팔아서 돈을 버는 것(수익), 재료비를 지출하는 것(비용).`,
  },
  {
    "손익거래와 비손익거래 구분: 2. 비손익거래": `2. 비손익거래: 자산이나 부채의 변동을 일으키는 거래로, 수익과 비용에 직접적인 영향을 주지 않아요.
예시: 은행에서 대출을 받는 것(부채 증가), 새로운 주방 기계를 사는 것(자산 증가).`,
  },
  {
    "이익은 수익에서 비용을 뺀 것": `이익 = 수익 - 비용
      쉽게 말하면, 수익은 번 돈이고, 이익은 그 돈에서 비용을 뺀 나머지 돈입니다.`,
  },
];

export const nextIndexes3_0 = [5, 6, 7, 8, 9, 10, 11];
export const titles3_0 = [
  "재무제표의 구성",
  "빚도 자산이라는 것을 아시나요?",
  "빚도 자산이라는 것을 아시나요? 예시",
  "손익거래와 비손익거래 구분",
  "손익거래와 비손익거래 구분: 손익거래",
  "손익거래와 비손익거래 구분: 비손익거래",
  "이익은 수익에서 비용을 뺀 것",
];
export const imageIndexes3_0 = [1, 2, 3, 4, 5, 6, 8];
export const images3_0 = [
  "UNIT3_0/3-0-0_재무제표구성.png",
  "UNIT3_0/3-0-1_재무상태표.png",
  "UNIT3_0/3-0-2_손익계산서.png",
  "UNIT3_0/3-0-3_자본변동표.png",
  "UNIT3_0/3-0-4_현금흐름표.png",
  "UNIT3_0/3-0-5_주석.png",
  "UNIT3_0/3-0-6_회계항등식.png",
  "UNIT3_0/3-0-7_손익거래와비손익거래.png",
  "UNIT3_0/3-0-8_이익.png",
];
// UNIT 3-1
export const descriptionArr3_1: DescriptionItem[] = [
  {
    "손익계산 단계": `손익계산서를 쉽게 이해하려면 이렇게 단계별로 생각해보세요:

1. 매출총이익 = 매출(영업수익) - 매출원가
2. 영업이익 = 매출총이익 - 판관비
3. 법인세차감전이익(세전이익) = 영업이익 + 영업외수익 - 영업외비용
4. 당기순이익 = 법인세차감전이익 - 법인세비용

갑자기 수식을 보니 어렵죠? 하나씩 자세히 살펴볼께요!`,
  },
  {
    "삼성전자 재무제표로 손익계산을 해봐요!": `
    삼성전자 2023년 사업보고서의 연결재무제표를 예시로 함께 살펴볼께요! 
지금은 어려워 보이지만, 공부하고 나면 알기 쉬워질 거에요!🥳`,
  },
  {
    "1. 매출총이익": `매출총이익: 매출액에서 매출원가를 뺀 금액이에요.
표현식: 매출총이익 = 매출액 - 매출원가
예시: 치킨집이 치킨을 팔아서 100만 원을 벌었고, 재료비로 40만 원을 썼다면, 매출총이익은 100만 원 - 40만 원 = 60만 원이에요.`,
  },
  {
    "1. 매출총이익 : 삼성전자": `삼성전자의 재무제표를 볼까요? 
2023년 삼성전자의 매출총이익은 얼마인지 보이시나요?
백만원 단위를 조로 환산하면 78.5조입니다🫨`,
  },
  {
    "2. 영업이익": `영업이익: 매출총이익에서 판매비와 관리비(판관비)를 뺀 금액이에요.
표현식: 영업이익 = 매출총이익 - 판관비
예시: 치킨집의 매출총이익이 60만 원이고, 판관비가 20만 원이라면, 영업이익은 60만 원 - 20만 원 = 40만 원이에요.
  다른 예로, 현대자동차가 1조 원을 벌었는데 그 중 대부분은 자동차를 팔아서가 아니라 비트코인으로 번 것이라면 영업이익은 줄어들겠죠.`,
  },
  {
    "2. 영업이익 : 삼성전자": `2023년 삼성전자의 영업이익도 확인해볼께요!
백만원 단위를 조로 환산하면 6.5조네요😳
판관비가 참 많이 발생했죠?`,
  },
  {
    "판관비란 무엇일까요?": `판관비는 판매비와 관리비를 합친 비용이에요. 
즉, 영업활동을 위해 지출된 모든 비용을 말해요.`,
  },
  {
    "인건비 (in 판관비)": `생산라인에서 작업하는 김 반장 월급, 영업팀 김 과장 월급, 회계팀 김 차장 월급 등 여러 부서에서 인건비가 발생합니다.
생산현장에서 발생한 인건비: 제품을 만드는 데 직접 투입된 비용이기 때문에 제조원가에 포함됩니다.
예시: 김 반장이 받은 연봉 5000만 원은 재고자산 장부가격에 포함됩니다. 재고자산이 팔리면 제조원가가 매출원가로 전환됩니다. 그래서 김 반장이 받은 인건비 일부는 매출원가가 됩니다. 팔리지 않아 재고자산 상태로 남아있는 제품 속에도 당연히 생산현장의 인건비가 일부 들어있습니다.
영업팀이나 회계팀 인건비: 제품을 생산하는 데 직접 투입된 비용이 아니기 때문에 판관비로 들어갑니다.
예시: 김 과장(영업팀)과 김 차장(회계팀)의 월급은 판관비에 포함됩니다.`,
  },
  {
    "감가상각비 (in 판관비)": `감가상각비도 생각해볼까요? 
감가상각비도 회사 비용에 중요한 역할을 합니다.
먼저, 공장에서 제품을 만드는 데 쓰이는 기계설비의 감가상각비는 제조원가에 포함됩니다. 공장 인건비처럼 재고자산이었다가 제품이 팔리면 매출원가로 이동합니다. 예를 들어, 공장에서 사용하는 기계의 감가상각비는 재고자산에 포함됩니다.`,
  },
  {
    "감가상각비 (in 판관비)": `회사의 통근버스를 예로 들어볼까요?

"A"라는 노란색 버스는 화성에 있는 공장 생산직 직원의 출퇴근을 돕습니다. 이 버스의 감가상각비는 제조원가에 포함되어 재고자산에 들어갑니다. 로기의 감가상각비는 공장 직원들을 태우기 때문에 제조원가에 포함됩니다.
반면, "B"라는 초록색 버스는 판교 본사 직원의 출퇴근을 돕습니다. 이 버스의 감가상각비는 판관비로 들어갑니다. 타요의 감가상각비는 본사 직원들을 태우기 때문에 판관비에 포함됩니다.

이렇게 감가상각비도 상황에 따라 제조원가나 판관비로 처리됩니다.`,
  },
  {
    "3. 법인세차감전이익(세전이익)": `법인세차감전이익(세전이익): 영업이익에서 영업외수익과 영업외비용을 더하고 뺀 금액이에요.

표현식: 세전이익 = 영업이익 + 영업외수익 - 영업외비용
예시: 치킨집의 영업이익이 40만 원이고, 이자수익이 5만 원, 이자비용이 3만 원이라면, 세전이익은 40만 원 + 5만 원 - 3만 원 = 42만 원이에요.`,
  },
  {
    "3. 법인세차감전이익(세전이익) : 삼성전자": `2023년 삼성전자의 세전이익도 확인해볼께요!
백만원 단위를 조로 환산했더니 11조네요🫢
그렇다면 "영업외수익"과 "영업외비용"은 무엇일까요?`,
  },
  {
    영업외수익: `영업외수익은 본업 외의 활동에서 생긴 수익을 말합니다. 이를테면, 회사가 가지고 있는 건물을 빌려주고 받는 임대료나, 투자해둔 주식에서 받은 배당금 등이 이에 해당하죠.

예시:
삼성전자가 새로운 스마트폰을 판매하는 것은 본업 수익입니다. 그런데 만약 삼성전자가 회사 건물의 일부를 다른 회사에 빌려주고 임대료를 받는다면, 이 임대료는 영업외수익이 됩니다. 또, 보유한 주식에서 배당금을 받는 것도 영업외수익에 포함됩니다.`,
  },
  {
    영업외비용: `반면, 영업외비용은 본업 외의 활동에서 발생한 비용입니다. 이는 회사가 돈을 빌렸을 때 갚아야 하는 이자비용이나, 환율 변동으로 인한 손실 등이 포함됩니다.

예시:
만약 삼성전자가 새로운 공장을 짓기 위해 은행에서 돈을 빌렸다고 가정해 봅시다. 이때 매달 내야 하는 이자가 영업외비용이 됩니다. 또, 외국에 수출하면서 환율이 갑자기 불리하게 변하면 발생하는 손실도 영업외비용이죠.`,
  },
  {
    "4. 당기순이익": `당기순이익: 법인세를 차감한 후 최종적으로 남은 이익이에요.이 돈은 주주의 몫입니다!

표현식: 당기순이익 = 세전이익 - 법인세
예시: 치킨집의 세전이익이 42만 원이고, 법인세가 10만 원이라면, 당기순이익은 42만 원 - 10만 원 = 32만 원이에요.
`,
  },
  {
    "4. 당기순이익 : 삼성전자": `2023년 삼성전자의 당기순이익은!!! 과연!!!
백만원 단위를 조로 환산하니 당기에 벌어들인 순수익은 15.4조입니다.👍
이제 다른 회사의 재무제표를 보더라도 계산해볼 수 있겠죠?🙌`,
  },
];

export const nextIndexes3_1 = [1, 3, 5, 6, 7, 9, 11, 12, 13];
export const titles3_1 = [
  "손익 계산 단계",
  "손익 계산 1단계 : 매출총이익",
  "손익 계산 2단계 : 영업이익",
  "판관비",
  "인건비 (in 판관비)",
  "감가상각비 (in 판관비)",
  "손익 계산 3단계 : 세전이익",
  "영업외수익",
  "영업외비용",
  "손익 계산 4단계 : 당기순이익",
];

export const imageIndexes3_1 = Array.from(
  { length: descriptionArr3_1.length - 1 },
  (_, i) => i + 1,
);
export const images3_1 = [
  "UNIT3_1/3-1-0_손익계산단계.png",
  "UNIT3_1/삼성전자.png",
  "UNIT3_1/1_매출총이익정의.png",
  "UNIT3_1/1_매출총이익.png",
  "UNIT3_1/2_영업이익정의.png",
  "UNIT3_1/2_영업이익.png",
  "UNIT3_1/판관비.png",
  "UNIT3_1/인건비분류.png",
  "UNIT3_1/감가상각비.png",
  "UNIT3_1/감가상각비분류.png",
  "UNIT3_1/3_세전이익정의.png",
  "UNIT3_1/3_세전이익.png",
  "UNIT3_1/영업외수익.png",
  "UNIT3_1/영업외비용.png",
  "UNIT3_1/4_당기순이익정의.png",
  "UNIT3_1/4_당기순이익.png",
];

// UNIT 3-2
export const descriptionArr3_2: DescriptionItem[] = [
  {
    "재무제표 분석 프로세스를 단계별로 살펴볼까요?": `1단계: 손익계산서 → 재무상태표 → 현금흐름표 순으로 간략 분석 ➭ 기업에 대한 감 잡기
2단계: 손익계산서를 당기순이익 → 영업이익 → 매출액 순으로 분석 ➭ 수익성, 성장성 평가
3단계: 재무상태표를 자본 → 자산 → 부채 순으로 분석 ➭ 안정성 평가
4단계: 손익계산서와 재무상태표 크로스 분석 ➭ 활동성 평가`,
  },
  {
    "1단계: 기업에 대한 감 잡기": `1단계: 손익계산서 → 재무상태표 → 현금흐름표 순으로 간략 분석 ➭ 기업에 대한 감 잡기`,
  },
  {
    "2단계: 손익계산서를 보며 수익성, 성장성 평가": `2단계: 손익계산서를 당기순이익 → 영업이익 → 매출액 순으로 분석 ➭ 수익성, 성장성 평가`,
  },
  {
    "손익계산서의 당기순이익이란": `당기순이익 : 회사가 1년 동안 벌어들인 모든 거래의 결과가 당기순이익입니다. 쉽게 말해, 한 해 동안 회사가 진짜로 번 돈이죠. 재무제표를 만드는 사람 입장에서는 결산을 마무리해야 보이는 마지막 과정이지만, 우리같이 재무제표를 읽는 사람들은 결론부터 보는 게 효율적이에요. 예를 들어, 드라마 마지막 회부터 보는 느낌이랄까요?`,
  },
  {
    "손익계산서의 영업이익이란": `영업이익 : 회사의 본질적인 능력을 파악하는 단계입니다. 당기순이익에는 우연한 행운이 반영될 수 있어요. 예를 들어, 현대자동차가 비트코인으로 9999억 벌고 차는 1억만 판 상황을 생각해보세요. 영업이익은 회사가 본업으로 벌어들인 돈이기 때문에 이런 운빨이 개입될 여지가 적습니다. 비덴트 사례처럼 지분법이익으로 당기순이익이 크게 증가할 수 있지만, 영업이익은 본질적인 실력을 보여줘요. 1회성인지 아닌지 판단하기 위해 중요합니다.`,
  },
  {
    "손익계산서의 매출액이란": `매출액 : 회사의 현재 위치를 가늠할 수 있는 척도로, 동종 업계에서 회사의 위치를 파악할 수 있으며, 시장점유율과 국가 경제에서의 위상을 알아볼 수 있어요. 예를 들어, 치킨집을 운영한다고 가정해보세요. 매출액은 몇 마리나 팔았는지를 보여주니까, 우리 동네에서 내가 어느 정도 인기인지 알 수 있는거죠`,
  },
  {
    "번외) ": `기업의 성장성이 가장 중요한 투자자라면, 손익계산서에서 매출액부터 봐야 해요!

벤처 캐피털이 손익계산서를 보는 순서는 회계사와 정반대입니다.

사업 초기 단계에 있는 벤처 기업은 대부분 당기순이익이나 영업이익을 내지 못하기 때문에, 실적보다 경영자의 능력이나 비즈니스 모델과 비전을 믿고 투자합니다. 그래서 매출액을 가장 눈여겨봐요. 예를 들어, 신생 치킨집이 엄청난 매출을 올리고 있다면, 맛도 좋고 경영도 잘한다는 신호일 수 있죠.`,
  },
  {
    "1) 손익 계산서는 유량 데이터": `손익계산서는 흐름을 나타내는 유량 데이터입니다.
손익계산서를 통해 얻을 수 있는 정보: 수익성과 성장성을 확인할 수 있습니다.
- 수익성: 기업이 얼마나 돈을 버는가? 예를 들어, 치킨집이 한 달에 얼마를 벌었는지 보는 거죠.
- 성장성: 기업의 미래 수익성은 어떠한가? 치킨집이 앞으로도 계속 잘 팔릴 것 같은지를 보는 거예요`,
  },
  {
    "2) 손익 계산서를 보는 3가지 방법": `손익계산서를 보는 3가지 방법
1. 과거 손익계산서와 비교: 작년에 비해 올해 얼2마나 잘했는지 보는 거예요.
2. 동종 회사 손익계산서와 비교: 내 치킨집과 옆집 치킨집을 비교해보는 거죠.
3. 손익계산서 분석 툴 활용: 다양한 툴을 사용해서 좀 더 쉽게 분석할 수 있어요. 예를 들어, 치킨집 매출 분석 앱 같은 거요.`,
  },
];

export const nextIndexes3_2 = Array.from(
  { length: descriptionArr3_2.length - 1 },
  (_, i) => i,
);
export const titles3_2 = [
  "재무제표 분석 프로세스",
  "재무제표 분석 1단계",
  "재무제표 분석 2단계",
  "손익계산서의 당기순이익이란",
  "손익계산서의 영업이익이란",
  "손익계산서의 매출액이란",
  "번외)",
  "1) 손익 계산서는 유량 데이터",
  "2) 손익 계산서를 보는 3가지 방법",
];

export const imageIndexes3_2 = Array.from(
  { length: descriptionArr3_2.length - 1 },
  (_, i) => i + 1,
);
export const images3_2 = [
  "UNIT3_2/3-2-1_재무제표분석프로세스.png",
  "UNIT3_2/3-2-2_재무제표보는순서.png",
  "UNIT3_2/3-2-3_손익계산서보는순서.png",
  "UNIT3_2/당기순이익.png",
  "UNIT3_2/영업이익.png",
  "UNIT3_2/매출액.png",
  "UNIT3_2/3-2-3_손익계산서보는순서.png",
  "UNIT3_2/재무비율지표.png",
  "UNIT3_2/손익계산서보는법.png",
];

// UNIT 2-7
export const descriptionArr2_7: DescriptionItem[] = [
  {
    "손익계산서를 통해 얻을 수 있는 정보": `손익계산서를 통해 얻을 수 있는 정보: 수익성과 성장성을 확인할 수 있습니다.\n- 수익성: 기업이 얼마나 돈을 버는가? 예를 들어, 치킨집이 한 달에 얼마를 벌었는지 보는 거죠.\n- 성장성: 기업의 미래 수익성은 어떠한가? 치킨집이 앞으로도 계속 잘 팔릴 것 같은지를 보는 거예요`,
  },
  {
    "1) 수익성을 분석하는 툴": `수익성을 분석하는 툴\n\n1. 매출총이익률\n2. 매출액영업이익률\n3. 매출액순이익률\n4. ROA(총자산이익률)\n5. ROE(자기자본이익률)`,
  },
  {
    "1-1) 수익성을 분석하는 툴: 매출총이익률": `기업의 매출액에서 매출 원가를 차감한 금액(매출총이익)을 매출액으로 나눈 금액 \n"정의: 매출총이익률은 회사가 제품을 팔아서 벌어들인 돈 중에서 원가를 뺀 금액의 비율을 말해요. 이게 높으면 회사가 잘 팔고 있다는 뜻이죠.\n표현식: 매출총이익률 = (매출총이익 / 매출액) × 100\n예시: 만약 치킨집이 100만 원어치 치킨을 팔았는데 원가가 60만 원이라면, 매출총이익률은 (40만 원 / 100만 원) × 100 = 40%예요. 즉, 팔 때마다 40% 이익을 남긴다는 뜻이죠!`,
  },
  { 매출총이익: `매출액 - 매출원가 = 매출총이익` },
  {
    "1-2) 수익성을 분석하는 툴: 매출액영업이익률": `정의: 매출액영업이익률은 회사의 매출에서 영업비용을 뺀 후 남은 돈의 비율을 말해요. 이 비율이 높으면 본업에서 돈을 잘 벌고 있다는 뜻이에요.\n표현식: 매출액영업이익률 = (영업이익 / 매출액) × 100\n예시: 치킨집이 100만 원어치 치킨을 팔고 영업비용으로 70만 원을 썼다면, 영업이익은 30만 원이고 매출액영업이익률은 (30만 원 / 100만 원) × 100 = 30%예요. 즉, 치킨 팔아서 30% 남는다는 거죠!`,
  },
  { "1-2) 수익성을 분석하는 툴: 매출액영업이익률 예시": `` },
  {
    "1-3) 수익성을 분석하는 툴: 매출액순이익률": `정의: 매출액순이익률은 매출에서 모든 비용을 뺀 후 남은 순이익의 비율을 말해요. 결국 회사가 전체적으로 얼마나 이익을 내는지 보여줘요.\n표현식: 매출액순이익률 = (순이익 / 매출액) × 100\n예시: 치킨집이 100만 원어치 치킨을 팔고 모든 비용을 뺀 후 20만 원이 남았다면, 매출액순이익률은 (20만 원 / 100만 원) × 100 = 20%예요. 그러니까 최종적으로 20% 남는 거죠!`,
  },
  { "1-3) 수익성을 분석하는 툴: 매출액순이익률 예시": `` },
  {
    "1-4) 수익성을 분석하는 툴: ROA(총자산이익률)": `정의: ROA는 회사의 총자산 대비 얼마나 이익을 내는지를 나타내요. 회사가 자산을 얼마나 효율적으로 사용하고 있는지를 보여줍니다.\n표현식: ROA = (순이익 / 총자산) × 100\n예시: 치킨집이 총자산 200만 원을 가지고 20만 원의 이익을 냈다면, ROA는 (20만 원 / 200만 원) × 100 = 10%예요. 자산으로 10%의 이익을 만든 거죠!`,
  },
  { "1-4) 수익성을 분석하는 툴: ROA(총자산이익률) 예시": `` },
  {
    "1-5) 수익성을 분석하는 툴: ROE(자기자본이익률)": `정의: ROE는 주주가 투자한 자기자본 대비 얼마나 이익을 내는지를 나타내요. 주주 입장에서 얼마나 이익을 가져다 주는지 보는 지표예요.\n표현식: ROE = (순이익 / 자기자본) × 100\n예시: 치킨집이 자기자본 100만 원을 가지고 20만 원의 이익을 냈다면, ROE는 (20만 원 / 100만 원) × 100 = 20%예요. 주주 돈으로 20%의 이익을 만든 거죠!`,
  },
  { "1-5) 수익성을 분석하는 툴: ROE(자기자본이익률) 예시": `` },
  {
    "2) 성장성을 분석하는 툴": `성장성을 분석하는 툴\n\n1. 매출증가율\n2. 영업이익 증가율\n3. 순이익 증가율`,
  },
  {
    "2-1) 성장석을 분석하는 툴: 매출 증가율": `정의: 매출 증가율은 매출이 얼마나 늘어났는지를 보여줘요. 회사가 얼마나 빠르게 성장하고 있는지 알 수 있죠.\n표현식: 매출 증가율 = [(현재 매출액 - 이전 매출액) / 이전 매출액] × 100\n예시: 작년에 치킨을 80만 원어치 팔았는데 올해는 100만 원어치 팔았다면, 매출 증가율은 [(100만 원 - 80만 원) / 80만 원] × 100 = 25%예요. 매출이 25% 늘어난 거죠!`,
  },
  {
    "2-2) 성장석을 분석하는 툴: 영업이익 증가율": `정의: 영업이익 증가율은 영업이익이 얼마나 늘어났는지를 보여줘요. 본업에서 얼마나 잘하고 있는지 알 수 있습니다.\n표현식: 영업이익 증가율 = [(현재 영업이익 - 이전 영업이익) / 이전 영업이익] × 100\n예시: 작년에 영업이익이 20만 원이었는데 올해는 30만 원이라면, 영업이익 증가율은 [(30만 원 - 20만 원) / 20만 원] × 100 = 50%예요. 본업에서 50% 더 잘한 거죠!`,
  },
  { "2-2) 성장석을 분석하는 툴: 영업이익 증가율 예시": `` },
  {
    "2-3) 성장석을 분석하는 툴: 순이익 증가율": `정의: 순이익 증가율은 순이익이 얼마나 늘어났는지를 보여줘요. 회사 전체적으로 얼마나 더 잘하고 있는지 알 수 있죠.\n표현식: 순이익 증가율 = [(현재 순이익 - 이전 순이익) / 이전 순이익] × 100\n예시: 작년에 순이익이 10만 원이었는데 올해는 20만 원이라면, 순이익 증가율은 [(20만 원 - 10만 원) / 10만 원] × 100 = 100%예요. 전체적으로 2배 더 잘한 거죠!`,
  },
];
export const nextIndexes2_7 = Array.from(
  { length: descriptionArr2_7.length },
  (_, i) => i - 1,
);
export const imageIndexes2_7 = Array.from(
  { length: descriptionArr2_7.length },
  (_, i) => i,
);
export const titles2_7 = [
  "손익계산서를 통해 얻을 수 있는 정보",
  "1) 수익성을 분석하는 툴",
  "1-1) 수익성을 분석하는 툴: 매출총이익률",
  "1-2) 수익성을 분석하는 툴: 매출액영업이익률",
  "1-3) 수익성을 분석하는 툴: 매출액순이익률",
  "1-4) 수익성을 분석하는 툴: ROA(총자산이익률)",
  "1-5) 수익성을 분석하는 툴: ROE(자기자본이익률)",
  "2) 성장성을 분석하는 툴",
  "2-1) 성장석을 분석하는 툴: 매출 증가율",
  "2-2) 성장석을 분석하는 툴: 영업이익 증가율",
  "2-3) 성장석을 분석하는 툴: 순이익 증가율",
];
export const images2_7 = [
  "UNIT2_6/재무비율지표",
  "UNIT2_7/2-7-1_매출총이익률.png",
  "UNIT2_7/2-7-2_매출총이익.png",
  "UNIT2_7/2-7-3_매출액영업이익률.png",
  "UNIT2_7/2-7-4_매출액영업이익률예시.png",
  "UNIT2_7/2-7-5_매출액순이익률.png",
  "UNIT2_7/2-7-6_매출액순이익률예시.png",
  "UNIT2_7/2-7-7_매출액영업이익률_매출액세전순이익률예시.png",
  "UNIT2_7/2-7-8_ROA.png",
  "UNIT2_7/2-7-9_ROA예시.png",
  "UNIT2_7/2-7-10_ROE.png",
  "UNIT2_7/2-7-11_ROE예시.png",
  "UNIT2_7/2-7-12_매출증가율.png",
  "UNIT2_7/2-7-13_영업이익증가율.png",
  "UNIT2_7/2-7-14_영업이익증가율예시.png",
  "UNIT2_7/2-7-15_순이익증가율.png",
];

// UNIT 2-8
export const descriptionArr2_8: DescriptionItem[] = [
  {
    "3단계: 재무상태표를 보며 안정성 평가": `3단계: 재무상태표를 자본 → 자산 → 부채 순으로 분석 ➭ 안정성 평가`,
  },
  { "1) 재무상태표를 읽는 순서": `1) 자본 → 자산 → 부채` },
  {
    "2) 자본, 자산, 부채에서 꼭 봐야할 것": `자본, 자산, 부채에서 꼭 봐야 할 것
1) 자본 : 이익잉여금을 중점적으로 살필것
2) 자산 : 유동자산과 비유동 자산 구성 내용을 살펴 업종의 특징 파악 
3) 부채 : 유동부채와 비유동부채 / 이자부부채와 무이자부부채를 구분해서 파악
유동과 비유동 부채로 구분해서 파악 → 유동부채가 많을수록 회사가 짊어진 리스크가 더 큼
이자부부채와 무이자부부채 구분해서 파악 → 부채 가운데 무이자부부채가 많으면 현금 흐름에 유리`,
  },
  {
    "3) 자본 : 이익잉여금을 중점적으로 살필것": `자본:\n\n이익잉여금을 중점적으로 살펴보세요. 이익잉여금은 회사가 벌어들인 돈을 쌓아놓은 거예요. 치킨집으로 비유하면, 매달 남은 돈을 모아둔 저금통 같은 거죠.`,
  },
  {
    "4) 자산 : 유동자산과 비유동 자산 구성 내용을 살펴 업종의 특징 파악 ": `자산:\n\n유동자산과 비유동자산의 구성 내용을 살펴봐야 업종의 특징을 파악할 수 있어요.\n유동자산이 많다면, 회사의 현금 가용 상태(유동성)가 양호하다는 뜻이에요.`,
  },
  {
    "4-1) 유동자산과 비유동자산": `유동자산: 1년 이내 현금화가 가능한 자산이에요. 예를 들어, 현금, 단기 금융 상품, 매출채권, 재고자산 등이 있어요. 유동자산에서 재고자산을 뺀 나머지를 당좌자산이라고 해요.\n비유동자산: 장기간 회사가 사용하거나 보유하는 자산이에요. 예를 들어, 유형 자산(공장, 기계), 무형 자산(특허, 브랜드), 투자부동산, 투자 지분 등이 있어요.\n예시: 농심의 재무상태표에는 현금 및 현금성 자산이 제일 먼저 표시되고, 그 다음에 단기 예금이나 MMF(머니마켓펀드) 같은 단기 금융 상품, 그리고 30일~60일 내 회수되는 매출채권 순으로 기록됩니다.`,
  },
  {
    "4-2) 유동자산과 비유동자산의 예시 ": `예시: LG화학은 종합 석유 화학업체로 대규모 설비 장치가 필요해요. 그래서 기계장치 플랜트 등의 유형자산이 많아요.\n예시: 호텔신라는 유통업과 서비스업을 병행하고 있어요. 면세점용 상품 등의 재고자산을 많이 보유하고 있어요.`,
  },
  {
    "5) 부채": `유동부채와 비유동부채로 구분해서 파악하세요. 유동부채가 많을수록 회사가 짊어진 리스크가 더 커요.\n-유동부채: 1년 이내 갚아야 하는 부채에요.\n-비유동부채: 1년 이후에 갚아도 되는 부채에요.\n이자부부채와 무이자부부채로도 구분해서 파악하세요.\n-이자부부채: 자금을 빌릴 때 이자를 지급해야 하는 부채에요. 예를 들어, 은행 대출금, 사채, 전환사채, 신주인수권부사채 등이 있어요.\n-무이자부부채: 이자를 지급하지 않는 부채에요. 예를 들어, 매입채무(외상으로 산 원재료비), 선수금(거래처로부터 미리 받은 돈) 등이 있어요. 무이자부부채가 많으면 현금 흐름에 유리해요.`,
  },
  {
    "5-1) 자본잠식": `적자 계속 내는 회사 한눈에 파악하는 방법이에요. 회사가 오랫동안 적자를 내면 자본잠식이라는 상황에 맞닥뜨리게 돼요. 상장사의 경우 자본잠식률이 50% 이상이면 ‘관리종목’에 편입되고, 6개월 이내에 자본잠식을 해결하지 못하면 상장폐지 절차를 밟게 돼요.`,
  },
  {
    "자본잠식률 표현식)": `자본잠식률 계산 방법: 자본잠식률 = (자본금 - 자본총계) / 자본금 * 100%\n예를 들어, 자본금이 100만 원이고, 자본총계가 40만 원이라면, 자본잠식률은 (100만 원 - 40만 원) / 100만 원 * 100% = 60%예요. 즉, 자본잠식률이 50%를 넘어서 관리종목에 편입될 위험이 있는 상태죠.`,
  },
  {
    "부분자본잠식 예시)": `부분자본잠식: 회사가 지속적으로 적자를 내면 자본금의 일부가 잠식되는 상황을 말해요.\n예시: 치킨집이 몇 년 동안 적자를 보면서 자본금 100만 원 중 40만 원을 잃었다고 해요. 그러면 자본잠식률은 (100만 원 - 60만 원) / 100만 원 * 100% = 40%예요. 자본의 40%가 잠식된 거죠. 이런 상황을 부분자본잠식이라고 해요.`,
  },
  {
    "완전자본잠식 예시)": `완전자본잠식: 회사가 지속적으로 적자를 내서 자본금 전부가 잠식되고 자본총계가 마이너스가 되는 상황을 말해요.\n예시: 치킨집이 계속 적자를 내서 자본금 100만 원을 전부 잃고, 오히려 20만 원의 빚이 생겼다고 해요. 그러면 자본잠식률은 (100만 원 - (-20만 원)) / 100만 원 * 100% = 120%예요. 자본의 120%가 잠식된 거죠. 이런 상황을 완전자본잠식이라고 해요.`,
  },
  {
    "5-2) 유동과 비유동 항목의 구분": `유동자산과 비유동자산 구성내역을 살펴보면 회사의 업종 특징을 파악해 볼 수 있고, 어디에서 돈을 벌 수 있을지 예상할 수 있음\n\n예시: ‘중후장대’산업에 속하는 조선업, 철강, 석유화학 산업의 경우, 유형자산 금액이 클 거예요. 왜냐하면 큰 기계와 설비가 많이 필요하니까요. 반면에 바이오, IT 산업 등 소프트웨어 산업은 개발비 등의 무형자산 금액이 다른 산업에 비해 상대적으로 높을 거예요. 소프트웨어 개발 비용이 많이 들기 때문이죠.`,
  },
  {
    "5-2) 유동과 비유동 항목의 구분": `유동부채가 많을수록 회사가 단기에 자금이 많이 필요하리라는 것을 유추할 수 있어요. 따라서 유동부채가 많을수록 회사의 리스크는 좀 더 높다고 할 수 있죠.\n유동부채: 1년 이내 갚아야 하는 부채\n비유동부채: 1년 이후에 갚아도 되는 부채`,
  },
  {
    "5-3) 이자를 내는 부채와 안 내는 부채를 구분하기": `이자부부채: 자금을 빌려왔을 때 이자를 지급해야 하는 부채예요.\n예시: 은행으로부터의 차입금, 사채, 전환사채, 신주인수권부사채 등이 이에 해당해요. 여기서 말하는 사채는 고금리로 빌리는 불법적인 사채가 아니라, 기업이 증권시장에서 발행하는 회사채를 말해요.\n무이자부채: 이자를 지급하지 않는 부채예요.\n예시: 원재료를 사고 아직 돈을 지급하지 않은 매입채무, 거래처로부터 미리 돈을 받은 선수금 등이 이에 해당해요. 무이자부채를 보유하고 있으면 현금 흐름에 유리해요. 왜냐하면 이자를 내지 않아도 되니까, 돈을 좀 더 자유롭게 쓸 수 있죠.`,
  },
];
export const nextIndexes2_8 = Array.from(
  { length: descriptionArr2_8.length },
  (_, i) => i,
);
export const imageIndexes2_8 = Array.from(
  { length: descriptionArr2_8.length },
  (_, i) => i,
);
export const titles2_8 = [
  "재무제표 분석 3단계 - 재무상태표",
  "1) 재무상태표를 읽는 순서",
  "2) 자본, 자산, 부채에서 꼭 봐야할 것",
  "3) 자본 : 이익잉여금을 중점적으로 살필것",
  "4) 자산 : 유동자산과 비유동 자산 구성 내용을 살펴 업종의 특징 파악",
  "4-1) 유동자산과 비유동자산",
  "4-2) 유동자산과 비유동자산의 예시 ",
  "5) 부채",
  "5-1) 자본잠식",
  "자본잠식률 표현식)",
  "부분자본잠식 예시)",
  "완전자본잠식 예시)",
  "5-2) 유동과 비유동 항목의 구분",
  "5-2) 유동과 비유동 항목의 구분",
  "5-3) 이자를 내는 부채와 안 내는 부채를 구분하기",
];
export const images2_8 = [
  "UNIT2-8/2-8-1_재무상태표읽는순서",
  "UNIT2-8/2-8-2_부분자본잠식",
  "UNIT2-8/2-8-3_완전자본잠식",
  "UNIT2-8/2-8-4_포괄손익계산서",
];

// UNIT 2-9
export const descriptionArr2_9: DescriptionItem[] = [
  {
    "4단계: 손익계산서와 재무상태표 크로스 분석하며 활동성 평가": `손익계산서와 재무상태표 크로스 분석을 통해 활동성을 평가할 수 있습니다.`,
  },
  {
    "1)재무상태표를 통해 얻을 수 있는 정보": `재무상태표를 통해 얻을 수 있는 정보 2가지\n1. 안정성: 회사가 망하지 않고 버틸 힘이 있는가?\n정의: 안정성은 회사가 재정적으로 얼마나 튼튼한지를 보여줘요. 즉, 회사가 빚을 잘 갚을 수 있고, 갑작스러운 위기에도 견딜 수 있는지를 평가하는 거죠.\n예시: 치킨집이 빚을 얼마나 잘 갚을 수 있는지, 혹은 갑자기 매출이 줄어들어도 잘 버틸 수 있는지를 보는 거예요. 만약 치킨집이 현금도 많고 빚도 적다면, 이 치킨집은 안정성이 높은 거죠.\n\n2. 성장성: 기업의 미래 수익성은 어떠한가?\n정의: 성장성은 회사가 앞으로 얼마나 잘 성장할 수 있는지를 보여줘요. 즉, 회사가 미래에 얼마나 더 많은 돈을 벌 수 있을지를 평가하는 거예요.\n예시: 치킨집이 최근에 새로운 메뉴를 출시해서 손님이 늘어나고 있다면, 이 치킨집의 성장성은 높은 거죠. 미래에도 손님이 계속 늘어나서 더 많은 돈을 벌 가능성이 크다는 뜻이에요.`,
  },
  {
    "2) 안정성을 분석하는 툴": `안정성을 분석하는 툴\n\n1. 유동 비율\n2. 당좌 비율\n3. 부채 비율\n4. 차입금 의존도\n5. 선수금을 제외한 부채 비율\n6. 이자보상배율`,
  },
  {
    "2-1)안정성을 분석하는 툴: 유동 비율": `정의: 유동 비율은 회사가 당장 갚아야 할 빚을 얼마나 쉽게 갚을 수 있는지 보여줘요.\n표현식: 유동 비율 = (유동자산 / 유동부채) × 100\n예시: 치킨집이 당장 쓸 수 있는 돈(유동자산)이 200만 원이고, 당장 갚아야 할 빚(유동부채)이 100만 원이라면, 유동 비율은 (200만 원 / 100만 원) × 100 = 200%예요. 즉, 당장 갚아야 할 돈의 두 배를 가지고 있다는 뜻이에요!`,
  },
  {
    "2-2)안정성을 분석하는 툴: 당좌 비율": `정의: 당좌 비율은 유동자산에서 재고자산을 뺀 금액으로 당장 갚아야 할 빚을 얼마나 쉽게 갚을 수 있는지 보여줘요.\n표현식: 당좌 비율 = ((유동자산 - 재고자산) / 유동부채) × 100\n예시: 치킨집이 당장 쓸 수 있는 돈(유동자산)이 200만 원이고, 재고자산이 50만 원, 당장 갚아야 할 빚(유동부채)이 100만 원이라면, 당좌 비율은 ((200만 원 - 50만 원) / 100만 원) × 100 = 150%예요. 재고를 빼도 갚을 돈의 1.5배를 가지고 있는 거죠!`,
  },
  {
    "2-3)안정성을 분석하는 툴: 부채 비율": `정의: 부채 비율은 회사의 자본 대비 얼마나 많은 빚이 있는지를 보여줘요.\n표현식: 부채 비율 = (부채 / 자본) × 100\n예시: 치킨집이 부채 100만 원, 자본 200만 원을 가지고 있다면, 부채 비율은 (100만 원 / 200만 원) × 100 = 50%예요. 자본의 절반만큼 빚이 있다는 뜻이죠.`,
  },
  {
    "2-4)안정성을 분석하는 툴: 차입금의존도": `정의: 차입금의존도는 전체 자산 중에서 외부에서 빌려온 돈이 얼마나 되는지를 보여줘요.\n표현식: 차입금의존도 = (차입금 / 총자산) × 100\n예시: 치킨집의 총자산이 500만 원이고, 그 중 100만 원이 대출금이라면, 차입금의존도는 (100만 원 / 500만 원) × 100 = 20%예요. 전체 자산의 20%가 빌린 돈이라는 뜻이에요.`,
  },
  {
    "2-5)안정성을 분석하는 툴: 선수금을 제외한 부채 비율": `정의: 선수금을 제외한 부채 비율은 선불 받은 돈(선수금)을 제외하고 계산한 부채 비율이에요.\n표현식: 선수금을 제외한 부채 비율 = ((부채 - 선수금) / 자본) × 100\n예시: 치킨집이 부채 100만 원, 자본 200만 원, 선수금 20만 원을 가지고 있다면, 선수금을 제외한 부채 비율은 ((100만 원 - 20만 원) / 200만 원) × 100 = 40%예요. 선수금을 제외하면 부채 비율이 좀 더 낮아지죠.`,
  },
  {
    "2-6)안정성을 분석하는 툴: 이자보상배율": `정의: 이자보상배율은 회사가 이자를 얼마나 쉽게 갚을 수 있는지를 보여줘요.\n표현식: 이자보상배율 = 영업이익 / 이자비용\n예시: 치킨집이 영업이익 50만 원, 이자비용 10만 원을 가지고 있다면, 이자보상배율은 50만 원 / 10만 원 = 5배예요. 즉, 이자를 5번 갚을 수 있는 돈을 벌고 있다는 뜻이에요!`,
  },
  { "3) 성장성을 분석하는 툴": `총자산증가율` },
  {
    "3-1) 성장성을 분석하는 툴: 총자산증가율": `정의: 총자산증가율은 회사의 총자산이 얼마나 늘어났는지를 보여줘요.\n표현식: 총자산증가율 = [(현재 총자산 - 이전 총자산) / 이전 총자산] × 100\n예시: 작년에 치킨집의 총자산이 400만 원이었는데 올해는 500만 원이라면, 총자산증가율은 [(500만 원 - 400만 원) / 400만 원] × 100 = 25%예요. 자산이 25% 늘어난 거죠!`,
  },
];
export const nextIndexes2_9 = Array.from(
  { length: descriptionArr2_9.length },
  (_, i) => i,
);
export const imageIndexes2_9 = Array.from(
  { length: descriptionArr2_9.length },
  (_, i) => i,
);
export const titles2_9 = [
  "재무제표 분석 4단계",
  "1)재무상태표를 통해 얻을 수 있는 정보",
  "2) 안정성을 분석하는 툴",
  "2-1)안정성을 분석하는 툴: 유동 비율",
  "2-2)안정성을 분석하는 툴: 당좌 비율",
  "2-3)안정성을 분석하는 툴: 부채 비율",
  "2-4)안정성을 분석하는 툴: 차입금의존도",
  "2-5)안정성을 분석하는 툴: 선수금을 제외한 부채 비율",
  "2-6)안정성을 분석하는 툴: 이자보상배율",
  "3) 성장성을 분석하는 툴",
  "3-1) 성장성을 분석하는 툴: 총자산증가율",
];
export const images2_9 = [
  "UNIT2_6/2-6-1_재무제표분석프로세스.png",
  "UNIT2_6/재무비율지표",
  "UNIT2_9/2-9-5_유동비율.png",
  "UNIT2_9/2-9-7_당좌비율.png",
  "UNIT2_9/2-9-9_부채비율.png",
];

export const descriptionArr2_10: DescriptionItem[] = [
  {
    "4단계: 손익계산서와 재무상태표 크로스 분석하며 활동성 평가": `4단계: 손익계산서와 재무상태표 크로스 분석 ➭ 활동성 평가`,
  },
  {
    "1) 손익계산서와 재무상태표 크로스 분석으로 얻을 수 있는 정보: 활동성": `1. 손익계산서와 재무상태표 크로스 분석으로 얻을 수 있는 정보\n\n활동성: 회사가 얼마나 영업활동을 활발하게 수행하고 있는지를 보여줘요. 즉, 회사가 얼마나 효율적으로 자산을 사용해서 돈을 벌고 있는지를 알 수 있습니다.`,
  },
  {
    "2) 활동성을 분석하는 툴": `활동성을 분석하는 툴\n\n1. 매출채권회전율\n2. 재고자산회전율\n3. 매입채무회전율\n4. 영업순환주기\n5. 현금창출주기`,
  },
  {
    "2-1) 활동성을 분석하는 툴: 매출채권회전율": `정의: 매출채권회전율은 회사가 외상으로 판매한 상품이나 서비스를 얼마나 빨리 현금으로 회수하는지를 보여줘요.\n표현식: 매출채권회전율 = 매출액 / 평균 매출채권\n예시: 치킨집이 연간 매출액 1,000만 원이고, 평균 매출채권(외상으로 팔린 금액)이 200만 원이라면, 매출채권회전율은 1,000만 원 / 200만 원 = 5회예요. 즉, 외상으로 판 돈을 1년에 5번 회수하는 거죠!`,
  },
  {
    "2-2) 활동성을 분석하는 툴: 재고자산회전율": `정의: 재고자산회전율은 회사가 재고를 얼마나 빨리 판매하는지를 보여줘요.\n표현식: 재고자산회전율 = 매출원가 / 평균 재고자산\n예시: 치킨집의 연간 매출원가(치킨 재료비 등)가 600만 원이고, 평균 재고자산이 100만 원이라면, 재고자산회전율은 600만 원 / 100만 원 = 6회예요. 즉, 재고를 1년에 6번 판매한다는 뜻이죠!`,
  },
  {
    "2-3) 활동성을 분석하는 툴: 매입채무회전율": `정의: 매입채무회전율은 회사가 외상으로 산 재료비를 얼마나 빨리 갚는지를 보여줘요.\n표현식: 매입채무회전율 = 매출원가 / 평균 매입채무\n예시: 치킨집의 연간 매출원가가 600만 원이고, 평균 매입채무(외상으로 산 재료비)가 150만 원이라면, 매입채무회전율은 600만 원 / 150만 원 = 4회예요. 즉, 외상으로 산 재료비를 1년에 4번 갚는 거죠!`,
  },
  {
    "2-4) 활동성을 분석하는 툴: 영업순환주기": `정의: 영업순환주기는 회사가 재고를 구매해서 판매하고, 외상 매출금을 회수하는 데 걸리는 시간을 말해요.\n표현식: 영업순환주기 = 재고자산회전일수 + 매출채권회전일수\n예시: 치킨집이 재고를 60일 동안 보유하고, 외상 매출금을 회수하는 데 30일 걸린다면, 영업순환주기는 60일 + 30일 = 90일이에요. 즉, 재고를 사서 판매하고 돈을 회수하는 데 90일 걸리는 거죠!`,
  },
  {
    "2-5) 활동성을 분석하는 툴: 현금창출주기": `정의: 현금창출주기는 회사가 현금을 투자해서 다시 현금으로 회수하는 데 걸리는 시간을 말해요.\n표현식: 현금창출주기 = 영업순환주기 - 매입채무회전일수\n예시: 치킨집의 영업순환주기가 90일이고, 외상으로 산 재료비를 30일 후에 갚는다면, 현금창출주기는 90일 - 30일 = 60일이에요. 즉, 현금을 투자해서 다시 현금으로 회수하는 데 60일 걸리는 거죠!`,
  },
];

export const nextIndexes2_10 = Array.from(
  { length: descriptionArr2_10.length },
  (_, i) => i,
);
export const imageIndexes2_10 = Array.from(
  { length: descriptionArr2_10.length },
  (_, i) => i,
);

export const titles2_10 = [
  "재무제표 분석 4단계",
  "1) 손익계산서와 재무상태표 크로스 분석으로 얻을 수 있는 정보: 활동성",
  "2) 활동성을 분석하는 툴",
  "2-1) 활동성을 분석하는 툴: 매출채권회전율",
  "2-2) 활동성을 분석하는 툴: 재고자산회전율",
  "2-3) 활동성을 분석하는 툴: 매입채무회전율",
  "2-4) 활동성을 분석하는 툴: 영업순환주기",
  "2-5) 활동성을 분석하는 툴: 현금창출주기",
];

export const images2_10 = [
  "UNIT2_6/재무비율지표",
  "UNIT2_10/2-10-1_매출채권회전율.png",
  "UNIT2_10/2-10-2_재고자산회전율_매입채무회전율.png",
  "UNIT2_10/2-10-8_영업순환주기.png",
  "UNIT2_10/2-10-8_영업순환주기와현금창출주기.png",
];
