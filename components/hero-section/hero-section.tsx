import React from "react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const backgroundImage = 'url("images/animal-shelter-hero.jpg")'
  return (
    <div
      className='z-[10] relative h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage }}>
      <h1
        className={
          "md:text-[60px] lg:text-[80px] text-[40px] text-white border-2 font-title p-4"
        }>
        Animal Shelter
      </h1>
    </div>
  )
}
