// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import ProductCard00 from "./Cards/ProductCard00";
import ProductCard01 from "./Cards/ProductCard01";
import ContinueLink from "../Buttons/Continue";

const MemoizedProductCard00 = memo(ProductCard00);
const MemoizedProductCard01 = memo(ProductCard01);
const MemoizedContinueLink = memo(ContinueLink);

// eslint-disable-next-line react/prop-types
export default function NewProducts({ inventories }) {
  // Slice the inventories to get only the first 6
    // eslint-disable-next-line react/prop-types
  const displayedInventories = inventories.slice(0, 6);

  return (
      <div className="max-w-full mx-auto flex flex-col md:py-6 py-3 p-2">
        <div className="flex flex-row container mx-auto justify-between">
          <div className="flex flex-row gap-4 py-4">
            <span className="text-[#030712] font-bold md:text-[21px] text-[.8rem]">New Picks</span>
            <span className="text-[#696d75] md:text-base text-[.7rem]">New products with updated stocks.</span>
          </div>
          <div>
            <MemoizedContinueLink className={"bg-[#FFF] text-[.7rem]"} text={<>View&nbsp;all</>} link={`/products`} />
          </div>
        </div>
        <div className="max-w-full overflow-x-auto">
          <div className="grid md:grid-cols-2 md:w-full sm:grid-cols-1 sm:w-full grid-cols-2 w-[400vw] bg-[#FFF] rounded-md">
            {displayedInventories.length > 0 && (
                <div className="flex-shrink-0 w-full md:w-auto container mx-auto grid md:grid-cols-5 grid-cols-2 p-2 gap-0">
                  <div className="md:col-span-2">
                    <MemoizedProductCard00
                        inventory={displayedInventories[0]}
                        s={"h-full border-[3px] rounded-r-none md:p-5 md:w-full sm:w-full w-[95vw] pt-6 pb-4 px-3"}
                        badge={"org"}
                        cart={false}
                    />
                  </div>
                  {displayedInventories.length > 1 && (
                      <div className="grid grid-rows-2 md:col-span-3">
                        <MemoizedProductCard01
                            inventory={displayedInventories[1]}
                            s={"h-full border-[3px] rounded-b-none rounded-l-none md:w-full sm:w-full w-[95vw] pt-6 pb-4 px-3"}
                            badge={"cold"}
                        />
                        {displayedInventories.length > 2 && (
                            <MemoizedProductCard01
                                inventory={displayedInventories[2]}
                                s={"h-full border-[3px] rounded-t-none rounded-l-none md:w-full sm:w-full w-[95vw] pt-6 pb-4 px-3"}
                                badge={"cold"}
                            />
                        )}
                      </div>
                  )}
                </div>
            )}
            {displayedInventories.length > 3 && (
                <div className="flex-shrink-0 w-full md:w-auto container mx-auto grid md:grid-cols-5 grid-cols-2 p-2 gap-0">
                  <div className="md:col-span-2">
                    <MemoizedProductCard00
                        inventory={displayedInventories[3]}
                        s={"h-full border-[3px] rounded-r-none md:p-5 md:w-full sm:w-full w-[95vw] pt-6 pb-4 px-3"}
                        badge={"org"}
                        cart={false}
                    />
                  </div>
                  {displayedInventories.length > 4 && (
                      <div className="grid grid-rows-2 md:col-span-3">
                        <MemoizedProductCard01
                            inventory={displayedInventories[4]}
                            s={"h-full border-[3px] rounded-b-none rounded-l-none md:w-full sm:w-full w-[95vw] pt-6 pb-4 px-3"}
                            badge={"cold"}
                        />
                        {displayedInventories.length > 5 && (
                            <MemoizedProductCard01
                                inventory={displayedInventories[5]}
                                s={"h-full border-[3px] rounded-t-none rounded-l-none md:w-full sm:w-full w-[95vw] pt-6 pb-4 px-3"}
                                badge={"cold"}
                            />
                        )}
                      </div>
                  )}
                </div>
            )}
          </div>
        </div>
      </div>
  );
}
