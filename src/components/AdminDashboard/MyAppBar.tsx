import * as React from 'react';
import {AppBar} from 'react-admin';
import logo from '../../assets/logoWithName.svg';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@material-ui/core/IconButton'
import {useNavigate} from "react-router-dom";


const MyAppBar = (props: any) => {
    const navigate = useNavigate();
    const onClickOrderHandler = () => navigate("/");
    return (
        <AppBar
            sx={{
                "& .MuiToolbar-root": {
                    justifyContent: "space-between"
                },
                "& .RaAppBar-title": {
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                },
            }}
            {...props}
        >
            <img src={logo} alt="logo" width={150}/>
            <span style={{flex: 1}}/>
            <IconButton color="inherit" onClick={onClickOrderHandler}>
                <HomeRoundedIcon/>
            </IconButton>

        </AppBar>
    );
}


export default MyAppBar;