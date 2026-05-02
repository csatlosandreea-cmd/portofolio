import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { cn } from '@lib/utils';
import SolarisWebsite from './websites/SolarisWebsite';
import RecruitmentWebsite from './websites/RecruitmentWebsite';
import PeterWebsite from './websites/PeterWebsite';
import MyPortfolio from './websites/MyPortfolio';
import { IconPointFilled } from '@tabler/icons-react';

const allWebsites = [
  {
    title: 'Solaris Tales',
    comp: SolarisWebsite
  },
  {
    title: 'Recruitment',
    comp: RecruitmentWebsite
  },
  {
    title: 'Peter',
    comp: PeterWebsite
  },
  {
    title: 'Solaris tales',
    comp: MyPortfolio
  },
]

const WebsitesTabContent = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className='pb-8'>
      <div className={cn(
        'flex-center gap-1 w-fit bg-black/20 backdrop-blur-md mx-auto p-2 rounded-full',
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

      <Swiper
        onSwiper={setSwiper}
        centeredSlides
        slidesPerView={1}
        className={cn(
          'w-full relative mt-8',
          'sm:w-3/4',
          'md:w-1/2',
        )}
        onSlideChange={() => setActiveIndex(swiper?.activeIndex || 0)}
      >
        {allWebsites.map((web, i) => (
          <SwiperSlide
            key={i}
            className={cn(
              'w-full flex items-center px-4 justify-center transition-all duration-300 ease-in-out',
            )}
          >
            <web.comp />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default WebsitesTabContent