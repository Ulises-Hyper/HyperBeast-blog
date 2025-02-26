import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-teal-400 mb-4">Categorías</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">Hacking Ético</a></li>
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">Ciberseguridad</a></li>
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">Noticias</a></li>
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">Privacidad</a></li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-teal-400 mb-4">Etiquetas</h3>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="bg-cyan-500 text-black px-3 py-1 rounded hover:bg-pink-500 transition">#Hacking</a>
          <a href="#" className="bg-cyan-500 text-black px-3 py-1 rounded hover:bg-pink-500 transition">#Ciberseguridad</a>
          <a href="#" className="bg-cyan-500 text-black px-3 py-1 rounded hover:bg-pink-500 transition">#Anonimato</a>
          <a href="#" className="bg-cyan-500 text-black px-3 py-1 rounded hover:bg-pink-500 transition">#Redes</a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-teal-400 mb-4">Entradas Recientes</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">Cómo Protegerse del Phishing</a></li>
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">Guía de Introducción al Hacking Ético</a></li>
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">Los Mejores Cursos de Ciberseguridad</a></li>
          <li><a href="#" className="text-cyan-400 hover:text-pink-400 transition">¿Qué es la Criptografía?</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;