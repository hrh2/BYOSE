import { useEffect, useRef, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';
import img from '../../assets/images/grocery1.jpg';

// eslint-disable-next-line react/prop-types,no-unused-vars
export default function HomeDiscounto1({discount}) {
  const [bgColor, setBgColor] = useState('');
  const imgRef = useRef(null);

  useEffect(() => {
    const fac = new FastAverageColor();
    const image = imgRef.current;

    if (image.complete) {
      setBgColorFromImage(image);
    } else {
      image.onload = () => {
        setBgColorFromImage(image);
      };
    }

    function setBgColorFromImage(image) {
      fac.getColorAsync(image)
        .then(color => {
          setBgColor(color.hex);
        })
        .catch(e => {
          console.error(e);
        });
    }
    
  }, []);

  return (
    <div className={`!w-full grid md:grid-cols-2 gap-6 bg-gradient-to-tr from-[#f2e8ff] via-[#f2e8ff] to-[${bgColor?bgColor:''}] py-10 overflow-x-hidden Z-10`}>
      <div className='order-2 md:order-1 flex flex-col gap-8 px-4'>
        <span>
          <span className='pt-2 px-2 rounded-l-md bg-gradient-to-r from-[#87ffb581] via-[#22c55e15] to-[#0000] border-0 text-[#166534] font-semibold w-full sm:w-[16rem]'>
            Weekend Discount
          </span>
        </span>
        <p className='font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-[#39245F]'>
          Shopping with us for better quality and the best price
        </p>
        <p className='text-sm sm:text-base md:text-xl font-normal text-[#030712]'>
          We have prepared special discounts for you on grocery products. Don&apes;t miss these opportunities...
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <a className=' flex items-center align-middle justify-center rounded-md font-bold text-white bg-[#166534] px-4 sm:px-9 py-1 pt-2 text-center '>
            <span>Shop&nbsp;Now</span>
          </a>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-3'>
              <p className='font-bold text-[#DC2626] text-2xl sm:text-3xl md:text-4xl'>$27</p>
              <p className='text-lg sm:text-xl align-text-bottom line-through'>$56</p>
            </div>
            <p className='text-sm sm:text-base'>Don&apes;t miss this limited time offer.</p>
          </div>
        </div>
      </div>
      <div className='order-1 md:order-2 p-4'>
        <img ref={imgRef} src={img} className='object-contain mx-auto object-center rounded-md' alt="type-img" />
      </div>
    </div>
  );
}
