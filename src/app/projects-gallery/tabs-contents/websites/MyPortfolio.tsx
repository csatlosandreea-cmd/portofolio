import Image from 'next/image'
import website1_1 from '@public/assets/websites/website3-1.png'
import website1_2 from '@public/assets/websites/website3-2.png'
import website1_3 from '@public/assets/websites/website3-3.png'
import React, { useEffect, useState } from 'react'
import { cn } from '@/src/lib/utils'

const imgs = [website1_1, website1_2, website1_3]

const MyPortfolio = () => {
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
        <p className='text-xl mb-4 lg:hidden'>My portofolio | Designer Graphic</p>
        <h1 className='hidden text-7xl text-center mb-16 lg:block'>View Here</h1>

        <div className={cn(
          'mx-auto rounded-xl',
          'lg:bg-[#d9d9d933] lg:text-xl lg:px-6 lg:py-2 lg:w-4/5 lg:border lg:border-white lg:backdrop-blur-md',
          'xl:max-w-3/4 xl:text-2xl',
          '2xl:text-3xl'
        )}>
           I create visual systems based on order 
           and functionality. I focus on turning ideas 
           into clean graphic solutions, where every 
           detail has a precise purpose and a clear visual logic.
        </div>
      </div>

      <Image
        src={imgs[activeImg]}
        alt='Solaris Tales'
        width={100}
        height={100}
        className={cn(
          'w-full aspect-[9:16] mt-4',
          'lg:mb-0 lg:w-3/4'
        )}
      />
    </div>
  )
}

export default MyPortfolio