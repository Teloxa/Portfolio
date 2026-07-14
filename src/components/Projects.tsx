import { motion } from 'motion/react'
import { projects } from '../data'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-28">
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
            02 — PROJECTS
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
            Selected Work
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            A curated collection of projects that showcase my approach to
            building scalable, polished applications.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/30"
            >
              {/* Image area */}
              <div
                className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                style={{ background: project.image }}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-text transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-dim/50 px-3 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
