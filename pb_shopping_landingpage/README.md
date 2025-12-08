# 페이백쇼핑 랜딩페이지

React + Vite + TypeScript + Tailwind CSS로 구축된 정적 랜딩페이지입니다.

## 🚀 프로젝트 정보

- **프로젝트명**: pb_shopping_landingpage
- **기술 스택**: React 18, Vite, TypeScript, Tailwind CSS
- **Node.js 버전**: 22.12.0

## 📁 프로젝트 구조

```
pb_shopping_landingpage/
├── public/
│   └── images/          # Figma에서 추출한 이미지 파일들
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── Header.tsx           # 헤더/네비게이션
│   │   ├── Hero.tsx             # 히어로 섹션
│   │   ├── ContactForm.tsx      # 문의 폼
│   │   ├── PainPoints.tsx       # Pain Points 섹션
│   │   ├── Solutions.tsx        # Solutions 섹션
│   │   ├── BetaPromotion.tsx    # Beta 프로모션 섹션
│   │   ├── FAQ.tsx              # FAQ 섹션
│   │   ├── Testimonials.tsx     # 고객 후기 섹션
│   │   ├── Brands.tsx           # 브랜드 로고 섹션
│   │   ├── CTA.tsx              # CTA 섹션
│   │   └── Footer.tsx           # 푸터
│   ├── App.tsx          # 메인 앱 컴포넌트
│   ├── main.tsx         # 엔트리 포인트
│   └── index.css        # Tailwind CSS 및 전역 스타일
├── dist/                # 빌드된 파일 (배포용)
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ 개발 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 http://localhost:5173/ 에서 실행됩니다.

### 3. 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 4. 빌드 미리보기

```bash
npm run preview
```

## 📦 배포 방법

1. **빌드 실행**
   ```bash
   npm run build
   ```

2. **dist 폴더 전달**
   - `dist/` 폴더 안의 모든 파일을 압축
   - 압축 파일을 개발팀에 전달
   - 개발팀은 웹서버에 dist 폴더 내용을 업로드

## 🔧 주요 기능

### 컴포넌트 구성

1. **Header** - 고정 헤더 네비게이션
   - 서비스 소개, FAQ, 상담 신청 링크
   - 스크롤 시 배경 변경 효과

2. **Hero** - 메인 히어로 섹션
   - SKT PASS 매출 보장형 광고상품 소개
   - Beta 프로모션 배지
   - 문의 폼 (ContactForm)

3. **ContactForm** - 문의 신청 폼
   - 플랫폼 선택 (쿠팡, 스마트스토어, 올리브영, 카카오 선물하기, 기타)
   - 회사 정보 입력 (회사명, 담당자, 전화번호, 이메일, 홈페이지)
   - 개인정보 동의
   - **폼 제출 처리**: console.log로 데이터 출력 (API 연동 준비됨)

4. **PainPoints** - 고객 Pain Points
   - 3가지 문제점 제시
   - 아이콘 및 설명

5. **Solutions** - 해결책 제시
   - 3가지 솔루션 소개
   - 이미지 포함

6. **BetaPromotion** - Beta 특별 혜택
   - 4가지 프로모션 혜택
   - 그리드 레이아웃

7. **FAQ** - 자주 묻는 질문
   - 아코디언 형식
   - 5개 FAQ 항목

8. **Testimonials** - 고객 후기
   - 4개 후기 카드
   - 그리드 레이아웃

9. **Brands** - 협력 브랜드
   - 브랜드 로고 그리드

10. **CTA** - 최종 행동 유도
    - PASS by SKT 앱 다운로드 링크
    - 상담 신청 버튼

11. **Footer** - 하단 정보
    - 회사 정보
    - 연락처
    - 약관 링크

### API 연동 가이드

ContactForm 컴포넌트의 `handleSubmit` 함수에서:

```typescript
// 현재 코드 (console.log)
console.log('폼 제출 데이터:', formData);

// TODO: 개발팀에서 아래 주석을 해제하고 실제 API 엔드포인트로 교체하세요
// await fetch('/api/contact', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(formData)
// });
```

## 🎨 스타일링

- **Tailwind CSS**: 유틸리티 클래스 기반 스타일링
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **Figma 디자인**: 원본 디자인과 동일하게 구현

## 📱 반응형 브레이크포인트

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🌐 브라우저 지원

- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)

## 📞 문의

- **이메일**: adbm@hecto.co.kr
- **회사**: (주)헥토이노베이션
- **주소**: 서울특별시 강남구 테헤란로 34길6, 태광타워 12, 13층

## 📄 라이선스

Copyright ⓒ Hecto Innovation Co.,Ltd. All rights reserved.

