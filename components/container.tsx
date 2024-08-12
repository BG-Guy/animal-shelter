import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-[1750px] mx-auto px-2 lg:px-12 md:px-2 sm:px-1 w-full",
        className
      )}>
      {children}
    </div>
  )
}

export default Container
