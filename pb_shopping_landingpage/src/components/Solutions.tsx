export default function Solutions() {
  const solutions = [
    {
      badge: '광고비 낭비 없이 커머스 딜 순위 상승',
      title: '매출 보장형 구조로\n딜 순위 부스팅',
      descriptionParts: [
        { text: '실구매 기반의 ', bold: false },
        { text: '광고 구조로 단기간에', bold: true },
        { text: '\n', bold: false },
        { text: '판매량 & 딜 순위 상승을', bold: true },
        { text: ' 실현합니다.', bold: false }
      ],
      image: '/images/solution-1.png'
    },
    {
      badge: '150만+ 푸시 및 외부 채널 배너 광고 지원',
      title: 'SKT PASS의\n압도적인 트래픽 활용',
      descriptionParts: [
        { text: '가입자 1,400만 +, MAU 700만 +\n', bold: false },
        { text: '국내 최대 인증 플랫폼에 상품을 노출합니다.', bold: true },
        { text: '\n(2026 타 통신사 오픈 예정)', bold: false }
      ],
      image: '/images/solution-2.png'
    },
    {
      badge: '평균 4.9! 실구매로 쌓이는 진짜 사용자 리뷰',
      title: '고품질 리뷰 &\n전문 검수단 운영',
      descriptionParts: [
        { text: '사진/영상 리뷰 등 ', bold: false },
        { text: '고품질 리뷰를', bold: true },
        { text: '\n페이백 쇼핑_', bold: false },
        { text: '전문 검수단이 검토', bold: true },
        { text: '합니다.', bold: false }
      ],
      image: '/images/solution-3.png'
    }
  ];

  return (
    <section id="service-intro" className="bg-[#F8F8F8] py-12 md:py-20 lg:py-28">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-[360px]">
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px]">
          {/* 섹션 제목 - "페이백쇼핑"만 빨간색 */}
          <h2 className="text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-semibold tracking-[-0.025em] text-center leading-[1.4em]">
            <span className="text-[#FF3A4A]">페이백쇼핑</span>
            <span className="text-[#222222]">이<br />해결해드릴게요!</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl lg:rounded-3xl overflow-hidden"
              >
                <div className="relative h-[180px] md:h-[200px] lg:h-[220px] overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="absolute left-1/2 top-[40px] md:top-[50px] lg:top-[60px] -translate-x-1/2 w-[120px] md:w-[140px] lg:w-[160px] h-[120px] md:h-[140px] lg:h-[160px] object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6 p-[0_20px_24px_20px] md:p-[0_24px_30px_24px] lg:p-[0_27px_36px_27px]">
                  <div className="px-3 md:px-4 lg:px-[17px] py-1.5 md:py-2 bg-[#FFE9E9] rounded-[20px] border border-[#FFB1B8]">
                    <span className="text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#FF3A4A] tracking-[-0.025em] text-center">
                      {solution.badge}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4 text-center">
                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-semibold text-[#222222] tracking-[-0.03em] whitespace-pre-line leading-[1.4em]">
                      {solution.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal text-[#222222] tracking-[-0.025em] whitespace-pre-line leading-[1.5em]">
                      {solution.descriptionParts.map((part, idx) => (
                        part.bold ? (
                          <span key={idx} className="font-bold">{part.text}</span>
                        ) : (
                          <span key={idx}>{part.text}</span>
                        )
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

