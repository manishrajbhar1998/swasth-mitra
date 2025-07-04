// src/auth/CustomerProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CustomerConext } from '../context/CustomerContext/CustomerContext';

const CustomerProtectedRoute = ({ children }) => {
    const { state } = useContext(CustomerConext);
    debugger
    const isLoggedIn = !!state?.login?.username;

    return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default CustomerProtectedRoute;
