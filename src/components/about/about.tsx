import { useRef } from 'react';
import './about.scss';

const About = () => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    const startPulseAnimation = () => {
        if (linkRef.current) {
            linkRef.current.classList.add('animate__animated', 'animate__pulse');
        }
    };

    const handleAnimationEnd = (e: React.AnimationEvent<HTMLAnchorElement>) => {
        if (e.animationName === 'pulse' && linkRef.current) {
            linkRef.current.classList.remove('animate__animated', 'animate__pulse');
            setTimeout(startPulseAnimation, 2000);
        }
    };

    return (
        <section id='about' className="about customSection">
            <div className="about__content">
                <h1 className="about__title">Sobre Mí</h1>
                <div className='about__contentContainer'>
                    <p className="about__description">
                        Soy desarrollador frontend apasionado por el diseño UX/UI, pero no me asusta <span className="about--highlight">mancharme las manos</span> con nada.
                        En mis anteriores empresas me bautizaron como <span className="about--highlight">Cacharrero</span> porque encuentro la solución adecuada a cada reto, sea cual sea la tecnología.
                        Si necesitas una solución moderna y no tienes claro por dónde empezar, ¡estás en el lugar correcto!
                        <span className="about--highlight"><a className='animate__animated animate__pulse' ref={linkRef}
                            onAnimationEnd={handleAnimationEnd} href='#contact'> ¡Hablemos!</a></span>
                    </p>
                    <h1 className="about__title">Mi Trayectoria Profesional</h1>
                </div>
            </div>
        </section>
    );
}
export default About;