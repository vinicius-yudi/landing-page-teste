import type {
  NavLink,
  Feature,
  Step,
  Audience,
  PricingTier,
  Testimonial,
  FAQItem,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES: Feature[] = [
  {
    icon: "Building2",
    title: "Gestão de Etapas",
    description:
      "Acompanhe cada fase da obra em tempo real. Defina marcos, prazos e dependências entre etapas para manter tudo sob controle.",
  },
  {
    icon: "BarChart3",
    title: "Controle Orçamentário",
    description:
      "Dashboards e relatórios financeiros detalhados. Monitore gastos, preveja custos e mantenha o orçamento dentro do planejado.",
  },
  {
    icon: "Users",
    title: "Gestão de Equipes",
    description:
      "Organize tarefas, cronogramas e responsabilidades. Todos os envolvidos na obra conectados em um único lugar.",
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Crie seu projeto",
    description:
      "Cadastre os dados da obra ou reforma com todas as informações essenciais.",
    icon: "FolderPlus",
  },
  {
    number: 2,
    title: "Defina etapas e equipe",
    description:
      "Organize as fases da obra e atribua responsáveis para cada atividade.",
    icon: "ListChecks",
  },
  {
    number: 3,
    title: "Acompanhe em tempo real",
    description:
      "Monitore o progresso, custos e prazos com dashboards atualizados.",
    icon: "Activity",
  },
  {
    number: 4,
    title: "Tome decisões com dados",
    description:
      "Use relatórios e inteligência artificial para otimizar sua obra.",
    icon: "Brain",
  },
];

export const AUDIENCES: Audience[] = [
  {
    icon: "HardHat",
    role: "Engenheiro Civil",
    description:
      "Visão completa de cronograma, orçamento e andamento. Gerencie múltiplas obras com controle total de cada etapa e equipe.",
  },
  {
    icon: "Compass",
    role: "Arquiteto",
    description:
      "Acompanhe propostas de design, pré-visualize ambientes com IA e mantenha-se conectado com toda a equipe da obra.",
  },
  {
    icon: "Wrench",
    role: "Mestre de Obras",
    description:
      "Cronogramas de trabalho, gestão de tarefas diárias e diário de obra. Tudo na palma da mão para o dia a dia no canteiro.",
  },
  {
    icon: "Home",
    role: "Proprietário / Cliente",
    description:
      "Transparência total sobre andamento e custos da sua obra. Acompanhe tudo sem precisar entender de engenharia.",
  },
];

export const DETAILED_FEATURES: Feature[] = [
  {
    icon: "BookOpen",
    title: "Diário de Obra",
    description:
      "Registre atividades diárias, condições climáticas e ocorrências importantes automaticamente.",
  },
  {
    icon: "FileText",
    title: "Gestão de Documentos",
    description:
      "Centralize plantas, contratos, notas fiscais e todos os documentos da obra em um só lugar.",
  },
  {
    icon: "Bell",
    title: "Notificações Inteligentes",
    description:
      "Alertas automáticos sobre prazos, atrasos, aprovações pendentes e marcos importantes.",
  },
  {
    icon: "Brain",
    title: "Previsões com IA",
    description:
      "Inteligência artificial para prever custos, identificar riscos e otimizar cronogramas.",
  },
  {
    icon: "Shield",
    title: "Permissões e Papéis",
    description:
      "Controle quem vê e edita cada informação com papéis personalizados por tipo de usuário.",
  },
  {
    icon: "PieChart",
    title: "Relatórios e Dashboards",
    description:
      "Visualize o andamento financeiro e operacional com gráficos claros e exportáveis.",
  },
  {
    icon: "Calendar",
    title: "Cronogramas de Equipe",
    description:
      "Schedule de trabalho dos integrantes de cada etapa com visualização de disponibilidade.",
  },
  {
    icon: "Palette",
    title: "Prévia Visual com IA",
    description:
      "Gere pré-visualizações de ambientes para apresentar propostas de design aos clientes.",
  },
];

export const PRICING: PricingTier[] = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar a organizar sua primeira obra.",
    features: [
      "1 projeto ativo",
      "3 usuários",
      "Gestão de etapas básica",
      "Controle de tarefas",
      "Diário de obra",
      "Suporte por e-mail",
    ],
    cta: "Comece Grátis",
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "R$ 97",
    period: "/mês",
    description: "Para profissionais que gerenciam múltiplas obras.",
    features: [
      "Até 10 projetos ativos",
      "15 usuários",
      "Tudo do Gratuito",
      "Relatórios avançados",
      "Dashboards financeiros",
      "Previsões com IA",
      "Gestão de documentos",
      "Suporte prioritário",
    ],
    cta: "Assine Agora",
    highlighted: true,
  },
  {
    name: "Empresa",
    price: "Sob consulta",
    period: "",
    description: "Para escritórios e equipes maiores com necessidades específicas.",
    features: [
      "Projetos ilimitados",
      "Usuários ilimitados",
      "Tudo do Profissional",
      "Integrações personalizadas",
      "API dedicada",
      "Prévia visual com IA",
      "Gerente de conta dedicado",
      "SLA garantido",
    ],
    cta: "Fale Conosco",
    highlighted: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Eduardo",
    role: "Engenheiro Civil",
    company: "CE Engenharia",
    quote:
      "O PRISSMA transformou a forma como gerencio minhas obras. Antes eu perdia horas com planilhas, agora tenho tudo centralizado e consigo tomar decisões muito mais rápido.",
    initials: "CE",
  },
  {
    name: "Ana Beatriz",
    role: "Arquiteta",
    company: "Studio AB Design",
    quote:
      "A funcionalidade de pré-visualização com IA é incrível. Meus clientes conseguem ver como o ambiente vai ficar antes mesmo da obra começar. Isso mudou minha forma de apresentar projetos.",
    initials: "AB",
  },
  {
    name: "Roberto Santos",
    role: "Mestre de Obras",
    company: "RS Construções",
    quote:
      "Finalmente uma ferramenta pensada pra quem tá no canteiro. O diário de obra e os cronogramas de equipe são práticos demais. Não preciso ser expert em tecnologia pra usar.",
    initials: "RS",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O que é o PRISSMA?",
    answer:
      "O PRISSMA é uma plataforma web SaaS de gestão de obras e reformas residenciais e comerciais de pequeno porte. Ele centraliza o gerenciamento de etapas, equipes, tarefas e orçamento em um único sistema acessível a todos os envolvidos na obra.",
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer:
      "Não! O PRISSMA é uma plataforma 100% web. Basta acessar pelo navegador em qualquer dispositivo — computador, tablet ou celular. Não é necessário instalar nada.",
  },
  {
    question: "O PRISSMA funciona para grandes construtoras?",
    answer:
      "O PRISSMA foi projetado especificamente para obras e reformas de pequeno porte, atendendo engenheiros civis, arquitetos e mestres de obra autônomos ou de pequenos escritórios. Para grandes incorporadoras ou construtoras, recomendamos soluções enterprise sob consulta.",
  },
  {
    question: "Como funciona o plano gratuito?",
    answer:
      "O plano gratuito permite gerenciar 1 projeto ativo com até 3 usuários. Você tem acesso à gestão de etapas básica, controle de tarefas e diário de obra. É perfeito para testar a plataforma ou gerenciar obras menores.",
  },
  {
    question: "Posso cancelar a assinatura a qualquer momento?",
    answer:
      "Sim! Não há fidelidade ou multa. Você pode cancelar sua assinatura a qualquer momento e continuará tendo acesso até o fim do período já pago. Seus dados ficam disponíveis por 90 dias após o cancelamento.",
  },
  {
    question: "Os meus dados estão seguros?",
    answer:
      "Absolutamente. Utilizamos criptografia de ponta a ponta, servidores seguros e fazemos backups automáticos diários. Seus dados de obra, documentos e informações financeiras estão protegidos com os mais altos padrões de segurança.",
  },
  {
    question: "Como funciona a inteligência artificial do PRISSMA?",
    answer:
      "A IA do PRISSMA ajuda em duas frentes: previsão de custos e cronograma (analisando dados históricos para sugerir estimativas mais precisas) e pré-visualização de ambientes (gerando imagens de como um espaço ficará após a reforma). Essas funcionalidades estão disponíveis nos planos Profissional e Empresa.",
  },
];
