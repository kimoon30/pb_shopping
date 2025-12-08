import { useState } from 'react';

export default function ContactForm() {
  const [selectedPlatform, setSelectedPlatform] = useState('쿠팡');
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    website: '',
    message: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const platforms = ['쿠팡', '스마트스토어', '올리브영', '카카오 선물하기', '기타'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      platform: selectedPlatform
    };

    console.log('폼 제출 데이터:', submitData);
    
    // TODO: 개발팀에서 아래 주석을 해제하고 실제 API 엔드포인트로 교체하세요
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submitData)
    // });

    setShowSuccessModal(true);
  };

  return (
    <>
      {/* 성공 모달 */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[24px] p-8 md:p-10 max-w-[400px] w-full mx-4 shadow-[0_20px_60px_rgba(0,0,0,0.3)] transform animate-[modalSlideUp_0.3s_ease-out]">
            {/* 성공 아이콘 */}
            <div className="flex justify-center mb-6">
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#FF3A4A] to-[#E63342] rounded-full flex items-center justify-center shadow-lg">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            {/* 메시지 */}
            <div className="text-center mb-8">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#222222] mb-3 tracking-[-0.025em]">
                문의가 접수되었습니다!
              </h3>
              <p className="text-[16px] md:text-[18px] text-[#666666] leading-[1.5em] tracking-[-0.025em]">
                검토 후 영업일 기준 <span className="font-semibold text-[#FF3A4A]">3일 이내</span>에<br />
                연락드리겠습니다.
              </p>
            </div>
            
            {/* 확인 버튼 */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-4 bg-gradient-to-r from-[#FF3A4A] to-[#E63342] text-white rounded-[16px] text-[16px] md:text-[18px] font-semibold tracking-[-0.025em] hover:from-[#E63342] hover:to-[#D12B3C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              확인
            </button>
          </div>
        </div>
      )}

      <div id="contact-form" className="w-full max-w-[568px] bg-white rounded-[20px] shadow-[0_0_20px_rgba(213,196,162,0.1)] p-5 sm:p-8 md:p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
        {/* 플랫폼 선택 */}
        <div className="flex flex-col gap-3 md:gap-4">
          <h3 className="text-[16px] md:text-[18px] font-semibold text-[#222222] tracking-[-0.025em]">
            매출 보장을 희망하는 플랫폼을 선택해주세요
          </h3>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {platforms.map((platform) => (
              <button
                key={platform}
                type="button"
                onClick={() => setSelectedPlatform(platform)}
                className={`px-3 sm:px-4 md:px-[18px] py-2 md:py-3 rounded-full text-[12px] md:text-[14px] font-semibold tracking-[-0.025em] transition-all ${
                  selectedPlatform === platform
                    ? 'bg-[#FFEAEA] border-[1.5px] border-[#FF4F4F] text-[#FF4F4F]'
                    : 'bg-white border border-[#D9D9D9] text-[#000000]'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        {/* 입력 필드들 */}
        <div className="flex flex-col gap-3 md:gap-4">
          {/* 회사명 */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1 text-[14px] md:text-[16px] font-semibold text-[#222222] tracking-[-0.025em]">
              회사명 <span className="text-[16px] md:text-[18px] text-[#FF3A4A]">*</span>
            </label>
            <input
              type="text"
              placeholder="회사 이름을 입력해주세요"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="px-3 py-2.5 md:py-3 border border-[#D9D9D9] rounded-[10px] text-[13px] md:text-[14px] text-[#222222] placeholder:text-[#BFBFBF] tracking-[-0.025em] focus:outline-none focus:border-[#FF3A4A]"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {/* 담당자 성함 */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1 text-[14px] md:text-[16px] font-semibold text-[#222222] tracking-[-0.025em]">
                담당자 성함 <span className="text-[16px] md:text-[18px] text-[#FF3A4A]">*</span>
              </label>
              <input
                type="text"
                placeholder="담당자 성함을 입력해주세요"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-3 py-2.5 md:py-3 border border-[#D9D9D9] rounded-[10px] text-[13px] md:text-[14px] placeholder:text-[#BFBFBF] tracking-[-0.025em] focus:outline-none focus:border-[#FF3A4A]"
                required
              />
            </div>

            {/* 전화번호 */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1 text-[14px] md:text-[16px] font-semibold text-[#222222] tracking-[-0.025em]">
                전화번호 <span className="text-[16px] md:text-[18px] text-[#FF3A4A]">*</span>
              </label>
              <input
                type="tel"
                placeholder="전화번호를 입력해주세요"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-3 py-2.5 md:py-3 border border-[#D9D9D9] rounded-[10px] text-[13px] md:text-[14px] placeholder:text-[#BFBFBF] tracking-[-0.025em] focus:outline-none focus:border-[#FF3A4A]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {/* 이메일 주소 */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1 text-[14px] md:text-[16px] font-semibold text-[#222222] tracking-[-0.025em]">
                이메일 주소 <span className="text-[16px] md:text-[18px] text-[#FF3A4A]">*</span>
              </label>
              <input
                type="email"
                placeholder="이메일 주소를 입력해주세요"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-3 py-2.5 md:py-3 border border-[#D9D9D9] rounded-[10px] text-[13px] md:text-[14px] placeholder:text-[#BFBFBF] tracking-[-0.025em] focus:outline-none focus:border-[#FF3A4A]"
                required
              />
            </div>

            {/* 홈페이지 URL */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] md:text-[16px] font-semibold text-[#222222] tracking-[-0.025em]">
                홈페이지 url
              </label>
              <input
                type="url"
                placeholder="(선택) 회사 홈페이지 주소를 입력해주세요."
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="px-3 py-2.5 md:py-3 border border-[#D9D9D9] rounded-[10px] text-[13px] md:text-[14px] placeholder:text-[#BFBFBF] tracking-[-0.025em] focus:outline-none focus:border-[#D9D9D9]"
              />
            </div>
          </div>

          {/* 추가 문의 */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px] md:text-[16px] font-semibold text-[#222222] tracking-[-0.025em]">
              추가 문의
            </label>
            <div className="relative">
              <textarea
                placeholder="추가 문의사항 또는 참고사항이 있다면 편하게 말씀해주세요."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                maxLength={500}
                className="w-full px-3 py-2.5 md:py-3 border border-[#D9D9D9] rounded-[10px] text-[13px] md:text-[14px] placeholder:text-[#BFBFBF] tracking-[-0.025em] resize-none h-[78px] focus:outline-none focus:border-[#D9D9D9]"
              />
              <div className="absolute bottom-2.5 md:bottom-3 right-3 text-[13px] md:text-[14px] text-[#000000] tracking-[-0.025em]">
                {formData.message.length}/500
              </div>
            </div>
          </div>
        </div>

        {/* 개인정보 동의 */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex-shrink-0 ${
                agreed ? 'border-[#CFCFCF] bg-white' : 'border-[#CFCFCF] bg-white'
              } flex items-center justify-center`}
            >
              {agreed && <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF3A4A]"></div>}
            </button>
            <label className="text-[13px] sm:text-[14px] md:text-[16px] font-semibold text-[#333333] tracking-[-0.03em]">
              개인정보보호 수집 및 이용 동의(필수)
            </label>
          </div>
          <button type="button" className="text-[12px] sm:text-[13px] md:text-[14px] font-light text-[#808080] tracking-[-0.03em] underline self-start sm:self-auto">
            약관
          </button>
        </div>

        {/* 제출 버튼 */}
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={!agreed}
            className={`w-full py-4 md:py-5 rounded-xl text-[14px] md:text-[16px] font-semibold text-white tracking-[-0.025em] transition-all ${
              agreed
                ? 'bg-[#FF3A4A] hover:bg-[#E63342]'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            상담 신청하기<br className="hidden sm:block" /><span className="sm:hidden"> </span>[무료 프로모션 혜택 받기]
          </button>
          <p className="text-center text-[12px] sm:text-[13px] md:text-[14px] font-light text-[#808080] tracking-[-0.025em]">
            검토 후 영업일 기준 3일 이내에 연락드리겠습니다.
          </p>
        </div>
      </form>
    </div>
    </>
  );
}

