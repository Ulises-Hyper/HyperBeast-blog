import { useState } from "react";
import { Heart, CornerUpLeft, SquarePen, Trash2 } from "lucide-react";

const Comentario = () => {
  const [likes, setLikes] = useState(34); // Estado para el contador de likes
  const [isLiked, setIsLiked] = useState(false); // Estado para saber si se hizo like
  
  const [favorites, setFavorite] = useState(2);
  const [isfavorite, setIsFavorite] = useState(false);

  // Función para manejar el click en el like
  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked); // Cambia el estado de "like"
  };

  const handleFavorite = () => {
    setFavorite(isfavorite ? favorites - 1 : favorites + 1);
    setIsFavorite(!isfavorite); // Cambia el estado de "favorite"
  }

  return (
    <div className="border border-gray-200 container mx-auto rounded-md mt-4 px-4 py-4">
      <div className="flex items-center">
        <img
          src="https://placeholder.co/40x40"
          alt="user img"
          className="rounded-full"
        />
        <div className="flex flex-col mx-4">
          <span className="font-bold">Ana García</span>
          <span className="text-sm">Hace 2 horas</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">Este es un comentario de ejemplo</p>
      </div>
      <div className="flex items-center mt-2 gap-2">
        {/* Botón de Like */}
        <button
          variant="outline"
          size="md"
          onClick={handleLike}
          className="flex items-center hover:bg-gray-100 p-2 rounded-md"
        >
          <Heart
            className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-500"}`}
          />
          {likes} {/* Contador de likes */}
        </button>
        {/* Botón de responder */}
        <button className="text-gray-800 flex items-center gap-1 hover:bg-gray-100 p-2 rounded-md">
          <CornerUpLeft size={16} />
          Responder
        </button>
        {/* Botón de editar */}
        <button className="text-gray-800 flex items-center gap-1 hover:bg-gray-100 p-2 rounded-md">
          <SquarePen size={16}/>
          Editar
        </button>
        {/* Botón de eliminar */}
        <button className="text-gray-800 flex items-center gap-1 hover:bg-gray-100 p-2 rounded-md">
          <Trash2 size={16}/>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Comentario;