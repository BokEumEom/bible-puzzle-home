import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Puzzle, 
  Star, 
  Smile, 
  Trophy,
  CheckCircle2,
  Sparkles,
  Download,
  MousePointerClick,
  Eye
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden selection:bg-brand-orange-200/50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md border-b border-white/20">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-orange-400 to-brand-orange-500 flex items-center justify-center text-white shadow-sm">
              <BookOpen size={18} />
            </div>
            <span className="font-jua text-2xl tracking-tight text-[var(--color-text-main)]">말씀 팡팡</span>
          </div>
          <button className="btn-secondary px-4 py-1.5 text-sm">
            앱 시작하기
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-white/40 shadow-sm mb-6">
              <Sparkles size={16} className="text-brand-orange-500" />
              <span className="text-sm font-bold text-[var(--color-text-main)]">우리 아이 첫 성경 퍼즐</span>
            </div>
            <h1 className="font-jua text-5xl md:text-7xl leading-[1.1] mb-6 text-[var(--color-text-main)] drop-shadow-sm">
              말씀 팡팡 퍼즐<br/>
              <span className="text-brand-orange-600">이렇게 쉬워요!</span>
            </h1>
            <p className="text-xl font-bold text-[var(--color-text-main)]/80 mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
              말씀을 맞추며 배워봐요.<br/>
              처음부터 차근차근, 시편, 잠언, 창세기로 시작할게요!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="btn-primary px-8 py-4 text-xl flex items-center justify-center gap-2">
                내 맞춤 말씀 시작하기!
              </button>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-white/40 rounded-[3rem] transform rotate-6 scale-105 -z-10 shadow-xl" />
              <div className="bg-brand-amber-50 rounded-[3rem] shadow-2xl border-8 border-white p-6 relative overflow-hidden aspect-[4/5] flex flex-col">
                {/* Mockup UI */}
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-bold shadow-sm text-brand-orange-600">오늘의 말씀</div>
                  <div className="flex gap-1 text-brand-orange-400"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
                </div>
                <h3 className="font-jua text-3xl text-center mb-8 leading-relaxed">
                  항상 기뻐하라<br/>쉬지 말고 기도하라
                </h3>
                <div className="flex flex-wrap gap-2 justify-center mb-auto">
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-sm font-bold text-lg border-b-4 border-gray-200">항상</div>
                  <div className="bg-brand-emerald-100 px-4 py-3 rounded-2xl shadow-sm font-bold text-lg border-b-4 border-brand-emerald-400 text-emerald-800">기뻐하라</div>
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-sm font-bold text-lg border-b-4 border-gray-200">쉬지 말고</div>
                  <div className="bg-white px-4 py-3 rounded-2xl shadow-sm font-bold text-lg border-b-4 border-gray-200">기도하라</div>
                </div>
                <div className="mt-6 bg-white/60 p-4 rounded-2xl text-center font-bold text-sm">
                  늘 웃는 얼굴로 지내요!<br/>하나님과 매일 이야기해요.
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-amber-100 flex items-center justify-center text-2xl">🌟</div>
                <div className="text-sm font-black">정답입니다!</div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. How to Play Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="font-jua text-4xl mb-4 text-[var(--color-text-main)]">어떻게 해볼까요?</h2>
            <p className="text-lg font-bold text-[var(--color-text-main)]/70">말씀을 잘 읽고 맞춰보아요!</p>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Eye size={32} />,
                color: "text-brand-orange-500",
                bg: "bg-brand-amber-50",
                title: "큰 글씨로 읽기",
                desc: "큰 글씨로 천천히 읽어보아요"
              },
              {
                icon: <MousePointerClick size={32} />,
                color: "text-emerald-500",
                bg: "bg-brand-emerald-100",
                title: "말씀 외우기",
                desc: "단어를 콕콕 눌러서 가려보아요"
              },
              {
                icon: <Puzzle size={32} />,
                color: "text-blue-500",
                bg: "bg-blue-50",
                title: "퍼즐 맞추기",
                desc: "흩어진 단어를 순서대로 맞춰요"
              }
            ].map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm border border-white/50 h-full hover:shadow-md transition-shadow text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 shadow-sm`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-jua text-2xl mb-3">{feature.title}</h3>
                  <p className="font-bold text-[var(--color-text-main)]/70">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Personalization Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-[3rem] p-8 md:p-12 shadow-xl border border-white/50">
          <FadeIn className="text-center mb-10">
            <h2 className="font-jua text-4xl mb-4">성경 말씀을<br/>얼마나 접해봤나요?</h2>
            <p className="text-lg font-bold text-[var(--color-text-main)]/70">당신의 수준에 맞게 맞춤 플랜을 생성해 드려요.</p>
          </FadeIn>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "이제 막 시작해요",
              "성경이 처음이에요",
              "주일학교에서 배웠어요",
              "어느 정도 알고 있어요",
              "매일 말씀을 읽어요",
              "성경을 잘 알아요"
            ].map((level, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <button className="w-full bg-white px-6 py-4 rounded-2xl shadow-sm border-2 border-transparent hover:border-brand-orange-400 font-bold text-lg text-left flex justify-between items-center group transition-all">
                  {level}
                  <CheckCircle2 className="text-gray-300 group-hover:text-brand-orange-400 transition-colors" size={24} />
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Achievements Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="font-jua text-4xl mb-4">업적 달성!</h2>
            <p className="text-lg font-bold text-[var(--color-text-main)]/70">축하해요! 계속 성장하고 있어요!</p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "새싹 마스터", desc: "초급 말씀을 모두 완료했어요", icon: "🌱" },
              { title: "말씀 정복자", desc: "모든 추천 말씀을 완료했어요", icon: "👑" },
              { title: "목표 달성왕", desc: "일일 목표를 달성했어요", icon: "🎯" },
              { title: "말씀 수집가", desc: "좋아하는 말씀을 모았어요", icon: "💖" }
            ].map((badge, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-white/80 p-6 rounded-3xl shadow-sm border border-white/50 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4 drop-shadow-sm">{badge.icon}</div>
                  <h3 className="font-jua text-xl mb-2">{badge.title}</h3>
                  <p className="text-sm font-bold text-[var(--color-text-main)]/60">{badge.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-6 text-center relative">
        <div className="max-w-2xl mx-auto relative z-10">
          <FadeIn>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Smile size={40} className="text-brand-orange-500" />
            </div>
            <h2 className="font-jua text-4xl md:text-5xl mb-6">
              홈 화면에 추가하세요!
            </h2>
            <p className="text-xl font-bold text-[var(--color-text-main)]/80 mb-10">
              앱처럼 빠르게 시작할 수 있어요.<br/>
              매일매일 말씀과 함께하는 습관을 만들어보세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary px-8 py-4 text-xl flex items-center justify-center gap-2">
                <Download size={24} /> 내 맞춤 말씀 시작하기
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-[var(--color-text-main)]/10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen size={20} className="text-brand-orange-600" />
          <span className="font-jua text-xl">말씀 팡팡</span>
        </div>
        <p className="text-sm font-bold text-[var(--color-text-main)]/50">
          © 2026 말씀 팡팡 퍼즐. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
