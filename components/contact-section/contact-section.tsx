import React from "react"
import { cn } from "@/lib/utils"

interface ContactSectionProps {
  className?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "CONTACT-SECTION flex items-center justify-center h-full w-full border-red-500 border",
        className
      )}>
      <h1 className=''>AWESOME CONTACT SECTION HERE</h1>
    </div>
  )
}
