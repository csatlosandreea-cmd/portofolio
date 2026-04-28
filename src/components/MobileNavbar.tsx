'use client'

import logo from '@public/assets/logo.png';
import StaggeredMenu from './StaggeredMenu';

const socialItems = [
  { label: 'TikTok', link: 'https://www.tiktok.com/@mifari.raw' },
  { label: 'Instagram', link: 'https://www.instagram.com/mifari.raw' },
  { label: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61575728319624' }
];


const MobileNavbar = () => {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Contact', link: '/contact' },
    { label: 'Projects', link: '/projects' },
    { label: 'Experience', link: '/experience' },
    { label: 'About Me', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <div 
      style={{ height: '100vh', background: 'transparent' }} 
      className='w-full h-full absolute lg:hidden'
    >
      <StaggeredMenu
        position='right'
        isFixed
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={false}
        menuButtonColor='#ffffff'
        openMenuButtonColor='#000'
        changeMenuColorOnOpen={true}
        colors={['#C3B9B9', '#000']}
        logoUrl={logo.src}
        accentColor='#000'
        className='lg:hidden z-10'
      />
    </div>
  )
}

export default MobileNavbar