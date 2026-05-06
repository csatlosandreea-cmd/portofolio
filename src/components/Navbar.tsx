'use client'

import Link from 'next/link'
import logo from '@public/assets/logo.png';
import React from 'react'
import { cn } from '../lib/utils'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  {
    link: '/experience',
    text: 'Experience',
  },
  {
    link: '/projects',
    text: 'Projects',
  },
  {
    link: '/about-me',
    text: 'About Me',
  },
  {
    link: '/contact',
    text: 'Contact',
  },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className={cn('hidden relative', 'lg:block')}>
      <Link href={'/'}>
        <Image
          src={logo}
          alt='Logo'
          width={300}
          height={300}
          className='w-10 absolute inset-0 z-30 top-4 left-16'
        />
      </Link>
      <nav className='flex absolute top-4 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap items-center bg-[#D9D9D933] gap-14 text-xl backdrop-blur-md text-white uppercase px-8 py-2 rounded-2xl w-fit'>
        {links.map((l, i) => (
          <Link 
            key={i}
            href={l.link}
            className={cn(
              (l.link.startsWith(pathname) && pathname !== '/') && 'font-extrabold'
            )}
          >{l.text}</Link>
        ))}
      </nav>
    </div>
  )
}

export default Navbar