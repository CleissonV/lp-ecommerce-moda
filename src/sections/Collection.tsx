import { LuArrowRight } from 'react-icons/lu'
import Reveal from '../components/ui/Reveal'
import ProductCard from '../components/ui/ProductCard'
import { products } from '../constants/data'

export default function Collection() {
  return (
    <section id="colecao" className="pb-24 max-w-[1400px] mx-auto px-6">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
        <div>
          <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-3 font-sans">Nova Coleção</p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#111]">Inverno 2025</h2>
        </div>
        <a
          href="#"
          className="group flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-[#5a564e] hover:text-[#111] transition-colors"
        >
          Ver todas as peças <LuArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
