import React from 'react'

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { santiye } from '@/app/data/santiye'
import { ScrollArea } from './ui/scroll-area'


export default function Employee() {
  return (
    <>
      <div className='mx-5  '>
        <Card className=''>
        <ScrollArea className='h-[300px] shadow-xl'>
          {
            santiye.map((site,i) => (
              <Card key={i} className='mx-4 my-2 px-4 py-2'>
                
                  <div className='flex justify-between '>
                    <div className='flex flex-col justify-center basis-1/3 '>
                      <Label>{site.site}</Label>
                      <Label className='text-xs text-slate-400'>Denmark</Label>
                    </div>
                    <div className='flex flex-col gap-1 basis-1/3'>
                      <Label>Mechanic: <span>{site.mechanic}</span></Label>
                      <Label>Electic: <span>{site.electric}</span></Label>
                      <Label>Other: <span>{site.foremen+ site.admin + site.operator}</span></Label>
                    </div>
                    <div className='flex justify-center items-center basis-1/3'>
                      <Label>Total: <span>95</span></Label>
                    </div>
                </div>
          </Card>
            ))
          }
          </ScrollArea>
        </Card>
      </div>
      
    
    </>
  )
}
