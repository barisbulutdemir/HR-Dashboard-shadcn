"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import LocationChange from "./microComponents/LocationChange"
import { Textarea } from "./ui/textarea"

export function ViewEmployee() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button >View</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 space-y-5">
       <div className="grid  justify-center my-4">
            <Label>Barış Bulut Demir</Label>
            <Label className="opacity-40">Admin - Logistic</Label>
       </div>
       <div>
        <Label> Not: <span className="text-blue-900 text-xs hover:underline cursor-pointer">Edit</span> </Label>
        <Textarea placeholder="Not girin" disabled/>
       </div>
       <div> 
            <LocationChange />
        </div>
      </PopoverContent>
    </Popover>
  )
}
