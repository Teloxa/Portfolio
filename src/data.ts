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

export const contactEmail = 'you@email.com'

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
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '🎬' },
      { name: 'HTML/CSS', icon: '🌐' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'GraphQL', icon: '◈' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: '🔀' },
      { name: 'Docker', icon: '🐳' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Figma', icon: '🎯' },
      { name: 'Linux', icon: '🐧' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
]

// ── Social Links ───────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/teloxa', icon: '↗' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/teloxa', icon: '↗' },
  { label: 'Email', href: `mailto:${contactEmail}`, icon: '✉' },
]
