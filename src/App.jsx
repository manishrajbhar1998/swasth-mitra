import React from 'react';
import './app.scss';
import RouteConfig from './routes/RouteConfig';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouteConfig />
    </ThemeProvider>
  )
}

export default App