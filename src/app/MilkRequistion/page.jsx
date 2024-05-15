import React from 'react'

function page() {
  return (
    <>
    <div className='md:ml-60 mb-10'>
<div className='mx-10'>
<form>
    <div className='border-2 rounded-lg shadow-md border-[#004a89] pt-4 px-4 relative mt-10  undefined '>
<label htmlFor="" className=' font-bold text-base xl:text-xl mb-2 absolute -top-5 left-20  bg-[#004a89] p-2 rounded-md tracking-wider text-white '>
Milk Requisition Form
</label>
<div className='component-content py-4'>
    <div className='flex justify-between mt-6'>
        <p className='text-xl font-bold '>
        Feeding Details:
        </p>
    <div className='font-bold text-lg flex justify-end'>
        <button className='text-white bg-red-600 hover:bg-[#004a89] px-8 py-2 rounded-lg '>
        Add More +
        </button>
    </div>
    </div>
    <div className='grid md:grid-cols-2 grid-cols-1 text-lg gap-4'>
<div className='grid'>
    <label htmlFor="" className=''>
    Baby <span className='text-red-600'>*</span>
    </label>
<select className='inputStyle p-4 rounded-md' name='babyId'>
<option value="disabled">--Select Baby--</option>
</select>
</div>
<div className='flex flex-col'>
<label htmlFor="">Feeding Date<span className="text-red-600">*</span></label><div className="nepali-date-picker inputStyle">
    <input className="form-control  p-4 rounded-md  " value={'--Date--'} type="text" />
</div>
</div>
    </div>
</div>
<div className='grid md:grid-cols-2 grid-cols-1 text-lg gap-4 pt-4'>
<div className='grid'>
<label htmlFor="">
Batch Number 
<span className='text-red-600'>*</span>
</label>
<select  name="" className='inputStyle  p-4 rounded-md' typeof='number' id="">
<option value="disabled">--Batch Number--</option>
</select>
</div>
<div className='flex flex-col'>
<label htmlFor="">Bottle Name<span className="text-red-600">*</span></label><select  className="inputStyle p-4 rounded-md"  name="requisitedMilk.0.bottleName"><option value="">-- select bottle --</option></select>
</div>
<div className='flex flex-col'>
<label htmlFor="">ML<span className="text-red-600">*</span></label>
    <input  className="inputStyle p-4 rounded-md" placeholder="Enter ML" type="number"  />
</div>
<div></div>
<div className='my-5 font-bold text-xl'>
<button className="text-white bg-red-600 hover:bg-[#004a89] px-8 py-2 rounded-lg disabled:bg-gray-300  disabled:cursor-not-allowed " type="submit">Submit</button>
</div>
</div>
    </div>
</form>
</div>
    </div>
    </>
  )
}

export default page