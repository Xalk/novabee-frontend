import React, {useContext} from 'react';
import s from './Shop.module.scss'
import {useTranslation} from "react-i18next";
import AppContext from "../../context";
import ProductItem from "./ProductItem";


interface ShopProps {

}


const Shop: React.FC<ShopProps> = () => {
    const {t} = useTranslation();

    const {products} = useContext(AppContext);



    return (
        <div className={s.container}>
            <div className={s.products}>
                <h2>{t('Order')}</h2>
                <div className={s.grid}>
                    {
                        products?.data.map((p, i)=> <ProductItem key={p._id} product={p} index={i}/>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Shop;