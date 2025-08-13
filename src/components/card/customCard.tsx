import React from 'react';
import './customCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface CustomCardProps {
    title: string;
    subtitle?: string | React.ReactNode;
    description: string | React.ReactNode;
    imageUrl?: string;
    date?: string;
    technologies?: string[] | React.ReactNode[];
    links?: React.ReactNode[];
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

const CustomCard = (props: CustomCardProps) => {
    const { title, description, imageUrl, links, onClick, className, date, technologies, children, subtitle } = props;
    return (
        <div className={`card ${className ?? ''}`}>
            {imageUrl && <img src={imageUrl} alt={title} className="card__image" />}

            <h2 className="card__title">{title}</h2>
            {subtitle && <h3 className="card__subtitle">{subtitle}</h3>}

            {description && (
                <div className="card__description">
                    {description}
                </div>
            )}

            {date && <p className="card__date"><FontAwesomeIcon icon={faCalendar} /> {date}</p>}

            {technologies && (
                <ul className="card__technologies">
                    {technologies.map((tech, index) => (
                        <li key={index} className="card__technology">
                            {tech}
                        </li>
                    ))}
                </ul>
            )}


            <div className="card__links">
                {links && links.map((link, index) => (
                    <div key={index} className="card__links">
                        {link}
                    </div>
                ))}
            </div>

            {children}
        </div>
    );
}

export default CustomCard;