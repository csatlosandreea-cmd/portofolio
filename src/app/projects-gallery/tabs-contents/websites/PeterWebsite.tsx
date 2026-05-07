import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@lib/utils'

const imgs = [
  '/assets/websites/website2-1.png', 
  '/assets/websites/website2-2.png', 
  '/assets/websites/website2-3.png'
]

const PeterWebsite = () => {
  const [activeImg, setActiveImg] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg(prev => prev === 2 ? 0 : prev + 1)
    }, 3500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={cn(
      'h-full',
      'lg:flex lg:flex-row'
    )}>
      <div className='w-full'>
        <p className='text-xl mb-4 lg:hidden'>Full-Stack Developer</p>
        <h1 className='heroeau hidden text-7xl text-center mb-16 lg:block'>View Here</h1>

        <div className={cn(
          'hepta mx-auto rounded-xl',
          'lg:bg-[#d9d9d933] lg:text-xl lg:px-6 lg:py-2 lg:w-4/5 lg:border lg:border-white lg:backdrop-blur-md',
          'xl:max-w-3/4 xl:text-2xl',
          '2xl:text-3xl'
        )}>
          A comprehensive digital showcase designed
          to highlight technical expertise through a 
          minimalist lens. This project focuses on high-impact 
          visual storytelling and robust technical implementation.
        </div>
      </div>

      <Image
        src={imgs[activeImg]}
        alt='Solaris Tales'
        width={100}
        height={100}
        className={cn(
          'w-full aspect-9/16 mt-4',
          'lg:mb-0 lg:w-3/4'
        )}
      />
    </div>
  )
}

export default PeterWebsite