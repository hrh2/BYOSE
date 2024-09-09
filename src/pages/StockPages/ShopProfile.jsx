// src/components/ShopProfile.js
import { FaMapMarkerAlt, FaBoxOpen } from 'react-icons/fa';
import MapContainer from "../../components/Badge/Map.jsx";
import ImageSlicer from "../../components/Images/ImageSlicer.jsx";
import ProductCard01 from "../../components/Product/Cards/ProductCard01.jsx";
import {MdError, MdVerified} from "react-icons/md";
import {shuffleArray} from "../../utils/helpers.js";
import ContinueLink from "../../components/Buttons/Continue.jsx";

// eslint-disable-next-line react/prop-types,no-unused-vars
const ShopProfile = ({ shop,vendor,inventories ,addresses}) => {
    // eslint-disable-next-line react/prop-types
    const   images = shuffleArray(inventories.map(inventory => (inventory.product.images[0])))
    return (
        <div className=" container mx-auto py-6 md:p-0 sm:p-4 p-3 rounded-lg">

            {/* eslint-disable-next-line react/prop-types */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex gap-3">
                {/* eslint-disable-next-line react/prop-types */}
                {vendor.storeName}
                {/* eslint-disable-next-line react/prop-types */}
                {vendor.isVerified?
                    <MdVerified size={25} className={`text-green-700`} title={`Verified Shop`}/>:
                    <MdError size={25} className={`text-red-700`} title={`Shop not Verified`}/>
                }
            </h1>

            {/* eslint-disable-next-line react/prop-types */}
            <p className="text-gray-600 mb-6">{vendor.storeDescription}</p>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center text-gray-700 min-h-[40vh]">
                <div className=' md:h-full md:w-[90%] w-full h-[50vh] rounded-3xl md:order-1 order-2'>
                    <MapContainer addresses = {addresses}/>
                </div>
                <div className={`h-full px-8 md:order-2 order-1`}>
                    {/* eslint-disable-next-line react/prop-types */}
                    <ImageSlicer images={[vendor.userProfile,...images].slice(0,8)} className={`h-full w-full`}/>
                </div>
            </div>
            <div className="my-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FaMapMarkerAlt className="mr-2" /> Addresses
                </h2>
                <ul className="list-none p-0 md:flex grid gap-4 cursor-pointer">
                    {/* eslint-disable-next-line react/prop-types */}
                    {shop.addresses.map((address, index) => (
                        <li key={index} className="p-2 bg-gray-100 rounded-lg">
                            <p>{address.street}</p>
                            <p>{address.city}, {address.state} {address.zip}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-gray-800 mb-4 flex justify-between gap-4 items-center">
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className={`flex flex-row text-2xl font-semibold`}>
                        {/* eslint-disable-next-line react/prop-types */}
                        <FaBoxOpen className="mr-2" /> Products <span className={`text-white bg-black rounded-xl  px-4`}>{inventories.length}</span>
                    </span>
                    <span>
                        <ContinueLink text={`Continue to store`}/>
                    </span>
                </h2>
                <div className="overflow-x-auto w-full pb-3">
                    {/* eslint-disable-next-line react/prop-types */}
                    <div className="grid md:grid-cols-3 gap-3">
                        {/* eslint-disable-next-line react/prop-types */}
                    {shuffleArray(inventories).slice(0,6).map((inventory, index) => (
                            <ProductCard01 key={index} inventory={inventory} s={"border-[3px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProfile;
