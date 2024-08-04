import { BiSolidPurchaseTag } from 'react-icons/bi'

export default function BuyProduct() {
  return (
    <button className="inline-flex border-[#FFF] hover:scale-105 active:scale-110 text-[#FFF] border-[2px] bg-[#212529] hover:bg-[#212529bb] hover:text-[#FFF]  font-bold rounded-xl w-auto">
      <span className="rounded-r-md flex m-auto px-2">
        <BiSolidPurchaseTag size={22} className='my-auto'/>
      </span>
      <div className="py-1 pt-3 px-4 rounded-l-md inline-flex items-center m-auto">
          <span className='m-auto'>Buy Now</span>
      </div>
    </button >
  )
}
