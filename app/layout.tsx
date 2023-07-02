import LeftMenu from '@/components/menu/leftMenu'
import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"
import RightMenu from '@/components/menu/rightMenu'
import Header from '@/components/menu/header'

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <>
        <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className='flex w-[100%] overflow-y-hidden	'>
        {/* sayfayi 3 e boluyoruz */}
        <div className='w-[13%]'><LeftMenu /> </div>
        <div className='w-[2px] h-screen  bg-green-500'/>
        <div className='w-[67%] flex-col'>
           <div className='h-auto p-4'>
              <Header /> 
            </div>
            <div  className=' h-0.5  bg-green-500 w-full'/>
          <div>
            {children}
          </div>
          </div>
       
       <div className='w-[20%] mr-5 mt-5 '><RightMenu /> </div>

     </div>
      
        </ThemeProvider>
        </body>
        </html>
      </>
  )
}
