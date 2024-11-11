import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { GridLoader } from 'react-spinners';
import ShopProfile from './ShopProfile.jsx';
import {capitalizeLastThreeLetters, fetchData} from '../../utils/helpers.js';
import { servers } from '../../servicesapi.js';
import {shop} from "../../assets/data/shop.js";
import {usePopup} from "../../context/PopupContext.jsx";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";

function VendorStockPage() {
    const { inputValue } = useInput();
    const { vendorID } = useParams();
    const { showPopup } = usePopup();
    const token = localStorage.getItem('byose_client_token');
    const [vendor, setVendor] = useState(null);
    const [inventories, setInventories] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${servers.activities}api/vendors/${vendorID}`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    setVendor(result.data.vendor);
                    setInventories(result.data.inventories);
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            } finally {
                setLoader(false);
            }
        }
        main();
    }, [vendorID, token]);

    return (
        <div>
            <div className="flex flex-row gap-2 py-4 container mx-auto">
                <a href={`/`}>Home</a>
                <IoIosArrowForward />
                <a href="/shops">Shops</a>
                <IoIosArrowForward />
                <a href={`/shops/${vendorID}`}>...{capitalizeLastThreeLetters(vendorID)}</a>
            </div>
            {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
            <div className="flex justify-center items-center min-h-[50vh] my-auto">
                {loader ? (
                    <GridLoader color="#166534" />
                ) : (
                    vendor && <ShopProfile vendor={vendor} inventories = {inventories} shop={shop} />
                )}
            </div>
        </div>
    );
}

export default VendorStockPage;
