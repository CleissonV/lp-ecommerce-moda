import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function BlendCursor() {
  const x = useMotionValue<number>(-100)
  const y = useMotionValue<number>(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 9)
      y.set(e.clientY - 9)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed top-0 left-0 z-[60] w-[18px] h-[18px] rounded-full bg-white mix-blend-difference hidden lg:block"
    />
  )
}
