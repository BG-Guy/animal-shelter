import React from "react"
import { cn } from "@/lib/utils"

interface ContactBtnProps {
  className?: string
}

export const ContactBtn: React.FC<ContactBtnProps> = ({ className }) => {
  return <div className={cn("", className)}></div>
}
