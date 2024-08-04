function QuantityBg({title ,value,icon}) {
    return (
        <div className="w-full flex justify-between p-4 bg-white  dark:bg-gray-800 border dark:border-gray-800 shadow-lg  rounded-2xl">
            <div className="">
                <div className="flex justify-between items-center ">
                    <i className="fab fa-behance text-xl text-gray-400"></i>
                </div>
                <div className="text-3xl text-gray-950 dark:text-gray-100 font-medium leading-8 mt-5">{value}</div>
                <div className="text-sm text-gray-800 dark:text-gray-500">{title}</div>
            </div>
                {icon}
        </div>
    );
}

export default QuantityBg;