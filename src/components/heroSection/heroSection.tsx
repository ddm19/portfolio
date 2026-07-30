import { useTypewriter } from 'hooks/useTypewriter';
import { useTranslation } from 'react-i18next';
import './heroSection.scss';
import { showNotification } from 'redux/notificationSlice';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
    const { t } = useTranslation();
    const words = t('hero.highlightWords', { returnObjects: true }) as string[];
    const text = useTypewriter(words, 100, 50, 1500);
    const dispatch = useDispatch();

    const handleCopyEmail = () => {
        dispatch(showNotification(t('hero.notificationEmailCopied')));
        navigator.clipboard.writeText('domenechmorenodaniel@gmail.com');

    }


    return (
        <section id='hero' className="heroSection customSection">
            <div className="heroSection__content">
                <img draggable="false" src='/logo_engineer.svg' alt="Logo" className="heroSection__logo" />
                <div className="heroSection__textContent">
                    <h2 className="heroSection__title">
                        {t('hero.titlePrefix')} <span className="heroSection__title--highlight">{text}</span> {t('hero.titleSuffix')}
                    </h2>
                    <p className="heroSection__subtitle">
                        {t('hero.subtitle')}
                    </p>
                    <div className='heroSection__buttonContainer'>
                        <a href="https://wa.me/34653582886" target="_blank" rel="noopener noreferrer">
                            <button className="heroSection__ctaPrimary">
                                <FontAwesomeIcon icon={faWhatsapp} /> {t('hero.buttonWhatsapp')}
                            </button>
                        </a>
                        <a href="#projects">
                            <button>{t('hero.buttonProjects')}</button>
                        </a>
                        <button className="heroSection__ctaTertiary" onClick={handleCopyEmail}>
                            {t('hero.buttonCopy')}
                        </button>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default HeroSection;
