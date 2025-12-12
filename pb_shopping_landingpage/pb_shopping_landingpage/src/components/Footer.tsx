export default function Footer() {
  return (
    <footer id="footer" className="bg-[#F2F2F2] py-8 md:py-10 lg:py-[34px] border-t border-[#E0E0E0] flex justify-center">
      <div className="mx-auto px-4 sm:px-6 md:px-16 lg:px-20 xl:px-32 2xl:px-[320px] w-full max-w-[1920px] flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-0">
        {/* 왼쪽: 회사 정보 */}
        <div className="flex flex-col gap-5 md:gap-6 lg:gap-[20px] max-w-[361px]">
          <div className="flex flex-col gap-4 md:gap-5 lg:gap-[16px]">
            <h3 className="text-[15px] md:text-[16px] font-semibold text-[#222222] tracking-[0] leading-[1.375em]">
              (주)헥토이노베이션​
            </h3>
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-[8px]">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-[6px]">
                <span className="text-[13px] md:text-[14px] font-medium text-[#222222] leading-[1.2857em]">대표이사</span>
                <span className="text-[13px] md:text-[14px] font-normal text-[#616161] leading-[1.2857em]">ㅣ 이현철</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-[6px]">
                <span className="text-[13px] md:text-[14px] font-medium text-[#222222] leading-[1.2857em]">주소</span>
                <span className="text-[13px] md:text-[14px] font-normal text-[#616161] leading-[1.2857em]">
                  ㅣ 서울특별시 강남구 테헤란로 34길6, 태광타워 12, 13층
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-[6px]">
                <span className="text-[13px] md:text-[14px] font-medium text-[#222222] leading-[1.2857em]">사업자등록번호</span>
                <span className="text-[13px] md:text-[14px] font-normal text-[#616161] leading-[1.2857em]">ㅣ 214-88-39117​</span>
              </div>
            </div>
          </div>
          <p className="text-[13px] md:text-[14px] font-normal text-[#9E9E9E] leading-[1.2857em]">
            Copyright ⓒ Hecto Innovation Co.,Ltd.​ All rights reserved.​
          </p>
        </div>

        {/* 오른쪽: 연락처 및 링크 */}
        <div className="flex flex-col justify-between lg:items-end gap-4 md:gap-5 lg:gap-[20px]">
          <div className="flex flex-col lg:items-end gap-3 md:gap-4 lg:gap-[12px]">
            <h3 className="text-[16px] md:text-[18px] font-semibold text-[#222222] leading-[1.2222em]">연락 & 문의</h3>
            <p className="text-[13px] md:text-[14px] font-semibold text-[#757575] leading-[1.2857em]">E-mail : adbm@hecto.co.kr</p>
            <p className="text-[13px] md:text-[14px] font-normal text-[#757575] leading-[1.2857em]">평일 09시~18시 (주말 및 공휴일 휴무)</p>
          </div>
          <div className="flex items-center justify-end">
            <a 
              href="https://www.hectoinnovation.co.kr/sterm/version02/privacy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] md:text-[14px] font-normal text-[#757575] hover:text-[#222222] transition-colors leading-[1.2857em] underline hover:no-underline"
            >
              개인정보 처리방침
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}