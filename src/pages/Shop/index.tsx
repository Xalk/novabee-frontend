import React from 'react';
import s from './Shop.module.scss'
import device from '../../assets/device.jpg'


interface ShopProps {

}


const Shop: React.FC<ShopProps> = () => {
    return (
        <div className={s.container}>
            <div className={s.products}>
                <h2>Замовити</h2>
                <div className={s.grid}>
                    <div className={s.card}>
                        <h3>Базовий прилад - Novabee</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>Миттєве отримання важливої інформації про вулик</p>
                        <img src={device} alt="device" width={200}/>
                        <button>Додати в корзину</button>
                    </div><div className={s.card}>
                        <h3>Базовий прилад - Novabee</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>Миттєве отримання важливої інформації про вулик</p>
                        <img src={device} alt="device" width={200}/>
                        <button>Додати в корзину</button>
                    </div><div className={s.card}>
                        <h3>Базовий прилад - Novabee</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>Миттєве отримання важливої інформації про вулик</p>
                        <img src={device} alt="device" width={200}/>
                        <button>Додати в корзину</button>
                    </div><div className={s.card}>
                        <h3>Базовий прилад - Novabee</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>Миттєве отримання важливої інформації про вулик</p>
                        <img src={device} alt="device" width={200}/>
                        <button>Додати в корзину</button>
                    </div><div className={s.card}>
                        <h3>Базовий прилад - Novabee</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>Миттєве отримання важливої інформації про вулик</p>
                        <img src={device} alt="device" width={200}/>
                        <button>Додати в корзину</button>
                    </div><div className={s.card}>
                        <h3>Базовий прилад - Novabee</h3>
                        <p className={s.price}>₴ 1500</p>
                        <p>Миттєве отримання важливої інформації про вулик</p>
                        <img src={device} alt="device" width={200}/>
                        <button>Додати в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;