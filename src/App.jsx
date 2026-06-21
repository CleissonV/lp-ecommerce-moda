import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaSearch, FaShoppingBag, FaHeart, FaInstagram, FaChevronDown, FaArrowRight } from 'react-icons/fa'
import { MdLocalShipping, MdLoop, MdHeadsetMic } from 'react-icons/md'

const products = [
  { name: 'Vestido Seda Midi', price: 'R$ 1.890', original: null, tag: 'Novo', color: 'Champagne', gradient: 'from-amber-50 to-stone-100', emoji: '👗', sizes: ['P', 'M', 'G'] },
  { name: 'Blazer Structured', price: 'R$ 2.340', original: 'R$ 2.890', tag: 'Sale', color: 'Preto', gradient: 'from-gray-800 to-gray-900', emoji: '🧥', sizes: ['P', 'M', 'G', 'GG'] },
  { name: 'Calça Wide Leg Linho', price: 'R$ 1.290', original: null, tag: 'Destaque', color: 'Areia', gradient: 'from-stone-200 to-amber-100', emoji: '👖', sizes: ['P', 'M', 'G'] },
  { name: 'Blusa Seda Slip', price: 'R$ 890', original: null, tag: 'Novo', color: 'Nude', gradient: 'from-rose-50 to-pink-50', emoji: '👚', sizes: ['PP', 'P', 'M', 'G'] },
  { name: 'Saia Midi Plissada', price: 'R$ 1.190', original: 'R$ 1.490', tag: 'Sale', color: 'Terracota', gradient: 'from-orange-100 to-red-100', emoji: '👘', sizes: ['P', 'M', 'G'] },
  { name: 'Conjunto Cropped', price: 'R$ 1.650', original: null, tag: 'Exclusivo', color: 'Marfim', gradient: 'from-yellow-50 to-amber-50', emoji: '✨', sizes: ['P', 'M'] },
]

const productImages = [
  'https://images.unsplash.com/photo-1603189343302-e603f7add05a?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562151270-c7d22ceb586a?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80&auto=format&fit=crop',
]

const instaGrid = [
  { likes: '2.4k' },
  { likes: '1.8k' },
  { likes: '3.1k' },
  { likes: '4.2k' },
  { likes: '2.9k' },
  { likes: '1.6k' },
]

const lookbookImages = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544441893-675973e31985?w=400&q=80&auto=format&fit=crop',
]

const storyImages = [
  { gradient: 'from-stone-200 to-amber-100', emoji: '🌿', label: 'Sustentável' },
  { gradient: 'from-rose-50 to-pink-50', emoji: '💐', label: 'Delicado' },
  { gradient: 'from-amber-50 to-yellow-50', emoji: '✨', label: 'Exclusivo' },
  { gradient: 'from-gray-100 to-stone-200', emoji: '🖤', label: 'Atemporal' },
]

const footerCols = [
  { title: 'Comprar', links: ['Novidades', 'Coleções', 'Sale', 'Editorial'] },
  { title: 'Ajuda', links: ['Tamanhos', 'Trocas', 'Frete', 'Contato'] },
  { title: 'Empresa', links: ['Sobre', 'Sustentabilidade', 'Imprensa', 'Afiliados'] },
]

const benefits = [
  { icon: MdLocalShipping, text: 'Frete Grátis acima R$ 500' },
  { icon: MdLoop, text: 'Troca em 30 dias' },
  { icon: MdHeadsetMic, text: 'Atendimento VIP' },
]

// ─── Sub-components (hooks never called inside .map()) ───────────────────────

const ProductCard = ({ product, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [wished, setWished] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="product-card cursor-pointer group"
    >
      <div className="aspect-[3/4] relative overflow-hidden mb-4">
        <img
          src={productImages[index % productImages.length]}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="text-white text-sm font-medium tracking-widest uppercase border border-white/50 px-6 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            Ver Produto
          </motion.span>
        </div>

        <div className="product-overlay absolute inset-0 bg-[#111]/40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-3 bg-white text-[#111] text-xs tracking-widest uppercase font-sans font-medium hover:bg-[#f5f0e8] transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs tracking-widest uppercase font-sans font-medium ${product.tag === 'Sale' ? 'bg-[#d4a0a0] text-white' : 'bg-[#111] text-white'}`}>
            {product.tag}
          </span>
        </div>

        <button
          onClick={() => setWished(!wished)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
        >
          <FaHeart
            className={`transition-colors ${wished ? 'text-[#d4a0a0]' : 'text-white/60 hover:text-white'}`}
            size={14}
          />
        </button>
      </div>

      <div className="space-y-1">
        <p className="text-[#9a8c6e] text-xs tracking-widest uppercase font-sans">{product.color}</p>
        <h3 className="font-serif text-lg text-[#111]">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-sans font-medium text-[#111] text-sm">{product.price}</span>
          {product.original && (
            <span className="font-sans text-[#9a8c6e] text-xs line-through">{product.original}</span>
          )}
        </div>
        <div className="flex gap-1.5 pt-1">
          {product.sizes.map(s => (
            <span
              key={s}
              className="text-xs border border-[#e8e2d8] px-2 py-0.5 text-[#8a8274] hover:border-[#111] hover:text-[#111] transition-colors cursor-pointer font-sans"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const InstaItem = ({ item, index }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="aspect-square relative group cursor-pointer overflow-hidden"
    >
      <img
        src={lookbookImages[index % lookbookImages.length]}
        alt={`lookbook ${index + 1}`}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#111]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
        <FaInstagram className="text-white" size={20} />
        <span className="text-white text-xs font-sans">&#10084; {item.likes}</span>
      </div>
    </motion.div>
  )
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount] = useState(2)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-[#9a8c6e] z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Announcement bar */}
      <div className="bg-[#111] text-white text-center py-2 text-xs tracking-[0.2em] uppercase font-sans">
        Frete Grátis em compras acima de R$ 500 · Devolução em até 30 dias
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#faf9f7]/95 backdrop-blur-md' : 'bg-[#faf9f7]'} border-b border-[#e8e2d8] py-4`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-[#111] italic tracking-wider">LUMIÈRE</a>

          <div className="hidden md:flex items-center gap-10">
            {['Novidades', 'Coleções', 'Sale', 'Editorial', 'Sobre'].map(item => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-[0.2em] uppercase text-[#8a8274] hover:text-[#111] transition-colors font-sans"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button className="text-[#8a8274] hover:text-[#111] transition-colors">
              <FaSearch size={16} />
            </button>
            <button className="text-[#8a8274] hover:text-[#111] transition-colors relative">
              <FaShoppingBag size={16} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#111] text-white text-[9px] rounded-full flex items-center justify-center font-sans">
                {cartCount}
              </span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#8a8274]"
            >
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#faf9f7] border-t border-[#e8e2d8] overflow-hidden"
            >
              <div className="flex flex-col gap-5 p-6">
                {['Novidades', 'Coleções', 'Sale', 'Editorial', 'Sobre'].map(item => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="text-xs tracking-[0.2em] uppercase text-[#8a8274] hover:text-[#111] font-sans"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[#f5f0e8] hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
          <motion.div style={{ y: heroY }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#9a8c6e] tracking-[0.4em] uppercase text-xs mb-6 font-sans"
            >
              Coleção Inverno 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#111] leading-none mb-6"
            >
              L'Art<br /><em className="text-[#9a8c6e]">de</em><br />Vivre
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-20 h-px bg-[#9a8c6e] mb-6"
              style={{ transformOrigin: '0%' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[#8a8274] text-base leading-relaxed mb-10 max-w-sm font-sans font-light"
            >
              Peças atemporais para a mulher contemporânea. Tecidos nobres, cortes impecáveis e estética refinada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#colecao"
                className="px-10 py-4 bg-[#111] text-white text-xs tracking-[0.3em] uppercase font-sans hover:bg-[#333] transition-colors text-center"
              >
                Ver Coleção
              </a>
              <a
                href="#"
                className="px-10 py-4 border border-[#e8e2d8] text-[#8a8274] text-xs tracking-[0.3em] uppercase font-sans hover:border-[#111] hover:text-[#111] transition-all text-center"
              >
                Editorial
              </a>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[80vh] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1675186049419-d48f4b28fe7c?w=1200&q=80&auto=format&fit=crop"
                alt="LUMIERE editorial"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4">
                <p className="text-[#9a8c6e] text-xs tracking-widest uppercase font-sans mb-1">Nova Chegada</p>
                <p className="font-serif text-lg text-[#111]">Vestido Seda Midi</p>
                <p className="font-sans text-[#8a8274] text-sm">R$ 1.890</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-[#9a8c6e]/30" />
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#f5f0e8]" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <FaChevronDown className="text-[#9a8c6e] animate-bounce" size={14} />
        </motion.div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="py-4 bg-[#111] overflow-hidden">
        <div className="flex whitespace-nowrap marquee-inner">
          {Array(6).fill(['Inverno 2025', 'Novidades', 'Frete Grátis', 'Peças Exclusivas', 'Made in Brazil']).flat().map((text, i) => (
            <span key={i} className="text-white/60 text-xs tracking-[0.3em] uppercase font-sans mx-8">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── New Collection ── */}
      <section id="colecao" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#9a8c6e] tracking-[0.3em] uppercase text-xs mb-2 font-sans"
            >
              Nova Coleção
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#111]"
            >
              Inverno 2025
            </motion.h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-sans text-[#8a8274] hover:text-[#111] transition-colors"
          >
            Ver Tudo <FaArrowRight size={10} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-xs mb-4 font-sans">Nossa História</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#111] italic leading-tight mb-6">
              Moda com<br />Propósito
            </h2>
            <div className="space-y-4 text-[#8a8274] text-sm leading-relaxed font-sans font-light">
              <p>
                Fundada em 2015 por Maria Lumière, nascemos da crença de que moda deve ser atemporal, sustentável
                e acessível para a mulher brasileira moderna.
              </p>
              <p>
                Cada peça é desenvolvida com fornecedores certificados, tecidos de origem responsável e costura
                artesanal por mãos brasileiras especializadas.
              </p>
              <p>
                Mais do que vender roupas, criamos experiências. Um guarda-roupa consciente que acompanha você
                por anos, não estações.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#9a8c6e] text-xs font-sans">
                  <item.icon size={16} />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {storyImages.map((item, i) => (
              <div
                key={i}
                className={`aspect-square bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center gap-2`}
              >
                <span className="text-4xl">{item.emoji}</span>
                <span className="text-[#8a8274] text-xs tracking-widest uppercase font-sans">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Instagram Grid ── */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#9a8c6e] tracking-[0.3em] uppercase text-xs mb-3 font-sans"
          >
            Siga-nos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl text-[#111] italic mb-2"
          >
            @lumiere.brasil
          </motion.h2>
          <a
            href="#"
            className="text-[#9a8c6e] text-xs tracking-widest uppercase font-sans hover:text-[#111] transition-colors inline-flex items-center gap-1"
          >
            <FaInstagram size={12} /> Seguir
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {instaGrid.map((item, i) => (
            <InstaItem key={i} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-24 bg-[#111] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#9a8c6e] tracking-[0.3em] uppercase text-xs mb-4 font-sans"
          >
            Newsletter Exclusiva
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl text-white italic mb-4"
          >
            Entre para o Clube LUMIÈRE
          </motion.h2>
          <p className="text-[#8a8274] text-sm font-sans font-light mb-10">
            Receba previews exclusivos, acesso antecipado a lançamentos e descontos especiais. Só para membros.
          </p>

          <form className="flex gap-0" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-white/10 border border-white/20 px-5 py-4 text-white text-sm font-sans placeholder-white/30 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#9a8c6e] text-white text-xs tracking-[0.3em] uppercase font-sans hover:bg-[#b8a882] transition-colors whitespace-nowrap"
            >
              Entrar
            </button>
          </form>
          <p className="text-[#4a4a4a] text-xs mt-4 font-sans">+10.000 membros. Cancele quando quiser. Sem spam.</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="font-serif text-2xl text-white italic mb-4">LUMIÈRE</div>
              <p className="text-[#8a8274] text-xs leading-relaxed font-sans">
                Moda feminina premium. Feito no Brasil com amor e propósito.
              </p>
            </div>
            {footerCols.map((col, i) => (
              <div key={i}>
                <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-4 font-sans">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-[#8a8274] text-xs font-sans hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#4a4a4a] text-xs font-sans">
              © 2024 LUMIÈRE. CNPJ 00.000.000/0001-00. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#4a4a4a] hover:text-[#9a8c6e] transition-colors">
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
