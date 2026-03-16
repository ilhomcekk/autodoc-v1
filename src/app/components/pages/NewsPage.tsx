import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const newsItems = [
  { id: "1", category: "Технологии", date: "Март 2026", title: "Заголовок новости", desc: "Краткое описание новости будет добавлено позднее. Эта область зарезервирована для текста публикации." },
  { id: "2", category: "Партнерство", date: "Февраль 2026", title: "Заголовок новости", desc: "Краткое описание новости будет добавлено позднее. Эта область зарезервирована для текста публикации." },
  { id: "3", category: "Проекты", date: "Январь 2026", title: "Заголовок новости", desc: "Краткое описание новости будет добавлено позднее. Эта область зарезервирована для текста публикации." },
  { id: "4", category: "Компания", date: "Декабрь 2025", title: "Заголовок новости", desc: "Краткое описание новости будет добавлено позднее. Эта область зарезервирована для текста публикации." },
  { id: "5", category: "Технологии", date: "Ноябрь 2025", title: "Заголовок новости", desc: "Краткое описание новости будет добавлено позднее. Эта область зарезервирована для текста публикации." },
  { id: "6", category: "Проекты", date: "Октябрь 2025", title: "Заголовок новости", desc: "Краткое описание новости будет добавлено позднее. Эта область зарезервирована для текста публикации." },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function NewsPage() {
  return (
    <div>
      {/* ========== SECTION 1 — INTRO ========== */}
      <section className="pt-[72px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-5" style={{ fontWeight: 600 }}>
              Медиа
            </span>
            <h1
              className="text-[#1a1a1a] mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(32px, 5vw, 60px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Новости
            </h1>
            <p className="text-[#888] max-w-[480px] text-[15px]" style={{ fontWeight: 300, lineHeight: 1.7 }}>
              Актуальные события, проекты и достижения AUTODOC HOLDING
            </p>
          </motion.div>
        </div>
        <div className="h-[1px] bg-black/[0.04]" />
      </section>

      {/* ========== SECTION 2 — FEATURED ========== */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <AnimatedSection>
            <Link to="/news/1" className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Featured Image Placeholder */}
                <div className="lg:col-span-7 h-[320px] lg:h-[440px] bg-gradient-to-br from-[#e8ece8] to-[#dde3dd] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border border-white/30 flex items-center justify-center mx-auto mb-3 group-hover:border-white/50 transition-colors">
                        <span className="text-white/50 text-[11px] tracking-[0.2em] uppercase" style={{ fontWeight: 600 }}>Фото</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#1B5E20]/0 group-hover:bg-[#1B5E20]/10 transition-colors duration-500" />
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 bg-[#2E7D32] text-white text-[10px] tracking-[0.15em] uppercase" style={{ fontWeight: 600 }}>
                      Главное
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="lg:col-span-5 lg:pl-8">
                  <div className="flex items-center gap-3 mb-4 text-[12px] text-[#999]" style={{ fontWeight: 400 }}>
                    <span className="flex items-center gap-1"><Calendar size={12} /> Март 2026</span>
                    <span className="flex items-center gap-1"><Tag size={12} /> Технологии</span>
                  </div>
                  <h2
                    className="text-[#1a1a1a] mb-4 group-hover:text-[#1B5E20] transition-colors duration-300"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 'clamp(22px, 3vw, 32px)',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Заголовок главной новости
                  </h2>
                  <p className="text-[#888] text-[14px] leading-[1.8] mb-6" style={{ fontWeight: 400 }}>
                    Подробное описание главной новости будет добавлено позднее. Эта область зарезервирована для текста ведущей публикации редакционного блока.
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] text-[#2E7D32] tracking-[0.08em] uppercase group-hover:gap-3 transition-all duration-300" style={{ fontWeight: 600 }}>
                    Читать далее <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SECTION 2 — NEWS GRID ========== */}
      <section className="py-16 lg:py-24 bg-[#fafafa] border-t border-black/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <h3
                className="text-[#1a1a1a]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                }}
              >
                Все новости
              </h3>
              <p className="text-[12px] text-[#999] tracking-[0.02em]" style={{ fontWeight: 400 }}>
                Дополню после получения инфы
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsItems.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.08}>
                <Link to={`/news/${item.id}`} className="group block bg-white border border-black/[0.04] hover:border-[#2E7D32]/15 transition-all duration-500">
                  {/* Image placeholder */}
                  <div className="h-[200px] bg-gradient-to-br from-[#e8ece8] to-[#dde3dd] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
                        <span className="text-white/40 text-[9px] tracking-[0.15em] uppercase" style={{ fontWeight: 600 }}>Фото</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#1B5E20]/0 group-hover:bg-[#1B5E20]/8 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-[11px] text-[#bbb]" style={{ fontWeight: 400 }}>
                      <span className="px-2 py-0.5 bg-[#f5f5f5] text-[#888] text-[10px] tracking-[0.1em] uppercase" style={{ fontWeight: 600 }}>
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h4
                      className="text-[#1a1a1a] mb-2 group-hover:text-[#1B5E20] transition-colors duration-300"
                      style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.4 }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[#999] text-[13px] leading-[1.7]" style={{ fontWeight: 400 }}>
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}