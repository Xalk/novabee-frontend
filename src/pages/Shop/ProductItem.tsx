import React,  {useState} from 'react';
import s from "./Shop.module.scss";
import {IProduct} from "../../context/types";
import {useTranslation} from "react-i18next";
import {API} from "../../api";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/hooks/useAuth";
import useAppContext from "../../utils/hooks/useAppContext";

interface ProductItemProps {
    product: IProduct
    index: number
}


const ProductItem: React.FC<ProductItemProps> = ({product, index}) => {

    const navigate = useNavigate()
    const {cart, setCart} = useAppContext();
    const isAdded = cart?.some(c => c._id === product._id)

    const {t} = useTranslation();
    const [isAddedToCart, setIsAddedToCart] = useState(isAdded)

    const isAuth = useAuth()
    const onClickAddToCart = async () => {
        try {
            if(!isAuth){
                setCart([...cart, product])
            }else {
                await API.addToCart(product._id)
            }
            setIsAddedToCart(true)
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
            <img src={`${process.env.REACT_APP_API_URL}` + product.imageUrl} alt="product"/>
            <p>{t(`ShopPage.Cards.${index + 1}.Descr`)}</p>

            {
                isAddedToCart ? <button onClick={onClickToCart}>{t('ShopPage.GoToCart')}</button> :
                    <button onClick={onClickAddToCart}>{t('ShopPage.OrderBtn')}</button>

            }
        </div>
    );
};

export default ProductItem;