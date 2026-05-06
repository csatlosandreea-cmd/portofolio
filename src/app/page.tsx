'use client'

import GlassSurface from "@components/GlassSurface";
import { cn } from "@lib/utils";
import blob from '@public/assets/home-blob.png'
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className={cn(
        "flex relative h-screen w-full flex-col bg-[#161616] items-center justify-center py-32 px-8  dark:bg-black sm:items-center",
        'lg:items-start'  
      )}>
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList='nodownload nofullscreen noremoteplayback'
          className={cn(
            'absolute w-full h-full object-cover',
            'lg:w-1/3 lg:right-0!'
          )}
        >
          <source src='/assets/home-video.mp4' type='video/mp4' />
        </video>

        <GlassSurface
          displace={0.8}
          distortionScale={-90}
          redOffset={0}
          greenOffset={10}
          blur={30}
          borderWidth={0.2}
          blueOffset={20}
          brightness={50}
          opacity={0.7}
          mixBlendMode="screen"
          height={120}
          width={200}
          className={cn(
            "hidden absolute! bottom-12 right-44",
            'lg:flex'
          )}
        >
        </GlassSurface>
        <GlassSurface
          displace={0.8}
          distortionScale={-90}
          redOffset={0}
          greenOffset={10}
          blur={30}
          borderWidth={0.2}
          blueOffset={20}
          brightness={50}
          opacity={0.7}
          mixBlendMode="screen"
          height={120}
          width={200}
          className={cn(
            "hidden absolute! bottom-44 right-0",
            'lg:flex'
          )}
        >
        </GlassSurface>
        <GlassSurface
          displace={0.8}
          distortionScale={-90}
          redOffset={0}
          greenOffset={10}
          blur={30}
          borderWidth={0.2}
          blueOffset={20}
          brightness={50}
          opacity={0.7}
          mixBlendMode="screen"
          height={120}
          width={200}
          className={cn(
            "hidden absolute! bottom-76 right-44",
            'lg:flex'
          )}
        >
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
          height={200}
          width={300}
          className={cn(
            "w-full bg-black/40!",
            'lg:hidden'
          )}
        >
          <div className="flex flex-col items-center justify-center text-white text-center whitespace-nowrap text-2xl">
            <span className="uppercase hepta">Hello, I am</span>
            <span className="uppercase hepta text-4xl">
              <span className="heroeau">A</span>
              ndreea
            </span>
            <span className="uppercase hepta">Graphic Designer</span>
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
          className={cn(
            "absolute! bottom-8 bg-black/40! mx-auto",
            'lg:hidden'
          )}
        >
          <div className="flex items-center justify-center text-white text-center whitespace-nowrap uppercase text-xl">
            <span className="hepta">Focus. Create. Grow</span>
          </div>
        </GlassSurface>

        <div className={cn(
          "hidden flex-col pl-8 items-start justify-start text-white text-center whitespace-nowrap text-3xl gap-2",
          'lg:flex',
          'xl:text-4xl'
        )}>
          <span className="hepta">Hello, I am</span>
          <span className="hepta uppercase my-2 text-7xl">
            <span className="heroeau">A</span>
            <span className="hepta">ndreea</span>
          </span>
          <span className="hepta">Graphic Designer</span>
        </div>

        <Image
          src={blob}
          alt='Blob'
          width={300}
          height={300}
          className='hidden w-40 absolute bottom-0 left-0 lg:block'
        />
      </main>
    </div>
  );
}
