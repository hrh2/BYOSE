import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import 'tailwindcss/tailwind.css';

export default function  BlogPage () {
  const posts = [
    {
      title: 'How grocers are approaching delivery as the market evolves',
      date: 'November 3, 2023',
      category: 'Uncategorized',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
      content: 'Short description of the blog post goes here...',
    },
    {
      title: 'The Friday Checkout: Food insecurity keeps retailers off balance',
      date: 'November 3, 2023',
      category: 'Uncategorized',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
      content: 'Short description of the blog post goes here...',
    },
    {
      title: 'Consumer want grocer to use AI to help them save money Dunnhumby',
      date: 'November 3, 2023',
      category: 'Uncategorized',
      image: 'https://via.placeholder.com/600x400', // Replace with actual image URL
      content: 'Short description of the blog post goes here...',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {posts.map((post, index) => (
            <div key={index} className="mb-6 bg-white rounded-lg shadow-md">
              <img src={post.image} alt={post.title} className="w-full rounded-t-lg" />
              <div className="p-6">
                <span className="bg-gray-200 text-[#634C9F]  text-xs font-bold mr-2 px-2.5 pt-1.5 py-0.5 rounded">{post.category}</span>
                <h2 className="text-2xl text-[#030712]  font-bold my-2 ">{post.title}</h2>
                <p className="text-[#4B5563]">{post.date}</p>
                <p className="text-[#4B5563] mt-2">{post.content}</p>
                <button className="mt-4 text-white bg-[#166534] hover:bg-green-700 font-bold py-2 px-4 rounded transition duration-500">Read More</button>
              </div>
            </div>
          ))}
        </div>
        <aside className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Blog Post List</h3>
            <ul className="space-y-4">
              {posts.map((post, index) => (
                <li key={index}>
                  <a href="#" className="text-[#030712] hover:underline">{post.title}</a>
                  <p className="text-gray-600 text-sm">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Social Media Widget</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center bg-blue-600 text-[#FFF] p-3 rounded-md font-bold hover:underline">
                  <FiFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center bg-blue-400  text-[#FFF] p-3 rounded-md font-bold hover:underline">
                  <FiTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center bg-pink-600 text-[#FFF] p-3 rounded-md font-bold hover:underline">
                  <FiInstagram className="mr-2" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center bg-blue-700 text-[#FFF] p-3 rounded-md font-bold hover:underline">
                  <FiLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

