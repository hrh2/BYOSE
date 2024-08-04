// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useInput} from "../../context/InputContext.jsx";

function HomeSearchBar() {
    const { inputValue, setInputValue } = useInput();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key pressed:', inputValue);
        }
    };
    return (
        <div className="md:w-[60%] w-full">
            <div
                className="relative flex items-center w-full h-12 rounded-lg focus-within:border-[1px] bg-[#F3F4F6] overflow-hidden">
                <input
                    className="peer h-full w-full outline-none text-sm bg-[#F3F4F6] px-2"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    id="search"
                    placeholder="Search for products, categories or brands..."
                />
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );

}

export default HomeSearchBar;