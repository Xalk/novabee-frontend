import React, {useContext} from 'react';
import s from "./Header.module.scss";
import IconButton from "@mui/material/IconButton";
import avatarBeekeeper from "../../assets/avatarBeekeeper.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import AppContext from "../../context";

interface UserProps {
    onClockModalOpen: () => void
}


const User: React.FC<UserProps> = ({onClockModalOpen}) => {

    const {user, setUser} = useContext(AppContext);

    const {t} = useTranslation();


    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const onClickLogout = () => {
        setUser(null)
        localStorage.removeItem('access_key')
    }

    const onClickOrderHandler = () => navigate("/order");

    const onClickCartHandler = () => navigate("/cart");

    const onClickDashboardHandler = () => navigate("/dashboard");


    return (
        <div className={s.user}>

            {

                user ?
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <img src={avatarBeekeeper} alt="avatarBeekeeper" width='55px'/>
                    </IconButton>
                    :
                    <div className={s.signIn} onClick={onClockModalOpen}>
                        {t('SignIn')}
                    </div>
            }


            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 29,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem onClick={onClickOrderHandler}>
                    <InventoryRoundedIcon/>
                    <Typography ml={2}>{t('MyOrders')}</Typography>
                </MenuItem>
                <MenuItem onClick={onClickCartHandler}>
                    <ShoppingCartOutlinedIcon/>
                    <Typography ml={2}>{t('Cart')}</Typography>
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon>
                    {t('Settings')}
                </MenuItem>
                {
                    user?.role === 'admin' && <MenuItem onClick={onClickDashboardHandler}>
                        <ListItemIcon>
                            <DashboardCustomizeOutlinedIcon fontSize="small"/>
                        </ListItemIcon>
                        {t('Dashboard')}
                    </MenuItem>
                }
                <MenuItem onClick={onClickLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    {t('Logout')}
                </MenuItem>
            </Menu>
        </div>
    );
};

export default User;