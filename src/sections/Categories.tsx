import { LuArrowRight } from 'react-icons/lu'
import Reveal from '../components/ui/Reveal'
import CategoryTile from '../components/ui/CategoryTile'
import { categories } from '../constants/data'

export default function Categories() {
  return (
    <section className="py-24 max-w-[1400px] mx-auto px-6">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
        <div>
          <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-3 font-sans">Explore</p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#111]">Por Categoria</h2>
        </div>
        <a
          href="#colecao"
          className="group flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-[#5a564e] hover:text-[#111] transition-colors"
        >
          Ver tudo <LuArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <CategoryTile key={cat.name} category={cat} index={i} />
        ))}
      </div>
    </section>
  )
}
