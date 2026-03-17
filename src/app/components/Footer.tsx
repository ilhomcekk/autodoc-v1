import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import images from "../../assets/images";

export function Footer() {
  const { t } = useTranslation();
  const navItems = [
    { label: t("aboutHolding"), path: "/about" },
    { label: t("projects"), path: "/projects" },
    { label: t("career"), path: "/career" },
    // { label: t("news"), path: "/news" },
    { label: t("partners"), path: "/partners" },
    { label: t("contacts"), path: "/contact" },
  ];
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle gradient line at top */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2E7D32]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo + Description */}
          <div className="lg:col-span-4">
            <Link to={"/"}>
              <img src={images.Logo} className="mb-2" alt="" />
            </Link>
            {/* <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-[#2E7D32] rounded-[3px]" />
                <span
                  className="absolute inset-0 flex items-center justify-center text-white text-[11px] tracking-[0.08em]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
                >
                  A
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[15px] tracking-[0.2em] text-white"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                >
                  AUTODOC
                </span>
                <span
                  className="text-[8px] tracking-[0.35em] text-white/40"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  HOLDING
                </span>
              </div>
            </Link> */}
            <p
              className="text-white/40 text-[13px] leading-[1.8] max-w-[320px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t("digitalTransformation2")}
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4
              className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              {t("navigation")}
            </h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[14px] text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                >
                  {item.label}
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-60 transition-opacity -translate-y-0.5"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-3">
            <h4
              className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              {t("contacts")}
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.15em] text-white/25 mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  {t("address")}
                </p>
                <p
                  className="text-[14px] text-white/60"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  г. Ташкент, Узбекистан
                </p>
              </div>
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.15em] text-white/25 mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  {t("phone")}
                </p>
                <a
                  href="tel:+998712000000"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  +998 71 200 00 00
                </a>
              </div>
              <div>
                <p
                  className="text-[11px] uppercase tracking-[0.15em] text-white/25 mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@autodoc.uz"
                  className="text-[14px] text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  info@autodoc.uz
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4
              className="text-[11px] tracking-[0.2em] uppercase text-white/30 mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              {t("information")}
            </h4>
            <div className="flex flex-col gap-3">
              <span
                className="text-[14px] text-white/40"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {t("privacyPolicy")}
              </span>
              <span
                className="text-[14px] text-white/40"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {t("termsOfUse")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[12px] text-white/25"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2026 AUTODOC HOLDING. {t("allRightsReserved")}.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
            <span
              className="text-[11px] text-white/20 tracking-[0.05em]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ташкент, Узбекистан
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
