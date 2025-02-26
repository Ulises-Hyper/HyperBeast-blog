import React, { useState } from "react";
import { Upload, Tag, ImagePlus, X, Plus } from "lucide-react";
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';

export default function CreatePost() {
  // Inicializamos el parser de markdown
  const mdParser = new MarkdownIt();

  // Estado para el formulario
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("draft");
  const [coverImage, setCoverImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [images, setImages] = useState([]);

  // Categorías de ejemplo
  const categories = [
    "Ciberseguridad",
    "Desarrollo Web",
    "Inteligencia Artificial",
    "Cloud Computing",
    "DevOps",
  ];

  // Manejadores de eventos
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      url: URL.createObjectURL(file)
    }));
    setImages([...images, ...newImages]);
  };

  const handleRemoveImage = (id) => {
    setImages(images.filter(img => img.id !== id));
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleEditorChange = ({ html, text }) => {
    setContent(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      content,
      category,
      status,
      coverImage,
      tags,
      images
    });
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-6xl shadow-2xl mt-20 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Crear Nueva Entrada</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Título */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Introduce el título de la entrada"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            required
          />
        </div>

        {/* Imagen de portada */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Imagen de Portada
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 bg-white">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {coverImage ? (
                <div className="relative w-full h-48">
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    onClick={() => setCoverImage(null)}
                    className="absolute top-2 right-2 p-2 font-semibold bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <Upload className="h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">
                    Arrastra una imagen o haz clic para seleccionar
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Categoría y Estado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Categoría
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="draft">Borrador</option>
              <option value="published">Publicado</option>
              <option value="archived">Archivado</option>
            </select>
          </div>
        </div>

        {/* Etiquetas */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Etiquetas
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-blue-500 hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Nueva etiqueta"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
            >
              <Plus size={16} className="mr-2" />
              Añadir
            </button>
          </div>
        </div>

        {/* Editor de Markdown */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Contenido
          </label>
          <div className="bg-white rounded-md border border-gray-300">
            <MdEditor
              style={{ height: '400px' }}
              renderHTML={text => mdParser.render(text)}
              onChange={handleEditorChange}
              value={content}
              className="bg-white"
            />
          </div>
        </div>

        {/* Subida de imágenes adicionales */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Imágenes Adicionales
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center py-8">
                <ImagePlus className="h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Sube imágenes adicionales para tu entrada
                </p>
              </div>
            </div>
            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.url}
                      alt="Preview"
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <button
                      onClick={() => handleRemoveImage(image.id)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Publicar Entrada
          </button>
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors bg-white"
          >
            Guardar Borrador
          </button>
        </div>
      </form>
    </div>
  );
}