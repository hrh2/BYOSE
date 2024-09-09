import Slider from "react-slick";
import img from '../../assets/images/dairy.png'

// eslint-disable-next-line react/prop-types
function ImageSlicer({className,images}) {
    const settings = {
        dots: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className={` ${className}`}>
            <Slider {...settings}>
                {/* eslint-disable-next-line react/prop-types */}
                {images.map((image, index) => (
                    <img key={index} src={image} className={` max-h-[40vh] object-contain object-center md:rounded-2xl rounded-xl`}  alt={"shop images"}/>
                ))}
            </Slider>
        </div>
    );
}

export default ImageSlicer;