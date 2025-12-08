export default function Testimonials() {
  const testimonials = [
    {
      achievementParts: [
        [
          { text: '초반 시딩', color: 'red' },
          { text: '에', color: 'black' }
        ],
        [
          { text: '매우 효과적이에요', color: 'black' }
        ]
      ],
      company: '뷰티업체 I사  김OO 대표님',
      quote: '"리뷰가 전혀 쌓이지 않아 광고를 해도 효율이 나오지 않고 있었어요. 페이백 쇼핑을 통해 시딩 부스팅을 이뤄냈고 판매 또한 일어나기 시작하여, 이제는 광고를 진행해도 큰 매출 상승의 효과가 일어날 것 같습니다!\n신제품 출시 시 매번 함께 하고 싶어요!"'
    },
    {
      achievementParts: [
        [
          { text: '노출 순위 ', color: 'red' },
          { text: '89%', color: 'red' },
          { text: ', 조회수', color: 'black' }
        ],
        [
          { text: '667%', color: 'red' },
          { text: ' 상승했어요.', color: 'black' }
        ]
      ],
      company: '뷰티업체 N사  이OO 대표님',
      quote: '"구매 구간에서 상위 노출 > 인증 단계에서의 일시적 순위 변동 > 리뷰 증가 이후 상위권 복귀라는 흐름을 확인할 수 있었습니다. 고객 구매 여정을 자연스럽게 유도하여, 검색 순위/리뷰/ 매출을 동시에 끌어올리는 효율적인 퍼포먼스형 캠페인이었던 것 같습니다."'
    },
    {
      achievementParts: [
        [
          { text: '양질의 리뷰', color: 'red' }
        ],
        [
          { text: '확보가 가능해요', color: 'black' }
        ]
      ],
      company: '뷰티업체 B사  이OO 실장님',
      quote: '"리뷰 확보가 굉장히 빠른시간 내에 되어서 만족스러웠습니다! 다른 리뷰 서비스의 경우 저희 제품을 이용해보지 않고 가이드가 정해진 저품질 리뷰를 줘서 브랜딩 측면에서 악영향이 있었는데요, 페이백쇼핑은 고객 개개인이 작성한 양질의 리뷰가 만족포인트였습니다."'
    },
    {
      achievementParts: [
        [
          { text: '검증된 플랫폼', color: 'red' },
          { text: '이어서', color: 'black' }
        ],
        [
          { text: '좋아요!', color: 'black' }
        ]
      ],
      company: '쇼핑물 N사  안OO 과장님',
      quote: '"다른 업체의 경우 체험단 형태로 직접 모집하거나 실행사를 쓰는 경우가 많았는데 페이백 쇼핑은 \'PASS\'라는 검증된 플랫폼을 활용하는게 좋았어요! 진짜 유저들이 이용하는 앱이어서 질 높은 리뷰가 잘 쌓여서 좋았습니다!"'
    }
  ];

  return (
    <section id="testimonials" className="bg-[#333333] py-16 md:py-20 lg:py-[104px]">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-[360px]">
        <div className="flex flex-col items-center gap-10 md:gap-12 lg:gap-[60px]">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[45px] font-bold text-white tracking-[-0.025em] text-center leading-[1.4em]">
            고객들이 경험한 변화예요.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-end gap-6 md:gap-7 lg:gap-[30px] px-6 py-10 md:px-7 md:py-12 lg:px-[30px] lg:py-[60px] bg-white rounded-2xl lg:rounded-3xl"
              >
                {/* 프로필 아이콘과 텍스트 그룹 */}
                <div className="flex flex-col items-center gap-4">
                  {/* 프로필 아이콘 */}
                  <div className="w-[70px] h-[80px] md:w-[75px] md:h-[85px] lg:w-[80px] lg:h-[90px] flex items-center justify-center flex-shrink-0">
                    <img
                      src={`/images/testimonial-profile-${index + 1}.svg`}
                      alt={`${testimonial.company} 프로필`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* 제목 - 특정 단어 빨간색 강조, 2줄 구조 */}
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold tracking-[-0.03em] text-center leading-[1.3em]">
                    {testimonial.achievementParts.map((line, lineIdx) => (
                      <span key={lineIdx}>
                        {line.map((part, partIdx) => (
                          <span
                            key={partIdx}
                            className={part.color === 'red' ? 'text-[#FF3A4A]' : 'text-[#222222]'}
                          >
                            {part.text}
                          </span>
                        ))}
                        {lineIdx < testimonial.achievementParts.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>

                  {/* 회사/직책 */}
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#818181] tracking-[-0.025em] text-center leading-[1.5em]">
                    {testimonial.company}
                  </p>
                </div>

                {/* 후기 텍스트 */}
                <p className="text-[11px] md:text-[11.5px] lg:text-[12px] font-medium text-[#222222] tracking-[-0.025em] text-center whitespace-pre-line leading-[1.5em]">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
