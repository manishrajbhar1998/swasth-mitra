// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#57a585',
            contrastText: '#ffffff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    padding: '8px 16px',
                    background:"#57a585",
                    color:"#fff",
                    '&:hover': {
                        backgroundColor: '#00b88a',
                    },
                },
                
            },
        },
    },
});

export default theme;
