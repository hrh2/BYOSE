import ProductCard03 from "./Cards/ProductCard03";
import DivisionHeader from "../Header/DivisionHeader.jsx";

// eslint-disable-next-line react/prop-types
export default function OtherProducts({inventories}) {
  return (
      <div className="max-w-full mx-auto flex flex-col md:py-6 ">
          <DivisionHeader title={`UnPublished`} description={`Explore some of the product next to the market`} link={``}/>
          <div className="overflow-x-auto bg-[#FFF] dark:bg-[#000] px-2 py-4">
              <div
                  className="container mx-auto grid grid-flow-col auto-cols-[80%] sm:auto-cols-[50%] md:grid-cols-4 gap-4 pr-2">
                  {/* eslint-disable-next-line react/prop-types */}
                  {inventories.slice(0, 4).map((inventory, index) => (
                      <ProductCard03 key={index} inventory={inventory}/>
                  ))}
              </div>
          </div>
      </div>
  )
}
