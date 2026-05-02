import Image from 'next/image'
import website1_1 from '@public/assets/websites/website1-1.png'
import website1_2 from '@public/assets/websites/website1-2.png'
import website1_3 from '@public/assets/websites/website1-3.png'
import React from 'react'

const RecruitmentWebsite = () => {
  return (
    <>
      <p className='text-xl mb-4'>Recruitment World</p>
      <p className='text-xl opacity-75'>
        A comprehensive branding project for 
        a recruitment firm. The design focuses 
        on the &quot;perfect match&quot;
        concept, using structured layouts.
      </p>

      <div className='flex flex-col w-full items-end rleative mt-6'>
        <Image
          src={website1_1}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-7/10'
        />
        <Image
          src={website1_2}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-7/10 z-20 absolute -bottom-1/4 left-1/10'
        />
        <Image
          src={website1_3}
          alt='Recruitment'
          width={100}
          height={100}
          className='w-4/5 z-20  absolute -bottom-7/10 left-1/6'
        />
      </div>
    </>
  )
}

export default RecruitmentWebsite