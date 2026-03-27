"use client";

import { Building2, BarChart3, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
};

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeading
          badge="Funcionalidades"
          title="Tudo que você precisa em um só lugar"
          subtitle="Três pilares essenciais para o sucesso da sua obra, integrados em uma única plataforma."
        />
        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3 font-[family-name:var(--font-heading)]">
                {feature.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
