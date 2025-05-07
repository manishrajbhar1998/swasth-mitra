import { Box, styled } from '@mui/material';
import React, { useState } from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './adminDashboard.scss';
import SideBar from '../SideBar/SideBar';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const   AdminDashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{
      display: 'flex', backgroundImage: `url('/assets/login-main-page-bg.png')`,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backgroundBlendMode: 'overlay',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'100vh'
    }}>
      <DashboardHeader open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />/
      {/* <Box component="main" sx={{ flexGrow: 1, padding: '12px', }} >
        <DrawerHeader />
        <Outlet />
      </Box> */}
    </Box>
  )
}

export default AdminDashboard;
