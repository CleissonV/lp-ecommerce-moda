import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LuArrowRight, LuArrowDown } from 'react-icons/lu'
import LineReveal from '../components/ui/LineReveal'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProg } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroImgY = useTransform(heroProg, [0, 1], ['0%', '22%'])
  const heroTextY = useTransform(heroProg, [0, 1], ['0%', '40%'])

  return (
    <section ref={heroRef} className="relative min-h-[94vh] flex items-center overflow-hidden -mt-[1px]">
      <motion.div
        style={{ y: heroImgY }}
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80&auto=format&fit=crop"
          className="w-full h-[120%] object-cover object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ y: heroTextY }} className="relative z-10 max-w-[1400px] mx-auto px-6 w-full py-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#9a8c6e] tracking-[0.45em] uppercase text-[11px] mb-7 font-sans"
        >
          Coleção Inverno 2025
        </motion.p>

        <h1 className="font-serif text-[#111] leading-[0.86] text-7xl sm:text-8xl lg:text-[10rem] mb-8">
          <LineReveal delay={0.15}>L'Art</LineReveal>
          <LineReveal delay={0.3} className="italic text-[#9a8c6e] pl-[0.15em]">de</LineReveal>
          <LineReveal delay={0.45}>Vivre</LineReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="text-[#6a655c] text-base leading-relaxed mb-10 max-w-md font-sans font-light"
        >
          Peças atemporais para a mulher contemporânea. Tecidos nobres, cortes impecáveis, estética refinada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#colecao"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#111] text-white text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#9a8c6e] transition-colors"
          >
            Ver Coleção <LuArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#editorial"
            className="px-10 py-4 border border-[#cfc7b8] text-[#5a564e] text-[11px] tracking-[0.3em] uppercase font-sans hover:border-[#111] hover:text-[#111] transition-all text-center"
          >
            Editorial
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#9a8c6e] text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <LuArrowDown className="text-[#9a8c6e] animate-bounce" size={14} />
      </motion.div>
    </section>
  )
}
