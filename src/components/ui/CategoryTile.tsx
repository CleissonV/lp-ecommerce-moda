import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'
import type { Category } from '../../types'

interface Props {
  category: Category
  index: number
}

export default function CategoryTile({ category, index }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.a
      ref={ref}
      href={category.link}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block overflow-hidden bg-[#f0ebe3]"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={category.image || category.img}
          alt={category.name || category.label}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111]/55 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 flex items-end justify-between">
        <div>
          <h3 className="font-serif text-3xl text-white italic leading-none">{category.name || category.label}</h3>
          <p className="text-white/70 text-[10px] tracking-[0.25em] uppercase font-sans mt-2">{category.count}</p>
        </div>
        <span className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <LuArrowUpRight size={18} />
        </span>
      </div>
    </motion.a>
  )
}
