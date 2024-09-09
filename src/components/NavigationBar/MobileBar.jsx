import {FaUser} from "react-icons/fa6";
import { FaOpencart, FaRegHeart} from "react-icons/fa";
import {GiFlexibleStar} from "react-icons/gi";
import {SiHomebridge} from "react-icons/si";

// eslint-disable-next-line react/prop-types
const MobileBar = ({className}) => {
    return (
        <div
            className={`mobile-bar p-2 px-3 flex justify-between border-t-2 fixed w-full bg-white dark:bg-black bottom-0 z-40 text-[#166534] dark:text-[#e99acb] gap-2 ${className}`}>
            {/*<a href={`/`}><SiHomebridge size={34}/></a>*/}
            {/*<a href={'/cart'}><FaOpencart size={34}/></a>*/}
            {/*<a href={`/wishlist`}><FaRegHeart size={34}/></a>*/}
            {/*<a href={`/favorite`}><GiFlexibleStar size={34}/></a>*/}
            {/*<a href={`/account`}><FaUser size={34}/></a>*/}
                <div className="flex justify-between text-[#634C9F] dark:text-[#9cb360]">
                    <div className="flex-auto hover:w-full group">
                        <a href={`/favorite`} className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full ">
                            <span className="flex block px-2 py-1 group-hover:text-[#000]  group-hover:bg-[#634C9F] dark:group-hover:bg-[#9cb360] rounded-full group-hover:flex-grow">
                                <SiHomebridge size={20}/>
                                <span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Home</span>
                            </span>
                        </a>
                    </div>
                    <div className="flex-auto hover:w-full group">
                        <a href={`/favorite`}
                           className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full ">
                        <span className=" flex block px-2 py-1 group-hover:text-[#000]  group-hover:bg-[#634C9F] dark:group-hover:bg-[#9cb360] rounded-full group-hover:flex-grow">
                            <FaOpencart size={20}/><span
                            className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Cart</span>
                        </span>
                        </a>
                    </div>
                    <div className="flex-auto hover:w-full group">
                        <a href={`/favorite`}
                           className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full">
                        <span className=" flex block px-2 py-1 group-hover:text-[#000]  group-hover:bg-[#634C9F] dark:group-hover:bg-[#9cb360] rounded-full group-hover:flex-grow">
                            <GiFlexibleStar size={20}/><span
                            className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Favorite</span>
                        </span>
                        </a>
                    </div>
                    <div className="flex-auto hover:w-full group">
                        <a href={`/favorite`}
                           className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full ">
                        <span className="flex block px-2 py-1 group-hover:text-[#000]  group-hover:bg-[#634C9F]  dark:group-hover:bg-[#9cb360] rounded-full group-hover:flex-grow">
                            <FaUser size={20}/><span
                            className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Account</span>
                        </span>
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default MobileBar;