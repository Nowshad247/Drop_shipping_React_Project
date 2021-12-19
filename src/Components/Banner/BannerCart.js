import React from 'react';
import { Button, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Bannercart.css'
const BannerCart = () => {
    return (
        <div className='border d-flex justify-content-center align-items-center bannerHight'  >
            <div className='d-flex flex-column'>
                <h4 className='text-center'>Tell us
                    what do you need</h4>
                <select class="form-select" aria-label="Default select example p-5">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <Button variant="success" className='mt-4'>Next</Button>
            </div>

        </div>
    );
};

export default BannerCart;