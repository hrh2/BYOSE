import ContinueLink from '../Buttons/Continue'

export default function OurNews() {
  return (
    <div className="max-w-full mx-auto flex flex-col md:p-6 p-2 ">
      <div className="flex flex-row container mx-auto justify-between">
        <div className="flex flex-row gap-4 py-4">
          <span className="text-[#030712] font-bold md:text-[21px] text-[.8rem]">Our News</span>
          <span className="text-[#696d75] md:text-base text-[.7rem]">New products with updated stocks.</span>
        </div>
        <div>
          <ContinueLink className={" bg-[#FFF]"} text={"View all"}/>
        </div>
      </div>
      <div className='grid grid-cols-4 container'>
        <Un
      </div>
    </div>
  )
}
