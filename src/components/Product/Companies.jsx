import ContinueLink from '../Buttons/Continue'
import Shop01 from './Cards/Shop01'
export default function Companies({vendors}) {
    return (
        <div className="max-w-full mx-auto flex flex-col md:py-6 mt-2">
            <div className="flex flex-row container mx-auto justify-between px-2">
                <div className="flex flex-row gap-4 py-4">
                    <span className="text-[#030712] font-bold md:text-[21px] text-[.8rem]">BEST Stores</span>
                    <span className="text-[#696d75] md:text-base text-[.7rem] w-[60%]">Don&apos;t forget to checkout the stores which standout other.</span>
                </div>
                <div>
                    <ContinueLink className={"bg-[#FFF] text-[.7rem]"} text={<>View&nbsp;all</>}/>
                </div>
            </div>
            <div className="overflow-x-auto bg-white py-5 px-3">
                <div className="container mx-auto grid grid-flow-col auto-cols-[90%] sm:auto-cols-[60%] md:grid-cols-4 gap-4 pr-2">
                    {vendors.slice(0, 4).map((vendor, index) => (
                        <Shop01 key={index} vendor={vendor} className={`md:w-full sm:w-[60vw] w-[90vw]`} />
                    ))}
                </div>
            </div>
        </div>
    )
}
