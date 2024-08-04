import { BsInboxes } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import {fetchData, updateData} from "../../utils/helpers.js";
import { developmentSevers } from "../../services/api.js";
import { Button } from "flowbite-react";
import {FadeLoader} from "react-spinners";
import {FaEdit} from "react-icons/fa";
import {usePopup} from "../../context/PopupContext.jsx";

function Inventory() {
    const token = localStorage.getItem('byose_client_token');
    const { showPopup } = usePopup();
    const [inventories, setInventories] = useState([]);
    const [loader, setLoader] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${developmentSevers.activities}/api/inventory`, token);
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    const formattedData = result.data.inventories.map(inventory => ({
                        id: inventory.id,
                        productId: inventory.product._id,
                        product: inventory.product.name,
                        category: inventory.product.category,
                        quantity: inventory.quantity,
                        sellingPrice: inventory.product.sellingPrice,
                        isPublished: inventory.product.isPublished,
                    }));

                    // Extract unique categories
                    const uniqueCategories = [...new Set(result.data.inventories.map(inventory => inventory.product.category))];

                    setInventories(formattedData);
                    setCategories(uniqueCategories);
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            }finally {
                setLoader(false)
            }
        }
        main();
    }, [token,showPopup]);

    // Calculating the summary values
    const totalProducts = inventories.length;
    const inStoreProducts = inventories.filter(inventory => inventory.quantity > 5).length;
    const lowStockProducts = inventories.filter(inventory => inventory.quantity <= 5).length;

    // eslint-disable-next-line no-unused-vars
    async function handlePublish(id,isPublished) {
        try {
            const result = await updateData(`${developmentSevers.activities}/api/products/publish/${id}`, {isPublished}, token);
            if (result.error) {
                showPopup(result.error,"#00ff00","#fff");
            } else {
                showPopup(result.data.message,"#00ff00","#fff");
            }
        } catch (error) {
            showPopup(error.message,"#00ff00","#fff");
        }finally {
            setLoader(false);
        }
    }

    // eslint-disable-next-line no-unused-vars
    const columns = [
        { field: 'product', headerName: 'Product Name', width: 210 },
        { field: 'quantity', headerName: 'Quantity', width: 200 },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'sellingPrice', headerName: 'Price', width: 110 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params) => (
                params.row.isPublished ? (
                    <div className={`flex flex-row gap-2 justify-between`}>
                        <Button className={`bg-red-600 active:scale-110`} onClick={() => handlePublish(params.row.productId,false)}>
                            Unpublish
                        </Button>
                        <a href={`/dashboard/product/edit/${params.row.productId}`} className={`text-[#000] active:scale-110`} >
                            <FaEdit size={20} />
                        </a>
                    </div>
                ) : (
                    <div className={`flex flex-row gap-2 justify-between`}>
                        <Button className={`bg-[#166534] active:scale-110`} onClick={() => handlePublish(params.row.productId,true)}>
                            Publish
                        </Button>
                        <a href={`/dashboard/product/edit/${params.row.productId}`} className={`text-[#000] active:scale-110`}>
                            <FaEdit size={20} />
                        </a>
                    </div>
                )
            ),
        },
    ];

    return (
        <div className="pb-6 px-4 flex flex-col gap-4 overflow-x-hidden">
            <div className={`order-1`}>
                <div className="flex flex-row gap-2 p-4 px-0 container mx-auto">
                    <LuLayoutDashboard/>
                    <a href={`/dashboard`}>Dashboard</a>
                    <IoIosArrowForward/>
                    <a href="/dashboard/inventory">Stock</a>
                </div>
                <div className={`flex justify-between container mx-auto`}>
                    <h1 className={`flex gap-4 text-[#000] md:text-2xl text-xl font-bold`}>Stock Summary</h1>
                    <a href={`/dashboard/new-product`}
                       className={`flex gap-4 px-3 pt-2 rounded-md md:text-xl text-sm font-medium bg-[#166534] text-white`}>
                        Add new Product
                    </a>
                </div>
            </div>
            {!loader && <div className={`container mx-auto md:grid md:grid-cols-5 flex-col gap-4 md:order-2  order-3`}>
                <div className={`p-5 bg-white rounded-xl mb-3 col-span-2 h-full`}>
                    <h2 className={`flex gap-4 text-[#000] text-2xl font-bold `}><BsInboxes size={30}/>Products Summary
                    </h2>
                    <div className={`grid grid-cols-3 md:gap-8 gap-4 my-3`}>
                        <div className={`flex flex-col gap-2`}>
                            <span className={`text-md`}>All Product</span>
                            <span className={`text-3xl font-extrabold`}>{totalProducts}</span>
                        </div>
                        <div className={`flex flex-col gap-2`}>
                            <span className={`text-md`}>In Store</span>
                            <span className={`text-3xl font-extrabold`}>{inStoreProducts}</span>
                        </div>
                        <div className={`flex flex-col gap-2`}>
                            <span className={`text-md`}>Low In Stock</span>
                            <span className={`text-3xl font-extrabold`}>{lowStockProducts}</span>
                        </div>
                    </div>
                </div>
                <div className={` bg-white rounded-xl p-5 col-span-3 h-full`}>
                    <h2 className={`flex gap-4 text-[#000] text-2xl font-bold `}><MdOutlineCategory size={30} />Categories</h2>
                    <div className="flex md:gap-6 gap-4 my-3 overflow-x-auto whitespace-nowrap">
                        {categories.map((category, index) => (
                            <span key={index} className="inline-block md:px-6 px-5 pt-4 pb-2 bg-white border-[1.2px] rounded-md">
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </div>}
            {/* Inventory List */}
            {!loader&&<div className={`relative bg-white rounded-md container mx-auto overflow-x-scroll md:order-3 order-2`}>
                <div style={{ height: 500, width: '100%' }} className={`relative `}>
                    <DataGrid
                        rows={inventories}
                        columns={columns}
                        pageSize={6}
                        components={{
                            Toolbar: GridToolbarExport,
                        }}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </div>}
            {loader&&<div className={`container  mx-auto flex justify-center align-middle items-center min-h-[50vh]`}>
                <FadeLoader color="#166534" size={30} />
            </div>}
        </div>
    );
}

export default Inventory;
