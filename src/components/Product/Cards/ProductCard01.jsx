import { FaRegHeart } from "react-icons/fa6";
// import { FaPlusCircle } from "react-icons/fa";
import img from '../../../assets/images/organic.png'
import Star from "../../Badge/Star";
import Discount from "../../Badge/Discount";
import AddToCart from "../../Buttons/AddToCart";
// eslint-disable-next-line no-unused-vars
import Timer from "../../Badge/Timer";
import ColdSale from "../../Badge/ColdSale";
// eslint-disable-next-line react/prop-types
export default function ProductCard01({s,badge,inventory}) {
    return (
      <div className={`flex flex-col bg-[#FFFFFF] dark:bg-[#000]  rounded-lg mx-auto ${s}`}>
        <div className="grid grid-cols-2 gap-2">
            <div className="">
                <div className="flex flex-row justify-between ">
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="bg-red-500 text-white text-center font-semibold text-lg rounded-3xl px-3 py-1">{inventory?inventory.product.productRate:0}%</span>
                    <FaRegHeart size={30} className=" cursor-pointer" />
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                <img src= {inventory?inventory.product.images[0]:img} alt="juice" className=" aspect-square object-contain object-center md:w-[85%] w-[90%] mx-auto rounded-xl" />
                {/* Badge */}
                <div className={`py-2`}>
                    {/* eslint-disable-next-line react/prop-types */}
                    {badge==="cold" && <ColdSale text = {inventory?inventory.product.category:'...'}/>}
                </div>
            </div>
            <div className={`flex flex-col justify-between`}>
                {/* eslint-disable-next-line react/prop-types */}
                <h2 className="w-full text-justify text-[17px] font-boldtext-[#030712] dark:text-[#fcf9ed]">{inventory?inventory.product.name:'...'}</h2>
                <div className="py-2">
                    {/* eslint-disable-next-line react/prop-types */}
                    <Star percentage={inventory?inventory.product.productRate:0}/>
                </div>
                <div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <Discount current={inventory?inventory.product.sellingPrice:0} old={inventory?inventory.product.sellingPrice+12:0} className={"text-lg py-3"}/>
                </div>
            </div>
        </div>
          <div>
              <div className={`flex justify-end px-2`}>
                  {/* eslint-disable-next-line react/prop-types */}
                  <AddToCart text={true}/>
              </div>
              <div className={`flex justify-end`}>
                  {/* eslint-disable-next-line react/prop-types */}
                  <a href={`/products/${inventory.product._id}`}
                     className={` font-semibold flex justify-end active:scale-110 active:text-gray-300 visited:text-gray-300`}>see
                      more</a>
              </div>
          </div>
      </div>
    )
}
