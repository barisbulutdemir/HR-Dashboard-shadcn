import React from 'react'
import { Card } from './ui/card'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { Separator } from './ui/separator'
import { dailyTasks } from '@/app/data/DailyTask'
import { ScrollArea } from './ui/scroll-area'


export default function DailyTasks() {
  return (
    <>
      <div className=' mx-5 my-5  '>
        <Card className=''>
          <ScrollArea className='h-[200px] shadow-xl'>
          {
            dailyTasks.map((task,i) =>(

              <div key={i} className='grid p-5 space-y-4 '>
                <div className=' grid space-y-2'>
                  <div className=' flex justify-between '>
                    <Label>{task.task}</Label>
                    <Checkbox/> 
                  </div>
                  <Separator/>
                </div>
              </div>
            ))
          }
          </ScrollArea>
          
        </Card>
        
        
     
      </div>
      
    
    </>
  )
}
