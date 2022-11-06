import React from 'react';
import s from './Order.module.scss'
import device from "../../assets/device.jpg";
import {useTranslation} from "react-i18next";


interface OrderProps {

}


const Order: React.FC<OrderProps> = () => {
    const { t } = useTranslation();

    return (
        <div className={s.container}>
            <div className={s.orders}>
                <h2>{t('MyOrders')}</h2>
                <div className={s.items}>
                    <div className={s.card}>
                        <div className={s.info}>
                            <p className={s.number}><span>{t('MyOrdersPage.Order')}</span> #3455114</p>
                            <p className={s.date}><span>{t('MyOrdersPage.StatusChangeDate')}</span> 7:03 PM 11/5/2022</p>
                            <p className={s.status}>{t('MyOrdersPage.Status')}</p>
                        </div>
                        <div className={s.products}>
                            <div className={s.card}>
                                <div className={s.product}>
                                    <img src={device} alt="product"/>
                                    <p className={s.name}>Базовий прилад - Novabee</p>
                                </div>
                                <div className={s.quantity}>1 шт</div>
                                <div className={s.price}>₴ 1500</div>
                            </div>
                            <div className={s.card}>
                                <div className={s.product}>
                                    <img src={device} alt="product"/>
                                    <p className={s.name}>Базовий прилад - Novabee</p>
                                </div>
                                <div className={s.quantity}>1 шт</div>
                                <div className={s.price}>₴ 1500</div>
                            </div>
                            <div className={s.card}>
                                <div className={s.product}>
                                    <img src={device} alt="product"/>
                                    <p className={s.name}>Базовий прилад - Novabee</p>
                                </div>
                                <div className={s.quantity}>1 шт</div>
                                <div className={s.price}>₴ 1500</div>
                            </div>
                        </div>
                        <div className={s.summary}>
                            <div className={s.location}>
                                <span>{t('MyOrdersPage.Address')}</span> Київ, вулиця Лугова, 12
                            </div>
                            <div className={s.date}>
                                <span>{t('MyOrdersPage.OrderDate')}</span> 7:03 PM 11/5/2022
                            </div>
                            <div className={s.total}>
                                <span>{t('MyOrdersPage.TotalPrice')}</span> ₴ 4500
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;