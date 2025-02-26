import React from "react";
import { User } from 'lucide-react';


function AboutMe() {
    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="container mx-auto px-6 py-8">
                <div className="bg-white p-4 rounded-md">
                    <div className="mx-10 my-4 p-6 bg-white rounded-md">
                        <div className="flex p-4 m-2 items-center">
                            <div className="relative">
                                <User size={60}/>
                            </div>
                            <div className="flex-1 flex justify-between items-start ml-4">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <h2 className="text-3xl font-bold">Ulises Gil</h2>
                                    </div>
                                    <div className="mt-4 space-y-2 text-gray-600">
                                        <p>¡Hola! Soy Ulises Gil, un apasionado de la ciberseguridad que descubrió este mundo en 2017,
                                            aunque no fue hasta 2020 cuando empecé a aprender para dedicarme a esto.
                                            Mi curiosidad personal me llevó a sumergirme en este campo, explorando las diferentes áreas y adquiriendo conocimientos para proteger sistemas y fortalecer la seguridad en entornos digitales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 mx-2 mt-4">
                            <h2 className="text-3xl font-bold">¿Qué encontrarás aquí?</h2>
                            <div className="flex gap-2 mt-4">
                                <p className="text-gray-600">Este blog nace con el propósito de compartir conocimientos, desde tutoriales técnicos y consejos prácticos hasta análisis y reflexiones sobre temas actuales en ciberseguridad. Además, es un espacio donde muestro mis capacidades, sirviendo como una ventana para que empresas y particulares puedan evaluar mi conocimiento y experiencia.</p>
                            </div>
                        </div>
                        <div className="px-4 mx-2 mt-4">
                            <h2 className="text-3xl font-bold">Habilidades</h2>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 mt-2 text-blue-700 bg-blue-200 rounded-full">Pentesting</button>
                                <button className="px-4 py-2 mt-2 text-blue-700 bg-blue-200 rounded-full">Seguridad en Red</button>
                            </div>
                        </div>
                        <div className="px-4 mx-2 mt-4">
                            <h2 className="text-3xl font-bold">Certificaciones</h2>
                            <div className="flex gap-2 ml-4 mt-2">
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Junior Penetration Tester - eJPTv2</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;