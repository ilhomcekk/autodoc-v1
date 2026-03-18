import { useRef, useState } from "react";
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
    { key: "all", label: t("all") },
    { key: "edo", label: t("electronicDocumentFlow") },
    { key: "ai", label: t("AIProjects") },
    { key: "infra", label: t("infrastructureProjects") },
  ];
  const projects = [
    {
      id: 1,
      title: t("transportRegistrationSystem"),
      desc: t("transportRegistrationSystemDesc"),
      category: "edo",
      task: t("transportRegistrationSystemTask"),
      solution: t("transportRegistrationSystemSolution"),
      result: t("transportRegistrationSystemResult"),
      photo: images.RegisterTransport,
    },
    {
      id: 2,
      title: t("systemEDO"),
      desc: t("systemEDODesc"),
      category: "edo",
      task: t("systemEDOTask"),
      solution: t("systemEDOSolution"),
      result: t("systemEDOResult"),
      photo: images.DataAnalytics,
    },
    {
      id: 3,
      title: t("registerIDCards"),
      desc: t("registerIDCardsDesc"),
      category: "edo",
      task: t("registerIDCardsTask"),
      solution: t("registerIDCardsSolution"),
      result: t("registerIDCardsResult"),
      photo: images.ID,
    },
    {
      id: 4,
      title: t("safeRoad"),
      desc: t("safeRoadDesc"),
      category: "infra",
      task: t("safeRoadTask"),
      solution: t("safeRoadSolution"),
      result: t("safeRoadResult"),
      photo: images.SafeRoad,
    },
    {
      id: 5,
      title: t("recognitionSystem"),
      desc: t("recognitionSystemDesc"),
      category: "ai",
      task: t("recognitionSystemTask"),
      solution: t("recognitionSystemSolution"),
      result: t("recognitionSystemResult"),
      photo: images.AutoInfo,
    },
    {
      id: 6,
      title: t("analyticsSystem"),
      desc: t("analyticsSystemDesc"),
      category: "ai",
      task: t("analyticsSystemTask"),
      solution: t("analyticsSystemSolution"),
      result: t("analyticsSystemResult"),
      photo: images.DataAnalytics,
    },
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
      id: 8,
      title: t("serviceSystem"),
      desc: t("serviceSystemDesc"),
      category: "infra",
      task: t("serviceSystemTask"),
      solution: t("serviceSystemSolution"),
      result: t("serviceSystemResult"),
      photo: images.Queue,
    },
    {
      id: 9,
      title: t("digitalServiceSystem"),
      desc: t("digitalServiceSystemDesc"),
      category: "infra",
      task: t("digitalServiceSystemTask"),
      solution: t("digitalServiceSystemSolution"),
      result: t("digitalServiceSystemResult"),
      photo: images.Kassa,
    },
  ];
  const achievements = [
    { number: "99.2%", label: t("recognitionAccuracy") },
    { number: "10K+", label: t("documentsProcessedDaily") },
    { number: "3M+", label: t("activeUsers") },
    { number: "50+", label: t("digitalCenters") },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter") || "all";
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Filters */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-16 border-b border-black/[0.06] pb-6">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() =>
                    setSearchParams(f.key === "all" ? {} : { filter: f.key })
                  }
                  className={`px-5 py-2.5 text-[12px] tracking-[0.04em] transition-all duration-300 ${
                    activeFilter === f.key
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-transparent text-[#888] hover:text-[#1a1a1a] hover:bg-[#f5f5f5]"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <div
                  className="group cursor-pointer bg-[#fafafa] border border-black/[0.04] hover:border-[#2E7D32]/15 hover:bg-[#f8faf8] transition-all duration-500"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image Placeholder */}
                  <div className="h-[200px] bg-gradient-to-br from-[#e8ece8] to-[#dde3dd] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={project.photo} alt="" />
                      {/* <div className="w-12 h-12 border border-white/40 flex items-center justify-center">
                        <span
                          className="text-white/60 text-[18px]"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {String(project.id).padStart(2, "0")}
                        </span>
                      </div> */}
                    </div>
                    <div className="absolute inset-0 bg-[#1B5E20]/0 group-hover:bg-[#1B5E20]/10 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={18} className="text-[#2E7D32]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[10px] tracking-[0.15em] uppercase text-[#2E7D32]/60 px-2 py-0.5 bg-[#2E7D32]/[0.06]"
                        style={{ fontWeight: 600 }}
                      >
                        {filters.find((f) => f.key === project.category)
                          ?.label || t("project")}
                      </span>
                    </div>
                    <h3
                      className="text-[#1a1a1a] mb-3 group-hover:text-[#1B5E20] transition-colors duration-300"
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-[#888] text-[13px] leading-[1.7]"
                      style={{ fontWeight: 400 }}
                    >
                      {project.desc.length > 120
                        ? project.desc.slice(0, 120) + "..."
                        : project.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
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

      {/* ========== PROJECT DETAIL MODAL ========== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white w-full max-w-[880px] max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center hover:bg-black/[0.04] transition-colors z-10"
            >
              <X size={18} />
            </button>

            {/* Hero area */}
            <div className="h-[240px] bg-gradient-to-br from-[#1B5E20] to-[#0a0a0a] flex items-center justify-center relative">
              <span
                className="text-white/10"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "120px",
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                {String(selectedProject.id).padStart(2, "0")}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="p-8 lg:p-12 -mt-12 relative">
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-[#2E7D32] px-3 py-1 bg-[#2E7D32]/[0.06] inline-block mb-4"
                style={{ fontWeight: 600 }}
              >
                {filters.find((f) => f.key === selectedProject.category)?.label}
              </span>
              <h2
                className="text-[#1a1a1a] mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {selectedProject.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4
                    className="text-[11px] tracking-[0.2em] uppercase text-[#999] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {t("description")}
                  </h4>
                  <p
                    className="text-[#555] text-[14px] leading-[1.8]"
                    style={{ fontWeight: 400 }}
                  >
                    {selectedProject.desc}
                  </p>
                </div>
                <div>
                  <h4
                    className="text-[11px] tracking-[0.2em] uppercase text-[#999] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {t("task")}
                  </h4>
                  <p
                    className="text-[#555] text-[14px] leading-[1.8]"
                    style={{ fontWeight: 400 }}
                  >
                    {selectedProject.task}
                  </p>
                </div>
                <div>
                  <h4
                    className="text-[11px] tracking-[0.2em] uppercase text-[#999] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {t("solution")}
                  </h4>
                  <p
                    className="text-[#555] text-[14px] leading-[1.8]"
                    style={{ fontWeight: 400 }}
                  >
                    {selectedProject.solution}
                  </p>
                </div>
                <div>
                  <h4
                    className="text-[11px] tracking-[0.2em] uppercase text-[#999] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {t("results")}
                  </h4>
                  <p
                    className="text-[#2E7D32] text-[14px] leading-[1.8]"
                    style={{ fontWeight: 600 }}
                  >
                    {selectedProject.result}
                  </p>
                </div>
              </div>

              {/* Photo placeholder */}
              <div className="mt-10 h-[200px] bg-[#f5f5f5] border border-dashed border-black/[0.08] flex items-center justify-center">
              <img src={selectedProject.photo} className="h-full w-full object-cover" alt="" />
                {/* <div className="text-center">
                  <ExternalLink
                    size={20}
                    className="text-[#ccc] mx-auto mb-2"
                  />
                  <span
                    className="text-[11px] text-[#bbb] tracking-[0.1em] uppercase"
                    style={{ fontWeight: 500 }}
                  >
                    Скриншоты проекта
                  </span>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
