import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import Profession from './profession'


function Location() {
  return (
    <>
      <div className='mt-10 mx-5'>
                <Card className=''>
                    <CardHeader>
                         <Label className='opacity-50'>Personel Informations</Label>
                    </CardHeader> 
                    
                    <CardContent className=''>
                    <div className='flex gap-10'>

                        {/* -----------location start ---------- */}
                        
                        <div className='grid items-center gap-3'>
                            <Label>Current Location:</Label>
                            <div className='grid'>
                                <Label>Resko </Label>
                                <Label className='opacity-40'>Poland</Label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Label>Change</Label>
                                <Select>
                                        <SelectTrigger className="w-[100px]">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectLabel>Poland</SelectLabel>
                                            <SelectItem value="resko">Resko</SelectItem>
                                            <SelectItem value="pros">Pros</SelectItem>
                                            <SelectItem value="krakow">Krakow</SelectItem>
                                            <SelectLabel>Denmark</SelectLabel>
                                            <SelectItem value="Bregentved">Bregentved</SelectItem>
                                            <SelectItem value="Unibrew">Unibrew</SelectItem>
                                            <SelectItem value="hoffor">Hoffor</SelectItem>
                                            <SelectItem value="vildjberg">Vildjberg</SelectItem>

                                            </SelectGroup>
                                        </SelectContent>
                                </Select>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Button>
                                    Save
                                </Button>
                            </div>
                           
                        </div>
                        
                        {/* -----------location end ---------- */}


                        {/* -----------Information start ---------- */}


                        <div className='flex '>
                            <div className='w-0.5 h-full bg-slate-200' />
                            <Profession />

                        </div>
                        {/* -----------Information end ---------- */}



                        </div>

                    </CardContent>
                   
                    
                    
                </Card>
            </div></>
  )
}

export default Location