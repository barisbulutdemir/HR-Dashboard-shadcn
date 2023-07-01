import React from 'react'
import { Input } from '../ui/input'

export default function Header() {
  return (
    <>
      <div className='flex justify-between ' >
        <div className=' '>
          <h3 className='text-xl'>Welcome back <span className='font-bold'>Baris</span></h3>
          <p className='text-xs'>You have <span className='text-orange-500'>9 tasks</span></p>
        </div>
        <div>
        <Input
          type="search"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[300px] "
        />
        </div>
      </div>
      
    </>
  )
}
