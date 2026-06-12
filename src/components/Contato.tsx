import { motion } from "motion/react";
import { BRAND_INFO } from "../data";

export default function Contato() {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site da Black Swan e gostaria de saber mais.")}`;
  const emailUrl = `mailto:${BRAND_INFO.email}`;

  return (
    <section
      id="contato"
      className="bg-[#F5F0EB] bg-noise text-[#0A0A0A] min-h-[80vh] flex flex-col items-center justify-center text-center py-[clamp(80px,12vw,160px)] px-6 border-t border-[#0A0A0A]/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0, 0, 1] }}
        className="max-w-xl flex flex-col items-center"
      >
        <div className="w-12 h-12 mb-8 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-12 h-12 stroke-[1.2] fill-none stroke-gold"
            aria-hidden="true"
          >
            <path
              d="M15,75 C25,75 35,62 48,50 C55,42 63,30 63,20 C63,14 59,10 52,14 C48,16 45,21 45,25 C45,35 60,65 72,72 C80,76 88,75 88,75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M72,72 C55,75 35,78 20,75" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className="font-serif font-light text-[clamp(2.5rem,5vw,4.5rem)] text-[#0A0A0A] tracking-[0.05em] leading-tight">
          Entre em contato
        </h2>

        <div className="w-8 h-[1px] bg-gold my-7" />

        <p className="font-sans text-[1rem] leading-[1.8] text-text-muted max-w-[400px] font-light mb-10">
          Para encomendas, parcerias ou simplesmente para conversar sobre o universo Black Swan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 py-4 px-6 bg-[#0A0A0A] text-off-white font-sans text-xs tracking-widest uppercase font-light hover:bg-gold transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.57a.75.75 0 00.912.912l5.715-1.471A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5a10.45 10.45 0 01-5.394-1.499l-.386-.23-4.001 1.03 1.03-3.88-.253-.4A10.5 10.5 0 1112 22.5z"/>
            </svg>
            WhatsApp
          </a>

          <a
            href={emailUrl}
            className="flex items-center justify-center gap-2 flex-1 py-4 px-6 border border-[#0A0A0A] text-[#0A0A0A] font-sans text-xs tracking-widest uppercase font-light hover:bg-[#0A0A0A] hover:text-off-white transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            E-mail
          </a>
        </div>
      </motion.div>
    </section>
  );
}
