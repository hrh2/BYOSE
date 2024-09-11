import Star from "../../Badge/Star";

// eslint-disable-next-line react/prop-types
export default function Shop01({className,vendor}) {
  return (
      // eslint-disable-next-line react/prop-types
    <a href={`/shops/${vendor._id}`} className={` p-5 flex flex-col gap-4 mx-auto border-[2px] rounded-md ${className}`}>
            <div className='flex flex-row gap-4 justify-between items-start'>
                {/* eslint-disable-next-line react/prop-types */}
                <div className='aspect-square w-[5rem] rounded-md bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${vendor.userProfile})`}}></div>
                <div className='flex justify-center align-middle flex-col'>
                    {/* eslint-disable-next-line react/prop-types */}
                    <h2 className='text-[#030712] dark:text-[#fcf8ed] text-[18px] font-bold'>{vendor.storeName}</h2>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className={`text-[${vendor.isVerified?'#166534':"#6B7280"}] dark:text-[${vendor.isVerified?"#e99acb":"#948d7f"}] text-[14px] font-normal`}>{vendor.isVerified ?'verified':'pending'}</span>
                </div>
            </div>
            <div className='flex items-center'>
                <Star percentage={56}/>
            </div>
            <hr className='w-full border-[#D1D5DB]'/>
        {/* eslint-disable-next-line react/prop-types */}
            <p className='text-center text-[#030712] dark:text-[#fcf8ed] text-[15px] py-2'>{vendor.storeDescription}</p>
    </a>
  )
}
