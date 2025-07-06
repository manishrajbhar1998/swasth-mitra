// src/auth/CustomerProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CustomerConext } from '../context/CustomerContext/CustomerContext';
import { useLoadingAdminDeatils } from '../context/AdminContext/AdminContext';

export const CustomerProtectedRoute = ({ children }) => {
    const { state } = useContext(CustomerConext);
    const isLoggedIn = !!state?.login?.username;

    return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export const AdminProtectedRoute = ({ children }) => {
    const { state } = useLoadingAdminDeatils();

    const isLoggedIn = !!state?.userName;

    return isLoggedIn ? children : <Navigate to="/admin" replace />;
};


