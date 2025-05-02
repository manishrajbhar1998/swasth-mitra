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
                    borderRadius: '4px',
                    fontWeight: 600,
                    padding: '8px 16px',
                    background: "#57a585",
                    color: "#fff",
                    '&:hover': {
                        backgroundColor: '#00b88a',
                    },
                },
            },
        },
        // MuiTextField: {
        //     styleOverrides: {
        //         root: ({ theme }) => ({
        //             [theme.breakpoints.down('sm')]: {
        //                 '& .MuiInputBase-root': {
        //                     height: 40, // reduce height on mobile
        //                     fontSize: '0.9rem',
        //                 },
        //             },
        //         }),
        //     },
        // },
        // MuiAutocomplete: {
        //     styleOverrides: {
        //         root: ({ theme }) => ({
        //             [theme.breakpoints.down('sm')]: {
        //                 '& .MuiInputBase-root': {
        //                     height: 40, // reduce height on mobile
        //                     fontSize: '0.9rem',
        //                 },
        //             },
        //         }),
        //     },
        // },
    },
});

export default theme;
