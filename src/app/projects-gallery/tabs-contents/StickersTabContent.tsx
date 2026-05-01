'use client'

import Image from 'next/image'
import aphrodite from '@public/assets/aphrodite.png'
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

const PostersTabContent = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className='flex flex-cols h-full relative'>
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
                src={t.src}
                alt='t-shirt'
                width={200}
                height={200}
                className='w-40'
              />
            </GlassSurface>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex-center justify-end gap-2 px-3 text-lg mt-1'>
        <span>swipe</span>
        <IconArrowNarrowRight />
      </div>

      <Image
        src={aphrodite}
        alt='Aphrodite'
        width={100}
        height={100}
        className='w-1/2 z-10 pointer-events-none absolute -bottom-4 -left-4 scale-125'
      />
      <div className='flex flex-cols items-end justify-end gap-2 text-2xl absolute bottom-0 -right-4'>
        <span>This is</span>
        <h3 className='text-5xl'>Aphrodite</h3>
        <span>not me</span>
      </div>
    </div>
  )
}

export default PostersTabContent