import React from 'react';
import s from './Home.module.scss'
import googlePlayDownload from '../../assets/googlePlayDownload.svg'
import appleDownload from '../../assets/Apple-download.svg'
import sliderImageTemp1 from '../../assets/sliderImageTemp1.jpg'
import sliderImageTemp2 from '../../assets/sliderImageTemp2.jpg'
import sliderImageTemp3 from '../../assets/sliderImageTemp3.jpg'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useWindowDimensions from "../../utils/hooks";

interface HomeProps {

}


const Home: React.FC<HomeProps> = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const onClickCartHandler = () => {
        navigate("/shop");
    }

    const {width} = useWindowDimensions()


    return (
        <div className={s.container}>
            <div className={s.start}>
                <div className={s.left}>
                    <div className={s.quickInfo}>
                        <h1>
                            Nova<span>bee</span> - {t('HomePage.Tagline')}
                        </h1>
                        <p>
                            {t('HomePage.MainDescription')}
                        </p>

                        <div className={s.buttons}>
                            <button onClick={onClickCartHandler}>
                                {t('Order')}
                            </button>
                            <div className={s.download}>
                                <img src={googlePlayDownload} alt="google play"/>
                                <img src={appleDownload} alt="apple store"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.slider}>
                        <Splide options={{
                            type: 'loop',
                            perPage: width < 500 ? 1 : 2,
                            drag: false,
                            autoplay: true,
                            interval: 2000,
                            wheel: true,
                            width: '500px',
                            // height: '350px',
                            gap: '10px'
                        }}>
                            <SplideSlide>
                                <div className={s.imageBlock}>
                                    <img src={sliderImageTemp1} alt="sliderImageTemp" width='170px'/>
                                </div>

                            </SplideSlide>
                            <SplideSlide>
                                <div className={s.imageBlock}>
                                    <img src={sliderImageTemp2} alt="sliderImageTemp" width='170px'/>
                                </div>

                            </SplideSlide>
                            <SplideSlide>
                                <div className={s.imageBlock}>
                                    <img src={sliderImageTemp3} alt="sliderImageTemp" width='170px'/>
                                </div>

                            </SplideSlide>

                        </Splide>
                    </div>
                </div>
            </div>
            <div className={s.benefits} id="benefits">
                <div className={s.inner}>

                    <h2>{t('HomePage.Benefits')}</h2>
                    <div className={s.grid}>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Card1')}</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Card1')}</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Card1')}</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Card1')}</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Card1')}</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Card1')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.howItWorks} id="howItWorks">
                <h2>{t('HowItWorks')}</h2>
                <div className={s.description}>
                    <p>
                        {t('HomePage.HowItWorksDescription.1')}
                    </p>
                    <p>
                        {t('HomePage.HowItWorksDescription.2')}
                    </p>
                    <p>
                        {t('HomePage.HowItWorksDescription.3')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;