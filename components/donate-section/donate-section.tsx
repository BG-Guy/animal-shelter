import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { easeInOut, motion } from "framer-motion"

interface DonateSectionProps {
  className?: string
}

export const DonateSection: React.FC<DonateSectionProps> = ({ className }) => {
  const backgroundImage = 'url("images/donation-section-background.svg")'

  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const donationsOptions = [
    {
      title: "10$",
      description: "Donate a bag of food!",
      url: 'url("/images/dog_food_bag.jpg")',
    },
    {
      title: "25$",
      description: "Donate a heater!",
      url: 'url("/images/dog_lamp_icon.jpg")',
    },
    {
      title: "50$",
      description: "Donate a new house!",
      url: 'url("/images/dog_house_icon.jpg")',
    },
  ]

  return (
    <div
      style={{
        backgroundImage,
      }}
      className={cn(
        "mb-[400px] relative z-10 flex lg:flex-row flex-col px-6 min-h-screen w-full bg-no-repeat bg-cover bg-center bg-slate-100 ",
        className
      )}>
      <div className='HEADER w-full flex items-center justify-center font-title-2 text-black '>
        <h1>
          <span className='text-[80px]'>
            Help Us Grow! <br />
          </span>
          <span className='text-[80px]'>
            Care To <br />
          </span>
          <span className='text-[150px]'>Donate?</span>
        </h1>
      </div>
      <div className='flex items-center justify-center w-full gap-4 text-black text-[30px]'>
        {donationsOptions.map((item, index) => (
          <div
            key={index}
            className='card w-[250px] aspect-square flex relative justify-center border black overflow-hidden cursor-pointer rounded-3xl'
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}>
            <motion.div
              className='absolute w-[250px] aspect-square p-4 flex justify-center items-center font-title-2 bg-slate-200'
              animate={{ top: hoveredCard === index ? "-100%" : "0%" }}
              transition={{ ease: easeInOut, duration: 0.5 }}>
              {item.title}
            </motion.div>
            <motion.div
              className='absolute flex text-center justify-end w-[250px] aspect-square top-[100%] border black bg-cover text-[25px]'
              style={{ backgroundImage: item.url }}
              animate={{ top: hoveredCard === index ? "0%" : "100%" }}
              transition={{ ease: easeInOut, duration: 0.5 }}>
              <div className='flex justify-center items-end h-full w-full pb-1'>
                <span className=' text-[20px] text-black font-simple-2'>
                  {item.description}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
