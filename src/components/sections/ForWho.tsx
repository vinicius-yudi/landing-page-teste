"use client";

import { HardHat, Compass, Wrench, Home } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { AUDIENCES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  HardHat: <HardHat className="w-8 h-8" />,
  Compass: <Compass className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  HardHat: { bg: "bg-primary-50", text: "text-primary-500" },
  Compass: { bg: "bg-accent-50", text: "text-accent-500" },
  Wrench: { bg: "bg-green-50", text: "text-green-600" },
  Home: { bg: "bg-violet-50", text: "text-violet-600" },
};

export default function ForWho() {
  return (
    <section id="para-quem" className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeading
          badge="Para Quem"
          title="Feito para quem constrói"
          subtitle="Cada profissional tem suas necessidades. O PRISSMA se adapta ao seu papel na obra."
        />
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((audience) => (
            <motion.div
              key={audience.role}
              variants={staggerItem}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-md transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 ${colorMap[audience.icon]?.bg} rounded-2xl flex items-center justify-center ${colorMap[audience.icon]?.text} mx-auto mb-5`}
              >
                {iconMap[audience.icon]}
              </div>
              <h3 className="text-lg font-bold text-neutral-800 mb-3 font-[family-name:var(--font-heading)]">
                {audience.role}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
