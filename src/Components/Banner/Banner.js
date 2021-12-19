import React from 'react';
import BannerCart from './BannerCart';
import Slider from './Slider';

const Banner = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <Slider></Slider>
                </div>
                <div className="col-md-4">
                    <BannerCart></BannerCart>
                </div>
            </div>
        </div>
    );
};

export default Banner;