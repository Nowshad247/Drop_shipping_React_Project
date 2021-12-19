import Button from 'react-bootstrap/Button'
import { Form, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import Banners from '../../Components/Banners/Banners';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const axios = require('axios');

const AmozonProductDatails = () => {
    const [products, setProducts] = useState({});
    const [loading, setLoding] = useState('');
    const [showdata, setShowdata] = useState(true)
    const [url, setUrl] = useState('');
    const { user } = useAuth();
    const handelUrl = (e) => {
        setUrl(e.target.value);
    }
    const handelClick = (e) => {
        getproducts();
        setLoding('loading');
    }

    async function getproducts() {
        try {
            const response = await axios.get('https://api.rainforestapi.com/request', {
                params: {
                    api_key: "CFD1C0E9E9CC4657886E888A3B21E09F",
                    type: "product",
                    url: url,
                    output: "json"
                }
            });
            setProducts(response);
            setLoding(response.statusText);
            setShowdata(false)
            console.log(response)
            console.log(loading)
        } catch (error) {
            console.error(error);
        }
    }
    console.log(user.uid)
    const buyNow = () => {
        axios.post('https://safe-shore-20659.herokuapp.com/place-order', {
            productid: products?.data?.productasin,
            userid: user.uid,
            ProductUrl: url,
            name: products?.data?.product?.title,
            modelNumner: products?.data?.product?.model_number,
            Price: products?.data?.product?.buybox_winner?.price?.currency,
            orderStatus: 'Painding',
        })
            .then(function (response) {
                if (response.status == 200) {
                    const insertedId = response.data.insertedId;
                    alert("Successfully order place" + insertedId)
                };
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">

                    <form onSubmit={e => { e.preventDefault(); handelClick() }} >
                        <input type="url" placeholder=" Amazon Product Url" onChange={handelUrl} className='urlinput' />
                        {
                            loading === 'loading' ? <Button variant="primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Loading...
                            </Button> : <></>
                        }

                        <input type="submit" className="btn button-submit" />
                    </form>

                    {products.statusText}

                </div>
                <div className={`row ${showdata ? "d-none" : ""}`}>
                    <div className="col-md-3">
                        <img src={products?.data?.product?.main_image?.link} alt="" className='img-fluid' />
                        {
                            products?.data?.product?.images ? <Banners data={products?.data?.product?.images}></Banners> : <img src={products?.data?.product?.main_image?.link} alt="" className='img-fluid' />

                        }

                    </div>
                    <div className="col-md-6">
                        <h3>
                            {products?.data?.product?.title}
                        </h3>
                        <p>Products Id : {products?.data?.productasin} || brand : {products?.data?.product?.brand}</p>
                        <h5>
                            {products?.data?.product?.buybox_winner?.price?.symbol}

                            {products?.data?.product?.buybox_winner?.price?.value}

                            {products?.data?.product?.buybox_winner?.price?.currency}
                            <button type="button" class="btn btn-warning m-3" onClick={buyNow}>Buy Now</button>
                        </h5>
                        <p>{products?.data?.product?.description}</p>
                        <p>{products?.data?.product?.dimensions}</p>
                        {
                            products?.data?.product?.feature_bullets.map(bullets => <ul>
                                <li>{bullets}</li>
                            </ul>)
                        }
                        <p>
                            {products?.data?.product?.feature_bullets_flat}
                        </p>
                        <p>
                            Keywords: {products?.data?.product?.keywords}
                        </p>
                        <p>
                            Manufacturer: {products?.data?.product?.manufacturer}
                        </p>
                        <p>
                            model_number: {products?.data?.product?.model_number}
                        </p>
                        <p>
                            parent_asin: {products?.data?.product?.parent_asin}
                        </p>
                    </div>
                    <div className="col-md-3">
                        categories
                        {
                            products?.data?.product?.categories.map(categorie => <ul>
                                <a href="">
                                    <li>{categorie.name}</li>
                                </a>
                            </ul>)
                        }
                        {
                            products?.data?.product?.images.map(img => <div>
                                <p>{img.variant}</p>
                                <img src={img.link} alt="" className='img-fluid' />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AmozonProductDatails;