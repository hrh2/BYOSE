// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProductCard01 from "../../components/Product/Cards/ProductCard01.jsx";
import {capitalizeLastThreeLetters, fetchData, shuffleArray} from "../../utils/helpers.js";
import { servers } from "../../servicesapi.js";
import { FadeLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdError, MdVerified } from "react-icons/md";
import {usePopup} from "../../context/PopupContext.jsx";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";

function StoreProducts() {
    const { inputValue } = useInput();
    const { vendorID } = useParams();
    const { showPopup } = usePopup();
    const token = localStorage.getItem('byose_client_token');
    const [inventories, setInventories] = useState([]);
    const [vendor, setVendor] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${servers.activities}api/store/vendor/${vendorID}`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    setInventories(shuffleArray(result.data.inventories));
                    setVendor(result.data.vendor);
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            } finally {
                setLoader(false);
            }
        }
        main();
    }, []);

    return (
        !loader ? (
            <div>
                <div className="flex flex-row gap-2 py-4 container mx-auto">
                    <a href={`/`}>Home</a>
                    <IoIosArrowForward />
                    <a href="/shops">Stores</a>
                    <IoIosArrowForward />
                    <a href={`/stores/${vendorID}`}>{capitalizeLastThreeLetters(vendorID)}</a>
                </div>
                {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex gap-3 container mx-auto">
                    {vendor.storeName}
                    {vendor.isVerified ? (
                        <MdVerified size={25} className={`text-green-700`} title={`Verified Shop`} />
                    ) : (
                        <MdError size={25} className={`text-red-700`} title={`Shop not Verified`} />
                    )}
                </h1>
                <div className="flex flex-col gap-2 p-4 container mx-auto">
                    <h2 className="text-2xl font-semibold mb-2">Purchase here</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Browse through our selection of products and find what you need. Enjoy exclusive offers and discounts!</p>
                    <a href={`/shops/${vendorID}`} className="text-blue-500 hover:underline mt-4">Visit the Store</a>
                    <div className="overflow-x-auto w-full pb-3">
                        <div className="grid md:grid-cols-3 gap-3">
                            {inventories.map((inventory, index) => (
                                <ProductCard01 key={index} inventory={inventory} s={"border-[3px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={`container mx-auto flex justify-center align-middle items-center min-h-[50vh]`}>
                <FadeLoader color="#166534" size={30} />
            </div>
        )
    );
}

export default StoreProducts;
