interface FormState {
    name: string;
    company: string;
    email: string;
    services: string[];
    message: string;
}

export const contact = async (form: FormState) => {
    const cleanMessage = `  Nombre: ${form.name}
                            Empresa: ${form.company}
                            Correo: ${form.email}
                            Servicios: 
                            ${form.services.map(s => `- ${s}`).join("\n")}
                            Mensaje:
                            ${form.message}
                                `.trim();

    const response = await fetch("https://formspree.io/f/mkgzewkd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: cleanMessage
        })
    });

    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Error al enviar el formulario");
    }
};
