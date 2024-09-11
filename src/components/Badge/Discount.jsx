// eslint-disable-next-line react/prop-types
import Currency from "./Currency.jsx";

// eslint-disable-next-line react/prop-types
export default function Discount({current,old,className}) {
  return (
    <div className={`flex flex-row gap-3 ${className}`}>
              <p className='font-bold text-[#DC2626] text-lg sm:text-xl md:text-2xl'>
                  <Currency amount={current} targetCurrency={'RWF'}/>
              </p>
              <p className='text-md sm:text-lg md:text-xl align-text-bottom line-through pt-2'>
                  <Currency amount={old} targetCurrency={'RWF'}/>
              </p>
    </div>
  )
}
