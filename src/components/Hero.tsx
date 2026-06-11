import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const [showScrollLine, setShowScrollLine] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollLine(false);
      } else {
        setShowScrollLine(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]"
    >
      {/* Grid Layout: 38% left (dark), 62% right (off-white) - Desktop only, on mobile displays stacked filled with off-white */}
      <div className="hidden md:grid grid-cols-[38%_62%] w-full h-full">
        {/* Left column (pure dark and silent) */}
        <div className="bg-[#0A0A0A] h-full" />

        {/* Right column (off-white and elegant) */}
        <div className="bg-[#F5F0EB] bg-noise h-full flex items-center relative pl-[6vw]">
          <div className="text-[#0A0A0A] max-w-2xl relative z-10">
            {/* BLACK SWAN Title */}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.4,
                ease: [0.25, 0, 0, 1]
              }}
              className="font-logo font-light text-[clamp(3.5rem,7vw,7rem)] tracking-[0.2em] leading-none block uppercase"
            >
              BLACK SWAN
            </motion.span>

            {/* Gold Accenting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              style={{ originX: 0 }}
              className="w-12 h-[1px] bg-gold my-7"
            />

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="font-sans text-[0.8rem] tracking-[0.3em] font-light text-text-muted uppercase"
            >
              Elegância Natural · Autoral · Singular
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Torn Edge Separator (absolute positioned, desktop only) */}
      <div
        className="hidden md:block absolute left-[38%] top-0 h-full w-[60px] -translate-x-[25px] z-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 60 900"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M30,0 C28,80 35,160 25,240 C18,320 38,400 22,480 C10,560 32,640 28,720 C20,800 35,880 30,900 L0,900 L0,0 Z"
            fill="#F5F0EB"
          />
        </svg>
      </div>

      {/* Mobile Design (< 768px): Colunas viram linhas empilhadas — col esquerda desaparece, col direita ocupa 100% com fundo off-white */}
      <div className="md:hidden flex flex-col items-center justify-center h-full w-full bg-[#F5F0EB] bg-noise px-6 text-center">
        <div className="text-[#0A0A0A] w-full max-w-md">
          {/* BLACK SWAN Title */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.25, 0, 0, 1]
            }}
            className="font-logo font-light text-[clamp(2.8rem,9vw,4.5rem)] tracking-[0.18em] leading-none block uppercase"
          >
            BLACK SWAN
          </motion.span>

          {/* Gold Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-12 h-[1px] bg-gold my-6 mx-auto"
          />

          {/* tagline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="font-sans text-[0.75rem] tracking-[0.25em] font-light text-text-muted uppercase leading-relaxed"
          >
            Elegância Natural · Autoral · Singular
          </motion.h2>
        </div>
      </div>

      {/* Scroll Down Indicator (scaleY pulsating, disappears after 200px of scrolling) */}
      {showScrollLine && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30 transition-opacity duration-500"
        >
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3], originY: [0, 0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="w-[1px] h-10 bg-gold/45"
          />
        </div>
      )}
    </section>
  );
}
