import React from "react";

function RelatedArticleCard() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="max-w-4xl mx-auto">
                <section className="max-w-4xl mx-auto mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos Relacionados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a href="/" className="block group relative overflow-hidden">
                            <img
                                src="https://picsum.photos/400/250"
                                alt="Artículo relacionado"
                                className="rounded-lg w-full mb-4 transition-transform transform group-hover:scale-105"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                Los Mejores Gestores de Contraseñas en 2025
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Una comparativa detallada de las mejores opciones para gestionar tus contraseñas de forma
                                segura.
                            </p>
                            {/* Botón de animación */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-300">
                                {/* Botón Leer más */}
                                <button className="text-sm font-medium text-gray-500 hover:bg-blue-600 hover:text-white transform transition-all duration-300 hover:scale-105 py-2 px-4 rounded-md">
                                    Leer más
                                </button>
                                {/* Botón Eliminar */}
                                <button className="text-sm font-medium text-gray-500 hover:bg-red-600 hover:text-white transform transition-all duration-300 hover:scale-105 py-2 px-4 rounded-md">
                                    Eliminar
                                </button>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RelatedArticleCard;