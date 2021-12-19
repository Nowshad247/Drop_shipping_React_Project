import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBox.css';

const SearchBox = () => {
    const handelclick = (e) => {
        e.preventDefault();
    }
    let navigate = useNavigate();
    const handelurl = (e) => {
        const url = e.target.value;

        navigate(`/amozon-product-datails/`)
    }
    return (
        <div className='container'>
            <div className="row m-4">
                <div className="col-md-12 text-center">
                    <h1 className='mb-4'>Quick Order By Amazon Product Link</h1>
                    <p>Enter link from any supported site here and order right away.</p>
                    <form onSubmit={handelclick}>
                        <input type="url" placeholder=" Amazon Product Url" required className='urlinput' onBlur={handelurl} />
                        <input type="submit" className="btn button-submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;