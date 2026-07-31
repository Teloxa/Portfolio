import { motion } from 'motion/react'

interface AboutCopy {
  sectionTag: string
  title: string
  intro: string
  body1: string
  body2: string
  body3: string
  stats: Array<{ value: string; label: string }>
}

interface AboutProps {
  copy: AboutCopy
}

const About = ({ copy }: AboutProps) => {
return (
    <section id="about" className="relative px-6 py-28">
    <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mb-16"
        >
        <p className="mb-2 font-mono text-sm tracking-wider text-accent">
            {copy.sectionTag}
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
            {copy.title}
        </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid items-center gap-12 md:grid-cols-5">
        {/* Photo placeholder */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:col-span-2"
        >
            <div className="relative">
            {/* Decorative rings */}
            <div className="absolute -inset-3 rounded-full border border-accent/20" />
            <div className="absolute -inset-6 rounded-full border border-accent/10" />
            {/* Profile photo */}
            <div
                className="h-80 w-80 overflow-hidden rounded-full border-2 border-border bg-[linear-gradient(135deg,var(--color-accent-dim)_0%,var(--color-surface)_50%,var(--color-accent-dim)_100%)]"
            >
                <img
                src="/Photo-Profile-03.jpg"
                alt="Profile photo"
                className="h-full w-full object-cover object-center"
                style={{ objectPosition: 'center 20%' }}
                />
            </div>
            </div>
        </motion.div>

        {/* Bio */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 md:col-span-3"
        >
            <p className="text-lg leading-relaxed text-text">
            {copy.intro}
            </p>
            <p className="leading-relaxed text-muted">
            {copy.body1}
            </p>
            <p className="leading-relaxed text-muted">
            {copy.body2}{' '}{copy.body3}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4">
            {copy.stats.map((stat) => (
                <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-accent">
                    {stat.value}
                </p>
                <p className="text-xs font-medium tracking-wider text-muted">
                    {stat.label}
                </p>
                </div>
            ))}
            </div>
        </motion.div>
        </div>
    </div>
    </section>
)
}

export default About
