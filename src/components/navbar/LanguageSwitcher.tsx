import { useTranslation } from 'react-i18next';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './languageSwitcher.scss';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const current = i18n.language;
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-switcher">
            <FontAwesomeIcon icon={faGlobe} className="language-switcher__icon" />
            <button
                className={current === 'es' ? 'active' : ''}
                onClick={() => changeLanguage('es')}
            >
                ES
            </button>
            <button
                className={current === 'en' ? 'active' : ''}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
        </div>
    );
}
