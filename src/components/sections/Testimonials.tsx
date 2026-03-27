"use client";

import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren, {
  staggerItem,
} from "@/components/animations/StaggerChildren";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

const bgColors = ["bg-primary-500", "bg-accent-500", "bg-green-600"];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeading
          badge="Depoimentos"
          title="Quem usa, recomenda"
          subtitle="Veja o que profissionais da construção civil dizem sobre o PRISSMA."
        />
        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${bgColors[index % bgColors.length]} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-neutral-400 text-xs">
                    {testimonial.role} &bull; {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
