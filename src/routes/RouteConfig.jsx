import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Inquery from '../pages/Inquery/Inquery'
import LandingPage from '../pages/LandingPage/LandingPage'
import AdminLogin from '../pages/AdminLogin/AdminLogin'
import AdminDashboard from '../layout/AdminDashboard/AdminDashboard'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword'

const RouteConfig = () => {
    return (
        <BrowserRouter basename="/swasth-mitra">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgetpass" element={<ForgetPassword/>} />
                <Route path="/inquery" element={<Inquery />} />
                <Route path="*" element={<Login />} />
                <Route path="/admin/">
                    <Route path="" element={<AdminLogin />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig