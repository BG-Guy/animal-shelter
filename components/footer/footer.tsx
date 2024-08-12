import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import Container from "../container"
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa6"
import { motion, MotionValue, useMotionValue } from "framer-motion"
import { displayIsraelTime } from "../utils"
import { getRangeCoords } from "../MagneticWrapper"

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const contactBtnRef = useRef<HTMLDivElement>(null)
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isContactModal, setIsContactModal] = useState(false)

  const handleMouseMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    const { clientX, clientY } = e
    setCirclePos({
      x: clientX - left,
      y: clientY - top,
    })
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

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const backgroundImage = 'url("/images/group-1.svg")'
  const [Time, setTime] = React.useState("")

  setInterval(() => {
    const timeStamp = displayIsraelTime()
    setTime(timeStamp)
  }, 1000)

  return (
    <div
      style={{ backgroundImage }}
      className={cn(
        "z-[1] w-full h-[400px] fixed bottom-0 p-2 bg-center bg-no-repeat bg-cover",
        className
      )}>
      <div
        className='flex flex-col items-center justify-center text-[60px] w-[250px] h-[100px]
         overflow-hidden absolute transform -translate-x-1/2 -translate-y-1/2
          left-1/2 top-1/2 rounded-full'>
        <motion.span
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => {
            setIsHovered(false)
            x.set(0)
            y.set(0)
          }}
          onPointerMove={(e) => {
            handleMouseMove(e)
            const item = e.currentTarget
            setTransform(item, event, x, y)
          }}
          onClick={() => setIsContactModal(true)}
          style={{ x, y }}
          className='z-[10] cursor-pointer transition-elastic-out 
            sm:text-[50px] text-[30px] 
            flex items-center justify-center'>
          Contact
        </motion.span>
        <motion.span
          ref={contactBtnRef}
          style={{
            top: circlePos.y,
            left: circlePos.x,
          }}
          animate={{
            scale: isHovered ? 250 : 2,
            width: 1,
            height: 1,
            transition: { duration: 0.3, ease: "easeIn" },
          }}
          className='absolute bg-blue-500 z-[2] cursor-pointer 
          rounded-full pointer-events-none origin-center transform'></motion.span>
      </div>
      <Container className='flex flex-col h-full w-full'>
        <h1 className=' lg:text-[50px] sm:text-[20px] text-[10px] flex justify-center w-full absolute top-[95%] font-title'>
          Let me build you a website
        </h1>
        <div className='flex flex-col absolute top-0 text-black h-full'>
          <div className='flex flex-col  lg:text-[30px] sm:text-[20px] font-simple-2'>
            {/* <h1>Contact Info |</h1> */}
            <div className='flex items-center gap-2'>
              <FaEnvelope />
              <span> guybuganim@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaPhoneAlt />
              <span> +972-525696244</span>
            </div>
          </div>
        </div>
        <div
          className='BOTTOM-INFO w-full flex items-center mt-auto  
        text-[30px] justify-between'>
          <span>{Time} GMT+2</span>
          <div className='SOCIALS flex items-center gap-4'>
            <FaFacebook className='cursor-pointer' />
            <FaGithub className='cursor-pointer' />
            <FaLinkedin className='cursor-pointer' />
            <FaInstagram className='cursor-pointer' />
          </div>
        </div>
      </Container>
    </div>
  )
}
