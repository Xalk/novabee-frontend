import React, {useContext, useState} from 'react';
import s from "./Shop.module.scss";
import {IProduct} from "../../context/types";
import {useTranslation} from "react-i18next";
import {API} from "../../api";
import AppContext from "../../context";
import {useNavigate} from "react-router-dom";

interface ProductItemProps {
    product: IProduct
    index: number
}


const ProductItem: React.FC<ProductItemProps> = ({product, index}) => {

    const navigate = useNavigate()
    const {cart} = useContext(AppContext);
    const isAdded = cart?.some(c => c._id === product._id)

    const {t} = useTranslation();
    const [isAddedToCart, setIsAddedToCart] = useState(isAdded)
    const onClickAddToCart = async () => {
        try {
            setIsAddedToCart(true)
            await API.addToCart(product._id)
        } catch (e) {
            console.log(e)
        }
    }
    const onClickToCart = async () => {
        try {
            navigate('/cart')
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className={s.card} key={product._id}>
            <h3>{t(`ShopPage.Cards.${index + 1}.Name`)}</h3>
            <p className={s.price}>₴ {product.price}</p>
            <img src={'http://192.168.0.103:5000' + product.imageUrl} alt="product"/>
            <p>{t(`ShopPage.Cards.${index + 1}.Descr`)}</p>

            {
                isAddedToCart ? <button onClick={onClickToCart}>{t('ShopPage.GoToCart')}</button> :
                    <button onClick={onClickAddToCart}>{t('ShopPage.OrderBtn')}</button>

            }
        </div>
    );
};

export default ProductItem;