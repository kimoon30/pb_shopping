import { useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 감지
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const offset = 100; // 150px 위로 올리기 (값을 조절하세요)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        isScrolled ? 'bg-white/90 backdrop-blur-[10px] shadow-md' : 'bg-white/10 backdrop-blur-[10px]'
      }`}
    >
      {/* 데스크톱 레이아웃 - Figma: 1920x100 */}
      <div className="hidden lg:block relative w-[1920px] h-[100px]">
        {/* 컨텐츠 영역 - Figma: x:360, y:35, w:1200 */}
        <div className="absolute left-[360px] top-[35px] w-[1200px] flex flex-row justify-between items-center">
          {/* 로고 - Figma: 18px, 600, -3% */}
          <h1 className="text-[18px] font-semibold text-[#222222] tracking-[-0.03em] leading-[1.5em]">
            페이백쇼핑
          </h1>

          {/* 네비게이션 메뉴 - Figma: row, gap:40px */}
          <nav className="flex flex-row items-center gap-[40px]">
            {/* 서비스 소개 - Figma: 16px, 600, -2.5% */}
            <button
              onClick={() => scrollToSection('service-intro')}
              className="relative text-[16px] font-semibold text-[#222222] hover:text-[#FF3A4A] transition-colors tracking-[-0.025em] leading-[1.5em]"
            >
              서비스 소개
              {/* 언더라인 - Figma Line 424: y:28 (63-35), w:71, stroke:1.5px */}
              <span className="absolute left-0 bottom-[-28px] w-[71px] h-[1.5px] bg-[#222222]"></span>
            </button>

            {/* 자주 묻는 질문 - Figma: 16px, 400, -2.5% */}
            <button
              onClick={() => scrollToSection('faq')}
              className="text-[16px] font-normal text-[#222222] hover:text-[#FF3A4A] transition-colors tracking-[-0.025em] leading-[1.5em]"
            >
              자주 묻는 질문
            </button>

            {/* 상담 신청하기 버튼 - Figma: 14px, 600, -2.5%, padding:7px 16px, rounded-full, bg:#222222 */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-[10px] px-[16px] py-[7px] bg-[#222222] text-white rounded-full text-[14px] font-semibold hover:bg-[#FF3A4A] transition-colors tracking-[-0.025em] leading-[1.5em]"
            >
              상담 신청하기
            </button>
          </nav>
        </div>
      </div>

      {/* 모바일/태블릿 레이아웃 */}
      <div className="lg:hidden relative w-full h-[70px]">
        <div className="relative mx-auto px-4 sm:px-8 md:px-16 h-full flex items-center justify-between">
          {/* 로고 */}
          <h1 className="text-[16px] md:text-[18px] font-semibold text-[#222222] tracking-[-0.03em]">
            페이백쇼핑
          </h1>

          {/* 햄버거 메뉴 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 w-6 h-6 justify-center"
            aria-label="메뉴"
          >
            <span className={`block h-0.5 bg-[#222222] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-[#222222] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-[#222222] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              <button
                onClick={() => scrollToSection('service-intro')}
                className="text-left text-[16px] font-semibold text-[#222222] hover:text-[#FF3A4A] transition-colors tracking-[-0.025em] py-2"
              >
                서비스 소개
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-[16px] font-normal text-[#222222] hover:text-[#FF3A4A] transition-colors tracking-[-0.025em] py-2"
              >
                자주 묻는 질문
              </button>
              <button
                onClick={scrollToContact}
                className="px-4 py-3 bg-[#222222] text-white rounded-full text-[14px] font-semibold hover:bg-[#FF3A4A] transition-colors tracking-[-0.025em] text-center"
              >
                상담 신청하기
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
