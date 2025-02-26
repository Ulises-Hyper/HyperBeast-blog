import React from "react";
import {
    Mail,
    Calendar,
    Camera,
    Link,
    Twitter,
    Linkedin,
    User
} from 'lucide-react';
import ProfileEditModal from "./ProfileEditModal";

function ProfileHeader() {
    return (
        <div className="mx-10 my-4 p-6 bg-white rounded-md border border-gray-300">
            <div className="flex p-4 m-2 items-start">
                <div className="relative">
                    <img
                        className="rounded-full w-32 h-32 object-cover"
                        src="https://picsum.photos/120"
                        alt="Foto de Perfil"
                    />
                    <span className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-1 text-white cursor-pointer hover:bg-blue-600">
                        <Camera size={16} />
                    </span>
                </div>

                <div className="flex-1 flex justify-between items-start ml-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-4">
                                <h1 className="text-2xl font-bold">María García Rodríguez</h1>
                            </div>
                            <p className="text-gray-600 max-w-2xl">
                                Editora de contenido digital con más de 8 años de experiencia en medios digitales.
                                Especializada en tecnología y cultura digital.
                            </p>
                        </div>

                        <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>@mariagarcia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>maria.garcia@hyperbeast.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>Miembro desde 05/10/2024</span>
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                                <Link size={16} className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                                <Twitter size={16} className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                                <Linkedin size={16} className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <ProfileEditModal />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-50 rounded-lg p-4">
                    <h2 className="text-2xl font-bold text-center text-blue-600">127</h2>
                    <p className="text-gray-600 text-center">Artículos</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <h2 className="text-2xl font-bold text-center text-blue-600">1.4k</h2>
                    <p className="text-gray-600 text-center">Comentarios</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <h2 className="text-2xl font-bold text-center text-blue-600">45.2k</h2>
                    <p className="text-gray-600 text-center">Vistas</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <h2 className="text-2xl font-bold text-center text-blue-600">92%</h2>
                    <p className="text-gray-600 text-center">Satisfacción</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;