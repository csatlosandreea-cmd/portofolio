import Image from 'next/image'
import website3_1 from '@public/assets/websites/website3-1.png'
import website3_2 from '@public/assets/websites/website3-2.png'
import website3_3 from '@public/assets/websites/website3-3.png'
import React from 'react'

const MyPortfolio = () => {
  return (
    <>
      <p className='text-xl mb-4'>Full-Stack Developer Portfolio</p>
      <p className='text-xl opacity-75'>
        A comprehensive digital showcase designed 
        to highlight technical expertise through 
        a minimalist lens.
      </p>

      <div className='flex flex-col w-full items-end rleative mt-6'>
        <Image
          src={website3_3}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-75/100 mx-auto'
        />
        <Image
          src={website3_2}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-85/100 z-10 -mt-14 mx-auto'
        />
        <Image
          src={website3_1}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-full z-20 -mt-12'
        />
      </div>
    </>
  )
}

export default MyPortfolio