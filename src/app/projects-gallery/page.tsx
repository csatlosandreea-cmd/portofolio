'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@components/ui/tabs'
import React, { useEffect, useMemo, useState } from 'react'
import tabs from './tabs'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { cn } from '@/src/lib/utils'

const ProjectGallery = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const tabParam = searchParams.get('tab')

  const initialValue = useMemo(() => {
    const found = tabs.find(t => t.value === tabParam)
    return found?.value || tabs[0].value
  }, [tabParam])

  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const currentIndex = tabs.findIndex(t => t.value === value)

  const goTo = (index: number) => {
    const nextTab = tabs[index]
    if (!nextTab) return

    setValue(nextTab.value)

    const params = new URLSearchParams(searchParams.toString())
    params.set('tab', nextTab.value)
    router.replace(`?${params.toString()}`)
  }

  const next = () => {
    if (currentIndex < tabs.length - 1) {
      goTo(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1)
    }
  }

  return (
    <div className="pt-32 pb-8 px-8 z-10 h-screen text-white">
      <Tabs
        value={value}
        onValueChange={setValue}
        className="w-full h-full"
      >
        
        <TabsList className="hidden">
          {tabs.map((t) => (
            <TabsTrigger key={t.value} value={t.value}>
              {t.value}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex items-center justify-between mb-4">
          <IconChevronLeft
            size={48}
            onClick={prev}
            className={cn(currentIndex === 0 && 'pointer-events-none opacity-50')}
          />

          <h1 className='text-4xl'>{tabs[currentIndex].title}</h1>

          <IconChevronRight
            size={48}
            onClick={next}
            className={cn(currentIndex === tabs.length - 1 && 'pointer-events-none opacity-50')}
          />
        </div>

        {tabs.map((t) => (
          <TabsContent 
            key={t.value} 
            value={t.value}
            className='h-full'
          >
            <t.tabContent />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default ProjectGallery