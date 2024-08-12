import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { FlyingBirdsSvg } from "../flying-birds-svg"

interface AboutSectionProps {
  className?: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const backgroundImage = 'url("images/animal-shelter-counter-background.jpg")'
  const { scrollY } = useScroll()

  const titleY1 = useTransform(scrollY, [1000, 1800], [1000, 200])
  const titleY2 = useTransform(scrollY, [1600, 2400], [1200, 300])
  const titleY3 = useTransform(scrollY, [2200, 3000], [1400, 400])

  const titleY1Smooth = useSpring(titleY1, {
    damping: 80,
    stiffness: 800,
  })
  const titleY2Smooth = useSpring(titleY2, {
    damping: 80,
    stiffness: 800,
  })
  const titleY3Smooth = useSpring(titleY3, {
    damping: 80,
    stiffness: 800,
  })

  const titleOpacity1 = useTransform(scrollY, [1200, 1600], [0, 1])
  const titleOpacity2 = useTransform(scrollY, [1800, 2400], [0, 1])
  const titleOpacity3 = useTransform(scrollY, [2400, 2800], [0, 1])

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: 0.5,
      },
    },
  }

  return (
    <div className={cn("top-0 w-screen h-[220%] z-[10] relative", className)}>
      <div
        style={{ backgroundImage }}
        className='flex w-screen h-screen sticky top-0 justify-center bg-cover bg-center bg-no-repeat'>
        <FlyingBirdsSvg />
        <motion.h1
          whileInView={"visible"}
          initial='hidden'
          variants={headerVariants}
          className='md:text-[50px] text-[30px] absolute top-20 font-title-2 text-black text-center'>
          A Growing Animal Shelter
        </motion.h1>
        <div className='w-[900px] flex justify-center text-black text-[40px] relative font-sub-2 z-10'>
          <motion.h1
            className='absolute'
            style={{ y: titleY1Smooth, opacity: titleOpacity1 }}>
            Raised 52,000₪
          </motion.h1>
          <motion.h1
            className='absolute '
            style={{ y: titleY2Smooth, opacity: titleOpacity2 }}>
            Adopted 186 Dogs and Cats
          </motion.h1>
          <motion.h1
            className='absolute '
            style={{ y: titleY3Smooth, opacity: titleOpacity3 }}>
            21 Dogs and Cats looking for a home
          </motion.h1>
        </div>
      </div>
    </div>
  )
}
