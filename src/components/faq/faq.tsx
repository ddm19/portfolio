import './faq.scss';
import { useTranslation } from 'react-i18next';

const QUESTION_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

const Faq = () => {
    const { t } = useTranslation();

    return (
        <section id="faq" className="faq customSection">
            <h2 className="faq__title">{t('faq.title')}</h2>

            <div className="faq__list">
                {QUESTION_KEYS.map((key) => (
                    <div className="faq__item" key={key}>
                        <h3 className="faq__question">{t(`faq.items.${key}.question`)}</h3>
                        <p className="faq__answer">{t(`faq.items.${key}.answer`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faq;
