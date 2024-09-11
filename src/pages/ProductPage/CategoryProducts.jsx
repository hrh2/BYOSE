// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {fetchData, shuffleArray} from "../../utils/helpers.js";
import { servers } from "../../services/api.js";
import ProductCard01 from "../../components/Product/Cards/ProductCard01.jsx";
import { MdArrowForward } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import {FadeLoader} from "react-spinners";
import {usePopup} from "../../context/PopupContext.jsx";
import {IoIosArrowForward} from "react-icons/io";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";

const CategoryProducts = () => {
    const { inputValue } = useInput();
    const { category } = useParams();  // Get category from request params
    const { showPopup } = usePopup();
    const [products, setProducts] = useState([]);
    const [uncategorizedProducts, setUncategorizedProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const [visibleItems, setVisibleItems] = useState(3);

    const token = localStorage.getItem('byose_client_token');

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${servers.activities}/api/inventory`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    const categorized = result.data.inventories.filter(item => item.product.category === category);
                    const uncategorized = result.data.inventories.filter(item => item.product.category !== category);

                    setProducts(categorized);
                    setUncategorizedProducts(uncategorized);
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            } finally {
                setLoader(false);
            }
        }
        main();
    }, [category, token]);

    const handleSeeMoreItems = () => {
        setVisibleItems(prevItems => prevItems + 3);
    };

    return (
        <div className="flex flex-col items-center my-5">
            <div className=" flex flex-row gap-2 py-4 px-3 container mx-auto">
                <a href={`/`}>Home</a>
                <IoIosArrowForward/>
                <a href={`/categories`}>Categories</a>
                <IoIosArrowForward/>
                <a href={`/categories/${category}`}>{category}</a>
            </div>
            {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
            {loader && <div className={`container  mx-auto flex justify-center align-middle items-center min-h-[50vh]`}>
                <FadeLoader color="#166534" size={30}/>
            </div>}
            {!loader && products.length > 0 ? (
                <>
                    <h2 className="text-2xl font-bold mb-4">{category} Products</h2>
                    <div className="flex overflow-x-auto space-x-4 gap-2 container mx-auto px-2">
                        {products.slice(0, visibleItems).map((product, idx) => (
                            <div className="flex-shrink-0 md:w-[calc(33.333%-1rem)] sm:w-[60vw] w-[98vw]" key={idx}>
                                <ProductCard01 inventory={product}
                                               s={"h-full border-[3px]  w-full pt-6 pb-4 px-3"}/>
                            </div>
                        ))}
                        {products.length > visibleItems && (
                            <button onClick={handleSeeMoreItems}
                                    className="flex-shrink-0 w-[calc(33.333%-1rem)] flex items-center justify-center text-blue-500 hover:text-blue-700">
                                <MdArrowForward size={24}/>
                            </button>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-4 px-3">No Products Found for &quot;<i
                        className={`bg-yellow-300`}>{category}</i>&quot;</h2>
                    <p className="mb-4 px-3">It seems we don&apos;t have any products in this category at the moment.
                        You might like to explore the following  product in others:</p>
                    <div className="flex overflow-x-auto space-x-4 gap-2 container mx-auto">
                        {shuffleArray(uncategorizedProducts).slice(0, visibleItems).map((product, idx) => (
                            <div className="flex-shrink-0 md:w-[calc(33.333%-1rem)] sm:w-[60vw] w-[98vw] p-1" key={idx}>
                                <ProductCard01 inventory={product} s={"h-full border-[3px] w-full pt-6 pb-4 px-3"}/>
                            </div>
                        ))}
                        {uncategorizedProducts.length > visibleItems && (
                            <button onClick={handleSeeMoreItems}
                                    className="flex-shrink-0 w-[calc(33.333%-1rem)] flex items-center justify-center text-blue-500 hover:text-blue-700">
                                <MdArrowForward size={24}/>
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default CategoryProducts;
