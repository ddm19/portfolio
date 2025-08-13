import CustomCard from "components/card/customCard";
import './special.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faHandshake, faLightbulb, faWrench } from "@fortawesome/free-solid-svg-icons";

const Special = () => {
    const specials = [
        {
            title: 'Desarrollo Especializado',
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faBrain} className="card__icon" /> Me centro en entender de tu proyecto para ofrecer soluciones personalizadas y efectivas.</span>,
        },
        {
            title: 'Innovación Continua',
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faLightbulb} className="card__icon" /> Siempre busco nuevas tecnologías y metodologías para mejorar la calidad y que obtengas el mejor resultado.</span>,
        },
        {
            title: 'Colaboración Activa',
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faHandshake} className="card__icon" /> Trabajo de la mano contigo para asegurar que el producto final cumpla con tus expectativas y necesidades.</span>,
        },
        {
            title: 'Enfoque en Resultados',
            description: <span className="specialContainer__description"><FontAwesomeIcon icon={faWrench} className="card__icon" /> Mi objetivo es entregar un producto que no solo funcione, sino que también sea escalable y fácil de mantener.</span>,
        },
    ];
    return (
        <div className="specialContainer">
            <h2 className="specialContainer__title">Especialidades</h2>

            <div className="specialContainer__cards">
                {specials.map((special, index) => (
                    <CustomCard key={index} {...special} />
                ))}
            </div>
        </div>
    );
}

export default Special;
