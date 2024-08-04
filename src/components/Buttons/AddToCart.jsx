import { FaPlusCircle } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";

export default function AddToCart({text}) {
  return (
    <div className='text-[#634C9F] w-full'>
      {text?
      <button className="inline-flex border-[#634C9F] border-[2px] hover:bg-[#634C9F] hover:text-[#FFF] hover:border-[#FFF] font-bold rounded-3xl ">
      <div className="py-1 #pt-3 px-3 rounded-l-md inline-flex items-center m-auto">
          <span className='m-auto'>Add&nbsp;to&nbsp;cart</span>
      </div>
      <span className="rounded-r-md flex m-auto px-2">
        <FaPlus size={22} className='my-auto'/>
      </span>
    </button >:
     <div className=" w-full flex flex-row justify-between py-2">
        <FaPlusCircle size={30} className=" cursor-pointer" />
      </div>
      }
    </div>
  )
}
