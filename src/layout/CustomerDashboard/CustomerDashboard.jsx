
import React, { useEffect, useState } from 'react'
import './customerDashboard.scss';
import CustomerDashboardHeader from '../CustomerDashboardHeader/CustomerDashboardHeader';
import MyServices from '../../pages/Customer/MyServices/MyServices';
import Services from '../../pages/Services/Services';
import { GET_CUSTOMER_DASHBOARD } from '../../constant/config';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import { api, authApi } from '../../apis/api';
import { Typography } from '@mui/material';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';



const CustomerDashboard = () => {
  const [open, setOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const { loading, setLoading } = useLoading();
  const [dashboardData, setDashboardData] = useState();

  useEffect(() => {
    fetchDashboardData()
  }, [])


  const fetchDashboardData = async () => {
    debugger
    try {
      setLoading(true)
      const response = await authApi.get(GET_CUSTOMER_DASHBOARD);
      if (response?.data) {
        setDashboardData(response?.data.data)

        const isPaymentSuccessful = response?.data.data.paymentStatus === "SUCCESS";
        const isPlanExpired = dayjs().isAfter(dayjs(response?.data.data.planExpiryDate));

        debugger

        if (isPaymentSuccessful && !isPlanExpired) {
          setIsActive(true);
        }
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)

      console.error("invalid userid and password ", error);
      // toast.error(error?.response?.data?.errors[0])
    }
  }

  return (
    <>

      <CustomerDashboardHeader />




      {
        isActive ?
          <MyServices dashboardData={dashboardData} />
          :
          <>
            <div className='popup-msg'>
              <p className='msg-1'>
                You haven't purchased any plan yet.
              </p>
              <p className='msg-2'>
                Please choose a plan from the options below to get started.
              </p>
            </div>
            <Services type="registed" />
          </>
      }



    </>)
}

export default CustomerDashboard;

