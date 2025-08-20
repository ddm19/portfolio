import { useTranslation } from 'react-i18next';
import './languageSwitcher.scss';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const current = i18n.language;
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="languageSwitcher">
            <button
                className={current === 'es' ? 'active' : ''}
                onClick={() => changeLanguage('es')}
            >
                <svg width="1.6rem" height="1.6rem" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="#AD1519" />
                    <rect y="150" width="900" height="300" fill="#FCD116" />
                    <rect y="450" width="900" height="150" fill="#AD1519" />
                </svg>
                ES
            </button>
            <button
                className={current === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="1.6rem" height="1.6rem">
                    <clipPath id="s">
                        <path d="M0,0 v30 h60 v-30 z" />
                    </clipPath>
                    <clipPath id="t">
                        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                    </clipPath>
                    <g clip-path="url(#s)">
                        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
                        <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
                    </g>
                </svg>
                EN
            </button>
        </div>
    );
}
