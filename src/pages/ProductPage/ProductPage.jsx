import img from '../../assets/images/beverage.png'
import Discount from '../../components/Badge/Discount'
import Star from '../../components/Badge/Star'
import IncreaseDecrease from '../../components/Buttons/IncreaseDecrease'
import AddToCart01 from '../../components/Buttons/AddToCart01'
import BuyProduct from '../../components/Buttons/BuyProduct'
import Timer from '../../components/Badge/Timer'
import Payment from '../../components/Badge/Payment'
import { FaRegHeart } from 'react-icons/fa'
import { RiShare2Line } from 'react-icons/ri'
import TabComponent from '../../components/Badge/TabComponent'
import {useParams} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import React, {useEffect, useState} from "react";
import { capitalizeLastThreeLetters, fetchData} from "../../utils/helpers.js";
import {servers} from "../../services/api.js";
import {FadeLoader} from "react-spinners";
import {usePopup} from "../../context/PopupContext.jsx";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";
export default function ProductPage() {
    const { inputValue } = useInput();
    const {productID} = useParams()
    const { showPopup } = usePopup();
    const token = localStorage.getItem('byose_client_token');
    const [inventory, setInventory] = useState(null);
    const [reviews,setReviews] = useState([])
    const [image,setImage] =  useState(null)
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        async function main() {
            try {
                setLoader(true);
                const result = await fetchData(`${servers.activities}/api/inventory/${productID}`, token);
                const reviews = await fetchData(`${servers.activities}/api/reviews/${productID}`, token)
                if (result.error) {
                    showPopup(result.error,"#00ff00","#fff");
                } else {
                    setInventory(result.data.inventory);
                    setImage(result.data.inventory.product.images[0]);
                    setReviews(reviews.data.reviews)
                }
            } catch (error) {
                showPopup(error.message,"#00ff00","#fff");
            } finally {
                setLoader(false);
            }
        }
        main();
    }, [productID, token]);

    const handleImageViewer = (image)=> {
        setImage(image);
    }

    return (
      <div className='w-[100vw] flex- flex-col gap-2 bg-white dark:bg-black text-[#000] dark:text-[#fff]'>
          <div className=" flex flex-row gap-2 py-4 container mx-auto">
              <a href={`/`}>Home</a>
              <IoIosArrowForward/>
              <a href="/products">Products</a>
              <IoIosArrowForward/>
              <a href={`/products/${productID}`}>...{capitalizeLastThreeLetters(productID)}</a>
          </div>
          {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
          {/* 2 div */}
          {!loader ? inventory && <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full p-3'>
              <div className='flex flex-col gap-2'>
                  <img src={inventory?image:img} className='mx-auto min-w-[60%]' alt="banan"/>
                  <div className='flex justify-center gap-3'>
                      {inventory?inventory.product.images.map((image,index)=> (
                          <div key={index} onClick={()=>handleImageViewer(image)} className='aspect-square h-20 rounded-md hover:scale-105 active:scale-110 bg-[#00000011] bg-contain bg-no-repeat bg-center' style={{backgroundImage:`url(${image})`}}>
                          </div>
                      )) : null}
                  </div>
              </div>
              <div className='flex flex-col gap-3'>
                  <h2 className='font-bold md:text-[41px] text-[#030712] dark:text-[#fcf8ed]'>{inventory?inventory.product.name:"waiting ..."}</h2>
                  <div>
                      <Star percentage={inventory?inventory.product.productRate:0}/>
                  </div>
                  <hr/>
                  {/*<p className='text-[#4B5563]'>*/}
                  {/*    {inventory?inventory.product.:"waiting ..."}*/}
                  {/*</p>*/}
                  <div>
                      <Discount current={56} old={35}/>
                  </div>
                  <div>
                      {false&&<button className='text-white p-3 font-bold bg-[#16A34A] rounded-md'>Order on WhatsApp</button>}
                  </div>
                  {false&&<Timer/>}
                  <div className='md:flex gap-4 md:flex-row justify-start p-3'>
                      <IncreaseDecrease/><AddToCart01/><BuyProduct/>
                  </div>
                  <div className=' flex flex-col'>
                      <Payment/>
                  </div>
                  <div className='flex gap-4'>
                      <div className='flex gap-2'>
                          <FaRegHeart size={38}
                                      className=' p-1 border-[#E5E7EB] hover:scale-110 active:scale-105 border-[1px] rounded-md my-auto'/>
                          <p className='text-[#030712] font-medium justify-center my-auto pt-2'>Add to wishlist</p>
                      </div>
                      <div className='flex gap-2'>
                          <RiShare2Line size={38}
                                        className=' p-1 border-[#E5E7EB] hover:scale-110 active:scale-105 border-[1px] rounded-md my-auto'/>
                          <p className='text-[#030712] font-medium justify-center my-auto pt-2'>Share this Product</p>
                      </div>
                  </div>
              </div>
          </div> :
              <div className={`container  mx-auto flex justify-center align-middle items-center min-h-[50vh]`}>
                  <FadeLoader color="#166534" size={30}/>
              </div>
          }
          {/*  */}
          {/*Description and reviews  */}
          <div className='pb-8'>
              {!loader?inventory&&<TabComponent product={inventory.product} reviews = {reviews}  />:null}
          </div>
      </div>
  )
}
