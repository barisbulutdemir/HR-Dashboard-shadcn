import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { tasks } from '@/app/data/teamMembers'
import { Separator } from './ui/separator'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { ScrollArea } from './ui/scroll-area'

export default function Progress() {
  return (
    <>
    <Tabs defaultValue="inProgress" className="shadow-xl ml-5  overflow-hidden rounded-b-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="inProgress">In Progress</TabsTrigger>
        <TabsTrigger value="closed">Closed</TabsTrigger>
      </TabsList>
      <TabsContent value="inProgress">
        
          
          <CardContent className=" mt-4">
            <ScrollArea className=' h-[445px]  '>

            {
                tasks.map(((task,i) => (
                    <div key={i} className='my-2 ' >
                        
                        <div className=" flex items-center space-x-4 rounded-md border p-4 shadow-md ">
                            <div className=' flex flex-col w-[95%]'>  
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none"> 
                                    {task.category}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                    {task.title}
                                    </p>
                                </div>
                                <div className="bg-slate-300 h-[1px] w-full my-2  " />
                                <div className='flex justify-between mx-4 '>
                                    <div className=' flex gap-1 cursor-pointer hover:shadow-xl  '>
                                        <HiOutlineChatAlt2 className='text-slate-400  scale-125' />
                                        <p className='text-xs text-slate-400'>2</p>
                                    </div>
                                    <div>
                                        <Label className='italic opacity-20  '>26.06.2023 </Label>
                                    </div>

                                </div>
                                
                            </div>
                            

                        </div>
                        
                    </div>
                    
                )))
            }
            </ScrollArea>
            
          </CardContent>
      </TabsContent>


      {/* ----------------------- Closed section --------------------------------------------- */}
      <TabsContent value="closed">
      <CardContent className="space-y-2 mt-4">

{
    tasks.map(((task,i) => (
        <div key={i} >
            
            <div className=" flex items-center space-x-4 rounded-md border p-4 shadow-md ">
                <div className=' flex flex-col w-[95%]'>  
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none"> 
                        {task.category}
                        </p>
                        <p className="text-sm text-muted-foreground">
                        {task.title}
                        </p>
                    </div>
                    <div className="bg-slate-300 h-[1px] w-full my-2  " />
                    <div className='flex justify-between mx-4 '>
                        <div className=' flex gap-1 cursor-pointer hover:shadow-xl  '>
                            <HiOutlineChatAlt2 className='text-slate-400  scale-125' />
                            <p className='text-xs text-slate-400'>2</p>
                        </div>
                        <div>
                            <Label className='italic opacity-20  '>26.06.2023 </Label>
                        </div>

                    </div>
                    
                </div>
                

            </div>
            
        </div>
        
    )))
}

</CardContent>
      </TabsContent>
    </Tabs>
    
    </>
  )
}
