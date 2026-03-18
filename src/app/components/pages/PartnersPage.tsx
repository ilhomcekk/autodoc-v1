import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import images from "../../../assets/images";

// const commercialPartners = [
//   "UZCARD",
//   "HUMO",
//   "Beeline Uzbekistan",
//   "Ucell",
//   "UzAuto Motors",
//   "Artel Electronics",
//   "Munis Systems",
//   "PayMe",
//   "Click",
//   "OSON",
//   "Kapitalbank",
//   "Ipoteka Bank",
//   "Davr Bank",
//   "Orient Finans",
// ];

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

export function PartnersPage() {
  const { t } = useTranslation();
  // const governmentPartners = [
  //   "МВД Республики Узбекистан",
  //   "ГУБДД",
  //   "Министерство юстиции",
  //   "Центральный банк РУ",
  //   "Государственный налоговый комитет",
  //   "Министерство инвестиций и торговли",
  //   "Государственный кадастр",
  //   "Министерство цифровых технологий",
  //   "ОВИР",
  //   "Министерство финансов",
  //   "Министерство здравоохранения",
  //   "Агентство госуслуг",
  // ];
  const governmentPartners = [
    images.MinistryTourism,
    images.AgencyCivil,
    images.SupremeAssembly,
    images.CityAdministration,
    images.NationalCentral,
    images.MinistryInternal,
    images.CabinetMinisters,
    images.ProsecutorGeneral,
    images.MinistryTransport,
    images.MinistryDigital,
    images.RoadTraffic,
    images.MinistryHealth,
  ];
  const commercialPartners = [
    images.PoytaxtBank,
    images.AloqaBank,
    images.KapitalSugurta,
    images.MikrokreditBank,
    images.UniversalBank,
    images.Beeline,
    images.Abozor,
    images.OrientFinansBank,
    images.kapitalBank,
    images.Uztelecom,
    images.XalqBank,
    images.SmartBank,
    images.HamkorBank,
    images.AgroBank,
  ];
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
            <span
              className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-5"
              style={{ fontWeight: 600 }}
            >
              {t("ecosystem")}
            </span>
            <h1
              className="text-[#1a1a1a] mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(32px, 5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              {t("partners")}
            </h1>
            <p
              className="text-[#888] max-w-[560px]"
              style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.8 }}
            >
              {t("ecosystemDesc")}
            </p>
          </motion.div>
        </div>
        <div className="h-[1px] bg-black/[0.04]" />
      </section>

      {/* ========== GOVERNMENT PARTNERS ========== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-4">
                <span
                  className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {t("publicSector")}
                </span>
                <h2
                  className="text-[#1a1a1a]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t("governmentPartners")}
                </h2>
              </div>
              <div className="lg:col-span-8 self-center">
                <p
                  className="text-[#888] text-[15px] leading-[1.8] max-w-[520px]"
                  style={{ fontWeight: 400 }}
                >
                  AUTODOC HOLDING {t("governmentDesc")}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-black/[0.04]">
              {governmentPartners.map((partner, i) => (
                <div
                  key={i}
                  className="bg-white group hover:bg-[#f8faf8] transition-colors duration-300"
                >
                  <div className="flex items-center justify-center py-10 px-6 min-h-[120px]">
                    <div className="text-center">
                      {/* <div className="w-14 h-14 mx-auto mb-3 bg-[#f5f7f5] border border-[#e8ece8] flex items-center justify-center group-hover:border-[#2E7D32]/20 group-hover:bg-[#eef5ee] transition-all duration-300">
                        <span
                          className="text-[#2E7D32]/40 text-[16px]"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {partner.charAt(0)}
                        </span>
                      </div> */}
                      <img
                        className="partner-black-image"
                        src={partner}
                        alt=""
                      />
                      {/* <span
                        className="text-[12px] text-[#666] group-hover:text-[#1a1a1a] transition-colors duration-300 block"
                        style={{ fontWeight: 500, lineHeight: 1.4 }}
                      >
                        {partner}
                      </span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== COMMERCIAL PARTNERS ========== */}
      <section className="py-20 lg:py-28 bg-[#fafafa] border-y border-black/[0.04]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-4">
                <span
                  className="text-[11px] tracking-[0.3em] uppercase text-[#2E7D32] block mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {t("commercialSector")}
                </span>
                <h2
                  className="text-[#1a1a1a]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t("commercialPartners")}
                </h2>
              </div>
              <div className="lg:col-span-8 self-center">
                <p
                  className="text-[#888] text-[15px] leading-[1.8] max-w-[520px]"
                  style={{ fontWeight: 400 }}
                >
                  {t("commercialDesc")}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-[1px] bg-black/[0.04]">
              {commercialPartners.map((partner, i) => (
                <div
                  key={i}
                  className="bg-white group hover:bg-[#f8faf8] transition-colors duration-300 flex items-center justify-center py-8 px-4"
                >
                  <img src={partner} className="partner-black-image" alt="" />
                  {/* <span
                    className="text-[12px] tracking-[0.1em] uppercase text-[#999] group-hover:text-[#2E7D32] transition-colors duration-300 text-center"
                    style={{ fontWeight: 600 }}
                  >
                    {partner}
                  </span> */}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
