import React from "react"
import { motion } from "framer-motion"

interface ImageModalProps {
  className?: string
  selected: any
  setSelected: (selected: any) => void
}

export const ImageModal: React.FC<ImageModalProps> = ({
  selected,
  setSelected,
}) => {
  if (!selected) {
    return <></>
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className='fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-hidden'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-full max-w-[700px] mx-auto my-8 px-8 cursor-default'>
        <motion.div
          className='cursor-pointer'
          onClick={() => setSelected(null)}
          layoutId={`${selected.imgUrl}`}>
          <img src={selected.imgUrl} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className='bg-white p-4'>
          {/* <h3 className='text-2xl font-bold mb-2'>{selected.title}</h3>
          {selected.tags.map((tag) => {
            return (
              <div
                className='badge bg-base-300 border-none text-zinc-600 mr-1 mb-1'
                key={tag}>
                {tag}
              </div>
            )
          })} */}
          <p className='font-simple'>{selected.description}</p>
        </motion.div>
      </div>
    </div>
  )
}
