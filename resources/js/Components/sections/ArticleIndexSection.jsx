import React from "react";

function ArticleIndexSection() {
    return (
        <div>
            <main className="container mx-auto px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://placehold.co/400x250"
                            alt="Ciberseguridad"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <span className="text-blue-600 text-sm font-semibold">SEGURIDAD</span>
                            <h2 className="text-xl font-bold mt-2 mb-4">
                                Protege tu Identidad Digital
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Aprende las mejores prácticas para mantener tu identidad segura
                                en línea.
                            </p>
                            <a href="/" className="text-blue-600 hover:underline">
                                Leer más →
                            </a>
                        </div>
                    </article>

                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://placehold.co/400x250"
                            alt="Hacking ético"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <span className="text-blue-600 text-sm font-semibold">
                                HACKING ÉTICO
                            </span>
                            <h2 className="text-xl font-bold mt-2 mb-4">
                                Introducción al Pentesting
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Descubre los fundamentos del testing de penetración y hacking
                                ético.
                            </p>
                            <a href="/" className="text-blue-600 hover:underline">
                                Leer más →
                            </a>
                        </div>
                    </article>

                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="https://placehold.co/400x250"
                            alt="Privacidad"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <span className="text-blue-600 text-sm font-semibold">
                                PRIVACIDAD
                            </span>
                            <h2 className="text-xl font-bold mt-2 mb-4">
                                Guía de Privacidad en Línea
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Tips esenciales para proteger tu privacidad en internet.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">
                                Leer más →
                            </a>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
}

export default ArticleIndexSection;
