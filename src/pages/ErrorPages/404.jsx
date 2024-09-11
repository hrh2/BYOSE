import img from '../../assets/images/404.png.png'
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function ErrorPage() {
    const { inputValue } = useInput();
  return (
  <div className={`flex flex-col items-center justify-center gap-2`}>
      {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
    <div className=' w-[95vw] mx-auto flex flex-col justify-center items-center align-middle min-h-[60vh] gap-4 py-6'>
       <img src={img} className='md:w-[60%] sm:w-[80%] w-full mx-auto' alt="404"/>
       <h2 className='text-[#030712] dark:text-[#fcf8ed] text-center md:text-[60px] text-xl font-bold'>
         That Page Cant Be Found
       </h2>
       <p className='text-[#6B7280] dark:text-[#948d7f] text-center text-base'>It looks like nothing was found at this location. Maybe try to
       search for what you are looking for?</p>
       <a href={`/`} className='p-3 px-6 text-[#FFF] font-bold bg-[#166534] rounded-md'>Go To Homepage</a>
    </div>
  </div>
  )
}
