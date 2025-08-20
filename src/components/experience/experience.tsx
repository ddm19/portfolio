import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomCard, { CustomCardProps } from "components/card/customCard";
import React from "react";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

const getExperience = (t: TFunction): Array<CustomCardProps> => [
    {
        title: t('experience.items.bunkaDojo.title'),
        subtitle: <a href="https://www.bunkadojo.com" target='_blank'>Bunka Dojo <FontAwesomeIcon icon={faExternalLink} /></a>,
        date: t('experience.items.bunkaDojo.date'),
        description: (
            <ul className="about__list">
                <li>{t('experience.items.bunkaDojo.description.0')}</li>
                <li>{t('experience.items.bunkaDojo.description.1')}</li>
                <li>{t('experience.items.bunkaDojo.description.2')}</li>
                <li>{t('experience.items.bunkaDojo.description.3')}</li>
                <li>{t('experience.items.bunkaDojo.description.4')}</li>
            </ul>
        ),
    },
    {
        title: t('experience.items.mermeladaJam.title'),
        subtitle: 'Mermelada Jam',
        date: t('experience.items.mermeladaJam.date'),
        technologies: ['Godot', 'C#', 'GDScript', 'Game Design'],
        description: (
            <ul className="about__list">
                <li>{t('experience.items.mermeladaJam.description.0')}</li>
                <li>{t('experience.items.mermeladaJam.description.1')}</li>
                <li>{t('experience.items.mermeladaJam.description.2')}</li>
            </ul>
        ),
    },
    {
        title: t('experience.items.inired.title'),
        subtitle: 'IniRed',
        date: t('experience.items.inired.date'),
        description: (
            <ul className="about__list">
                <li>{t('experience.items.inired.description.0')}</li>
                <li>{t('experience.items.inired.description.1')}</li>
                <li>{t('experience.items.inired.description.2')}</li>
                <li>{t('experience.items.inired.description.3')}</li>
                <li>{t('experience.items.inired.description.4')}</li>
            </ul>
        ),
        technologies: ['React', 'TypeScript', 'Node.js', 'SCRUM', 'i18n', 'CI/CD'],
    },
    {
        title: t('experience.items.gamejam.title'),
        subtitle: 'Gamejam Alicante',
        date: t('experience.items.gamejam.date'),
        description: (
            <ul className="about__list">
                <li>{t('experience.items.gamejam.description.0')}</li>
                <li>{t('experience.items.gamejam.description.1')}</li>
            </ul>
        ),
        technologies: ['Game Dev', 'Git', 'Mentoring', 'Agile'],
    },
    {
        title: t('experience.items.altia.title'),
        subtitle: 'Altia',
        date: t('experience.items.altia.date'),
        description: (
            <ul className="about__list">
                <li>{t('experience.items.altia.description.0')}</li>
                <li>{t('experience.items.altia.description.1')}</li>
                <li>{t('experience.items.altia.description.2')}</li>
                <li>{t('experience.items.altia.description.3')}</li>
                <li>{t('experience.items.altia.description.4')}</li>
            </ul>
        ),
        technologies: ['Java', 'Spring Boot', 'REST', 'SQL', 'Git', 'Jenkins'],
    },
    {
        title: t('experience.items.olimpiadas.title'),
        subtitle: 'Alicante',
        date: t('experience.items.olimpiadas.date'),
        description: (
            <ul className="about__list">
                <li>{t('experience.items.olimpiadas.description.0')}</li>
            </ul>
        ),
        technologies: ['Algoritmia', 'Estructuras de datos', 'Competición'],
    },
    {
        title: t('experience.items.amir.title'),
        subtitle: 'Academia Amir',
        date: t('experience.items.amir.date'),
        description:
            <ul className='about__list'>
                <li>{t('experience.items.amir.description.0')}</li>
                <li>{t('experience.items.amir.description.1')}</li>
                <li>{t('experience.items.amir.description.2')}</li>
                <li>{t('experience.items.amir.description.3')}</li>
            </ul>,

    },
    {
        title: t('experience.items.freelance.title'),
        subtitle: 'Freelance',
        date: t('experience.items.freelance.date'),
        description:
            <ul className='about__list'>
                <li>{t('experience.items.freelance.description.0')}</li>
                <li>{t('experience.items.freelance.description.1')}</li>
                <li>{t('experience.items.freelance.description.2')}</li>
            </ul>,
    }


];

const Experience = () => {
    const { t } = useTranslation();
    const experience = getExperience(t);
    return (<>

        <h2 className='about__subtitle'>{t('experience.current')}</h2>

        <div className='about__workExperienceContainer'>
            <span className='about__timeLine' />

            {experience.map((experienceItem, index) => (
                <React.Fragment key={index}>
                    <CustomCard key={index} {...experienceItem} className='about__card' >
                    </CustomCard>
                </React.Fragment>
            ))}
        </div>
        <h2 className='about__subtitle'>{t('experience.start')}</h2>
    </>
    )
}

export default Experience;
