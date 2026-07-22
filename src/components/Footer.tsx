import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { contactEmail, socialLinks } from '../data'

const Footer = () => {
  const year = new Date().getFullYear()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timer = window.setTimeout(() => setCopied(false), 1500)

    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer className="relative border-t border-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Wordmark */}
          <a
            href="#home"
            className="font-mono text-xl font-bold tracking-tight text-text transition-colors hover:text-accent"
          >
            teloxa<span className="text-accent">_</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <div key={link.label} className="flex items-center gap-1.5 text-sm text-muted">
                {link.label === 'Email' ? (
                  <>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email"
                      title={copied ? 'Copied' : 'Copy email'}
                      className="flex cursor-pointer items-center gap-1.5 transition-colors hover:text-accent"
                    >
                      <span>{contactEmail}</span>
                    </button>
                    {copied ? (
                      <span className="text-xs font-medium text-accent">
                        text copied
                      </span>
                    ) : null}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email"
                      title={copied ? 'Copied' : 'Copy email'}
                      className="text-xs transition-colors hover:text-accent"
                    >
                      {copied ? '✓' : link.icon}
                    </button>
                  </>
                ) : (
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1.5 transition-colors hover:text-accent"
                  >
                    {link.label}
                    <span className="text-xs">{link.icon}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-16 bg-border" />

          {/* Copyright */}
          <p className="text-center text-xs text-muted">
            © {year} Teloxa. Crafted with React, TypeScript &amp; a lot of ☕
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
