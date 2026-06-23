import { useScroll } from 'framer-motion'
import { motion } from 'framer-motion'
import BlendCursor from './components/ui/BlendCursor'
import AnnouncementBar from './sections/AnnouncementBar'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Categories from './sections/Categories'
import Collection from './sections/Collection'
import Editorial from './sections/Editorial'
import BrandStory from './sections/BrandStory'
import Benefits from './sections/Benefits'
import Instagram from './sections/Instagram'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-[#faf9f7] selection:bg-[#111] selection:text-[#faf9f7]">
      <BlendCursor />

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#9a8c6e] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <AnnouncementBar />
      <Nav />
      <Hero />
      <Marquee />
      <Categories />
      <Collection />
      <Editorial />
      <BrandStory />
      <Benefits />
      <Instagram />
      <Newsletter />
      <Footer />
    </div>
  )
}
