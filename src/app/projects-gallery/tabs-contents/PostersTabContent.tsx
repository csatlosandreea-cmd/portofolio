import Image from 'next/image'
import poster1 from '@public/assets/poster1.png'
import poster2 from '@public/assets/poster2.png'
import poster3 from '@public/assets/poster3.png'
import poster4 from '@public/assets/poster4.png'
import React from 'react'

const PostersTabContent = () => {
  return (
    <div className='flex flex-col justify-center gap-8'>
      <Image
        src={poster1}
        alt='Poster'
        width={300}
        height={300}
        className='w-3/4'
      />
      <Image
        src={poster2}
        alt='Poster'
        width={300}
        height={300}
        className='w-3/4 ml-auto'
      />
      <Image
        src={poster3}
        alt='Poster'
        width={300}
        height={300}
        className='w-3/4'
      />
      <Image
        src={poster4}
        alt='Poster'
        width={300}
        height={300}
        className='w-3/4 ml-auto'
      />
    </div>
  )
}

export default PostersTabContent