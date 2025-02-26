import React from "react";
import { Search, User, Star, Eye, ThumbsUp } from "lucide-react";

function ArticlesList() {
    return (
        <main className="bg-gray-100">
            {/* Main Title */}
            <div class="container mx-auto px-6 py-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">Artículos de Ciberseguridad</h1>
                <div class="flex flex-wrap gap-4">
                    <div class="relative">
                        <select id="categoryFilter" class="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500">
                            <option>Todas las categorías</option>
                            <option>Malware</option>
                            <option>Seguridad Empresarial</option>
                            <option>OSINT</option>
                        </select>
                    </div>
                    <div className="relative flex-grow">
                        <input
                            id="searchInput"
                            type="text"
                            placeholder="Buscar artículos..."
                            className="w-full pr-10 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="container mx-auto px-6 mb-8">
                <div className="space-y-8">
                    {/* Article 1 */}
                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="w-full md:w-1/3">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                    alt="Ciberseguridad"
                                    className="w-full h-[260px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 md:p-6 w-full md:w-2/3">
                                <div className="flex gap-2 items-center flex-wrap mb-2">
                                    <button className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Malware</button>
                                    <span className="text-gray-500 text-sm">15 de enero de 2023</span>
                                    <a href="/" className="text-gray-500 text-sm hover:text-blue-600">
                                        <User size={16} className="inline-block mr-1" />
                                        María García
                                    </a>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Análisis Profundo: Nuevas Variantes de Ransomware en 2024</h2>
                                <div className="space-y-3">
                                    <p className="text-gray-700 text-sm md:text-base">
                                        Un análisis detallado de las últimas variantes de ransomware descubiertas este año, sus métodos de propagación y las mejores estrategias de protección para empresas y usuarios.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#ransomware</span>
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#seguridad</span>
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#protección</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <a href="/" className="text-blue-600 hover:underline">Leer más →</a>
                                        <div className="flex items-center space-x-6">
                                            <button className="text-gray-500 hover:text-yellow-400 focus:text-yellow-400 transition-colors">
                                                <Star className="inline-block mr-2" />
                                            </button>
                                            <span className="text-gray-500 flex items-center ml-2">
                                                <Eye className="inline-block mr-2" />
                                                1.2k
                                            </span>
                                            <span className="text-gray-500 flex items-center ml-2">
                                                <ThumbsUp className="inline-block mr-2" />
                                                245
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Article 2 */}
                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="w-full md:w-1/3">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                    alt="Ciberseguridad"
                                    className="w-full h-[260px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 md:p-6 w-full md:w-2/3">
                                <div className="flex gap-2 items-center flex-wrap mb-2">
                                    <button className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Malware</button>
                                    <span className="text-gray-500 text-sm">15 de enero de 2023</span>
                                    <a href="/" className="text-gray-500 text-sm hover:text-blue-600">
                                        <User size={16} className="inline-block mr-1" />
                                        María García
                                    </a>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Análisis Profundo: Nuevas Variantes de Ransomware en 2024</h2>
                                <div className="space-y-3">
                                    <p className="text-gray-700 text-sm md:text-base">
                                        Un análisis detallado de las últimas variantes de ransomware descubiertas este año, sus métodos de propagación y las mejores estrategias de protección para empresas y usuarios.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#ransomware</span>
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#seguridad</span>
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#protección</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <a href="/" className="text-blue-600 hover:underline">Leer más →</a>
                                        <div className="flex items-center space-x-6">
                                            <button className="text-gray-500 hover:text-yellow-400 focus:text-yellow-400 transition-colors">
                                                <Star className="inline-block mr-2" />
                                            </button>
                                            <span className="text-gray-500 flex items-center ml-2">
                                                <Eye className="inline-block mr-2" />
                                                1.2k
                                            </span>
                                            <span className="text-gray-500 flex items-center ml-2">
                                                <ThumbsUp className="inline-block mr-2" />
                                                245
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Article 3 */}
                    <article className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="w-full md:w-1/3">
                                <img
                                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                                    alt="Ciberseguridad"
                                    className="w-full h-[260px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4 md:p-6 w-full md:w-2/3">
                                <div className="flex gap-2 items-center flex-wrap mb-2">
                                    <button className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">Malware</button>
                                    <span className="text-gray-500 text-sm">15 de enero de 2023</span>
                                    <a href="/" className="text-gray-500 text-sm hover:text-blue-600">
                                        <User size={16} className="inline-block mr-1" />
                                        María García
                                    </a>
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Análisis Profundo: Nuevas Variantes de Ransomware en 2024</h2>
                                <div className="space-y-3">
                                    <p className="text-gray-700 text-sm md:text-base">
                                        Un análisis detallado de las últimas variantes de ransomware descubiertas este año, sus métodos de propagación y las mejores estrategias de protección para empresas y usuarios.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#ransomware</span>
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#seguridad</span>
                                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#protección</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <a href="/" className="text-blue-600 hover:underline">Leer más →</a>
                                        <div className="flex items-center space-x-6">
                                            <button className="text-gray-500 hover:text-yellow-400 focus:text-yellow-400 transition-colors">
                                                <Star className="inline-block mr-2" />
                                            </button>
                                            <span className="text-gray-500 flex items-center ml-2">
                                                <Eye className="inline-block mr-2" />
                                                1.2k
                                            </span>
                                            <span className="text-gray-500 flex items-center ml-2">
                                                <ThumbsUp className="inline-block mr-2" />
                                                245
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </main>
    )
}

export default ArticlesList;