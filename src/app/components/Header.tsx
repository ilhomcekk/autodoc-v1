import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "О холдинге", path: "/about" },
  { label: "Проекты", path: "/projects" },
  { label: "Карьера", path: "/career" },
  { label: "Новости", path: "/news" },
  { label: "Партнеры", path: "/partners" },
  { label: "Контакты", path: "/contact" },
];

const aboutSubmenu = [
  { label: "История", hash: "#history" },
  { label: "Руководство", hash: "#leadership" },
];

const languages = ["RU", "UZ", "EN"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("RU");
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const aboutDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openAboutDropdown = () => {
    if (aboutDropdownTimeout.current) clearTimeout(aboutDropdownTimeout.current);
    setAboutDropdownOpen(true);
  };

  const closeAboutDropdown = () => {
    aboutDropdownTimeout.current = setTimeout(() => setAboutDropdownOpen(false), 150);
  };

  const handleSubmenuClick = (hash: string) => {
    setAboutDropdownOpen(false);
    if (location.pathname === "/about") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/about" + hash);
    }
  };

  const headerBg = scrolled || !isHome
    ? "bg-white/95 backdrop-blur-xl border-b border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-[#1a1a1a]" : "text-white";
  const logoColor = scrolled || !isHome ? "text-[#1a1a1a]" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className={`flex items-center gap-2 ${logoColor} transition-colors duration-300`}>
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-[#1B5E20] rounded-[3px]" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] tracking-[0.08em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>A</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] tracking-[0.2em] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>AUTODOC</span>
                <span className={`text-[8px] tracking-[0.35em] uppercase ${scrolled || !isHome ? 'text-[#666]' : 'text-white/60'} transition-colors`} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>HOLDING</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isAbout = item.path === "/about";

                if (isAbout) {
                  return (
                    <div
                      key={item.path}
                      className="relative"
                      onMouseEnter={openAboutDropdown}
                      onMouseLeave={closeAboutDropdown}
                    >
                      <Link
                        to={item.path}
                        className={`relative px-4 py-2 text-[13px] tracking-[0.02em] transition-all duration-300 ${textColor} ${
                          isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                        } inline-flex items-center gap-1`}
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: isActive ? 600 : 400 }}
                      >
                        {item.label}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className={`transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#2E7D32]"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {aboutDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute top-full left-0 pt-2"
                          >
                            <div
                              className={`min-w-[180px] py-2 ${
                                scrolled || !isHome
                                  ? "bg-white border border-black/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                                  : "bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                              }`}
                            >
                              {aboutSubmenu.map((sub) => (
                                <button
                                  key={sub.hash}
                                  onClick={() => handleSubmenuClick(sub.hash)}
                                  className={`w-full text-left px-5 py-2.5 text-[12px] tracking-[0.03em] transition-all duration-200 ${
                                    scrolled || !isHome
                                      ? "text-[#1a1a1a]/60 hover:text-[#2E7D32] hover:bg-[#f5f7f5]"
                                      : "text-white/50 hover:text-white hover:bg-white/[0.06]"
                                  }`}
                                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                                >
                                  {sub.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-4 py-2 text-[13px] tracking-[0.02em] transition-all duration-300 ${textColor} ${
                      isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: isActive ? 600 : 400 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#2E7D32]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Language + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center">
                {languages.map((lang, i) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`text-[11px] tracking-[0.1em] px-2 py-1 transition-all duration-200 ${textColor} ${
                      activeLang === lang ? "opacity-100" : "opacity-40 hover:opacity-70"
                    } ${i < languages.length - 1 ? `border-r ${scrolled || !isHome ? 'border-black/10' : 'border-white/20'}` : ''}`}
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: activeLang === lang ? 600 : 400 }}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 ${textColor} transition-colors`}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-[72px]"
          >
            <nav className="flex flex-col px-6 py-8 gap-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className="py-4 text-[18px] text-[#1a1a1a] border-b border-black/[0.06] tracking-[0.02em] transition-colors hover:text-[#2E7D32] block"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                  >
                    {item.label}
                  </Link>
                  {item.path === "/about" && (
                    <div className="flex flex-col pl-5 border-b border-black/[0.06]">
                      {aboutSubmenu.map((sub) => (
                        <button
                          key={sub.hash}
                          onClick={() => handleSubmenuClick(sub.hash)}
                          className="py-3 text-[15px] text-[#1a1a1a]/50 tracking-[0.02em] transition-colors hover:text-[#2E7D32] text-left"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex gap-4 mt-6 pt-4">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`text-[13px] tracking-[0.1em] transition-opacity ${
                      activeLang === lang ? "text-[#1a1a1a] opacity-100" : "text-[#1a1a1a] opacity-40"
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: activeLang === lang ? 600 : 400 }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}