import * as React from 'react';
import {useState} from "react";
import s from './Header.module.scss'
import logoWithName from '../../assets/logoWithName.svg';
import logo from '../../assets/logo.svg';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Link} from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


import User from "./User";
import Signing from "../Signing";
import IconButton from "@mui/material/IconButton";
import useWindowDimensions from "../../utils/hooks";
import Navbar from "../../pages/Home/Navbar";


function Header() {


    const [openSigning, setSigningOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false)


    const {width} = useWindowDimensions()

    return (
        <header>
            <div className={s.top}>
                <ul>
                    <li>
                        <LocalPhoneOutlinedIcon/>
                        +380 99 888 77 66
                    </li>
                    <li>
                        <LocalPhoneOutlinedIcon/>
                        +380 99 888 77 66
                    </li>
                    <li>
                        <EmailOutlinedIcon/>
                        sales@novabee.net
                    </li>
                </ul>
            </div>
            <div className={s.bottom}>
                <div className={s.inner}>

                    <Link to="/">
                        <img src={width < 767 ? logo : logoWithName} alt="logoWithName" className={s.logo}/>
                    </Link>
                    {
                        width < 767 ? (
                            <IconButton onClick={() => setIsMenuVisible(prev => !prev)} sx={{marginLeft: '20px'}}>
                                <MenuRoundedIcon fontSize={'large'}/>
                            </IconButton>
                        ) : (<Navbar isMenuVisible={isMenuVisible} onClickCloseMenu={() => setIsMenuVisible(false)}/>)
                    }
                    <User
                        onClockModalOpen={() => setSigningOpen(true)}/>

                </div>

            </div>
            {width < 767 && <Navbar isMenuVisible={isMenuVisible} onClickCloseMenu={() => setIsMenuVisible(false)}/>}
            <Signing openSigning={openSigning} setSigningOpen={(b) => setSigningOpen(b)}/>
        </header>
    );
}

export default Header;
