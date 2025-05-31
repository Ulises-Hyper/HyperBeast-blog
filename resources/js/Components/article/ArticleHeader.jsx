import React from "react";
import { Dot } from "lucide-react";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

export default function ArticleHeader({ title, publishedAt, username, avatar}){
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <header className="max-w-4xl mx-auto text-center">
                <div className="mb-4">
                    <span className="text-blue-500 font-bold mr-2">Seguridad</span>
                    <span className="text-blue-500 font-bold">4 min de lectura</span>
                </div>
                <h1 className="text-5xl mb-4 font-bold">{title}</h1>
                <div className="flex items-center justify-center space-x-2 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                        <img className="rounded-full h-10 w-10 object-cover" alt={username} src={avatar}/>
                        <span>Por <a href="#" className="text-blue-500">{username}</a></span>
                        <Dot size={30}/>
                    </div>
                    <span>{dayjs(publishedAt).format('D [de] MMMM YYYY')}</span>
                </div>
            </header>
        </div>
    )
}