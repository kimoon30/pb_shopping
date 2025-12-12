export default function Brands() {
  const brands = [
    { name: '브랜드 1', image: '/images/brand-1.png' },
    { name: '브랜드 2', image: '/images/brand-2.png' },
    { name: '브랜드 3', image: '/images/brand-3-1cf2d9.png' },
    { name: '브랜드 4', image: '/images/brand-4.png' },
    { name: '브랜드 5', image: '/images/brand-5-7e7b18.png' },
    { name: '브랜드 6', image: '/images/brand-6.png' },
    { name: '브랜드 7', image: '/images/brand-7-3d7eee.png' },
    { name: '브랜드 8', image: '/images/brand-8.png' },
    { name: '브랜드 9', image: '/images/brand-9-4c66ab.png' }
  ];

  // 무한 스크롤을 위해 브랜드 배열을 2번 복제
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section id="brands" className="bg-white overflow-hidden flex justify-center">
      {/* 데스크톱 고정 레이아웃 */}
      <div className="hidden lg:block relative w-[1920px] h-[400px]">
        {/* 섹션 제목 - 중앙 정렬 */}
        <div className="absolute left-[710px] top-[96px] w-[500px] text-center">
          <h2 className="text-[45px] font-bold tracking-[-0.025em]">
            <span className="text-[#FF3A4A]">다양한 브랜드들과 함께</span>
            <br />
            <span className="text-[#222222]">성과를 만들고 있어요!</span>
          </h2>
        </div>

        {/* 무한 스크롤 컨테이너 */}
        <div className="absolute left-0 top-[256px] w-full overflow-hidden">
          <div className="flex animate-scroll-right">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-16"
                style={{ width: '250px' }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-[180px] max-h-[100px] w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 모바일/태블릿 반응형 레이아웃 */}
      <div className="lg:hidden w-full px-4 sm:px-8 md:px-16 pt-[100px] md:pt-[130px] pb-8 max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="text-center">
            <h2 className="text-[28px] sm:text-[35px] md:text-[40px] font-bold tracking-[-0.025em]">
              <span className="text-[#FF3A4A]">다양한 브랜드들과 함께</span>
              <br />
              <span className="text-[#222222]">성과를 만들고 있어요!</span>
            </h2>
          </div>

          {/* 무한 스크롤 컨테이너 */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-right">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-10 md:px-12"
                  style={{ width: '250px' }}
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-w-[140px] md:max-w-[160px] max-h-[70px] md:max-h-[85px] w-auto h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
