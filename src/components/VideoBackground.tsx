'use client'

import { usePathname } from 'next/navigation'

const VideoBackground = () => {
  const pathname = usePathname()

  const show = pathname.includes('projects-gallery')

  if (!show) return null

  return (
    <div className='w-full h-full'>
      <span className='w-full h-full fixed inset-0 bg-black/50' />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/assets/drop-video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground