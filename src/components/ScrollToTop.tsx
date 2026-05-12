import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 50,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered
          ? "linear-gradient(135deg, #7c3aed, #06b6d4)"
          : "rgba(124,58,237,0.15)",
        boxShadow: hovered
          ? "0 0 0 1px rgba(124,58,237,0.6), 0 8px 32px rgba(124,58,237,0.4)"
          : "0 0 0 1px rgba(124,58,237,0.3), 0 4px 16px rgba(0,0,0,0.3)",
        backdropFilter: "blur(12px)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-4px) scale(1.08)"
            : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.85)",
        transition:
          "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.2s ease, box-shadow 0.2s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={hovered ? "#ffffff" : "#a78bfa"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: "20px",
          height: "20px",
          transition: "stroke 0.2s ease",
          animation: visible ? "bounce-up 1.6s ease-in-out infinite" : "none",
        }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
      <style>{`
        @keyframes bounce-up {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </button>
  );
}
