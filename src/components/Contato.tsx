import { motion } from "motion/react";

export default function Contato() {
  return (
    <section
      id="contato"
      className="bg-[#F5F0EB] bg-noise text-[#0A0A0A] min-h-[80vh] flex flex-col items-center justify-center text-center py-[clamp(80px,12vw,160px)] px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0, 0, 1] }}
        className="max-w-xl flex flex-col items-center"
      >
        {/* Swan SVG icon - Elegant minimalist silhouette */}
        <div className="w-12 h-12 text-gold mb-8 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-12 h-12 stroke-[1.5] fill-none stroke-gold"
            aria-hidden="true"
          >
            {/* Minimal line art representing an elegant swan profile */}
            <path
              d="M15,75 C25,75 35,62 48,50 C55,42 63,30 63,20 C63,14 59,10 52,14 C48,16 45,21 45,25 C45,35 60,65 72,72 C80,76 88,75 88,75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M72,72 C55,75 35,78 20,75"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] text-[#0A0A0A] tracking-[0.05em] leading-tight">
          Entre em contato
        </h2>

        {/* Gold Accent Line */}
        <div className="w-8 h-[1px] bg-gold my-7" />

        {/* Invitation Text */}
        <p className="font-sans text-[1rem] leading-[1.8] text-text-muted max-w-[400px] font-light">
          Para encomendas, parcerias ou simplesmente para conversar sobre o universo Black Swan.
        </p>

        {/* Action Links */}
        <div className="flex flex-col gap-3 mt-8">
          <a
            href="mailto:contato@blackswan.com.br"
            className="font-serif font-light italic text-[1.2rem] text-[#0A0A0A] hover:text-gold transition-colors duration-300 block"
          >
            contato@blackswan.com.br
          </a>

          <a
            href="https://instagram.com/blackswanbymc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif font-light italic text-[1.2rem] text-[#0A0A0A] hover:text-gold transition-colors duration-300 block"
          >
            @blackswanbymc
          </a>
        </div>
      </motion.div>
    </section>
  );
}
