import ProductCategoriesDropDown from '../DropDown/ProductCategoriesDropDown.jsx';
import { CiUser } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { FaOpencart } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
import {useEffect} from "react";
// eslint-disable-next-line no-unused-vars
import LanguageSelectionDropDown from "../DropDown/LanguageSelectionDropDown.jsx";
import CurrencySelectionDropDown from "../DropDown/CurrencySelectionDropDown.jsx";
import StockSelectionDropDown from "../DropDown/StockSelectionDropDown.jsx";
import {SiHomebridge} from "react-icons/si";
import HomeSearchBar from "../Forms/HomeSearchBar.jsx";

// eslint-disable-next-line react/prop-types
export default function HomePageHeader01({className}) {
  const token = localStorage.getItem('byose_client_token');
  useEffect(()=>{

  },[token])
  return (
    <div className={`bg-white dark:bg-black dark:text-white flex flex-col gap-2 !w-full  relative ${className}`}>
      {/* Top bar */}
      <div className="border-b-[1.5px] p-2">
        <div className="md:w-[70%] w-[96%] mx-auto flex md:flex-row flex-col gap-4 justify-between">
          <div className="flex flex-col md:flex-row gap-3">
            <a href="/aboutus" className="flex justify-center md:justify-start pt-3">About Us</a>
            <a href="/contacts" className="flex justify-center md:justify-start pt-3">Contacts</a>
            <a href="/blog" className="flex justify-center md:justify-start pt-3">Blog</a>
            <span className="text-[#6B7280] text-sm flex justify-center md:justify-start items-center align-middle pt-2">
              | We deliver to you every day from <span className="text-[#EA580C]">7:00 to 23:00</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-start">
            {/*<LanguageSelectionDropDown items={['English', 'French', 'KINY']} search="Language" />*/}
            <CurrencySelectionDropDown items={['RWF','USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD']} search="Currency" />
            <a href="/trakProducts" className="flex justify-center md:justify-start pt-3">Product Tracking</a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`md:flex md:flex-row flex-col justify-center gap-4 md:w-[70%] w-[95%] mx-auto pt-2 flex`}>
        <div className="flex justify-center md:justify-start">
          <a href={`/accessibility`} className="flex flex-row cursor-pointer active:cursor-wait">
            <SlLocationPin size={32} className="text-[#030712] dark:text-[#ffffff]" />
            <span className="flex flex-col justify-center align-middle">
              <span className="text-[13px] font-normal text-center">Accessible to</span>
              <span className="text-[15px] font-medium text-center text-[#030712]">All</span>
            </span>
          </a>
        </div>
        <HomeSearchBar/>
        <div className="flex flex-row gap-4 justify-center md:justify-start">
          <a href={token?`/account`:`/login`} className="flex flex-row cursor-pointer active:cursor-wait">
            <CiUser size={32} className="text-[#030712] dark:text-[#ffffff] my-auto" />
            {token?null:<span className="flex flex-col justify-center align-middle">
              <span className="text-[11px] font-normal text-center">Sign in</span>
              <span className="text-[13px] font-medium text-center text-[#030712]">Account</span>
            </span>}
          </a>
          {token&&<a href={`wishlist`} className="relative aspect-square cursor-pointer">
            <div className="w-[20px] h-[20px] #pt-[7px] flex justify-center items-center text-center text-[15px] rounded-full absolute top-[3px] right-[-6px] bg-red-500 text-white">
              12
            </div>
            <FaRegHeart size={32} className="text-[#030712] dark:text-[#ffffff]" />
          </a>}
          {token&&<a href={`/cart`} className="relative aspect-square cursor-pointer">
            <div
                className="w-[20px] h-[20px] #pt-[7px] flex justify-center items-center text-center text-[15px] rounded-full absolute top-[3px] right-[-4px] bg-red-500 text-white">
              12
            </div>
            <FaOpencart size={32} className="text-[#030712] dark:text-[#ffffff]"/>
          </a>}
        </div>
      </div>

      {/* Bottom section */}
      <div className={`md:flex md:flex-row flex-col gap-4 justify-between mx-auto container flex py-1`}>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <ProductCategoriesDropDown items={['Categories']} stylee="text-[18px] font-semibold text-[#030712]"
                                     search="Search Page.."/>
          <StockSelectionDropDown items={[{id:111,name:'shops'}]} className="text-[18px] font-semibold text-[#030712]" search="Search Page.."/>
          {/* <a href="/#" className="flex gap-2 p-2 text-[18px] font-semibold text-[#030712] justify-center md:justify-start">My account</a> */}
          {/* <a href="/#" className="flex gap-2 p-2 text-[18px] font-semibold text-[#030712] justify-center md:justify-start">Wishlist</a> */}
        </div>
        <a href={`/`}><SiHomebridge size={34}/></a>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <ProductCategoriesDropDown items={['Trending Product', ' More trends ']} search="Trends.."
                                     stylee="text-[18px] font-semibold text-[#030712]"/>
          <a href="/orders"
             className="text-[#DC2626] text-[18px] font-semibold flex gap-2 p-2 justify-center md:justify-start">
            <span className='pt-2'>Finished </span>
            <span
                className="text-gray-100 bg-gradient-to-r from-[#DC2626] to-[#EA580C] pt-1 px-4 rounded-md">Orders</span>
          </a>
        </div>
      </div>
      <hr/>
    </div>
  );
}
