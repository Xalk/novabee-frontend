import * as React from 'react';
import s from './Header.module.scss'
import logoWithName from '../../assets/logoWithName.svg';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Link} from "react-router-dom";


import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

import User from "./User";
import Signing from "../Signing";


function Header() {

    const {t} = useTranslation();

    function handleClick(lang: string) {
        i18next.changeLanguage(lang)
    }


    const onChangeLang = (lang: string) => {
        handleClick(lang)
    }

    const [openSigning, setSigningOpen] = React.useState(false);


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
                            <li>{t('NovabeeSystem')}</li>
                            <li>{t('Benefits')}</li>
                            <li>{t('HowItWorks')}</li>
                            <li>{t('Equipment')}</li>

                            <Link to="/shop">
                                <li>{t('Order')}</li>
                            </Link>
                            <li>FAQ</li>

                            <select onChange={(e) => onChangeLang(e.target.value)}>
                                <option value='uk'>
                                    UA
                                </option>
                                <option value='en'>
                                    EN
                                </option>
                            </select>

                        </ul>
                    </div>
                    <User onClockModalOpen={()=> setSigningOpen(true)}/>
                    <Signing openSigning={openSigning} setSigningOpen={(b)=>setSigningOpen(b)}/>

                </div>
            </div>

        </header>
    );
}

export default Header;
