import { Badge, Sidebar } from "flowbite-react";
// eslint-disable-next-line no-unused-vars
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { TbHexagonLetterB } from "react-icons/tb";
import { SiHomebridge } from "react-icons/si";
import {MdOutlineInventory2} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import {LiaCartArrowDownSolid, LiaStampSolid, LiaUsersSolid} from "react-icons/lia";
import {VscGraphLine} from "react-icons/vsc";
import {FcShop} from "react-icons/fc";
import {LuLayoutDashboard} from "react-icons/lu";

// eslint-disable-next-line react/prop-types
export default function DashboardSideBar({ isOpen, toggleSidebar }) {
    if (!isOpen) return null;
    const token = localStorage.getItem("byose_client_token");
    return (
        <Sidebar aria-label="Sidebar with call to action button example" className="h-full bg-[#FFF]">
            <Sidebar.CTA className="my-1" onClick={toggleSidebar}>
                <div className="flex items-center justify-start text-center gap-2">
                    <TbHexagonLetterB size={32} className="my-auto"/><p className="my-auto pt-2" >Tap to close</p>
                </div>
            </Sidebar.CTA>
            <div></div>
            <Sidebar.Items >
                <Sidebar.ItemGroup className=" flex flex-col gap-2">
                    <Sidebar.Item href="/" className=" justify-start align-middle"  icon={SiHomebridge}>
                        Home
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard" className=" justify-start align-middle"  icon={LuLayoutDashboard}>
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/inventory" className=" justify-start align-middle" icon={MdOutlineInventory2}>
                        Stock
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/orders" className=" justify-start align-middle" icon={LiaCartArrowDownSolid}>
                        Orders
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/stamp" className=" justify-start align-middle" icon={LiaStampSolid}>
                        complete Order
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/customers" className=" justify-start align-middle" icon={LiaUsersSolid}>
                        Customers
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/shop" className=" justify-start align-middle" icon={FcShop}>
                        Shop Details
                    </Sidebar.Item>
                    <Sidebar.Item href="/dashboard/reports" className=" justify-start align-middle" icon={VscGraphLine}>
                        Reports
                    </Sidebar.Item>
                    {!token&&
                        <Sidebar.Item href="/login" className=" justify-start align-middle" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>}

                    {token&&<Sidebar.Item href="#" className=" justify-start align-middle" icon={FiLogOut}>
                        Log out
                    </Sidebar.Item>}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
            {/*<Sidebar.CTA>*/}
            {/*    <div className="mb-3 flex items-center">*/}
            {/*        <Badge color="warning">Beta</Badge>*/}
            {/*        <button*/}
            {/*            aria-label="Close"*/}
            {/*            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"*/}
            {/*            type="button"*/}
            {/*        >*/}
            {/*            <svg*/}
            {/*                aria-hidden*/}
            {/*                className="h-4 w-4"*/}
            {/*                fill="currentColor"*/}
            {/*                viewBox="0 0 20 20"*/}
            {/*                xmlns="http://www.w3.org/2000/svg"*/}
            {/*            >*/}
            {/*                <path*/}
            {/*                    fillRule="evenodd"*/}
            {/*                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z"*/}
            {/*                    clipRule="evenodd"*/}
            {/*                />*/}
            {/*            </svg>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">*/}
            {/*        Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.*/}
            {/*    </div>*/}
            {/*    <a*/}
            {/*        className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"*/}
            {/*        href="#"*/}
            {/*    >*/}
            {/*        Turn new navigation off*/}
            {/*    </a>*/}
            {/*</Sidebar.CTA>*/}
        </Sidebar>
    );
}
