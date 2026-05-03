import React from 'react'
import programs from "@public/assets/programs-about.png"
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import aboutImg from '@public/assets/about-imgs/about-img.png'
import about1 from '@public/assets/about-imgs/about1.png'
import about2 from '@public/assets/about-imgs/about2.png'
import about3 from '@public/assets/about-imgs/about3.png'
import about4 from '@public/assets/about-imgs/about4.png'
import about5 from '@public/assets/about-imgs/about5.png'
import about6 from '@public/assets/about-imgs/about6.png'

const aboutImgs = [
  about1, about2, about3,
  about4, about5, about6
]

const AboutPage = () => {
  return (
    <div className={cn(
      'pt-32 pb-8 text-white items-center justify-center mt-4 gap-4',
      'lg:flex lg:px-12'
    )}>
      <Image
        src={aboutImg}
        alt='img'
        width={300}
        height={300}
        className={cn(
          'hidden w-60 mt-8',
          'xl:block'
        )}
      />

      <div>
        <h1 className={cn(
          'uppercase text-5xl mx-auto text-center text-white',
          'lg:text-6xl'
        )}
        >About Me</h1>

        <p className={cn(
          'text-xl mt-6 px-8 text-center',
          'md:px-16',
          'lg:max-w-150 lg:text-2xl',
          'xl:px-4'
        )}>
          I am a graphic designer who blends the rigor of computer science with visual freedom. 
          From the algorithms I studied at &quot;Carmen Sylva&quot; Petrosani 
          to the engineering complexities at Politehnica Timișoara (ETCTI), 
          I approach design as a logical system rather than just an aesthetic pursuit.
          Today, I transform technical concepts into intuitive visual solutions, 
          proving that discipline and creativity are essential parts of the same equation.
        </p>
      </div>

      <div className='hidden flex-col flex-wrap gap-4 lg:flex'>
        {aboutImgs.map((im, i) => (
          <Image
            key={i}
            src={im}
            alt='img'
            width={300}
            height={300}
            className={cn(
              'w-30 grayscale hover:grayscale-0 trnasition-all duration-200 ease-in',
              i % 2 > 0 ? 'ml-28 -mt-15' : '-mt-15'
            )}
          />
        ))}
      </div>

      <Image
        src={programs}
        alt=''
        width={300}
        height={300}
        className='w-full mt-8 lg:hidden'
      />
    </div>
  )
}

export default AboutPage