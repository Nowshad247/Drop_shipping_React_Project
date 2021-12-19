import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AllOrder from '../AllOrder/AllOrder';
import Orders from '../Orders.js/Orders';
const Deshboard = () => {
    const { user, logout, admin } = useAuth();
    return (
        <div className='container'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Dashboard</Nav.Link>
                            </Nav.Item>
                            <hr />
                            {
                                admin ? <>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eleven">All Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="twielve">Make Admin</Nav.Link>
                                    </Nav.Item>
                                </> : <>
                                    <p className='title'>Buy & Ship For me</p>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second">My Order</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three">My Forwarding Parcel</Nav.Link>
                                    </Nav.Item>
                                    <p>Ship For Me</p>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four">My Request</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="five">My Forwarding Parcel</Nav.Link>
                                    </Nav.Item>
                                    <p>My Wallet</p>
                                    <Nav.Item>
                                        <Nav.Link eventKey="six">My Balance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seven">My Coupons</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eight">My Wallet History</Nav.Link>
                                    </Nav.Item>
                                    <p>Profile</p>
                                    <Nav.Item>
                                        <Nav.Link eventKey="nine">information</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ten">Security</Nav.Link>
                                    </Nav.Item>
                                </>
                            }

                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p>Dashboard</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Orders></Orders>
                            </Tab.Pane>
                            <Tab.Pane eventKey="three">
                                <p>3</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                                <p>4</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="five">
                                <p>5</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="six">
                                <p>6</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seven">
                                <p>7</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="eight">
                                <p>8</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="nine">
                                <p>9</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ten">
                                <p>10</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="eleven">
                                <AllOrder></AllOrder>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    );
};

export default Deshboard;