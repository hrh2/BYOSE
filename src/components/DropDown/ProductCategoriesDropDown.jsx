// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const ProductCategoriesDropDown = ({ items, search,  className }) => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState('');

  useEffect(() => {
    // Fetch categories from localStorage and set the state
    const storedCategories = localStorage.getItem("byose_categories");
    if (storedCategories) {
      try {
        const parsedCategories = JSON.parse(storedCategories);
        setCategories(parsedCategories);
      } catch (e) {
        console.error("Failed to parse categories from localStorage", e);
      }
    }
  }, []);

  const mergedItems = [...items, ...categories];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSelected = (value) => {
    setSelected(value);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  return (
      <div className="relative group">
        <button
            id="dropdown-button"
            className={`inline-flex pt-3 justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:text-gray-200 dark:bg-black border-0 border-gray-300 rounded-md ${className}`}
            onClick={toggleDropdown}
        >
          <span className="mr-2 pt-2 text-[18px] font-semibold">{selected || items[0]}</span>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
          >
            <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
            <div
                id="dropdown-menu"
                className="absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-black ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-40"
            >
              <input
                  id="search-input"
                  className="block w-full px-4 py-2 text-gray-800 dark:text-gray-100 border rounded-md border-gray-300 focus:outline-none"
                  type="text"
                  placeholder={search}
                  value={searchTerm}
                  onChange={handleSearch}
                  autoComplete="off"
              />
              {mergedItems
                  .filter((item) => item.toLowerCase().includes(searchTerm))
                  .map((item) => (
                      <a
                          key={item}
                          href={`/Categories/${item !== 'Categories' ? item : ''}`}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-blue-100 cursor-pointer rounded-md"
                          onClick={() => handleSelected(item)}
                      >
                        {item}
                      </a>
                  ))}
            </div>
        )}
      </div>
  );
};

export default ProductCategoriesDropDown;
