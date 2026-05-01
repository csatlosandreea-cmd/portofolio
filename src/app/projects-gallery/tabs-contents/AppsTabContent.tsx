import Image from 'next/image'
import mokker1 from '@public/assets/mokker1.png'
import mokker2 from '@public/assets/mokker2.png'
import React from 'react'

const AppsTabContent = () => {
  return (
    <div>
      <h1>News App</h1>

      <p>
        Is a mobile ecosystem designed to merge 
        real-time data with user safety.
      </p>

      <div className='flex items-baseline mt-auto absolute bottom-0 scale-110'>
        <Image
          src={mokker1}
          alt='mokker'
          className=''
        />
        <Image
          src={mokker2}
          alt='mokker'
          className=''
        />
      </div>
    </div>
  )
}

export default AppsTabContent