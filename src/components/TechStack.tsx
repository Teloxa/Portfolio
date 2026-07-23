import {
    SiCplusplus,
    SiCss,
    SiDocker,
    SiFigma,
    SiGithub,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVuedotjs,
} from 'react-icons/si'
import { technologies } from '../data'

const iconMap = {
    javascript: SiJavascript,
    python: SiPython,
    typescript: SiTypescript,
    cpp: SiCplusplus,
    react: SiReact,
    vue: SiVuedotjs,
    tailwind: SiTailwindcss,
    html: SiHtml5,
    css: SiCss,
    figma: SiFigma,
    node: SiNodedotjs,
    docker: SiDocker,
    mysql: SiMysql,
    mongodb: SiMongodb,
    postgresql: SiPostgresql,
    postman: SiPostman,
    git: SiGit,
    github: SiGithub,
}

const iconClassNames: Record<keyof typeof iconMap, string> = {
    javascript: 'text-[#f7df1e]',
    python: 'text-[#3776ab]',
    typescript: 'text-[#3178c6]',
    cpp: 'text-[#00599c]',
    react: 'text-[#61dafb]',
    vue: 'text-[#42b883]',
    tailwind: 'text-[#38bdf8]',
    html: 'text-[#e34f26]',
    css: 'text-[#1572b6]',
    figma: 'text-[#f24e1e]',
    node: 'text-[#339933]',
    docker: 'text-[#2496ed]',
    mysql: 'text-[#4479a1]',
    mongodb: 'text-[#47a248]',
    postgresql: 'text-[#4169e1]',
    postman: 'text-[#ff6c37]',
    git: 'text-[#f05032]',
    github: 'text-[#181717]',
}

const TechStack = () => {
    return (
    <section id="tech" className="relative px-6 py-28">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <p className="mb-2 font-mono text-sm tracking-wider text-accent">
                        03 — TECHNOLOGIES
                    </p>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
                        My Tech Stack
                    </h2>
                    <p className="mt-4 max-w-lg text-muted">
                        Languages, frameworks, and tools I use to build modern products.
                    </p>
                </div>

                <div className="space-y-12">
                    {technologies.map((category) => (
                        <div key={category.category}>
                            <h3 className="mb-6 flex items-center gap-3 font-mono text-sm font-medium tracking-wider text-muted">
                                <span className="h-px w-8 bg-accent" />
                                {category.category.toUpperCase()}
                            </h3>

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                                {category.items.map((tech) => {
                                    const Icon = iconMap[tech.icon as keyof typeof iconMap]
                                    const iconClassName = iconClassNames[tech.icon as keyof typeof iconMap]

                                    return (
                                        <div
                                            key={tech.name}
                                            className="glow-hover group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-hover"
                                        >
                                            <span
                                                className={`flex h-12 w-12 items-center justify-center rounded-full bg-background/60 ring-1 ring-border transition-transform duration-300 group-hover:scale-110 ${iconClassName}`}
                                                aria-hidden="true"
                                            >
                                                <Icon size={26} />
                                            </span>
                                            <span className="text-sm font-medium text-text">
                                                {tech.name}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </section>
)
}

export default TechStack
