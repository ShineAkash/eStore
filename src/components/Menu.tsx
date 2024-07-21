"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
const Menu = () => {
   const [open,setOpen] = useState(false)

  return (
    <div>
      <Image src="data:image/png;base64,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" alt="" width={28} height={28} className="cursor-pointer" 
      onClick={()=> setOpen((prev) => !prev)}/>
      {
        open && (
          <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-30">
           <Link href="/">Home</Link>
           <Link href="/">Shop</Link>
           <Link href="/">Deals</Link>
           <Link href="/">About</Link>
           <Link href="/">Contact</Link>
           <Link href="/">Logout</Link>
           <Link href="/">Cart(1)</Link>
          </div>
        )
      }
    </div>
  )
}

export default Menu