// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {fetchData} from "../../utils/helpers.js";
import { servers } from "../../services/api.js";
import ProductCard01 from "../../components/Product/Cards/ProductCard01.jsx";
import { MdArrowForward } from 'react-icons/md';
import {usePopup} from "../../context/PopupContext.jsx";
import {IoIosArrowForward} from "react-icons/io";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";

// eslint-disable-next-line react/prop-types,no-unused-vars
const ProductGrid = ({topRated}) => {
    const { inputValue } = useInput();
    const { showPopup } = usePopup();
    const [visibleRows, setVisibleRows] = useState(2);
    const handleSeeMoreRows = () => {
        setVisibleRows(prevRows => prevRows + 1);
    };

    const token = localStorage.getItem('byose_client_token');
    const [inventories, setInventories] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [loader, setLoader] = useState(true);
    const [visibleItemsPerCategory, setVisibleItemsPerCategory] = useState({});

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${servers.activities}api/products`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    setInventories(result.data.inventories);
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            } finally {
                setLoader(false);
            }
        }
        main();
    }, []);

    const groupByCategory = (inventories) => {
        return inventories.reduce((acc, inventory) => {
            const category = inventory.product.category || 'Uncategorized';
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(inventory);
            return acc;
        }, {});
    };

    const sortedGroupedInventories = (groupedInventories, topRated) => {
        const sortedInventories = {};
        for (const category in groupedInventories) {
            sortedInventories[category] = [...groupedInventories[category]];
            if (topRated) {
                sortedInventories[category].sort((a, b) => b.product.productRate - a.product.productRate);
            }
        }
        return sortedInventories;
    };

    const groupedInventories = sortedGroupedInventories(groupByCategory(inventories), topRated);
    const categoryKeys = Object.keys(groupedInventories);

    const handleSeeMoreItems = (category) => {
        setVisibleItemsPerCategory(prevState => ({
            ...prevState,
            [category]: (prevState[category] || 3) + 3
        }));
    };

    return (
        <div className="flex flex-col items-center my-5">
            <div className={`container mx-auto flex flex-col gap-3`}>
                <div className=" flex flex-row gap-2 py-4 px-3 container mx-auto">
                    <a href={`/`}>Home</a>
                    <IoIosArrowForward/>
                    <a href={topRated?"/topRated":"/products"}>{topRated?`Top Rated Product in Each category`:`Products`}</a>
                </div>
            </div>
            {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
            {categoryKeys.slice(0, visibleRows).map((category, index) => (
                <div key={index} className="container mx-auto my-4 px-2">
                    <h2 className="text-2xl font-bold mb-4">{category}</h2>
                    <div className="flex overflow-x-auto space-x-4 gap-5">
                        {groupedInventories[category].slice(0, visibleItemsPerCategory[category] || 3).map((inventory, idx) => (
                            <div className="flex-shrink-0 md:w-[calc(33.333%-1rem)] sm:w-[60vw] w-[95vw]" key={idx}>
                                <ProductCard01 inventory={inventory} s={"h-full border-[3px]  pt-6 pb-4 px-3"} />
                            </div>
                        ))}
                        {(groupedInventories[category].length > (visibleItemsPerCategory[category] || 3)) && (
                            <button onClick={() => handleSeeMoreItems(category)} className="flex-shrink-0 w-[calc(33.333%-1rem)] flex items-center justify-center text-[#166534] hover:text-blue-700">
                                <MdArrowForward size={24} />
                            </button>
                        )}
                    </div>
                </div>
            ))}
            {visibleRows < categoryKeys.length && (
                <button onClick={handleSeeMoreRows} className="mt-5 px-4 py-2 bg-[#166534] text-white rounded hover:bg-[#166534DD]">
                    See More Categories
                </button>
            )}
        </div>
    );
};

export default ProductGrid;
