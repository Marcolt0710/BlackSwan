import { motion } from "motion/react";

export default function Processo() {
  const steps = [
    {
      number: "01",
      title: "Inspiração",
      description: "Pesquisa em arte, natureza e cultura. O processo começa antes das mãos."
    },
    {
      number: "02",
      title: "Curadoria",
      description: "Seleção dos materiais. Cada textura escolhida tem razão de existir."
    },
    {
      number: "03",
      title: "Criação",
      description: "O fazer artesanal. A peça nasce única, carregando o processo em si."
    },
    {
      number: "04",
      title: "Intenção",
      description: "Série limitada. Cada peça existe uma vez. Nunca será repetida."
    }
  ];

  return (
    <section
      id="processo"
      className="bg-[#0A0A0A] bg-noise text-off-white py-[clamp(80px,12vw,160px)] px-[clamp(24px,8vw,120px)]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.15,
                ease: [0.25, 0, 0, 1]
              }}
              className={`process-item group p-10 lg:py-12 lg:px-10 transition-all duration-300 flex flex-col justify-between min-h-[320px] ${
                // Borders config
                idx !== 3
                  ? "lg:border-r lg:border-b-0 border-b border-border"
                  : "border-b-0"
              } ${
                // Mobile row 1 border config
                idx === 0 || idx == 1
                  ? "sm:border-b sm:border-border sm:lg:border-b-0"
                  : ""
              }`}
            >
              <div>
                {/* Large visual number */}
                <span className="process-number font-serif font-light text-[rgba(184,151,90,0.15)] text-[5rem] block leading-none mb-6 group-hover:text-[rgba(184,151,90,0.4)] transition-colors duration-400 select-none">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-serif font-normal text-[1.4rem] text-off-white mb-4 group-hover:text-gold transition-colors duration-400">
                  {step.title}
                </h3>

                {/* Description content */}
                <p className="font-sans text-[0.9rem] leading-[1.8] text-text-muted font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
