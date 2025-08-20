import CustomCard from "components/card/customCard";
import './special.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHandshake, faLightbulb, faWrench } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next';

const Special = () => {
    const { t } = useTranslation();
    const specials = [
        {
            title: t('special.items.specialized.title'),
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faBrain} className="card__icon" /> {t('special.items.specialized.description')}</span>,
        },
        {
            title: t('special.items.innovation.title'),
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faLightbulb} className="card__icon" /> {t('special.items.innovation.description')}</span>,
        },
        {
            title: t('special.items.collaboration.title'),
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faHandshake} className="card__icon" /> {t('special.items.collaboration.description')}</span>,
        },
        {
            title: t('special.items.results.title'),
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faWrench} className="card__icon" /> {t('special.items.results.description')}</span>,
        },
    ];
    return (
        <div className="specialContainer">
            <h2 className="specialContainer__title">{t('special.title')}</h2>

            <div className="specialContainer__cards">
                {specials.map((special, index) => (
                    <CustomCard key={index} {...special} />
                ))}
            </div>
        </div>
    );
}

export default Special;

