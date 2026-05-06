import Image from 'next/image'
import mokker1 from '@public/assets/mokker1.png'
import mokker2 from '@public/assets/mokker2.png'
import React from 'react'
import { cn } from '@/src/lib/utils'

const AppsTabContent = () => {
  return (
    <div className={cn(
      'flex flex-col items-center',
      'lg:flex-row'
    )}>
      <div className={cn(
        'sm:px-4 text-2xl',
        'lg:w-3/4'
      )}>
        <h1 className={cn(
          'heroeau text-3xl mb-4',
          'lg:text-center lg:text-4xl',
          'xl:text-5xl'
        )}>News App</h1>
        <div className={cn(
          'lg:bg-[#D9D9D933] px-6 py-2 mx-auto rounded-xl lg:border lg:border-white lg:backdrop-blur-md',
          'xl:max-w-3/4'
        )}>
          <span className='hepta text-2xl'>
            Is a mobile ecosystem designed to merge 
            real-time data with user safety.
          </span>
          <span className={cn(
            'hepta hidden text-2xl ml-2',
            'lg:inline'
          )}>
            It&apos;s a mobile ecosystem designed to merge
            real-time data with user safety. The project focuses on 
            a &quot;Safety-First&quot; interface, providing drivers 
            with instant access to critical information—such as road 
            conditions, medical assistance, and vehicle diagnostics—through 
            a unified digital cockpit.
          </span>
        </div>
      </div>

      <div className={cn(
        'flex items-baseline mt-20',
        'sm:w-3/5',
      )}>
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