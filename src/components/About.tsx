import { motion } from 'motion/react'

const About = () => {
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
            04 — ABOUT
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-text md:text-5xl">
            About Me
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
              I'm a <span className="font-semibold text-accent">fullstack developer</span> with
              a interest in crafting clean, performant web applications. I
              specialize in the React &amp; Node.js ecosystem, building everything
              from interactive frontends to scalable backend services.
            </p>
            <p className="leading-relaxed text-muted">
              When I'm not writing code, I'm probably exploring new frameworks,
              contributing to open-source projects, or figuring out how to make
              that one animation feel just right. I believe great software is
              built with attention to the details most people skip.
            </p>
            <p className="leading-relaxed text-muted">
              Currently open to freelance opportunities and collaborations.
              Let's build something remarkable together.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '5+', label: 'Projects Shipped' },
                { value: '∞', label: 'Curiosity' },
              ].map((stat) => (
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
