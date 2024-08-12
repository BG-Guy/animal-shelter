import { useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import React, { createContext, useContext } from "react"

const ScrollContext = createContext<unknown>(null)

export function useScrollContext() {
  return useContext(ScrollContext)
}

interface ScrollProviderProps {
  children: React.ReactNode
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 3000], [0, 5], {
    clamp: false,
  })

  const scrollValues = { scrollY, velocityFactor }

  return (
    <ScrollContext.Provider value={scrollValues}>
      {children}
    </ScrollContext.Provider>
  )
}
