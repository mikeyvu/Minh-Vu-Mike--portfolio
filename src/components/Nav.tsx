import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id);
      }, { threshold: 0.35 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,8,24,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white transition-transform duration-200 group-hover:scale-110"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            MV
          </div>
          <span className="text-white font-bold text-sm tracking-wide hidden sm:block">Mike Vu</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(6,182,212,0.15))",
                      border: "1px solid rgba(124,58,237,0.3)",
                    }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors duration-200"
                  style={{ color: isActive ? "#e2e8ff" : "#94a3b8" }}
                >
                  {label}
                </span>
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, #a78bfa, #06b6d4)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-mono">Available</span>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 rounded-xl text-white text-xs font-semibold transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", border: "none", cursor: "pointer" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(124,58,237,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            Hire Me
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 rounded-full transition-all duration-300"
              style={{
                width: i === 1 && menuOpen ? "12px" : "20px",
                background: "#94a3b8",
                transform:
                  menuOpen && i === 0
                    ? "translateY(8px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-8px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          background: "rgba(8,8,24,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="px-8 py-4 space-y-1">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: active === id ? "rgba(124,58,237,0.15)" : "transparent",
                border: active === id ? "1px solid rgba(124,58,237,0.25)" : "1px solid transparent",
                color: active === id ? "#e2e8ff" : "#94a3b8",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-3 rounded-xl text-white text-sm font-semibold"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", border: "none", cursor: "pointer" }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
