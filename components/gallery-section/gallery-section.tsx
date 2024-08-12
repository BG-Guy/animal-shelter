import React, { useState } from "react"
import { gallerySectionData } from "./data"
import { motion } from "framer-motion"
import { ImageModal } from "./image-modal"

interface GallerySectionProps {
  className?: string
  image: any
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  className,
}) => {
  const backgroundImage = 'url("/images/gallery-background.jpg")'
  const images = gallerySectionData
  const [selected, setSelected] = useState(null)
  const handleSelected = (image: any) => {
    setSelected(image)
  }

  // const headerVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       duration: 1.5,
  //       delay: 0.5,
  //     },
  //   },
  // }

  const title = "Some of our doggos!"
  const splitedTitle = title.split(" ")

  return (
    <div
      // style={{ backgroundImage }}
      className={`z-[10] bg-slate-50 relative flex flex-col justify-center p-1 ${
        selected && "scroll-lock"
      }`}>
      <div className='flex justify-center w-full'>
        {splitedTitle.map((word, index) => {
          const headerVariants = {
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1,
                delay: 0.5 + index * 0.1,
              },
            },
          }
          return (
            <motion.span
              key={index}
              className='text-[60px] mr-3 font-title-2 text-center my-4'
              variants={headerVariants}
              whileInView={"visible"}
              initial='hidden'>
              {word}
            </motion.span>
          )
        })}
      </div>
      <div className='image-container flex flex-wrap flex-row items-center justify-center'>
        {images.map((image, index) => {
          return (
            <div key={index} className='image-wrapper'>
              <motion.img
                src={image.imgUrl}
                alt={image.alt}
                width={400}
                height={400}
                className='p-2 rounded-3xl cursor-pointer'
                layoutId={`${image.imgUrl}`}
                onClick={() => handleSelected(image)}
              />
            </div>
          )
        })}

        <ImageModal selected={selected} setSelected={setSelected} />
      </div>
    </div>
  )
}
