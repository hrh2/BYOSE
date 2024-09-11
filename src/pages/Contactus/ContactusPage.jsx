import 'tailwindcss/tailwind.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaCreditCard, FaTags, FaShieldAlt, FaShippingFast } from 'react-icons/fa';
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";
import React from "react";

export default function ContactPage(){
  const { inputValue } = useInput();
  return (
    <div className="container mx-auto p-6">
      {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
      <h2 className="text-3xl font-bold text-center mb-8">You can ask us questions</h2>
      <p className="text-center mb-4">Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.</p>
      <hr/>
      <div className="flex flex-wrap justify-between py-4">
        <div className="w-full md:w-1/2 px-3 py-4" >
          <h3 className="text-lg font-semibold mb-2">Our Offices</h3>
          <p className="mb-4">On deaktunje myukutat mora even am akuratist. Sematrde finrahen reta. Radlogen pasam inte loba ievm om perorade i gramerad traditional specialitet til bebel. Ev s sönde. Tum gps-vist art epiligt. Dilagt trek dria. Ers blow dyrles.</p>
          <div className="mb-4">
            <h4 className="font-bold">United States</h4>
            <p>United States Office</p>
            <p>205 Middle Road, 2nd Floor, New York</p>
            <p>+02 1234 567 88</p>
            <p>info@example.com</p>
          </div>
          <div className='pb-4'>
            <h4 className="font-bold">Munich</h4>
            <p>Munich States Office</p>
            <p>205 Middle Road, 2nd Floor, New York</p>
            <p>+5 456 123 22</p>
            <p>contact@example.com</p>
          </div>
          <hr/>
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <h3 className="text-lg font-semibold mb-2">Contact Form</h3>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your name *"
                className="w-1/2 p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your email *"
                className="w-1/2 p-2 border border-gray-300 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Subject *"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-[#166534] hover:scale-105 active:scale-110 text-white px-4 py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-start space-x-4 mb-8">
        <p>Follow us :</p>
        <a href="#" className="text-blue-500"><FaFacebookF /></a>
        <a href="#" className="text-blue-400"><FaTwitter /></a>
        <a href="#" className="text-blue-700"><FaLinkedinIn /></a>
      </div>
      <div className="flex justify-between mt-8">
        <div className="text-center ">
          <FaCreditCard className="text-2xl mb-2 mx-auto" />
          <p>Payment only online</p>
        </div>
        <div className="text-center">
          <FaTags className="text-2xl mb-2 mx-auto" />
          <p>New stocks and sales</p>
        </div>
        <div className="text-center">
          <FaShieldAlt className="text-2xl mb-2 mx-auto" />
          <p>Quality assurance</p>
        </div>
        <div className="text-center">
          <FaShippingFast className="text-2xl mb-2 mx-auto" />
          <p>Delivery from 1 hour</p>
        </div>
      </div>
    </div>
  );
}


