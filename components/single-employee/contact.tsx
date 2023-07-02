import React from 'react'
import { Label } from '../ui/label'
import { HiOutlineClipboardCopy } from 'react-icons/hi'

export default function Contact() {
  return (
    <>
        <div className='grid gap-2 ml-5'> 
            <div className='grid'>
                 <Label className='opacity-40'>Phone Number:</Label>
                 <Label className='ml-8'>+48 536 323 671</Label>
            </div>
            <div className='grid'>
                <Label className='opacity-40'>Email:</Label>
                 <Label className='ml-8'>vpnbaris@gmail.com</Label>
            </div>
            <div className='grid '>
                <Label className='opacity-40'>Foremen:</Label>
                <div className='flex gap-2 items-center'>
                    <Label className='ml-8 '>Barış Bulut Demir</Label>
                    <div className='flex cursor-pointer'>
                        <Label className='italic'>+48 536 323 671</Label>
                        <span className='cursor-pointer'><HiOutlineClipboardCopy /></span>
                    </div>
                </div>
            </div>
            <div className='grid '>
                <Label className='opacity-40'>Manager:</Label>
                <div className='flex gap-2 items-center'>
                    <Label className='ml-8 '>Barış Bulut Demir</Label>
                    <div className='flex cursor-pointer'>
                        <Label className='italic'>+48 536 323 671</Label>
                        <span className='cursor-pointer'><HiOutlineClipboardCopy /></span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
