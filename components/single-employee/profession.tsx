import React from 'react'
import { Label } from '../ui/label'

export default function Profession() {
  return (
    <>
        <div className='mx-5 grid space-y-3'>
            <div className='flex flex-col gap-2 '>
                 <Label className='opacity-40'>Main Professions:</Label>
                 <Label>Admin - Logistic</Label>
            </div>

            <div className='flex flex-col gap-2 '>
                <Label className='opacity-40'>Extra Professions:</Label>
                <Label>Mechanic, Hydraulic, Pnuematic systems</Label>
            </div>
           

        </div>
    
    
    </>
  )
}
