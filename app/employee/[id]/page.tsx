import Location from '@/components/single-employee/location'
import TransferLog from '@/components/single-employee/transferLog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

export default function SingleEmployee() {
  return (
    <>  
        <div className='mt-5'>
            {/* ---------- avatar and name start ------  */}
            <div className='grid justify-center '>
                <div  className=' '>
                    <Avatar className='w-32 h-auto ml-2' >
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"  />
                    </Avatar>
                </div>
                <div className='mt-2'>
                 <Label className='text-xl'>Barış Bulut Demir</Label>
                </div>
            </div>

            {/*  ---------- avatar and name end --------- */}

            {/*  ----------  --------- */}
            <ScrollArea className='h-[400px]'>

            <div className='mt-10 mx-5'>
                <Location />
                <TransferLog />

            </div>

            </ScrollArea>
           
           
            
           
          

           
        </div>
    
    
    </>
  )
}
