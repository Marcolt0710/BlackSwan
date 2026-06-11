import { motion } from "motion/react";

export default function Sobre() {
  const words = ["Autoral.", "Curatorial.", "Com alma."];

  const gridImages = [
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1536336095259-c3b6b5e4df86?w=300&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&q=80",
  ];

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

        {/* Right column - 3x3 Grid of absolute greyscale */}
        <div className="grid grid-cols-3 grid-rows-3 gap-[3px]">
          {gridImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: (idx % 3) * 0.1,
                ease: [0.25, 0, 0, 1],
              }}
              className="aspect-square overflow-hidden bg-white/5"
            >
              <img
                src={src}
                alt={`Black Swan moodboard ${idx + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                width={300}
                height={300}
                className="w-full h-full object-cover filter grayscale contrast-[1.05] hover:grayscale-[40%] hover:scale-[1.04] transition-all duration-[700ms] ease-in-out cursor-crosshair"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
