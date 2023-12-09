import React from "react";
import Slider from "react-slick";

function SlideShow({ data }){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <Slider {...settings}>
            {data.map((item) => (
                <img
                    className="d-block w-100"
                    src={item.imageUrl}
                    alt={item.title}
                />
            ))}
        </Slider>
    );
}

export default SlideShow;