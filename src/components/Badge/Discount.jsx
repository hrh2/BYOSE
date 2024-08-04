// eslint-disable-next-line react/prop-types
export default function Discount({current,old,className}) {
  return (
    <div className={`flex flex-row gap-3 ${className}`}>
              <p className='font-bold text-[#DC2626] text-2xl sm:text-3xl md:text-4xl'>${current}</p>
              <p className='text-lg sm:text-xl align-text-bottom line-through pt-2'>${old}</p>
    </div>
  )
}
