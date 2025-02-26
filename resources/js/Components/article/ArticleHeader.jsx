import React from "react";
import { Dot } from "lucide-react";

function ArticleHeader(){
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="max-w-4xl mx-auto text-center">
                <div className="mb-4">
                    <span className="text-blue-500 font-bold mr-2">Seguridad</span>
                    <span className="text-blue-500 font-bold">4 min de lectura</span>
                </div>
                <h1 className="text-5xl mb-4 font-bold">Cómo proteger tus contraseñas en línea</h1>
                <div className="flex items-center justify-center space-x-2 mb-4 text-gray-600">
                    <div className="flex items-center gap-2">
                        <img className="rounded-full" alt="user_img" src="https://picsum.photos/40/40"/>
                        <span>Por <a href="#" className="text-blue-500">Admin</a></span>
                        <Dot size={30}/>
                    </div>
                    <span>4 de enero de 2025</span>
                </div>
            </header>
        </div>
    )
}

export default ArticleHeader;