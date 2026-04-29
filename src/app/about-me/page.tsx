import React from 'react'
import programs from "@public/assets/programs-about.png"
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='pt-32 pb-8 text-white'>
      <h1 className='uppercase text-5xl mx-auto text-center text-white'>About Me</h1>

      <p className='text-xl mt-6 px-8 text-center'>
        I am a graphic designer who blends the rigor of computer science with visual freedom. 
        From the algorithms I studied at &quot;Carmen Sylva&quot; Petrosani 
        to the engineering complexities at Politehnica Timișoara (ETCTI), 
        I approach design as a logical system rather than just an aesthetic pursuit.
        Today, I transform technical concepts into intuitive visual solutions, 
        proving that discipline and creativity are essential parts of the same equation.
      </p>

      <Image
        src={programs}
        alt=''
        width={300}
        height={300}
        className='w-full mt-8'
      />
    </div>
  )
}

export default AboutPage