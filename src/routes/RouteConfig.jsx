import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Inquery from '../pages/Inquery/Inquery'
import LandingPage from '../pages/LandingPage/LandingPage'
import AdminLogin from '../pages/AdminLogin/AdminLogin'
import AdminDashboard from '../layout/AdminDashboard/AdminDashboard'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword'
import { DRAWER_LIST } from '../constant/constant'
import CustomerDashboard from '../layout/CustomerDashboard/CustomerDashboard'
import PurchasePlan from '../pages/PurchasePlan/PurchasePlan'
import PurchasePolicyPlan from '../pages/PurchasePolicyPlan/PurchasePolicyPlan'
import OurCompany from '../pages/OurCompany/OurCompany'
import OurApproach from '../pages/OurApproach/OurApproach'
import HealthImpact from '../pages/HealthImpact/HealthImpact'
import BlogDetails from '../pages/BlogDetails/BlogDetails'

const RouteConfig = () => {
    return (
        <BrowserRouter basename="/swasth-mitra">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/purchase" element={<PurchasePolicyPlan />} />
                <Route path="/forgetpass" element={<ForgetPassword />} />
                <Route path="/inquery" element={<Inquery />} />
                <Route path="/ourcompany" element={<OurCompany />} />
                <Route path="/ourapproach" element={<OurApproach />} />
                <Route path="/healthimpact" element={<HealthImpact />} />
                <Route path="/blogDetails" element={<BlogDetails />} />

                <Route path="/dashboard" element={<CustomerDashboard />} />
                <Route path="*" element={<Login />} />
                <Route path="/admin/">
                    <Route path="" element={<AdminLogin />} />
                    <Route path="dashboard/" element={<AdminDashboard />} >
                        {DRAWER_LIST.map(({ path, Component }) => (
                            <Route
                                path={path?.replace('/admin/dashboard/', '')}
                                element={Component ? <Component /> : null}
                                key={path}
                            />
                        ))}
                        <Route />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig