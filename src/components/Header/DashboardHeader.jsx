import {useState} from 'react';
    import { FiMenu, FiSearch, FiUser, FiSettings } from 'react-icons/fi';

// eslint-disable-next-line react/prop-types
function DashboardHeader({ onToggleSidebar }) {
        const [searchQuery, setSearchQuery] = useState('');

        const handleSearchChange = (e) => {
            setSearchQuery(e.target.value);
        };

        return (
            <nav className="bg-white dark:bg-black shadow-md p-4 flex items-center justify-between">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={onToggleSidebar}
                >
                    <FiMenu size={24} />
                </button>

                <div className="relative flex items-center">
                    <FiSearch size={20} className="absolute left-3 text-gray-500" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none"
                        placeholder="Search..."
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 lg:block hidden hover:text-gray-800">
                        <FiSettings size={24} />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                        <FiUser size={24} />
                    </button>
                </div>
            </nav>
        );
    }

export default DashboardHeader;