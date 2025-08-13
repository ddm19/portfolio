import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPaintbrush, faMobileScreen, faMagnifyingGlassChart, faGears, faBolt, faShield, faGlobe, faWandMagic, faWandMagicSparkles, faComments, faWrench } from "@fortawesome/free-solid-svg-icons";
import CustomCard from "components/card/customCard";
import "./services.scss";

const SERVICES = [
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faGlobe} className="card__icon" /> Desarrollo Web</span>,
        description: "Sitios rápidos, accesibles y optimizados para SEO con stack moderno.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Solicita un presupuesto</button>
            </a>,
            <a href="#projects" className="card__link">
                <button className="card__button">Ver proyectos</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faCartShopping} className="card__icon" /> E‑commerce</span>,
        description: "Tiendas online seguras y escalables, con pasarelas de pago integradas.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Quiero Empezar a vender</button>
            </a>,
            <a href="#projects" className="card__link">
                <button className="card__button">Casos de uso</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faPaintbrush} className="card__icon" /> UI/UX</span>,
        description: "Diseño centrado en el usuario, flujos claros, app web responsive y PWA para una experiencia de usuario excepcional.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Empieza tu App</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faMobileScreen} className="card__icon" /> UX / UI</span>,
        description: "Diseño orientado a la experiencia del usuario, coherente y atractivo.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Solicita una Auditoría</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faMagnifyingGlassChart} className="card__icon" /> SEO y Analítica</span>,
        description: "Mejora de posicionamiento y medición de KPIs para tomar decisiones.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Mejora mi SEO</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faGears} className="card__icon" /> Integraciones</span>,
        description: "APIs, automatizaciones y conectores a servicios de terceros.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Integra Ahora</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faWandMagicSparkles} className="card__icon" /> Automatizaciones</span>,
        description: "Optimiza procesos y reduce costes con automatizaciones inteligentes.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Optimiza mis Procesos</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faComments} className="card__icon" /> Consultoría</span>,
        description: "Asesoramiento experto para la toma de decisiones estratégicas.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Agenda una Consultoría</button>
            </a>,
        ]
    },
    {
        title: <span className="servicesContainer__title"><FontAwesomeIcon icon={faWrench} className="card__icon" /> Soluciones a Medida</span>,
        description: "Desarrollo de software a medida para necesidades específicas de tu negocio.",
        links: [
            <a href="#contact" className="card__link">
                <button className="card__button">Crea tu Solución a Medida</button>
            </a>,
        ]
    },

];


export default function Services() {
    return (
        <section id="services" className="services customSection">
            <h2 className="services__title">Servicios</h2>
            <p className="services__subtitle">Soluciones digitales a medida para impulsar tu proyecto.</p>

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