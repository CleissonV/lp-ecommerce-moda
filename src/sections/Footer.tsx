import { LuInstagram } from 'react-icons/lu'
import { footerCols } from '../constants/data'

export default function Footer() {
  return (
    <footer className="py-14 bg-[#111]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 pb-10 border-b border-white/10">
          <div>
            <div className="font-serif text-2xl text-white italic mb-4">LUMIÈRE</div>
            <p className="text-white/40 text-xs leading-relaxed font-sans max-w-[200px]">
              Moda feminina premium. Feito no Brasil com propósito.
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-[11px] tracking-[0.3em] uppercase mb-5 font-sans">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-xs font-sans hover:text-[#9a8c6e] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[11px] font-sans">
            © 2025 LUMIÈRE · CNPJ 00.000.000/0001-00 · Todos os direitos reservados.
          </p>
          <a href="#" className="text-white/40 hover:text-[#9a8c6e] transition-colors">
            <LuInstagram size={18} strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </footer>
  )
}
