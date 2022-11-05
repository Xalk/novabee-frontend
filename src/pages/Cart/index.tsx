import React from 'react';
import s from './Cart.module.scss'
import device from '../../assets/device.jpg'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import {TextField} from "@mui/material";

interface CartProps {

}


const Cart: React.FC<CartProps> = () => {
    return (
        <div className={s.container}>
            <div className={s.cart}>

                <div className={s.main}>
                    <div className={s.items}>
                        <div className={s.top}>
                            <h2>Корзина</h2>
                            <p>3 предмети</p>
                        </div>
                        <div className={s.card}>
                            <div className={s.product}>
                                <img src={device} alt="product"/>
                                <p className={s.name}>Базовий прилад - Novabee</p>
                            </div>
                            <div className={s.quantity}>1 шт</div>
                            <div className={s.price}>₴ 1500</div>
                            <HighlightOffOutlinedIcon/>
                        </div>
                        <div className={s.card}>
                            <div className={s.product}>
                                <img src={device} alt="product"/>
                                <p className={s.name}>Базовий прилад - Novabee</p>
                            </div>
                            <div className={s.quantity}>1 шт</div>
                            <div className={s.price}>₴ 1500</div>
                            <HighlightOffOutlinedIcon/>
                        </div>
                        <div className={s.card}>
                            <div className={s.product}>
                                <img src={device} alt="product"/>
                                <p className={s.name}>Базовий прилад - Novabee</p>
                            </div>
                            <div className={s.quantity}>1 шт</div>
                            <div className={s.price}>₴ 1500</div>
                            <HighlightOffOutlinedIcon/>
                        </div>
                    </div>
                    <div className={s.summary}>
                        <h3>Підсумок</h3>
                        <p><span>Всього:</span> 3 предмети</p>
                        <div className={s.fields}>
                            <p>Доставка</p>
                            <TextField id="outlined-basic" label="Введіть місто" variant="outlined"/>
                            <TextField id="outlined-basic" label="Введіть вулицю" variant="outlined"/>
                        </div>
                        <div className={s.total}>
                            <p>ЗАГАЛЬНА СУМА</p>
                            <p>₴ 1500</p>
                        </div>
                        <button>Оформити</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;