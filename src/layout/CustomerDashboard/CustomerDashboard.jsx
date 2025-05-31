
import React, { useState } from 'react'
import './customerDashboard.scss';
import CustomerDashboardHeader from '../CustomerDashboardHeader/CustomerDashboardHeader';
import MyServices from '../../pages/Customer/MyServices/MyServices';
import Services from '../../pages/Services/Services';



const CustomerDashboard = () => {
  const [open, setOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);

  return (
    <>

      <CustomerDashboardHeader />
      {

        !isActive &&
        <Services type="registed" />

      }

      {
        isActive &&
        <MyServices />
      }

    </>)
}

export default CustomerDashboard;

