import {FcGoogle} from "react-icons/fc";
import {FaInstagram} from "react-icons/fa6";
import {IoPencil} from "react-icons/io5";
import Star from "./Star.jsx";

function ShopCard({vendor}) {
    return (
        <div className="w-full flex flex-col sticky top-0 z-10 text-black">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-800 shadow-lg  rounded-2xl p-4">
                <div className="flex-none sm:flex">
                    <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                        {/* eslint-disable-next-line react/prop-types */}
                        <img src={vendor.userProfile?vendor.userProfile:"https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"} alt="aji" className=" w-32 h-32 object-cover object-center rounded-2xl"/>
                        <a href="/account"
                           className="absolute -right-2 bottom-2    -ml-3  text-white p-1 text-xs bg-[#166534] hover:bg-green-600 font-medium tracking-wider rounded-full transition ease-in duration-300">
                            <IoPencil size={17}/>
                        </a>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                        <div className="flex items-center justify-between sm:mt-2">
                            <div className="flex items-center">
                                <div className="flex flex-col">
                                    <div className="w-full flex-none text-lg dark:text-gray-200 font-bold leading-none">
                                        {/* eslint-disable-next-line react/prop-types */}
                                        {vendor?vendor.storeName:"waiting..."}
                                    </div>
                                    <div className="flex-auto dark:text-gray-400 my-1">
                                        {/* eslint-disable-next-line react/prop-types */}
                                        <span className="mr-3 ">{vendor?vendor.userFirstName:"awa..."}</span>
                                        {/* eslint-disable-next-line react/prop-types */}
                                        <span className="mr-3 border-r border-gray-600  max-h-0"></span><span>{vendor?vendor.userLastName:"awa..."}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            {/* eslint-disable-next-line react/prop-types */}
                            <Star percentage={vendor?vendor.storeRate:15}/>
                            {!vendor&&<div className="flex-1 inline-flex   items-center ml-2 space-x-2">
                                <a href="/" target="_blank">
                                    <FcGoogle size={18} />
                                </a>

                                <a href="/" target="_blank">
                                    <FaInstagram size={18} />
                                </a>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCard;