"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import {
  BarChart3,
  Users,
  CheckCircle2,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <FadeIn direction="right">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full border border-primary-100">
                Plataforma SaaS para Gestão de Obras
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 font-[family-name:var(--font-heading)] leading-[1.1] mb-6">
                Controle total da sua obra,{" "}
                <span className="text-primary-500">do orçamento à entrega</span>
              </h1>
              <p className="text-lg text-neutral-500 mb-8 max-w-lg leading-relaxed">
                Gerencie etapas, equipes e orçamentos de obras e reformas em um
                único lugar. Mais previsibilidade, menos surpresas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button size="lg">Comece Gratuitamente</Button>
                <Button variant="outline" size="lg">
                  Saiba Mais
                </Button>
              </div>
              <p className="text-sm text-neutral-400">
                Sem cartão de crédito &bull; Teste grátis por 14 dias
              </p>
            </div>
          </FadeIn>

          {/* Right - Dashboard Mockup */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl shadow-neutral-200/60 border border-neutral-100 p-6 lg:p-8">
                {/* Mockup header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-neutral-800 text-sm">
                      Obra Residencial Vila Nova
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Atualizado há 2 minutos
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Em andamento
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-500">Progresso geral</span>
                    <span className="font-semibold text-primary-600">68%</span>
                  </div>
                  <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full w-[68%] bg-gradient-to-r from-primary-400 to-primary-500 rounded-full" />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="w-4 h-4 text-primary-500" />
                      <span className="text-xs text-neutral-400">Orçamento</span>
                    </div>
                    <p className="text-lg font-bold text-neutral-800">R$ 142k</p>
                    <p className="text-xs text-green-500">-8% abaixo do prev.</p>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-accent-500" />
                      <span className="text-xs text-neutral-400">Equipe</span>
                    </div>
                    <p className="text-lg font-bold text-neutral-800">12</p>
                    <p className="text-xs text-neutral-400">profissionais</p>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-neutral-400">Tarefas</span>
                    </div>
                    <p className="text-lg font-bold text-neutral-800">34/50</p>
                    <p className="text-xs text-neutral-400">concluídas</p>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-primary-500" />
                      <span className="text-xs text-neutral-400">Prazo</span>
                    </div>
                    <p className="text-lg font-bold text-neutral-800">45 dias</p>
                    <p className="text-xs text-green-500">no prazo</p>
                  </div>
                </div>

                {/* Recent activity */}
                <div>
                  <p className="text-xs font-medium text-neutral-400 mb-3">
                    Etapas recentes
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "Fundação", progress: 100, color: "bg-green-500" },
                      { name: "Alvenaria", progress: 85, color: "bg-primary-500" },
                      { name: "Elétrica", progress: 40, color: "bg-accent-500" },
                    ].map((stage) => (
                      <div key={stage.name} className="flex items-center gap-3">
                        <span className="text-sm text-neutral-600 w-20">
                          {stage.name}
                        </span>
                        <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${stage.color} rounded-full`}
                            style={{ width: `${stage.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-neutral-500 w-8 text-right">
                          {stage.progress}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-neutral-100 p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-700">
                    Etapa concluída!
                  </p>
                  <p className="text-xs text-neutral-400">Fundação - 100%</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
