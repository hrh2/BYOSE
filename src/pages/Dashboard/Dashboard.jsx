import DashBoardBg from "../../components/Badge/DashBoardBg.jsx";
import {FaClipboardList} from "react-icons/fa";
import SpecialCardBg from "../../components/Badge/SpecialCardBg.jsx";
import ShopCard from "../../components/Badge/ShopCard.jsx";
import QuantityBg from "../../components/Badge/QuantityBg.jsx";
import {GiExpense, GiOpenChest} from "react-icons/gi";
import {MdEventAvailable, MdOutlineInventory2, MdOutlineUnpublished, MdProductionQuantityLimits} from "react-icons/md";
import {FcMoneyTransfer, FcPackage} from "react-icons/fc";
import {LuLayoutDashboard} from "react-icons/lu";
import ProductCard03 from "../../components/Product/Cards/ProductCard03.jsx";
import {useEffect, useState} from "react";
import {fetchData} from "../../utils/helpers.js";
import {servers} from "../../services/api.js";
import {FadeLoader} from "react-spinners";
import {usePopup} from "../../context/PopupContext.jsx";

function Dashboard() {
    const token = localStorage.getItem('byose_client_token');
    const { showPopup } = usePopup();
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${servers.activities}api/dashboard/vendor`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    setData(result.data);
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            } finally {
                setLoader(false);
            }
        }
        main();
    }, [token]);
    return (
    <div className={`flex flex-col gap-4 py-6 transition-all`}>
            <div className="flex flex-row gap-2 p-4 container mx-auto">
                <LuLayoutDashboard/>
                <a href={`/dashboard`}>Dashboard</a>
            </div>
        {data&& <div className={`flex flex-col gap-4`}>
            <div className={`container mx-auto md:flex md:flex-row  grid  gap-4 md:pl-[5%] p-5`}>
                <SpecialCardBg
                    title3= {`${data.customers} Customers`}
                    title4 = {`${data.totalProducts} Product`}
                    title1={`P : ${data.position}, Many opportunities awaiting`}
                    title2={`Keep it up`}
                />
            </div>
            <div className={`container mx-auto px-4 flex`}>
                <ShopCard vendor={data.vendor}/>
            </div>
            <div className={`container mx-auto md:flex md:flex-row  grid  gap-4 p-4`}>
                <DashBoardBg title="TO BE PACKED" subtitle="orders" link={"/dashboard/orders"} icon={<GiOpenChest/>}
                             value={data.unpacked}/>
                <DashBoardBg title="TO BE PICKED" subtitle="orders" link={"/dashboard/orders"} icon={<FaClipboardList/>}
                             value={data.packed}/>
                <DashBoardBg title="OUT OF STOCK" subtitle="product" link={"/dashboard/inventory"}
                             icon={<MdOutlineInventory2/>}
                             value={data.outOfStockProducts}/>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <DashBoardBg title="TO BE PUBLISHED" subtitle="products" link={"/dashboard/inventory"}
                             icon={<MdOutlineUnpublished/>}
                             value={data.unPublished}/>
            </div>
            <div className={`container mx-auto md:flex md:flex-row  grid  gap-4  p-5`}>
                <QuantityBg title={"Orders"} value={data.order} icon={<FcPackage size={40} className={`my-auto`}/>}/>
                <QuantityBg title={"Total Revenue"} value={data.totalRevenue}
                            icon={<FcMoneyTransfer size={40} className={`my-auto`}/>}/>
                <QuantityBg title={"Total Expense"} value={data.totalExpense}
                            icon={<GiExpense size={40} className={`my-auto`}/>}/>
                <QuantityBg title={"In Stock"} value={data.inStockProducts}
                            icon={<MdEventAvailable size={40} className={`my-auto`}/>}/>
                <QuantityBg title={"Re Stock"} value={data.lowStockProducts}
                            icon={<MdProductionQuantityLimits size={40} className={`my-auto`}/>}/>
            </div>
            <div className="overflow-x-auto bg-white dark:bg-black py-5 px-3">
                <div
                    className="container mx-auto grid grid-flow-col auto-cols-[90%] sm:auto-cols-[60%] md:grid-cols-4 gap-4">
                    {data.inventories.slice(2, 6).map((inventory, index) => (
                        <ProductCard03 key={index} inventory={inventory} product={inventory.product}
                                       s={"border-[3px] rounded-md md:p-5 md:w-full sm:w-[90%] w-[100%] p-4"}/>
                    ))}
                </div>
            </div>
        </div>}
        {loader&&<div className={`container  mx-auto flex justify-center align-middle items-center min-h-[50vh]`}>
            <FadeLoader color="#166534" size={30} />
        </div>}
    </div>
    );
}

export default Dashboard;