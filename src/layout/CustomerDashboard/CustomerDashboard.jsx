import React, { useEffect, useState } from 'react'
import './customerDashboard.scss';
import CustomerDashboardHeader from '../CustomerDashboardHeader/CustomerDashboardHeader';
import MyServices from '../../pages/Customer/MyServices/MyServices';
import Services from '../../pages/Services/Services';
import { GET_CUSTOMER_DASHBOARD } from '../../constant/config';
import { useLoading } from '../../context/LoadingContext/LoadingContext';
import { authApi } from '../../apis/api';
import dayjs from 'dayjs';

const CustomerDashboard = () => {
  const [isActive, setIsActive] = useState(false);
  const { loading, setLoading } = useLoading(true);
  const [dashboardData, setDashboardData] = useState(null);
  const [initialized, setInitialized] = useState(false); // 👈 track API finish

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await authApi.get(GET_CUSTOMER_DASHBOARD);
      if (response?.data) {
        const data = response.data.data;
        setDashboardData(data);

        const isPaymentSuccessful = data.paymentStatus === "SUCCESS";
        const isPlanExpired = dayjs().isAfter(dayjs(data.planExpiryDate));

        if (isPaymentSuccessful && !isPlanExpired) {
          setIsActive(true);
        }
      }
    } catch (error) {
      console.error("invalid userid and password ", error);
    } finally {
      setLoading(false);
      setInitialized(true); // 👈 only now allow rendering
    }
  };

  return (
    <>
      <CustomerDashboardHeader />

      {/* show nothing (or loader) until API finishes */}
      {!initialized ? (
        <div className="loader">Loading...</div>
      ) : isActive ? (
        <MyServices dashboardData={dashboardData} />
      ) : (
        <>
          <div className='popup-msg'>
            <p className='msg-1'>You haven't purchased any plan yet.</p>
            <p className='msg-2'>Please choose a plan from the options below to get started.</p>
          </div>
          <Services type="registed" />
        </>
      )}
    </>
  );
};

export default CustomerDashboard;
