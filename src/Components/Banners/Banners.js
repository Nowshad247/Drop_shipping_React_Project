import React, { useState } from 'react';
import Slider from "react-slick";
import './Banners.css'
const Banners = (props) => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 5,


    };

    return (
        <div>
            <Slider {...settings}>
                {
                    props.data.map(img => <div>

                        <img src={img.link} alt="" className='img-fluid' />
                    </div>)
                }


            </Slider>

        </div>
    );
};

export default Banners;