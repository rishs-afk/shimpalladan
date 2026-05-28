export default function ScrollingTicker({ items, speed = 30 }: { items: string[]; speed?: number }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-white/[0.05] py-4 select-none">
      <div className="ticker-track" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-[11px] uppercase tracking-[0.14em] text-tt px-5 inline-flex items-center gap-5">
            {item}
            <span className="text-gold/40 text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
