import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag, Clock, ArrowRight } from "lucide-react";

const relatedNews = [
  { id: "2", title: "Заголовок новости", category: "Партнерство", date: "Февраль 2026" },
  { id: "3", title: "Заголовок новости", category: "Проекты", date: "Январь 2026" },
  { id: "4", title: "Заголовок новости", category: "Компания", date: "Декабрь 2025" },
];

export function NewsArticlePage() {
  const { id } = useParams();

  return (
    <div>
      <section className="pt-[72px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-[13px] text-[#888] hover:text-[#2E7D32] transition-colors"
              style={{ fontWeight: 500 }}
            >
              <ArrowLeft size={14} /> Все новости
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="h-[320px] lg:h-[480px] bg-gradient-to-br from-[#e8ece8] to-[#dde3dd] flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-16 h-16 border border-white/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white/50 text-[11px] tracking-[0.15em] uppercase" style={{ fontWeight: 600 }}>Фото</span>
                </div>
                <span className="text-[11px] text-white/30 tracking-[0.1em] uppercase" style={{ fontWeight: 500 }}>
                  Изображение к новости
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[780px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-[12px] text-[#999]" style={{ fontWeight: 400 }}>
              <span className="flex items-center gap-1"><Calendar size={13} /> Март 2026</span>
              <span className="flex items-center gap-1"><Tag size={13} /> Технологии</span>
              <span className="flex items-center gap-1"><Clock size={13} /> 5 мин чтения</span>
            </div>

            {/* Title */}
            <h1
              className="text-[#1a1a1a] mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Заголовок новости #{id}
            </h1>

            {/* Placeholder Body */}
            <div className="space-y-6">
              {/* Lead paragraph placeholder */}
              <div className="space-y-3">
                <div className="h-[16px] bg-[#f0f2f0] rounded-sm w-full" />
                <div className="h-[16px] bg-[#f0f2f0] rounded-sm w-[94%]" />
                <div className="h-[16px] bg-[#f0f2f0] rounded-sm w-[88%]" />
              </div>

              <div className="h-6" />

              {/* Body paragraphs */}
              <div className="space-y-3">
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-full" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-[96%]" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-full" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-[82%]" />
              </div>

              {/* Quote block */}
              <div className="my-10 pl-6 border-l-2 border-[#2E7D32]/30">
                <div className="space-y-3 py-4">
                  <div className="h-[16px] bg-[#f0f2f0] rounded-sm w-[90%]" />
                  <div className="h-[16px] bg-[#f0f2f0] rounded-sm w-[75%]" />
                </div>
                <span className="text-[12px] text-[#bbb] italic">— Цитата будет добавлена</span>
              </div>

              <div className="space-y-3">
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-full" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-[91%]" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-full" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-[68%]" />
              </div>

              {/* Inline image placeholder */}
              <div className="my-10 h-[280px] bg-[#f5f5f5] border border-dashed border-black/[0.06] flex items-center justify-center">
                <span className="text-[11px] text-[#ccc] tracking-[0.1em] uppercase" style={{ fontWeight: 500 }}>
                  Дополнительное изображение
                </span>
              </div>

              <div className="space-y-3">
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-full" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-[88%]" />
                <div className="h-[14px] bg-[#f5f5f5] rounded-sm w-[72%]" />
              </div>
            </div>

            <p className="mt-12 text-[12px] text-[#ccc] italic text-center" style={{ fontWeight: 400 }}>
              Содержание статьи будет добавлено позднее
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16 lg:py-24 bg-[#fafafa] border-t border-black/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h3
            className="text-[#1a1a1a] mb-10"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}
          >
            Читайте также
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedNews.map((item) => (
              <Link key={item.id} to={`/news/${item.id}`} className="group block bg-white border border-black/[0.04] hover:border-[#2E7D32]/15 transition-all duration-500">
                <div className="h-[160px] bg-gradient-to-br from-[#e8ece8] to-[#dde3dd] relative">
                  <div className="absolute inset-0 bg-[#1B5E20]/0 group-hover:bg-[#1B5E20]/8 transition-colors duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] text-[#bbb] block mb-2" style={{ fontWeight: 400 }}>{item.date}</span>
                  <h4 className="text-[#1a1a1a] group-hover:text-[#1B5E20] transition-colors" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4 }}>
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}