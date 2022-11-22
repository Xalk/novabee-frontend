import React, {useState} from 'react';
import s from "../../components/Header/Header.module.scss";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";

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
 );
};

export default Navbar;