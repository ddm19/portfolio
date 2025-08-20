import { faBolt, faCube, faExternalLink, faM, faV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faCss3, faGitAlt, faGithub, faHtml5, faNodeJs, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";
import { TFunction } from "i18next";

export const getProjects = (t: TFunction) => [
    {
        title: t('projects.items.bunkaDojo.title'),
        description: t('projects.items.bunkaDojo.description'),
        href: "https://www.bunkadojo.com",
        links: [
            <a href="https://www.bunkadojo.com" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/BunkaTCG" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/bunkaDojo.png",
        alt: t('projects.items.bunkaDojo.alt'),
        technologies: [
            <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
            <span><FontAwesomeIcon icon={faReact} /> React</span>,
            "TypeScript",
            <span><FontAwesomeIcon icon={faStripe} /> Stripe</span>,
            <span><FontAwesomeIcon icon={faBolt} /> Supabase</span>,
            <span><FontAwesomeIcon icon={faSass} /> Sass</span>
        ]
    },
    {
        title: t('projects.items.foodContest.title'),
        description: t('projects.items.foodContest.description'),
        href: "https://food-contest.vercel.app",
        links: [
            <a href="https://food-contest.vercel.app" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/FoodContest" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/foodContest.png",
        alt: t('projects.items.foodContest.alt'),
        technologies: [
            <span><FontAwesomeIcon icon={faReact} /> React</span>,
            "TypeScript",
            <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
            <span><FontAwesomeIcon icon={faV} /> Vite</span>,
            <span><FontAwesomeIcon icon={faBolt} /> Supabase</span>,
            <span><FontAwesomeIcon icon={faV} /> Vercel</span>
        ]
    },
    {
        title: t('projects.items.aqivap.title'),
        description: t('projects.items.aqivap.description'),
        href: "https://aqivap.vercel.app",
        links: [
            <a href="https://aqivap.vercel.app" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/Aqivap" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/aqivap.png",
        alt: t('projects.items.aqivap.alt'),
        technologies: [
            <span><FontAwesomeIcon icon={faReact} /> React</span>,
            "TypeScript",
            <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
            <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
            <span><FontAwesomeIcon icon={faCube} /> Cursor AI</span>,
            <span><FontAwesomeIcon icon={faV} /> Vite</span>
        ]
    },
    {
        title: t('projects.items.hispania.title'),
        description: t('projects.items.hispania.description'),
        href: "https://hispania.thedm.es",
        links: [
            <a href="https://hispania.thedm.es" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/rol" className="card__link" target="_blank" >
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/hispania.png",
        alt: t('projects.items.hispania.alt'),
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
];

export const technologies = [
    <span><FontAwesomeIcon icon={faReact} /> React</span>,
    "TypeScript",
    <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
    <span><FontAwesomeIcon icon={faCss3} /> CSS3</span>,
    <span><FontAwesomeIcon icon={faGitAlt} /> Git</span>,
    <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
    <span><FontAwesomeIcon icon={faNodeJs} /> Node.js</span>,
    <span><FontAwesomeIcon icon={faV} /> Vite</span>,
    <span><FontAwesomeIcon icon={faM} /> Mui</span>,
    <span><FontAwesomeIcon icon={faBolt} /> Supabase</span>,
    <span><FontAwesomeIcon icon={faStripe} /> Stripe</span>,
    <span><FontAwesomeIcon icon={faV} /> Vercel</span>,
    <span><FontAwesomeIcon icon={faGithub} /> GitHub</span>,
    <span><FontAwesomeIcon icon={faAndroid} /> Capacitor Ionic</span>
];

