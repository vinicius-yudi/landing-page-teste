"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "A PRISSMA mudou radicalmente como gerenciamos nossas obras. O controle orçamentário é imbatível e a transparência para o cliente final é um diferencial enorme.",
    name: "Ricardo Mendes",
    role: "Diretor Técnico, RM Construtora",
    initials: "RM",
    color: "from-[#003a35] to-[#01534c]",
  },
  {
    text: "Finalmente uma plataforma que entende a rotina real de um escritório de arquitetura. O Diário de Obra e a Gestão de Documentos nos economizam horas semanais.",
    name: "Juliana Castro",
    role: "Arquiteta Sênior, JC Studio",
    initials: "JC",
    color: "from-[#006876] to-[#003a35]",
  },
  {
    text: "Reduzi as perdas de materiais em 22% logo no primeiro projeto usando o módulo de estoque. A interface é tão intuitiva que a equipe do campo adotou rapidamente.",
    name: "Marcos Viana",
    role: "Engenheiro Civil Autônomo",
    initials: "MV",
    color: "from-[#243448] to-[#006876]",
  },
  {
    text: "O módulo de IA preditiva nos alertou sobre um possível atraso com 3 semanas de antecedência. Conseguimos reorganizar a equipe e entregar no prazo.",
    name: "Fernanda Alves",
    role: "Gestora de Projetos, BuildPro",
    initials: "FA",
    color: "from-[#01534c] to-[#243448]",
  },
  {
    text: "Antes usávamos 5 ferramentas diferentes. Hoje tudo está na PRISSMA. A centralização transformou nossa eficiência operacional completamente.",
    name: "Paulo Rodrigues",
    role: "CEO, Rodrigues Construções",
    initials: "PR",
    color: "from-[#003a35] to-[#243448]",
  },
  {
    text: "Como proprietário, agora tenho visibilidade total da minha obra em tempo real. Sem surpresas, sem stress — só resultados.",
    name: "Ana Beatriz Lima",
    role: "Proprietária — Obra Residencial",
    initials: "AB",
    color: "from-[#006876] to-[#01534c]",
  },
];

// Duplicate for seamless loop
const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#f0f3ff] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold text-[#111c2d]">
            O que dizem os líderes do setor
          </h2>
          <p className="text-[#3f4947] mt-4 text-lg">Mais de 1.200 construtoras confiam na PRISSMA.</p>
        </motion.div>
      </div>

      {/* Auto-scroll carousel */}
      <div className="relative overflow-hidden mb-12">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#f0f3ff] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#f0f3ff] to-transparent z-10 pointer-events-none" />

        <div className="carousel-track flex gap-6 w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[360px] flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-[#bfc9c6]/20 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#006876] mb-4">
                {Array(5).fill(null).map((_, j) => (
                  <span key={j} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="italic text-[#3f4947] mb-6 text-sm leading-relaxed flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#111c2d]">{t.name}</p>
                  <p className="text-xs text-[#3f4947]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured testimonial with navigation */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#e7eeff] relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8eebfd]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex gap-1 text-[#006876] mb-6">
              {Array(5).fill(null).map((_, j) => (
                <span key={j} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-lg italic text-[#3f4947] mb-8 leading-relaxed">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold`}
                  >
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#111c2d]">{testimonials[active].name}</p>
                    <p className="text-sm text-[#3f4947]">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-6 h-2 bg-[#003a35]"
                    : "w-2 h-2 bg-[#bfc9c6] hover:bg-[#006876]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Arrow navigation */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-[#bfc9c6] flex items-center justify-center text-[#3f4947] hover:border-[#003a35] hover:text-[#003a35] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
          </button>
          <button
            onClick={() => setActive((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full border border-[#bfc9c6] flex items-center justify-center text-[#3f4947] hover:border-[#003a35] hover:text-[#003a35] transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
