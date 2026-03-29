const footerLinks = {
  Plataforma: [
    { label: "Funcionalidades", href: "#features" },
    { label: "Integrações", href: "#" },
    { label: "Preços", href: "#pricing" },
    { label: "Updates", href: "#" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contato", href: "#" },
  ],
  Suporte: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 lg:px-8 bg-[#f9f9ff] border-t border-[#e7eeff]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.svg" alt="PRISSMA" className="h-20 w-auto mb-4" />
            <p className="text-sm text-[#3f4947] leading-relaxed mb-6">
              A tecnologia que sustenta os grandes projetos do amanhã.
            </p>
            <div className="flex gap-3">
              {["social_leaderboard", "language", "link"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#003a35] hover:bg-[#003a35] hover:text-white transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h6 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[#111c2d] mb-6">
                {category}
              </h6>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#3f4947] hover:text-[#01534c] hover:underline transition-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#e7eeff] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#3f4947]">
            © 2025 PRISSMA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-[#3f4947]">Todos os sistemas operacionais</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
