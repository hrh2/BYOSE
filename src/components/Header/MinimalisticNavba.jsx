import { FaBars } from 'react-icons/fa';
import { TbCircleLetterBFilled, TbHexagonLetterB } from "react-icons/tb";
import MobileSearchBar from "../Forms/MobileSearchBar.jsx";
// eslint-disable-next-line react/prop-types
export default function MinimalisticNavbar({toggleSidebar,className}) {
  return (
    <div className={` bg-white dark:bg-black shadow-md w-full p-4 flex justify-between items-center gap-4 ${className}`}>
      <button onClick={toggleSidebar} className="text-2xl md:hidden">
        <FaBars />
      </button>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:border-[1px] bg-[#F3F4F6] dark:bg-[#0c0b09] overflow-hidden">
          <MobileSearchBar/>
          <div className="grid place-items-center h-full w-12 ">
            <TbCircleLetterBFilled size={25} className='text-[#111827] dark:text-[#eee7d8]'/>
          </div>
        </div>
      </div>
      <TbHexagonLetterB size={32} className="my-auto"/>
    </div>
  );
}
