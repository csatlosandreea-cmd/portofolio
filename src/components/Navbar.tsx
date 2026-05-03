import Link from 'next/link'
import logo from '@public/assets/logo.png';
import React from 'react'
import { cn } from '../lib/utils'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={cn('hidden relative', 'lg:block')}>
      <Image
        src={logo}
        alt='Logo'
        width={300}
        height={300}
        className='w-10 absolute inset-0 z-30 top-4 left-16'
      />
      <nav className='flex absolute top-4 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap items-center bg-[#D9D9D933] gap-14 text-xl backdrop-blur-md text-white uppercase px-8 py-2 rounded-2xl w-fit'>
        <Link href='/experience'>Experience</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about-me'>About Me</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar