import { CalendarCircle } from 'iconsax-react'
import React from 'react'
import TimelineItem from './TimelineItem'


export default function Timeline() {
  return (
    <div className='w-full'>
    <ol className="items-center sm:flex">
       
       <TimelineItem/>
       <TimelineItem/>
       <TimelineItem/>
       <TimelineItem/>
       <TimelineItem/>
       <TimelineItem/>
    </ol>
    </div>
  )
}
