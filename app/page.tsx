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
            <div className=''>
              <HomePage />
            </div>
      
      </>
  )
}
