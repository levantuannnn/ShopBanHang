import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anh1 from "../image/anh1.jpg";
import anh2 from "../image/anh.jpg";
import anh3 from "../image/anh2.jpg";

function Nav() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    const images = [anh1, anh2, anh3];

    return (
        <div className="w-full">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} className="w-full h-20 object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Nav;