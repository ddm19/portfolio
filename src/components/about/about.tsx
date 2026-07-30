import { useRef } from 'react';
import './about.scss';
import React from 'react';
import Special from 'components/special/special';
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

    const stats = ['stat1', 'stat2', 'stat3'] as const;
    const steps = ['step1', 'step2', 'step3', 'step4'] as const;

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

                    <div className="about__stats">
                        {stats.map((key) => (
                            <div className="about__stat" key={key}>
                                <h3 className="about__statTitle">{t(`about.stats.${key}.title`)}</h3>
                                <p className="about__statDescription">{t(`about.stats.${key}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about__process">
                <h2 className="about__title">{t('about.process.title')}</h2>
                <div className="about__processSteps">
                    {steps.map((key, index) => (
                        <div className="about__processStep" key={key}>
                            <span className="about__processNumber">{index + 1}</span>
                            <h3 className="about__processStepTitle">{t(`about.process.steps.${key}.title`)}</h3>
                            <p className="about__processStepDescription">{t(`about.process.steps.${key}.description`)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default About;
