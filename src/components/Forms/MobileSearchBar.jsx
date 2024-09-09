// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useInput} from "../../context/InputContext.jsx";

function MobileSearchBar() {
    const { inputValue, setInputValue } = useInput();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter key pressed:', inputValue);
        }
    };
    return (
        <input
            className="peer h-full w-full outline-none text-sm bg-[#F3F4F6] dark:bg-[#0c0b09] px-2"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            id="search"
            placeholder="Search for products, categories or brands..."
        />
    );
}

export default MobileSearchBar;