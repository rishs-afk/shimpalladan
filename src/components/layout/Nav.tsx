import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/about', label: 'About' },
  { href: '/work/indrajaal', label: 'Work' },
  { href: '/explorations', label: 'Explorations' },
  { href: '/toolkit', label: 'Toolkit' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (y < 40) setVisible(true)
      else if (y > lastY + 8) setVisible(false)
      else if (y < lastY - 4) setVisible(true)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  useEffect(() => setOpen(false), [pathname])

  if (pathname === '/') return null

  return (
    <>
      <motion.header
        animate={{ y: visible ? 0 : -72, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-colors"
        style={{
          background: scrolled ? 'rgba(9,9,14,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-screen-xl mx-auto px-6 lg:px-12 h-[64px] flex items-center justify-between">
          <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#7A7986] hover:text-[#C8A566] transition-colors duration-300">
            Shim Palladan
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} to={l.href}
                className="gold-underline font-mono text-[11px] uppercase tracking-[0.12em] text-[#7A7986] hover:text-[#EFECE6] transition-colors duration-300">
                {l.label}
              </Link>
            ))}
            <Link to="/contact"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C8A566] border border-[rgba(200,165,102,0.3)] px-4 py-2 hover:bg-[rgba(200,165,102,0.07)] transition-all duration-300">
              Start a conversation
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2 z-[60] relative" aria-label="Toggle menu">
            <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-[#EFECE6] origin-center" style={{ transition: 'none' }} />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-[#EFECE6]" />
            <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-[#EFECE6] origin-center" style={{ transition: 'none' }} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(9,9,14,0.97)', backdropFilter: 'blur(24px)' }}>
            {links.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                <Link to={l.href} className="font-display text-[44px] font-light text-[#EFECE6] hover:text-[#C8A566] transition-colors duration-300 block">
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Link to="/contact" className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#C8A566] border border-[rgba(200,165,102,0.3)] px-7 py-3">
                Start a conversation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
