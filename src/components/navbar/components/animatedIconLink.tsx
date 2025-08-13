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
    isBlank?: boolean;
}



const AnimatedIconLink = (props: AnimatedIconLinkProps) => {
    const {
        href,
        icon,
        label,
        className,
        duration = '0.8s',
        iterationCount = 1,
        isBlank,
        animation = isBlank ? 'bounce 0.5s infinite' : 'pulse 0.8s infinite',

    } = props;

    const [isAnimating, setIsAnimating] = useState(false);

    const isPhone = window.matchMedia("(max-width: 768px)").matches;

    const handleMouseEnter = useCallback(() => {
        setIsAnimating(true);
    }, []);

    const handleAnimationEnd = useCallback(() => {
        setIsAnimating(false);
    }, []);

    const classes = [
        className,
        isAnimating && !isPhone && `animate__animated animate__${animation}`,
    ].filter(Boolean).join(' ');

    const style = {
        animationDuration: duration,
        animationIterationCount: iterationCount,
        color: isAnimating && !isPhone ? 'var(--color-text-highlight)' : '',
    };

    return (
        <a
            href={href}
            className={classes}
            style={style}
            onMouseEnter={handleMouseEnter}
            onAnimationEnd={handleAnimationEnd}
            aria-label={label}
            target={isBlank ? "_blank" : ""}
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default AnimatedIconLink;