export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const screenWidth = window.innerWidth;
      let offset;
      
      // 화면 크기별 오프셋 설정
      if (screenWidth < 480) {
        offset = 7200; // 작은 모바일
      } else if (screenWidth < 768) {
        offset = 7000; // 큰 모바일
      } else if (screenWidth < 1024) {
        offset = 7000; // 태블릿
      } else {
        offset = 100; // 데스크톱
      }
      
      const elementPosition = element.getBoundingClientRect().top;
      const currentScroll = window.pageYOffset;
      const targetPosition = currentScroll + elementPosition - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cta" className="relative bg-[#F8F8F8] overflow-hidden flex justify-center">
      {/* 데스크톱 레이아웃 - Figma 정확한 위치 */}
      <div className="hidden lg:block relative w-[1920px] h-[721px]">
        {/* 배경 이미지들 */}
        <img
          src="/images/cta-bg-image-1.png"
          alt="배경 이미지 1"
          className="absolute left-[1148px] top-[305px] w-[182px] h-[207px] object-contain"
        />
        <img
          src="/images/cta-bg-image-2-43e384.png"
          alt="배경 이미지 2"
          className="absolute left-[600px] top-[262px] w-[124px] h-[150px] object-contain"
        />

        {/* 메인 콘텐츠 */}
        <div className="absolute left-0 top-[94px] w-[1920px] flex flex-col items-center gap-[40px]">
          {/* 헤드라인 */}
          <div className="flex flex-col items-center gap-[16px] w-[642px]">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-[40px] font-bold text-[#222222] tracking-[-0.025em] text-center leading-[1.4em]">
                압도적 트래픽의 매출보장형 광고 상품
              </h2>
              <h3 className="text-[45px] font-bold text-[#FF3A4A] tracking-[-0.025em] text-center leading-[1.4em] w-full">
                페이백쇼핑
              </h3>
            </div>
            <p className="text-[20px] font-normal text-[#222222] tracking-[-0.025em] text-center leading-[1.4em] w-full">
              탁월한 광고효과를 경험해 보세요.
            </p>
          </div>

          {/* PASS by SKT 카드 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[203px] bg-white rounded-[24px] p-[20px]">
            <div className="bg-white rounded-[40px] px-[40px] flex flex-row justify-center items-center h-[175px] gap-[24px]">
              <div className="flex flex-col items-center gap-[12px]">
                <h4 className="text-[18px] font-bold text-[#1A1A1A] tracking-[0] text-center leading-[1.3em]">
                  PASS by SKT
                </h4>
                <div className="flex flex-col justify-center items-center gap-[24px] w-[140px]">
                  <div className="w-[100px] h-[100px] relative rounded-[14.29px]">
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#FF3A4E]"></div>
                    <img
                      src="/images/pass-app-image.png"
                      alt="PASS by SKT"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-[12px]">
                <a
                  href="https://www.tauth.net/pass/link/237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row justify-center items-center gap-[8px] px-[32px] py-[16px] bg-gradient-to-r from-[#FF3A4A] to-[#E63342] text-white rounded-[20px] hover:from-[#E63342] hover:to-[#D12B3C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] w-[245px]"
                >
                  <span className="text-[18px] font-semibold tracking-[-0.025em] text-center leading-[1.2em]">페이백쇼핑 바로가기</span>
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 버튼 */}
        <button
          onClick={scrollToContact}
          className="absolute left-[675px] top-[547px] flex flex-row justify-center items-center gap-[10px] px-[156px] py-[20px] bg-[#222222] text-white rounded-[12px] w-[570px] h-[86px] hover:bg-[#FF3A4A] transition-colors"
        >
          <span className="text-[32px] font-semibold tracking-[-0.025em] text-center leading-[1.6em]">
            상담 신청하기
          </span>
        </button>
      </div>

      {/* 모바일/태블릿 레이아웃 */}
      <div className="lg:hidden w-full px-4 sm:px-8 md:px-16 py-12 md:py-16 max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* 헤드라인 */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-[24px] sm:text-[30px] md:text-[35px] font-bold text-[#222222] tracking-[-0.025em] leading-[1.4em]">
                압도적 트래픽의 매출보장형 광고 상품
              </h2>
              <h3 className="text-[28px] sm:text-[35px] md:text-[40px] font-bold text-[#FF3A4A] tracking-[-0.025em] leading-[1.4em]">
                페이백쇼핑
              </h3>
            </div>
            <p className="text-[16px] md:text-[18px] font-normal text-[#222222] tracking-[-0.025em] leading-[1.4em]">
              탁월한 광고효과를 경험해 보세요.
            </p>
          </div>

          {/* PASS by SKT 카드 */}
          <div className="bg-white rounded-[20px] p-4 md:p-6 w-full max-w-[500px]">
            <div className="bg-white rounded-[30px] px-6 py-8 flex flex-col items-center gap-6">
              <h4 className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A] text-center">
                PASS by SKT
              </h4>
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] relative rounded-[12px]">
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#FF3A4E]"></div>
                <img
                  src="/images/pass-app-image.png"
                  alt="PASS by SKT"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href="https://www.tauth.net/pass/link/237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF3A4A] to-[#E63342] text-white rounded-[16px] hover:from-[#E63342] hover:to-[#D12B3C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex-1"
                >
                  <span className="text-[16px] md:text-[18px] font-semibold tracking-[-0.025em]">페이백쇼핑 바로가기</span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* CTA 버튼 */}
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center px-8 py-4 bg-[#222222] text-white rounded-[12px] w-full max-w-[400px] hover:bg-[#FF3A4A] transition-colors"
          >
            <span className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-[-0.025em]">
              상담 신청하기
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}