// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const LinkComponent = ({link }) => {
    return (
        // eslint-disable-next-line react/prop-types
        <a href={link.url} className="block w-full h-auto p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition">
            <div className="flex items-center">
                {/* eslint-disable-next-line react/prop-types */}
                <img src={link.image} alt={link.title} className="w-16 h-16 rounded-full mr-4" />
                <div className="flex-1">
                    {/* eslint-disable-next-line react/prop-types */}
                    <h2 className="text-lg font-semibold">{link.title}</h2>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text-gray-600">{link.description}</p>
                </div>
                <FaExternalLinkAlt className="text-gray-500 ml-2" />
            </div>
        </a>
    );
};

export default LinkComponent;
