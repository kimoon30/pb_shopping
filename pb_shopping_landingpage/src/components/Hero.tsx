import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[800px] md:min-h-[900px] lg:min-h-[1080px] bg-gradient-to-b from-white to-[#FFF0D3] overflow-hidden flex justify-center">
      {/* 데스크톱 레이아웃 - Figma 정확한 위치 */}
      <div className="hidden lg:block relative w-[1920px] h-[1080px]">
        {/* 왼쪽 텍스트 그룹 - Figma: x:360, y:164, w:311, h:252 */}
        <div className="absolute left-[360px] top-[164px] w-[311px] h-[252px]">
          {/* 배지들 - Figma: y:0 (가입자수 x:3, MAU x:120) */}
          <div className="absolute left-[3px] top-0 inline-flex items-center justify-center gap-[10px] px-[8px] py-[4px] bg-[#222222] rounded-[4px]">
            <span className="text-[12px] font-semibold text-white tracking-[-0.025em] leading-[1.5em]">
              가입자수 1,400만 +
            </span>
          </div>
          <div className="absolute left-[120px] top-0 inline-flex items-center justify-center gap-[10px] px-[8px] py-[4px] bg-[#222222] rounded-[4px]">
            <span className="text-[12px] font-semibold text-white tracking-[-0.025em] leading-[1.5em]">
              MAU 700만 +
            </span>
          </div>

          {/* "SKT PASS..." 텍스트 - Figma: x:3, y:38, w:308, h:27 */}
          <h2 className="absolute left-[3px] top-[38px] w-[308px] h-[27px] text-[18px] font-semibold text-[#222222] tracking-[-0.025em] leading-[1.5em] text-center flex items-center justify-center">
            SKT PASS와 함께하는 매출 보장형 광고상품
          </h2>

          {/* "페이백쇼핑" 큰 제목 - Figma: x:1, y:85, w:286, h:102 */}
          <h1 className="absolute left-[1px] top-[85px] w-[286px] h-[102px] text-[68px] font-extrabold text-[#FF3A4A] tracking-[-0.03em] leading-[1.5em] text-center flex items-center justify-center">
            페이백쇼핑
          </h1>

          {/* 설명 텍스트 - Figma: x:0, y:198, w:278, h:54 */}
          <p className="absolute left-0 top-[198px] w-[278px] h-[54px] text-[18px] font-normal text-[#463636] tracking-[-0.025em] leading-[1.5em] text-left">
            압도적인 트래픽과 실구매·리뷰의 힘으로 <br />
            매출 부스팅을 경험하세요!
          </p>
        </div>

        {/* 베타 프로모션 배지 - Figma: x:651, y:245, w:159.28, h:35 */}
        <div className="absolute left-[651px] top-[245px]">
          <div className="relative w-[159.28px] h-[35px]">
            {/* Union: Rectangle (둥근 사각형) */}
            <div className="absolute left-0 top-0 w-[157px] h-[35px] bg-white rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]"></div>
            
            {/* Union: Polygon (오른쪽 화살표) - w:27, h:16 */}
            <svg 
              className="absolute left-[132.28px] top-[9.5px]" 
              width="27" 
              height="16" 
              viewBox="0 0 27 16" 
              fill="none"
              style={{ filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1))' }}
            >
              <path d="M0 0 L14 8 L0 16 Z" fill="white"/>
            </svg>
            
            {/* 텍스트 - 위치: x:15, y:6, w:130, h:23 */}
            <span className="absolute left-[15px] top-[6px] text-[15px] font-extrabold text-[#FF2D2D] tracking-[-0.025em] leading-[23px]">
              Beta 프로모션 진행중!
            </span>
          </div>
        </div>

        {/* 메인 일러스트레이션 그룹 - Figma: Group x:359.8, y:444, w:532.21, h:521 */}
        <div className="absolute left-[359.8px] top-[444px] w-[532.21px] h-[521px]">
          {/* 배경 블러 원 - x:64.2, y:31, w:444, h:444 */}
          <div className="absolute left-[64.2px] top-[31px] w-[444px] h-[444px] bg-[#FFBEBE] rounded-full blur-[200px] opacity-100 z-0"></div>
          
          {/* 작은 이미지 2 - x:0, y:225.68, w:124.06, h:149.91 */}
          <img
            src="/images/hero-image-2-43e384.png"
            alt="배경 이미지 2"
            className="absolute left-0 top-[225.68px] w-[124.06px] h-[149.91px] object-cover z-10"
          />
          
          {/* 메인 일러스트레이션 - x:47.51, y:0, w:447.48, h:521 */}
          <img
            src="/images/hero-main-illustration.png"
            alt="페이백쇼핑 일러스트"
            className="absolute left-[47.51px] top-0 w-[447.48px] h-[521px] object-contain z-20"
          />
          
          {/* 작은 이미지 1 - x:350.2, y:280, w:182.01, h:207.48 */}
          <img
            src="/images/hero-image-1.png"
            alt="배경 이미지 1"
            className="absolute left-[350.2px] top-[280px] w-[182.01px] h-[207.48px] object-cover z-30"
          />
        </div>

        {/* 오른쪽 문의 폼 - Figma: x:992, y:164, w:568, h:756 */}
        <div className="absolute left-[992px] top-[164px] w-[568px]">
          <ContactForm />
        </div>
      </div>

      {/* 모바일/태블릿 레이아웃 */}
      <div className="lg:hidden w-full px-4 sm:px-8 md:px-16 pt-[100px] md:pt-[130px] pb-8">
        <div className="text-center mb-8">
          {/* Beta 배지 */}
          <div className="flex justify-center mb-6">
            <div className="relative inline-flex items-center">
              <div className="bg-white rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)] px-[15px] py-[6px]">
                <span className="text-[15px] font-extrabold text-[#FF2D2D] tracking-[-0.025em] leading-[23px]">
                  Beta 프로모션 진행중!
                </span>
              </div>
              <svg 
                className="absolute -right-[13px] top-1/2 -translate-y-1/2" 
                width="20" 
                height="16" 
                viewBox="0 0 20 16" 
                fill="none"
                style={{ filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))' }}
              >
                <path d="M0 0 L12 8 L0 16 Z" fill="white"/>
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="px-2 py-1 bg-[#222222] rounded text-[12px] font-semibold text-white tracking-[-0.025em]">
              가입자수 1,400만 +
            </div>
            <div className="px-2 py-1 bg-[#222222] rounded text-[12px] font-semibold text-white tracking-[-0.025em]">
              MAU 700만 +
            </div>
          </div>
          
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#222222] tracking-[-0.025em] mb-4">
            SKT PASS와 함께하는 매출 보장형 광고상품
          </h2>

          <h1 className="text-[48px] md:text-[60px] font-extrabold text-[#FF3A4A] tracking-[-0.03em] leading-[1.5em] mb-4">
            페이백쇼핑
          </h1>

          <p className="text-[16px] md:text-[18px] font-normal text-[#463636] tracking-[-0.025em] mb-6">
            압도적인 트래픽과 실구매·리뷰의 힘으로<br />
            매출 부스팅을 경험하세요!
          </p>

          {/* 모바일 일러스트레이션 */}
          <div className="relative w-full max-w-[400px] mx-auto mb-8">
            <img
              src="/images/hero-main-illustration.png"
              alt="페이백쇼핑 일러스트"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* 모바일 문의 폼 */}
        <div className="max-w-[568px] mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
