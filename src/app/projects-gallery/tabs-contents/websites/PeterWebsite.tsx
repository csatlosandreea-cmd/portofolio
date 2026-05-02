import Image from 'next/image'
import website2_1 from '@public/assets/websites/website2-1.png'
import website2_2 from '@public/assets/websites/website2-2.png'
import website2_3 from '@public/assets/websites/website2-3.png'
import React from 'react'

const PeterWebsite = () => {
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
          src={website2_1}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-full z-20'
        />
        <Image
          src={website2_2}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-85/100 z-10 -mt-14 mx-auto'
        />
        <Image
          src={website2_3}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-75/100 -mt-12 mx-auto'
        />
      </div>
    </>
  )
}

export default PeterWebsite