import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion'
import {
  LuSearch, LuShoppingBag, LuHeart, LuMenu, LuX, LuArrowRight, LuArrowUpRight,
  LuArrowDown, LuInstagram, LuTruck, LuRefreshCw, LuHeadphones, LuLeaf, LuGem,
  LuScissors, LuInfinity,
} from 'react-icons/lu'

// ─── Data ────────────────────────────────────────────────────────────────────

const products = [
  { name: 'Vestido Seda Midi', price: 'R$ 1.890', original: null, tag: 'Novo', color: 'Champagne', sizes: ['P', 'M', 'G'] },
  { name: 'Blazer Structured', price: 'R$ 2.340', original: 'R$ 2.890', tag: 'Sale', color: 'Preto', sizes: ['P', 'M', 'G', 'GG'] },
  { name: 'Calça Wide Leg Linho', price: 'R$ 1.290', original: null, tag: 'Destaque', color: 'Areia', sizes: ['P', 'M', 'G'] },
  { name: 'Blusa Seda Slip', price: 'R$ 890', original: null, tag: 'Novo', color: 'Nude', sizes: ['PP', 'P', 'M', 'G'] },
  { name: 'Saia Midi Plissada', price: 'R$ 1.190', original: 'R$ 1.490', tag: 'Sale', color: 'Terracota', sizes: ['P', 'M', 'G'] },
  { name: 'Conjunto Cropped', price: 'R$ 1.650', original: null, tag: 'Exclusivo', color: 'Marfim', sizes: ['P', 'M'] },
]

// Primary (flatlay / still) and hover (on-model) image for each product — crossfade on hover
const productImages = [
  'https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80&auto=format&fit=crop',
]
const productHover = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544441893-675973e31985?w=700&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80&auto=format&fit=crop',
]

const categories = [
  { label: 'Vestidos', count: '24 peças', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80&auto=format&fit=crop' },
  { label: 'Alfaiataria', count: '18 peças', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop' },
  { label: 'Essenciais', count: '32 peças', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80&auto=format&fit=crop' },
]

const lookbookImages = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80&auto=format&fit=crop',
]
const instaLikes = ['2.4k', '1.8k', '3.1k', '4.2k', '2.9k', '1.6k']

const values = [
  { icon: LuLeaf, title: 'Sustentável', desc: 'Tecidos de origem responsável e certificada.' },
  { icon: LuGem, title: 'Exclusivo', desc: 'Edições limitadas — nunca reposição em massa.' },
  { icon: LuScissors, title: 'Artesanal', desc: 'Costura por mãos brasileiras especializadas.' },
  { icon: LuInfinity, title: 'Atemporal', desc: 'Peças que atravessam estações e tendências.' },
]

const benefits = [
  { icon: LuTruck, text: 'Frete grátis acima de R$ 500' },
  { icon: LuRefreshCw, text: 'Troca em 30 dias' },
  { icon: LuHeadphones, text: 'Atendimento VIP' },
]

const footerCols = [
  { title: 'Comprar', links: ['Novidades', 'Coleções', 'Sale', 'Editorial'] },
  { title: 'Ajuda', links: ['Tamanhos', 'Trocas', 'Frete', 'Contato'] },
  { title: 'Empresa', links: ['Sobre', 'Sustentabilidade', 'Imprensa', 'Afiliados'] },
]

const navLinks = ['Novidades', 'Coleções', 'Sale', 'Editorial', 'Sobre']

// ─── Reusable motion helpers ──────────────────────────────────────────────────

// One headline line that rises from behind a mask
const LineReveal = ({ children, delay = 0, className = '' }) => (
  <span className="block overflow-hidden">
    <motion.span
      className={`block ${className}`}
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
)

const Reveal = ({ children, delay = 0, y = 30, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Sub-components (hooks never called inside .map()) ────────────────────────

const ProductCard = ({ product, index }) => {
  const ref = useRef(null)
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
          src={productImages[index % productImages.length]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:scale-105"
        />
        {/* on-hover model image */}
        <img
          src={productHover[index % productHover.length]}
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
          <LuHeart className={`transition-colors ${wished ? 'fill-[#d4a0a0] text-[#d4a0a0]' : 'text-white group-hover:text-[#111]'}`} size={15} />
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
          {product.original && <span className="font-sans text-[#b0a890] text-xs line-through">{product.original}</span>}
        </div>
      </div>
    </motion.div>
  )
}

const CategoryTile = ({ cat, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.a
      ref={ref}
      href="#colecao"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block overflow-hidden bg-[#f0ebe3]"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={cat.img}
          alt={cat.label}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111]/55 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 flex items-end justify-between">
        <div>
          <h3 className="font-serif text-3xl text-white italic leading-none">{cat.label}</h3>
          <p className="text-white/70 text-[10px] tracking-[0.25em] uppercase font-sans mt-2">{cat.count}</p>
        </div>
        <span className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <LuArrowUpRight size={18} />
        </span>
      </div>
    </motion.a>
  )
}

const ValueItem = ({ item, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = item.icon
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-4"
    >
      <span className="shrink-0 w-11 h-11 rounded-full border border-[#9a8c6e]/40 flex items-center justify-center text-[#9a8c6e]">
        <Icon size={18} strokeWidth={1.4} />
      </span>
      <div>
        <h4 className="font-serif text-lg text-[#111] mb-0.5">{item.title}</h4>
        <p className="text-[#8a8274] text-sm font-sans font-light leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

const InstaItem = ({ src, likes, index }) => {
  const ref = useRef(null)
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
      <img src={src} alt={`lookbook ${index + 1}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-[#111]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5">
        <LuInstagram className="text-white" size={20} strokeWidth={1.5} />
        <span className="text-white text-xs font-sans flex items-center gap-1"><LuHeart size={11} className="fill-white" /> {likes}</span>
      </div>
    </motion.a>
  )
}

// ─── Custom blend cursor (decorative, fine-pointer only) ─────────────────────

const BlendCursor = () => {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const move = (e) => { x.set(e.clientX - 9); y.set(e.clientY - 9) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="cursor-dot pointer-events-none fixed top-0 left-0 z-[60] w-[18px] h-[18px] rounded-full bg-white hidden lg:block"
    />
  )
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount] = useState(2)

  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const { scrollYProgress: heroProg } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImgY = useTransform(heroProg, [0, 1], ['0%', '22%'])
  const heroTextY = useTransform(heroProg, [0, 1], ['0%', '40%'])

  const bannerRef = useRef(null)
  const { scrollYProgress: bannerProg } = useScroll({ target: bannerRef, offset: ['start end', 'end start'] })
  const bannerY = useTransform(bannerProg, [0, 1], ['-12%', '12%'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#faf9f7] selection:bg-[#111] selection:text-[#faf9f7]">
      <BlendCursor />

      {/* Scroll progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#9a8c6e] z-50 origin-left" style={{ scaleX: scrollYProgress }} />

      {/* Announcement bar */}
      <div className="bg-[#111] text-white text-center py-2.5 text-[10px] tracking-[0.3em] uppercase font-sans">
        Frete grátis acima de R$ 500 · Devolução em 30 dias
      </div>

      {/* Nav */}
      <nav className={`sticky top-0 z-40 transition-all duration-500 border-b ${scrolled ? 'bg-[#faf9f7]/90 backdrop-blur-md border-[#e8e2d8] py-3.5' : 'bg-transparent border-transparent py-5'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-[#111] italic tracking-wider">LUMIÈRE</a>
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map(item => (
              <a key={item} href="#" className="group relative text-[11px] tracking-[0.2em] uppercase text-[#5a564e] font-sans">
                <span className="transition-colors group-hover:text-[#111]">{item}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#111] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button aria-label="Buscar" className="text-[#5a564e] hover:text-[#111] transition-colors"><LuSearch size={18} strokeWidth={1.6} /></button>
            <button aria-label="Sacola" className="text-[#5a564e] hover:text-[#111] transition-colors relative">
              <LuShoppingBag size={18} strokeWidth={1.6} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#111] text-white text-[9px] rounded-full flex items-center justify-center font-sans">{cartCount}</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className="md:hidden text-[#5a564e]">{menuOpen ? <LuX size={20} /> : <LuMenu size={20} />}</button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#faf9f7] border-t border-[#e8e2d8] overflow-hidden">
              <div className="flex flex-col gap-5 p-6">
                {navLinks.map(item => (
                  <a key={item} href="#" onClick={() => setMenuOpen(false)} className="text-[11px] tracking-[0.2em] uppercase text-[#5a564e] font-sans">{item}</a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[94vh] flex items-center overflow-hidden -mt-[1px]">
        {/* full-bleed editorial image with parallax + clip reveal */}
        <motion.div
          style={{ y: heroImgY }}
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 -z-10"
        >
          <video
            autoPlay loop muted playsInline
            poster="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80&auto=format&fit=crop"
            className="w-full h-[120%] object-cover object-center"
          >
            <source src="https://assets.mixkit.co/videos/50641/50641-1080.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-transparent" />
        </motion.div>

        <motion.div style={{ y: heroTextY }} className="max-w-[1400px] mx-auto px-6 w-full py-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-[#9a8c6e] tracking-[0.45em] uppercase text-[11px] mb-7 font-sans">
            Coleção Inverno 2025
          </motion.p>

          <h1 className="font-serif text-[#111] leading-[0.86] text-7xl sm:text-8xl lg:text-[10rem] mb-8">
            <LineReveal delay={0.15}>L'Art</LineReveal>
            <LineReveal delay={0.3} className="italic text-[#9a8c6e] pl-[0.15em]">de</LineReveal>
            <LineReveal delay={0.45}>Vivre</LineReveal>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.8 }} className="text-[#6a655c] text-base leading-relaxed mb-10 max-w-md font-sans font-light">
            Peças atemporais para a mulher contemporânea. Tecidos nobres, cortes impecáveis, estética refinada.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.95 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#colecao" className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#111] text-white text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#9a8c6e] transition-colors">
              Ver Coleção <LuArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#editorial" className="px-10 py-4 border border-[#cfc7b8] text-[#5a564e] text-[11px] tracking-[0.3em] uppercase font-sans hover:border-[#111] hover:text-[#111] transition-all text-center">
              Editorial
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#9a8c6e] text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <LuArrowDown className="text-[#9a8c6e] animate-bounce" size={14} />
        </motion.div>
      </section>

      {/* ── Marquee ── */}
      <div className="py-4 bg-[#111] overflow-hidden">
        <div className="flex whitespace-nowrap marquee-inner">
          {Array(6).fill(['Inverno 2025', 'Novidades', 'Frete Grátis', 'Peças Exclusivas', 'Made in Brazil']).flat().map((text, i) => (
            <span key={i} className="text-white/50 text-[11px] tracking-[0.35em] uppercase font-sans mx-8 flex items-center gap-8">
              {text} <span className="text-[#9a8c6e]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Categorias ── */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-3 font-sans">Explore</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#111]">Por Categoria</h2>
          </div>
          <a href="#colecao" className="group flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-[#5a564e] hover:text-[#111] transition-colors">
            Ver tudo <LuArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => <CategoryTile key={cat.label} cat={cat} index={i} />)}
        </div>
      </section>

      {/* ── Nova Coleção ── */}
      <section id="colecao" className="pb-24 max-w-[1400px] mx-auto px-6">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
          <div>
            <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-3 font-sans">Nova Coleção</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#111]">Inverno 2025</h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans text-[#5a564e] hover:text-[#111] transition-colors">
            Ver todas as peças <LuArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product, i) => <ProductCard key={product.name} product={product} index={i} />)}
        </div>
      </section>

      {/* ── Editorial full-bleed banner (parallax) ── */}
      <section id="editorial" ref={bannerRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center text-center">
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
            <h2 className="font-serif text-white text-5xl md:text-7xl italic leading-[0.95] mb-8">Vestir-se é<br />uma forma de arte</h2>
            <a href="#colecao" className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#111] text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-[#9a8c6e] hover:text-white transition-colors">
              Descobrir o Lookbook <LuArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="py-28 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* image collage */}
          <Reveal y={40} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={lookbookImages[2]} alt="" loading="lazy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img src={lookbookImages[4]} alt="" loading="lazy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="aspect-square overflow-hidden">
                  <img src={lookbookImages[1]} alt="" loading="lazy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={lookbookImages[3]} alt="" loading="lazy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -left-5 w-20 h-20 border border-[#9a8c6e]/30 -z-0 hidden lg:block" />
          </Reveal>

          {/* text + values */}
          <div>
            <Reveal>
              <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Nossa História</p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#111] italic leading-[0.95] mb-7">Moda com<br />Propósito</h2>
              <p className="text-[#6a655c] text-base leading-relaxed font-sans font-light mb-10 max-w-md">
                Fundada em 2015 por Maria Lumière, nascemos da crença de que moda deve ser atemporal, sustentável e
                feita para acompanhar a mulher brasileira por anos — não estações.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {values.map((item, i) => <ValueItem key={item.title} item={item} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits strip ── */}
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

      {/* ── Instagram ── */}
      <section className="py-28 max-w-[1400px] mx-auto px-6">
        <Reveal className="text-center mb-12">
          <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-3 font-sans">@lumiere.brasil</p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#111] italic mb-4">Siga o universo LUMIÈRE</h2>
          <a href="#" className="group inline-flex items-center gap-2 text-[#5a564e] text-[11px] tracking-[0.25em] uppercase font-sans hover:text-[#111] transition-colors">
            <LuInstagram size={14} strokeWidth={1.6} /> Seguir no Instagram
          </a>
        </Reveal>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {lookbookImages.map((src, i) => <InstaItem key={i} src={src} likes={instaLikes[i]} index={i} />)}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-28 bg-[#111] relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1920&q=80&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-[#111]/60" />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-5 font-sans">Clube LUMIÈRE</p>
            <h2 className="font-serif text-4xl md:text-6xl text-white italic mb-5 leading-[0.95]">Acesso antecipado<br />a cada coleção</h2>
            <p className="text-white/55 text-sm font-sans font-light mb-10 max-w-md mx-auto">
              Previews exclusivos, lançamentos em primeira mão e condições especiais. Só para membros.
            </p>
            <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input type="email" required placeholder="Seu melhor e-mail" className="flex-1 bg-white/5 border border-white/20 px-5 py-4 text-white text-sm font-sans placeholder-white/30 focus:outline-none focus:border-[#9a8c6e] transition-colors" />
              <button type="submit" className="px-9 py-4 bg-[#9a8c6e] text-white text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-white hover:text-[#111] transition-colors whitespace-nowrap">Entrar</button>
            </form>
            <p className="text-white/30 text-[11px] mt-4 font-sans">+10.000 membros · Cancele quando quiser · Sem spam</p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-14 bg-[#111]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 pb-10 border-b border-white/10">
            <div>
              <div className="font-serif text-2xl text-white italic mb-4">LUMIÈRE</div>
              <p className="text-white/40 text-xs leading-relaxed font-sans max-w-[200px]">Moda feminina premium. Feito no Brasil com propósito.</p>
            </div>
            {footerCols.map((col, i) => (
              <div key={i}>
                <h4 className="text-white text-[11px] tracking-[0.3em] uppercase mb-5 font-sans">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="text-white/40 text-xs font-sans hover:text-[#9a8c6e] transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-[11px] font-sans">© 2025 LUMIÈRE · CNPJ 00.000.000/0001-00 · Todos os direitos reservados.</p>
            <a href="#" className="text-white/40 hover:text-[#9a8c6e] transition-colors"><LuInstagram size={18} strokeWidth={1.6} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
