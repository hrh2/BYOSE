// eslint-disable-next-line react/prop-types
function DashBoardBg({title,subtitle,value,link,icon}) {
    return (
            <div className="bg-white dark:bg-gray-800 w-full shadow-md rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-purple-200 dark:bg-purple-950 rounded-full">
                        {icon}
                    </div>
                    <div>
                        <div className="text-gray-600 dark:text-gray-400 text-sm font-bold">{title}</div>
                        <div className="text-gray-900 dark:text-gray-100 text-2xl font-semibold">
                            {value}
                            <span className="text-[#166534] text-sm font-medium flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                </svg>
                                {subtitle}
                            </span>
                        </div>
                    </div>
                </div>
                <a href={link}>
                    <button className="w-full text-purple-600 dark:text-purple-100 bg-purple-100 dark:bg-purple-950 hover:scale-110 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out">
                        View all
                    </button>
                </a>
            </div>
    );
}

export default DashBoardBg;