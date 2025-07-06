import { Box, styled } from '@mui/material';
import React, { useState } from 'react'
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './adminDashboard.scss';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AdminDashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Box sx={{
        display: 'flex', backgroundImage: `url('/assets/login-main-page-bg.png')`,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backgroundBlendMode: 'overlay',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        overflowX: "hidden"
      }}>
        <DashboardHeader open={open} setOpen={setOpen} />
        <SideBar open={open} setOpen={setOpen} />
        <Box component="main" sx={{ flexGrow: 1, padding: '12px', }} >
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
      {/* <div className='footer-wrapper'>
        <div className='copyright'>
          <p> Copyright &copy; 2025 swasthmitra.org All Rights Reserved.</p>
        </div>
      </div> */}

    </>)
}

export default AdminDashboard;

/* ===================================== =========================================== ==================================== */

// import * as React from 'react';
// import { createTheme, styled } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid';
// import { useRoutes } from 'react-router-dom';
// import { DRAWER_LIST } from '../../constant/constant';
// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Dashboard',
//   },
//   ...DRAWER_LIST.map(({ label, path, icon: Icon }) => ({
//     segment: path.replace('/admin/dashboard/', ''),
//     title: label,
//     icon: <Icon />,
//   })),
// ];

// const demoTheme = createTheme({
//   colorSchemes: { light: true, dark: true },
//   cssVariables: {
//     colorSchemeSelector: 'class',
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 600,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => {
//     return {
//       pathname,
//       searchParams: new URLSearchParams(),
//       navigate: (path) => setPathname(String(path)),
//     };
//   }, [pathname]);

//   return router;
// }

// const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// export default function DashboardLayoutBasic(props) {
//   const { window } = props;

//   const router = useDemoRouter('/inquery');

//   const demoWindow = window ? window() : undefined;

//   function AppRoutes() {
//     const routes = DRAWER_LIST.map(({ path, Component }) => ({
//       path: path,
//       element: <Component />,
//     }));

//     const element = useRoutes(routes);
//     return element;
//   }

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer>
//           <AppRoutes />
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

