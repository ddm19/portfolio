import { useRef } from 'react';
import './about.scss';
import React from 'react';
import Special from 'components/special/special';
import Experience from 'components/experience/experience';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const { t } = useTranslation();



    const startPulseAnimation = () => {
        if (linkRef.current) {
            linkRef.current.classList.add('animate__animated', 'animate__pulse');
        }
    };

    const handleAnimationEnd = (e: React.AnimationEvent<HTMLAnchorElement>) => {
        if (e.animationName === 'pulse' && linkRef.current) {
            linkRef.current.classList.remove('animate__animated', 'animate__pulse');
            setTimeout(startPulseAnimation, 2000);
        }
    };

    return (
        <section id='about' className="about customSection">
            <Special />

            <div className="about__content">
                <h2 className="about__title">{t('about.sectionTitle')}</h2>
                <div className='about__contentContainer'>
                    <p className="about__description">
                        <Trans
                            i18nKey="about.description"
                            components={{ 1: <span className="about--highlight" /> }}
                        />
                        <span className="about--highlight">
                            <a
                                className='animate__animated animate__pulse'
                                ref={linkRef}
                                onAnimationEnd={handleAnimationEnd}
                                href='#contact'
                            >
                                {t('about.talkButton')}
                            </a>
                        </span>
                    </p>
                    <h2 className="about__title">{t('about.careerTitle')}</h2>
                </div>
            </div>

            <Experience />

        </section>
    );
}
export default About;