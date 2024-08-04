import {useState} from "react";
import {FiHome, FiList, FiLogOut, FiSettings, FiUser} from "react-icons/fi";
import {handleLogout} from "../../utils/helpers.js";

// eslint-disable-next-line react/prop-types
function CustomerView({className,user}) {

    const [vendor, setVendor] = useState({
        userFirstName: '',
        userLastName: '',
        storeName: '',
        storeDescription: '',
        userProfile:'',
        url:'',
    });
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setVendor((prevData) => ({ ...prevData, [name]: value }));
    }
    return (
        <div className={`flex flex-col md:flex-row ${className}`}>
            {/* Sidebar */}
            <aside className="w-full md:w-1/4 bg-white p-4 mb-6 md:mb-0">
                <div className="mb-6">
                    <div className="flex items-center mb-4">
                        <FiUser className="text-2xl mr-2"/>
                        <div>
                            <p className="text-sm text-gray-600">Welcome back,</p>
                            <p className="text-lg font-semibold">{user.email}</p>
                        </div>
                    </div>
                </div>
                <ul className="rounded-lg border-[2px] p-4">
                    <li className="mb-4">
                        <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                            <FiHome className="mr-2"/>
                            Home
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                            <FiList className="mr-2"/>
                            Orders
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                            <FiSettings className="mr-2"/>
                            Setting
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleLogout("byose_client_token")}
                           className="flex items-center text-gray-700 hover:text-blue-600">
                            <FiLogOut className="mr-2"/>
                            Log out
                        </a>
                    </li>
                </ul>
            </aside>

            {/* Main content */}
            <main className="w-full md:w-3/4 bg-white p-6 md:ml-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Update account to Vendor</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Owner First Name *</label>
                        <input
                            type="text"
                            name={`userFirstName`}
                            value={vendor.userFirstName}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Owner Last Name *</label>
                        <input
                            type="text"
                            value={vendor.userLastName}
                            name={`userLastName`}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Shop Name *</label>
                        <input
                            type="text"
                            value={vendor.storeName}
                            name={`storeName`}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Google profile Link</label>
                        <input
                            type="text"
                            value={vendor.url}
                            name={`url`}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            // required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Owner Phone Number *</label>
                        <input
                            type="text"
                            value={user.phone}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            disabled={true}
                            required
                        />
                    </div>
                     <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            required
                        />
                        <label htmlFor="terms" className="ml-2">I have read and agree to the <a href="#" className="text-blue-600">Terms & Conditions</a>.</label>
                    </div>
                    <button type="submit" className="py-2 px-4 bg-[#166534] text-white font-semibold rounded-lg transition duration-500 active:scale-110">
                        Become a Vendor
                    </button>
                </form>
            </main>
        </div>
    );
}

export default CustomerView;