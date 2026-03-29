"use client";

import { motion } from "framer-motion";

const profiles = [
  {
    title: "Engenheiros Civis",
    description:
      "Controle técnico rigoroso, medições precisas e gestão de cronograma físico-financeiro.",
    icon: "engineering",
    image: "/engenheiro1.png",
  },
  {
    title: "Arquitetos",
    description:
      "Garanta que o projeto seja executado fielmente, gerenciando especificações e documentos.",
    icon: "architecture",
    image: "/arquiteta.png",
  },
  {
    title: "Proprietários",
    description:
      "Transparência total sobre os gastos e o progresso da sua obra, na palma da mão.",
    icon: "home_work",
    image: "/proprietario.png",
  },
];

export default function ForWho() {
  return (
    <section id="for-whom" className="py-24 bg-[#111c2d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold text-white mb-4">
            Feito para os pilares da construção
          </h2>
          <p className="text-white/60 text-lg">
            Soluções específicas para cada papel no ecossistema da obra.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {profiles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background photo */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111c2d] via-[#111c2d]/40 to-transparent" />

              {/* Large icon */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-3xl text-white">{p.icon}</span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-8">
                <h4 className="text-2xl font-[family-name:var(--font-plus-jakarta)] font-bold text-white mb-2">
                  {p.title}
                </h4>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{p.description}</p>
                <span className="inline-flex items-center gap-1 text-[#8eebfd] font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all">
                  Saiba mais
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
