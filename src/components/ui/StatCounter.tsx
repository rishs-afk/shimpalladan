import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 4)
      setCount(Math.floor(ease * target))
      if (t < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatCounter({ value, label, sub }: { value: string; label: string; sub: string }) {
  const isInf = value === '∞'
  const m = value.match(/^(\d+)(.*)$/)
  const num = m ? parseInt(m[1]) : 0
  const suf = m ? m[2] : ''
  return (
    <div className="flex flex-col gap-2">
      <span className="font-display font-light leading-none text-tp" style={{ fontSize: 'clamp(40px,5vw,60px)' }}>
        {isInf ? '∞' : <CountUp target={num} suffix={suf} />}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ts mt-1">{label}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-tt">{sub}</span>
    </div>
  )
}
