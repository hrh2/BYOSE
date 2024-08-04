import ContinueLink from "../Buttons/Continue";
import ProductCard03 from "./Cards/ProductCard03";

// eslint-disable-next-line react/prop-types
export default function OtherProducts({inventories}) {
  return (
    <div className="max-w-full mx-auto flex flex-col md:py-6 ">
      <div className="flex flex-row container mx-auto justify-between px-3">
        <div className="flex flex-row gap-4 py-4">
          <span className="text-[#030712] font-bold md:text-[21px] text-[.8rem]">UnPublished</span>
          <span className="text-[#696d75] md:text-base text-[.7rem] w-[60%]">Explore some of the product next to the market</span>
        </div>
        <div>
        `<ContinueLink className={" bg-[#FFF] text-[.7rem]"} text={<>View&nbsp;all</>}/>
        </div>
      </div>
      <div className="overflow-x-auto bg-[#FFF] px-2 py-4">
        <div className="container mx-auto grid grid-flow-col auto-cols-[80%] sm:auto-cols-[50%] md:grid-cols-4 gap-4 pr-2">
            {/* eslint-disable-next-line react/prop-types */}
            {inventories.slice(0, 4).map((inventory, index) => (
                <ProductCard03 key={index} inventory={inventory}/>
            ))}
        </div>
      </div>
    </div>
  )
}
