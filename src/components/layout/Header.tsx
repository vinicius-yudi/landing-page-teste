"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#how-it-works", label: "Como Funciona" },
  { href: "#for-whom", label: "Para Quem" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#f9f9ff]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(17,28,45,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <a href="#">
            <img src="/logo.svg" alt="PRISSMA" className="h-20 w-auto" />
          </a>
          <nav className="hidden lg:flex gap-8 font-[family-name:var(--font-plus-jakarta)] font-semibold text-sm tracking-tight">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-all duration-300",
                  i === 0
                    ? "text-[#01534c] border-b-2 border-[#01534c] pb-0.5"
                    : "text-[#3f4947] hover:text-[#111c2d]"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm font-semibold text-[#003a35] hover:opacity-80 transition-opacity">
            Entrar
          </button>
          <button className="bg-gradient-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 active:scale-95 duration-300 shadow-lg shadow-[#003a35]/10">
            Comece Gratuitamente
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#111c2d]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">
            {isMobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#f9f9ff]/95 backdrop-blur-xl border-t border-[#bfc9c6]/30"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-base font-semibold text-[#3f4947] hover:text-[#003a35] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-2 w-full bg-gradient-primary text-white py-3 rounded-xl font-bold text-sm">
                Comece Gratuitamente
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
