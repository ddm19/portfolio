interface TechnologyListProps {
    technologies: React.ReactNode[];
}

const TechnologyList = (props: TechnologyListProps) => {
    const { technologies } = props;
    return (
        <>
            {technologies && (
                <ul className="card__technologies">
                    {technologies.map((tech, index) => (
                        <li key={index} className="card__technology">
                            {tech}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default TechnologyList;