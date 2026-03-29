"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "account_tree",
    title: "Gestão de Etapas",
    description:
      "Cronogramas dinâmicos que se ajustam em tempo real. Visualize dependências e evite gargalos na obra.",
  },
  {
    icon: "payments",
    title: "Controle Orçamentário",
    description:
      "Gestão rigorosa de custos, insumos e fornecedores. Alertas automáticos para desvios de orçamento.",
  },
  {
    icon: "groups",
    title: "Gestão de Equipes",
    description:
      "Atribua tarefas, monitore o progresso e mantenha a comunicação fluida entre escritório e canteiro.",
  },
  {
    icon: "analytics",
    title: "Relatórios com BI",
    description:
      "Dashboards analíticos com dados em tempo real para decisões estratégicas e precisas na obra.",
  },
  {
    icon: "mobile_friendly",
    title: "App Offline",
    description:
      "Trabalhe sem sinal no canteiro. Dados sincronizados automaticamente quando a conexão retornar.",
  },
  {
    icon: "psychology",
    title: "Previsões com IA",
    description:
      "Inteligência artificial que antecipa atrasos e sugere correções antes que os problemas aconteçam.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#f0f3ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold text-[#111c2d] mb-6">
            Controle absoluto em cada etapa
          </h2>
          <p className="text-[#3f4947] text-lg">
            Substitua a confusão de arquivos descentralizados por uma única fonte de verdade para seu projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white p-8 rounded-2xl border border-transparent hover:border-[#006876]/20 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-[#003a35]/5 flex items-center justify-center mb-8 group-hover:bg-[#003a35] transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-[#003a35] group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-plus-jakarta)] text-xl font-bold text-[#111c2d] mb-4">
                {f.title}
              </h3>
              <p className="text-[#3f4947] leading-relaxed text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
