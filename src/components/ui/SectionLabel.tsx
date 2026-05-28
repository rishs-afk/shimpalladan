import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionLabel({ number, label, className = '' }: { number: string; label?: string; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-[11px] tracking-[0.12em] text-gold">{number}</span>
      {label && (
        <>
          <span className="w-5 h-px bg-gold/30" />
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-tt">{label}</span>
        </>
      )}
    </motion.div>
  )
}
