import { useRef, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import images from "../../../assets/images";
import { useTranslation } from "react-i18next";

const HERO_IMG =
  "https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBhZXJpYWwlMjB2aWV3JTIwbmlnaHR8ZW58MXx8fHwxNzczMzgwMDY3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const TASHKENT_IMG =
  "https://images.unsplash.com/photo-1743412009452-331949b60907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVemJla2lzdGFuJTIwVGFzaGtlbnQlMjBjaXR5c2NhcGUlMjBtb2Rlcm58ZW58MXx8fHwxNzczMzgwMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080";

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HomePage() {
  const { t, i18n } = useTranslation();
  const partners = [
    images.ExpressPay,
    images.WorldPay,
    images.OrientIT,
    images.Paynet,
    images.AloqaBank,
    images.SmartBank,
    images.UniversalBank,
    images.MyBank,
    images.IpakYoliBank,
    images.UzTelecom,
    images.CyberPark,
    images.ASBT,
  ]
  const videos = {
    uz: images.AnonsUzVideo,
    ru: images.AnonsRuVideo,
    en: images.AnonsEngVideo,
  };
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };
  const directions = [
    {
      id: 1,
      title: t("digitalizationOfPublicServices"),
      desc: t("digitalizationOfPublicServicesDesc"),
      image: images.DavlatXizmatlari,
      filter: "edo",
    },
    {
      id: 2,
      title: t("intelligentSystemsAndAnalytics"),
      desc: t("intelligentSystemsAndAnalyticsDesc"),
      image: images.AutoInfo,
      filter: "ai",
    },
    {
      id: 3,
      title: t("digitalInfrastructure"),
      desc: t("digitalInfrastructureDesc"),
      image: images.Infratuzilma,
      filter: "infra",
    },
  ];
  const stats = [
    { number: "50+", label: t("50projects"), sublabel: t("implemented") },
    { number: "12+", label: t("state"), sublabel: t("partners") },
    { number: "14+", label: t("commercial"), sublabel: t("partners") },
  ];

  return (
    <div>
      {/* ========== SECTION 1 — VIDEO HERO ========== */}
      <section
        className="relative h-screen min-h-[600px] overflow-hidden bg-[#0a0a0a]"
        onMouseMove={handleMouseMove}
      >
        {/* Background Image with parallax */}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: mousePos.x * -20,
            y: mousePos.y * -20,
            scale: 1.08,
          }}
          transition={{ type: "tween", duration: 1.5, ease: "easeOut" }}
        >
          <ImageWithFallback
            src={HERO_IMG}
            alt="AUTODOC HOLDING"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        {/* Animated grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Green accent line */}
        <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-[2px] h-[120px] bg-gradient-to-b from-transparent via-[#4CAF50]/60 to-transparent hidden lg:block" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 lg:pb-32 max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.06] backdrop-blur-md border border-white/[0.08] text-white/70 text-[11px] tracking-[0.25em] uppercase"
                style={{ fontWeight: 500 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                {t("technologyHolding")}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-white mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(38px, 7vw, 88px)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              AUTODOC
              <br />
              <span className="text-white/90">HOLDING</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white/50 max-w-[500px] mb-10"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(15px, 1.3vw, 18px)",
                fontWeight: 300,
                lineHeight: 1.7,
                letterSpacing: "0.01em",
              }}
            >
              {t("digitalTransformation")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2E7D32] text-white text-[12px] sm:text-[13px] tracking-[0.08em] uppercase hover:bg-[#1B5E20] transition-all duration-500"
                style={{ fontWeight: 600 }}
              >
                {t("seeProjects")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-white text-[12px] sm:text-[13px] tracking-[0.08em] uppercase hover:bg-white/[0.12] transition-all duration-500"
                style={{ fontWeight: 500 }}
              >
                {t("contact")}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Video play hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={heroLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={() => setShowVideoModal(true)}
            className="bg-[#2E7D32] px-6 py-[2px] absolute right-6 lg:right-12 bottom-16 sm:bottom-20 lg:bottom-32 hidden md:flex items-center cursor-pointer group"
          >
            <span
              className="text-white text-[13px] uppercase tracking-[0.15em] uppercase group-hover:text-white/50 transition-colors"
              style={{ fontWeight: 500 }}
            >
              {t("seeVideo")}
            </span>
            <div className="w-12 h-12 rounded-full  flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/[0.05] transition-all duration-500">
              <Play size={14} className="text-white ml-0.5" />
            </div>
          </motion.button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 via-white/20 to-white/0 animate-pulse" />
        </motion.div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowVideoModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#0a0a0a] w-full max-w-[800px] aspect-video flex items-center justify-center"
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] transition-all z-10"
            >
              <span className="text-[18px]">&times;</span>
            </button>
            <video
              key={i18n.language}
              // @ts-ignore
              src={videos[i18n.language]}
              controls
            ></video>
            {/* <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border border-white/10 flex items-center justify-center">
                <Play size={28} className="text-white/30 ml-1" />
              </div>
              <p className="text-white/30 text-[13px] tracking-[0.1em] uppercase" style={{ fontWeight: 500 }}>
                Видео будет добавлено
              </p>
              <p className="text-white/15 text-[11px] mt-2">Placeholder для корпоративного видео</p>
            </div> */}
          </motion.div>
        </div>
      )}

      {/* ========== SECTION 2 — О ХОЛДИНГЕ ========== */}
      <section className="py-16 sm:py-24 lg:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
            {/* Left Column - Label */}
            <AnimatedSection className="lg:col-span-4">
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32]"
                style={{ fontWeight: 600 }}
              >
                {t("aboutHolding")}
              </span>
              <div className="w-12 h-[1px] bg-[#2E7D32]/30 mt-4" />
            </AnimatedSection>

            {/* Right Column - Content */}
            <AnimatedSection className="lg:col-span-8" delay={0.1}>
              <h2
                className="text-[#1a1a1a] mb-8"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 44px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                {t("createDigitalFuture")},
                <br className="hidden lg:block" />
                <span className="text-[#1a1a1a]/60">
                  {t("createDigitalFutureDesc")}
                </span>{" "}
                {t("withoutBureaucracy")}.
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-10">
                {[
                  t("digitalizationOfPublicServices"),
                  t("intelligentSystemsAndAnalytics"),
                  t("digitalInfrastructure"),
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#f5f7f5] border border-[#e8ece8] text-[#2E7D32] text-[11px] sm:text-[12px] tracking-[0.04em]"
                    style={{ fontWeight: 500 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 — СТАТИСТИКА ========== */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-[960px] mx-auto px-6 lg:px-12 relative flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 w-full place-items-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div
                  className={`py-10 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-12 ${i < 2 ? "sm:border-r border-white/[0.06]" : ""} ${i > 0 ? "border-t sm:border-t-0 border-white/[0.06]" : ""} text-center w-full flex flex-col items-center justify-center`}
                >
                  <span
                    className="text-[#4CAF50] block mb-3"
                    style={{
                      fontSize: "clamp(42px, 6vw, 72px)",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.number}
                  </span>
                  <p
                    className="text-white/80 text-[14px] sm:text-[15px]"
                    style={{ fontWeight: 500, lineHeight: 1.5 }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="text-white/30 text-[12px] sm:text-[13px]"
                    style={{ fontWeight: 400 }}
                  >
                    {stat.sublabel}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4 — НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ ========== */}
      <section className="py-16 sm:py-24 lg:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 lg:mb-24 gap-4">
              <div>
                <span
                  className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4"
                  style={{ fontWeight: 600 }}
                >
                  {t("directions")}
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
                  {t("directionsOfActivity")}
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden lg:flex items-center gap-2 text-[13px] text-[#2E7D32] tracking-[0.04em] hover:gap-3 transition-all duration-300"
                style={{ fontWeight: 500 }}
              >
                {t("allProjects")} <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-4">
            {directions.map((dir, i) => (
              <AnimatedSection key={dir.id} delay={i * 0.1}>
                <Link
                  to={`/projects?filter=${dir.filter}`}
                  className="group block relative overflow-hidden bg-[#fafafa] hover:bg-[#f5f7f5] transition-all duration-700"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    {/* Image */}
                    <div className="lg:col-span-5 h-[220px] sm:h-[280px] lg:h-[360px] overflow-hidden relative">
                      <ImageWithFallback
                        src={dir.image}
                        alt={dir.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#fafafa] group-hover:to-[#f5f7f5] transition-colors duration-700 hidden lg:block" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-16">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-[11px] tracking-[0.2em] uppercase text-[#2E7D32]/60"
                          style={{ fontWeight: 600 }}
                        >
                          0{dir.id}
                        </span>
                        <div className="w-8 h-[1px] bg-[#2E7D32]/20" />
                      </div>
                      <h3
                        className="text-[#1a1a1a] mb-4 group-hover:text-[#1B5E20] transition-colors duration-500"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "clamp(20px, 2.5vw, 30px)",
                          fontWeight: 700,
                          lineHeight: 1.2,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {dir.title}
                      </h3>
                      <p
                        className="text-[#666] text-[13px] sm:text-[14px] leading-[1.8] max-w-[440px]"
                        style={{ fontWeight: 400 }}
                      >
                        {dir.desc}
                      </p>
                      <div
                        className="mt-6 sm:mt-8 flex items-center gap-2 text-[12px] tracking-[0.1em] uppercase text-[#2E7D32] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                        style={{ fontWeight: 600 }}
                      >
                        {t("moreDetails")} <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile "All projects" link */}
          <div className="lg:hidden mt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[13px] text-[#2E7D32] tracking-[0.04em]"
              style={{ fontWeight: 500 }}
            >
              {t("allProjects")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5 — ПАРТНЕРЫ ========== */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#fafafa] border-y border-black/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-12 sm:mb-16">
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4"
                style={{ fontWeight: 600 }}
              >
                {t("partners")}
              </span>
              <h2
                className="text-[#1a1a1a]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(24px, 3vw, 38px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                {t("trustUs")}
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-[1px] bg-black/[0.04]">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="bg-white h-[120px] flex items-center justify-center py-6 sm:py-8 px-4 group hover:bg-[#f5f7f5] transition-colors duration-300"
                >
                  <img src={partner} className="h-[70%]" alt="" />
                  {/* <span
                    className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-[#999] group-hover:text-[#2E7D32] transition-colors duration-300"
                    style={{ fontWeight: 600 }}
                  >
                    {partner}
                  </span> */}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10 sm:mt-12">
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 text-[13px] text-[#2E7D32] tracking-[0.04em] hover:gap-3 transition-all duration-300"
                style={{ fontWeight: 500 }}
              >
                {t("allPartners")} <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SECTION 6 — CTA BLOCK ========== */}
      <section className="relative py-20 sm:py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={TASHKENT_IMG}
            alt="Tashkent"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20]/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#4CAF50]/60 block mb-6"
              style={{ fontWeight: 600 }}
            >
              {t("cooperation")}
            </span>
            <h2
              className="text-white mb-6 mx-auto"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                maxWidth: "700px",
              }}
            >
              {t("readyToDiscuss")}
            </h2>
            <p
              className="text-white/40 text-[14px] sm:text-[15px] mb-10 sm:mb-12 max-w-[460px] mx-auto"
              style={{ fontWeight: 300, lineHeight: 1.7 }}
            >
              {t("contactUsToDiscuss")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-[#2E7D32] text-white text-[13px] tracking-[0.08em] uppercase hover:bg-[#1B5E20] transition-all duration-500"
                style={{ fontWeight: 600 }}
              >
                {t("contact")}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 border border-white/[0.15] text-white text-[13px] tracking-[0.08em] uppercase hover:bg-white/[0.06] transition-all duration-500"
                style={{ fontWeight: 500 }}
              >
                {t("aboutHolding")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
