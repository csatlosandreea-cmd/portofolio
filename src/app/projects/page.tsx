'use client'

import CircularText from '@components/CircularText'
import projectsCategories from './porjects'
import { cn } from '@/src/lib/utils'

const page = () => {
  const firstGroup = [
    projectsCategories[0], projectsCategories[1], projectsCategories[2],
  ]
  const secondGroup = [
    projectsCategories[3], projectsCategories[4], projectsCategories[5],
  ]
  return (
    <div className='pt-32 pb-8 gap-4'>
      <h1 className={cn(
        'heroeau uppercase text-4xl mx-auto mb-8 text-center text-white',
        'lg:text-5xl'
      )}>My Projects</h1>

      <div className='flex flex-col px-8 lg:hidden'>
        {projectsCategories.map((project, i) => (
          <CircularText
            key={i}
            text="MY*PROJECTS*"
            onHover="speedUp"
            spinDuration={20}
            className={"custom-class"}
            index={i}
            insideText={project.insideText}
            link={project.link}
          />
        ))}
      </div>

      <div className={cn(
        'hidden items-center justify-around gap-8',
        'lg:flex'
      )}>
        {firstGroup.map((project, i) => (
          <CircularText
            key={i}
            text="MY*PROJECTS*"
            onHover="speedUp"
            spinDuration={20}
            className={"custom-class"}
            index={i}
            insideText={project.insideText}
            link={project.link}
          />
        ))}
      </div>
      <div className={cn(
        'hidden items-center justify-around gap-8',
        'lg:flex'
      )}>
        {secondGroup.map((project, i) => (
          <CircularText
            key={i}
            text="MY*PROJECTS*"
            onHover="speedUp"
            spinDuration={20}
            className={"custom-class"}
            index={i}
            insideText={project.insideText}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default page