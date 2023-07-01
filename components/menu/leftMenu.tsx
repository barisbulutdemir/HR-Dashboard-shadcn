"use client"
import { usePathname } from "next/navigation"


import React from 'react'
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { ModeToggle } from "../dark"
import { cn } from "@/lib/utils"
import { Label } from "@radix-ui/react-label"
import { sidebarNavItems } from "@/app/data/LeftMenuItems"


export default function LeftMenu() {

  const pathname = usePathname()

  return (
    <div>
      <h3 className="text-2xl font-medium m-5 mb-20"> ./Logo</h3>

      {
        sidebarNavItems.map((item) => (
          <div key={item.href} className=" mx-4 ">
          <Link
           href={item.href}
           className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start ghost"
            
          )}
        >
          
            {item.title}
 
          </Link>
          </div>
        ))
      }
    </div>
  )
}
