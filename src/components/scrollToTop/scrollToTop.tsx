import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isScrollToTopVisible, setScrollToTopVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setScrollToTopVisible(true)
            } else {
                setScrollToTopVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (

        <button
            className={`scrollToTop ${isScrollToTopVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default ScrollToTop;