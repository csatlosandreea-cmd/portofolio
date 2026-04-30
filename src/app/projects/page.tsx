'use client'

import CircularText from '@components/CircularText'
import projectsCategories from './porjects'

const page = () => {
  return (
    <div className='pt-32 pb-8 flex flex-col items-center gap-4'>
      <h1 className='uppercase text-5xl mx-auto text-center text-white'>My Projects</h1>

      {projectsCategories.map((project, i) => (
        <CircularText
          key={i}
          text="MY*PROJECTS*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
          insideText={project.insideText}
          link={project.link}
        />
      ))}
    </div>
  )
}

export default page