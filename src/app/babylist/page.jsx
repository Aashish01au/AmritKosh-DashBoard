'use client'


import React from 'react'
import { useEffect,useState } from 'react'



function BabyList() {
  const [data, setData] = useState([]);
  
  useEffect(() => {

    async function fetchData() {
      const response = await fetch('https://prasutigirha.vercel.app/api/baby/get');
      const jsonData = await response.json();
      setData(jsonData);

    }
    fetchData();

  }, []);


  if (!data) {

    return <div>Loading...</div>;


  }
  return (
    <>
    <div className='md:ml-60 mb-10'>
    <div className='pt-10 px-10'>
<div className='border-2 rounded-lg border-[#004a89] pt-4 px-4 relative my-10 w-full '>
<label htmlFor="" className=' font-bold  text-xl mb-2 absolute -top-5 left-20  bg-[#004a89] p-2 rounded-md tracking-wider text-white '>
Baby Details
</label>
<label htmlFor="" className='  absolute -top-5 right-20    rounded-md '></label>
<div className='component-content py-4'>
<div>
  <table className='w-full'>
<thead>
  <tr className='bg-[#004a89] text-white text-lg text-center'>
<td className='py-3'>
S.No
</td>
<td className='py-3'>
Baby Name
</td>
<td className='py-3'>
Date of Birth
</td>
<td className='py-3'>
Weight
</td>
<td className='py-3'>
Indication
</td>
<td className='py-3'>
Baby Status
</td>
<td className='py-3'>
Milk Consumed
</td>
<td className='py-3'>
Action
</td>

  </tr>
</thead>
<tbody>

  {data.map((items)=>

(
  <tr className='border border-x-gray text-center '>
  <td className='py-3' ><p >{items?.id}</p>  </td>
  <td  className='py-3' ><p >{items?.babyName}</p>  </td>
  <td  className='py-3' ><p >{items?.dateOfBaby}</p>  </td>
  <td  className='py-3' ><p >{items?.babyWeight}</p>  </td>
  <td  className='py-3' > <p >{items?.indications}</p>  </td>
  <td  className='py-3' ><p >{items?.babyStatus}</p>  </td>
  <td  className='py-3' > <p >{items?.milkConsumed}</p>  </td>
  <td  className='py-3' > 
  <div className='flex justify-evenly text-xl'>
    <div>
      <h1 className='cursor-pointer bg-indigo-600 font-semibold rounded-md text-white px-2 py-1.5'>
      Details
      </h1>
    </div>
    </div> </td>


</tr>
)
)}

</tbody>
  </table>
</div>
</div>
</div>
    </div>
    </div>

    </>
  )
}

export default BabyList