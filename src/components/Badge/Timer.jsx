export default function Timer() {
    return (
      <div className='flex md:flex-row sm:flex-row flex-col mt-1 gap-3 text-[#EA580C]  justify-center align-middle items-center p-4 bg-[#FFF7ED] rounded-md border-[#FFEDD5] border-[2px]'>
              <p className='font-bold flex flex-row pt-2 gap-4'>
              <div className='flex justify-center align-middle items-center pt-2  h-[30px]'>Special offer :</div> 
              <div className='bg-[#FFEDD5] flex justify-center align-middle items-center pt-2 aspect-square h-[35px] border-[#FED7AA] border-[1px] rounded-md'>81</div>
              <div className='bg-[#FFEDD5] flex justify-center align-middle items-center pt-2 aspect-square h-[35px] border-[#FED7AA] border-[1px] rounded-md'>81</div>
              <div className='bg-[#FFEDD5] flex justify-center align-middle items-center pt-2 aspect-square h-[35px] border-[#FED7AA] border-[1px] rounded-md'>81</div>
              </p>
              <div className='flex  text-[14px] text-[#6B7280] font-normal justify-center align-middle items-center pt-2  h-[30px]'>Remains until the end of the offer.</div>
      </div>
    )
  }
  