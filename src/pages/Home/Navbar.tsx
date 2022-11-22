import React from 'react';
import s from "../../components/Header/Header.module.scss";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {HashLink} from 'react-router-hash-link';

interface NavbarProps {
    isMenuVisible: boolean
    onClickCloseMenu ?: ()=>void
}


const Navbar: React.FC<NavbarProps> = ({isMenuVisible, onClickCloseMenu}) => {

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
                <HashLink to="/#benefits" onClick={onClickCloseMenu}>
                    <li>{t('Benefits')}</li>
                </HashLink>
                <HashLink to="/#howItWorks" onClick={onClickCloseMenu}>
                    <li>{t('HowItWorks')}</li>
                </HashLink>
                <Link to="/equipment" onClick={onClickCloseMenu}>
                    <li>{t('Equipment')}</li>
                </Link>

                <Link to="/shop" onClick={onClickCloseMenu}>
                    <li>{t('Order')}</li>
                </Link>
                <Link to="/faq" onClick={onClickCloseMenu}>
                    <li>FAQ</li>
                </Link>

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