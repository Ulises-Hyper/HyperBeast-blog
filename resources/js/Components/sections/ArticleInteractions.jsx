import React, { useState } from "react";
import { Heart, Bookmark, Star } from "lucide-react";

const ArticleInteractions = ({ initialLikes = 245, initialFavorites = 2, initialSaves = 1 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  
  const [saved, setSaved] = useState(initialSaves);
  const [isSaved, setIsSaved] = useState(false);
  
  const [favorites, setFavorite] = useState(initialFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    setSaved((prev) => (isSaved ? prev - 1 : prev + 1));
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    setFavorite((prev) => (isFavorite ? prev - 1 : prev + 1));
  }

  const baseButtonClass = "flex items-center gap-1.5 transition-colors";

  return (
    <div className="flex items-center justify-end gap-4">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`${baseButtonClass} ${
          isLiked ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-gray-600"
        }`}
      >
        <Heart
          size={18}
          className={`transition-colors ${isLiked ? "fill-current" : ""}`}
        />
        <span className="text-sm">{likes}</span>
      </button>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className={`${baseButtonClass} ${
          isSaved ? "text-blue-500 hover:text-blue-600" : "text-gray-500 hover:text-gray-600"
        }`}
      >
        <Bookmark
          size={18}
          className={`transition-colors ${isSaved ? "fill-current" : ""}`}
        />
        <span className="text-sm">{saved}</span>
      </button>

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        className={`${baseButtonClass} ${
          isFavorite ? "text-yellow-500 hover:text-yellow-600" : "text-gray-500 hover:text-gray-600"
        }`}
      >
        <Star
          size={18}
          className={`transition-colors ${isFavorite ? "fill-current" : ""}`}
        />
        <span className="text-sm">{favorites}</span>
      </button>
    </div>
  );
};

export default ArticleInteractions;
