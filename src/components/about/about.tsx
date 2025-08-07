import { useRef } from 'react';
import './about.scss';
import CustomCard, { CustomCardProps } from 'components/card/customCard';
import React from 'react';


const About = () => {
    const linkRef = useRef<HTMLAnchorElement>(null);

    const experience: Array<CustomCardProps> = [
        {
            title: 'Team Lead / Frontend',
            subtitle: 'IniRed',
            date: '2023 → Actualidad',
            description: (
                <ul className="about__list">
                    <li>Coordinación de hasta 7 personas con Scrum; nexo con QA, diseño y cliente.</li>
                    <li>Obtención de requisitos, diseño UX/UI y desarrollo de componentes genéricos (SOLID, clean code).</li>
                    <li>Reducción del CSS bloat y resolución de bugs críticos en tiempo récord.</li>
                    <li>Stack unificado web→app para acelerar entregas y herramienta de migración de traducciones (meses → semanas).</li>
                </ul>
            ),
            technologies: ['React', 'TypeScript', 'Node.js', 'SCRUM', 'i18n', 'CI/CD'],
        },
        {
            title: 'Game Developer (Jam)',
            subtitle: 'Jam Alicante',
            date: '2023',
            description: (
                <ul className="about__list">
                    <li>Implementación de la lógica central del juego y gestión del backlog técnico.</li>
                    <li>Corrección de bugs bajo presión y mentorización a juniors en Git y flujo de trabajo.</li>
                </ul>
            ),
            technologies: ['Game Dev', 'Git', 'Mentoring', 'Agile'],
        },
        {
            title: 'Backend Developer',
            subtitle: 'Altia',
            date: '2022 → 2023',
            description: (
                <ul className="about__list">
                    <li>Dirección de un pequeño equipo en un proyecto interno</li>
                    <li>Diseño y extracción de requisitos y reparto de tareas.</li>
                    <li>Desarrollo y optimización de componentes backend; creación de nuevos módulos reutilizables.</li>
                    <li>Resolución de bugs complejos y mejora de la calidad del código.</li>
                    <li>Soporte en despliegues con Jenkins.</li>
                </ul>
            ),
            technologies: ['Java', 'Spring Boot', 'REST', 'SQL', 'Git', 'Jenkins'],
        },
        {
            title: 'Olimpiadas Informáticas',
            subtitle: 'Alicante · 2019',
            description: (
                <ul className="about__list">
                    <li>3.º clasificado a nivel provincial; enfoque en algoritmia y resolución de problemas.</li>
                </ul>
            ),
            technologies: ['Algoritmia', 'Estructuras de datos', 'Competición'],
        },
        {
            title: 'Técnico informático',
            subtitle: 'Academia Amir',
            description:
                <ul className='about__list'>
                    <li>Soporte técnico montando clases virtuales</li>
                    <li>Instalación de equipos informáticos</li>
                    <li>Resolución de incidencias en tiempo real</li>
                    <li>Implementación de soluciones tecnológicas</li>
                </ul>

        },

    ];

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
            <h2 className='about__subtitle'>Actualidad</h2>

            <div className='about__workExperienceContainer'>
                <span className='about__timeLine' />

                {experience.map((experienceItem, index) => (
                    <React.Fragment key={index}>
                        <CustomCard key={index} {...experienceItem} className='about__card' >

                        </CustomCard>
                    </React.Fragment>
                ))}
            </div>
            <h2 className='about__subtitle'>2019</h2>


        </section>
    );
}
export default About;