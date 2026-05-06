'use client'

import Image from 'next/image'
import poster1 from '@public/assets/poster1.png'
import poster2 from '@public/assets/poster2.png'
import poster3 from '@public/assets/poster3.png'
import poster4 from '@public/assets/poster4.png'
import React, { useEffect, useState } from 'react'
import Grainient from '@components/Grainient'
import { cn } from '@/src/lib/utils'

const imgs = [poster1, poster2, poster3, poster4]

const PostersTabContent = () => {
  const [imgVisible, setImgVisible] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImgVisible(prev => prev === 3 ? 0 : prev + 1)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='flex flex-col items-center justify-around h-full lg:flex-row'>
      <div className={cn(
        'hidden text-2xl ml-8',
        'lg:block',
        'xl:text-4xl'
      )}>
        <h1 className={cn(
          'hepta text-7xl uppercase mt-8',
          'xl:text-9xl'
        )}>Next...</h1>
        <p className='hepta mt-16'>I think she is very...</p>
        <span className='hepta'>(You complete this sentence)</span>
      </div>

      <div className='hidden relative lg:block'>
        {imgs.map((im, i) => (
          <Image
            key={i}
            src={im}
            alt='Poster'
            width={300}
            height={300}
            className={cn(
              'w-60 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ease-out',
              i === imgVisible ? 'opacity-100' : 'opacity-0',
              'xl:w-90'
            )}
          />
        ))}
      
        <div className={cn(
          'w-80 h-80 z-0 top-0',
          'xl:w-100 h-100'
        )}>
          <Grainient
            color1="#FF9FFC"
            color2="#5227FF"
            color3="#B497CF"
            timeSpeed={1.5}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={6}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.36}
            grainScale={3}
            grainAnimated={false}
            contrast={1.5}
            gamma={1.5}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
            className='rounded-2xl'
          />
        </div>
      </div>

      <div className='flex flex-col w-3/4 justify-center gap-8 z-0 lg:hidden'>
        {imgs.map((im, i) => (
          <Image
            key={i}
            src={im}
            alt='Poster'
            width={300}
            height={300}
            className={cn(
              'w-full', 
              i % 2 > 0 && 'ml-auto',
              'lg:w-3/4'
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default PostersTabContent