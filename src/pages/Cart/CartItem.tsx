import React, {useContext} from 'react';
import s from "./Cart.module.scss";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import {IProduct} from "../../context/types";
import {API} from "../../api";
import AppContext from "../../context";
import {useTranslation} from "react-i18next";

interface CartItemProps {
    product: IProduct
    index: number
}


const CartItem: React.FC<CartItemProps> = ({product, index}) => {
    const {t} = useTranslation();
    const {cart, setCart} = useContext(AppContext);

    const onClickRemove = async () => {
        try {
            setCart(cart && cart?.filter(c => c._id !== product._id))
            await API.removeFromCart(product._id)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={s.card}>
            <div className={s.product}>
                <img src={`${process.env.REACT_APP_API_URL}` + product.imageUrl} alt="product"/>
                <p className={s.name}>{t(`MyOrdersPage.Cards.${product._id}.Name`)}</p>
            </div>
            <div className={s.quantity}>{t(`CartPage.Quantity`)}</div>
            <div className={s.price}>₴{product.price}</div>
            <HighlightOffOutlinedIcon onClick={onClickRemove}/>
        </div>
    );
};

export default CartItem;