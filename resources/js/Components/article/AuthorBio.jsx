import React from "react";
import {
    Eye,
    Heart,
    MessageSquareText,
    Calendar,
    Medal,
    User
} from "lucide-react";
import { Divider } from "@heroui/react";

export default function AuthorBio({ username, name, avatar }) {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <div className="max-w-4xl mx-auto p-8 border rounded-lg">
                {/* Perfil */}
                <div className="flex items-start gap-8 mb-8 pt-4">
                    <div className="relative">
                        <img
                            src={avatar}
                            alt={name}
                            className="rounded-2xl h-28 w-28 object-cover shadow-xl"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1">
                            {name}
                        </h3>
                        <p className="text-base text-slate-500 mb-4 font-medium">@{username}</p>
                        <p className="text-slate-700 leading-relaxed text-lg font-light">
                            Especialista en seguridad de la información con más de 8 años de experiencia en pentesting, análisis de
                            vulnerabilidades y arquitectura de seguridad empresarial.
                        </p>
                        <div className="flex items-center gap-6 mt-5 text-sm text-slate-600">
                            <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-full border border-slate-200/50">
                                <Calendar size={16} className="text-blue-600" />
                                <span className="font-medium">Miembro desde 2020</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-2 rounded-full border border-amber-200/50">
                                <Medal size={16} className="text-amber-600" />
                                <span className="font-medium text-amber-700">Top Creator</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider className="bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Estadísticas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-center">
                    <div className="group hover:bg-white/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-transparent hover:border-slate-200/50">
                        <div className="flex items-center justify-center gap-3 text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                            <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                                <Eye size={24} className="group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-2xl text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                                    12.5k
                                </span>
                                <span className="text-sm font-medium text-slate-600">Visualizaciones</span>
                            </div>
                        </div>
                    </div>

                    <div className="group hover:bg-white/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-transparent hover:border-slate-200/50">
                        <div className="flex items-center justify-center gap-3 text-slate-600 group-hover:text-red-500 transition-colors duration-300">
                            <div className="p-3 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
                                <Heart size={24} className="group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-2xl text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                                    2.5k
                                </span>
                                <span className="text-sm font-medium text-slate-600">Me gustas</span>
                            </div>
                        </div>
                    </div>

                    <div className="group hover:bg-white/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-transparent hover:border-slate-200/50">
                        <div className="flex items-center justify-center gap-3 text-slate-600 group-hover:text-purple-600 transition-colors duration-300">
                            <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
                                <MessageSquareText size={24} className="group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-2xl text-slate-900 group-hover:text-purple-700 transition-colors duration-300">
                                    224
                                </span>
                                <span className="text-sm font-medium text-slate-600">Comentarios</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
