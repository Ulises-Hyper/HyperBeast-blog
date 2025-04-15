import { Button, Form, Input, Textarea, addToast } from "@heroui/react";
import { Mail, MessageCircle, User } from "lucide-react";
import { useState } from "react";

function FeedbackForm({ user }) {
    const [formData, setFormData] = useState({
        username: user?.username || "",
        email: user?.email || "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Crear un objeto FormData
            const formDataToSend = new FormData();
            formDataToSend.append('username', formData.username); // Usar el valor del estado
            formDataToSend.append('email', formData.email);       // Usar el valor del estado
            formDataToSend.append('message', formData.message);

            const response = await fetch('/feedback', {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // Token CSRF
                },
                body: formDataToSend, // Enviar como FormData
            });

            if (response.ok) {
                console.log('Formulario enviado correctamente');
                addToast({
                    title: "Formulario Enviado",
                    description: "Tu feedback ha sido enviado correctamente.",
                    color: "success"
                });
                setFormData({
                    username: user?.username || "",
                    email: user?.email || "",
                    message: "",
                });
            } else {
                console.error('Error al enviar el formulario:', response.statusText);
                addToast({
                    title: "Error al enviar",
                    description: "Hubo un error al enviar tu feedback. Por favor, inténtalo de nuevo.",
                    color: "danger"
                });
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            addToast({
                title: "Error al enviar",
                description: "Hubo un error al enviar tu feedback. Por favor, inténtalo de nuevo.",
                color: "danger"
            });
        }
    };

    return (
        <div className="bg-gray-100 mt-8 mb-8 w-full flex justify-center">
            <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Envía tu Feedback</h2>
                <p className="text-gray-600 mb-6 text-lg">
                    Tu opinión es muy importante para nosotros. {!user && "Por favor completa el formulario para enviar tus comentarios."}
                </p>
                <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {!user && (
                        <>
                            <div className="flex flex-col w-full">
                                <Input
                                    name="username"
                                    placeholder="Ej: BGreen"
                                    label="Nombre de usuario"
                                    icon={<User className="text-gray-500" />}
                                    type="text"
                                    aria-label="Nombre de usuario"
                                    required
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 0",
                                    }}
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <Input
                                    name="email"
                                    label="Correo electrónico"
                                    placeholder="Ej: bgreen@hyperbeast.es"
                                    type="email"
                                    aria-label="Correo electrónico"
                                    icon={<Mail className="text-gray-500" />}
                                    required
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 0",
                                    }}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}

                    <div className="flex flex-col w-full">
                        <Textarea
                            name="message"
                            label="Mensaje"
                            icon={<MessageCircle className="text-gray-500" />}
                            placeholder="Escribe tu mensaje aquí..."
                            rows={7}
                            aria-label="Mensaje de feedback"
                            required
                            style={{
                                outline: "none",
                                boxShadow: "none",
                                border: "none",
                                padding: "0 12px 0 0",
                            }}
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        Enviar Feedback
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default FeedbackForm;