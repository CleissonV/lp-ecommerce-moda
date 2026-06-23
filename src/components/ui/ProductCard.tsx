import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { LuHeart } from 'react-icons/lu'
import type { Product } from '../../types'

interface Props {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [wished, setWished] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-[#f0ebe3] mb-5">
        {/* base image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:scale-105"
        />
        {/* on-hover model image */}
        <img
          src={product.hoverImage}
          alt=""
          loading="lazy"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 scale-105 transition-all duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100"
        />

        {/* tag */}
        <span className={`absolute top-4 left-4 z-10 px-3 py-1 text-[10px] tracking-[0.25em] uppercase font-sans ${product.tag === 'Sale' ? 'bg-[#d4a0a0] text-white' : 'bg-white/90 text-[#111] backdrop-blur-sm'}`}>
          {product.tag}
        </span>

        {/* wishlist */}
        <button
          onClick={() => setWished(!wished)}
          aria-label="Favoritar"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/0 hover:bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors"
        >
          <LuHeart
            className={`transition-colors ${wished ? 'fill-[#d4a0a0] text-[#d4a0a0]' : 'text-white group-hover:text-[#111]'}`}
            size={15}
          />
        </button>

        {/* slide-up CTA */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <button className="w-full py-3.5 bg-[#111] text-white text-[10px] tracking-[0.3em] uppercase font-sans hover:bg-[#9a8c6e] transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <div className="space-y-1.5">
        <p className="text-[#9a8c6e] text-[10px] tracking-[0.25em] uppercase font-sans">{product.color}</p>
        <h3 className="font-serif text-xl text-[#111] leading-tight">{product.name}</h3>
        <div className="flex items-center gap-2.5">
          <span className="font-sans font-medium text-[#111] text-sm">{product.price}</span>
          {product.original && (
            <span className="font-sans text-[#b0a890] text-xs line-through">{product.original}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
