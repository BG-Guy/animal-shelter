"use client"
import React, { useState } from "react"
import { MotionValue, motion, useMotionValue } from "framer-motion"
import { getRangeCoords } from "./MagneticWrapper"

interface SideMenuProps {
  scrollToSection: (sectionName: string) => void
}

export const SideMenu: React.FC<SideMenuProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    {
      title: "Home",
      sectionName: "heroSection",
    },
    {
      title: "About",
      sectionName: "aboutSection",
    },
    {
      title: "Gallery",
      sectionName: "gallerySection",
    },
  ]

  const handleLinkClick = (sectionName: string) => {
    scrollToSection(sectionName)
    setIsMenuOpen(!isMenuOpen)
  }

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const { xRange, yRange } = getRangeCoords(item, event, x, y)
    x.set(xRange * 20)
    y.set(yRange * 20)
  }

  let isHovered = false

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  return (
    <>
      <div className='header  '>
        <motion.div
          onPointerMove={(event) => {
            isHovered = true
            const item = event.currentTarget

            setTransform(item, event, x, y)
          }}
          onPointerLeave={() => {
            x.set(0)
            y.set(0)
          }}
          style={{ x, y }}
          className={`${
            isMenuOpen && "active"
          } burger transition-elastic-out `}>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='bounds'></div>
        </motion.div>
      </div>
      <div
        className={`${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } ease-in-out duration-500 flex absolute w-screen h-screen bg-white z-[10] flex-col justify-center items-center text-[100px]  `}>
        {links.map((link, index) => {
          const x = useMotionValue(0)
          const y = useMotionValue(0)
          return (
            <motion.span
              // onPointerEnter={(event) => {}}
              onPointerMove={(event) => {
                const item = event.currentTarget
                setTransform(item, event, x, y)
              }}
              onPointerLeave={() => {
                x.set(0)
                y.set(0)
              }}
              onClick={() => handleLinkClick(link.sectionName)}
              style={{ x, y }}
              key={index}
              className='list-item relative transition-elastic-out cursor-pointer list-none '>
              {link.title}
            </motion.span>
          )
        })}
      </div>
    </>
  )
}
