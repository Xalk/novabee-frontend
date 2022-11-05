import React from 'react';
import s from './Footer.module.scss'
import fc from '../../assets/facebook-brands.svg'
import ig from '../../assets/instagram-brands.svg'
import yt from '../../assets/youtube-brands.svg'
import googlePlayDownload from "../../assets/googlePlayDownload.svg";
import appleDownload from "../../assets/Apple-download.svg";

interface FooterProps {

}


const Footer: React.FC<FooterProps> = () => {
    return (
        <footer>
            <div className={s.inner}>
                <div className={s.info}>
                    <h3>Nova<span>bee</span> - розумна пасіка <br/>
                        у вашому смартфоні!</h3>
                    <p>Контролюйте стан кожного вулика, <br/> ведіть облік всіх дій, отримуйте миттєві <br/> повідомлення в разі
                        екстрених ситуацій</p>
                </div>
                <div className={s.contacts}>
                    <h3>Наші соціальні мережі:</h3>
                    <div className={s.social}>
                        <img src={fc} alt="facebook" width='25px'/>
                        <img src={ig} alt="instagram" width='25px'/>
                        <img src={yt} alt="youtube" width='25px'/>
                    </div>
                </div>
                <div className={s.app}>
                    <div className={s.downloads}>
                        <img src={googlePlayDownload} alt="google play"/>
                        <img src={appleDownload} alt="apple store"/>
                    </div>
                    <div className={s.links}>
                        <a>Політика конфіденційності</a>
                        <a>Публічна оферта на обладнання</a>
                        <a>Публічная оферта на послуги</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;