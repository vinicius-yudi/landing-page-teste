"use client";

import {
  BookOpen,
  FileText,
  Bell,
  Brain,
  Shield,
  PieChart,
  Calendar,
  Palette,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { DETAILED_FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Bell: <Bell className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  PieChart: <PieChart className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export default function DetailedFeatures() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Recursos"
          title="Recursos que fazem a diferença"
          subtitle="Ferramentas pensadas especificamente para o dia a dia de quem gerencia obras e reformas."
        />
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DETAILED_FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              className="bg-white rounded-xl p-6 border border-neutral-100 hover:border-primary-100 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-500 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-base font-bold text-neutral-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
