import React from 'react'
import img from '../../assets/images/empyt.png'
export default function CartPage() {
  return (
    <div className=' max-w-[90vw] mx-auto flex flex-col justify-center items-center align-middle min-h-[60vh] gap-4 py-3'>
       <img src={img} className='md:w-[30%] sm:w-[50%] w-full object-cover mx-auto' alt="404"/>
       <h2 className='text-[#F03E3E] md:text-[35px] text-xl font-bold py-2 pt-6 text-center px-3 rounded-md border-[2px]'>
        Your cart is currently empty.
       </h2>
       <a className='p-3 px-6 text-[#FFF] font-bold bg-[#212529] rounded-md active:scale-110'>Go To Shops</a> 
    </div>
  )
}
