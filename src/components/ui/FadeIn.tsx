import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode, CSSProperties } from 'react'

export default function FadeIn({
  children, delay = 0, className = '', y = 24, style,
}: { children: ReactNode; delay?: number; className?: string; y?: number; style?: CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      style={style}>
      {children}
    </motion.div>
  )
}
