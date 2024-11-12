// eslint-disable-next-line react/prop-types
import Currency from "./Currency.jsx";

// eslint-disable-next-line react/prop-types
export default function Discount({current,className}) {
  return (
    <div className={`flex flex-row gap-3 ${className}`}>
              <p className='font-bold text-[#DC2626] text-md sm:text-lg md:text-xl'>
                  <Currency amount={current} targetCurrency={'RWF'}/>
              </p>
              <p className='text-xs sm:text-sm md:text-lg align-text-bottom line-through pt-2'>
                  <Currency amount={(current-(current*0.13))} targetCurrency={'RWF'}/>
              </p>
    </div>
  )
}
