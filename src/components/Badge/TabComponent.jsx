import  { useState } from 'react';
import {capitalizeFirstThreeLetters} from "../../utils/helpers.js";

// eslint-disable-next-line react/prop-types,no-unused-vars
const TabComponent = ({product,reviews}) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="container  mx-auto mt-10">
      <div className="flex border-b border-gray-300">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-4 py-2 transition-colors duration-300 ${
            activeTab === 'description' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-4 py-2 transition-colors duration-300 ${
            activeTab === 'reviews' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
        >
            {/* eslint-disable-next-line react/prop-types */}
          Reviews ({reviews.length})
        </button>
      </div>
      <div className="mt-4">
        {activeTab === 'description' && (
          <div className="transition-opacity duration-500 ease-in-out opacity-100 p-4">
            <p>
                {/* eslint-disable-next-line react/prop-types */}
                {product?product.description:"waiting..."}
            </p>
            {/*<p className="mt-4">*/}
            {/*  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque.*/}
            {/*  Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.*/}
            {/*  Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula.*/}
            {/*  Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus,*/}
            {/*  ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus.*/}
            {/*  Duis semper erat mauris, sed egestas purus commodo vel.*/}
            {/*</p>*/}
          </div>
        )}
        {activeTab === 'reviews' && (
            <div className="transition-opacity duration-500 ease-in-out opacity-100">
                {/* eslint-disable-next-line react/prop-types */}
                {reviews.map((review,index)=>(<p key={index}>{capitalizeFirstThreeLetters(review.user.email)}...: {review.comment}.</p>))}
                {/* eslint-disable-next-line react/prop-types */}
                {reviews.length < 1 && (<p>No review</p>)}
            </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
