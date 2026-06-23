import Reveal from '../components/ui/Reveal'

export default function Newsletter() {
  return (
    <section className="py-28 bg-[#111] relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1920&q=80&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-[#111]/60" />
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-5 font-sans">Clube LUMIÈRE</p>
          <h2 className="font-serif text-4xl md:text-6xl text-white italic mb-5 leading-[0.95]">
            Acesso antecipado<br />a cada coleção
          </h2>
          <p className="text-white/55 text-sm font-sans font-light mb-10 max-w-md mx-auto">
            Previews exclusivos, lançamentos em primeira mão e condições especiais. Só para membros.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Seu melhor e-mail"
              className="flex-1 bg-white/5 border border-white/20 px-5 py-4 text-white text-sm font-sans placeholder-white/30 focus:outline-none focus:border-[#9a8c6e] transition-colors"
            />
            <button
              type="submit"
              className="px-9 py-4 bg-[#9a8c6e] text-white text-[11px] tracking-[0.3em] uppercase font-sans hover:bg-white hover:text-[#111] transition-colors whitespace-nowrap"
            >
              Entrar
            </button>
          </form>
          <p className="text-white/30 text-[11px] mt-4 font-sans">+10.000 membros · Cancele quando quiser · Sem spam</p>
        </Reveal>
      </div>
    </section>
  )
}
