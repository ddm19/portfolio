import './projects.scss';
import CustomCard from "components/card/customCard";
import Carousel from 'components/carousel/carousel';
import TechnologyList from 'components/card/components/technologyList';
import { projects, technologies } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {

    return (
        <section className="projects customSection" id="projects">
            <h2>Portfolio</h2>

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
            <h2>Te gusta lo que ves?</h2>
            <p className='projects__stack'>Este es mi stack principal</p>
            <TechnologyList technologies={technologies} />
            <h2>Hablemos!</h2>
            <div className="projects__buttons">
                <a href='#contact'><button><FontAwesomeIcon icon={faContactCard} /> Contáctame</button></a>
                <a href="/CV 062025.pdf" download><button ><FontAwesomeIcon icon={faFileDownload} /> Descargar CV</button></a>
                <a href="https://github.com/ddm19" target="_blank" rel="noopener noreferrer">
                    <button><FontAwesomeIcon icon={faGithub} /> Ver más proyectos</button>
                </a>
            </div>
        </section>
    );
}

export default Projects;
