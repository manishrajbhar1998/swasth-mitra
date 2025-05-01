import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Inquery from '../pages/Inquery/Inquery'
import LandingPage from '../pages/LandingPage/LandingPage'

const RouteConfig = () => {
    return (
        <BrowserRouter basename="/swasth-mitra">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/inquery" element={<Inquery />} />

                <Route path="*" element={<Login />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig