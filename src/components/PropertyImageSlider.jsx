import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PropertyImageSlider = ({ imgList }) => {
    const settings = {
        dots: false,
        // dotsClass: "slick-dots slick-thumb",
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        variableWidth: true,
    };
    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {
                    imgList?.map(item => {
                        return (
                            <div style={{ width: 350 }} className='img-carousel-wrapper'>
                                <img className='img-carousel' src={item.img} alt={item.name} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default PropertyImageSlider