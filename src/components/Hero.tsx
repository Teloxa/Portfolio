    import { useRef } from 'react'
    import { motion, useScroll, useTransform } from 'motion/react'
    import { contactEmail, resumeUrl } from '../data'

    const Hero = () => {
    const heroRef = useRef<HTMLElement>(null)

    // Track scroll progress across the tall spacer, not the full page.
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })

    // The spacer is 2x the viewport height, so the first 50% of progress maps
    // to the first 100vh of scrolling. Clamp the scale at 50% once that point is reached.
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.5])

    return (
        <section
        ref={heroRef}
        id="home"
        className="relative h-[200vh] bg-grid px-6"
        >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
            {/* Radial gradient overlay for depth */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,var(--color-bg)_74%)]" />

            <motion.div
            style={{ scale }}
            className="relative z-10 w-full max-w-170 origin-center will-change-transform"1
            >
            <div className="mx-auto flex flex-col items-center text-center">
                {/* Terminal bar */}
                <div className="mb-7 flex items-center gap-2 font-mono text-xs tracking-wide text-muted">
                <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                <span>~/portfolio/teloxa — zsh</span>
                </div>

                {/* Heading */}
                <h1 className="font-mono text-[clamp(2.4rem,6vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight">
                Hi, I'm <span className="text-accent">Teloxa</span>_
                </h1>

                {/* Role */}
                <p className="mt-2.5 font-mono text-[1.05rem] font-medium text-muted">
                Fullstack Developer · React &amp; Node.js
                </p>

                {/* Tagline */}
                <p className="mt-6 max-w-130 text-lg leading-relaxed text-text">
                I build fast, scalable web apps from database to UI — and I care about
                the parts most people skip.
                <span className="cursor-blink" />
                </p>

                {/* Status */}
                <p className="mt-5 flex items-center gap-2 font-mono text-sm text-muted">
                <b className="font-medium text-accent">status:</b> open_to_work = true
                </p>

                {/* CTA row */}
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-accent bg-accent px-5 py-3 font-mono text-sm font-bold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent-bright"
                >
                    View the CV
                </a>
                <a
                    href="https://github.com/teloxa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border bg-surface px-5 py-3 font-mono text-sm text-text transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent-dim"
                >
                    GitHub
                </a>
                <a
                    href={`mailto:${contactEmail}`}
                    className="rounded-md border border-border bg-surface px-5 py-3 font-mono text-sm text-text transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent-dim"
                >
                    Contact
                </a>
                </div>
            </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
            className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 md:bottom-6"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
            <div className="flex flex-col items-center gap-2 text-muted">
                <span className="font-mono text-xs tracking-wider">scroll</span>
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
