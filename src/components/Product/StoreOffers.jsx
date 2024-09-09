import Shops from "./Cards/Shops";

// eslint-disable-next-line react/prop-types
export default function StoreOffers({vendors}) {
  return (
    <div className="overflow-x-auto md:py-6 py-3 px-2 bg-[#FFF] dark:bg-[#000]">
  <div className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[50%] md:grid-cols-3 gap-4 container mx-auto p-3">
    {/* eslint-disable-next-line react/prop-types */}
    {vendors.map((vendor)=>(
        <Shops key={vendor._id} vendor={vendor} image={false}/>
    ))}
  </div>
</div>

  )
}
