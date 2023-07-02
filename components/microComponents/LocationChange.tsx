import React from 'react'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

export default function LocationChange() {
  return (
    <div>

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
                     </div>
  )
}
