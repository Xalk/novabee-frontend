import React, {useContext, useEffect} from 'react';
import s from './Cart.module.scss'
import emptyBox from '../../assets/emptyBox.png'
import {useTranslation} from "react-i18next";
import AppContext from "../../context";
import CartItem from "./CartItem";
import {API} from "../../api";
import SummaryForm from "./SummaryForm";

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

    const totalPrice = cart?.reduce((a, b) => a + b.price, 0)

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
                                <SummaryForm cartLength={cart?.length} totalPrice={totalPrice}/>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Cart;