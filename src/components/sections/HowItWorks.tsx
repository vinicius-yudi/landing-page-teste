"use client";

import { FolderPlus, ListChecks, Activity, Brain } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  FolderPlus: <FolderPlus className="w-6 h-6" />,
  ListChecks: <ListChecks className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Como Funciona"
          title="Simples de começar, poderoso de usar"
          subtitle="Em poucos passos você já tem sua obra organizada e sob controle."
        />
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="relative text-center"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-neutral-200" />
              )}
              <div className="relative mx-auto w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-500/20">
                {iconMap[step.icon]}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-2 font-[family-name:var(--font-heading)]">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
