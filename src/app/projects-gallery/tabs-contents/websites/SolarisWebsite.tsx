import React from 'react'
import Image from 'next/image'
import solaris1 from '@public/assets/solaris1.png'
import solaris2 from '@public/assets/solaris2.png'

const SolarisWebsite = () => {
  return (
    <>
      <p className='text-xl mb-4'>Solaris Tales</p>
      <p className='text-xl opacity-75'>
        Solaris Tales is an e-commerce platform 
        dedicated to book lovers
      </p>

      <div className='flex flex-col items-end mt-6'>
        <Image
          src={solaris1}
          alt='Solaris Tales'
          width={100}
          height={100}
          className='w-3/5 -mb-30'
        />
        <Image
          src={solaris2}
          alt='Solaris Tales'
          width={100}
          height={100}
          className='w-3/5 mr-8 z-20'
        />
      </div>
    </>
  )
}

export default SolarisWebsite