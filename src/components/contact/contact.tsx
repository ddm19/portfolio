import { useState } from "react";
import "./contact.scss";
import { contact } from "actions/contact";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

type FormState = {
    name: string;
    company: string;
    email: string;
    services: string[];
    message: string;
};

const MAX_OPTIONS = 5;

const getServices = (t: TFunction) => [
    t("contact.form.options.web"),
    t("contact.form.options.mobile"),
    t("contact.form.options.ecommerce"),
    t("contact.form.options.custom"),
    t("contact.form.options.seo"),
    t("contact.form.options.integrations"),
    t("contact.form.options.consulting"),
    t("contact.form.options.other"),
];

export default function Contact() {
    const { t } = useTranslation();
    const services = getServices(t);
    const [form, setForm] = useState<FormState>({
        name: "",
        company: "",
        email: "",
        services: [],
        message: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const onServicesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = Array.from(e.target.selectedOptions).map(o => o.value);
        setForm(prev => ({ ...prev, services: selected }));
    };

    const validate = () => {
        const next: typeof errors = {};
        if (!form.name.trim()) next.name = t("contact.form.name.error");
        if (!form.company.trim()) next.company = t("contact.form.company.error");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = t("contact.form.email.error");
        if (form.services.length === 0) next.services = t("contact.form.services.error");
        if (form.message.trim().length < 10) next.message = t("contact.form.message.error");

        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);

        try {
            const response = await contact(form);

            if (response.ok) {
                setSent(true);
                setForm({ name: "", company: "", email: "", services: [], message: "" });
                setErrors({});
            } else {
                console.error("Error al enviar", await response.text());
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="contact customSection" id="contact">
            {sent ? (
                <div className="contact__sentMessage">
                    <h2>{t("contact.sent.title")}</h2>
                    <p>{t("contact.sent.message")}</p>
                    <button className="contact__button" onClick={() => setSent(false)}>
                        {t("contact.sent.button")}
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="contact__title">{t("contact.title")}</h2>
                    <p className="contact__subtitle">{t("contact.subtitle")}</p>

                    <form className="contact__form" onSubmit={onSubmit} noValidate>
                        <div className="contact__group">
                            <label htmlFor="name" className="contact__label">{t("contact.form.name.label")}</label>
                            <input
                                id="name"
                                name="name"
                                className={`contact__input ${errors.name ? "is-invalid" : ""}`}
                                value={form.name}
                                onChange={onChange}
                                placeholder={t("contact.form.name.placeholder")}
                                autoComplete="name"
                                aria-invalid={!!errors.name}
                                required
                            />
                            {errors.name && <span className="contact__error">{errors.name}</span>}
                        </div>

                        <div className="contact__group">
                            <label htmlFor="company" className="contact__label">{t("contact.form.company.label")}</label>
                            <input
                                id="company"
                                name="company"
                                className={`contact__input ${errors.company ? "is-invalid" : ""}`}
                                value={form.company}
                                onChange={onChange}
                                aria-invalid={!!errors.company}
                                placeholder={t("contact.form.company.placeholder")}
                                autoComplete="organization"
                            />
                            {errors.company && <span className="contact__error">{errors.company}</span>}
                        </div>

                        <div className="contact__group">
                            <label htmlFor="email" className="contact__label">{t("contact.form.email.label")}</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`contact__input ${errors.email ? "is-invalid" : ""}`}
                                value={form.email}
                                onChange={onChange}
                                placeholder={t("contact.form.email.placeholder")}
                                autoComplete="email"
                                aria-invalid={!!errors.email}
                                required
                            />
                            {errors.email && <span className="contact__error">{errors.email}</span>}
                        </div>

                        <div className="contact__group contact__group">
                            <label htmlFor="services" className="contact__label">{t("contact.form.services.label")}</label>
                            <select
                                id="services"
                                name="services"
                                multiple
                                className={`contact__select ${errors.services ? "is-invalid" : ""}`}
                                value={form.services}
                                onChange={onServicesChange}
                                aria-invalid={!!errors.services}
                                size={Math.min(MAX_OPTIONS, services.length)}
                                required
                            >
                                {services.map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                            {errors.services && <span className="contact__error">{errors.services}</span>}
                        </div>

                        <div className="contact__group contact__group--full">
                            <label htmlFor="message" className="contact__label">{t("contact.form.message.label")}</label>
                            <textarea
                                id="message"
                                name="message"
                                className={`contact__textarea ${errors.message ? "is-invalid" : ""}`}
                                value={form.message}
                                onChange={onChange}
                                placeholder={t("contact.form.message.placeholder")}
                                aria-invalid={!!errors.message}
                                required
                            />
                            {errors.message && <span className="contact__error">{errors.message}</span>}
                        </div>

                        <div className="contact__actions">
                            <button className="contact__button" type="submit" disabled={submitting}>
                                {submitting ? t("contact.form.submit.sending") : t("contact.form.submit.send")}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </section>
    );
}
