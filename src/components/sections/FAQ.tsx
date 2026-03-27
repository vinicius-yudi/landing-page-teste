"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import FadeIn from "@/components/animations/FadeIn";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-neutral-50">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Perguntas frequentes"
          subtitle="Tire suas dúvidas sobre o PRISSMA."
        />
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item) => (
              <Accordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
