import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  User,
  GripHorizontal,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";
import images from "../../../assets/images";

const BUILDING_IMG =
  "https://images.unsplash.com/photo-1765279077820-d3f4f2bcdca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZyUyMGdsYXNzJTIwZmFjYWRlJTIwbW9kZXJufGVufDF8fHx8MTc3MzM4MDA3MXww&ixlib=rb-4.1.0&q=80&w=1080";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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

export function AboutPage() {
  const { t } = useTranslation();
  const timelineYears = [
    {
      year: "2022",
      title: t("foundingCompany"),
      desc: t("foundingCompanyDesc"),
      detail: t("foundingCompanyDetail"),
      photo: images.BlackLogoHolding,
    },
    {
      year: "2022",
      title: t("firstProject"),
      desc: t("firstProjectDesc"),
      detail: t("firstProjectDetail"),
      photo: images.FirstProject,
    },
    {
      year: "2023",
      title: t("expensionDirections"),
      desc: t("expensionDirectionsDesc"),
      detail: t("expensionDirectionsDetail"),
      photo: images.SafeRoad,
    },
    {
      year: "2023",
      title: t("governmentPrivatePartnership"),
      desc: t("governmentPrivatePartnershipDesc"),
      detail: t("governmentPrivatePartnershipDetail"),
      photo: images.Expansion,
    },
    {
      year: "2023",
      title: t("infrastructureDevelopment"),
      desc: t("infrastructureDevelopmentDesc"),
      detail: t("infrastructureDevelopmentDetail"),
      photo: images.Infra,
    },
    {
      year: "2025",
      title: t("formationHolding"),
      desc: t("formationHoldingDesc"),
      detail: t("formationHoldingDetail"),
      photo: images.Infratuzilma,
    },
    {
      year: "2025",
      title: t("ecoSticker"),
      desc: t("ecoStickerDesc"),
      detail: t("ecoStickerDetail"),
      photo: images.EcoSticker,
    },
  ];
  const leadership = [
    {
      id: 1,
      name: "Fahriddinov Sardor",
      position: t("chairmanHolding"),
      bio: "Опыт управления крупными технологическими проектами в государственном секторе. Руководит стратегическим развитием холдинга и координирует работу всех направлений.",
      photo: images.Management1,
    },
    {
      id: 2,
      name: "Inogamov Sherzod",
      position: t("directorStrategy"),
      bio: "Отвечает за операционную деятельность холдинга, управление проектами и взаимодействие с ключевыми партнерами. Обеспечивает эффективность всех бизнес-процессов.",
      photo: images.Management2,
    },
    {
      id: 3,
      name: "Umarov Murod",
      position: t("investmentDirector"),
      bio: "Руководит технологическим развитием холдинга, определяет архитектуру решений и внедрение инновационных технологий. Курирует все технические команды.",
      photo: images.Management3,
    },
    {
      id: 4,
      name: "Karimov Shamsiddin",
      position: t("directorInformationTechnology"),
      bio: "Управляет финансовой стратегией холдинга, инвестиционными процессами и экономической эффективностью проектов. Обеспечивает финансовую устойчивость компании.",
      photo: images.Management4,
    },
  ];
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof leadership)[0] | null
  >(null);
  const [selectedYear, setSelectedYear] = useState<
    (typeof timelineYears)[0] | null
  >(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll to hash section on mount or when navigating from another page
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = 420;
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* ========== SECTION 1 — INTRO ========== */}
      <section className="relative pt-[72px] overflow-hidden bg-[#0a0a0a]">
        <div className="relative min-h-[50vh] sm:min-h-[65vh] flex items-end">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={BUILDING_IMG}
              alt="AUTODOC Building"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 sm:pb-20 lg:pb-28 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#4CAF50]/70 block mb-5"
                style={{ fontWeight: 600 }}
              >
                {t("aboutCompany")}
              </span>
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(32px, 5vw, 60px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                {t("aboutHolding")}
              </h1>
              <p
                className="text-white/40 max-w-[560px]"
                style={{
                  fontSize: "clamp(14px, 1.2vw, 17px)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                AUTODOC HOLDING — {t("aboutHoldingDesc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Statement Band */}
      <section className="bg-[#f8faf8] border-b border-black/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="w-10 h-10 flex items-center justify-center border border-[#2E7D32]/20">
                  <span
                    className="text-[#2E7D32] text-[20px]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    "
                  </span>
                </div>
              </div>
              <div className="lg:col-span-9">
                <blockquote
                  className="text-[#1a1a1a]/80"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(18px, 2.2vw, 26px)",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    fontStyle: "italic",
                  }}
                >
                  {t("weBelieve")}
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SECTION 2 — ИСТОРИЯ ========== */}
      <section
        id="history"
        className="py-16 sm:py-24 lg:py-40 bg-white overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
              <div>
                <span
                  className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4"
                  style={{ fontWeight: 600 }}
                >
                  {t("history")}
                </span>
                <h2
                  className="text-[#1a1a1a]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(26px, 3.5vw, 44px)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {t("historyHolding")}
                </h2>
              </div>

              {/* Timeline Controls */}
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-4 text-[#999]">
                  <GripHorizontal size={14} />
                  <span
                    className="text-[11px] tracking-[0.1em] uppercase"
                    style={{ fontWeight: 500 }}
                  >
                    {t("scroll")}
                  </span>
                </div>
                <button
                  onClick={() => scrollTimeline("left")}
                  className="w-11 h-11 border border-black/[0.08] flex items-center justify-center hover:bg-[#f5f7f5] hover:border-[#2E7D32]/20 transition-all duration-300"
                >
                  <ChevronLeft size={18} className="text-[#666]" />
                </button>
                <button
                  onClick={() => scrollTimeline("right")}
                  className="w-11 h-11 border border-black/[0.08] flex items-center justify-center hover:bg-[#f5f7f5] hover:border-[#2E7D32]/20 transition-all duration-300"
                >
                  <ChevronRight size={18} className="text-[#666]" />
                </button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p
              className="text-[#999] text-[13px] mb-12 tracking-[0.02em]"
              style={{ fontWeight: 400 }}
            >
              {t("clickToYear")}
            </p>
          </AnimatedSection>
        </div>

        {/* Horizontal Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            {/* Timeline track line */}
            <div className="absolute top-[100px] left-0 right-0 h-[1px] bg-black/[0.06]" />

            <div
              ref={timelineRef}
              className="overflow-x-auto pl-6 lg:pl-12 pr-6"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
              <div className="flex gap-0 min-w-max pb-8 pt-4">
                {timelineYears.map((item, index) => (
                  <button
                    key={index}
                    className="relative group text-left"
                    style={{ width: "340px", flexShrink: 0 }}
                    onClick={() => setSelectedYear(item)}
                  >
                    {/* Year Marker */}
                    <div className="relative mb-12">
                      <span
                        className="text-[#e8ece8] group-hover:text-[#c8e6c9] transition-colors duration-500 block"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "64px",
                          fontWeight: 800,
                          lineHeight: 1,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {item.year}
                      </span>
                      {/* Dot on timeline */}
                      <div className="absolute top-[88px] left-0 flex items-center">
                        <div className="w-3 h-3 rounded-full border-2 border-[#2E7D32] bg-white group-hover:bg-[#2E7D32] transition-colors duration-300 relative z-10" />
                        <div className="w-full h-[1px] bg-black/[0.06]" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="pr-8 sm:pr-12">
                      <div className="bg-[#fafafa] border border-black/[0.04] p-6 sm:p-7 group-hover:border-[#2E7D32]/15 group-hover:bg-[#f8faf8] transition-all duration-500">
                        {/* Placeholder Image Slot */}
                        <div className="w-full h-[120px] sm:h-[140px] bg-[#f0f2f0] mb-5 flex items-center justify-center border border-dashed border-black/[0.06] group-hover:border-[#2E7D32]/15 transition-colors">
                          <img
                            src={item.photo}
                            className="max-w-full max-h-full text-center"
                            alt=""
                          />
                          {/* <div className="text-center">
                            <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#e8ece8] flex items-center justify-center">
                              <span className="text-[#aaa] text-[10px]">+</span>
                            </div>
                            <span
                              className="text-[10px] text-[#bbb] tracking-[0.1em] uppercase"
                              style={{ fontWeight: 500 }}
                            >
                              Фото
                            </span>
                          </div> */}
                        </div>

                        <h4
                          className="text-[#1a1a1a] mb-2"
                          style={{
                            fontSize: "15px",
                            fontWeight: 600,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-[#888] text-[13px] leading-[1.7]"
                          style={{ fontWeight: 400 }}
                        >
                          {item.desc}
                        </p>
                        <div
                          className="mt-4 text-[11px] text-[#2E7D32] tracking-[0.08em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ fontWeight: 600 }}
                        >
                          {t("moreDetails")} →
                        </div>
                      </div>
                    </div>
                  </button>
                ))}

                {/* "More to come" card */}
                <div
                  style={{ width: "240px", flexShrink: 0 }}
                  className="flex items-center justify-center"
                >
                  <div className="text-center px-8">
                    <div className="w-16 h-16 mx-auto mb-4 border border-dashed border-[#2E7D32]/20 flex items-center justify-center">
                      <span
                        className="text-[#2E7D32]/40 text-[24px]"
                        style={{ fontWeight: 300 }}
                      >
                        +
                      </span>
                    </div>
                    <span
                      className="text-[12px] text-[#999] tracking-[0.1em] uppercase"
                      style={{ fontWeight: 500 }}
                    >
                      {t("toBeContuned")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </AnimatedSection>
      </section>

      {/* ========== YEAR DETAIL MODAL ========== */}
      <AnimatePresence>
        {selectedYear && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedYear(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white w-full max-w-[640px] max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedYear(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:bg-black/[0.04] transition-colors z-10"
              >
                <X size={18} />
              </button>

              {/* Year hero */}
              <div className="bg-gradient-to-br from-[#1B5E20] to-[#0a0a0a] px-8 sm:px-12 pt-12 pb-16 relative">
                <span
                  className="text-white/10 absolute right-8 top-4"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(80px, 15vw, 140px)",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {selectedYear.year}
                </span>
                <span
                  className="text-[11px] tracking-[0.3em] uppercase text-[#4CAF50]/60 block mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {t("historyHolding")}
                </span>
                <h3
                  className="text-white relative z-10"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {selectedYear.year}
                </h3>
              </div>

              <div className="p-8 sm:p-12 -mt-6 relative bg-white">
                <h4
                  className="text-[#1a1a1a] mb-4"
                  style={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.3 }}
                >
                  {selectedYear.title}
                </h4>
                <p
                  className="text-[#666] text-[14px] leading-[1.8] mb-6"
                  style={{ fontWeight: 400 }}
                >
                  {selectedYear.detail}
                </p>

                {/* Optional image placeholder */}
                <div className="h-[180px] bg-[#f5f5f5] border border-dashed border-black/[0.08] flex items-center justify-center mb-6">
                  <img
                    src={selectedYear.photo}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                  {/* <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#e8ece8] flex items-center justify-center">
                      <span className="text-[#aaa] text-[12px]">+</span>
                    </div>
                    <span
                      className="text-[11px] text-[#bbb] tracking-[0.1em] uppercase"
                      style={{ fontWeight: 500 }}
                    >
                      Фото / Иллюстрация
                    </span>
                  </div> */}
                </div>

                {/* <p
                  className="text-[12px] text-[#ccc] italic"
                  style={{ fontWeight: 400 }}
                >
                  Детальная информация будет дополнена позднее
                </p> */}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========== SECTION 3 — РУКОВОДСТВО ========== */}
      <section
        id="leadership"
        className="py-16 sm:py-24 lg:py-40 bg-[#fafafa] border-t border-black/[0.04]"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4"
              style={{ fontWeight: 600 }}
            >
              {t("team")}
            </span>
            <h2
              className="text-[#1a1a1a] mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {t("management")}
            </h2>
            {/* <p
              className="text-[#999] text-[13px] mb-12 sm:mb-16 tracking-[0.02em]"
              style={{ fontWeight: 400 }}
            >
              {t("managementDesc")}
            </p> */}
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.id} delay={i * 0.1}>
                <div
                  className="group cursor-pointer"
                  // onClick={() => setSelectedLeader(person)}
                >
                  {/* Photo Placeholder */}
                  <div className="aspect-[3/4] bg-gradient-to-b from-[#e8ece8] to-[#dde3dd] mb-5 overflow-hidden relative">
                    <img
                      src={person.photo}
                      className="h-full w-full object-cover object-top"
                      alt=""
                    />
                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-500">
                        <User size={28} className="text-[#aaa]" />
                      </div>
                      <span
                        className="text-[10px] text-[#999] tracking-[0.15em] uppercase"
                        style={{ fontWeight: 500 }}
                      >
                        Фото руководителя
                      </span>
                    </div> */}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#1B5E20]/0 group-hover:bg-[#1B5E20]/10 transition-colors duration-500" />
                    {/* Number badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[11px] text-[#999]/60 tracking-[0.1em]"
                        style={{ fontWeight: 600 }}
                      >
                        0{person.id}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <h4
                    className="text-[#1a1a1a] mb-1 group-hover:text-[#2E7D32] transition-colors duration-300"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {person.name}
                  </h4>
                  <p
                    className="text-[#888] text-[13px]"
                    style={{ fontWeight: 400 }}
                  >
                    {person.position}
                  </p>
                  {/* <div
                    className="mt-3 flex items-center gap-1 text-[11px] text-[#2E7D32] tracking-[0.08em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontWeight: 500 }}
                  >
                    {t("biography")} →
                  </div> */}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BIOGRAPHY MODAL ========== */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedLeader(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.35 }}
              className="relative bg-white w-full max-w-[780px] max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:bg-black/[0.04] transition-colors z-10"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Portrait Placeholder */}
                <div className="md:col-span-2 bg-gradient-to-b from-[#e8ece8] to-[#dde3dd] min-h-[250px] md:min-h-full flex items-center justify-center">
                  <div className="text-center py-12">
                    <div className="w-24 h-24 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-3">
                      <User size={36} className="text-[#aaa]" />
                    </div>
                    <span
                      className="text-[10px] text-[#999] tracking-[0.15em] uppercase"
                      style={{ fontWeight: 500 }}
                    >
                      Портрет
                    </span>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="md:col-span-3 p-8 lg:p-12">
                  <span
                    className="text-[11px] tracking-[0.2em] uppercase text-[#2E7D32] block mb-5"
                    style={{ fontWeight: 600 }}
                  >
                    Биография
                  </span>
                  <h3
                    className="text-[#1a1a1a] mb-2"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "26px",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {selectedLeader.name}
                  </h3>
                  <p
                    className="text-[#2E7D32] text-[14px] mb-8"
                    style={{ fontWeight: 500 }}
                  >
                    {selectedLeader.position}
                  </p>

                  {/* Bio text or placeholder */}
                  {selectedLeader.bio ? (
                    <p
                      className="text-[#555] text-[14px] leading-[1.8] mb-6"
                      style={{ fontWeight: 400 }}
                    >
                      {selectedLeader.bio}
                    </p>
                  ) : null}

                  {/* Skeleton placeholder */}
                  <div className="space-y-4">
                    <div className="h-[14px] bg-[#f0f2f0] rounded-sm w-full" />
                    <div className="h-[14px] bg-[#f0f2f0] rounded-sm w-[95%]" />
                    <div className="h-[14px] bg-[#f0f2f0] rounded-sm w-[88%]" />
                    <div className="h-[14px] bg-[#f0f2f0] rounded-sm w-full" />
                    <div className="h-[14px] bg-[#f0f2f0] rounded-sm w-[72%]" />
                  </div>

                  <p
                    className="mt-8 text-[12px] text-[#bbb] italic"
                    style={{ fontWeight: 400 }}
                  >
                    Полная биографическая информация будет добавлена позднее
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
