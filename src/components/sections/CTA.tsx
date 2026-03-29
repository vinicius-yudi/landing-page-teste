"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#8eebfd]/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#8eebfd]/10 translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-[#8eebfd]/20 text-[#8eebfd] font-semibold text-xs tracking-wider uppercase mb-6 border border-[#8eebfd]/30"
            >
              Comece hoje mesmo
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-[family-name:var(--font-plus-jakarta)] text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight"
            >
              Pronto para elevar o nível das suas obras?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/80 text-lg mb-12"
            >
              Junte-se a milhares de profissionais que já transformaram sua gestão com a PRISSMA.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-[#8eebfd] text-[#111c2d] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-transform shadow-2xl">
                Comece Grátis Agora
              </button>
              <button className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Agendar Demo VIP
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 text-white/50 text-xs"
            >
              Sem cartão de crédito necessário. Teste por 14 dias sem compromisso.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
