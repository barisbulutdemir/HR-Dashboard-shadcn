"use client"

import { ViewEmployee } from '@/components/employeePopover';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from 'react'

type Person = {
  id: number;
  username: string;
  email: string;
  phone_number: string;
};

export default function Employee() {

  const [data, setData] = useState<Person[]>([]); // Data state

  async function fetchPersons() {
    try {
      // İstek yapılıyor ve dönen değer response'a atanıyor
      const response = await axios.get('https://barisbdem.pythonanywhere.com/persons/');
      // JSON verisini döndür
      return response.data;
    } catch (err) {
      // Bir hata meydana gelirse, hatayı konsola yazdır
      console.error(`Error in fetch: ${err}`);
      // Hata durumunu da yönetebiliriz, örneğin bir hata objesi döndürebiliriz
     return ("error")
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPersons();
      setData(result);
    };

    fetchData();
  }, []); // Only run once on mount


  return (
    <>
    <div className=' mt-5 mx-5 rounded-md border'>
      <Table className='flex flex-col'>
        <TableHeader className=''>
          <TableRow className='flex'>
            <div className='w-[30%] '> 
              <TableHead className=''>ID</TableHead>
              <TableHead className=''>Ad</TableHead>
            </div>
           
            <div className='mx-10 flex justify-between w-[70%]'>
              <TableHead className='flex items-center' >Professional</TableHead>
              <TableHead className='flex items-center'>Current Loc</TableHead>
            </div>
            
          </TableRow>
        </TableHeader>
        {/* ------ BODY -------- */}
        
        <TableBody>
          <ScrollArea className='h-[500px]'>
          {
            data?.map((item) => (
              
              <TableRow  key={item.id} className=''>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone_number}</TableCell>
                <TableCell className='text-sm'>BR</TableCell>
                <TableCell><ViewEmployee /> </TableCell>
              </TableRow>
              
            ))
          }
          </ScrollArea>
        </TableBody>
       
      </Table>
    </div>
    </>
  )
}
