import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuSearch, LuShoppingBag, LuMenu, LuX } from 'react-icons/lu'
import { navLinks } from '../constants/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const cartCount = 2

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-500 border-b ${scrolled ? 'bg-[#faf9f7]/90 backdrop-blur-md border-[#e8e2d8] py-3.5' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 font-serif text-2xl text-[#111] italic tracking-wider">
          <svg viewBox="0 0 32 32" className="w-4 h-4" fill="none" stroke="#9a8c6e" strokeWidth="1.6">
            <path d="M16 4l12 12-12 12L4 16z" />
          </svg>
          <span>LUMIÈRE</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map(item => (
            <a key={item} href="#" className="group relative text-[11px] tracking-[0.2em] uppercase text-[#5a564e] font-sans">
              <span className="transition-colors group-hover:text-[#111]">{item}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#111] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button aria-label="Buscar" className="text-[#5a564e] hover:text-[#111] transition-colors">
            <LuSearch size={18} strokeWidth={1.6} />
          </button>
          <button aria-label="Sacola" className="text-[#5a564e] hover:text-[#111] transition-colors relative">
            <LuShoppingBag size={18} strokeWidth={1.6} />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#111] text-white text-[9px] rounded-full flex items-center justify-center font-sans">
              {cartCount}
            </span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="md:hidden text-[#5a564e]"
          >
            {menuOpen ? <LuX size={20} /> : <LuMenu size={20} />}
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
              {navLinks.map(item => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] tracking-[0.2em] uppercase text-[#5a564e] font-sans"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
