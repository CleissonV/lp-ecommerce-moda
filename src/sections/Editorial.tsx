import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'
import Reveal from '../components/ui/Reveal'

export default function Editorial() {
  const bannerRef = useRef<HTMLElement>(null)
  const { scrollYProgress: bannerProg } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  })
  const bannerY = useTransform(bannerProg, [0, 1], ['-12%', '12%'])

  return (
    <section
      id="editorial"
      ref={bannerRef}
      className="relative h-[80vh] overflow-hidden flex items-center justify-center text-center"
    >
      <motion.img
        style={{ y: bannerY }}
        src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80&auto=format&fit=crop"
        alt="Editorial LUMIÈRE"
        className="absolute inset-0 w-full h-[124%] object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#111]/40" />
      <div className="relative z-10 px-6 max-w-3xl">
        <Reveal>
          <p className="text-white/70 tracking-[0.4em] uppercase text-[11px] mb-6 font-sans">Editorial · FW25</p>
          <h2 className="font-serif text-white text-5xl md:text-7xl italic leading-[0.95] mb-8">
            Vestir-se é<br />uma forma de arte
          </h2>
          <a
            href="#colecao"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#111] text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#9a8c6e] hover:text-white transition-colors"
          >
            Descobrir o Lookbook{' '}
            <LuArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
