import { LiaCartPlusSolid } from "react-icons/lia";
export default function AddToCart01() {
  return (
    <button className="inline-flex border-[#FFF] dark:border-[#000]  hover:scale-105 active:scale-110 text-[#FFF] dark:text-[#000] border-[2px] bg-[#16A34A] hover:bg-[#4c9f57] hover:text-[#FFF]  font-bold rounded-xl w-auto">
      <span className="rounded-r-md flex m-auto px-2">
        <LiaCartPlusSolid size={22} className='my-auto'/>
      </span>
      <div className="py-2 px-4 rounded-l-md inline-flex items-center m-auto">
          <span className='m-auto'>Add to cart</span>
      </div>

    </button >
  )
}
