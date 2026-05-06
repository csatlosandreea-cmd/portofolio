import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import solaris1 from '@public/assets/solaris1.png'
import solaris2 from '@public/assets/solaris2.png'
import { cn } from '@/src/lib/utils'

const imgs = [solaris1, solaris2]

const SolarisWebsite = () => {
  const [activeImg, setActiveImg] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg(prev => prev === 1 ? 0 : prev + 1)
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
        <p className='text-xl mb-4 lg:hidden'>Solaris Tales</p>
        <h1 className='hidden text-7xl text-center mb-16 lg:block'>View Here</h1>

        <div className={cn(
          'py-2 mx-auto rounded-xl',
          'lg:bg-[#d9d9d933] lg:px-6 lg:w-4/5 lg:border lg:border-white lg:backdrop-blur-md',
          'xl:max-w-3/5'
        )}>
          <p className={cn(
            'text-xl opacity-75',
            'lg:opacity-100 lg:text-xl',
            'xl:text-3xl'
          )}>
            Solaris Tales is an e-commerce platform 
            dedicated to book lovers
            <span className={cn(
              'hidden text-xl opacity-75 ml-2',
              'lg:opacity-100 lg:text-xl lg:block',
              'xl:text-3xl'
            )}>
              where design meets the classic atmosphere of
              a prestigious library. The objective was to 
              create an interface that eliminates the coldness of 
              standard online stores, offering the user a warm, 
              tactile, and sophisticated experience.
            </span>
          </p>
        </div>
      </div>

      <Image
        src={imgs[activeImg]}
        alt='Solaris Tales'
        width={100}
        height={100}
        className={cn(
          'w-full mt-4',
          'lg:mb-0 lg:w-1/3'
        )}
      />
    </div>
  )
}

export default SolarisWebsite