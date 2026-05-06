'use client'

import OrbitImages from '@components/OrbitImages';
import newsAppLogo from '@public/assets/newsapp-logo.png'
import solarisLogo from '@public/assets/solaris-logo.png'
import automobileServiceLogo from '@public/assets/automobile-service-logo.png'
import logosImg from '@public/assets/logos-img.png'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { cn } from '@/src/lib/utils'
import React, { useState } from 'react'
import { useBreakpoint } from '@src/hooks/useBreakpoints';
import Image from 'next/image';

const getRadius = (bp: string) => {
  switch (bp) {
    case '2xl':
      return { radiusX: 500, radiusY: 140, itemSize: 40 }
    case 'xl':
      return { radiusX: 440, radiusY: 120, itemSize: 200 }
    case 'lg':
      return { radiusX: 600, radiusY: 100, itemSize: 220 }
    case 'md':
      return { radiusX: 700, radiusY: 230, itemSize: 350 }
    case 'sm':
      return { radiusX: 700, radiusY: 210, itemSize: 350 }
    default:
      return { radiusX: 700, radiusY: 190, itemSize: 350 }
  }
}

export interface Logo {
  src: string;
  title: string;
  imgStyle?: string;
}

const images: Logo[] = [
  {
    src: newsAppLogo.src,
    title: 'News App',
  },
  {
    src: solarisLogo.src,
    title: 'Solaris Tales',
  },
  {
    src: automobileServiceLogo.src,
    title: 'Autmobile Service',
    imgStyle: 'p-10'
  },
]

const LogosTabsContent = () => {
  const [currentLogo, setCurrentLogo] = useState<Logo | null>(null)
  const bp = useBreakpoint()

  const { radiusX, radiusY, itemSize } = getRadius(bp)

  return (
    <div>
      <h1 className={cn(
        'heroeau mt-8 text-5xl text-center',
        'lg:mt-4 lg:text-4xl'
      )}>Every brand has a voice</h1>
        <div className='relative'>
          <OrbitImages
            images={images}
            shape="ellipse"
            radiusX={radiusX}
            radiusY={radiusY}
            rotation={-8}
            duration={30}
            itemSize={itemSize}
            responsive={true}
            radius={160}
            direction="normal"
            showPath
            pathColor={'rgba(255,255,255,0.6)'}
            className={cn(
              'z-20',
              'lg:-mt-50'
            )}
            paused={false}
            setLogo={setCurrentLogo}
          />
          <OrbitImages
            shape="ellipse"
            radiusX={radiusX}
            radiusY={radiusY}
            rotation={-14}
            duration={30}
            itemSize={itemSize}
            responsive={true}
            radius={160}
            direction="normal"
            showPath
            pathColor={'rgba(255,255,255,0.6)'}
            className='absolute! top-0 z-10 opacity-70 w-fit h-fit'
            paused={false}
          />
        </div>

        {currentLogo && (
          <div className='flex flex-col aspect-square justify-center -mt-8 items-center lg:hidden'>
            <span className='text-2xl mb-4'>{currentLogo.title}</span>
            <Image
              src={currentLogo.src}
              alt='Logo'
              width={200}
              height={200}
              className={'w-full ' + (currentLogo?.imgStyle || '')}
            />
          </div>
        )}
    </div>
  )
}

export default LogosTabsContent