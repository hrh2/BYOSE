import {useState} from "react";
import Axios from "axios";
import {developmentSevers} from "../../services/api.js";
import Dropzone from "react-dropzone";
import {FaPlus} from "react-icons/fa6";
import {FaCloudUploadAlt} from "react-icons/fa";
import {usePopup} from "../../context/PopupContext.jsx";


export default function RegisterPage() {
	const { showPopup } = usePopup();
	const [loader, setLoader] = useState(false);
	const [image,setImage]=useState(null)
	const [data, setData] = useState({
		email: '',
		phone: '',
		role: '',
		password: '',
		userFirstName: '',
		userLastName: '',
		storeName: '',
		storeDescription: '',
		userProfile:''
	});

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoader(true);
		try {
			data.userProfile = image;
			const response = await Axios.post(`${developmentSevers.activities}/api/register`, data);
			const token = response.data.token;
			showPopup(response.data.message, "#00ff00", "#fff");
			localStorage.setItem('byose_client_token', token);
			setTimeout(() => {
				window.location = "/";
			}, 6000);
		} catch (error) {
			showPopup(JSON.stringify(error.response?.data?.message || error.message), "#ff0000", "#fff");
		} finally {
			setLoader(false);
		}
	};

	const imageDivStyle = {
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "10rem", // Adjust the width and height as needed
		height: "10rem",
	};
	const handleDrop = (acceptedFiles) => {
		const file = acceptedFiles[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			setImage(event.target.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};
  return (
<div className="py-8 flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 rounded-lg px-8 py-6 md:w-[40%] sm:w-[60%] w-[90%]">
	<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200 flex gap-5 justify-center"><a href={`/login`} className="text-[#9CA3AF] cursor-pointer">Login</a> Register</h1>
	<p className="text-center py-4">There are many advantages to creating an account: the payment process is
			faster, product tracking is possible and much more.</p>
		<form action="#" onSubmit={handleSubmit}>
			<div className="mb-4">
				<label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
				<input type="number" id="phone" name={`phone`} value={data.phone} onChange={handleOnChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="250 788 000 000" required/>
			</div>
			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" id="email" name={`email`} value={data.email} onChange={handleOnChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required/>
			</div>
			<div className="mb-4">
				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" id="password" name={`password`} value={data.password} onChange={handleOnChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
			</div>
			<div className="flex items-start gap-4 flex-col mb-4">
				<div className="flex items-center">
					<input type="radio" id="remember" name={`role`} value="CUSTOMER" onChange={handleOnChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" required/>
					<label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">I am a Customer</label>
				</div>
				<div className="flex items-center">
					<input type="radio" id="remember" name={`role`} value="VENDOR" onChange={handleOnChange} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" required/>
					<label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">I am a vendor</label>
				</div>
			</div>
			{data.role==='VENDOR'?<div>
				<h2 className={`text-[] text-center font-bold`}>Complete other Details as a Vendor</h2>
				<div className="mx-auto w-[10rem] aspect-square">
					<Dropzone onDrop={handleDrop} accept="image/*">
						{({getRootProps, getInputProps}) => (
							<div
								{...getRootProps()}
								className="w-full h-full rounded-full border-[2px] relative bg-white text-center flex items-center box-shadow"
								style={imageDivStyle}
							>
								<input {...getInputProps()} type={"file"}/>
								{image ? null : (
									<p className="text-black text-center w-full grid grid-flow-row">
										<FaCloudUploadAlt size={30} className="mx-auto"/>
										<span className="italic">Drop or Tap to upload</span>

									</p>
								)}<FaPlus size={25} className=" absolute bottom-3 right-2 text-slate-500"/>
								<FaPlus size={25} className=" absolute bottom-3 right-2 text-slate-500"/>
							</div>
						)}
					</Dropzone>
				</div>
				<div className="flex items-start gap-4">
					<div className="">
						<label htmlFor="firstname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Fist name</label>
						<input type="text" id="firstname" name={`userFirstName`} value={data.userFirstName} onChange={handleOnChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="First name" required/>
					</div>
					<div className="">
						<label htmlFor="lastname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last name</label>
						<input type="text" id="lastname" name={`userLastName`} value={data.userLastName} onChange={handleOnChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Last name" required/>
					</div>
				</div>
				<div className="my-4">
					<label htmlFor="storename" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Store Name</label>
					<input type="text" id="storename" name={`storeName`} value={data.storeName} onChange={handleOnChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
				</div>
				<div className="my-4">
					<label htmlFor="storeDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Store Description</label>
					<input type="text" id="storeDescription" name={`storeDescription`} value={data.storeDescription} onChange={handleOnChange} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
				</div>
			</div>:null}
			<p className="text-center py-4">Your personal data will be used to support your experience throughout this
				website, to manage access to your account, and for other purposes described in
				our <a href="#" className="text-blue-600">Privacy policy,Terms & Conditions</a>
			</p>
			{loader ? <p className={`text-green-700 font-extrabold text-7xl text-center`}>...</p> : ""}
			{!loader && <button type="submit"
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#166534] active:scale-105"
								disabled={loader}>Sign up</button>}
		</form>
	</div>
</div>
  )
}
