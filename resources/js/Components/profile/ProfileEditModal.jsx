import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Camera, Edit } from "lucide-react";

function EditProfileModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "María",
    lastName: "García Rodríguez",
    username: "mariagarcia",
    email: "maria.garcia@hyperbeast.com",
    certifications: "CISSP, CEH, OSCP",
    cves: "12",
    role: "Security Researcher",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <Edit size={16} />
        Editar Perfil
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                    Editar Perfil
                  </Dialog.Title>

                  <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          className="rounded-full w-32 h-32 object-cover"
                          src="/api/placeholder/128/128"
                          alt="Foto de Perfil"
                        />
                        <label className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-2 text-white cursor-pointer hover:bg-blue-600">
                          <Camera size={16} />
                          <input type="file" className="hidden" accept="image/*" />
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Apellidos
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Nombre de usuario
                      </label>
                      <div className="flex">
                        <span className="bg-gray-100 border border-r-0 border-gray-300 rounded-l-md px-3 flex items-center text-gray-500">
                          @
                        </span>
                        <input
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          className="w-full border-gray-300 rounded-r-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Correo electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Rol
                      </label>
                      <input
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">
                        Certificaciones
                      </label>
                      <input
                        id="certifications"
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleChange}
                        placeholder="Separadas por comas"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="cves" className="block text-sm font-medium text-gray-700">
                        Número de CVEs publicados
                      </label>
                      <input
                        id="cves"
                        name="cves"
                        type="number"
                        value={formData.cves}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default EditProfileModal;
