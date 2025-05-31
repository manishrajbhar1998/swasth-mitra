
import React, { useState } from 'react'
import './customerDashboard.scss';
import CustomerDashboardHeader from '../CustomerDashboardHeader/CustomerDashboardHeader';



const CustomerDashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <CustomerDashboardHeader />

    </>)
}

export default CustomerDashboard;

