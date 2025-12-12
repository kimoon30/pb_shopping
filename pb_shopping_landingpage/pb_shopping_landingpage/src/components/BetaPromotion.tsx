export default function BetaPromotion() {
  const benefits = [
    {
      iconSrc: '/images/beta-promo-icon-1.svg',
      iconWidth: 56,
      iconHeight: 58,
      title: '페이백 비용 지원',
      descriptionParts: [
        { text: '최대 40%', bold: true },
        { text: ' 페이백 비용 ', bold: false },
        { text: '추가지원', bold: true }
      ]
    },
    {
      iconSrc: '/images/beta-promo-icon-2.svg',
      iconWidth: 58,
      iconHeight: 55,
      title: '인당 인증비용 무상 제공',
      descriptionParts: [
        { text: '참여자 x 인증당 비용 ', bold: false },
        { text: '무료 지원', bold: true }
      ]
    },
    {
      iconSrc: '/images/beta-promo-icon-3.svg',
      iconWidth: 63,
      iconHeight: 59,
      title: '광고 운영비 무상 제공',
      descriptionParts: [
        { text: '광고 기획 및 운영고정비 ', bold: false },
        { text: '무료 지원', bold: true }
      ]
    },
    {
      iconSrc: '/images/beta-promo-icon-4.svg',
      iconWidth: 70,
      iconHeight: 70,
      title: '정식 런칭 시 Beta 고객 영구 할인',
      descriptionParts: [
        { text: '정식 런칭 이후 인증 당 비용 및 광고 운영비\n', bold: false },
        { text: '50% 할인', bold: true }
      ]
    }
  ];

  return (
    <section id="beta-promotion" className="bg-white py-16 md:py-20 lg:py-24 flex justify-center overflow-hidden">
      {/* 데스크톱 고정 레이아웃 */}
      <div className="hidden lg:block relative w-[1920px] h-[900px] overflow-hidden">
        {/* 섹션 제목 - 중앙 정렬 */}
        <div className="absolute left-[710px] top-[96px] w-[500px] flex flex-col items-center gap-[16px]">
          <h2 className="text-[45px] font-bold tracking-[-0.025em] text-center leading-[1.4em]">
            <span className="text-[#222222]">Beta 기간 </span>
            <span className="text-[#FF3A4A]">특별 혜택</span>
            <span className="text-[#222222]">이에요!</span>
          </h2>
          <p className="text-[18px] font-normal text-[#222222] tracking-[-0.025em] text-center leading-[1.4em]">
            지금 압도적인 혜택으로 시작하세요.<br />
            페이백쇼핑과 함께 성장하는 광고주들을 위한 <span className="font-bold text-[#FF3A4A]">특별 프로모션</span>
          </p>
        </div>

        {/* 2x2 그리드 - Figma 기준 위치 */}
        <div className="absolute left-[360px] top-[250px] w-[1200px] grid grid-cols-2 gap-[30px]">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-[30px] px-[50px] py-[36px] bg-white rounded-[29px] shadow-[2.41px_2.41px_22.91px_rgba(106,114,119,0.2)]"
            >
              {/* 아이콘 */}
              <div className="flex-shrink-0 w-[70px] h-[70px] flex items-center justify-center">
                <img
                  src={benefit.iconSrc}
                  alt={`${benefit.title} 아이콘`}
                  className="w-full h-full object-contain"
                  style={{
                    aspectRatio: `${benefit.iconWidth} / ${benefit.iconHeight}`
                  }}
                />
              </div>
              
              {/* 텍스트 그룹 */}
              <div className="flex flex-col gap-[7.24px] flex-1 text-center">
                <h3 className="text-[28px] font-semibold text-[#FF3A4A] tracking-[-0.03em] leading-[1.4em]">
                  {benefit.title}
                </h3>
                <p className="text-[20px] font-normal text-[#222222] tracking-[-0.025em] leading-[1.5em] whitespace-pre-line">
                  {benefit.descriptionParts.map((part, idx) => (
                    part.bold ? (
                      <span key={idx} className="font-bold">{part.text}</span>
                    ) : (
                      <span key={idx}>{part.text}</span>
                    )
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 모바일/태블릿 반응형 레이아웃 */}
      <div className="lg:hidden w-full px-4 sm:px-8 md:px-16 pt-[100px] md:pt-[130px] pb-8 max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* 섹션 제목 */}
          <div className="flex flex-col items-center gap-4 max-w-full">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-bold tracking-[-0.025em] text-center leading-[1.4em]">
              <span className="text-[#222222]">Beta 기간 </span>
              <span className="text-[#FF3A4A]">특별 혜택</span>
              <span className="text-[#222222]">이에요!</span>
            </h2>
            <p className="text-[16px] md:text-[17px] font-normal text-[#222222] tracking-[-0.025em] text-center leading-[1.4em]">
              지금 압도적인 혜택으로 시작하세요.<br />
              페이백쇼핑과 함께 성장하는 광고주들을 위한 <span className="font-bold text-[#FF3A4A]">특별 프로모션</span>
            </p>
          </div>

          {/* 2x2 그리드 */}
          <div className="grid grid-cols-1 gap-4 md:gap-5 w-full">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-center gap-5 md:gap-6 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 bg-white rounded-2xl shadow-[2.41px_2.41px_22.91px_rgba(106,114,119,0.2)]"
              >
                {/* 아이콘 */}
                <div className="flex-shrink-0 w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] flex items-center justify-center">
                  <img
                    src={benefit.iconSrc}
                    alt={`${benefit.title} 아이콘`}
                    className="w-full h-full object-contain"
                    style={{
                      aspectRatio: `${benefit.iconWidth} / ${benefit.iconHeight}`
                    }}
                  />
                </div>
                
                {/* 텍스트 그룹 */}
                <div className="flex flex-col gap-2 flex-1 text-center">
                  <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold text-[#FF3A4A] tracking-[-0.03em] leading-[1.4em]">
                    {benefit.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] md:text-[17px] font-normal text-[#222222] tracking-[-0.025em] leading-[1.5em] whitespace-pre-line">
                    {benefit.descriptionParts.map((part, idx) => (
                      part.bold ? (
                        <span key={idx} className="font-bold">{part.text}</span>
                      ) : (
                        <span key={idx}>{part.text}</span>
                      )
                    ))}
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

