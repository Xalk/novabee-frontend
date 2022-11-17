import React, {useContext, useEffect, useState} from 'react';
import s from './Cart.module.scss'
import emptyBox from '../../assets/emptyBox.png'
import {TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import AppContext from "../../context";
import CartItem from "./CartItem";
import {API} from "../../api";

interface CartProps {

}


const Cart: React.FC<CartProps> = () => {
    const {t} = useTranslation();

    const {cart, setCart} = useContext(AppContext);

    useEffect(() => {
        fetchCart()
    }, [])

    const fetchCart = async () => {
        try {
            const resCart = await API.getCart()
            setCart(resCart)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={s.container}>
            {
                cart?.length === 0 ? <div className={s.empty}>
                    <img src={emptyBox} alt="emptyBox"/>
                    <h2>{t('CartPage.EmptyCart')}</h2>
                    <p>{t('CartPage.EmptyCartDescr')}</p>

                </div> : (
                    <div className={s.cart}>

                        <div className={s.main}>
                            <div className={s.items}>
                                <div className={s.top}>
                                    <h2>{t('Cart')}</h2>
                                    <p>{t('CartPage.Total')} {cart?.length}</p>
                                </div>
                                {
                                    cart?.map((c, i) => <CartItem key={c._id} product={c} index={i}/>)
                                }
                            </div>
                            <div className={s.summary}>
                                <h3>{t('CartPage.Summary')}</h3>
                                <p><span>{t('CartPage.Total')}</span> {cart?.length}</p>
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
                )
            }

        </div>
    );
};

export default Cart;