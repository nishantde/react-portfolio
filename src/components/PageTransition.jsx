import { useLayoutEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation, useOutlet } from 'react-router-dom'

const ease = [0.22, 1, 0.36, 1]

function ScrollOnMount() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

export default function PageTransition() {
  const location = useLocation()
  const outlet = useOutlet()
  const reduce = useReducedMotion()
  const isFirstPage = useRef(true)
  const skipPageIntro = isFirstPage.current

  useLayoutEffect(() => {
    isFirstPage.current = false
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={
          skipPageIntro
            ? false
            : reduce
              ? { opacity: 0 }
              : { opacity: 0, y: 16 }
        }
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
        transition={reduce ? { duration: 0.12 } : { duration: 0.28, ease }}
      >
        <ScrollOnMount />
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}