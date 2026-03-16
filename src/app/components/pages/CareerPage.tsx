import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, Briefcase, Users, TrendingUp, Cpu, ChevronRight, MapPin, Send, X, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const TEAM_IMG = "https://images.unsplash.com/photo-1758270705317-3ef6142d306f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBkaXZlcnNlfGVufDF8fHx8MTc3MzM4MDA2OXww&ixlib=rb-4.1.0&q=80&w=1080";
const OFFICE_IMG = "https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBwcmVtaXVtfGVufDF8fHx8MTc3MzM4MDA2Nnww&ixlib=rb-4.1.0&q=80&w=1080";

const reasons = [
  { icon: Briefcase, title: "Проекты национального масштаба", desc: "Мы создаём технологии, которые используются государственными сервисами и миллионами пользователей." },
  { icon: Users, title: "Сильная команда", desc: "В компании работают специалисты в области IT, аналитики, проектного управления и цифровых сервисов." },
  { icon: TrendingUp, title: "Рост и развитие", desc: "Сотрудники участвуют в сложных технологических проектах и получают уникальный опыт." },
  { icon: Cpu, title: "Современная рабочая среда", desc: "Гибкие процессы, технологичная среда и культура профессионального роста." },
];

const vacancies = [
  { id: 1, title: "Software Engineer", dept: "Разработка", location: "Ташкент", type: "Полная занятость", desc: "Разработка и поддержка высоконагруженных систем для государственных сервисов. Работа с современными технологиями: React, Node.js, PostgreSQL, Docker.", requirements: ["Опыт коммерческой разработки от 3 лет", "Знание JavaScript/TypeScript", "Опыт работы с реляционными БД", "Понимание принципов CI/CD"] },
  { id: 2, title: "System Analyst", dept: "Аналитика", location: "Ташкент", type: "Полная занятость", desc: "Анализ бизнес-процессов, формирование требований и проектирование решений для цифровизации государственных услуг.", requirements: ["Опыт работы системным аналитиком от 2 лет", "Навыки работы с UML, BPMN", "Опыт составления ТЗ", "Аналитическое мышление"] },
  { id: 3, title: "Project Manager", dept: "Управление проектами", location: "Ташкент", type: "Полная занятость", desc: "Управление IT-проектами в государственном секторе. Координация команд разработки, взаимодействие с заказчиками.", requirements: ["Опыт управления IT-проектами от 3 лет", "Знание Agile/Scrum методологий", "Навыки работы с Jira, Confluence", "Опыт работы с госсектором — преимущество"] },
  { id: 4, title: "UX/UI Designer", dept: "Дизайн", location: "Ташкент", type: "Полная занятость", desc: "Проектирование пользовательских интерфейсов для государственных и коммерческих цифровых сервисов.", requirements: ["Опыт работы UX/UI дизайнером от 2 лет", "Владение Figma", "Понимание принципов UX-исследований", "Портфолио с примерами работ"] },
  { id: 5, title: "DevOps Engineer", dept: "Инфраструктура", location: "Ташкент", type: "Полная занятость", desc: "Построение и поддержка инфраструктуры для высоконагруженных государственных сервисов.", requirements: ["Опыт работы DevOps от 2 лет", "Знание Linux, Docker, Kubernetes", "Опыт работы с CI/CD пайплайнами", "Навыки мониторинга и алертинга"] },
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

export function CareerPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", comment: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState<typeof vacancies[0] | null>(null);
  const vacanciesRef = useRef<HTMLElement>(null);

  const scrollToVacancies = () => {
    vacanciesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    document.getElementById("resume-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", comment: "" });
  };

  return (
    <div>
      {/* ========== SECTION 1 — HERO ========== */}
      <section className="relative pt-[72px] overflow-hidden bg-[#0a0a0a]">
        <div className="relative min-h-[60vh] sm:min-h-[75vh] flex items-end">
          <div className="absolute inset-0">
            <ImageWithFallback
              src={TEAM_IMG}
              alt="AUTODOC Team"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 sm:pb-20 lg:pb-28 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#4CAF50]/70 block mb-5" style={{ fontWeight: 600 }}>
                Карьера
              </span>
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 'clamp(32px, 5vw, 60px)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                }}
              >
                Карьера в
                <br />
                AUTODOC HOLDING
              </h1>
              <p className="text-white/40 max-w-[560px] mb-10" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.8 }}>
                Мы создаём цифровую инфраструктуру, которая меняет государственные сервисы и процессы в Узбекистане. Присоединяйтесь к команде, которая работает над проектами национального масштаба.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={scrollToVacancies}
                  className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2E7D32] text-white text-[12px] sm:text-[13px] tracking-[0.08em] uppercase hover:bg-[#1B5E20] transition-all duration-500"
                  style={{ fontWeight: 600 }}
                >
                  Открытые вакансии
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToForm}
                  className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] text-white text-[12px] sm:text-[13px] tracking-[0.08em] uppercase hover:bg-white/[0.12] transition-all duration-500"
                  style={{ fontWeight: 500 }}
                >
                  Отправить резюме
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 — ПОЧЕМУ AUTODOC ========== */}
      <section className="py-16 sm:py-24 lg:py-36 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4" style={{ fontWeight: 600 }}>
              Преимущества
            </span>
            <h2
              className="text-[#1a1a1a] mb-12 sm:mb-16"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Почему AUTODOC
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group p-6 sm:p-8 lg:p-10 bg-[#fafafa] border border-black/[0.04] hover:border-[#2E7D32]/15 hover:bg-[#f8faf8] transition-all duration-500">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#2E7D32]/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2E7D32]/[0.1] transition-colors duration-300">
                        <Icon size={20} className="text-[#2E7D32]" />
                      </div>
                      <div>
                        <h3 className="text-[#1a1a1a] mb-3" style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.3 }}>
                          {reason.title}
                        </h3>
                        <p className="text-[#777] text-[13px] sm:text-[14px] leading-[1.8]" style={{ fontWeight: 400 }}>
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 — ВАКАНСИИ ========== */}
      <section ref={vacanciesRef} className="py-16 sm:py-24 lg:py-36 bg-[#fafafa] border-y border-black/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4" style={{ fontWeight: 600 }}>
              Вакансии
            </span>
            <h2
              className="text-[#1a1a1a] mb-10 sm:mb-12"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Открытые позиции
            </h2>
          </AnimatedSection>

          <div className="flex flex-col">
            {vacancies.map((vacancy, i) => (
              <AnimatedSection key={vacancy.id} delay={i * 0.08}>
                <button
                  className="group w-full flex items-center justify-between py-5 sm:py-6 lg:py-7 border-b border-black/[0.06] cursor-pointer hover:bg-white/50 transition-colors duration-300 px-4 lg:px-6 -mx-4 lg:-mx-6 text-left"
                  onClick={() => setSelectedVacancy(vacancy)}
                >
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-[#1a1a1a] mb-1 group-hover:text-[#2E7D32] transition-colors duration-300"
                      style={{ fontSize: 'clamp(15px, 1.2vw, 17px)', fontWeight: 600, lineHeight: 1.3 }}
                    >
                      {vacancy.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[12px] sm:text-[13px] text-[#999]" style={{ fontWeight: 400 }}>
                      <span>{vacancy.dept}</span>
                      <span className="hidden sm:inline">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {vacancy.location}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-[#ccc] group-hover:text-[#2E7D32] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VACANCY DETAIL MODAL ========== */}
      <AnimatePresence>
        {selectedVacancy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedVacancy(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white w-full max-w-[640px] max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedVacancy(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center hover:bg-black/[0.04] transition-colors z-10"
              >
                <X size={18} />
              </button>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#2E7D32] px-2.5 py-1 bg-[#2E7D32]/[0.06]" style={{ fontWeight: 600 }}>
                    {selectedVacancy.dept}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#888] px-2.5 py-1 bg-[#f5f5f5]" style={{ fontWeight: 500 }}>
                    {selectedVacancy.type}
                  </span>
                </div>

                <h3
                  className="text-[#1a1a1a] mb-2"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 'clamp(22px, 3vw, 28px)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {selectedVacancy.title}
                </h3>

                <div className="flex items-center gap-2 text-[13px] text-[#999] mb-8" style={{ fontWeight: 400 }}>
                  <MapPin size={14} className="text-[#2E7D32]" />
                  {selectedVacancy.location}
                </div>

                <div className="mb-8">
                  <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#999] mb-3" style={{ fontWeight: 600 }}>Описание</h4>
                  <p className="text-[#555] text-[14px] leading-[1.8]" style={{ fontWeight: 400 }}>
                    {selectedVacancy.desc}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-[11px] tracking-[0.2em] uppercase text-[#999] mb-3" style={{ fontWeight: 600 }}>Требования</h4>
                  <ul className="space-y-2">
                    {selectedVacancy.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#555] leading-[1.6]" style={{ fontWeight: 400 }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedVacancy(null);
                    setTimeout(scrollToForm, 300);
                  }}
                  className="w-full py-4 bg-[#2E7D32] text-white text-[13px] tracking-[0.08em] uppercase hover:bg-[#1B5E20] transition-colors duration-500 flex items-center justify-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  Откликнуться
                  <Send size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========== SECTION 4 — КОМАНДА ========== */}
      <section className="py-16 sm:py-24 lg:py-36 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              <div className="lg:col-span-5">
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4" style={{ fontWeight: 600 }}>
                  Наша команда
                </span>
                <h2
                  className="text-[#1a1a1a] mb-6"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 'clamp(26px, 3.5vw, 40px)',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Команда AUTODOC
                </h2>
                <p className="text-[#777] text-[14px] sm:text-[15px] leading-[1.8]" style={{ fontWeight: 400 }}>
                  Мы объединяем инженеров, аналитиков, архитекторов и специалистов по цифровым сервисам, которые работают над проектами национального уровня.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative">
                  <ImageWithFallback
                    src={OFFICE_IMG}
                    alt="AUTODOC Office"
                    className="w-full h-[280px] sm:h-[400px] lg:h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:block hidden" style={{ width: '20%' }} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SECTION 5 — FINAL CTA ========== */}
      <section className="py-16 sm:py-24 lg:py-36 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative">
          <AnimatedSection>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Станьте частью команды
            </h2>
            <p className="text-white/40 text-[14px] sm:text-[15px] max-w-[560px] mx-auto mb-10" style={{ fontWeight: 300, lineHeight: 1.8 }}>
              Если вам интересно работать над технологическими проектами, которые меняют цифровую инфраструктуру страны — присоединяйтесь к AUTODOC.
            </p>
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#2E7D32] text-white text-[13px] tracking-[0.08em] uppercase hover:bg-[#1B5E20] transition-all duration-500"
              style={{ fontWeight: 600 }}
            >
              Отправить резюме
              <Send size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== SECTION 6 — ФОРМА ========== */}
      <section id="resume-form" className="py-16 sm:py-24 lg:py-36 bg-white">
        <div className="max-w-[680px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4" style={{ fontWeight: 600 }}>
              Отклик
            </span>
            <h2
              className="text-[#1a1a1a] mb-4"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Отправка резюме
            </h2>
            <p className="text-[#999] text-[14px] mb-10 sm:mb-12" style={{ fontWeight: 400, lineHeight: 1.7 }}>
              Заполните форму и мы свяжемся с вами
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#2E7D32]/10 flex items-center justify-center rounded-full">
                  <CheckCircle size={28} className="text-[#2E7D32]" />
                </div>
                <h3 className="text-[#1a1a1a] mb-2" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Резюме отправлено
                </h3>
                <p className="text-[#999] text-[14px]" style={{ fontWeight: 400 }}>
                  Мы свяжемся с вами в ближайшее время
                </p>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Имя *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-[#fafafa] border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors"
                    placeholder="Ваше полное имя"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-[#fafafa] border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Телефон</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-[#fafafa] border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors"
                      placeholder="+998 __ ___ __ __"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>CV *</label>
                  <div className="w-full px-5 py-8 bg-[#fafafa] border border-dashed border-black/[0.08] text-center cursor-pointer hover:bg-[#f5f7f5] hover:border-[#2E7D32]/20 transition-all duration-300">
                    <span className="text-[13px] text-[#999]">Перетащите файл или нажмите для загрузки</span>
                    <p className="text-[11px] text-[#ccc] mt-1">PDF, DOC — до 10 МБ</p>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Комментарий</label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    rows={4}
                    className="w-full px-5 py-4 bg-[#fafafa] border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors resize-none"
                    placeholder="Расскажите о себе..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#1a1a1a] text-white text-[13px] tracking-[0.08em] uppercase hover:bg-[#2E7D32] transition-colors duration-500"
                  style={{ fontWeight: 600 }}
                >
                  Отправить резюме
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
