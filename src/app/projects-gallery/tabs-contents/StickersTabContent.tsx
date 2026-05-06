'use client'

import Image from 'next/image'
import aphrodite from '@public/assets/aphrodite.png'
import sticker1 from '@public/assets/sticker1.png'
import sticker2 from '@public/assets/sticker2.png'
import sticker3 from '@public/assets/sticker3.png'
import sticker4 from '@public/assets/sticker4.png'
import React, { useState } from 'react'
import GlassSurface from '@components/GlassSurface'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { cn } from '@/src/lib/utils'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const allStickers = [sticker1, sticker2, sticker3, sticker4]

const PostersTabContent = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <div className='flex flex-cols h-full relative'>
      <div className='lg:hidden'>
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
          {allStickers.map((s, i) => (
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
                  src={s.src}
                  alt='t-shirt'
                  width={200}
                  height={200}
                  className='w-40'
                />
              </GlassSurface>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cn(
        'flex items-center justify-end gap-2 px-3 text-lg mt-1',
        'sm:px-32',
        'lg:hidden'
      )}>
        <span>swipe</span>
        <IconArrowNarrowRight />
      </div>

      <Image
        src={aphrodite}
        alt='Aphrodite'
        width={100}
        height={100}
        className={cn(
          'w-full z-10 pointer-events-none absolute -bottom-4 -left-40 scale-125',
          'sm:w-3/5 sm:-left-30',
          'md:w-1/2',
          'lg:w-80 lg:right-1/2 lg:translate-x-3/4 lg:left-0',
          'xl:w-110',
          '2xl:w-120'
        )}
      />
      <div className={cn(
        'flex flex-cols z-20 items-end justify-end gap-2 text-2xl absolute bottom-0 -right-4',
        'lg:top-0 lg:left-0 lg:items-start lg:justify-start',
        'xl:left-30 xl:mt-20'
      )}>
        <span className='hepta'>This is</span>
        <h3 className='heroeau text-5xl'>Aphrodite</h3>
        <span className='hepta'>not me</span>
      </div>

      <div className={cn(
        'hidden text-xl mt-auto',
        'lg:block',
        'xl:ml-30'
      )}>
        <p className='hepta'>I think she is <br /> very dangerous...</p>
        <p className='hepta'>Oh, yeah... she is</p>
        <p className='hepta'>Goddess of Love!</p>
      </div>

      <div className={cn(
        'hidden flex-col gap-8 absolute right-16 max-h-90 overflow-y-scroll',
        'lg:max-h-80 lg:flex',
        'xl:max-h-150',
        '2xl'
      )}>
        {allStickers.map((s, i) => (
          <GlassSurface
            key={i}
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
            className='mx-auto bg-gray-400/40! shrink-0'
          >
            <Image
              src={s.src}
              alt='t-shirt'
              width={200}
              height={200}
              className='w-40'
            />
          </GlassSurface>
        ))}
      </div>
    </div>
  )
}

export default PostersTabContent