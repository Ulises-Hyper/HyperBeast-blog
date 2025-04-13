import DashboardLayout from "@/Layouts/DashboardLayout";
import { Avatar, Button, Input, Switch, addToast } from "@heroui/react";
import { router, usePage } from '@inertiajs/react';
import { FileImage, Save, Tag, X } from "lucide-react";
import { useEffect, useState } from 'react';

export default function EditCategory() {
    const { category: initialCategory, errors: serverErrors } = usePage().props;
    const [categoryData, setCategoryData] = useState(initialCategory);
    const [imgFile, setImgFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Actualizar los datos cuando initialCategory cambie
    useEffect(() => {
        setCategoryData(initialCategory);
    }, [initialCategory]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('name', categoryData.name);
        formData.append('slug', categoryData.slug);
        formData.append('description', categoryData.description || '');
        formData.append('status', categoryData.status);

        if (imgFile) {
            formData.append('image', imgFile);
        }

        try {
            await router.post(`/dashboard/categories/${categoryData.id}`, formData, {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    addToast({
                        title: "Categoría actualizada correctamente",
                        description: "La categoría ha sido actualizada exitosamente",
                        color: "success",
                    });
                },
                onError: (errors) => {
                    setErrors(errors);
                    addToast({
                        title: "Categoría no actualizada",
                        description: "Hubo un error al actualizar la categoría",
                        color: "danger",
                    });
                },
                onFinish: () => setIsSubmitting(false)
            });
        } catch (error) {
            addToast({
                title: "Error en la solicitud",
                description: "Hubo un error al procesar la solicitud",
                color: "danger",
            });
            console.error('Error:', error);
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgFile(file);
        }
    };

    const imagePreview = () => {
        if (imgFile) {
            return URL.createObjectURL(imgFile);
        }
        return categoryData.image || "https://via.placeholder.com/150";
    };

    return (
        <DashboardLayout>
            <div className="flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-6xl">
                    <h1 className="text-2xl font-bold mb-8 text-gray-800">Editar Categoría</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                            {/* Columna Izquierda */}
                            <div className="space-y-6">
                                <Input
                                    label="Nombre"
                                    placeholder="Ingrese el nombre de la categoría"
                                    value={categoryData.name}
                                    onValueChange={(value) => setCategoryData({ ...categoryData, name: value })}
                                    errorMessage={errors.name}
                                    startContent={<Tag className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 6px",
                                    }}
                                />

                                <Input
                                    label="Slug"
                                    placeholder="Ingrese el slug de la categoría"
                                    value={categoryData.slug}
                                    onValueChange={(value) => setCategoryData({ ...categoryData, slug: value })}
                                    errorMessage={errors.slug}
                                    startContent={<Tag className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 6px",
                                    }}
                                />

                                <Input
                                    label="Descripción"
                                    placeholder="Ingrese una descripción"
                                    value={categoryData.description}
                                    onValueChange={(value) => setCategoryData({ ...categoryData, description: value })}
                                    errorMessage={errors.description}
                                    startContent={<Tag className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 6px",
                                    }}
                                />
                            </div>

                            {/* Columna Derecha */}
                            <div className="space-y-6">
                                <div>
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <Avatar
                                            src={imagePreview()}
                                            className="w-32 h-32"
                                            radius="lg"
                                        />
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Imagen
                                            </label>
                                            <div className="flex flex-col gap-4">
                                                <label className="cursor-pointer">
                                                    <span className="sr-only">Seleccionar archivo</span>
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                    <Button
                                                        as="span"
                                                        variant="flat"
                                                        color="default"
                                                        startContent={<FileImage className="w-5 h-5" />}
                                                    >
                                                        Seleccionar archivo
                                                    </Button>
                                                </label>
                                                <span className="text-sm text-gray-500">
                                                    {imgFile
                                                        ? imgFile.name
                                                        : "Ningún archivo seleccionado"}
                                                </span>
                                                {errors.image && (
                                                    <p className="text-red-500 text-sm">{errors.image}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Switch
                                        isSelected={categoryData.status === "active"}
                                        onValueChange={(isActive) =>
                                            setCategoryData({ ...categoryData, status: isActive ? "active" : "inactive" })
                                        }
                                        size="sm"
                                        color="primary"
                                    />
                                    <span className="text-sm">
                                        Estado: {categoryData.status === "active" ? "Activo" : "Inactivo"}
                                    </span>
                                    {errors.status && (
                                        <p className="text-red-500 text-sm">{errors.status}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex gap-4 mt-8 justify-end">
                            <Button
                                variant="flat"
                                color="default"
                                className="px-8 py-3"
                                startContent={<X className="w-5 h-5" />}
                                onPress={() => window.history.back()}
                                disabled={isSubmitting}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                color="primary"
                                className="px-8 py-3"
                                startContent={<Save className="w-5 h-5" />}
                                isLoading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}