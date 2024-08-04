import {Outlet} from "react-router-dom";
import {useState} from "react";
import DashboardSideBar from "../../components/SideBar/DashboardSideBar.jsx";
import DashboardHeader from "../../components/Header/DashboardHeader.jsx";

function VendorPages() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className={`max-w-full overflow-x-hidden bg-gray-100`}>
            <div className={`app`}>
                <div className={`fixed inset-y-0 left-0 transition-all duration-300 z-50  ${isSidebarOpen ? 'lg:w-1/6 md:w-1/4 w-3/4' : 'w-0'}`}>
                    <DashboardSideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
                </div>
                <main className={`transition-all duration-300 ${isSidebarOpen ? 'sm:ml-3/4' : 'ml-0 sm:ml-0'} sm:ml-0 w-full`}>
                    <DashboardHeader onToggleSidebar={toggleSidebar}/>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default VendorPages;