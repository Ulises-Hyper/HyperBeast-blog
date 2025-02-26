import React from "react";

function ArticlesCards() {
    return (
        <section className="text-white py-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="relative mb-16">
                    <div className="flex flex-col items-center pt-0 mt-0">
                        <span className="text-blue-400 font-bold mb-2">Mantente Actualizado</span>
                        <h1 className="text-5xl font-bold text-white">
                            Próximas Entradas
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4"></div>
                    </div>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="group relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Ciberseguridad" className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                                    15 Ene, 2025
                                </span>
                                <span className="bg-blue-500/20 backdrop-blur-sm text-green-500 text-sm px-4 py-2 rounded-full">
                                    Tendencias
                                </span>
                            </div>
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-3">Predicciones de Ciberseguridad 2025</h3>
                                <p className="text-white/80 mb-6">Las tendencias y amenazas que definirán el próximo año en
                                    ciberseguridad</p>
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src="https://placehold.co/50x50" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white/50" />
                                    <div>
                                        <h4 className="font-semibold">Marion Curtis</h4>
                                        <p className="text-sm text-white/70">Analista Senior</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="IA y Seguridad" className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                                    18 Ene, 2025
                                </span>
                                <span className="bg-blue-500/20 backdrop-blur-sm text-green-500 text-sm px-4 py-2 rounded-full">
                                    IA
                                </span>
                            </div>
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-3">IA en Ciberseguridad: La Nueva Era</h3>
                                <p className="text-white/80 mb-6">Cómo la inteligencia artificial está transformando la seguridad digital</p>
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src="https://placehold.co/50x50" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white/50" />
                                    <div>
                                        <h4 className="font-semibold">Rayna Dias</h4>
                                        <p className="text-sm text-white/70">Investigadora IA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Blockchain" className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                            <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                                    20 Ene, 2025
                                </span>
                                <span className="bg-blue-500/20 backdrop-blur-sm text-green-500 text-sm px-4 py-2 rounded-full">
                                    Blockchain
                                </span>
                            </div>
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-3">Predicciones de Ciberseguridad 2025</h3>
                                <p className="text-white/80 mb-6">Las tendencias y amenazas que definirán el próximo año en
                                    ciberseguridad</p>
                                <div className="flex items-center space-x-4 mb-4">
                                    <img src="https://placehold.co/50x50" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white/50" />
                                    <div>
                                        <h4 className="font-semibold">Ruben Korsgaard</h4>
                                        <p className="text-sm text-white/70">Experto Blockchain</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticlesCards;