import React, {useState} from 'react';
import s from "../../components/Header/Header.module.scss";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import { HashLink } from 'react-router-hash-link';

interface NavbarProps {
    isMenuVisible:boolean
}


const Navbar : React.FC<NavbarProps> = ({isMenuVisible}) => {

    const {t} = useTranslation();

    function handleClick(lang: string) {
        i18next.changeLanguage(lang)
    }


    const onChangeLang = (lang: string) => {
        handleClick(lang)
    }

 return (
     <div className={`${s.navbar} ${isMenuVisible ? s.visible : ""}`}>
         <ul>
             <li>{t('NovabeeSystem')}</li>
             <HashLink to="/#benefits"><li>{t('Benefits')}</li></HashLink>
             <HashLink to="/#howItWorks"><li>{t('HowItWorks')}</li></HashLink>
             <li>{t('Equipment')}</li>

             <Link to="/shop">
                 <li>{t('Order')}</li>
             </Link>
             <Link to="/faq"><li>FAQ</li></Link>

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
 );
};

export default Navbar;