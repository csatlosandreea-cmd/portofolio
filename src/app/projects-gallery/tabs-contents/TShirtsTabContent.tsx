'use client'

import Image from 'next/image'
import zeus from '@public/assets/zeus.png'
import tShirt1 from '@public/assets/tshirt1.png'
import tShirt2 from '@public/assets/tshirt2.png'
import tShirt3 from '@public/assets/tshirt3.png'
import tShirt4 from '@public/assets/tshirt4.png'
import React, { useState } from 'react'
import GlassSurface from '@components/GlassSurface'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { cn } from '@/src/lib/utils'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const allTShirts = [tShirt1, tShirt2, tShirt3, tShirt4]

const TShirtsTabContent = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className='flex flex-cols h-full relative'>
      <div className='flex-center justify-center gap-2 px-3 text-2xl mt-14'>
        <span>just swipe</span>
        <IconArrowNarrowRight size={32} />
      </div>

      <Swiper
        onSwiper={setSwiper}
        centeredSlides
        slidesPerView={1}
        className={cn(
          'w-full relative mt-8',
          'sm:w-3/4',
          'md:w-1/2',
        )}
      >
        {allTShirts.map((t, i) => (
          <SwiperSlide
            key={i}
            className={cn(
              'w-full flex items-center justify-center transition-all duration-300 ease-in-out',
            )}
          >
            <GlassSurface
              displace={0.8}
              distortionScale={-180}
              redOffset={0}
              greenOffset={10}
              blur={10}
              borderWidth={0.2}
              blueOffset={20}
              brightness={50}
              opacity={0.93}
              mixBlendMode="screen"
              height={200}
              width={300}
              className='mx-auto bg-gray-400/40!'
            >
              <Image
                src={t}
                alt='t-shirt'
                width={200}
                height={200}
                className='w-40'
              />
            </GlassSurface>
          </SwiperSlide>
        ))}
      </Swiper>

      <Image
        src={zeus}
        alt='Zeus'
        width={100}
        height={100}
        className='w-1/2 absolute -bottom-4 -right-4 scale-125'
      />
    </div>
  )
}

export default TShirtsTabContent