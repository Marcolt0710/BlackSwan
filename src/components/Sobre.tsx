import { useState } from "react";
import { motion } from "motion/react";
import { MOODBOARD_IMAGES } from "../data";

interface MoodImageProps {
  key?: string;
  src: string;
  alt: string;
  title: string;
  tag: string;
  idx: number;
}

function MoodImage({ src, alt, title, tag, idx }: MoodImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: (idx % 3) * 0.1,
        ease: [0.25, 0, 0, 1],
      }}
      className="aspect-square overflow-hidden bg-[#0A0A0A]/5 border border-[#0A0A0A]/5 flex items-center justify-center relative group"
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          width={300}
          height={300}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover filter grayscale contrast-[1.05] hover:grayscale-[40%] hover:scale-[1.04] transition-all duration-[700ms] ease-in-out cursor-crosshair"
        />
      ) : (
        // Editorial, premium text-based card fallback if the image fails to load
        <div className="w-full h-full p-4 md:p-6 flex flex-col justify-between bg-[#0A0A0A]/5 border border-[#0A0A0A]/10 select-none text-left">
          <span className="font-sans text-[9px] tracking-[0.15em] text-gold uppercase font-light">
            {tag}
          </span>
          <span className="font-serif italic text-sm md:text-base text-[#0A0A0A] font-light leading-snug">
            {title}
          </span>
          <span className="font-sans text-[8px] text-text-muted uppercase tracking-widest">
            BLACK SWAN
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function Sobre() {
  const words = ["Autoral.", "Curatorial.", "Com alma."];

  return (
    <section
      id="sobre"
      className="bg-[#F5F0EB] bg-noise text-[#0A0A0A] py-[clamp(80px,12vw,160px)] px-[clamp(24px,8vw,120px)]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[8vw] items-center">
        {/* Left column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] }}
          className="flex flex-col text-[#0A0A0A]"
        >
          {/* Highlight words layered with soft dividers */}
          <div className="flex flex-col">
            {words.map((word, idx) => (
              <div
                key={word}
                className={`py-5 ${
                  idx < words.length - 1 ? "border-b border-[#0A0A0A]/10" : ""
                }`}
              >
                <span className="font-serif font-light text-[clamp(2.5rem,4vw,4rem)] leading-[1.1] block">
                  {word}
                </span>
              </div>
            ))}
          </div>

          <p className="font-sans text-[1rem] leading-[1.8] text-text-muted mt-10 font-light">
            Cada peça nasce de um processo criativo intencional.
            <br />
            Série limitada. Nunca repetida.
          </p>
        </motion.div>

        {/* Right column - 3x3 Grid of absolute greyscale with error fallbacks */}
        <div className="grid grid-cols-3 grid-rows-3 gap-[3px]">
          {MOODBOARD_IMAGES.map((item, idx) => (
            <MoodImage
              key={item.id}
              src={item.image}
              alt={`Galeria de Inspiração Black Swan: ${item.title} - Representando ${item.tag}`}
              title={item.title}
              tag={item.tag}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
