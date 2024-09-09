import ProductCard00 from "./Cards/ProductCard00";
import ProductCard01 from "./Cards/ProductCard01";
import ContinueLink from "../Buttons/Continue";
import DivisionHeader from "../Header/DivisionHeader.jsx";

// eslint-disable-next-line react/prop-types
export default function TopBoughtProduct({ inventories }) {
  return (
      <div className="max-w-full mx-auto flex flex-col">
        <DivisionHeader title={`Top Rated`} description={`Check out most rated product  in this week.`} link={``}/>
        <div className="w-full bg-[#FFF] dark:bg-[#000] py-2">
          <div className="md:container grid md:grid-cols-3 mx-auto gap-4">
            <div className="overflow-x-auto w-full px-2">
              <div className="grid md:grid-rows-3 grid-flow-col auto-cols-[100%] sm:auto-cols-[100%] gap-4 px-2">
                {inventories[3] && <ProductCard01 inventory={inventories[3]} s={"border-[2px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} badge={"org"} cart={true} />}
                {inventories[1] && <ProductCard01 inventory={inventories[1]} s={"border-[2px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} />}
                {inventories[2] && <ProductCard01 inventory={inventories[2]} s={"border-[2px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} />}
              </div>
            </div>
            <div className="overflow-x-auto w-full">
              <div className="flex md:flex-col grid-flow-col items-center justify-center align-middle auto-cols-[100%] sm:auto-cols-[100%] gap-4 h-full px-2">
                {inventories[0] && <ProductCard00 inventory={inventories[0]} s={"min-h-[90%] !my-auto border-[4px] border-[#DC2626] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} badge={"org"} cart={true} />}
              </div>
            </div>
            <div className="overflow-x-auto w-full">
              <div className="grid md:grid-rows-3 grid-flow-col auto-cols-[100%] sm:auto-cols-[100%] gap-4 px-2">
                {inventories[4] && <ProductCard01 inventory={inventories[4]} s={"border-[2px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} badge={"org"} />}
                {inventories[5] && <ProductCard01 inventory={inventories[5]} s={"border-[2px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} />}
                {inventories[6] && <ProductCard01 inventory={inventories[6]} s={"border-[2px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} />}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
