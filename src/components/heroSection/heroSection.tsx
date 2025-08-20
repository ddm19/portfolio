import { useTypewriter } from 'hooks/useTypewriter';
import { useTranslation } from 'react-i18next';
import './heroSection.scss';
import { showNotification } from 'redux/notificationSlice';
import { useDispatch } from 'react-redux';

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

                <div>
                    <h1 className="heroSection__title">
                        {t('hero.titlePrefix')} <span className="heroSection__title--highlight">{text}</span> {t('hero.titleSuffix')}
                    </h1>
                    <p className="heroSection__subtitle">
                        {t('hero.subtitle')}
                    </p>
                    <div className='heroSection__buttonContainer'>
                        <button>
                            <a href="#contact">{t('hero.buttonContact')}</a>
                        </button>
                        <button onClick={handleCopyEmail}>
                            {t('hero.buttonCopy')}
                        </button>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default HeroSection;