import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-10 px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-tt">
          © 2026 · The Better Life Company · Bangalore
        </p>
        <div className="flex items-center gap-5">
          <a href="mailto:shim@shimpalladan.com"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-tt hover:text-gold transition-colors duration-300">
            shim@shimpalladan.com
          </a>
          <span className="text-tt">·</span>
          <Link to="/contact"
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-tt hover:text-gold transition-colors duration-300">
            Start a conversation
          </Link>
        </div>
      </div>
    </footer>
  )
}
