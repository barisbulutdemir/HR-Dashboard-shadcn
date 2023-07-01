import React from 'react'
import Team from './team'
import Progress from './progress'
import Employee from './employee'
import DailyTasks from './dailyTasks'

export default function HomePage() {
  return (
    <>
      <div>
        <Team />
        <div className='flex mt-5'>
          <div className='w-[50%] h-[520px]'> <Progress  /></div>
         
          <div className='flex w-[50%] flex-col'> 
            <div className=''><Employee /> </div>
            <div className='h-[50%] grow '> <DailyTasks /></div>
            
           
          </div>
          
        </div>
        
      </div>
      
    
    </>
  )
}
