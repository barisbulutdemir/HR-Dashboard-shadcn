import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
  
import { teamMembers } from '../app/data/teamMembers'
import { Label } from './ui/label'
import { HiChevronDown } from 'react-icons/hi'

export default function Team() {
  return (
    <>
    <div className='flex w-full bg-gradient-to-t from-white to-green-100  '>
        <div className='flex items-center'>
            
            <div className='ml-2'>
                <Popover >
                    <PopoverTrigger className='flex items-center justify-center cursor-pointer'>
                         <Label className='text-2xl font-light'>Teams</Label>
                         <HiChevronDown className='text-md mt-2' />
                    </PopoverTrigger>
                    <PopoverContent>Takımdan personel çıkartmak için iletişime geçin.</PopoverContent>
                </Popover>     
            </div>
            
        </div>
        <div className='flex gap-1 ml-2 mt-2'>
        {
            teamMembers.map((member,i)=> (
                <div key={i} className='flex flex-col items-center justify-center '>
                    <Avatar className='w-8 h-auto' >
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"  />
                        <AvatarFallback>{member.name}</AvatarFallback>
                    </Avatar>
                    
                </div>
                

            ))
        }
        </div>
    </div>
    </>
  )
}
