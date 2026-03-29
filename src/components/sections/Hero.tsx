"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, CheckCircle2, Calendar, TrendingUp } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#f9f9ff]">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#8eebfd]/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#adefe5]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left – Text */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-block py-1 px-3 rounded-full bg-[#8eebfd]/30 text-[#006876] font-semibold text-xs tracking-wider uppercase mb-6">
            O Futuro da Construção Civil
          </span>
          <h1 className="font-[family-name:var(--font-plus-jakarta)] text-5xl md:text-6xl font-extrabold text-[#111c2d] leading-[1.1] tracking-tight mb-6">
            Edifique com{" "}
            <span className="text-gradient">Precisão</span>{" "}
            Digital.
          </h1>
          <p className="text-lg text-[#3f4947] mb-10 max-w-xl leading-relaxed">
            A plataforma definitiva para engenheiros e arquitetos que buscam controle total de obras — do orçamento inicial à entrega das chaves.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-[#003a35]/20 hover:scale-105 active:scale-95 transition-transform duration-200">
              Iniciar Teste Grátis
            </button>
            <button className="flex items-center gap-2 border border-[#bfc9c6] bg-white text-[#111c2d] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#f0f3ff] transition-colors">
              <span className="material-symbols-outlined text-xl">play_circle</span>
              Ver Demonstração
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["EC", "JC", "MV"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#003a35] to-[#006876] flex items-center justify-center text-white text-xs font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#3f4947]">
              <span className="font-bold text-[#111c2d]">+1.200</span> construtoras já otimizam suas obras conosco.
            </p>
          </div>
        </motion.div>

        {/* Right – Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative group"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#8eebfd]/30 to-[#adefe5]/20 rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-70 transition-opacity pointer-events-none" />

          <div className="relative bg-white rounded-2xl shadow-2xl border border-[#bfc9c6]/20 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
            {/* Card header */}
            <div className="bg-gradient-primary px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-white/70 text-xs mb-0.5">Projeto Ativo</p>
                <p className="text-white font-bold text-sm">Residencial Vila Nova</p>
              </div>
              <span className="bg-[#8eebfd]/20 text-[#8eebfd] text-xs font-bold px-3 py-1 rounded-full border border-[#8eebfd]/30">
                Em Andamento
              </span>
            </div>

            <div className="p-6">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#3f4947]">Progresso geral</span>
                  <span className="font-bold text-[#003a35]">68%</span>
                </div>
                <div className="h-2.5 bg-[#e7eeff] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#003a35] to-[#01534c] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "68%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: <BarChart3 className="w-4 h-4 text-[#003a35]" />, label: "Orçamento", value: "R$ 142k", sub: "-8% abaixo" },
                  { icon: <Users className="w-4 h-4 text-[#006876]" />, label: "Equipe", value: "12", sub: "profissionais" },
                  { icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />, label: "Tarefas", value: "34/50", sub: "concluídas" },
                  { icon: <Calendar className="w-4 h-4 text-[#003a35]" />, label: "Prazo", value: "45 dias", sub: "no prazo" },
                ].map((stat, i) => (
                  <div key={i} className="bg-[#f0f3ff] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      {stat.icon}
                      <span className="text-xs text-[#3f4947]">{stat.label}</span>
                    </div>
                    <p className="text-lg font-bold text-[#111c2d]">{stat.value}</p>
                    <p className="text-xs text-emerald-600">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Stages */}
              <div>
                <p className="text-xs font-semibold text-[#3f4947] uppercase tracking-wider mb-3">Etapas</p>
                <div className="space-y-2.5">
                  {[
                    { name: "Fundação", progress: 100 },
                    { name: "Alvenaria", progress: 85 },
                    { name: "Elétrica", progress: 40 },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center gap-3">
                      <span className="text-sm text-[#3f4947] w-20">{s.name}</span>
                      <div className="flex-1 h-1.5 bg-[#e7eeff] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#003a35] to-[#006876] rounded-full"
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-[#3f4947] w-8 text-right">{s.progress}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-xl border border-[#e7eeff] p-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#111c2d]">Etapa concluída!</p>
              <p className="text-xs text-[#3f4947]">Fundação — 100%</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
