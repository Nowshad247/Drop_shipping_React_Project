import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Featured = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className='container'>
            <div>
                <h2 className='text-center m-4'> Featured Categories</h2>
                <Slider {...settings}>
                    <div className="col-md-2 border text-center p-4">
                        <img src="https://moveon.com.bd/storage/uploads/1VTa76Q-1615182942.png" alt="" class="rounded mx-auto d-block" />
                        <h3>Categories</h3>
                    </div>

                    <div className="col-md-2 border text-center p-4">
                        <img src="https://moveon.com.bd/storage/uploads/1VTa76Q-1615182942.png" alt="" class="rounded mx-auto d-block" />
                        <h3>Categories</h3>
                    </div>

                    <div className="col-md-2 border text-center p-4">
                        <img src="https://moveon.com.bd/storage/uploads/1VTa76Q-1615182942.png" alt="" class="rounded mx-auto d-block" />
                        <h3>Categories</h3>
                    </div>

                    <div className="col-md-2 border text-center p-4">
                        <img src="https://moveon.com.bd/storage/uploads/1VTa76Q-1615182942.png" alt="" class="rounded mx-auto d-block" />
                        <h3>Categories</h3>
                    </div>

                    <div className="col-md-2 border text-center p-4">
                        <img src="https://moveon.com.bd/storage/uploads/1VTa76Q-1615182942.png" alt="" class="rounded mx-auto d-block" />
                        <h3>Categories</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Featured;