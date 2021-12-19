import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png';
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Container, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const handelLogOut = () => {
        logout()
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="text-dark" style={{ fontSize: '1.5em' }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}

                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/buy-for-me'>Buy For me</Nav.Link>
                            <Nav.Link href="#pricing">Ship for me</Nav.Link>
                            <Nav.Link href="#pricing">Cost calculator</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link  >  </Nav.Link>
                            <Nav.Link  ><FiShoppingCart />Cart</Nav.Link>
                            <NavDropdown title={`ACCOUNT`} id="basic-nav-dropdown" >
                                <h4>Welcome </h4>
                                <NavDropdown.Divider />
                                <div>
                                    {
                                        user.displayName ? <NavDropdown.Item as={Link} to='/deshboard'>Profile : {user.displayName}</NavDropdown.Item> : <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
                                    }

                                </div>
                                <NavDropdown.Divider />
                                {
                                    user.email ? <button onClick={handelLogOut}>Logout</button> : <></>
                                }
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;