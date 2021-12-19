import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
const LoginFrom = () => {
    const { signinwithpassword } = useFirebase();
    const [emails, setemail] = useState([]);
    const [passwords, setpassword] = useState([]);
    const getEmail = (e) => {
        setemail(e.target.value)
    }
    const getpassword = (e) => {
        setpassword(e.target.value)
    }
    const loginHandeler = () => {
        signinwithpassword(emails, passwords).then(error => {

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }
    return (
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control onBlur={getEmail} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control onBlur={getpassword} type="password" placeholder="Password" />
            </FloatingLabel>
            <Button variant="success" onClick={loginHandeler}>Sign in</Button>
        </div>
    );
};

export default LoginFrom;