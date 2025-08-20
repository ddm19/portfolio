import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPaintbrush, faMobileScreen, faMagnifyingGlassChart, faGears, faGlobe, faWandMagicSparkles, faComments, faWrench } from "@fortawesome/free-solid-svg-icons";
import CustomCard from "components/card/customCard";
import { useTranslation } from 'react-i18next';
import "./services.scss";

export default function Services() {
    const { t } = useTranslation();

    const SERVICES = [
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faGlobe} className="card__icon" /> {t('services.web.title')}</span>,
            description: t('services.web.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.web.budget')}</button>
                </a>,
                <a href="#projects" className="card__link">
                    <button className="card__button">{t('services.web.projects')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faCartShopping} className="card__icon" /> {t('services.ecommerce.title')}</span>,
            description: t('services.ecommerce.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.ecommerce.start')}</button>
                </a>,
                <a href="#projects" className="card__link">
                    <button className="card__button">{t('services.ecommerce.cases')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faPaintbrush} className="card__icon" /> {t('services.uiux.title')}</span>,
            description: t('services.uiux.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.uiux.start')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faMobileScreen} className="card__icon" /> {t('services.uxui.title')}</span>,
            description: t('services.uxui.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.uxui.audit')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faMagnifyingGlassChart} className="card__icon" /> {t('services.seo.title')}</span>,
            description: t('services.seo.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.seo.improve')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faGears} className="card__icon" /> {t('services.integrations.title')}</span>,
            description: t('services.integrations.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.integrations.integrate')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faWandMagicSparkles} className="card__icon" />{t('services.automations.title')}</span>,
            description: t('services.automations.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.automations.optimize')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faComments} className="card__icon" /> {t('services.consulting.title')}</span>,
            description: t('services.consulting.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.consulting.schedule')}</button>
                </a>,
            ]
        },
        {
            title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faWrench} className="card__icon" /> {t('services.custom.title')}</span>,
            description: t('services.custom.description'),
            links: [
                <a href="#contact" className="card__link">
                    <button className="card__button">{t('services.custom.create')}</button>
                </a>,
            ]
        },

    ];

    return (
        <section id="services" className="services customSection">
            <h2 className="services__title">{t('services.title')}</h2>
            <p className="services__subtitle">{t('services.subtitle')}</p>

            <div className="services__grid">
                {SERVICES.map((s, index) => (
                    <CustomCard
                        key={index}
                        title={s.title}
                        description={s.description}
                        links={s.links}
                    />
                ))}
            </div>
        </section>
    );
}
