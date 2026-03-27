"use client";

import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import StaggerChildren, {
  staggerItem,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="precos" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge="Preços"
          title="Planos para cada momento da sua empresa"
          subtitle="Comece gratuitamente e escale conforme sua necessidade."
        />
        <StaggerChildren className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className={cn(
                "rounded-2xl p-8 border transition-all duration-300",
                tier.highlighted
                  ? "bg-white border-primary-200 shadow-xl shadow-primary-100/40 scale-[1.02] relative"
                  : "bg-white border-neutral-100 shadow-sm hover:shadow-md"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold text-white bg-primary-500 rounded-full">
                  Mais Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-neutral-800 font-[family-name:var(--font-heading)]">
                  {tier.name}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  {tier.description}
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-neutral-900">
                  {tier.price}
                </span>
                <span className="text-neutral-400">{tier.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
