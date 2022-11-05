import * as React from 'react';
import s from './Header.module.scss'
import logoWithName from '../../assets/logoWithName.svg';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Link} from "react-router-dom";


import User from "./User";


function Header() {


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
                        <img src={logoWithName} alt="logoWithName" className={s.logo}/>
                    </Link>
                    <div className={s.navbar}>
                        <ul>
                            <li>Система Novabee</li>
                            <li>Користь</li>
                            <li>Як це працює</li>
                            <li>Обладнання</li>

                            <Link to="/shop">
                                <li>Замовити</li>
                            </Link>
                            <li>FAQ</li>

                        </ul>
                    </div>
                    <User/>

                </div>
            </div>


        </header>
    );
}

export default Header;
