import { motion } from 'motion/react'
import { technologies } from '../data'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const TechStack = () => {
  return (
    <section id="tech" className="relative px-6 py-28">
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
            03 — TECHNOLOGIES
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
            My Tech Stack
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Tools and technologies I work with daily to build robust,
            production-ready applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {technologies.map((category) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-6 flex items-center gap-3 font-mono text-sm font-medium tracking-wider text-muted"
              >
                <span className="h-px w-8 bg-accent" />
                {category.category.toUpperCase()}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
              >
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="glow-hover flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-5 text-center transition-colors hover:bg-surface-hover"
                  >
                    <span className="text-2xl" role="img" aria-label={tech.name}>
                      {tech.icon}
                    </span>
                    <span className="text-sm font-medium text-text">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
