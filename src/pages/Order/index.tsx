import React, {useEffect, useState} from 'react';
import s from './Order.module.scss'
import {useTranslation} from "react-i18next";
import {IResUserOrder} from "../../api/types";
import {API} from "../../api";


interface OrderProps {

}

const orderStatus = ["pending", "accepted", "processing", "sent", "received", "rejected"]
const orderColors = ["#ffa726", "#66bb6a", "#80deea", "#29b6f6", "#bdbdbd", "#d32f2f"]

const Order: React.FC<OrderProps> = () => {
    const {t} = useTranslation();
    const [orders, setOrders] = useState<IResUserOrder[]>()

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        try {
            const resOrders = await API.getUserOrder()
            setOrders(resOrders)
        } catch (e) {
            console.log(e)
        }
    }


    const setBgColor = (status: string): string => {
        const idx = orderStatus.indexOf(`${status}`)
        return `${orderStatus[idx] === status && orderColors[idx]}`
    }

    return (
        <div className={s.container}>
            <div className={s.orders}>
                <h2>{t('MyOrders')}</h2>
                <div className={s.items}>
                    {
                        orders?.slice().reverse().map(o => <div className={s.card}>
                            <div className={s.info}>
                                <p className={s.number}><span>{t('MyOrdersPage.Order')}</span> #{o._id.slice(-7)}</p>
                                <p className={s.date}><span>{t('MyOrdersPage.StatusChangeDate')} </span>
                                   {new Date(o.updatedAt).toString().slice(0,24)}
                                </p>
                                <p className={s.status} style={{backgroundColor: setBgColor(o.status)}}>
                                    {t(`MyOrdersPage.Status.${o.status}`)}
                                </p>
                            </div>
                            <div className={s.products}>
                                {
                                    o.products.map(p => <div className={s.card}>
                                        <div className={s.product}>
                                            <img src={`${process.env.REACT_APP_API_URL}`+p.imageUrl} alt="product"/>
                                            <p className={s.name}>{t(`MyOrdersPage.Cards.${p._id}.Name`)}</p>
                                        </div>
                                        <div className={s.quantity}>{t(`CartPage.Quantity`)}</div>
                                        <div className={s.price}>₴{p.price}</div>
                                    </div>)
                                }
                            </div>
                            <div className={s.summary}>
                                <div className={s.location}>
                                    <span>{t('MyOrdersPage.Address')} </span>
                                    {o.address.city},
                                    <br/>
                                    {o.address.street}
                                </div>
                                <div className={s.date}>
                                    <span>{t('MyOrdersPage.OrderDate')} </span>
                                    {new Date(o.createdAt).toString().slice(0,24)}
                                </div>
                                <div className={s.total}>
                                    <span>{t('MyOrdersPage.TotalPrice')} </span>
                                    ₴{o.total}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Order;