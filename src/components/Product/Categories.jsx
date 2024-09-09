// import React from 'react';
import { productCategories } from '../../assets/data/productCategories';
import Slider from "react-slick";

export default function Categories() {
  const settings = {
    dots: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          speed: 1500,
        },
      },
      {
        breakpoint: 900,
        settings: {
          speed: 1000,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  return (
    <div className="max-w-full p-8 py-8 overflow-x-hidden h-auto bg-[#FFF] dark:bg-[#000]">
      <Slider {...settings}>
        {productCategories.map((category, index) => (
          <a key={index + category.id} href={`/categories/${category.name}`} className="md:w-[10rem] md:px-6 px-3">
            <div className={`flex flex-col gap-3`}>
              <img
                src={category.image}
                className="object-cover bg-[#D1D5DB] mx-auto object-center aspect-square rounded-full"
                alt={category.name}
              />
              <h2 className='text-[#030712] dark:text-[#fdf9ed] text-center font-bold py-4'>{category.name}</h2>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}
