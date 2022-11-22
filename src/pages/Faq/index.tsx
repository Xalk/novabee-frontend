import React from 'react';
import FaqComponent from 'react-faq-component';

import s from './Faq.module.scss'
import {useTranslation} from "react-i18next";

interface FaqProps {

}



const Faq: React.FC<FaqProps> = () => {

    const {t} = useTranslation();

    const data = {
        title: t('FaqPage.Title'),
        rows: [
            {
                title: t('FaqPage.q1.title'),
                content: t('FaqPage.q1.content')
            },
            {
                title: t('FaqPage.q2.title'),
                content: t('FaqPage.q2.content')
            },
            {
                title: t('FaqPage.q3.title'),
                content: t('FaqPage.q3.content')
            },
            {
                title: t('FaqPage.q4.title'),
                content: t('FaqPage.q4.content')
            }]
    }

    return (
        <div className={s.container}>
            <FaqComponent data={data}/>
        </div>
    );
};

export default Faq;