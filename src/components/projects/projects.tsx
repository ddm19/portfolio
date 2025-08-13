import './projects.scss';
import CustomCard from "components/card/customCard";
import { faBolt, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faHtml5, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";

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
            technologies: [<span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>, <span><FontAwesomeIcon icon={faReact} /> React</span>, "TypeScript", <span><FontAwesomeIcon icon={faStripe} /> Stripe</span>,
            <span><FontAwesomeIcon icon={faBolt} /> Supabase</span>, <span><FontAwesomeIcon icon={faSass} /> Sass</span>]
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
            technologies: [<span><FontAwesomeIcon icon={faReact} /> React</span>, "TypeScript", <span><FontAwesomeIcon icon={faSass} /> Sass</span>]
        },
        {
            title: "Project Three",
            description: "This is a description of project three.",
            href: "https://example.com/project-three",
            image: "https://picsum.photos/200/300",
            alt: "Project Three Image",
            technologies: ["React", "TypeScript", "CSS"]
        },
        {
            title: "Project Four",
            description: "This is a description of project four.",
            href: "https://example.com/project-four",
            image: "https://picsum.photos/200/300",
            alt: "Project Four Image",
            technologies: ["React", "TypeScript", "CSS"]
        }
    ]
    return (
        <section className="projects customSection" id="projects">
            <h2>Portfolio</h2>

            <div className="projects__content">


            </div>
        </section>
    );
}

export default Projects;
