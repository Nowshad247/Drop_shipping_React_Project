import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from "react-router-dom"
const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    let location = useLocation();
    if (loading) {
        return <div className='container text-center'>
            <Spinner
                className='text-center'
                animation="grow"
            />
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;