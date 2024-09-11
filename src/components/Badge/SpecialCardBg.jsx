import { GiTrophyCup } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";

function SpecialCardBg({title1,title2,title3,title4}) {
    return (
        <div className="relative">
            <div className="w-full group relative flex cursor-pointer after:shadow-lg after:shadow-black">
                {/* Hidden slide */}
                <div className="relative -left-4 md:-left-16 top-0 z-10 w-72 md:w-96 rounded-xl bg-[#3d348b] px-3 md:px-5 py-2 md:py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-left-2 md:group-hover:-left-14">
                    <div className="flex flex-col gap-4">
                        {/* Item 1 */}
                        <div className="flex md:flex-row sm:flex-row flex-col  items-start gap-2">
                            <div className={`flex`}>
                                <GiTrophyCup size={24} className="text-yellow-600" />
                                <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
                                    <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
                                    <p className="text-xs leading-tight text-white">10%</p>
                                </div>
                            </div>
                            <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">{title3?title3:"waiting..."}</p>
                        </div>
                        {/* Item 2 */}
                        <div className="flex md:flex-row sm:flex-row flex-col  items-start gap-2">
                            <div className={`flex`}>
                                <AiOutlineProduct size={23} className="text-yellow-600" />
                                <div className="flex items-center gap-1 rounded-full bg-green-400/45 py-0.5 pl-1 pr-2">
                                    <p className="-rotate-90 leading-tight text-green-500">&rarr;</p>
                                    <p className="text-xs leading-tight text-white">30%</p>
                                </div>
                            </div>
                            <p className="text-white opacity-0 delay-200 duration-700 ease-in-out group-hover:opacity-100">{title4?title4:"waiting..."}</p>
                        </div>
                        <p>
                            <a href="#" className="text-sky-500 opacity-0 hover:text-sky-600">&rarr;</a>
                        </p>
                    </div>
                </div>
                {/* Main */}
                <div className="absolute -right-4 h-full md:-right-16 top-0 z-20 flex w-64 md:w-96 flex-col gap-4 self-end rounded-xl rounded-l-2xl border-none bg-[#7678ed] px-3 md:px-5 py-2 md:py-3 text-base font-semibold leading-7 transition-all duration-700 group-hover:-right-2 md:group-hover:-right-14 group-hover:w-52 md:group-hover:w-56 group-hover:rounded-l-lg">
                    <p className="text-[#fff]">{title1?title1:"waiting..."}</p>
                    <p className="text-[#fff]">{title2?title2:"waiting..."}</p>
                    <p>
                        <a  className="text-white/50">Learn more &rarr;</a>
                    </p>
                </div>
                <div className="h-16 bg-[#3d348b] md:visible invisible w-96 md:w-[28rem] -left-2 md:-left-10 shadow-2xl shadow-[#3d348b] absolute bottom-0"></div>
            </div>
        </div>
    );
}

export default SpecialCardBg;
