import React, { useState } from "react";
import {
    ThumbsUp,
    MessageCircle,
    Edit,
    Trash2,
} from "lucide-react";

function CommentItem() {
    const [likes, setLikes] = useState(5);  // Estado para manejar los likes
    const [isLiked, setIsLiked] = useState(false); // Estado para saber si el usuario ha dado like

    const handleLike = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    };

    const handleReply = () => {
        alert("Responder comentario");
    };

    const handleEdit = () => {
        alert("Editar comentario");
    };

    const handleDelete = () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este comentario?")) {
            alert("Comentario eliminado");
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex gap-4 p-4 rounded-lg bg-white transition-colors">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                        <img
                            className="aspect-square h-full w-full"
                            alt="Usuario Ejemplo"
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        />
                    </span>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-sm">Usuario Ejemplo</h4>
                            <span className="text-xs text-gray-500">Hace 5 minutos</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-700">
                            ¡Este es un comentario de ejemplo! Prueba a interactuar con los
                            botones.
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                            {/* Botón de like */}
                            <button
                                onClick={handleLike}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 flex items-center gap-1 text-gray-500 hover:text-blue-600"
                            >
                                <ThumbsUp size={16} />
                                <span className="text-xs">{likes}</span>
                            </button>
                            {/* Botón de responder */}
                            <button
                                onClick={handleReply}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 flex items-center gap-1 text-gray-500 hover:text-blue-600"
                            >
                                <MessageCircle size={16} />
                                <span className="text-xs">Responder</span>
                            </button>
                            {/* Botón de editar */}
                            <button
                                onClick={handleEdit}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 flex items-center gap-1 text-gray-500 hover:text-blue-600"
                            >
                                <Edit size={16} />
                                <span className="text-xs">Editar</span>
                            </button>
                            {/* Botón de eliminar */}
                            <button
                                onClick={handleDelete}
                                className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 flex items-center gap-1 text-gray-500 hover:text-red-600"
                            >
                                <Trash2 size={16} />
                                <span className="text-xs">Eliminar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentItem;