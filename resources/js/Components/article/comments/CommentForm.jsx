import React from "react";

function CommentForm () {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="border-t border-gray-200">
                    <h1 className="text-2xl font-bold mt-6">Comentarios (42)</h1>
                </div>
                <div className="p-4 rounded-md bg-white mt-4">
                    <form action="/" method="POST">
                        <label className="font-semibold text-gray-700">Comentario</label>
                        <textarea className="w-full h-[150px] rounded-md border-gray-200 p-4 mt-1 mb-2" placeholder="Escribe aquí tu comentario...">
                        </textarea>
                        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Publicar comentario
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommentForm;