import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

const faqData = [
  {
    question: "¿Qué es la ciberseguridad?",
    answer: "La ciberseguridad es la práctica de proteger sistemas, redes y programas de ataques digitales. Incluye medidas para prevenir, detectar y responder a amenazas cibernéticas."
  },
  {
    question: "¿Por qué es importante la ciberseguridad?",
    answer: "La ciberseguridad es crucial porque protege nuestros datos personales, financieros y empresariales de robos y daños. En un mundo cada vez más digitalizado, garantiza la integridad y confidencialidad de la información."
  },
  {
    question: "¿Cómo puedo proteger mi identidad digital?",
    answer: "Algunas formas de proteger tu identidad digital incluyen: usar contraseñas fuertes y únicas, activar la autenticación de dos factores, ser cauteloso con los enlaces y archivos adjuntos en correos electrónicos, y mantener tus dispositivos y software actualizados."
  },
  {
    question: "¿Qué es el hacking ético?",
    answer: "El hacking ético es la práctica autorizada de probar la seguridad de un sistema informático. Los hackers éticos utilizan las mismas herramientas y técnicas que los hackers maliciosos, pero con el permiso del propietario del sistema para identificar vulnerabilidades y mejorar la seguridad."
  },
  {
    question: "¿Cómo puedo mejorar mi privacidad en línea?",
    answer: "Para mejorar tu privacidad en línea, considera usar una VPN, ajustar la configuración de privacidad en tus redes sociales, utilizar navegación privada, evitar compartir información personal innecesaria y usar software de seguridad actualizado."
  }
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <div className="flex flex-col pt-20 bg-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Título de la sección FAQ */}
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-2">FAQ</h1>
          <span className="text-blue-400 font-bold mb-2">
            Solucionando preguntas frecuentes
          </span>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Contenido FAQ */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-20">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-black rounded-lg" // Borde más grueso y de color negro
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-black">{item.question}</span>
                  {openItem === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-black" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-black" />
                  )}
                </button>
                {openItem === index && (
                  <div className="p-4 pt-0 text-black">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
