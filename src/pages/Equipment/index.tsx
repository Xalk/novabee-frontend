import React from 'react';
import s from './Equipment.module.scss'
import EqComponents from '../../assets/eq_components.jpg'
import dht from '../../assets/dht11.jpg'
import {useTranslation} from "react-i18next";




const Equipment: React.FC = () => {

    const {t} = useTranslation();
    return (
        <div className={s.container}>
            <h2>{t('EquipmentPage.Materials')}</h2>
            <p>{t('EquipmentPage.Text1')}</p>
            <img src={EqComponents} alt="eq_components"/>
            <h2>{t('EquipmentPage.TemperatureSensor')}</h2>
            <p>{t('EquipmentPage.Text2')}</p>
            <img src={dht} alt="dht"/>
            <p>{t('EquipmentPage.Text3')}</p>
        </div>
    );
};

export default Equipment;