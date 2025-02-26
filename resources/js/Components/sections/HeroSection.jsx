import React from 'react';

function HeroSection(){
    return (
        <section>
            <div className=" bg-gray-800 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">Ciberseguridad para Todos</h1>
                    <p className="text-xl mb-8">Crea artículos y enseña a todos tus conocimientos</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">Comemienza ahora</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection