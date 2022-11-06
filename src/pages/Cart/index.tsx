import React from 'react';
import s from './Cart.module.scss'
import device from '../../assets/device.jpg'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import {TextField} from "@mui/material";
import {useTranslation} from "react-i18next";

interface CartProps {

}


const Cart: React.FC<CartProps> = () => {
    const { t } = useTranslation();

    return (
        <div className={s.container}>
            <div className={s.cart}>

                <div className={s.main}>
                    <div className={s.items}>
                        <div className={s.top}>
                            <h2>{t('Cart')}</h2>
                            <p>3 {t('CartPage.Items')}</p>
                        </div>
                        <div className={s.card}>
                            <div className={s.product}>
                                <img src={device} alt="product"/>
                                <p className={s.name}>Базовий прилад - Novabee</p>
                            </div>
                            <div className={s.quantity}>1 шт</div>
                            <div className={s.price}>₴ 1500</div>
                            <HighlightOffOutlinedIcon/>
                        </div>
                        <div className={s.card}>
                            <div className={s.product}>
                                <img src={device} alt="product"/>
                                <p className={s.name}>Базовий прилад - Novabee</p>
                            </div>
                            <div className={s.quantity}>1 шт</div>
                            <div className={s.price}>₴ 1500</div>
                            <HighlightOffOutlinedIcon/>
                        </div>
                        <div className={s.card}>
                            <div className={s.product}>
                                <img src={device} alt="product"/>
                                <p className={s.name}>Базовий прилад - Novabee</p>
                            </div>
                            <div className={s.quantity}>1 шт</div>
                            <div className={s.price}>₴ 1500</div>
                            <HighlightOffOutlinedIcon/>
                        </div>
                    </div>
                    <div className={s.summary}>
                        <h3>{t('CartPage.Summary')}</h3>
                        <p><span>{t('CartPage.Total')}</span> 3 {t('CartPage.Items')}</p>
                        <div className={s.fields}>
                            <p>{t('CartPage.Delivery')}</p>
                            <TextField id="outlined-basic" label={t('CartPage.City')} variant="outlined"/>
                            <TextField id="outlined-basic" label={t('CartPage.Address')} variant="outlined"/>
                        </div>
                        <div className={s.total}>
                            <p>{t('CartPage.TotalPrice')}</p>
                            <p>₴ 1500</p>
                        </div>
                        <button>{t('CartPage.Checkout')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;