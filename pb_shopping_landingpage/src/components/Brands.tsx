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
    <section id="brands" className="bg-white py-12 md:py-20 lg:py-[100px] overflow-hidden">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-[360px]">
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px]">
          <div className="text-center">
          <h2 className="text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold tracking-[-0.025em]">
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
                  className="flex-shrink-0 flex items-center justify-center px-10 md:px-12 lg:px-16"
                  style={{ width: '250px' }}
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-w-[140px] md:max-w-[160px] lg:max-w-[180px] max-h-[70px] md:max-h-[85px] lg:max-h-[100px] w-auto h-auto object-contain"
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
