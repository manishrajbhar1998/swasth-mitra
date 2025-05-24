import React from 'react';
import './app.scss';
import RouteConfig from './routes/RouteConfig';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { LoadingProvider } from './context/LoadingContext/LoadingContext';
import Loader from './components/Loader/Loader';
import { Bounce, ToastContainer } from 'react-toastify';
import { AdminDetailsProvider } from './context/AdminContext/AdminContext';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <AdminDetailsProvider>
          <Loader />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <RouteConfig />
        </AdminDetailsProvider>
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App