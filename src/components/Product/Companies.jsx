import Shop01 from './Cards/Shop01'
import DivisionHeader from "../Header/DivisionHeader.jsx";
// eslint-disable-next-line react/prop-types
export default function Companies({vendors}) {
    return (
        <div className="max-w-full mx-auto flex flex-col md:py-6 mt-2">
            <DivisionHeader title={`BEST Stores`} description={`Don&apos;t forget to checkout the stores which standout other.`} link={``}/>
            <div className="overflow-x-auto bg-white dark:bg-black py-5 px-3">
                <div className="container mx-auto grid grid-flow-col auto-cols-[90%] sm:auto-cols-[60%] md:grid-cols-4 gap-4 pr-2">
                    {/* eslint-disable-next-line react/prop-types */}
                    {vendors.slice(0, 4).map((vendor, index) => (
                        <Shop01 key={index} vendor={vendor} className={`md:w-full sm:w-[60vw] w-[90vw]`} />
                    ))}
                </div>
            </div>
        </div>
    )
}
