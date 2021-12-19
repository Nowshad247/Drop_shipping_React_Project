import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
const Footer = () => {
    return (
        <div className='container'>
            <div className="row text-center m-4">
                <div className="col-md-4">
                    <h1>LOGO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dignissimos, adipisci natus praesentium eum reiciendis. Recusandae reprehenderit itaque earum beatae!</p>
                </div>
                <div className="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-md-4"><Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card></div>
            </div>
            <div className="row text-center">
                <p>Copyright Nowshad</p>
            </div>
        </div>

    );
};

export default Footer;