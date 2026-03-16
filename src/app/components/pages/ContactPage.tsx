import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

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

const contactInfo = [
  { icon: MapPin, label: "Адрес", value: "г. Ташкент, Узбекистан", sublabel: "Головной офис" },
  { icon: Phone, label: "Телефон", value: "+998 71 200 00 00", sublabel: "Пн — Пт, 09:00 — 18:00", href: "tel:+998712000000" },
  { icon: Mail, label: "Email", value: "info@autodoc.uz", sublabel: "Ответим в течение 24 часов", href: "mailto:info@autodoc.uz" },
  { icon: Clock, label: "Режим работы", value: "Пн — Пт, 09:00 — 18:00", sublabel: "Ташкент (GMT+5)" },
];

export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* ========== SECTION 1 — INTRO ========== */}
      <section className="pt-[72px] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-5" style={{ fontWeight: 600 }}>
              Связь
            </span>
            <h1
              className="text-[#1a1a1a] mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 'clamp(32px, 5vw, 60px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Контакты
            </h1>
            <p className="text-[#888] max-w-[480px]" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', fontWeight: 300, lineHeight: 1.8 }}>
              Свяжитесь с нами для обсуждения сотрудничества, партнерства или получения дополнительной информации
            </p>
          </motion.div>
        </div>
        <div className="h-[1px] bg-black/[0.04]" />
      </section>

      {/* ========== SECTION 2 — CONTACT INFO ========== */}
      <section className="py-12 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-black/[0.04]">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-white group hover:bg-[#f8faf8] transition-colors duration-300 p-6 sm:p-8 lg:p-10">
                  <div className="w-12 h-12 bg-[#f5f7f5] border border-[#e8ece8] flex items-center justify-center mb-6 group-hover:border-[#2E7D32]/20 group-hover:bg-[#eef5ee] transition-all duration-300">
                    <Icon size={18} className="text-[#2E7D32]" />
                  </div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>
                    {item.label}
                  </span>
                  <p className="text-[#1a1a1a] text-[14px] sm:text-[15px] mb-1" style={{ fontWeight: 600 }}>
                    {item.value}
                  </p>
                  <p className="text-[#bbb] text-[12px]" style={{ fontWeight: 400 }}>
                    {item.sublabel}
                  </p>
                </div>
              );

              return (
                <AnimatedSection key={i} delay={i * 0.1}>
                  {item.href ? (
                    <a href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 — FORM + MAP ========== */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#fafafa] border-y border-black/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-4" style={{ fontWeight: 600 }}>
                  Напишите нам
                </span>
                <h2
                  className="text-[#1a1a1a] mb-4"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Обратная связь
                </h2>
                <p className="text-[#999] text-[14px] mb-8 sm:mb-10" style={{ fontWeight: 400, lineHeight: 1.7 }}>
                  Заполните форму и мы свяжемся с вами в ближайшее время
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
                      Сообщение отправлено
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
                        className="w-full px-5 py-4 bg-white border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Email *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors"
                          placeholder="email@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Телефон</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors"
                          placeholder="+998"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Тема</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors"
                        placeholder="Тема обращения"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] tracking-[0.15em] uppercase text-[#999] block mb-2" style={{ fontWeight: 600 }}>Сообщение *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-5 py-4 bg-white border border-black/[0.06] text-[#1a1a1a] text-[14px] focus:outline-none focus:border-[#2E7D32]/30 transition-colors resize-none"
                        placeholder="Ваше сообщение..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full py-4 bg-[#1a1a1a] text-white text-[13px] tracking-[0.08em] uppercase hover:bg-[#2E7D32] transition-colors duration-500 flex items-center justify-center gap-2"
                      style={{ fontWeight: 600 }}
                    >
                      Отправить
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Map */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <div className="h-[350px] sm:h-[450px] lg:h-full lg:min-h-[500px] bg-[#e8ece8] relative overflow-hidden">
                  {/* Map placeholder with styled overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <MapPin size={24} className="text-[#2E7D32]" />
                      </div>
                      <span className="text-[13px] text-[#666] block mb-1" style={{ fontWeight: 600 }}>
                        Ташкент, Узбекистан
                      </span>
                      <span className="text-[11px] text-[#999] tracking-[0.1em] uppercase" style={{ fontWeight: 500 }}>
                        Интерактивная карта
                      </span>
                    </div>
                  </div>

                  {/* Simulated map grid */}
                  <div className="absolute inset-0 opacity-[0.15]" style={{
                    backgroundImage: 'linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                  }} />

                  {/* Map pin effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 rounded-full bg-[#2E7D32]/10 animate-ping" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
