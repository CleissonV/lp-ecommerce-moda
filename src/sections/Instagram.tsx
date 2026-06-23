import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LuInstagram, LuHeart } from 'react-icons/lu'
import Reveal from '../components/ui/Reveal'
import { lookbookImages, instaLikes } from '../constants/data'

interface InstaItemProps {
  src: string
  likes: string
  index: number
}

function InstaItem({ src, likes, index }: InstaItemProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.a
      ref={ref}
      href="#"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="aspect-square relative group overflow-hidden"
    >
      <img
        src={src}
        alt={`lookbook ${index + 1}`}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[#111]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5">
        <LuInstagram className="text-white" size={20} strokeWidth={1.5} />
        <span className="text-white text-xs font-sans flex items-center gap-1">
          <LuHeart size={11} className="fill-white" /> {likes}
        </span>
      </div>
    </motion.a>
  )
}

export default function Instagram() {
  return (
    <section className="py-28 max-w-[1400px] mx-auto px-6">
      <Reveal className="text-center mb-12">
        <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-3 font-sans">@lumiere.brasil</p>
        <h2 className="font-serif text-5xl md:text-6xl text-[#111] italic mb-4">Siga o universo LUMIÈRE</h2>
        <a
          href="#"
          className="group inline-flex items-center gap-2 text-[#5a564e] text-[11px] tracking-[0.25em] uppercase font-sans hover:text-[#111] transition-colors"
        >
          <LuInstagram size={14} strokeWidth={1.6} /> Seguir no Instagram
        </a>
      </Reveal>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {lookbookImages.map((src, i) => (
          <InstaItem key={i} src={src} likes={instaLikes[i]} index={i} />
        ))}
      </div>
    </section>
  )
}
