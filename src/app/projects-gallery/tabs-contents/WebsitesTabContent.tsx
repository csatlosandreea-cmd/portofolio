import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { cn } from '@lib/utils';
import SolarisWebsite from './websites/SolarisWebsite';
import RecruitmentWebsite from './websites/RecruitmentWebsite';
import PeterWebsite from './websites/PeterWebsite';
import MyPortfolio from './websites/MyPortfolio';
import { IconChevronLeft, IconChevronRight, IconPointFilled } from '@tabler/icons-react';

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
      <div className='flex items-end justify-center gap-8 w-fit mx-auto'>
        <div className={cn(
          'flex-center gap-1 w-fit bg-black/20 backdrop-blur-md mx-auto p-2 rounded-full',
          'md:mt-4',
          ''
        )}>
          {Array(4).fill(0).map((_, i) => (
            <IconPointFilled key={i} className={cn(
              'text-white z-10 opacity-40 transition-all duration-200 ease-in',
              activeIndex === i && 'opacity-100'
            )} />
          ))}
        </div>
        
        <div className='flex items-center gap-4 z-20'>
          <IconChevronLeft 
            size={32} 
            className='text-whtie z-20' 
            onClick={() => swiper?.slidePrev()}
          />
          <IconChevronRight 
            size={32} 
            className='text-whtie z-20' 
            onClick={() => swiper?.slideNext()}
          />
        </div>
      </div>

      <Swiper
        onSwiper={setSwiper}
        centeredSlides
        slidesPerView={1}
        className={cn(
          'w-full relative mt-8',
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