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

interface HomeProps {

}


const Home: React.FC<HomeProps> = () => {
    return (
        <div className={s.container}>
            <div className={s.start}>
                <div className={s.left}>
                    <div className={s.quickInfo}>
                        <h1>
                            Nova<span>bee</span> - розумна пасіка <br/>у вашому смартфоні!
                        </h1>
                        <p>
                            Контролюйте стан кожного вулика, <br/>ведіть облік всіх дій, отримуйте <br/>миттєві
                            повідомлення
                            в
                            разі екстрених ситуацій
                        </p>

                        <div className={s.buttons}>
                            <button>
                                Замовити
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
                            perPage: 2,
                            drag: false,
                            autoplay : true,
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
            <div className={s.benefits}>
                <div className={s.inner}>

                    <h2>Що отримує бджоляр</h2>
                    <div className={s.grid}>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>Миттєве сповіщення в разі будь-яких позаштатних ситуацій</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>Миттєве сповіщення в разі будь-яких позаштатних ситуацій</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>Миттєве сповіщення в разі будь-яких позаштатних ситуацій</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>Миттєве сповіщення в разі будь-яких позаштатних ситуацій</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>Миттєве сповіщення в разі будь-яких позаштатних ситуацій</p>
                        </div>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>Миттєве сповіщення в разі будь-яких позаштатних ситуацій</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.howItWorks}>
                <h2>Як це працює</h2>
                <div className={s.description}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, commodi dignissimos est
                        facilis ipsa libero maiores maxime mollitia officia possimus quod rerum sapiente tenetur unde
                        veritatis. Odio similique sunt tenetur?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, commodi dignissimos est
                        facilis ipsa libero maiores maxime mollitia officia possimus quod rerum sapiente tenetur unde
                        veritatis. Odio similique sunt tenetur?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, commodi dignissimos est
                        facilis ipsa libero maiores maxime mollitia officia possimus quod rerum sapiente tenetur unde
                        veritatis. Odio similique sunt tenetur?</p>

                </div>
            </div>
        </div>
    );
};

export default Home;