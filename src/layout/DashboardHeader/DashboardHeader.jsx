import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';
import AccountSetting from '../../components/AccountSetting/AccountSetting';
import { DRAWER_WIDTH } from '../../constant/constant';
import logo from './../../assets/images/swastha-mitra-logo2.png';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    ...(open && {
        marginLeft: DRAWER_WIDTH,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));



const DashboardHeader = ({ open, setOpen }) => {

    return (

        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setOpen(true)}
                    edge="start"
                    sx={[
                        {
                            marginRight: '20px',
                        },
                        open && { display: 'none' },
                    ]}
                >
                    <MenuIcon />
                </IconButton>
                {!open && (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: "5px 0"
                        }}
                    >
                        <img src={logo} alt="Swastha Mitra " style={{ width: '70px', height: "auto", cursor: "pointer" }} onClick={() => navigate('/dashboard-page/')} />
                        <span>Swastha Mitra</span>
                    </Box>
                )}
                <Box
                    sx={{
                        marginLeft: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                        }}
                    >
                        <Box className="live_chip">
                            <span className="text">Super Admin</span>
                            <span className="chip"></span>
                        </Box>
                        {/* <IconButton color="inherit">
                            <SettingsIcon
                                sx={{
                                    fill: 'none',
                                    stroke: 'currentColor',
                                    strokeWidth: 1.5,
                                }}
                            />
                        </IconButton> */}
                    </Box>
                    <AccountSetting />
                </Box>
            </Toolbar>
        </AppBar>

    );
};

export default DashboardHeader;
