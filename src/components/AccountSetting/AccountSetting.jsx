/* eslint-disable no-debugger */
import React, { useState } from "react";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Logout } from "@mui/icons-material";



const AccountSetting = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open1 = Boolean(anchorEl);

    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => { }


    return (
        <div className="account_id" style={{ display: "flex", alignItems: "center" }}>
            <div>
                <div>Manish Rai</div>
            </div>
            <div>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick1}
                        // size="small"
                        // sx={{ ml: 2 }}
                        aria-controls={open1 ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open1 ? 'true' : undefined}
                        sx={{ position: "relative" }}
                    >
                        <ArrowDropDownIcon />
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open1}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                width: '18ch',
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.20))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 20,
                                    height: 20,
                                    ml: 0,
                                    mr: 2,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>

            </div>
        </div>
    )
}

export default AccountSetting