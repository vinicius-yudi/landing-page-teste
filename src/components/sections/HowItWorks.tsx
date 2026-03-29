"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Cadastre a Obra",
    description: "Importe seus orçamentos e defina os marcos iniciais do projeto.",
    highlight: false,
  },
  {
    num: "02",
    title: "Engaje a Equipe",
    description: "Convide colaboradores e parceiros para colaborar na plataforma.",
    highlight: false,
  },
  {
    num: "03",
    title: "Monitore em Tempo Real",
    description: "Acompanhe fotos, diários de obra e medições direto do seu celular.",
    highlight: false,
  },
  {
    num: "04",
    title: "Analise e Cresça",
    description: "Use dados de IA para prever atrasos e otimizar seus próximos orçamentos.",
    highlight: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold text-[#111c2d] mb-6">
              Simplicidade que gera escala
            </h2>
            <p className="text-[#3f4947] text-lg">
              Implementação rápida para que você foque no que importa: construir.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#006876] font-black text-8xl opacity-10 leading-none select-none"
          >
            PROCESS
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                step.highlight
                  ? "bg-gradient-primary text-white shadow-2xl shadow-[#003a35]/20"
                  : "bg-[#e7eeff]"
              }`}
            >
              <span
                className={`text-4xl font-black mb-6 block ${
                  step.highlight ? "text-white/20" : "text-[#003a35]/20"
                }`}
              >
                {step.num}
              </span>
              <h4
                className={`font-bold text-lg mb-2 ${
                  step.highlight ? "text-white" : "text-[#111c2d]"
                }`}
              >
                {step.title}
              </h4>
              <p
                className={`text-sm ${
                  step.highlight ? "text-white/80" : "text-[#3f4947]"
                }`}
              >
                {step.description}
              </p>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 z-10 -translate-y-1/2">
                  <span className="material-symbols-outlined text-[#bfc9c6] text-xl">
                    chevron_right
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
