// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';
import Shop01 from "../Product/Cards/Shop01.jsx";
import ProductCard01 from "../Product/Cards/ProductCard01.jsx";
import links from "../../assets/data/Links.js";
import LinkComponent from "../Badge/LinkComponent.jsx";
import {servers} from "../../services/api.js";
// eslint-disable-next-line react/prop-types
export  default   function  SearchComponent ({ searchKeyword, vendors, inventories }){
    const [fetchedVendors, setFetchedVendors] = useState([]);
    const [fetchedInventories, setFetchedInventories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!vendors || !inventories) {
            fetchResults();
        }
    }, [searchKeyword]);

    const fetchResults = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${servers.activities}/api/dashboard/search?q=${searchKeyword}`);
            setFetchedVendors(response.data.vendors);
            // console.log(response.data.vendors);
            setFetchedInventories(response.data.inventories);
            // console.log(response.data.inventories);
        } catch (error) {
            console.error("Error fetching search results:", error);
        } finally {
            setLoading(false);
        }
    };

    const getFilteredResults = () => {
        const allItems = [
            ...fetchedVendors.map((vendor) => ({ type: 'vendor', data: vendor })),
            ...fetchedInventories.map((inventory) => ({ type: 'product', data: inventory })),
            ...links.map((link) => ({ type: 'link', data: link })),
        ];

        return allItems.filter((item) => {
            const values = Object.values(item.data).flatMap(value =>
                typeof value === 'object' ? Object.values(value) : [value]
            );
            return values.some((value) =>
                // eslint-disable-next-line react/prop-types
                value.toString().toLowerCase().includes(searchKeyword.toLowerCase())
            );
        });
    };

    const filteredResults = getFilteredResults();
    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <FadeLoader color="#166534" size={30} />
                </div>
            ) : (
                <div className={`mx-auto container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-2 pt-2 gap-4 pb-4`}>
                    {filteredResults.slice(0, 6).map((item, index) => {
                        switch (item.type) {
                            case 'vendor':
                                return <Shop01 key={index} vendor={item.data} className={`md:w-full sm:w-[60vw] w-[90vw]`} />;
                            case 'product':
                                return <ProductCard01 s={"h-full border-[3px]  pt-6 pb-4 px-3"} key={index} inventory={item.data} />;
                            case 'link':
                                return <LinkComponent key={index} link={item.data} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            )}
        </div>
    );
};

