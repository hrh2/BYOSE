// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import HomeDiscount01 from '../../components/Discount/HomeDiscounto1';
import Categories from '../../components/Product/Categories';
import NewProducts from '../../components/Product/NewProducts.jsx';
import Advertisement from '../../components/Badge/Advertisment';
import TopBoughtProduct from '../../components/Product/TopBoughtProduct';
import StoreOffers from '../../components/Product/StoreOffers.jsx';
import OtherProducts from '../../components/Product/OtherProducts';
import Companies from '../../components/Product/Companies';
import { fetchData } from '../../utils/helpers';
import { servers } from '../../services/api.js';
import { FadeLoader } from "react-spinners";
import {useInput} from "../../context/InputContext.jsx";
import {usePopup} from "../../context/PopupContext.jsx";
import {IoIosArrowForward} from "react-icons/io";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";

export default function HomePage() {
    const token = localStorage.getItem('byose_client_token');
    const { showPopup } = usePopup();
    // eslint-disable-next-line no-unused-vars
    const { inputValue } = useInput();
    // eslint-disable-next-line no-unused-vars
    const [inventories, setInventories] = useState([]);
    const [discount, setDiscount] = useState(null);
    const [advertisement, setAdvertisement] = useState(null);
    const [unPublished, setUnPublished] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [topSixLatest, setTopSixLatest] = useState([]);
    const [topSevenRated, setTopSevenRated] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${servers.activities}api/dashboard/home`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    setDiscount(result.data.discount);
                    setAdvertisement(result.data.advertisement)
                    const publishedInventories = result.data.publishedInventories;
                    setInventories(publishedInventories);
                    setUnPublished(result.data.unpublishedInventories);
                    setVendors(result.data.vendors);
                    // Filter top five rated inventories
                    const sortedByRating = [...publishedInventories].sort((a, b) => b.product.productRate- a.product.productRate);
                    const uniqueCategories = [...new Set(result.data.publishedInventories.map(inventory => inventory.product.category))];
                    const uniqueStores = [...new Set(result.data.vendors.slice(0,10).map(vendor => ({name:vendor.storeName,id:vendor.vendor})))];
                    localStorage.setItem('byose_categories', JSON.stringify(uniqueCategories));
                    localStorage.setItem('byose_stores', JSON.stringify(uniqueStores));
                    const topRated = sortedByRating.slice(0, 7);
                    setTopSevenRated(topRated);
                    // Simulate an error for demonstration purposes
                    // Filter top six latest inventories excluding top five rated
                    const sortedByDate = [...publishedInventories]
                        .filter(item => !topRated.includes(item))
                        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                    setTopSixLatest(sortedByDate.slice(0, 6));
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            } finally {
                setLoader(false);
            }
        }
        main();
    }, [token]);
    return (
        !loader ? <div
                className='w-full h-auto overflow-x-hidden hide-scrollbar bg-gradient-to-t from-[#ffffff34] via-[#ECEBEE] to-[#ECEBEE] dark:bg-gradient-to-t dark:from-[#000000ED] dark:via-[#141511] dark:to-[#141511] #bg-[#D1D5DB]'>
                <div className=" flex flex-row gap-2 py-4 px-3 container mx-auto">
                    <a href={`/`}>Home</a>
                    <IoIosArrowForward/>
                </div>
                {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
                {discount && <HomeDiscount01 dicount={discount}/>}
                <Categories/>
                <NewProducts inventories={topSixLatest}/>
                {advertisement && <Advertisement content={advertisement}/>}
                <TopBoughtProduct inventories={topSevenRated} vendors={vendors}/>
                <StoreOffers vendors={vendors}/>
                <Companies vendors={vendors}/>
                <OtherProducts inventories={unPublished}/>
            </div> :
            <div className={`container  mx-auto flex justify-center align-middle items-center min-h-[50vh]`}>
                <FadeLoader color="#166534" size={30}/>
            </div>
    );
}
