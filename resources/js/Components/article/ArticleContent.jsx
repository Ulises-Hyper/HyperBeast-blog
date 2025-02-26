import React from "react";

function ArticleContent() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="max-w-4xl mx-auto">
                <p className="text-gray-600 text-lg">Las contraseñas son la primera línea de defensa contra el acceso no autorizado a tus cuentas. En este artículo, te mostramos las mejores prácticas para crear y mantener contraseñas seguras.</p>
                <h2 className="text-3xl mt-5 font-bold">1. Usa contraseñas fuertes</h2>
                <p className="text-gray-600 text-md mt-2">Una contraseña fuerte debe contener al menos 12 caracteres, incluyendo una combinación de letras mayúsculas, minúsculas, números y símbolos. Evita usar palabras comunes o información personal.</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <h3 className="text-blue-900 font-bold mb-2">Consejo Pro</h3>
                    <p className="text-blue-600">Utiliza frases completas en lugar de palabras sueltas. Por ejemplo: "MiPerroLadra3VecesAlDia!" es más segura y fácil de recordar que "Mpl3vad!".</p>
                </div>
                <h2 className="text-3xl mt-5 font-bold">2. Habilita la Autenticación en Dos Pasos (2FA)</h2>
                <p className="text-gray-600 text-md mt-2">La autenticación en dos pasos agrega una capa adicional de seguridad, ya que requiere un segundo factor para iniciar sesión, como un código enviado a tu teléfono.</p>
                <div className="bg-gray-50 border-l-4 border-gray-500 p-6 my-8">
                    <p>"La seguridad comienza con la prevención. Establecer buenas prácticas con tus contraseñas es clave para mantener tus cuentas seguras."</p>
                    <p className="text-gray-600">— Experto en Ciberseguridad</p>
                </div>
                <h2 className="text-3xl mt-5 font-bold">3. Usa un gestor de contraseñas</h2>
                <p className="text-gray-600 text-md mt-2">Un gestor de contraseñas puede ayudarte a generar y almacenar contraseñas únicas para cada una de tus cuentas, evitando el riesgo de reutilizarlas.</p>
                <div class="border-t border-gray-200 mt-12 pt-8">
                    <div class="flex flex-col sm:flex-row items-center justify-between">
                        <div class="flex items-center space-x-4 mb-4 sm:mb-0">
                            <span class="text-gray-700">Compartir artículo:</span>
                            <div class="flex space-x-4">
                                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                    </svg>
                                    <span>Twitter</span>
                                </button>
                                <button class="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                                    </svg>
                                    <span>LinkedIn</span>
                                </button>
                            </div>
                        </div>
                        <button class="text-gray-500 hover:text-gray-700 flex items-center space-x-2">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                            </svg>
                            <span>Guardar artículo</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleContent;