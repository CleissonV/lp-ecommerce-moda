import { benefits } from '../constants/data'

export default function Benefits() {
  return (
    <section className="border-y border-[#e8e2d8]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e8e2d8]">
        {benefits.map((b, i) => {
          const Icon = b.icon
          return (
            <div key={i} className="flex items-center justify-center gap-3 py-7 text-[#5a564e]">
              <Icon size={20} strokeWidth={1.5} className="text-[#9a8c6e]" />
              <span className="text-[11px] tracking-[0.2em] uppercase font-sans">{b.text}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
