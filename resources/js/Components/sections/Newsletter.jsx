import React, { useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { addToast } from "@heroui/react";

function Newsletter() {
  const { data, setData, post, errors } = useForm({
    email: '',
  });

  // Obtenemos flash para el mensaje de éxito si viene
  const { flash } = usePage().props || {};


  useEffect(() => {
    if (errors.email) {
      addToast({
        title: "Ya estás suscrito",
        description: errors.email,
        color: "warning",
      });
    }
    if (flash) {
      addToast({
        title: "¡Suscripción exitosa!",
        description: flash.success,
        color: "success",
      });
    }
  }, [errors, flash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/newsletter");
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
        </div>
      </div>
    </section>
  );
}

export default Newsletter;