import Image from 'next/image'
import React from 'react'
import mother from './mother.webp'
import newborn from './newborn.webp'
import record from './record.webp'
import bottle from './feeding-bottle.webp'
import graph1 from './Untitled.png'
import graph2 from './Untitled2.png'

const ViewPage = () => {
  return (
    <>
     <div className="md:ml-60 mb-10">
    <div className="my-10 mx-10 ">
      <div className="flex items-center justify-center gap-5  ">
    <div className="shadow-md  hover:scale-105 transform transition-transform ease-in-out duration-300 shadow-[#004a89] drop-shadow-xl">
      <div className="flex">
        <div className="flex  justify-between  items-center border-2 rounded-md  border-[#004a89] py-4 px-4 relative  gap-14  ">
          <div className="leading-10"> 
          <p className="text-gray-600">
          Donor Records
          </p>
          <p className="text-[#004a89] text-xl font-extrabold">6k</p>
          </div>
          <div>
            <Image src={mother} className="w-[50px]" alt='mother'></Image>
          </div>
        </div>
      </div>
    </div>
    {/* =======  Recipient Records ===================== */}
    <div className="shadow-md  hover:scale-105 transform transition-transform ease-in-out duration-300 shadow-[#004a89] drop-shadow-xl">
      <div className="flex">
        <div className="flex  justify-between  items-center border-2 rounded-md  border-[#004a89] py-4 px-4 relative  gap-14  ">
          <div className="leading-10"> 
          <p className="text-gray-600">
          Recipient Records
          </p>
          <p className="text-[#004a89] text-xl font-extrabold">10k</p>
          </div>
          <div>
          <Image src={newborn} className="w-[50px]" alt='new born baby'></Image>
          </div>
        </div>
      </div>
    </div>
    {/* ==============   Registration  Records================= */}
    <div className="shadow-md  hover:scale-105 transform transition-transform ease-in-out duration-300 shadow-[#004a89] drop-shadow-xl">
      <div className="flex">
        <div className="flex  justify-between  items-center border-2 rounded-md  border-[#004a89] py-4 px-4 relative  gap-14  ">
          <div className="leading-10"> 
          <p className="text-gray-600">
          Registration  Records
          </p>
          <p className="text-[#004a89] text-xl font-extrabold">15k</p>
          </div>
          <div>
          <Image src={record} className="w-[50px]" alt='record'></Image>
          </div>
        </div>
      </div>
    </div>
    {/* ----------------------------milk collection------------------------- */}
    <div className="shadow-md  hover:scale-105 transform transition-transform ease-in-out duration-300 shadow-[#004a89] drop-shadow-xl">
      <div className="flex">
        <div className="flex  justify-between  items-center border-2 rounded-md  border-[#004a89] py-4 px-4 relative  gap-14  ">
          <div className="leading-10"> 
          <p className="text-gray-600">
           Milk Collection
          </p>
          <p className="text-[#004a89] text-xl font-extrabold">600</p>
          </div>
          <div>
          <Image src={bottle} className="w-[50px]" alt='bottle'></Image>
          </div>
        </div>
      </div>
    </div>
      </div>
{/* ===========================  image of bar graph ========================== */}
      <div className="grid md:grid-cols-2 grid-cols-1 my-10 gap-10  ">
    <div className="w-[40vw] ">
    <Image src={graph1}  alt='bargraph' className="w-767px h-383px"></Image>
    </div>
    <div className="w-[40vw] ">
    <Image src={graph2}  alt='bargraph' className="w-767px h-383px"></Image>
    </div>
  </div>

    </div>
  </div>
    </>
  )
}

export default ViewPage