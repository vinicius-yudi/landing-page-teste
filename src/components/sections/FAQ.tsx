"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Preciso de internet no canteiro de obras?",
    answer:
      "Não! Nosso aplicativo mobile funciona totalmente offline. Os dados são sincronizados automaticamente assim que você encontrar uma conexão com a internet.",
  },
  {
    question: "Posso exportar os dados para o Excel?",
    answer:
      "Sim! Você pode exportar qualquer relatório, planilha de custos ou cronograma para Excel, PDF ou CSV com apenas um clique. Seus dados pertencem a você.",
  },
  {
    question: "Existe limite de armazenamento de fotos?",
    answer:
      "No plano Profissional e Enterprise, o armazenamento é ilimitado. O plano Gratuito inclui 5GB, o suficiente para projetos menores.",
  },
  {
    question: "A PRISSMA integra com outros softwares?",
    answer:
      "Sim! Integramos com ferramentas como AutoCAD, BIM 360, ERPs populares e sistemas contábeis. O plano Enterprise inclui acesso à API completa para integrações customizadas.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "A maioria dos clientes está operacional em menos de 48 horas. Nossa equipe de onboarding acompanha você nos primeiros passos sem custo adicional.",
  },
  {
    question: "Os dados da minha obra são seguros?",
    answer:
      "Absolutamente. Usamos criptografia de ponta a ponta, backups automáticos em nuvem e seguimos as diretrizes da LGPD. Seus dados nunca são compartilhados com terceiros.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-[#bfc9c6]/20 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left font-[family-name:var(--font-plus-jakarta)] font-bold text-[#111c2d] hover:text-[#003a35] transition-colors group"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="material-symbols-outlined text-[#003a35] flex-shrink-0 ml-4"
        >
          expand_more
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-[#3f4947] text-sm leading-relaxed border-t border-[#f0f3ff]">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#f0f3ff]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[family-name:var(--font-plus-jakarta)] text-4xl font-extrabold text-center text-[#111c2d] mb-16"
        >
          Perguntas Frequentes
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#3f4947] text-sm mt-12"
        >
          Ainda tem dúvidas?{" "}
          <a href="#" className="text-[#003a35] font-bold hover:underline">
            Fale com nossa equipe
          </a>
        </motion.p>
      </div>
    </section>
  );
}
