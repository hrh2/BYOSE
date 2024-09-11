function UserCardBg({user}) {
    return (
        <div className="lg:w-3/5 p-4 dark:bg-gray-800 dark:border-gray-800 shadow-md hover:shadow-lg rounded-md">
            <div className="flex-none lg:flex">
                <div className=" h-full w-full lg:h-36 lg:w-36   lg:mb-0 mb-3">
                    <img
                        src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="unsplash images"
                        className=" w-full  object-scale-down lg:object-cover  lg:h-36 rounded-2xl"/>
                </div>
                <div className="flex-auto lg:ml-3 justify-evenly py-2">
                    <div className="flex flex-col ">
                        <div className="flex items-center mr-auto text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300 mr-1"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <p className="font-normal text-gray-500">4.5</p>
                        </div>
                        <div className="flex items-center  justify-between min-w-0">
                            <h2 className="mr-auto   text-base dark:text-gray-100 font-medium truncate">username</h2>
                            <div className="flex items-center font-medium dark:text-gray-300 ">
                                $
                                800
                                <span className="text-gray-500 text-sm font-normal">&nbsp;Total</span>
                            </div>
                        </div>
                        <p className="flex items-center text-sm dark:text-gray-400">Top customer in your stock<span
                            className="relative inline-flex rounded-md shadow-sm ml-2">
                      <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                        <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    </span>

                        </p>
                    </div>
                    <div className="flex my-3 border-t border-gray-800 "></div>
                    <div className="flex space-x-3 text-sm font-medium">
                        <div className="flex-auto items-center flex space-x-3 text-xs dark:text-gray-500">
                            <span>10+ completed order</span><span></span>

                        </div>
                        {/*<button*/}
                        {/*    className="mb-2 md:mb-0 flex-no-shrink bg-green-400 hover:bg-green-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"*/}
                        {/*    type="button" aria-label="like">Book Now*/}
                        {/*</button>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCardBg;