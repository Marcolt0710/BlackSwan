import { motion } from "motion/react";

export default function Manifesto() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0, 0, 1] },
    },
  };

  return (
    <section
      id="manifesto"
      className="bg-[#0A0A0A] bg-noise text-off-white py-[clamp(80px,12vw,160px)] px-[clamp(24px,8vw,120px)] flex flex-col items-center"
    >
      <div className="max-w-[680px] w-full text-center">
        {/* Block 1: Elegant Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] }}
          className="flex flex-col items-center mb-16"
        >
          <blockquote className="font-serif font-light italic text-[clamp(1.8rem,3vw,2.8rem)] text-[#F5F0EB] leading-[1.3] tracking-wide">
            "isso é para quem entende"
          </blockquote>
          
          <div className="w-8 h-[1px] bg-gold mt-10 md:mt-12" />
        </motion.div>

        {/* Block 2: 4 Short Paragraphs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-sans text-[1rem] leading-[2.0] text-text-muted font-light"
          >
            Um <em className="not-italic text-off-white font-serif italic">novo luxo</em> que nasce ao lado da natureza, não contra ela. O desafio é criar <em className="not-italic text-off-white font-serif italic">aparências únicas</em> mantendo a diversidade cultural.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[1rem] leading-[2.0] text-text-muted font-light"
          >
            O design <em className="not-italic text-off-white font-serif italic">volta às origens</em>. Repensamos os materiais — o que significam, como os usamos, o que nos dizem sobre quem somos.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[1rem] leading-[2.0] text-text-muted font-light"
          >
            É fundir o <em className="not-italic text-off-white font-serif italic">primitivo com o moderno</em>. O artesanal com o tecnológico. Questionar nossas raízes para encontrar uma nova perspectiva de futuro.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-sans text-[1rem] leading-[2.0] text-text-muted font-light"
          >
            Construir <em className="not-italic text-off-white font-serif italic">novos mundos</em>. Online, na arte, na literatura, nas experiências do mundo real.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
