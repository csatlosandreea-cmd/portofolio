'use client'

import React, { useState } from 'react'
import progress from './progress'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { IconPointFilled } from '@tabler/icons-react';
import { cn } from '@/src/lib/utils';
import Image from 'next/image';
import blob from '@public/assets/blob.png'
import 'swiper/css';

const ExperiencePage = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className='pt-32 pb-8 min-h-screen text-white relative'>
      <h1 className={cn(
        'heroeau uppercase text-3xl mx-auto mb-32 text-center text-white',
        'lg:mb-16',
        'xl:text-5xl xl:mb-32'
      )}>Fluid Progression</h1>

      <div className={cn(
        'hidden items-start justify-around gap-8',
        'lg:flex',
        'xl:px-20 xl:gap-16'
      )}>
        {progress.map((p, i) => (
          <div 
            key={i} 
            className={cn(
              'flex flex-col items-center gap-2',
              `mt-${i * 8}`
            )}
          >
            <h3 className='text-xl text-center'>{p?.title || 'Empty'}</h3>

            <Image
              src={p.image}
              alt={p?.role || "not_known"}
              width={200}
              height={200}
              className='w-full'
            />

            <span>{p.year}</span>
            <span className='text-center'>{p?.role}</span>
          </div>
        ))}
      </div>

      <div className='w-full lg:hidden'>
        <Swiper
          onSwiper={setSwiper}
          centeredSlides
          slidesPerView={1}
          className={cn(
            'w-full relative',
            'sm:w-3/4',
          )}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        >
          {progress.map((p, i) => (
            <SwiperSlide
              key={i}
              className={cn(
                'w-full flex items-center justify-center px-3 transition-all duration-300 ease-in-out',
                activeIndex === i && 'cursor-pointer'
              )}
            >
              <div className='flex flex-col items-center gap-2'>
                <h3 className='text-xl text-center'>{p?.title || 'Empty'}</h3>

                <Image
                  src={p.image}
                  alt={p?.role || "not_known"}
                  width={200}
                  height={200}
                  className='w-full'
                />

                <span>{p.year}</span>
                <span className='text-center'>{p?.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={cn(
          'flex-center w-fit mt-8 gap-1 mx-auto p-2 rounded-full',
          'md:mt-4',
          'lg:hidden!'
        )}>
          {Array(4).fill(0).map((_, i) => (
            <IconPointFilled key={i} className={cn(
              'text-white z-10 opacity-40 transition-all duration-200 ease-in',
              activeIndex === i && 'opacity-100'
            )} />
          ))}
        </div>

        <Image
          src={blob}
          alt={"blob"}
          width={100}
          height={100}
          className={cn(
            'w-1/2 absolute -bottom-8 -left-5',
            'sm:w-50',
            'lg:hidden',
            'xl:block xl:w-65'
          )}
        />
    </div>
  )
}

export default ExperiencePage