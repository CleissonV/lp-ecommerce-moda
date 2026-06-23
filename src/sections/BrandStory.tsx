import Reveal from '../components/ui/Reveal'
import { lookbookImages, values } from '../constants/data'

export default function BrandStory() {
  return (
    <section className="py-28 bg-[#f5f0e8]">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* image collage */}
        <Reveal y={40} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={lookbookImages[2]}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src={lookbookImages[4]}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="aspect-square overflow-hidden">
                <img
                  src={lookbookImages[1]}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={lookbookImages[3]}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-5 -left-5 w-20 h-20 border border-[#9a8c6e]/30 -z-0 hidden lg:block" />
        </Reveal>

        {/* text + values */}
        <div>
          <Reveal>
            <p className="text-[#9a8c6e] tracking-[0.3em] uppercase text-[11px] mb-4 font-sans">Nossa História</p>
            <h2 className="font-serif text-5xl md:text-6xl text-[#111] italic leading-[0.95] mb-7">
              Moda com<br />Propósito
            </h2>
            <p className="text-[#6a655c] text-base leading-relaxed font-sans font-light mb-10 max-w-md">
              Fundada em 2015 por Maria Lumière, nascemos da crença de que moda deve ser atemporal, sustentável e
              feita para acompanhar a mulher brasileira por anos — não estações.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {values.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4">
                  {Icon && (
                    <span className="shrink-0 w-11 h-11 rounded-full border border-[#9a8c6e]/40 flex items-center justify-center text-[#9a8c6e]">
                      <Icon size={18} strokeWidth={1.4} />
                    </span>
                  )}
                  <div>
                    <h4 className="font-serif text-lg text-[#111] mb-0.5">{item.title}</h4>
                    <p className="text-[#8a8274] text-sm font-sans font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
