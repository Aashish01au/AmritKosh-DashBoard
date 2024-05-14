import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import heart from './heart.webp'

const Header = () => {
  return (
    <>
      <div className=" shadow-xl sticky  inset-0 z-50 flex  items-center justify-between bg-white ">
      <Link href={'/'}><div className="pl-10 flex gap-4 items-center">
 
    <img src="/logopng.webp" className="w-[75px] py-3" alt="" />

    <h1 className=" text-4xl text-[#00427b] font-semibold">
    अमृत  <span className="text-red-600">कोश</span>
    </h1>
    </div></Link>
    <div className="flex items-center gap-5 relative  ">
   <p className="text-lg"> Welcome!!
    <span className="text-red-600 font-bold ">SuperAdmin</span></p>
    <div>
      <div className=" cursor-pointer ">
<Image src={heart} alt='heart' className="rounded-full h-11 w-11 shadow-md mr-8"></Image>
      </div>
    </div>
    </div>
  </div>
    </>
  )
}

export default Header