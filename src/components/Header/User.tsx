import React from 'react';
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
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface UserProps {

}


const User: React.FC<UserProps> = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const onClickOrderHandler = () => {
        navigate("/order");
    }
    const onClickCartHandler = () => {
        navigate("/cart");
    }

    return (
        <div className={s.user}>
            <p>UA</p>

            {
                // <IconButton
                //     onClick={handleClick}
                //     size="small"
                //     sx={{ml: 2}}
                //     aria-controls={open ? 'account-menu' : undefined}
                //     aria-haspopup="true"
                //     aria-expanded={open ? 'true' : undefined}
                // >
                //     <img src={avatarBeekeeper} alt="avatarBeekeeper" width='55px'/>
                // </IconButton>

                <div className={s.signIn}>
                    Увійти
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
                            right: 14,
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
                    <Typography ml={2}>Мої замовлення</Typography>
                </MenuItem>
                <MenuItem onClick={onClickCartHandler}>
                    <ShoppingCartOutlinedIcon/>
                    <Typography ml={2}>Корзина</Typography>
                </MenuItem>
                <Divider/>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon>
                    Налаштування
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Вийти
                </MenuItem>
            </Menu>
        </div>
    );
};

export default User;