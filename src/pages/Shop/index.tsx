import React from 'react';
import s from './Shop.module.scss'
import device from '../../assets/device.jpg'
import {useTranslation} from "react-i18next";


interface ShopProps {

}


const Shop: React.FC<ShopProps> = () => {
    const { t } = useTranslation();

    return (
        <div className={s.container}>
            <div className={s.products}>
                <h2>{t('Order')}</h2>
                <div className={s.grid}>
                    <div className={s.card}>
                        <h3>{t('ShopPage.Cards.1.Name')}</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>{t('ShopPage.Cards.1.Descr')}</p>
                        <img src={device} alt="device" width={200}/>
                        <button>{t('ShopPage.Cards.1.OrderBtn')}</button>
                    </div><div className={s.card}>
                        <h3>{t('ShopPage.Cards.1.Name')}</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>{t('ShopPage.Cards.1.Descr')}</p>
                        <img src={device} alt="device" width={200}/>
                        <button>{t('ShopPage.Cards.1.OrderBtn')}</button>
                    </div><div className={s.card}>
                        <h3>{t('ShopPage.Cards.1.Name')}</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>{t('ShopPage.Cards.1.Descr')}</p>
                        <img src={device} alt="device" width={200}/>
                        <button>{t('ShopPage.Cards.1.OrderBtn')}</button>
                    </div><div className={s.card}>
                        <h3>{t('ShopPage.Cards.1.Name')}</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>{t('ShopPage.Cards.1.Descr')}</p>
                        <img src={device} alt="device" width={200}/>
                        <button>{t('ShopPage.Cards.1.OrderBtn')}</button>
                    </div><div className={s.card}>
                        <h3>{t('ShopPage.Cards.1.Name')}</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>{t('ShopPage.Cards.1.Descr')}</p>
                        <img src={device} alt="device" width={200}/>
                        <button>{t('ShopPage.Cards.1.OrderBtn')}</button>
                    </div><div className={s.card}>
                        <h3>{t('ShopPage.Cards.1.Name')}</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>{t('ShopPage.Cards.1.Descr')}</p>
                        <img src={device} alt="device" width={200}/>
                        <button>{t('ShopPage.Cards.1.OrderBtn')}</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Shop;