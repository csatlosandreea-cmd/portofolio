'use client'

import StaggeredMenu from './StaggeredMenu';

const socialItems = [
  { 
    label: 'LinkedIn', 
    link: 'https://www.linkedin.com/in/andreea-florentina-csatlos-musan-8682aa343' 
  },
  { 
    label: 'Instagram', 
    link: 'https://www.instagram.com/a._andreea_a' 
  },
  { 
    label: 'Facebook', 
    link: 'https://www.facebook.com/andreea.florentina.106' 
  }
];


const MobileNavbar = () => {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/projects' },
    { label: 'Experience', link: '/experience' },
    { label: 'About Me', link: '/about-me' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <div 
      style={{ height: '100vh', background: 'transparent' }} 
      className='w-full absolute lg:hidden'
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
        logoUrl={'/assets/logo.png'}
        accentColor='#000'
        className='lg:hidden z-10'
      />
    </div>
  )
}

export default MobileNavbar
