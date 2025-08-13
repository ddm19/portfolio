import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCard, { CustomCardProps } from "components/card/customCard";
import React from "react";

const experience: Array<CustomCardProps> = [
    {
        title: 'Co-Founder / Developer',
        subtitle: <a href="https://www.bunkadojo.com" target='_blank'>Bunka Dojo <FontAwesomeIcon icon={faExternalLink} /></a>,
        date: '2025 → Actualidad',
        description: (
            <ul className="about__list">
                <li>Desarrollo de un marketplace de venta de cartas TCG.</li>
                <li>Implementación de un sistema de gestión de inventario y pedidos.</li>
                <li>Diseño y desarrollo de un panel de administración para la gestión de contenido.</li>
                <li>Integración de pasarelas de pago y sistemas de seguridad.</li>
                <li>Optimización y posicionamiento SEO del sitio web.</li>
            </ul>
        ),
    },
    {
        title: 'Game Designer / Developer',
        subtitle: 'Mermelada Jam',
        date: '2025',
        technologies: ['Godot', 'C#', 'GDScript', 'Game Design'],
        description: (
            <ul className="about__list">
                <li>Diseño y desarrollo de un juego generativo</li>
                <li>Balance e implementación de animaciones y efectos especiales</li>
                <li>Elaboración de sistemas escalables y reutilizables</li>
            </ul>
        ),
    },
    {
        title: 'Team Lead / Frontend',
        subtitle: 'IniRed',
        date: '2023 → Actualidad',
        description: (
            <ul className="about__list">
                <li>Coordinación de hasta 7 personas con Scrum; nexo con QA, diseño y cliente.</li>
                <li>Obtención de requisitos, diseño UX/UI y desarrollo de componentes genéricos (SOLID, clean code).</li>
                <li>Desarrollo desde los prototipos hasta la implementación final del producto de aplicaciones web y móviles.</li>
                <li>Reducción del CSS bloat y resolución de bugs críticos en tiempo récord.</li>
                <li>Creación de herramienta de migración de traducciones, mejorando tiempo de desarrollo de meses a semanas.</li>
            </ul>
        ),
        technologies: ['React', 'TypeScript', 'Node.js', 'SCRUM', 'i18n', 'CI/CD'],
    },
    {
        title: 'Game Developer (Jam)',
        subtitle: 'Gamejam Alicante',
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
        subtitle: 'Alicante',
        date: '2019',
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
        date: '2020 → 2023',
        description:
            <ul className='about__list'>
                <li>Soporte técnico montando clases virtuales</li>
                <li>Instalación de equipos informáticos</li>
                <li>Resolución de incidencias en tiempo real</li>
                <li>Implementación de soluciones tecnológicas</li>
            </ul>

    },
    {
        title: 'Técnico informático',
        subtitle: 'Freelance',
        date: '2016 → Actualidad',
        description:
            <ul className='about__list'>
                <li>Instalación de equipos informáticos</li>
                <li>Mantenimiento de equipos informáticos</li>
                <li>Asesoramiento técnico a clientes</li>
            </ul>
    }


];

const Experience = () => {
    return (<>

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
    </>
    )
}

export default Experience;

