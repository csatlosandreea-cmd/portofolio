import Image from 'next/image'
import mokker1 from '@public/assets/mokker1.png'
import mokker2 from '@public/assets/mokker2.png'
import React from 'react'

const AppsTabContent = () => {
  return (
    <div>
      <h1 className='text-3xl mb-4'>News App</h1>

      <p className='text-2xl'>
        Is a mobile ecosystem designed to merge 
        real-time data with user safety.
      </p>

      <div className='flex items-baseline mt-20 absolute bottom-0'>
        <Image
          src={mokker1}
          alt='mokker'
        />
        <Image
          src={mokker2}
          alt='mokker'
        />
      </div>
    </div>
  )
}

export default AppsTabContent