import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BuyForMe from './BuyForMe';
import ShipForMe from './ShipForMe';

const HowWork = () => {
    const [active, setActive] = useState('one')
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1>How We Works</h1>
                </div>
                <div className="col-md-6 text-end">
                    <Button variant="outline-success" onClick={() => setActive("one")} className={`banner ${active === 'one' ? "active" : ""}`}>Buy for me </Button>
                    <Button variant="outline-success" onClick={() => setActive("two")} className={`banner ${active === 'two' ? "active" : ""}`}>Ship for me</Button>
                </div>
            </div>
            <div className="row text-center mt-4 mb-4">
                {active === "one" && <BuyForMe></BuyForMe>}
                {active === "two" && <ShipForMe></ShipForMe>}
            </div>
            <div className="row text-center m-5">
                <p>Do you need to learn more? <a href="#">View More</a></p>
            </div>
        </div>
    );
};

export default HowWork;