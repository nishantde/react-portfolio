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
  const ease = [0.22, 1, 0.36, 1]
  const EXIT = { duration: 0.32, ease }
  const ENTER = { duration: 0.40, delay: 0.08, ease }

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
        animate={
          reduce
            ? { opacity: 1, transition: { duration: 0.12 } }
            : { opacity: 1, y: 0, transition: ENTER }
        }
        exit={
          reduce
            ? { opacity: 0, transition: { duration: 0.12 } }
            : { opacity: 0, y: -12, transition: EXIT }
        }
        transition={reduce ? { duration: 0.12 } : undefined}
      >
        <ScrollOnMount />
        {outlet}
      </motion.div>
    </AnimatePresence>
  )
}