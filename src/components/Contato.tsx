import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BRAND_INFO } from "../data";

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) return;

    setIsSubmitting(true);

    // Simulate high-end luxury brand sending delay
    setTimeout(() => {
      // Persist locally for secure storage representation
      const inquiries = JSON.parse(localStorage.getItem("blackswan_inquiries") || "[]");
      const newInquiry = {
        ...formData,
        id: `inq-${Date.now()}`,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("blackswan_inquiries", JSON.stringify([...inquiries, newInquiry]));

      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ nome: "", email: "", mensagem: "" });
    }, 1400);
  };

  return (
    <section
      id="contato"
      className="bg-[#F5F0EB] bg-noise text-[#0A0A0A] py-[clamp(80px,12vw,160px)] px-[clamp(24px,8vw,120px)] border-t border-[#0A0A0A]/5"
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[10vw]">
        
        {/* Left Column - Contact Lore & Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] }}
          className="flex flex-col items-start text-left justify-center"
        >
          {/* Swan SVG Logo */}
          <div className="w-12 h-12 text-gold mb-8 flex items-center justify-start select-none">
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

          <h2 className="font-serif font-light text-[clamp(2.5rem,4.5vw,4rem)] text-[#0A0A0A] tracking-[0.03em] leading-tight mb-6">
            Entre em contato
          </h2>

          <div className="w-12 h-[1px] bg-gold mb-8" />

          <p className="font-sans text-[0.95rem] leading-[1.8] text-text-muted max-w-[450px] font-light mb-10">
            Para encomendas, dúvidas autorais, convites curatoriais ou simplesmente para conversar sobre a essência singular da Black Swan.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-sans text-[0.75rem] uppercase tracking-widest text-text-muted/60 mb-1">
                Atendimento Direto
              </span>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="font-serif font-light italic text-[1.25rem] text-[#0A0A0A] hover:text-gold transition-colors duration-300 w-fit"
              >
                {BRAND_INFO.email}
              </a>
            </div>

            <div className="flex flex-col mt-2">
              <span className="font-sans text-[0.75rem] uppercase tracking-widest text-text-muted/60 mb-1">
                Universo Digital
              </span>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-light italic text-[1.25rem] text-[#0A0A0A] hover:text-gold transition-colors duration-300 w-fit"
              >
                {BRAND_INFO.instagram}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Premium Seamless Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0, 0, 1] }}
          className="flex flex-col justify-center bg-[#0A0A0A]/3 p-8 lg:p-12 border border-[#0A0A0A]/5 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8 text-left"
              >
                {/* Nome Field */}
                <div className="flex flex-col group relative">
                  <label
                    htmlFor="nome"
                    className="font-sans text-[0.7rem] uppercase tracking-widest text-text-muted mb-2 font-medium"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Como devemos lhe chamar"
                    className="bg-transparent border-b border-[#0A0A0A]/15 py-3 text-sm font-sans focus:outline-none focus:border-gold text-[#0A0A0A] placeholder-text-muted/40 transition-colors duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col group relative">
                  <label
                    htmlFor="email"
                    className="font-sans text-[0.7rem] uppercase tracking-widest text-text-muted mb-2 font-medium"
                  >
                    Endereço de E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="bg-transparent border-b border-[#0A0A0A]/15 py-3 text-sm font-sans focus:outline-none focus:border-gold text-[#0A0A0A] placeholder-text-muted/40 transition-colors duration-300"
                  />
                </div>

                {/* Mensagem Field */}
                <div className="flex flex-col group relative">
                  <label
                    htmlFor="mensagem"
                    className="font-sans text-[0.7rem] uppercase tracking-widest text-text-muted mb-2 font-medium"
                  >
                    Sua Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Sua proposta, pensamento ou dúvida poética..."
                    className="bg-transparent border-b border-[#0A0A0A]/15 py-3 text-sm font-sans focus:outline-none focus:border-gold text-[#0A0A0A] placeholder-text-muted/40 transition-colors duration-300 resize-none min-h-[100px]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative mt-4 py-4 px-6 overflow-hidden bg-[#0A0A0A] text-off-white font-sans text-xs tracking-widest uppercase font-light transition-all duration-300 select-none hover:bg-gold flex items-center justify-center cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <svg
                          className="animate-spin h-3 w-3 text-off-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Enviar Mensagem
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
                className="py-12 px-6 flex flex-col items-center text-center justify-center space-y-6"
              >
                {/* Visual Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold"
                >
                  <svg
                    className="w-5 h-5 stroke-[1.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </motion.div>

                <div>
                  <h3 className="font-serif italic text-[1.8rem] text-[#0A0A0A] font-light leading-snug">
                    Agradecemos seu contato.
                  </h3>
                  <p className="font-sans text-sm text-text-muted mt-3 font-light leading-relaxed max-w-[340px] mx-auto">
                    Suas palavras foram entregues com segurança ao nosso ateliê. Responderemos com a devida atenção em breve.
                  </p>
                </div>

                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 text-[0.75rem] font-sans tracking-widest text-[#0A0A0A] hover:text-gold uppercase font-light text-underline transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
