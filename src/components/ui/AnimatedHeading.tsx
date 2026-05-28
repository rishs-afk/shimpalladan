import { motion, useInView } from 'framer-motion'
import { useRef, ElementType, CSSProperties } from 'react'

export default function AnimatedHeading({
  children, as: Tag = 'h2', className = '', delay = 0, style,
}: { children: string; as?: ElementType; className?: string; delay?: number; style?: CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const words = children.split(' ')
  return (
    <Tag ref={ref} className={`flex flex-wrap ${className}`} style={style} aria-label={children}>
      {words.map((word: string, i: number) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.28em] last:mr-0 mb-1">
          <motion.span className="inline-block"
            initial={{ y: '105%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.04 }}>
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
