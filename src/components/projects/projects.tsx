import { useState } from 'react';
import './projects.scss';
import CustomCard from "components/card/customCard";
import Carousel from 'components/carousel/carousel';
import TechnologyList from 'components/card/components/technologyList';
import Modal from 'components/modal/modal';
import { getProjects, technologies } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faFileDownload, faCircleInfo, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();
    const projects = getProjects(t);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selected = selectedIndex !== null ? projects[selectedIndex] : null;

    const closeModal = () => setSelectedIndex(null);

    return (
        <section className="projects customSection" id="projects">
            <h2>{t('projects.title')}</h2>

            <div className="projects__content">

                <Carousel items={projects.map((project, index) => {
                    const cardLinks = [
                        ...(project.links ?? []),
                        project.confidential && (
                            <a href="#contact" className="card__link" key="want-similar">
                                <button className="card__button">{t('projects.wantSimilar')}</button>
                            </a>
                        ),
                        <button
                            className="card__button card__button--ghost"
                            key="learn-more"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <FontAwesomeIcon icon={faCircleInfo} /> {t('projects.learnMore')}
                        </button>,
                    ].filter(Boolean);

                    return (
                        <CustomCard
                            title={
                                project.confidential ? (
                                    <span className="card__titleWithBadge">
                                        {project.title}
                                        <span className="card__confidentialBadge">
                                            <FontAwesomeIcon icon={faLock} /> {t('projects.confidentialBadge')}
                                        </span>
                                    </span>
                                ) : project.title
                            }
                            description={project.description}
                            imageUrl={project.image}
                            links={cardLinks}
                            technologies={project.technologies}
                        />
                    );
                })} autoPlayDefault={false} interval={3000} itemsPerPage={3} autoPlayDelay={5000} />
            </div>
            <h2>{t('projects.like')}</h2>
            <p className='projects__stack'>{t('projects.stack')}</p>
            <TechnologyList technologies={technologies} />
            <h2>{t('projects.talk')}</h2>
            <div className="projects__buttons">
                <a href='#contact'><button><FontAwesomeIcon icon={faContactCard} /> {t('projects.contact')}</button></a>
                <a href="/CV-Dani-Domenech.pdf" download><button ><FontAwesomeIcon icon={faFileDownload} /> {t('projects.download')}</button></a>
                <a href="https://github.com/ddm19" target="_blank" rel="noopener noreferrer">
                    <button><FontAwesomeIcon icon={faGithub} /> {t('projects.more')}</button>
                </a>
            </div>

            {selected && (
                <Modal onClose={closeModal} labelledBy="project-modal-title">
                    <img src={selected.image} alt={selected.alt} className="projectModal__image" loading="lazy" />
                    <h2 id="project-modal-title" className="projectModal__title">{selected.title}</h2>

                    {selected.confidential && (
                        <p className="projectModal__confidentialNote">
                            <FontAwesomeIcon icon={faLock} /> {selected.confidentialNote}
                        </p>
                    )}

                    <p className="projectModal__description">
                        {selected.longDescription || selected.description}
                    </p>

                    <TechnologyList technologies={selected.technologies} />

                    <div className="projectModal__actions">
                        {selected.confidential ? (
                            <a href="#contact" className="card__link" onClick={closeModal}>
                                <button className="card__button">{t('projects.wantSimilar')}</button>
                            </a>
                        ) : (
                            selected.links && selected.links.map((link, i) => <span key={i}>{link}</span>)
                        )}
                    </div>
                </Modal>
            )}
        </section>
    );
}

export default Projects;
