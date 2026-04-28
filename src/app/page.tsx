'use client'

import GlassSurface from "@components/GlassSurface";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex relative h-screen w-full flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black sm:items-start">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList='nodownload nofullscreen noremoteplayback'
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src='/assets/home-video.mp4' type='video/mp4' />
        </video>

        <GlassSurface
          displace={0.8}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blur={10}
          borderWidth={0.2}
          blueOffset={20}
          brightness={50}
          opacity={0.93}
          mixBlendMode="screen"
          height={200}
          width={300}
          className="w-full bg-black/40!"
        >
          <div className="flex flex-col items-center justify-center text-white text-center whitespace-nowrap text-4xl">
            <span>Hello, I am</span>
            <span>ANDREEA</span>
            <span>Graphic Designer</span>
          </div>
        </GlassSurface>

        <GlassSurface
          displace={0.8}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blur={10}
          borderWidth={0.2}
          blueOffset={20}
          brightness={50}
          opacity={0.93}
          mixBlendMode="screen"
          height={70}
          width={300}
          className="absolute! bottom-8 bg-black/40!"
        >
          <div className="flex items-center justify-center text-white text-center whitespace-nowrap uppercase text-2xl">
            <span>Focus. Create. Grow</span>
          </div>
        </GlassSurface>
      </main>
    </div>
  );
}
