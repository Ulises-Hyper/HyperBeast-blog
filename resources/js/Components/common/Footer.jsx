import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 grid-rows-1 gap-8">
          <div>
            <h3 className="text-2xl mb-4">HyperBeast</h3>
            <p className="space-y-2 text-gray-400">Tu fuente confiable de información sobre ciberseguridad</p>
          </div>
          <div>
            <h4 className="text-xl mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Inicio</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">CTF</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Reviews</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contacto</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Sobre mi</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Seguridad Web</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Hacking Ético</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Privacidad</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Malware</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl mb-4">Síguenos</h4>
            <div className="flex space-x-4 hover:text-white">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 HyperBeast. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
