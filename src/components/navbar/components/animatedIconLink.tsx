import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";

interface AnimatedIconLinkProps {
    href: string;
    icon: IconProp;
    label: string;
    className?: string;
    animation?: string;
    duration?: string;
    iterationCount?: number;
}



const AnimatedIconLink = (props: AnimatedIconLinkProps) => {
    const {
        href,
        icon,
        label,
        className,
        animation = 'bounce 1s infinite',
        duration = '0.8s',
        iterationCount = 1,
    } = props;

    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setIsAnimating(true);
    }, []);

    const handleAnimationEnd = useCallback(() => {
        setIsAnimating(false);
    }, []);

    const classes = [
        className,
        isAnimating && `animate__animated animate__${animation}`,
    ].filter(Boolean).join(' ');

    const style = {
        animationDuration: duration,
        animationIterationCount: iterationCount,
    };

    return (
        <a
            href={href}
            className={classes}
            style={style}
            onMouseEnter={handleMouseEnter}
            onAnimationEnd={handleAnimationEnd}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default AnimatedIconLink;