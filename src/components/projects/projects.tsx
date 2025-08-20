import './projects.scss';
import CustomCard from "components/card/customCard";
import Carousel from 'components/carousel/carousel';
import TechnologyList from 'components/card/components/technologyList';
import { getProjects, technologies } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    const projects = getProjects(t);

    return (
        <section className="projects customSection" id="projects">
            <h2>{t('projects.title')}</h2>

            <div className="projects__content">

                <Carousel items={projects.map((project) => (
                    <CustomCard
                        title={project.title}
                        description={project.description}
                        imageUrl={project.image}
                        links={project.links}
                        technologies={project.technologies}
                    />

                ))} autoPlayDefault={false} interval={3000} itemsPerPage={3} autoPlayDelay={5000} />
            </div>
            <h2>{t('projects.like')}</h2>
            <p className='projects__stack'>{t('projects.stack')}</p>
            <TechnologyList technologies={technologies} />
            <h2>{t('projects.talk')}</h2>
            <div className="projects__buttons">
                <a href='#contact'><button><FontAwesomeIcon icon={faContactCard} /> {t('projects.contact')}</button></a>
                <a href="/CV 062025.pdf" download><button ><FontAwesomeIcon icon={faFileDownload} /> {t('projects.download')}</button></a>
                <a href="https://github.com/ddm19" target="_blank" rel="noopener noreferrer">
                    <button><FontAwesomeIcon icon={faGithub} /> {t('projects.more')}</button>
                </a>
            </div>
        </section>
    );
}

export default Projects;
