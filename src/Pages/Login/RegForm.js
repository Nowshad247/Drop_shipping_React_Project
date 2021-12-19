import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
const RegForm = () => {
    const { registerNewUser } = useFirebase();
    const [name, setName] = useState([]);
    const [email, setemail] = useState([])
    const [password, setPassword] = useState([]);
    const getname = (e) => {
        setName(e.target.value);
    }
    const emailSet = (e) => {
        setemail(e.target.value);
    }
    const passwordhandel = (e) => {
        setPassword(e.target.value);
    }
    const signup = () => {
        registerNewUser(email, password, name);
    }
    return (
        <div className='container'>
            <div className="row">
                <div>
                    <div className='login-header'><h3>Sign Up </h3></div>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control onBlur={getname} type="text" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control onBlur={emailSet} type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control onBlur={passwordhandel} type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button variant="success" onClick={signup}>Sign Up</Button>
                </div>
            </div>
        </div>
    );
};

export default RegForm;