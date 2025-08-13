import { useState } from "react";
import "./contact.scss";
import { contact } from "actions/contact";

type FormState = {
    name: string;
    company: string;
    email: string;
    services: string[];
    message: string;
};

const MAX_OPTIONS = 5;

const SERVICES = [
    "Desarrollo Web",
    "App Móvil",
    "E-commerce",
    "Soluciones a Medida",
    "SEO | Posicionamiento Web",
    "Integraciones",
    "Consultoría",
    "Otros"
];

export default function Contact() {
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
        if (!form.name.trim()) next.name = "El nombre es obligatorio.";
        if (!form.company.trim()) next.company = "El nombre de la empresa es obligatorio.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Correo inválido.";
        if (form.services.length === 0) next.services = "Selecciona al menos un servicio.";
        if (form.message.trim().length < 10) next.message = "Escribe al menos 10 caracteres.";

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
                    <h2>¡Mensaje enviado!</h2>
                    <p>Gracias por tu mensaje. Me pondré en contacto contigo pronto.</p>
                    <button className="contact__button" onClick={() => setSent(false)}>
                        Enviar otro mensaje
                    </button>
                </div>
            ) : (
                <>
                    <h2 className="contact__title">Contacto</h2>
                    <p className="contact__subtitle">Cuéntame sobre tu proyecto y cómo puedo ayudarte.</p>

                    <form className="contact__form" onSubmit={onSubmit} noValidate>
                        <div className="contact__group">
                            <label htmlFor="name" className="contact__label">Nombre</label>
                            <input
                                id="name"
                                name="name"
                                className={`contact__input ${errors.name ? "is-invalid" : ""}`}
                                value={form.name}
                                onChange={onChange}
                                placeholder="Tu nombre"
                                autoComplete="name"
                                aria-invalid={!!errors.name}
                                required
                            />
                            {errors.name && <span className="contact__error">{errors.name}</span>}
                        </div>

                        <div className="contact__group">
                            <label htmlFor="company" className="contact__label">Empresa*</label>
                            <input
                                id="company"
                                name="company"
                                className={`contact__input ${errors.company ? "is-invalid" : ""}`}
                                value={form.company}
                                onChange={onChange}
                                aria-invalid={!!errors.company}
                                placeholder="Nombre de la empresa"
                                autoComplete="organization"
                            />
                            {errors.company && <span className="contact__error">{errors.company}</span>}
                        </div>

                        <div className="contact__group">
                            <label htmlFor="email" className="contact__label">Correo</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`contact__input ${errors.email ? "is-invalid" : ""}`}
                                value={form.email}
                                onChange={onChange}
                                placeholder="tu@email.com"
                                autoComplete="email"
                                aria-invalid={!!errors.email}
                                required
                            />
                            {errors.email && <span className="contact__error">{errors.email}</span>}
                        </div>

                        <div className="contact__group contact__group">
                            <label htmlFor="services" className="contact__label">Servicios y soluciones</label>
                            <select
                                id="services"
                                name="services"
                                multiple
                                className={`contact__select ${errors.services ? "is-invalid" : ""}`}
                                value={form.services}
                                onChange={onServicesChange}
                                aria-invalid={!!errors.services}
                                size={Math.min(MAX_OPTIONS, SERVICES.length)}
                                required
                            >
                                {SERVICES.map(s => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                            {errors.services && <span className="contact__error">{errors.services}</span>}
                        </div>

                        <div className="contact__group contact__group--full">
                            <label htmlFor="message" className="contact__label">Cuéntame sobre tu proyecto</label>
                            <textarea
                                id="message"
                                name="message"
                                className={`contact__textarea ${errors.message ? "is-invalid" : ""}`}
                                value={form.message}
                                onChange={onChange}
                                placeholder="Objetivos, plazos, referencias..."
                                aria-invalid={!!errors.message}
                                required
                            />
                            {errors.message && <span className="contact__error">{errors.message}</span>}
                        </div>

                        <div className="contact__actions">
                            <button className="contact__button" type="submit" disabled={submitting}>
                                {submitting ? "Enviando..." : "Enviar"}
                            </button>
                        </div>
                    </form>
                </>)}
        </section>
    );
}