import { faBolt, faExternalLink, faM, faV, faWind, faLock, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faCss3, faGitAlt, faGithub, faHtml5, faNodeJs, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";
import { TFunction } from "i18next";
import type { ReactNode } from "react";

export interface Project {
    key: string;
    title: ReactNode;
    description: ReactNode;
    longDescription: string;
    confidential: boolean;
    confidentialNote?: string;
    links?: ReactNode[];
    image: string;
    alt: string;
    technologies: ReactNode[];
}

export const getProjects = (t: TFunction): Project[] => [
    {
        key: "bunkaDojo",
        title: t('projects.items.bunkaDojo.title'),
        description: t('projects.items.bunkaDojo.description'),
        longDescription: t('projects.items.bunkaDojo.longDescription'),
        confidential: false,
        links: [
            <a href="https://www.bunkadojo.com" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/BunkaTCG" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/bunkaDojo.webp",
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
        key: "ndaLogistics",
        title: t('projects.items.ndaLogistics.title'),
        description: t('projects.items.ndaLogistics.description'),
        longDescription: t('projects.items.ndaLogistics.longDescription'),
        confidential: true,
        confidentialNote: t('projects.items.ndaLogistics.confidentialNote'),
        image: "/confidentialProject.webp",
        alt: t('projects.items.ndaLogistics.alt'),
        technologies: (t('projects.items.ndaLogistics.features', { returnObjects: true }) as string[]).map((f, i) => (
            <span key={i}><FontAwesomeIcon icon={faLock} /> {f}</span>
        ))
    },
    {
        key: "hispania",
        title: t('projects.items.hispania.title'),
        description: t('projects.items.hispania.description'),
        longDescription: t('projects.items.hispania.longDescription'),
        confidential: false,
        links: [
            <a href="https://hispania.thedm.es" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/rol" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/hispania.webp",
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
    },
    {
        key: "ndaDocuments",
        title: t('projects.items.ndaDocuments.title'),
        description: t('projects.items.ndaDocuments.description'),
        longDescription: t('projects.items.ndaDocuments.longDescription'),
        confidential: true,
        confidentialNote: t('projects.items.ndaDocuments.confidentialNote'),
        image: "/confidentialProject.webp",
        alt: t('projects.items.ndaDocuments.alt'),
        technologies: (t('projects.items.ndaDocuments.features', { returnObjects: true }) as string[]).map((f, i) => (
            <span key={i}><FontAwesomeIcon icon={faComments} /> {f}</span>
        ))
    },
    {
        key: "purpleShift",
        title: t('projects.items.purpleShift.title'),
        description: t('projects.items.purpleShift.description'),
        longDescription: t('projects.items.purpleShift.longDescription'),
        confidential: false,
        links: [
            <a href="https://purple-shift-polls.vercel.app" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/PurpleShiftPolls" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/purpleShift.webp",
        alt: t('projects.items.purpleShift.alt'),
        technologies: [
            <span><FontAwesomeIcon icon={faReact} /> React</span>,
            "TypeScript",
            <span><FontAwesomeIcon icon={faBolt} /> Supabase</span>,
        ]
    },
    {
        key: "aqivap",
        title: t('projects.items.aqivap.title'),
        description: t('projects.items.aqivap.description'),
        longDescription: t('projects.items.aqivap.longDescription'),
        confidential: false,
        links: [
            <a href="https://aqivap.vercel.app" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/Aqivap" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/aqivap.webp",
        alt: t('projects.items.aqivap.alt'),
        technologies: [
            <span><FontAwesomeIcon icon={faReact} /> React</span>,
            "TypeScript",
            <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
            <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
            <span><FontAwesomeIcon icon={faV} /> Vite</span>
        ]
    },
    {
        key: "gamedev",
        title: t('projects.items.gamedev.title'),
        description: t('projects.items.gamedev.description'),
        longDescription: t('projects.items.gamedev.longDescription'),
        confidential: false,
        links: [
            <a href="https://www.gamedev.thedm.es" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/GameDevPortfolio" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/gamedev.webp",
        alt: t('projects.items.gamedev.alt'),
        technologies: [
            <span><FontAwesomeIcon icon={faHtml5} /> HTML5</span>,
            <span><FontAwesomeIcon icon={faReact} /> React</span>,
            "TypeScript",
            <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
            <span><FontAwesomeIcon icon={faV} /> Vite</span>,
            <span><FontAwesomeIcon icon={faWind} /> Framer-Motion</span>,
        ]
    },
    {
        key: "foodContest",
        title: t('projects.items.foodContest.title'),
        description: t('projects.items.foodContest.description'),
        longDescription: t('projects.items.foodContest.longDescription'),
        confidential: false,
        links: [
            <a href="https://food-contest.vercel.app" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.demo')} <FontAwesomeIcon icon={faExternalLink} />
                </button>
            </a>,
            <a href="https://github.com/ddm19/FoodContest" className="card__link" target="_blank" rel="noopener noreferrer">
                <button className="card__button">
                    {t('projects.code')} <FontAwesomeIcon icon={faGithub} />
                </button>
            </a>
        ],
        image: "/foodContest.webp",
        alt: t('projects.items.foodContest.alt'),
        technologies: [
            <span><FontAwesomeIcon icon={faReact} /> React</span>,
            "TypeScript",
            <span><FontAwesomeIcon icon={faSass} /> Sass</span>,
            <span><FontAwesomeIcon icon={faV} /> Vite</span>,
            <span><FontAwesomeIcon icon={faBolt} /> Supabase</span>,
            <span><FontAwesomeIcon icon={faV} /> Vercel</span>
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
    <span><FontAwesomeIcon icon={faAndroid} /> Capacitor Ionic</span>,
    <span><FontAwesomeIcon icon={faWind} /> Framer-Motion</span>,
];
