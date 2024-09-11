import React from 'react';
import {IoIosArrowForward} from "react-icons/io";
import {useInput} from "../../context/InputContext.jsx";
import SearchComponent from "../../components/SearchingSorting/SearchComponent.jsx";

// Combined object for category details
const categoryDetails = {
    "Electronics": {
        image: "https://blog.learningbix.com/wp-content/uploads/2022/06/applications-of-electronics.png",
        examples: "Mobile Phones, Laptops, Cameras"
    },
    "Fashion": {
        image: "https://www.leonandbird.com.au/cdn/shop/articles/What-is-fast-fashion_1024x1024.webp?v=1653465282",
        examples: "Men's Clothing, Women's Clothing, Shoes"
    },
    "Home & Furniture": {
        image: "https://essentialhome.eu/images/homepage/new-new/extraordinary-projects/1-extraordinary-projects.webp?1721433600060",
        examples: "Sofas, Beds, Tables"
    },
    "Beauty & Personal Care": {
        image: "https://www.unilever.com/content-images/92ui5egz/production/e800a8eabc6f17a0eaed1bf6621b46aefa57b8cb-990x557.jpg?rect=0,19,990,520&w=1200&h=630&fm=jpg",
        examples: "Skincare, Haircare, Makeup"
    },
    "Health & Wellness": {
        image: "https://www.homefitnesscode.com/cdn/shop/articles/various_fitness_equipment_600x.jpg?v=1622715620",
        examples: "Supplements, Fitness Equipment"
    },
    "Sports & Outdoors": {
        image: "https://drstankovich.com/wp-content/uploads/2016/09/bigstock-Assorted-Sports-Equipment-On-B-6433490.jpg",
        examples: "Sports Gear, Camping Equipment"
    },
    "Toys, Kids & Baby": {
        image: "https://cdn.24.co.za/files/Cms/General/d/6120/1b2f79712f9948b19f0f14b08aa8e79c.jpg",
        examples: "Toys, Baby Gear"
    },
    "Automotive": {
        image: "https://carsblare.com/wp-content/uploads/2019/01/Discount-Auto-Parts.jpg",
        examples: "Car Accessories, Tools"
    },
    "Books, Music & Movies": {
        image: "https://cbs2iowa.com/resources/media/9fd65353-b8ea-47bf-9af5-7ec18460c460-medium16x9_Movies2020.jpg?1609196035289",
        examples: "Books, Music CDs, Movies"
    },
    "Groceries & Gourmet Food": {
        image: "https://food.fnr.sndimg.com/content/dam/images/food/products/2021/7/22/rx_misfits-market.jpeg.rend.hgtvcom.616.411.suffix/1626973172077.jpeg",
        examples: "Organic Foods, Snacks"
    },
    "Office Supplies": {
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/OlvP16lQmBeQzMuFFPDwQw/1000s.jpg",
        examples: "Stationery, Office Electronics"
    },
    "Pet Supplies": {
        image: "https://m.media-amazon.com/images/I/81PWZ+MtFtL.jpg",
        examples: "Pet Food, Pet Toys"
    },
    "Garden & Outdoor": {
        image: "https://static.independent.co.uk/2021/04/29/08/23162312-abf55639-66e5-4a60-bd92-5b7f870bf16f.jpg",
        examples: "Gardening Tools, Outdoor Furniture"
    },
    "Jewelry & Watches": {
        image: "https://i.ytimg.com/vi/X_oIK9cf5Fs/maxresdefault.jpg",
        examples: "Necklaces, Watches"
    },
    "Art & Collectibles": {
        image: "https://media.licdn.com/dms/image/D4E12AQEa_qNvowWX8g/article-cover_image-shrink_720_1280/0/1680356537030?e=2147483647&v=beta&t=RtxOsigoVKexhpEBJtE5PrNa7BDfZj6hcP3YpWOqq1I",
        examples: "Fine Art, Antiques"
    },
    "Tools & Home Improvement": {
        image: "https://static.cms.yp.ca/ecms/media/1/Tools-at-workbench-1442607700-600x360.jpg",
        examples: "Power Tools, Hand Tools"
    },
    "Food & Beverages": {
        image: "https://industrialoutlook.in/wp-content/uploads/2023/01/Food.webp",
        examples: "Breads, Vegetables, Drinks"
    },
};

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category, details }) => (
    // eslint-disable-next-line react/prop-types

    <a href={`/categories/${category}`} className="border p-4 rounded shadow-md">
        {/* eslint-disable-next-line react/prop-types */}
        <img src={details.image} alt={category} className="w-full h-32 object-cover rounded" />
        <h2 className="text-xl font-bold mt-4">{category}</h2>
        {/* eslint-disable-next-line react/prop-types */}
        <p>{details.examples}</p>
    </a>
);

const SupportedCategories = () =>{
    const { inputValue } = useInput();
    return (

    <div className="container flex flex-col gap-2 mx-auto p-4">
        <div className=" flex flex-row gap-2 py-4 px-3 container mx-auto">
            <a href={`/`}>Home</a>
            <IoIosArrowForward/>
            <a href={`/categories`}>All Categories</a>
        </div>
        {inputValue&&<SearchComponent  searchKeyword={inputValue}/>}
        <h1 className="text-3xl font-bold text-center mb-8">Know More About Supported Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(categoryDetails).map(([category, details]) => (
                <CategoryCard key={category} category={category} details={details}/>
            ))}
        </div>
    </div>
)};

export default SupportedCategories;
