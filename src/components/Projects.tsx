import { useState, useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'motion/react'
import type { Project } from '../data'
import {
  SiReact, SiTypescript, SiNodedotjs, SiPython, SiGo, SiDocker,
  SiKubernetes, SiTerraform, SiFastapi, SiStorybook, SiRedis,
  SiD3Dotjs, SiNextdotjs, SiPrisma, SiStripe, SiPostgresql,
  SiCss3, SiHtml5, SiWebrtc, SiFigma
} from 'react-icons/si'
import { IoClose } from 'react-icons/io5'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

interface ProjectsCopy {
  sectionTag: string
  title: string
  description: string
  items: Project[]
}

interface ProjectsProps {
  copy: ProjectsCopy
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const getIconForTag = (tag: string) => {
  const t = tag.toLowerCase()
  if (t.includes('react')) return SiReact
  if (t.includes('typescript')) return SiTypescript
  if (t.includes('node')) return SiNodedotjs
  if (t.includes('python')) return SiPython
  if (t.includes('go')) return SiGo
  if (t.includes('docker')) return SiDocker
  if (t.includes('kubernetes')) return SiKubernetes
  if (t.includes('terraform')) return SiTerraform
  if (t.includes('fastapi')) return SiFastapi
  if (t.includes('storybook')) return SiStorybook
  if (t.includes('redis')) return SiRedis
  if (t.includes('d3')) return SiD3Dotjs
  if (t.includes('next')) return SiNextdotjs
  if (t.includes('prisma')) return SiPrisma
  if (t.includes('stripe')) return SiStripe
  if (t.includes('postgres')) return SiPostgresql
  if (t.includes('css')) return SiCss3
  if (t.includes('html')) return SiHtml5
  if (t.includes('webrtc')) return SiWebrtc
  if (t.includes('figma')) return SiFigma
  return null
}

const Projects = ({ copy }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

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
            {copy.sectionTag}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            {copy.description}
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
          {copy.items.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/30 cursor-pointer"
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
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
              >
                {/* Banner / Image */}
                <div
                  className="relative h-48 sm:h-64 w-full"
                  style={{ background: selectedProject.image }}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition-colors hover:bg-black/40"
                    aria-label="Close modal"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-text sm:text-3xl">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                    {selectedProject.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-8">
                    <h4 className="mb-4 font-mono text-sm tracking-wider text-accent">
                      TECHNOLOGIES
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map((tag) => {
                        const Icon = getIconForTag(tag)
                        return (
                          <div
                            key={tag}
                            className="flex items-center gap-2 rounded-full border border-border bg-surface-hover px-4 py-2"
                          >
                            {Icon && <Icon className="text-accent" size={18} />}
                            <span className="text-sm font-medium text-text">{tag}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-border/10">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
                    >
                      <FiExternalLink size={18} />
                      View Project
                    </a>
                    <a
                      href={selectedProject.repo || selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-surface-hover"
                    >
                      <FiGithub size={18} />
                      View Repository
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
