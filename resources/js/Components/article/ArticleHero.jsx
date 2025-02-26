import React from "react";

function ArticleHero() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <figure>
                    <img 
                        className="rounded-xl shadow-lg" 
                        alt="Vista previa de artículo sobre seguridad de contraseñas" 
                        src="https://picsum.photos/1200/600" 
                    />
                    <figcaption className="text-sm text-gray-600 mt-2">
                        La seguridad de las contraseñas es fundamental en la era digital
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ArticleHero;