import React from 'react';
import './app.scss';
import RouteConfig from './routes/RouteConfig';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { LoadingProvider } from './context/LoadingContext/LoadingContext';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <RouteConfig />
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App