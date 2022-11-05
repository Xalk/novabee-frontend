import React from 'react';
import s from './Order.module.scss'
import device from "../../assets/device.jpg";


interface OrderProps {

}


const Order: React.FC<OrderProps> = () => {
    return (
        <div className={s.container}>
            <div className={s.orders}>
                <h2>Мої замовлення</h2>
                <div className={s.items}>
                    <div className={s.card}>
                        <div className={s.info}>
                            <p className={s.number}><span>Замовлення</span> #3455114</p>
                            <p className={s.date}><span>Дата змінення статуса:</span> 7:03 PM 11/5/2022</p>
                            <p className={s.status}>В очікуванні</p>
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
                                <span>Адреса:</span> Київ, вулиця Лугова, 12
                            </div>
                            <div className={s.date}>
                                <span>Дата оформлення:</span> 7:03 PM 11/5/2022
                            </div>
                            <div className={s.total}>
                                <span>Всього:</span> ₴ 4500
                            </div>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.info}>
                            <p className={s.number}><span>Замовлення</span> #3455114</p>
                            <p className={s.date}><span>Дата змінення статуса:</span> 7:03 PM 11/5/2022</p>
                            <p className={s.status}>В очікуванні</p>
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
                                <span>Адреса:</span> Київ, вулиця Лугова, 12
                            </div>
                            <div className={s.date}>
                                <span>Дата оформлення:</span> 7:03 PM 11/5/2022
                            </div>
                            <div className={s.total}>
                                <span>Всього:</span> ₴ 4500
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;