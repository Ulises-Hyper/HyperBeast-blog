import React from "react";
import {
    Calendar,
    Link,
    BadgeCheck
} from 'lucide-react';
import { usePage } from "@inertiajs/react";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

export default function ProfileHeader() {

    const user = usePage().props.auth.user;

    return (
        <div className="bg-gray-800 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center p-4 m-2">
                    <div className="relative">
                        <img
                            className="rounded-full w-32 h-32 object-cover"
                            src={user.avatar}
                            alt="Foto de Perfil"
                        />
                    </div>

                    <div className="flex-1 flex justify-between items-start ml-6">
                        <div className="space-y-4">
                            <div className="space-y-2 flex gap-2">
                                <h1 className="text-2xl font-semibold text-white">{user.name}</h1>
                                <BadgeCheck size={18} className="text-blue-500"/>
                            </div>
                            <span className="text-gray-200 text-lg">@{user.username}</span>
                            <div className="flex gap-4 text-white">
                                <div className="flex items-center gap-1">
                                    <Calendar size={16} />
                                    <span className="text-gray-200">Miembro desde {dayjs(user.created_at).format('D [de] MMMM YYYY')} </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Link size={16} />
                                    <a href="https://hyperbeast.es" target="_blank" className="text-gray-200 hover:text-white">hyperbeast.es</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-6">
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-center text-blue-600">127</h2>
                        <p className="text-center">Artículos</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-center text-blue-600">125k</h2>
                        <p className="text-center">Visualizaciones</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-center text-blue-600">3.2k</h2>
                        <p className="text-center">Likes</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-center text-blue-600">452</h2>
                        <p className="text-center">Comentarios</p>
                    </div>
                </div>
            </div>
        </div>
    );
}