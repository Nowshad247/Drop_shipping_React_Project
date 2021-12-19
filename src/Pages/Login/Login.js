import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";
import UseAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import LoginFrom from './LoginFrom';
import RegForm from './RegForm';


const Login = () => {
    const { user } = UseAuth();
    const { googlelogin, saveUser } = useFirebase();
    const handelLogin = () => {
        googlelogin().then(result => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
        })
    }
    let navigate = useNavigate();
    if (user.email) {
        navigate("/");
    }
    return (
        <div className='container'>
            <div className="row text-center m-5">
                <div className="col-md-6">
                    <RegForm></RegForm>
                </div>
                <div className='col-md-6'>
                    <h1>Login</h1>
                    <LoginFrom></LoginFrom>
                    <Button variant="danger" onClick={handelLogin}>Login With Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;