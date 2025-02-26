import React from "react";
import { Eye, Heart, MessageSquareText } from "lucide-react";

function AuthorBio() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex gap-4">
                    <img src="https://picsum.photos/100/100" alt="user_profile_img" className="rounded-full" />
                    <div className="mb-4">
                        <h3 className="font-bold text-xl">Admin</h3>
                        <span className="text-gray-500 mt-4">Experto en Ciberseguridad</span>
                        <p className="mt-2">Especialista en seguridad informática con más de 10 años de experiencia en el sector.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 text-gray-600 mt-6">
                    <div className="flex gap-2 items-center">
                        <Eye size={16} />
                        <span>1.5k views</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Heart size={16} />
                        <span>308 likes</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MessageSquareText size={16} />
                        <span>38 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorBio;