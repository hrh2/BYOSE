import Dropzone from "react-dropzone";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { developmentSevers } from "../../services/api.js";
import { sendData } from "../../utils/helpers.js";
import { productCategories } from "../../assets/data/productCategories.js";
import { productUnits } from "../../assets/data/ProductUnits.js";
import { supportedOrders } from "../../assets/data/TypesOfOrders.js";
import {PropagateLoader} from "react-spinners";
import {usePopup} from "../../context/PopupContext.jsx";


function NewProduct() {
    const token = localStorage.getItem('byose_client_token');
    const { showPopup } = usePopup();
    const [loader, setLoader] = useState(false);
    const [imageArray, setImageArray] = useState([null, null, null]);

    const [data, setData] = useState({
        name: "",
        category: productCategories[0].name,
        sellingPrice: 0,
        costPrice: 0,
        quantity: 0,
        quantityType: productUnits[0].unitName,
        orderType: supportedOrders[0].name,
        description:'',
        isDiscountEnabled: false,
        isPublished:false,
        images: [],
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'sellingPrice' || name === 'costPrice' || name === 'quantity' || name === 'discount') {
            if (isNaN(value) || value < 0) {
                showPopup(`${name} must be a positive number.`,"#00ff00","#fff");
                return;
            }
        }
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleOnSubmit = async (event, isPublish) => {
        event.preventDefault();
        if (imageArray.some(image => image === null)) {
            showPopup("Please provide three images.","#00ff00","#fff");
            return;
        }

        if (data.sellingPrice <= 0 || data.costPrice <= 0 || data.quantity <= 0) {
            showPopup("Please provide valid values for price and quantity","#00ff00","#fff");
            return;
        }

        try {
            setLoader(true);
            data.images = imageArray;
            data.isPublished = isPublish;
            const result = await sendData(`${developmentSevers.activities}/api/products`, data, token);
            if (result.error) {
                showPopup(result.error,"#00ff00","#fff");
            } else {
                showPopup(result.message,"#00ff00","#fff");
                setTimeout(() => {
                    window.location.reload();
                },1000);
            }
        } catch (error) {
            showPopup(error.message,"#00ff00","#fff");
        }finally {
            setLoader(false);
        }
    };

    const handleDrop = (index, acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const updatedArray = [...imageArray];
                updatedArray[index] = event.target.result;
                setImageArray(updatedArray);
            };

            reader.readAsDataURL(file);
        } else {
            showPopup('Invalid file type. Please upload PNG, JPG, or JPEG files only.',"#00ff00","#fff");
        }
    };


    const renderImageUploader = (index) => {
        const divStyles = {
            backgroundImage: `url(${imageArray[index]})`,
        };

        return (
            <div key={index} className={`mx-auto w-full  ${index===0?'col-span-2':''}`}>
                <Dropzone onDrop={(acceptedFiles) => handleDrop(index, acceptedFiles)} accept="image/png, image/jpeg">
                    {({ getRootProps, getInputProps }) => (
                        <div
                            {...getRootProps()}
                            className=" w-full mx-auto bg-[#D9D9D950] aspect-square border-[2px] border-dashed rounded-lg bg-cover bg-center  text-center flex items-center"
                            style={divStyles}
                        >
                            <input {...getInputProps()} />
                            {imageArray[index] ? null : (
                                <p className="text-black text-center w-full grid grid-flow-row">
                                    <FaPlus size={25} className="mx-auto text-slate-500" />
                                </p>
                            )}
                        </div>
                    )}
                </Dropzone>

            </div>
        );
    };
    return (
        <form className={`flex flex-col gap-4 pb-6`} >
            <div className="flex flex-row gap-2 p-4 md:px-0 container mx-auto">
                <LuLayoutDashboard />
                <a href={`/dashboard`}>Dashboard</a>
                <IoIosArrowForward />
                <a href="/dashboard/inventory">Stock</a>
                <IoIosArrowForward />
                <a href="/dashboard/new-product">New Product</a>
            </div>
            <div className={`container mx-auto flex justify-between bg-white p-4`}>
                <h2 className={`text-black font-bold text-xl`}>New Product Item</h2>
                    {!loader&&
                    <div className={`flex  gap-3`}>
                            <button type={`button`} onClick={(event) => handleOnSubmit(event, false)} className={` bg-[#166534]  pt-2 px-2 text-white font-bold rounded-md hover:bg-green-600`}>Save</button>
                            <button type={`button`} onClick={(event) => handleOnSubmit(event, true)} className={`bg-[#166534] pt-2 px-2 text-white font-bold rounded-md hover:bg-green-600`}>Save and Publish</button>
                    </div>
                    }
            </div>
            {loader&&<div className={`flex align-middle justify-center items-center py-2`}>
                <PropagateLoader color={`#166534`}/>
            </div>}
            <div className={`container mx-auto grid md:grid-cols-9 grid-cols-1 gap-4 px-4 pt-3 bg-white`}>
                <div className={` col-span-6 grid md:grid-cols-2 gap-4 grid-cols-1`}>
                    <div className={`flex flex-col gap-4`}>
                        <div className="w-full">
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Product Name</label>
                            <input type="text" id="name" name={`name`} value={data.name} onChange={handleOnChange}
                                   className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]"
                                   placeholder="Product name" required/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Product Category</label>
                            <select id="category" name="category" value={data.category} onChange={handleOnChange}
                                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]" required={true}>
                                {productCategories.map(category => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className={`flex flex-row gap-3`}>
                            <div className="w-full">
                                <label htmlFor="sellingPrice"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Selling
                                    Price</label>
                                <input type="number" id="sellingPrice" name={`sellingPrice`} value={data.sellingPrice}
                                       onChange={handleOnChange}
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]"
                                       placeholder="Selling Price" required/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="costPrice"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cost
                                    Price</label>
                                <input type="number" id="costPrice" name={`costPrice`} value={data.costPrice}
                                       onChange={handleOnChange}
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]"
                                       placeholder="Cost Product" required/>
                            </div>
                        </div>
                        <div className={`flex flex-row gap-3`}>
                            <div className="w-full">
                                <label htmlFor="quantity"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Quantity
                                    in Stock</label>
                                <input type="number" id="quantity" name={`quantity`} value={data.quantity}
                                       onChange={handleOnChange}
                                       className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]"
                                       placeholder="Quantity in Stock" required/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="quantityType"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Unit
                                    of Quantity</label>
                                <select id={`quantityType`} name="quantityType" value={data.quantityType}
                                        onChange={handleOnChange}
                                        className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]" required={true}>
                                    {productUnits.map(unit => (
                                        <option key={unit.id}  value={unit.unitName}>{unit.unitName},({unit.unitAcronym})</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="orderType"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type of
                                Order</label>
                            <select id="orderType" name="orderType" value={data.orderType} onChange={handleOnChange}
                                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]" required={true}>
                                {supportedOrders.map(order => (
                                    <option key={order.id} value={order.name}>{order.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-4`}>
                        <div className={`container mx-auto bg-white p-4 grid grid-cols-1 gap-4`}>
                            <div className="w-full">
                                <label htmlFor="productDescription"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Product Description</label>
                                <textarea id={`productDescription`}
                                          rows={6}
                                          name="description" value={data.description} onChange={handleOnChange}
                                          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  bg-[#D9D9D950]"
                                          placeholder="Provide the product description and details"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-span-3 w-full grid grid-cols-1 gap-3  md:p-6 sm:p-4 p-3`}>
                    <div className={` w-full mx-auto grid grid-cols-2 gap-3`}>
                        {imageArray.map((_, index) => renderImageUploader(index))}
                    </div>
                </div>
            </div>

        </form>
    );
}

export default NewProduct;
