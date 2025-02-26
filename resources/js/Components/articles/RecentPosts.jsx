import React from "react";

function RecentPosts() {
  return (
    <main className="recent-posts bg-[#f3f4f6]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x250"
              alt="Privacidad"
              class="w-full h-48 object-cover"
            ></img>
            <div className="p-6">
              <span className="text-md font-semibold text-blue-700">
                Seguridad
              </span>
              <h2 className="text-xl font-bold mt-2 mb-2">
                Protege tu identidad digital
              </h2>
              <p class="text-gray-600 mb-4">
                Aprende las mejores prácticas para mantener tu identidad segura
                en línea.
              </p>
              <a className="hover:underline text-blue-600" href="#">
                Leer más →
              </a>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x250"
              alt="Privacidad"
              class="w-full h-48 object-cover"
            ></img>
            <div className="p-6">
              <span className="text-md font-semibold text-blue-700">
                HACKING ÉTICO
              </span>
              <h2 className="text-xl font-bold mt-2 mb-2">
                Introducción al Pentesting
              </h2>
              <p class="text-gray-600 mb-4">
                Descubre los fundamentos del testing de penetración y hacking
                ético.
              </p>
              <a className="hover:underline text-blue-600" href="#">
                Leer más →
              </a>
            </div>
          </article>
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x250"
              alt="Privacidad"
              class="w-full h-48 object-cover"
            ></img>
            <div className="p-6">
              <span className="text-md font-semibold text-blue-700">
                PRIVACIDAD
              </span>
              <h2 className="text-xl font-bold mt-2 mb-2">
                Guía de Privacidad en Línea
              </h2>
              <p class="text-gray-600 mb-4">
                Tips esenciales para proteger tu privacidad en internet.
              </p>
              <a className="hover:underline text-blue-600" href="#">
                Leer más →
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default RecentPosts;
