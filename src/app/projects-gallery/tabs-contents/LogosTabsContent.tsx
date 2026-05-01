'use client'

import OrbitImages from '@components/OrbitImages';
import newsAppLogo from '@public/assets/newsapp-logo.png'
import solarisLogo from '@public/assets/solaris-logo.png'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { cn } from '@/src/lib/utils'
import React, { useState } from 'react'
import Image from 'next/image';

export interface Logo {
  src: string;
  title: string;
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
]

const LogosTabsContent = () => {
  const [currentLogo, setCurrentLogo] = useState<Logo | null>(null)

  return (
    <div>
      <h1 className='mt-8 text-5xl text-center'>Every brand has a voice</h1>

      <div className='relative'>
        <OrbitImages
          images={images}
          shape="ellipse"
          radiusX={340}
          radiusY={80}
          rotation={-8}
          duration={30}
          itemSize={200}
          responsive={true}
          radius={160}
          direction="normal"
          showPath
          pathColor={'rgba(255,255,255,0.6)'}
          className='scale-200 z-20'
          paused={false}
          setLogo={setCurrentLogo}
        />
        <OrbitImages
          shape="ellipse"
          radiusX={340}
          radiusY={80}
          rotation={-14}
          duration={30}
          itemSize={200}
          responsive={true}
          radius={160}
          direction="normal"
          showPath
          pathColor={'rgba(255,255,255,0.6)'}
          className='scale-200 absolute! top-0 z-10 opacity-70'
          paused={false}
        />
      </div>

      {currentLogo && (
        <div className='flex flex-col aspect-square justify-center -mt-8 items-center'>
          <span className='text-2xl mb-4'>{currentLogo.title}</span>
          <Image
            src={currentLogo.src}
            alt='Logo'
            width={200}
            height={200}
            className='w-full'
          />
        </div>
      )}
    </div>
  )
}

export default LogosTabsContent