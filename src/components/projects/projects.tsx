import './projects.scss';
import CustomCard from "components/card/customCard";
import { faBolt, faCube, faExternalLink, faICursor, faM, faV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHtml5, faNodeJs, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";
import Carousel from 'components/carousel/carousel';

const Projects = () => {


    const projects = [
        {
            title: "Bunka Dojo",
            description: "Marketplace de TCGs y juegos de mesa.",
            href: "https://www.bunkadojo.com",
            links: [
                <a href="https://www.bunkadojo.com" className="card__link" target="_blank" >
                    <button className="card__button">
                        Demo <FontAwesomeIcon icon={faExternalLink} />
                    </button>
                </a>,
                <a href="https://github.com/ddm19/BunkaTCG" className="card__link" target="_blank" >
                    <button className="card__button">
                        Código <FontAwesomeIcon icon={faGithub} />
                    </button>
                </a>
            ],
            image: "/bunkaDojo.png",
            alt: "Bunka Dojo",
            technologies: [
                <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
                <span><FontAwesomeIcon icon={faReact} /> React</span>,
                "TypeScript",
                <span><FontAwesomeIcon icon={faStripe} /> Stripe</span>,
                <span><FontAwesomeIcon icon={faBolt} /> Supabase</span>,
                <span><FontAwesomeIcon icon={faSass} /> Sass</span>]
        },
        {
            title: "Food Contest",
            description: "Página web de concursos de comida.",
            href: "https://food-contest.vercel.app",
            links: [
                <a href="https://food-contest.vercel.app" className="card__link" target="_blank" >
                    <button className="card__button">
                        Demo <FontAwesomeIcon icon={faExternalLink} />
                    </button>
                </a>,
                <a href="https://github.com/ddm19/FoodContest" className="card__link" target="_blank" >
                    <button className="card__button">
                        Código <FontAwesomeIcon icon={faGithub} />
                    </button>
                </a>
            ],
            image: "/foodContest.png",
            alt: "Food Contest",
            technologies: [
                <span><FontAwesomeIcon icon={faReact} /> React</span>,
                "TypeScript",
                <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
                <span><FontAwesomeIcon icon={faV} /> Vite</span>,
                <span><FontAwesomeIcon icon={faV} /> Vercel</span>

            ]
        },
        {
            title: "Aqivap",
            description: "Maqueta de una tienda online de vapeo.",
            href: "https://aqivap.vercel.app",
            links: [
                <a href="https://aqivap.vercel.app" className="card__link" target="_blank" >
                    <button className="card__button">
                        Demo <FontAwesomeIcon icon={faExternalLink} />
                    </button>
                </a>,
                <a href="https://github.com/ddm19/Aqivap" className="card__link" target="_blank" >
                    <button className="card__button">
                        Código <FontAwesomeIcon icon={faGithub} />
                    </button>
                </a>
            ],
            image: "/aqivap.png",
            alt: "Aqivap",
            technologies: [<span><FontAwesomeIcon icon={faReact} /> React</span>, "TypeScript", <span><FontAwesomeIcon icon={faSass} /> Sass</span>, <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
            <span><FontAwesomeIcon icon={faCube} /> Cursor AI</span>,
            <span><FontAwesomeIcon icon={faV} /> Vite</span>
            ]
        },
        {
            title: "Hispania",
            description: "Página web / Blog de juegos de Rol y D&D.",
            href: "https://hispania.thedm.es",
            links: [
                <a href="https://hispania.thedm.es" className="card__link" target="_blank" >
                    <button className="card__button">
                        Demo <FontAwesomeIcon icon={faExternalLink} />
                    </button>
                </a>,
                <a href="https://github.com/ddm19/rol" className="card__link" target="_blank" >
                    <button className="card__button">
                        Código <FontAwesomeIcon icon={faGithub} />
                    </button>
                </a>
            ],
            image: "/hispania.png",
            alt: "Food Contest",
            technologies: [
                <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
                <span><FontAwesomeIcon icon={faReact} /> React</span>,
                "TypeScript",
                <span><FontAwesomeIcon icon={faStripe} /> Stripe</span>,
                <span><FontAwesomeIcon icon={faNodeJs} /> Node.js</span>,
                <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
                <span><FontAwesomeIcon icon={faV} /> Vercel</span>,
                <span><FontAwesomeIcon icon={faV} /> Vite</span>,
                <span><FontAwesomeIcon icon={faM} /> Mui</span>

            ]
        }

    ]
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
        </section>
    );
}

export default Projects;
