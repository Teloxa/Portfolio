import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { resumeUrl } from '../data'

interface HeroCopy {
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

interface HeroProps {
    copy: HeroCopy
}

const Hero = ({ copy }: HeroProps) => {
    const heroRef = useRef<HTMLElement>(null)

    // Track scroll progress across the tall spacer, not the full page.
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })

    // On mobile (< 768px) start at scale 1 so the hero isn't zoomed/clipped.
    // On desktop keep the original 1.25 → 0.625 zoom-out effect.
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        isMobile ? [1, 0.85, 0.85] : [1.25, 0.625, 0.625]
    )

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative h-[200vh] bg-grid px-4 md:px-6"
        >
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                {/* Radial gradient overlay for depth */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_12%,var(--color-bg)_58%)]" />
                {/* Left & right edge fade to ensure grid never bleeds */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />

                <motion.div
                    style={{ scale }}
                    className="relative z-10 w-full max-w-full md:max-w-170 origin-center will-change-transform"
                >
                    <div className="mx-auto flex flex-col items-center text-center">
                        {/* Terminal bar */}
                        <div className="mb-7 flex items-center gap-2 font-mono text-xs tracking-wide text-muted">
                            <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                            <span>{copy.terminal}</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-mono text-[clamp(1.6rem,5vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight">
                            {copy.titlePrefix} <span className="text-accent">{copy.titleName}</span>_
                        </h1>

                        {/* Role */}
                        <p className="mt-2.5 font-mono text-sm md:text-[1.05rem] font-medium text-muted">
                            {copy.role}
                        </p>

                        {/* Tagline */}
                        <p className="mt-4 md:mt-6 max-w-full md:max-w-130 text-base md:text-lg leading-relaxed text-text">
                            {copy.tagline}
                            <span className="cursor-blink" />
                        </p>

                        {/* Status */}
                        <p className="mt-5 flex items-center gap-2 font-mono text-sm text-muted">
                            <b className="font-medium text-accent">{copy.statusLabel}</b> {copy.statusValue}
                        </p>

                        {/* CTA row */}
                        <div className="mt-9 flex flex-wrap justify-center gap-3">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md border border-accent bg-accent px-4 py-2.5 md:px-5 md:py-3 font-mono text-xs md:text-sm font-bold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent-bright"
                            >
                                {copy.cvButton}
                            </a>
                            <a
                                href="https://github.com/teloxa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md border border-border bg-surface px-4 py-2.5 md:px-5 md:py-3 font-mono text-xs md:text-sm text-text transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent-dim"
                            >
                                {copy.githubButton}
                            </a>
                            <a
                                href="https://www.linkedin.com/in/david-morales-teloxa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md border border-border bg-surface px-4 py-2.5 md:px-5 md:py-3 font-mono text-xs md:text-sm text-text transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent-dim"
                            >
                                {copy.contactButton}
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 md:bottom-10"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="flex flex-col items-center gap-2 text-muted">
                        <span className="font-mono text-xs tracking-wider">{copy.scrollLabel}</span>
                        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
                            <motion.rect
                                x="6.5" y="5" width="3" height="6" rx="1.5"
                                fill="currentColor"
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
