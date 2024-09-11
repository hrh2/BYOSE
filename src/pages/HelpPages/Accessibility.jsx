import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import StaticMapContainer from "../../components/Maps/StaticMapContainer.jsx";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";
import React from "react";

export default function Accessibility() {
    const { inputValue } = useInput();
    return (
        <div className="p-6 container flex flex-col mx-auto">
            {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
            <h2 className="text-2xl font-bold flex items-center mb-4">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                Our Company’s Operational Area
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-400">
                The map below shows our company’s operational area, centered around Kigali City.
                This region represents where we can provide our services effectively. By focusing
                on this area, we aim to ensure high-quality service delivery and quick response times
                to our clients.
            </p>
            <p className="mb-8 text-gray-700 dark:text-gray-400">
                Highlighting this operational region helps our customers understand our geographical
                reach and the areas where we are currently able to operate. It also allows us to
                plan and manage our resources more efficiently.
            </p>
            <div className={`h-[50vh]`}>
                <StaticMapContainer/>
            </div>
            <div className="mt-6 flex items-center text-gray-600  dark:text-gray-400">
                <FaInfoCircle className="mr-2 text-green-500" />
                <span>Contact us for more details about our service areas.</span>
            </div>
        </div>
    );
}
