// eslint-disable-next-line react/prop-types
function SwitchBtn({handleToggle,toggle,onText,offText}) {

        return (
                <div className=" px-10 ">
                    <button
                        onClick={handleToggle}
                        type={`button`}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 duration-200 select-none ${
                            toggle ? 'bg-red-700' : 'bg-gray-700'
                        }`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`inline-block w-4 h-4 transform duration-300 bg-white rounded-full ${
                                toggle ? 'translate-x-1' : 'translate-x-6'
                            }`}
                        ></span>
                    </button>
                    <label
                        onClick={handleToggle}
                        className={`font-bold px-5 transform duration-200 inline-block ${
                            toggle ? 'text-gray-500' : 'text-gray-300'
                        }`}
                    >
                        {toggle ?offText : onText}
                    </label>
                </div>
        );
    }
export default SwitchBtn;