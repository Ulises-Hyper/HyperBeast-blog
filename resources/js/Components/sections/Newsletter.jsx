import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

function Newsletter() {
  const { data, setData, post, errors } = useForm({
    email: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/newsletter", {
      onSuccess: () => {
        setSuccessMessage('¡Correo añadido correctamente!'); // Mensaje de éxito
        setData('email', ''); // Limpiar el campo después del éxito
      }
    });
  }

  return (
    <section className="newsletter bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl mb-4 font-bold">Mantente Informado</h2>
        <p className="mb-8">
          Suscríbete a nuestro newsletter para recibir las últimas noticias y
          consejos de seguridad
        </p>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              value={data.email}
              onChange={(e) => {
                setData('email', e.target.value);
                setSuccessMessage(''); // Limpiar mensaje al escribir
              }}
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              required 
            />
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-800 px-8 py-3 rounded-lg font-bold"
            >
              Suscribirse
            </button>
          </form>
          {/* Mensaje de error */}
          {errors.email && <p className="text-red-500 mt-4">{errors.email}</p>}
          
          {/* Mensaje de éxito */}
          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Newsletter;