import { FaRegHeart } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import img from '../../../assets/images/organic.png'
import Organic from "../../Badge/Organic";
import Star from "../../Badge/Star";
import Discount from "../../Badge/Discount";
import ColdSale from "../../Badge/ColdSale";
import AddToCart from "../../Buttons/AddToCart.jsx";
// eslint-disable-next-line react/prop-types
export default function ProductCard00({s,badge,inventory}) {
  return (
    <div className={`flex flex-col bg-[#FFFFFF] dark:bg-[#000] pt-6 pb-14 rounded-lg gap-3 mx-auto ${s}`}>
      <div className="flex flex-row justify-between ">
          {/* eslint-disable-next-line react/prop-types */}
        <span className="bg-red-500 text-white text-center font-semibold text-lg rounded-3xl px-3 py-1">{inventory?inventory.product.productRate:0}%</span>
        <FaRegHeart size={30} className=" cursor-pointer" />
      </div>
        {/* eslint-disable-next-line react/prop-types */}
      <img src= {inventory?inventory.product.images[0]:'...'} alt="juice" className=" aspect-square object-contain object-center md:w-[85%] sm:w-full md:h-auto sm:h-auto h-[20vh] mx-auto rounded-xl" />
      <div className=" w-full flex flex-row justify-between text-[#634C9F] py-2">
          {/* eslint-disable-next-line react/prop-types */}
      {badge==="org" && <Organic text = {inventory?inventory.product.category:'...'}/>}
          {/* eslint-disable-next-line react/prop-types */}
      {badge==="cold" && <ColdSale text = {inventory?inventory.product.category:'...'}/>}
        <AddToCart/>
      </div>
      <div className="py-2">
          {/* eslint-disable-next-line react/prop-types */}
        <Star percentage={inventory?inventory.product.productRate:0}/>
      </div>
        {/* eslint-disable-next-line react/prop-types */}
      <h2 className="w-full text-justify text-[19px] font-bold text-[#030712] dark:text-[#fcf9ed]">{inventory?inventory.product.name:'...'}</h2>
        {/* eslint-disable-next-line react/prop-types */}
      <p className="text-[#4B5563] dark:text-[#c5bbac] text-[16px] font-normal"> {inventory?inventory.product.description:'...'}.</p>
        {/* eslint-disable-next-line react/prop-types */}
      <Discount current={inventory?inventory.product.sellingPrice:0} old={inventory?inventory.product.sellingPrice+10:0} s={"text-lg py-3"}/>
      <div className="py-3 w-full  mx-auto">
          {/* eslint-disable-next-line react/prop-types */}
        <p className=" text-[#9CA3AF] text-[14px]">{inventory&&inventory.quantity<=3?"This product is about to run out":"Enough"}</p>
        <div className="w-full h-[6px] bg-gradient-to-r from-[#FFD200] to-[#DC2626]">
            {/* eslint-disable-next-line react/prop-types */}
        <p className="text-[15px] py-4 text-[#6B7280]">available only: <span className="text-[#030712] dark:text-[#fcf9ed] font-bold text-[20px]">{inventory?inventory.quantity:'...'}</span></p>
        </div>
      </div>
      <div className="md:py-3 pt-3">
      </div>
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <a href={`/products/${inventory.product._id}`}
               className={` font-semibold flex justify-end active:scale-110 active:text-gray-300 visited:text-gray-300`}>see&nbsp;more</a>
        </div>
    </div>
  )
}
