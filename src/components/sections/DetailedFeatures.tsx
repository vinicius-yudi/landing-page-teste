"use client";

import { motion } from "framer-motion";

const resources = [
  { icon: "book", title: "Diário de Obra", description: "Relatórios diários automáticos com fotos e clima integrados." },
  { icon: "description", title: "Gestão de Documentos", description: "Armazenamento em nuvem seguro para projetos, alvarás e notas." },
  { icon: "psychology", title: "Previsões com IA", description: "Inteligência que antecipa atrasos e sugere correções no orçamento." },
  { icon: "inventory_2", title: "Estoque e Insumos", description: "Controle total de entrada e saída de materiais no canteiro." },
  { icon: "mobile_friendly", title: "App Offline", description: "Trabalhe mesmo sem sinal de internet e sincronize depois." },
  { icon: "analytics", title: "Relatórios BI", description: "Dashboards analíticos para decisões baseadas em dados reais." },
];

export default function DetailedFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left: Headline + stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:pr-12"
          >
            <h2 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold text-[#111c2d] mb-6">
              Tudo o que você precisa em um só lugar.
            </h2>
            <p className="text-[#3f4947] mb-10 text-lg leading-relaxed">
              Elimine o uso de múltiplas ferramentas desconectadas. Centralizamos o fluxo de trabalho da construção civil.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { value: "98%", label: "Satisfação" },
                { value: "30%", label: "Redução de Custos" },
                { value: "5x", label: "Mais Produtividade" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-black text-[#003a35]">{stat.value}</span>
                  <span className="text-xs text-[#3f4947] font-bold uppercase tracking-tighter">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-[#003a35]/20 hover:scale-105 active:scale-95 transition-transform"
            >
              Explorar Funcionalidades
            </motion.button>
          </motion.div>

          {/* Right: Feature mini-cards */}
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[#f0f3ff] p-6 rounded-2xl hover:bg-[#e7eeff] transition-colors group cursor-default"
            >
              <span className="material-symbols-outlined text-[#006876] text-4xl mb-4 block group-hover:text-[#003a35] transition-colors">
                {r.icon}
              </span>
              <h5 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[#111c2d] mb-2">{r.title}</h5>
              <p className="text-sm text-[#3f4947] leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
