import { useTypewriter } from 'hooks/useTypewriter';
import './heroSection.scss';
import { showNotification } from 'redux/notificationSlice';
import { useDispatch } from 'react-redux';

const HeroSection = () => {
    const words = ['Ventaja', 'Inspiración', 'Sabiduría', 'Carisma', 'Fuerza'];
    const text = useTypewriter(words, 100, 50, 1500);
    const dispatch = useDispatch();

    const handleCopyEmail = () => {
        dispatch(showNotification('Email copiado al portapapeles'));
        navigator.clipboard.writeText('domenechmorenodaniel@gmail.com');

    }


    return (
        <section id='hero' className="heroSection customSection">
            <div className="heroSection__content">
                <img draggable="false" src='/logo_engineer.svg' alt="Logo" className="heroSection__logo" />

                <div>
                    <h2 className="heroSection__title">
                        Otórgale <span className="heroSection__title--highlight">{text}</span> a tu negocio
                    </h2>
                    <p className="heroSection__subtitle">
                        Soy Dani Domenech, un desarrollador web con experiencia en la creación de aplicaciones web modernas y eficientes.
                        Mi objetivo es ayudarte a alcanzar tus metas digitales con soluciones personalizadas y efectivas.
                    </p>
                    <div className='heroSection__buttonContainer'>
                        <button >
                            <a href="#contact">
                                Contacta Conmigo
                            </a>
                        </button>
                        <button onClick={handleCopyEmail}>
                            Copia mi Email
                        </button>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default HeroSection;