import React, {useContext} from 'react';
import s from './Shop.module.scss'
import {useTranslation} from "react-i18next";
import AppContext from "../../context";


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
                        products?.data.map((p, i)=> <div className={s.card} key={p._id}>
                            <h3>{t(`ShopPage.Cards.${i+1}.Name`)}</h3>
                            <p className={s.price}>₴ {p.price}</p>
                            <img src={'http://localhost:5000'+p.imageUrl} alt="product" width={200} height={150}/>
                            <p>{t(`ShopPage.Cards.${i+1}.Descr`)}</p>

                            <button>{t('ShopPage.OrderBtn')}</button>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Shop;