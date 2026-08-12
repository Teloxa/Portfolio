// ── Types ──────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export interface Technology {
  name: string
  icon: string
}

export interface TechCategory {
  category: string
  items: Technology[]
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export type Locale = 'en' | 'es'

export type Theme = 'dark' | 'light'

export interface SiteCopy {
  navItems: NavItem[]
  hero: {
    terminal: string
    titlePrefix: string
    titleName: string
    role: string
    tagline: string
    statusLabel: string
    statusValue: string
    cvButton: string
    githubButton: string
    contactButton: string
    scrollLabel: string
  }
  projects: {
    sectionTag: string
    title: string
    description: string
    items: Project[]
  }
  tech: {
    sectionTag: string
    title: string
    description: string
  }
  about: {
    sectionTag: string
    title: string
    intro: string
    body1: string
    body2: string
    body3: string
    stats: Array<{
      value: string
      label: string
    }>
  }
  footer: {
    copiedText: string
    copyright: string
  }
  controls: {
    theme: string
    cta: string
    themeAria: string
    languageAria: string
  }
}

export const contactEmail = 'moralesdvd03@hotmail.com'
export const resumeUrl = '/resume.pdf'

// ── Navigation ─────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'About', href: '#about' },
]

// ── Projects ───────────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Cloud Dashboard',
    description:
      'Real-time analytics dashboard with live data streaming, interactive charts, and role-based access control.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack marketplace with Stripe integration, inventory management, and a headless CMS for product content.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
  },
  {
    title: 'DevOps Pipeline Tool',
    description:
      'CI/CD orchestration tool that automates builds, tests, and deployments across multiple cloud providers.',
    tags: ['Go', 'Docker', 'Kubernetes', 'Terraform'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
  },
  {
    title: 'AI Chat Interface',
    description:
      'Conversational AI interface with streaming responses, context memory, and multimodal input support.',
    tags: ['React', 'Python', 'FastAPI', 'WebSockets'],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    link: '#',
  },
  {
    title: 'Design System',
    description:
      'Component library and design tokens system used across 12 internal products with full Storybook documentation.',
    tags: ['React', 'Storybook', 'Figma API', 'CSS'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    link: '#',
  },
  {
    title: 'Real-Time Collab Editor',
    description:
      'Google Docs-style collaborative editor with operational transforms, presence cursors, and version history.',
    tags: ['TypeScript', 'Yjs', 'WebRTC', 'Redis'],
    image: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    link: '#',
  },
]

// ── Technologies ───────────────────────────────────────

export const technologies: TechCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'C++', icon: 'cpp' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Vue', icon: 'vue' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    category: 'Backend & Tools',
    items: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Docker', icon: 'docker' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
]

// ── Social Links ───────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/teloxa', icon: '↗' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-morales-teloxa/', icon: '↗' },
  { label: 'Email', href: `mailto:${contactEmail}`, icon: '✉' },
]

const englishProjects: Project[] = [
  {
    title: 'Cloud Dashboard',
    description:
      'Real-time analytics dashboard with live data streaming, interactive charts, and role-based access control.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack marketplace with Stripe integration, inventory management, and a headless CMS for product content.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
  },
  {
    title: 'DevOps Pipeline Tool',
    description:
      'CI/CD orchestration tool that automates builds, tests, and deployments across multiple cloud providers.',
    tags: ['Go', 'Docker', 'Kubernetes', 'Terraform'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
  },
  {
    title: 'AI Chat Interface',
    description:
      'Conversational AI interface with streaming responses, context memory, and multimodal input support.',
    tags: ['React', 'Python', 'FastAPI', 'WebSockets'],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    link: '#',
  },
  {
    title: 'Design System',
    description:
      'Component library and design tokens system used across 12 internal products with full Storybook documentation.',
    tags: ['React', 'Storybook', 'Figma API', 'CSS'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    link: '#',
  },
  {
    title: 'Real-Time Collab Editor',
    description:
      'Google Docs-style collaborative editor with operational transforms, presence cursors, and version history.',
    tags: ['TypeScript', 'Yjs', 'WebRTC', 'Redis'],
    image: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    link: '#',
  },
]

const spanishProjects: Project[] = [
  {
    title: 'Panel en la Nube',
    description:
      'Panel de analítica en tiempo real con flujo de datos en vivo, gráficos interactivos y control de acceso por roles.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '#',
  },
  {
    title: 'Plataforma de Comercio',
    description:
      'Marketplace full stack con integración de Stripe, gestión de inventario y un CMS headless para contenido de productos.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
  },
  {
    title: 'Herramienta DevOps',
    description:
      'Orquestador de CI/CD que automatiza compilaciones, pruebas y despliegues en varios proveedores de nube.',
    tags: ['Go', 'Docker', 'Kubernetes', 'Terraform'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
  },
  {
    title: 'Interfaz de Chat con IA',
    description:
      'Interfaz conversacional con respuestas en streaming, memoria de contexto y soporte de entrada multimodal.',
    tags: ['React', 'Python', 'FastAPI', 'WebSockets'],
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    link: '#',
  },
  {
    title: 'Sistema de Diseño',
    description:
      'Biblioteca de componentes y sistema de tokens usado en 12 productos internos con documentación completa en Storybook.',
    tags: ['React', 'Storybook', 'Figma API', 'CSS'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    link: '#',
  },
  {
    title: 'Editor Colaborativo en Tiempo Real',
    description:
      'Editor colaborativo estilo Google Docs con transformaciones operacionales, cursores de presencia e historial de versiones.',
    tags: ['TypeScript', 'Yjs', 'WebRTC', 'Redis'],
    image: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    link: '#',
  },
]

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    navItems: [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'Tech Stack', href: '#tech' },
      { label: 'About', href: '#about' },
    ],
    hero: {
      terminal: '~/portfolio/teloxa — zsh',
      titlePrefix: "Hi, I'm",
      titleName: 'Teloxa',
      role: 'Fullstack Developer · React & Node.js',
      tagline:
        'I build fast, scalable web apps from database to UI — and I care about the parts most people skip.',
      statusLabel: 'status:',
      statusValue: 'open_to_work = true',
      cvButton: 'View the CV',
      githubButton: 'GitHub',
      contactButton: 'Contact',
      scrollLabel: 'scroll',
    },
    projects: {
      sectionTag: '02 — PROJECTS',
      title: 'Selected Work',
      description:
        'A curated collection of projects that showcase my approach to building scalable, polished applications.',
      items: englishProjects,
    },
    tech: {
      sectionTag: '03 — TECHNOLOGIES',
      title: 'My Tech Stack',
      description: 'Languages, frameworks, and tools I use to build modern products.',
    },
    about: {
      sectionTag: '04 — ABOUT',
      title: 'About Me',
      intro:
        "I'm a fullstack developer with an interest in crafting clean, performant web applications. I specialize in the React & Node.js ecosystem, building everything from interactive frontends to scalable backend services.",
      body1:
        "When I'm not writing code, I'm probably exploring new frameworks, contributing to open-source projects, or figuring out how to make that one animation feel just right. I believe great software is built with attention to the details most people skip.",
      body2: "Currently open to freelance opportunities and collaborations.",
      body3: "Let's build something remarkable together.",
      stats: [
        { value: '1+', label: 'Years Experience' },
        { value: '5+', label: 'Projects Shipped' },
        { value: '∞', label: 'Curiosity' },
      ],
    },
    footer: {
      copiedText: 'text copied',
      copyright: 'Crafted with React, TypeScript & a lot of coffee',
    },
    controls: {
      theme: 'Theme',
      cta: "Let's Talk",
      themeAria: 'Toggle theme',
      languageAria: 'Switch to Spanish',
    },
  },
  es: {
    navItems: [
      { label: 'Inicio', href: '#home' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Stack Tech', href: '#tech' },
      { label: 'Sobre mí', href: '#about' },
    ],
    hero: {
      terminal: '~/portfolio/teloxa — zsh',
      titlePrefix: 'Hola, soy',
      titleName: 'Teloxa',
      role: 'Desarrollador Fullstack · React y Node.js',
      tagline:
        'Construyo aplicaciones web rápidas y escalables de base de datos a interfaz, y me importan las partes que la mayoría suele omitir.',
      statusLabel: 'estado:',
      statusValue: 'open_to_work = true',
      cvButton: 'Ver CV',
      githubButton: 'GitHub',
      contactButton: 'Contacto',
      scrollLabel: 'desplaza',
    },
    projects: {
      sectionTag: '02 — PROYECTOS',
      title: 'Trabajos Seleccionados',
      description:
        'Una selección de proyectos que muestran mi enfoque para construir aplicaciones escalables y pulidas.',
      items: spanishProjects,
    },
    tech: {
      sectionTag: '03 — TECNOLOGÍAS',
      title: 'Mi Stack Tecnológico',
      description: 'Lenguajes, frameworks y herramientas que uso para crear productos modernos.',
    },
    about: {
      sectionTag: '04 — SOBRE MÍ',
      title: 'Sobre mí',
      intro:
        'Soy un desarrollador fullstack con interés en crear aplicaciones web limpias y de alto rendimiento. Me especializo en el ecosistema de React y Node.js, construyendo desde interfaces interactivas hasta servicios backend escalables.',
      body1:
        'Cuando no estoy escribiendo código, probablemente estoy explorando nuevos frameworks, contribuyendo a proyectos open source o ajustando una animación para que se sienta correcta. Creo que el gran software se construye cuidando los detalles que la mayoría omite.',
      body2: 'Actualmente abierto a oportunidades freelance y colaboraciones.',
      body3: 'Construyamos algo realmente memorable juntos.',
      stats: [
        { value: '1+', label: 'Años de experiencia' },
        { value: '5+', label: 'Proyectos entregados' },
        { value: '∞', label: 'Curiosidad' },
      ],
    },
    footer: {
      copiedText: 'texto copiado',
      copyright: 'Hecho con React, TypeScript y mucho café',
    },
    controls: {
      theme: 'Tema',
      cta: 'Hablemos',
      themeAria: 'Cambiar tema',
      languageAria: 'Cambiar a inglés',
    },
  },
}
