import React, {useState} from "react";
import Axios from 'axios'
import {servers} from "../../services/api.js";
import {usePopup} from "../../context/PopupContext.jsx";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";
export default function LoginPage() {
    const { showPopup } = usePopup();
    const { inputValue } = useInput();
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({
        email_phone: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);
        try {
            const response = await Axios.post(`${servers.activities}api/login`, data);
            const token = response.data.token;
            showPopup(response.data.message,"#00ff00","#fff");
            localStorage.setItem('byose_client_token', token);
            setTimeout(() => {
                window.location = "/";
            }, 1000);
        } catch (error) {
                showPopup(JSON.stringify(error.response.data.message?error.response.data.message:error.message),"#00ff00","#fff");
        }finally {
            setLoader(false)
        }
    };
    return (
  <div className="min-h-[60vh] py-8 flex flex-col gap-2 items-center justify-center w-full dark:bg-gray-950">
      {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
      <div className="bg-white dark:bg-gray-900  px-8 py-6 md:w-[40%] sm:w-[60%] w-[90%]">
          <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200 flex gap-5 justify-center">Login <a href={`/register`} className="text-[#9CA3AF] cursor-pointer">Register</a></h1>
          <p className="text-center py-4">If you have an account, sign in with your username or email address.</p>
          <form action="#" onSubmit={handleOnSubmit}>
              <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                  <input type="text" name={`email_phone`} value={data.email_phone} onChange={handleChange}  id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Email or Phone Number" required/>
              </div>
              <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                  <input type="password" name={`password`} value={data.password} onChange={handleChange} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
                  {/* <a href="#"
                      className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
                      Password?</a> */}
              </div>
              <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" readOnly checked={true}/>
                      <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#"
                      className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Lost you Password?  
                    </a>
              </div>
              {!loader&&<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#166534] active:scale-105" disabled={loader}>Login</button>}
          </form>
      </div>
      </div>
    )
  }
  