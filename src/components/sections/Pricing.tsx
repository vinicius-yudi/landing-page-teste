"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    highlight: false,
    features: [
      { text: "1 Obra ativa", active: true },
      { text: "Diário de Obra básico", active: true },
      { text: "Relatórios BI", active: false },
      { text: "Gestão de Estoque", active: false },
    ],
    cta: "Começar Agora",
    ctaStyle: "border",
  },
  {
    name: "Profissional",
    price: "R$ 197",
    period: "/mês",
    highlight: true,
    badge: "Mais Popular",
    features: [
      { text: "Obras ilimitadas", active: true },
      { text: "Diário de Obra Premium", active: true },
      { text: "Gestão de Estoque Completa", active: true },
      { text: "Dashboards de BI", active: true },
    ],
    cta: "Contratar Plano",
    ctaStyle: "secondary",
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    highlight: false,
    features: [
      { text: "Múltiplos usuários admin", active: true },
      { text: "API de integração", active: true },
      { text: "Treinamento dedicado", active: true },
      { text: "Suporte 24/7", active: true },
    ],
    cta: "Falar com Consultor",
    ctaStyle: "border",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold text-[#111c2d] mb-6">
            Planos flexíveis para crescer com você
          </h2>
          <p className="text-[#3f4947]">
            Escolha o plano que melhor se adapta ao volume de suas obras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col p-10 rounded-3xl ${
                plan.highlight
                  ? "bg-gradient-primary text-white shadow-2xl shadow-[#003a35]/30 scale-105 z-10"
                  : "bg-[#f0f3ff]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8eebfd] text-[#111c2d] font-bold text-[10px] uppercase tracking-widest py-1 px-4 rounded-full">
                  {plan.badge}
                </div>
              )}

              <h4
                className={`font-[family-name:var(--font-plus-jakarta)] font-bold text-lg mb-2 ${
                  plan.highlight ? "text-white" : "text-[#111c2d]"
                }`}
              >
                {plan.name}
              </h4>

              <div className="mb-8 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-black ${
                    plan.highlight ? "text-white" : "text-[#111c2d]"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-white/70" : "text-[#3f4947]"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-center gap-3 text-sm ${
                      !f.active
                        ? plan.highlight
                          ? "text-white/30"
                          : "text-[#3f4947]/30"
                        : plan.highlight
                        ? "text-white"
                        : "text-[#111c2d]"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-xl ${
                        !f.active
                          ? "opacity-20"
                          : plan.highlight
                          ? "text-[#8eebfd]"
                          : "text-[#003a35]"
                      }`}
                    >
                      check_circle
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  plan.ctaStyle === "secondary"
                    ? "bg-[#8eebfd] text-[#111c2d] hover:opacity-90"
                    : plan.highlight
                    ? "border border-white/30 text-white hover:bg-white/10"
                    : "border border-[#6f7977] text-[#111c2d] hover:bg-white"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#3f4947] text-sm mt-10"
        >
          Todos os planos incluem 14 dias gratuitos. Sem cartão de crédito.
        </motion.p>
      </div>
    </section>
  );
}
