"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight mb-6">
              Pronto para transformar a gestão da sua obra?
            </h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Comece gratuitamente e veja a diferença. Sem cartão de crédito,
              sem compromisso. Sua primeira obra organizada em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-50 shadow-lg"
              >
                Criar Minha Conta Grátis
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Falar com Consultor
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
