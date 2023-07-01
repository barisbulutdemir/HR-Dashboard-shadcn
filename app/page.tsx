import Image from 'next/image'
import { Inter } from 'next/font/google'
import {InputForm} from "@/components/add";
import {Toaster} from "@/components/ui/toaster";
import {ModeToggle} from "@/components/dark";
import LeftMenu from '@/components/menu/leftMenu';
import Header from '@/components/menu/header';
import RightMenu from '@/components/menu/rightMenu';
import HomePage from '@/components/HomePage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
      <div className='flex w-[100%] overflow-y-hidden	'>
        {/* sayfayi 3 e boluyoruz */}
        <div className='w-[13%]'><LeftMenu /> </div>
        <div className='w-[2px] h-screen  bg-green-500'/>
        <div className='w-[67%] flex-col'>
           <div className='h-auto p-4'>
              <Header /> 
            </div>
            <div  className=' h-0.5  bg-green-500 w-full'/>
            <div className=''>
              <HomePage />
            </div>
            
          
        </div>
       
        <div className='w-[20%] mr-5 mt-5 '><RightMenu /> </div>

      </div>
       
      
      </>
  )
}
