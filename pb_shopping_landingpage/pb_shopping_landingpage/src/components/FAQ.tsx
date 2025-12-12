import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: '부정 리뷰가 쌓이지는 않나요?',
      answer: '평균 별점 4.8~9 정도로 우수한 리뷰가 대부분입니다. 리워드 보상이라는 요인에 따라 부정리뷰는 잘 쌓이지 않습니다.'
    },
    {
      question: '광고주(회사)측에서 별도로 준비해야 할 건 없나요?(별도 프로모션 페이지, 검수 등)',
      answer: '전달주신 스토어 URL로 유저들이 직접 구매하는 구조입니다. 따라서, 별도 프로모션 페이지를 만들지 않으셔도 됩니다. 리뷰 검수 또한 내부 전문 검수단에서 진행하고 있습니다.'
    },
    {
      question: '광고비가 왜 0원인가요?',
      answer: '베타기간 한정으로 페이백 비용을 제외한 광고비를 받고 있지 않습니다. 베타 기간 종료 후 운영비 등을 책정하여 수익화 예정입니다.'
    },
    {
      question: '취소물량을 책정할 수 있나요?',
      answer: '내부 프로세스 상 주문 취소 물량은 알기 어렵습니다.'
    },
    {
      question: '리뷰 작성 시 별도의 가이드가 필요한가요? (제품 제공에 대한 언급 등)',
      answer: '유저가 직접 구매하고 사용한 후기를 남기는 프로세스이기 때문에 별도의 가이드는 필요치 않습니다.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F8F8F8] py-16 md:py-20 lg:py-24 flex justify-center overflow-hidden">
      {/* 데스크톱 고정 레이아웃 */}
      <div className="hidden lg:block relative w-[1920px] min-h-[800px] overflow-hidden">
        {/* 섹션 제목 - 고정 위치 */}
        <div className="absolute left-[710px] top-[96px] w-[500px] text-center">
          <h2 className="text-[45px] font-semibold text-[#222222] tracking-[-0.025em]">
            궁금한점 있으신가요?
          </h2>
        </div>

        {/* FAQ 리스트 - 고정 위치 */}
        <div className="absolute left-[360px] top-[220px] w-[1200px] flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[11px] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-10 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-7 h-7 bg-[#222222] rounded-full flex-shrink-0">
                    <span className="text-[18.67px] font-bold text-white">Q</span>
                  </div>
                  <span className="text-[20px] font-semibold text-[#222222] tracking-[-0.03em] text-left">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 28 28"
                    className={`transition-transform w-7 h-7 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                  >
                    <path
                      d="M23.3333 10.5L14 19.8333L4.66667 10.5"
                      stroke="#C6C6C6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <>
                  <div className="w-full h-px bg-[#E4E4E4] mx-10"></div>
                  <div className="p-10 flex items-start gap-3">
                    <div className="flex items-center justify-center w-7 h-7 bg-[#FF3A4A] rounded-full flex-shrink-0">
                      <span className="text-[18.67px] font-bold text-white">A</span>
                    </div>
                    <p className="text-[18px] font-normal text-[#222222] tracking-[-0.025em] leading-[1.5em]">
                      {faq.answer}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 모바일/태블릿 반응형 레이아웃 */}
      <div className="lg:hidden w-full px-4 sm:px-8 md:px-16 pt-[100px] md:pt-[130px] pb-8 max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <h2 className="text-[28px] sm:text-[35px] md:text-[40px] font-semibold text-[#222222] tracking-[-0.025em] text-center">
            궁금한점 있으신가요?
          </h2>

          <div className="flex flex-col gap-4 md:gap-5 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[11px] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                    <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-[#222222] rounded-full flex-shrink-0">
                      <span className="text-[16px] md:text-[18.67px] font-bold text-white">Q</span>
                    </div>
                    <span className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#222222] tracking-[-0.03em] text-left">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 ml-2 md:ml-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 28 28"
                      className={`transition-transform w-5 h-5 md:w-6 md:h-6 ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                    >
                      <path
                        d="M23.3333 10.5L14 19.8333L4.66667 10.5"
                        stroke="#C6C6C6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {openIndex === index && (
                  <>
                    <div className="w-full h-px bg-[#E4E4E4] mx-4 md:mx-6"></div>
                    <div className="p-4 md:p-6 flex items-start gap-2 md:gap-3">
                      <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 bg-[#FF3A4A] rounded-full flex-shrink-0">
                        <span className="text-[16px] md:text-[18.67px] font-bold text-white">A</span>
                      </div>
                      <p className="text-[14px] md:text-[16px] font-normal text-[#222222] tracking-[-0.025em] leading-[1.5em]">
                        {faq.answer}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

