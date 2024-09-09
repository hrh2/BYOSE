
import { FiPhoneCall } from "react-icons/fi";
import Media from '../Badge/Media'
import { MdMailOutline } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";

 
const aS = [
  {
    title: "Make Money with Us",
  items: [
  ["Sell on byose","checkout/overview"], 
  ["Sell Your Services on byose","checkout/features"], 
  ["Sell on byose Business","videos/Video"],
  ["Sell Your Apps on byose","videos/Movie"],
  ["Become an Affilate","videos/Music"],
  ["Sell-Publish with Us","videos/CGI"],
  ["Advertise Your Products","videos/CGI"],
  ["Become an Blowwe Vendor","videos/CGI"]]
  },
  {
    title: "Let Us Help You",
    items: [
    ["Accessibility Statement","checkout/aboutus"],
    ["Your Orders","checkout/aboutus"], 
    ["Returns & Replacements","checkout/news"],
    ["Shipping Rates & Policies","checkout/news"],
    ["Refund and Returns Policy","checkout/news"],
    ["Terms and Conditions","checkout/news"],
    ["Cookie Settings","checkout/news"],
    ["Privacy Policy","checkout/news"],
    ["Help Center","checkout/news"],
    ]
  },
  {
    title: "Resource",
    items: [
    ["Careers for byose","checkout/contactus"],
    ["About byose","blogs"], 
    ["Inverstor Relations","newsletter"], 
    ["Byoce Devices","newsletter"], 
    ["Customer reviews","newsletter"], 
    ["Social Responsibility","events"],
    ["Store Locations","events"]
    ]
  },
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer00() {
  return (
    <footer className="relative w-full bg-gradient-to-tl from-[#F3F4F6] to-[#F3F4F6] dark:from-[#0c0b09] dark:to-[#0c0b09] z-30">
      <div className="mx-auto w-full container px-8 py-6">
        <div className="grid grid-cols-1 justify-between md:gap-6 gap-4 md:grid-cols-5 sm:grid-cols-2 pr-2">
          <div className="flex flex-col gap-3  col-span-1 sm:col-span-2 md:col-span-1">
            <h2 className="mb-3 text-[#111827] dark:text-[#eee7d8] font-semibold ">
              Do You Need Help ?
            </h2>
            <p className="py-1.5  text-[#4B5563] dark:text-[#b4aa9c] font-normal transition-colors ">
            Autoseligen syr. Nek diarask fröbomba. Nör
            antipol kynoda nynat. Pressa fåmoska.
            </p>
            <div className="flex flex-row gap-3 justify-between">
              <FiPhoneCall size={30} />
              <span className="">
                <p className="text-[#4B5563] dark:text-[#b4aa9c] font-normal transition-colors ">Monday-Friday: 08am-9pm</p>
                <h2 className="text-[#111827] dark:text-[#eee7d8] text-[23px]">0 800 300-353</h2>
              </span>
            </div>
            <div className="flex flex-row gap-3 justify-between">
              <MdMailOutline size={30} />
              <span className="">
                <p className="text-[#4B5563] dark:text-[#b4aa9c] font-normal transition-colors ">Need help with your order?</p>
                <h2 className="text-[#111827] dark:text-[#eee7d8] text-[19px]">info@example.com</h2>
              </span>
            </div>
          </div>
            {aS.map(({ title, items }) => (
              <ul key={title+2045}>
                <div className="mb-3 text-[#111827] dark:text-[#eee7d8] font-semibold ">
                  {title}
                </div>
                {items.map((a) => (
                  <a key={a+130} to={`/${a[1]}`}>
                      <li >
                        <div
                          className="py-1.5  text-[#4B5563] dark:text-[#b4aa9c] font-normal transition-colors hover:scale-110"
                        >
                          {a[0]}
                        </div>
                      </li>
                  </a>
                ))}
              </ul>
            ))}
            <div className="flex flex-col gap-3 ">
            <h2 className="mb-3 text-[#111827] dark:text-[#eee7d8] font-semibold ">
              Find us
            </h2>
            <a className="grid grid-cols-3 gap-3">
              <div className="flex flex-row gap-3 col-span-2 justify-between text-white bg-[#0a0f18] dark:text-black dark:bg-[#f5f0e7] p-[6px] rounded-md">
                <FaGooglePlay size={30} className="my-auto" />
                <span className="text-[.7rem] flex flex-col">
                  <p className="text-[.5rem] font-normal transition-colors hover:!text-gray-900">GET&nbsp;IT&nbsp;ON</p>
                  <h2 className=" font-bold">Google&nbsp;Play</h2>
                </span>
              </div>
            </a>
            <a className="grid grid-cols-3 gap-3">
              <div className="flex flex-row gap-3 col-span-2 justify-between text-white bg-[#0a0f18] dark:text-black dark:bg-[#f5f0e7] p-[6px] rounded-md">
                <FaApple size={30} className="my-auto" />
                <span className="text-[.7rem] flex flex-col">
                  <p className="text-[.5rem] font-normal transition-colors hover:!text-gray-900">Download&nbsp;on&nbsp;the</p>
                  <h2 className="font-bold">App&nbsp;Store</h2>
                </span>
              </div>
            </a>
            <p className="py-1.5   text-[#4B5563] dark:text-[#b4aa9c] font-normal transition-colors hover:!text-gray-900">
            Follow us on social media:
            </p>
            <Media/>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <div className="mb-4 text-center font-normal flex text-[#4B5563] md:mb-0">
            &copy; {currentYear} <a to="/">byose</a>.All
            Rights Reserved.
          </div>
          <a className="flex gap-3 underline underline-offset-4">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>Order Tracking</span>
          </a>
        </div>
      </div>
    </footer>
  );
}