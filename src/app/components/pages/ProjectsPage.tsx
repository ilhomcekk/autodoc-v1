import { useRef, useEffect, useMemo } from "react";
import { ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router";
import { motion, useInView } from "motion/react";
import { X, ArrowUpRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useTranslation } from "react-i18next";
import images from "../../../assets/images";

const SERVER_IMG =
  "https://images.unsplash.com/photo-1611582777035-1b4e4c77aa72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5mcmFzdHJ1Y3R1cmUlMjBzZXJ2ZXIlMjByb29tJTIwZGFya3xlbnwxfHx8fDE3NzMzODAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080";

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

export function ProjectsPage() {
  const { t } = useTranslation();
  const filters = [
    { key: "technology", label: t("InformationTechnology") },
    { key: "paymentSystems", label: t("PaymentSystems") },
    // { key: "energy", label: t("Energy") },
    // { key: "industry", label: t("Industry") },
    { key: "finance", label: t("Finance") },
    // { key: "insurance", label: t("Insurance") },
    // { key: "investment", label: t("InvestmentAndConsulting") },
    { key: "transport", label: t("Transport") },
    // { key: "logistics", label: t("Logistics") },
    { key: "infra", label: t("Infrastructure") },
    { key: "arti", label: t("ArtificialIntelligenceAndDataAnalytics") },
    {
      key: "electron",
      label: t("ElectronicDocumentManagementAndGovernmentDigitalServices"),
    },
  ];
  const projects = [
    {
      id: 1,
      title: t("transportRegistrationSystem"),
      desc: t("transportRegistrationSystemDesc"),
      category: "technology",
      task: t("transportRegistrationSystemTask"),
      solution: t("transportRegistrationSystemSolution", {
        returnObjects: true,
      }),
      result: t("transportRegistrationSystemResult"),
      photo: images.RegisterTransport,
    },
    {
      id: 4,
      title: t("justRiseGroup"),
      desc: t("justRiseGroupDesc"),
      category: "technology",
      photo: images.JustRiseGroup,
    },
    {
      id: 4,
      title: t("safeRoadYHXX"),
      desc: t("safeRoadYHXXDesc"),
      category: "technology",
      task: t("safeRoadTask"),
      solution: t("safeRoadSolution"),
      result: t("safeRoadResult"),
      photo: images.SafeRoad,
    },
    {
      id: 4,
      title: t("maxsusAloqa"),
      desc: t("maxsusAloqaDesc"),
      category: "technology",
      photo: images.MaxsusAloqa,
    },
    {
      id: 4,
      title: t("infinityPay"),
      desc: t("infinityPayDesc"),
      category: "paymentSystems",
      photo: images.InfinityPayProject,
    },
    {
      id: 4,
      title: t("expressPay"),
      desc: t("expressPayDesc"),
      category: "paymentSystems",
      photo: images.ExpressPayProject,
    },
    {
      id: 4,
      title: t("worldPay"),
      desc: t("worldPayDesc"),
      category: "paymentSystems",
      photo: images.WorldPayProject,
    },
    {
      id: 4,
      title: t("fincore"),
      desc: t("fincoreDesc"),
      category: "paymentSystems",
      photo: images.Fincore,
    },
    // {
    //   id: 4,
    //   title: t("uet"),
    //   desc: t("uetDesc"),
    //   category: "energy",
    //   photo: images.UET,
    // },
    // {
    //   id: 4,
    //   title: t("maxsusElectrTarmoqQurilish"),
    //   desc: t("maxsusElectrTarmoqQurilishDesc"),
    //   category: "energy",
    //   photo: images.MaxsusElectrTarmoqQurilish,
    // },
    // {
    //   id: 4,
    //   title: t("ozbekEnergoTamir"),
    //   desc: t("ozbekEnergoTamirDesc"),
    //   category: "energy",
    //   photo: images.OzbekEnergoTamir,
    // },
    // {
    //   id: 4,
    //   title: t("uzEnergoEngineering"),
    //   desc: t("uzEnergoEngineeringDesc"),
    //   category: "energy",
    //   photo: images.UzEnergoEngineering,
    // },
    // {
    //   id: 4,
    //   title: t("smartIntegrityMe"),
    //   desc: t("smartIntegrityMeDesc"),
    //   category: "energy",
    //   photo: images.SmartIntegrityMe,
    // },
    // {
    //   id: 4,
    //   title: t("ozEnergoSozlash"),
    //   desc: t("ozEnergoSozlashDesc"),
    //   category: "energy",
    //   photo: images.OzEnergoSozlash,
    // },
    // {
    //   id: 4,
    //   title: t("chirchiq"),
    //   desc: t("chirchiqDesc"),
    //   category: "industry",
    //   photo: images.ChirchiqMetallKonstruksiyalariZavodi,
    // },
    // {
    //   id: 4,
    //   title: t("technoCableGroup"),
    //   desc: t("technoCableGroupDesc"),
    //   category: "industry",
    //   photo: images.TechnoCableGroup,
    // },
    {
      id: 4,
      title: t("fozumur"),
      desc: t("fozumurDesc"),
      category: "finance",
      photo: images.Fozumur,
    },
    // {
    //   id: 4,
    //   title: t("finix"),
    //   desc: t("finixDesc"),
    //   category: "insurance",
    //   photo: images.Finix,
    // },
    // ===============================
    {
      id: 1,
      title: t("transportRegistrationSystem"),
      desc: t("transportRegistrationSystemDesc"),
      category: "electron",
      task: t("transportRegistrationSystemTask"),
      solution: t("transportRegistrationSystemSolution", {
        returnObjects: true,
      }),
      result: t("transportRegistrationSystemResult"),
      photo: images.RegisterTransport,
    },
    {
      id: 2,
      title: t("systemEDO"),
      desc: t("systemEDODesc"),
      category: "electron",
      task: t("systemEDOTask"),
      solution: t("systemEDOSolution"),
      result: t("systemEDOResult"),
      photo: images.DataAnalytics,
    },
    {
      id: 3,
      title: t("registerIDCards"),
      desc: t("registerIDCardsDesc"),
      category: "electron",
      task: t("registerIDCardsTask"),
      solution: t("registerIDCardsSolution"),
      result: t("registerIDCardsResult"),
      photo: images.ID,
    },
    // {
    //   id: 6,
    //   title: t("analyticsSystem"),
    //   desc: t("analyticsSystemDesc"),
    //   category: "technology",
    //   task: t("analyticsSystemTask"),
    //   solution: t("analyticsSystemSolution"),
    //   result: t("analyticsSystemResult"),
    //   photo: images.DataAnalytics,
    // },
    // {
    //   id: 8,
    //   title: t("serviceSystem"),
    //   desc: t("serviceSystemDesc"),
    //   category: "technology",
    //   task: t("serviceSystemTask"),
    //   solution: t("serviceSystemSolution"),
    //   result: t("serviceSystemResult"),
    //   photo: images.Queue,
    // },
    {
      id: 9,
      title: t("digitalServiceSystem"),
      desc: t("digitalServiceSystemDesc"),
      category: "electron",
      task: t("digitalServiceSystemTask"),
      solution: t("digitalServiceSystemSolution"),
      result: t("digitalServiceSystemResult"),
      photo: images.Kassa,
    },
    // {
    //   id: 10,
    //   title: t("uetInvest"),
    //   desc: t("uetInvestDesc"),
    //   category: "investment",
    //   photo: images.UETInvest,
    // },
    // {
    //   id: 10,
    //   title: t("uetConsulting"),
    //   desc: t("uetConsultingDesc"),
    //   category: "investment",
    //   photo: images.UETConsulting,
    // },
    {
      id: 10,
      title: t("davrSmart"),
      desc: t("davrSmartDesc"),
      category: "transport",
      photo: images.DavrSmartProject,
    },
    {
      id: 10,
      title: t("avtoTexnikKorik"),
      desc: t("avtoTexnikKorikDesc"),
      category: "transport",
      photo: images.AvtoTexnikKorik,
    },
    {
      id: 10,
      title: t("vehicleService"),
      desc: t("vehicleServiceDesc"),
      category: "transport",
      photo: images.VehicleService,
    },
    {
      id: 10,
      title: t("orientIt"),
      desc: t("orientItDesc"),
      category: "transport",
      photo: images.OrientIt,
    },
    // {
    //   id: 10,
    //   title: t("centrumLogistics"),
    //   desc: t("centrumLogisticsDesc"),
    //   category: "logistics",
    //   photo: images.CentrumLogistics,
    // },
    // {
    //   id: 10,
    //   title: t("centrumAir"),
    //   desc: t("centrumAirDesc"),
    //   category: "logistics",
    //   photo: images.CentrumAir,
    // },
    {
      id: 7,
      title: t("cashRegisterSystem"),
      desc: t("cashRegisterSystemDesc"),
      category: "infra",
      task: t("cashRegisterSystemTask"),
      solution: t("cashRegisterSystemSolution"),
      result: t("cashRegisterSystemResult"),
      photo: images.ElectronCash,
    },
    {
      id: 10,
      title: t("sayyor"),
      desc: t("sayyorDesc"),
      category: "infra",
      photo: images.Sayyor,
    },
    {
      id: 10,
      title: t("ecoSticker"),
      desc: t("ecoStickerDesc"),
      category: "infra",
      photo: images.EcologicTransport,
    },
    {
      id: 5,
      title: t("recognitionSystem"),
      desc: t("recognitionSystemDesc"),
      category: "arti",
      task: t("recognitionSystemTask"),
      solution: t("recognitionSystemSolution"),
      result: t("recognitionSystemResult"),
      photo: images.AutoInfo,
    },
    {
      id: 5,
      title: t("malumotlarniQaytaIshlash"),
      desc: t("malumotlarniQaytaIshlashDesc"),
      category: "arti",
      photo: images.MalumotlarniQaytaIshlash,
    },
  ];
  const achievements = [
    { number: "99.2%", label: t("recognitionAccuracy") },
    { number: "10K+", label: t("documentsProcessedDaily") },
    { number: "6M+", label: t("activeUsers") },
    { number: "50+", label: t("digitalCenters") },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "all";
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isManualScroll = useRef(false);

  const categories = useMemo(
    () =>
      filters
        .filter((f) => f.key !== "all")
        .map((filter) => ({
          ...filter,
          projects: projects.filter((p) => p.category === filter.key),
        })),
    [filters, projects],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const key = visible.target.getAttribute("data-category");

        if (!key) return;

        setSearchParams(key === "all" ? {} : { filter: key }, {
          replace: true,
        });
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-120px 0px -45% 0px",
      },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setSearchParams]);

  const scrollToCategory = (key: string) => {
    isManualScroll.current = true;

    if (key === "all") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const el = sectionRefs.current[key];

      if (el) {
        window.scrollTo({
          top: el.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }

    setSearchParams(key === "all" ? {} : { filter: key }, { replace: true });

    setTimeout(() => {
      isManualScroll.current = false;
    }, 700);
  };

  return (
    <div>
      {/* ========== SECTION 1 — INTRO ========== */}
      <section className="relative pt-[72px] bg-[#0a0a0a]">
        <div className="relative min-h-[50vh] flex items-end">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={SERVER_IMG}
              alt="Projects"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#4CAF50]/70 block mb-5"
                style={{ fontWeight: 600 }}
              >
                {t("portfolio")}
              </span>
              <h1
                className="text-white mb-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(32px, 5vw, 60px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                {t("projects")}
              </h1>
              <p
                className="text-white/40 max-w-[480px] text-[15px]"
                style={{ fontWeight: 300, lineHeight: 1.7 }}
              >
                {t("portfolioDesc")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 — КАТАЛОГ ПРОЕКТОВ ========== */}
      <section
        ref={(el) => {
          sectionRefs.current[scrollToCategory.key] = el;
        }}
        data-category={scrollToCategory.key}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[260px_1fr] gap-20">
            {/* Sidebar */}
            <AnimatedSection>
              <aside className="sticky top-28 hidden lg:block h-fit">
                <div className="">
                  {filters.map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => scrollToCategory(filter.key)}
                      className={`group w-full flex items-center justify-between py-3 border-b border-black/5 transition-all
                ${
                  activeFilter === filter.key
                    ? "text-[#1B5E20]"
                    : "text-[#777] hover:text-black"
                }`}
                    >
                      <span className="text-[15px] text-left">
                        {filter.label}
                      </span>

                      <ChevronRight
                        size={18}
                        className={`flex-none transition-all duration-300 ${
                          activeFilter === filter.key
                            ? "translate-x-1 text-[#1B5E20]"
                            : "group-hover:translate-x-1"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </aside>
            </AnimatedSection>

            {/* Projects */}
            <div>
              {categories.map((category) => (
                <section
                  key={category.key}
                  data-category={category.key}
                  ref={(el) => (sectionRefs.current[category.key] = el)}
                  className="mb-28 scroll-mt-28"
                >
                  <AnimatedSection>
                    <div className="flex items-center justify-between mb-10">
                      <div>
                        <span className="uppercase text-[11px] tracking-[0.3em] text-[#2E7D32]">
                          {category.label}
                        </span>

                        {/* <h2 className="text-3xl font-bold mt-2">
                          {category.label}
                        </h2> */}
                      </div>
                    </div>
                  </AnimatedSection>

                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {category.projects.map((project, i) => (
                      <AnimatedSection key={project.i} delay={i * 0.08}>
                        <div className="group cursor-pointer bg-[#fafafa] border border-black/5 hover:border-[#2E7D32]/20 transition-all duration-500">
                          <div className="relative h-[220px] overflow-hidden bg-[#eef2ee]">
                            <img
                              src={project.photo}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />

                            <ArrowUpRight
                              size={18}
                              className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 text-white transition-all"
                            />
                          </div>

                          <div className="p-4">
                            {/* <span className="text-[11px] uppercase tracking-[0.2em] text-[#2E7D32]">
                              {category.label}
                            </span> */}

                            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#1B5E20] transition-colors">
                              {project.title}
                            </h3>

                            <p className="text-[#777] leading-7 text-sm">
                              {project.desc}
                              {/* {project.desc.length > 120
                                ? project.desc.slice(0, 120) + "..."
                                : project.desc} */}
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4 — ДОСТИЖЕНИЯ ========== */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span
                className="text-[11px] tracking-[0.3em] uppercase text-[#4CAF50]/60 block mb-4"
                style={{ fontWeight: 600 }}
              >
                {t("results")}
              </span>
              <h2
                className="text-white"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                {t("projectMetrics")}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.04]">
            {achievements.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] text-center py-12 px-6 hover:bg-[#111] transition-colors duration-300">
                  <span
                    className="text-[#4CAF50] block mb-2"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(28px, 4vw, 44px)",
                      fontWeight: 800,
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.number}
                  </span>
                  <p
                    className="text-white/40 text-[13px]"
                    style={{ fontWeight: 400 }}
                  >
                    {item.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
