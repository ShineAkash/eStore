import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import SearchBar from "./SearchBar"
import Nacicons from "./Nacicons"

const Navbar = () => {
  return ( 
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <div className="h-full flex items-center justify-between md:hidden">
      {/* MoBilE */}
      <Link href="/">
      <div className="text-2xl tracking-wide">AKASH</div>
      </Link>
      <Menu />
    </div>
    {/* bigger screens */}
    <div className="hidden md:flex items-center justify-between gap-8 h-full">
      {/* left */}
      <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
       <Link href="/" className="flex items-center gap-3">
       <Image src="/logo.png" alt="" width={24} height={24}/>
       <div className="text-2xl tracking-wide">AKASH</div>
       </Link>
       <div className="hidden xl:flex gap-4 ">
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Deals</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
       </div>
      </div>
      {/* RIGHT */}
      <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-4">
      <SearchBar />
      <Nacicons />
      </div>
    </div>
    </div>
  )
}

export default Navbar