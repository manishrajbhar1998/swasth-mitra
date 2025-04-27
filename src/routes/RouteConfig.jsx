import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const RouteConfig = () => {
    return (
        <BrowserRouter basename="/swasth-mitra">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Login />} />

            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig