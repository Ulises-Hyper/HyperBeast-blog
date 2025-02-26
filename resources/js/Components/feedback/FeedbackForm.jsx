import React from "react";
import { User, Mail, MessageCircle } from "lucide-react"; // Importando los íconos de Lucide React

function FeedbackForm() {
    return (
        <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Envía tu Feedback</h2>
                <p className="text-gray-600 mb-6 text-lg">
                    Tu opinión es muy importante para nosotros. Utiliza el formulario para compartir tus comentarios, sugerencias o reportar cualquier problema que hayas encontrado.
                </p>
                <form className="flex flex-col gap-6">
                    {/* Nombre de usuario */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="username"
                            className="font-bold text-gray-700 flex items-center gap-2"
                        >
                            <User className="h-5 w-5 text-gray-700" />
                            Usuario
                        </label>
                        <input
                            id="username"
                            placeholder="Ej: BGreen"
                            required
                            type="text"
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Nombre de usuario"
                        />
                    </div>

                    {/* Correo electrónico */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="email"
                            className="font-bold text-gray-700 flex items-center gap-2"
                        >
                            <Mail className="h-5 w-5 text-gray-700" />
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            placeholder="Ej: bgreen@hyperbeast.es"
                            required
                            type="email"
                            className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Correo electrónico"
                        />
                    </div>

                    {/* Mensaje */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="font-bold text-gray-700 flex items-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5 text-gray-700" />
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            placeholder="Escribe tu mensaje aquí..."
                            required
                            rows={5}
                            className="mt-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Mensaje de feedback"
                        />
                    </div>

                    {/* Botón de envío */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        Enviar Feedback
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FeedbackForm;
