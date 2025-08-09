import React from 'react';
import './customCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export interface CustomCardProps {
    title: string;
    subtitle?: string | React.ReactNode;
    description: string | React.ReactNode;
    imageUrl?: string;
    date?: string;
    technologies?: string[];
    link?: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

const CustomCard = (props: CustomCardProps) => {
    const { title, description, imageUrl, link, onClick, className, date, technologies, children, subtitle } = props;
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
                    {technologies.map((tech) => (
                        <li key={tech} className="card__technology">
                            {tech}
                        </li>
                    ))}
                </ul>
            )}

            {link ? (
                <a href={link} className="card__link" onClick={onClick}>
                    Ver más
                </a>
            ) : onClick ? (
                <button className="card__button" onClick={onClick}>
                    Acción
                </button>
            ) : null}

            {children}
        </div>
    );
}

export default CustomCard;