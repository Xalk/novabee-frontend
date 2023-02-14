import React from 'react';
import s from './Shop.module.scss'
import {useTranslation} from "react-i18next";
import ProductItem from "./ProductItem";
import useAppContext from "../../utils/hooks/useAppContext";


interface ShopProps {

}


const Shop: React.FC<ShopProps> = () => {
    const {t} = useTranslation();

    const {products} = useAppContext();



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