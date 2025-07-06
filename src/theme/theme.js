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
    MuiFormControl: {
      styleOverrides: {
        root: {
          position: 'relative',
          '& .MuiFormHelperText-root': {
            color: '#d32f2f',
            marginLeft: '8px',
            position: 'absolute',
            bottom: '-18px',
          },
        },
      },
    },
    //   MuiAutocomplete: {
    //     styleOverrides: {
    //       option: {
    //         fontSize: '12px',
    //       },
    //       noOptions: {
    //         fontSize: '12px',
    //         padding: '6px 16px',
    //       },
    //       root: {
    //         '& .MuiInputBase-sizeSmall': {
    //           paddingLeft: '0px !important',
    //         },
    //         '& .MuiInputBase-root-MuiOutlinedInput-root': {
    //           paddingRight: '0px !important',
    //           paddingLeft:"5px !important"
    //         },
    //         '& .MuiAutocomplete-endAdornment':{
    //           right:"1px !important"
    //         }
    //       },
    //     },
    //   },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            height: 45,
          },
          '& .MuiInputBase-input': {
            padding: '4px 8px',
            lineHeight: 1.5,
            fontSize: '12px',
          },
          '& .MuiFormHelperText-root': {
            color: '#d32f2f',
            marginLeft: '8px',
            position: 'absolute',
            bottom: '-18px',
            whiteSpace: 'nowrap',
          },
          '& .MuiInputLabel-root': {
            // padding: '5px',
            marginTop: '-3px',
            fontSize: '12px',
          },
          '& .MuiInputLabel-shrink': {
            padding: '0px',
            fontSize: '14px',
            marginTop: '0px',
            marignLeft: '10px',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#DAA520',
            padding: '0px',
          },
          '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            borderColor: '#DAA520',
          },
          '& .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled':
          {
            background: '#F5F5F5',
          },
          '& .MuiOutlinedInput-root fieldset legend': {
            fontSize: '0.65em',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '8px',  // or use theme.spacing(1)
          marginLeft: '4px',
          bottom: '-27px !important'
        },
      },
    },
    //   MuiFormLabel: {
    //     styleOverrides: {
    //       root: {
    //         '.MuiFormLabel-asterisk': {
    //           color: 'red',
    //         },
    //       },
    //     },
    //   },

    //   MuiRadio: {
    //     styleOverrides: {
    //       root: {
    //         padding: '9px 2px',

    //         '& .MuiSvgIcon-root': {
    //           width: '14px',
    //           height: '14px',
    //         },
    //       },
    //     },
    //   },
  },
});

export default theme;
