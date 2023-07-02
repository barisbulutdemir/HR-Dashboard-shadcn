"use client"
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import Profession from './profession'
import Contact from './contact'
import LocationChange from '../microComponents/LocationChange'


function Location() {
  return (
    <>
      <div className=''>
                <Card className=''>
                    <CardHeader>
                         <Label className='opacity-50'>Personel Informations</Label>
                    </CardHeader> 
                    
                    <CardContent className=''>
                    <div className='flex gap-10'>

                        {/* -----------location start ---------- */}
                        
                        <LocationChange />
                        
                        {/* -----------location end ---------- */}


                        {/* -----------Information start ---------- */}


                        <div className='flex w-[30%] '>
                            <div className='w-0.5 h-full bg-slate-200' />
                            <Profession />
                        </div>
                        {/* -----------Information end ---------- */}

                        {/* -----------Contact Start ---------- */}

                        <div className='flex'>
                            <div className='w-0.5 h-full bg-slate-200' />

                            <Contact />
                        </div>
                        {/* -----------Contact end ---------- */}






                        </div>

                    </CardContent>
                   
                    
                    
                </Card>
            </div></>
  )
}

export default Location