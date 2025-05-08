import React from 'react';
import { styled, useTheme, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useNavigate } from 'react-router-dom';
import './sideBar.scss';
import { DRAWER_WIDTH, DRAWER_LIST } from '../../constant/constant';
import logo from './../../assets/images/swastha-mitra-logo2.png';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const openedMixin = (theme: Theme) => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SideBar = ({ open, setOpen }) => {

  const [openSubMenu, setOpenSubMenu] = React.useState(false)
  const [openMenus, setOpenMenus] = React.useState({ Reports: false });


  const theme = useTheme();
  const navigate = useNavigate()

  const handleLinkClick = (event, list) => {
    toggleMenu(list.label)
    if (list.label === "Reports") {
      setOpenSubMenu(prev => !prev)
    } else {
      setOpenSubMenu(false)
    }
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
    }
  };

  const toggleMenu = (label) => {
    setOpenMenus(prev => {
      let obj = { ...prev };
      for (let key in obj) {
        if (key === label) {
          obj[key] = !obj[key]
        } else {
          obj[key] = false
        }
      }

      return obj;
    })
  }

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && (
          <Box style={{ display: 'flex', alignItems: "center" }}>
            <img src={logo} alt="Swastha Mitra " style={{ width: '70px', height: "auto", cursor: "pointer" }} onClick={() => navigate('/dashboard-page/')} />
            <span>Swastha Mitra</span>
          </Box>
        )}
        <IconButton onClick={() => setOpen(false)}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ padding: '10px' }}>
        {DRAWER_LIST.map((list, index) => (
          <div key={index}>
            <NavLink
              to={list?.path}
              key={index}
              style={({ isActive }) => ({
                textDecoration: 'none',
                backgroundColor: isActive ? '#57a585' : '#fff',
                color: isActive ? "#000 !important" : '#475562',
              })}
              onClick={(e) => handleLinkClick(e, list)}
              className={list.label === "Reports" ? "dactive" : ""}
            >
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ minHeight: 48, padding: "0px !important", paddingLeft: '10px !important', display: "flex", justifyContent: 'center' }}
                >
                  <ListItemIcon sx={{ minWidth: 35,color:"#000" }} className="icon-link"  >
                    {React.createElement(list.icon, {fontSize: "medium"})}
                  </ListItemIcon>

                  <ListItemText
                    primary={list?.label}
                    sx={{ opacity: open ? 1 : 0, color: '#000' }}
                  />
                
                </ListItemButton>
              </ListItem>
            </NavLink>

          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
