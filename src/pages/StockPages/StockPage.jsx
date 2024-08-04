import Shop01 from "../../components/Product/Cards/Shop01.jsx";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/helpers.js";
import { developmentSevers } from "../../services/api.js";
import {IoIosArrowForward} from "react-icons/io";
import {usePopup} from "../../context/PopupContext.jsx";

function StockPage() {
    const token = localStorage.getItem('byose_client_token');
    const { showPopup } = usePopup();
    const [vendors, setVendors] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${developmentSevers.activities}/api/vendors`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    setVendors(result.data.vendors);
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            }finally {
                setLoader(false)
            }
        }
        main();
    }, []);

    return (
        <div className="max-w-full mx-auto flex flex-col md:py-6">
            <div className="container mx-auto flex flex-row gap-2 pb-4">
                <a href={`/`}>Home</a><IoIosArrowForward/><a href="/shops">Shops</a>
            </div>
            <div className="overflow-x-auto bg-white py-5 px-3 flex flex-col gap-4">
                <div className="container mx-auto flex flex-col gap-4">
                    {Array(Math.ceil(vendors.length / 4)).fill().map((_, rowIndex) => (
                        <div key={rowIndex} className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto">
                            {vendors.slice(rowIndex * 4, rowIndex * 4 + 4).map((vendor, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="flex-shrink-0 flex-grow-0 md:flex-basis-auto py-4"
                                >
                                    <Shop01 vendor={vendor}  className={`md:w-full sm:w-[60vw] w-[90vw]`}/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StockPage;
