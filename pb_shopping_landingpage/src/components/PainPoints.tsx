export default function PainPoints() {
  const painPoints = [
    {
      badge: 'Pain point 1',
      titleHighlight: '딜 순위',
      titleRest: ' 문제',
      description: '"광고비를 투자해도 딜이 상단에\n노출되지 않아 매출 증대가 어려워요."',
      iconSrc: '/images/pain-point-icon-1.svg',
      iconWidth: 77,
      iconHeight: 84
    },
    {
      badge: 'Pain point 2',
      titleHighlight: '홍보 채널',
      titleRest: ' 부족',
      description: '"자사몰, 입점몰, 검색광고만으로는\n신규 유입이 한계에 부딪혀요."',
      iconSrc: '/images/pain-point-icon-2.svg',
      iconWidth: 98,
      iconHeight: 84
    },
    {
      badge: 'Pain point 3',
      titleHighlight: '리뷰 퀄리티',
      titleRest: ' 고민',
      description: '"사진 없는 짧은 텍스트 리뷰,\n신뢰도 낮은 후기들이 전환을 방해해요."',
      iconSrc: '/images/pain-point-icon-3.svg',
      iconWidth: 89,
      iconHeight: 84
    }
  ];

  return (
    <section id="pain-points" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-[360px]">
        <div className="flex flex-col items-center gap-10 md:gap-12 lg:gap-[80px]">
          {/* 섹션 제목 */}
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-bold tracking-[-0.025em] text-center leading-[1.3em]">
            <span className="text-[#FF3A4A]">이런 고민,</span><br />
            <span className="text-[#222222]">아직도 하고 계신가요?</span>
          </h2>

          {/* Pain Points 카드들 - 3개 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-5 px-6 md:px-7 lg:px-8 py-8 md:py-10 lg:py-12 bg-white rounded-2xl md:rounded-3xl shadow-[2px_2px_20px_rgba(106,114,119,0.12)]"
              >
                {/* 배지 */}
                <div className="inline-flex items-center justify-center px-4 lg:px-[18px] py-1.5 lg:py-2 bg-[rgba(255,234,236,0.69)] rounded-full border border-[#FFB1B8]">
                  <span className="text-[14px] lg:text-[16px] font-semibold text-[#FF3A4A] tracking-[-0.025em] leading-[1.5em]">
                    {point.badge}
                  </span>
                </div>

                {/* 아이콘 */}
                <div className="w-[80px] h-[84px] md:w-[90px] md:h-[92px] lg:w-[100px] lg:h-[100px] flex items-center justify-center">
                  <img
                    src={point.iconSrc}
                    alt={`${point.titleHighlight} 아이콘`}
                    className="w-full h-full object-contain"
                    style={{
                      aspectRatio: `${point.iconWidth} / ${point.iconHeight}`
                    }}
                  />
                </div>

                {/* 텍스트 그룹 */}
                <div className="flex flex-col gap-3 lg:gap-4 text-center">
                  <h3 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-semibold tracking-[-0.03em] leading-[1.3em]">
                    <span className="text-[#FF3A4A]">{point.titleHighlight}</span>
                    <span className="text-[#222222]">{point.titleRest}</span>
                  </h3>
                  <p className="text-[15px] md:text-[16px] lg:text-[17px] font-normal text-[#666666] tracking-[-0.025em] leading-[1.6em] whitespace-pre-line">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
