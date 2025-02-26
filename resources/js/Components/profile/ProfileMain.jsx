import { Bell, BookMarked, AlertCircle as CircleAlert, Clock, Heart, MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";
import ToggleSwitch from "../common/ToggleSwitch";

function ProfileMain() {
    return (
        <div className="mx-4 p-6 rounded-md">
            <div className="flex flex-col lg:flex-row w-full gap-4">
                {/* Main Content Column */}
                <div className="flex-[3] space-y-4">
                    {/* Notifications Section */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold text-gray-800">Notificaciones</h2>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">4 nuevas</span>
                        </div>

                        <div className="space-y-3">
                            {/* Notification 1 */}
                            <div className="bg-blue-50 p-4 rounded-lg transition-all hover:shadow-md">
                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-100 p-2.5 rounded-lg">
                                        <MessageCircle className="text-blue-600 h-5 w-5"/>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold text-gray-900">Nuevo comentario en tu artículo</p>
                                            <div className="flex text-sm items-center gap-2 text-gray-500">
                                                <Clock size={14} />
                                                <span>Hace 10 minutos</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Juan Pérez comentó en 'Guía de Seguridad Web'
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Notification 2 */}
                            <div className="bg-blue-50 p-4 rounded-lg transition-all hover:shadow-md">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-2.5 rounded-lg">
                                        <ThumbsUp className="text-green-600 h-5 w-5"/>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold text-gray-900">Tu artículo recibió un me gusta</p>
                                            <div className="flex text-sm items-center gap-2 text-gray-500">
                                                <Clock size={14} />
                                                <span>Hace 30 minutos</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">
                                            A Ana Martínez le gustó tu artículo 'Tutorial Docker'
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Previous Notifications */}
                            <div className="p-4 rounded-lg hover:bg-gray-50 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="bg-yellow-100 p-2.5 rounded-lg">
                                        <CircleAlert className="text-yellow-600 h-5 w-5"/>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold text-gray-900">Recordatorio de revisión</p>
                                            <div className="flex text-sm items-center gap-2 text-gray-500">
                                                <Clock size={14} />
                                                <span>Hace 1 hora</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Tienes una revisión pendiente para 'Actualización Kali Linux'
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-lg hover:bg-gray-50 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-100 p-2.5 rounded-lg">
                                        <Bell className="text-purple-600 h-5 w-5"/>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold text-gray-900">Actualización del sistema</p>
                                            <div className="flex text-sm items-center gap-2 text-gray-500">
                                                <Clock size={14} />
                                                <span>Hace 2 horas</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Se han actualizado las guías de estilo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Favorites and Likes Sections */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Favorites Section */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Artículos Favoritos</h2>
                                <BookMarked className="text-blue-600 h-5 w-5" />
                            </div>
                            <div className="space-y-3">
                                {[
                                    { title: "Introducción a Kubernetes", date: "15 Mar 2024", reads: "1.2k" },
                                    { title: "Seguridad en AWS", date: "12 Mar 2024", reads: "856" },
                                    { title: "Docker para Principiantes", date: "10 Mar 2024", reads: "2.3k" }
                                ].map((article, index) => (
                                    <div key={index} className="p-3 hover:bg-gray-50 rounded-lg transition-all cursor-pointer">
                                        <h3 className="font-medium text-gray-900">{article.title}</h3>
                                        <div className="flex justify-between items-center mt-1 text-sm text-gray-500">
                                            <span>{article.date}</span>
                                            <span>{article.reads} lecturas</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Likes Section */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Artículos que me gustan</h2>
                                <Heart className="text-red-500 h-5 w-5" />
                            </div>
                            <div className="space-y-3">
                                {[
                                    { title: "Machine Learning Básico", date: "16 Mar 2024", likes: "234" },
                                    { title: "Python para Data Science", date: "14 Mar 2024", likes: "189" },
                                    { title: "Mejores prácticas en React", date: "11 Mar 2024", likes: "445" }
                                ].map((article, index) => (
                                    <div key={index} className="p-3 hover:bg-gray-50 rounded-lg transition-all cursor-pointer">
                                        <h3 className="font-medium text-gray-900">{article.title}</h3>
                                        <div className="flex justify-between items-center mt-1 text-sm text-gray-500">
                                            <span>{article.date}</span>
                                            <div className="flex items-center gap-1">
                                                <Heart className="h-4 w-4 text-red-500" />
                                                <span>{article.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Settings Sidebar */}
                <div className="lg:flex-1">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Configuración Rápida</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-all">
                                <div>
                                    <p className="font-medium text-gray-900">Notificaciones</p>
                                    <p className="text-sm text-gray-500">Recibe alertas de actividad</p>
                                </div>
                                <ToggleSwitch size={10} />
                            </div>
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-all">
                                <div>
                                    <p className="font-medium text-gray-900">Perfil Público</p>
                                    <p className="text-sm text-gray-500">Visible para todos</p>
                                </div>
                                <ToggleSwitch size={10} />
                            </div>
                            <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-all">
                                <div>
                                    <p className="font-medium text-gray-900">Newsletter</p>
                                    <p className="text-sm text-gray-500">Actualizaciones semanales</p>
                                </div>
                                <ToggleSwitch size={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMain;