// eslint-disable-next-line no-unused-vars
import React from 'react'
import img from '../../assets/images/empyt.png'
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";
export default function CartPage() {
    const { inputValue } = useInput();
  return (
  <div className={` w-full flex flex-col justify-center items-center`}>
      {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
    <div className=' max-w-[90vw] mx-auto flex flex-col justify-center items-center align-middle min-h-[60vh] gap-4 py-3'>
       <img src={img} className='md:w-[30%] sm:w-[50%] w-full object-cover mx-auto' alt="404"/>
       <h2 className='text-[#F03E3E] md:text-[35px] text-xl font-bold py-2 pt-6 text-center px-3 rounded-md border-[2px]'>
        Your cart is currently empty.
       </h2>
       <a href={`/shops`} className='p-3 px-6 text-[#FFF] font-bold bg-[#212529] dark:bg-black rounded-md active:scale-110'>Go To Shops</a>
    </div>
  </div>
  )
}
