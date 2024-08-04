import { useState } from 'react';
import HomePageHeader01 from '../../components/Header/HomePageHeader01';
import MinimalisticNavba from '../../components/Header/MinimalisticNavba';
import Footer00 from '../../components/Footer/Footer00';
import HomeSidebar from '../../components/SideBar/HomeSidebar';
import { Outlet } from 'react-router-dom';
import MobileBar from "../../components/NavigationBar/MobileBar.jsx";

export default function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='relative w-[100vw]'>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transition-all duration-300 z-50 sm:hidden ${isSidebarOpen ? 'w-3/4' : 'w-0'}`}>
        <HomeSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      {/* Main content area adjusts based on sidebar visibility on small screens */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'sm:ml-3/4' : 'ml-0 sm:ml-0'} sm:ml-0 w-full`}>
        <div className='w-full h-auto overflow-x-hidden hide-scrollbar'>
            <HomePageHeader01 className={`lg:block md:block sm:hidden hidden`} />
            <MinimalisticNavba toggleSidebar={toggleSidebar} className={`lg:hidden md:hidden fixed top-0 z-40`} />
            <div className={`lg:hidden md:hidden static h-[10vh]`}></div>
            <MobileBar className={`lg:hidden md:hidden`}/>
            <Outlet/>
            <Footer00 />
        </div>
      </div>
    </div>
  );
}
