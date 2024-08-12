import React from "react"
import { cn } from "@/lib/utils"

interface PawLoaderProps {
  className?: string
}

export const PawLoader: React.FC<PawLoaderProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "pointer-events-none h-full w-full top-0 z-50 ",
        className
      )}>
      <svg id='svg-sprite'>
        <symbol id='paw' viewBox='0 0 1245 1046.6'>
          <ellipse
            cx='139.585'
            cy='531.665'
            strokeWidth='0'
            rx='139.585'
            ry='179.165'
          />
          <ellipse
            cx='423.75'
            cy='238.745'
            strokeWidth='0'
            rx='173.75'
            ry='238.755'
          />
          <ellipse
            cx='810'
            cy='238.745'
            strokeWidth='0'
            rx='173.75'
            ry='238.755'
          />
          <ellipse
            cx='1105.415'
            cy='531.665'
            strokeWidth='0'
            rx='139.585'
            ry='179.165'
          />
          <path
            strokeWidth='0'
            d='M219.9 826.95s48.8-315.36 384.19-322.87c0 0 355.41-33.79 415.48 351.65 0 0 12.93 99.275-62.7 159.275 0 0-78.75 88.75-218.75-31.25 0 0-35.62-41.87-123.12-39.37 0 0-63.75-.625-107.5 33.125 0 0-81.875 91.88-188.75 63.75 0 0-141.45-38.6-98.85-214.3z'
          />
        </symbol>
      </svg>
      <div className='ajax-loader'>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
        <div className='paw'>
          <svg className='icon'>
            <use xlinkHref='#paw'></use>
          </svg>
        </div>
      </div>
    </div>
  )
}
