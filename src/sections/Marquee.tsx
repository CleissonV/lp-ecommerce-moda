export default function Marquee() {
  const items = ['Inverno 2025', 'Novidades', 'Frete Grátis', 'Peças Exclusivas', 'Made in Brazil']

  return (
    <div className="py-4 bg-[#111] overflow-hidden">
      <div className="flex whitespace-nowrap marquee-inner">
        {Array(6).fill(items).flat().map((text: string, i: number) => (
          <span
            key={i}
            className="text-white/50 text-[11px] tracking-[0.35em] uppercase font-sans mx-8 flex items-center gap-8"
          >
            {text} <span className="text-[#9a8c6e]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
