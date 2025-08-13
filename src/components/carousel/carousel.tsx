import React, { useEffect, useMemo, useRef, useState } from 'react';
import './carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

type CarouselProps = {
    items: React.ReactNode[];
    itemsPerPage?: number;
    autoPlayDefault?: boolean;
    interval?: number;
    autoPlayDelay?: number;
    className?: string;
};

const Carousel: React.FC<CarouselProps> = ({
    items,
    itemsPerPage = 3,
    autoPlayDefault = false,
    interval = 3000,
    autoPlayDelay = 0,
    className
}) => {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);

    const pages = useMemo(() => {
        const chunk: React.ReactNode[][] = [];
        for (let i = 0; i < items.length; i += itemsPerPage) {
            chunk.push(items.slice(i, i + itemsPerPage));
        }
        return chunk;
    }, [items, itemsPerPage]);

    useEffect(() => {
        setIndex(0);
    }, [itemsPerPage, items.length]);

    const pageCount = pages.length;

    const next = () => setIndex((i) => (i + 1) % pageCount);
    const prev = () => setIndex((i) => (i - 1 + pageCount) % pageCount);
    const goto = (i: number) => setIndex(i);

    const clearTimer = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const startAutoPlay = () => {
        clearTimer();
        if (!autoPlayDefault || pageCount <= 1) return;
        const start = () => {
            clearTimer();
            timerRef.current = window.setTimeout(function tick() {
                next();
                timerRef.current = window.setTimeout(tick, interval);
                return timerRef.current;
            }, interval);
        };
        if (autoPlayDelay > 0) {
            timerRef.current = window.setTimeout(start, autoPlayDelay);
        } else {
            start();
        }
    };

    useEffect(() => {
        startAutoPlay();
        return clearTimer;
    }, [autoPlayDefault, interval, autoPlayDelay, pageCount]);

    if (!items?.length) return null;

    return (
        <div
            className={`carousel ${className ?? ''}`}
            onMouseEnter={clearTimer}
            onMouseLeave={startAutoPlay}
        >
            <button
                className="carousel__control carousel__control--prev"
                aria-label="Anterior"
                onClick={prev}
                disabled={pageCount <= 1}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <div className="carousel__viewport">
                <div
                    className="carousel__track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {pages.map((group, i) => (
                        <div className="carousel__slide" key={i}>
                            {group.map((item, j) => (
                                <div className="carousel__item" key={j}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="carousel__control carousel__control--next"
                aria-label="Siguiente"
                onClick={next}
                disabled={pageCount <= 1}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>

            <div className="carousel__dots">
                {Array.from({ length: pageCount }).map((_, i) => (
                    <span
                        key={i}
                        className={`carousel__dot ${i === index ? 'is-active' : ''}`}
                        onClick={() => goto(i)}
                        aria-label={`Ir a la página ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
