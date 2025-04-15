import React, { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import { Input, Button, Select, SelectItem, Avatar, Switch, addToast } from "@heroui/react";
import { User, Mail, Lock, Shield, X, Save } from "lucide-react";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Edit() {
    const { user: initialUser, errors: serverErrors } = usePage().props;
    const [userData, setUserData] = useState(initialUser);
    const [avatarFile, setAvatarFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Actualizar los datos cuando initialUser cambie
    useEffect(() => {
        setUserData(initialUser);
    }, [initialUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('username', userData.username);
        formData.append('role', userData.role || '');
        formData.append('status', userData.status);

        if (userData.password) {
            formData.append('password', userData.password);
            formData.append('password_confirmation', userData.password_confirmation);
        }

        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }

        try {
            await router.post(`/dashboard/users/${userData.id}`, formData, {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    addToast({
                        title: "Usuario actualizado correctamente",
                        description: "El usuario ha sido actualizado exitosamente",
                        color: "success",
                    });
                    // Limpiar campos de contraseña después de éxito
                    setUserData(prev => ({ ...prev, password: '', password_confirmation: '' }));
                },
                onError: (errors) => {
                    setErrors(errors);
                    addToast({
                        title: "Usuario no actualizado",
                        description: "Hubo un error al actualizar el usuario",
                        color: "danger",
                    });
                },
                onFinish: () => setIsSubmitting(false)
            });
        } catch (error) {
            toast.error('Error en la solicitud');
            console.error('Error:', error);
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatarFile(file);
        }
    };

    const handleInputChange = (field, value) => {
        setUserData(prev => ({ ...prev, [field]: value }));
    };

    const avatarPreview = () => {
        if (avatarFile) {
            return URL.createObjectURL(avatarFile);
        }
        return userData.avatar || "https://i.pravatar.cc/150";
    };

    return (
        <DashboardLayout>
            <div className="flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-6xl">
                    <h1 className="text-2xl font-bold mb-8 text-gray-800">Editar Usuario</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                            {/* Columna Izquierda */}
                            <div className="space-y-6">
                                <Input
                                    label="Nombre"
                                    placeholder="Ingrese su nombre"
                                    value={userData.name}
                                    onValueChange={(value) => handleInputChange('name', value)}
                                    errorMessage={errors.name}
                                    startContent={<User className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 12px",
                                    }}
                                />

                                <Input
                                    type="email"
                                    label="Email"
                                    placeholder="correo@ejemplo.com"
                                    value={userData.email}
                                    onValueChange={(value) => handleInputChange('email', value)}
                                    errorMessage={errors.email}
                                    startContent={<Mail className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 12px",
                                    }}
                                />

                                <Input
                                    label="Nombre de usuario"
                                    placeholder="Ingrese su usuario"
                                    value={userData.username}
                                    onValueChange={(value) => handleInputChange('username', value)}
                                    errorMessage={errors.username}
                                    startContent={<User className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 12px",
                                    }}
                                />

                                {/* Sección Avatar */}
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <Avatar
                                            src={avatarPreview()}
                                            className="w-32 h-32"
                                            radius="lg"
                                        />
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Avatar
                                            </label>
                                            <div className="flex flex-col gap-4">
                                                <label className="cursor-pointer">
                                                    <span className="sr-only">Seleccionar archivo</span>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleFileChange}
                                                        className="hidden"
                                                    />
                                                    <Button
                                                        as="span"
                                                        variant="flat"
                                                        color="default"
                                                        startContent={<span>📁</span>}
                                                    >
                                                        Seleccionar archivo
                                                    </Button>
                                                </label>
                                                <span className="text-sm text-gray-500">
                                                    {avatarFile
                                                        ? avatarFile.name
                                                        : "Ningún archivo seleccionado"}
                                                </span>
                                                {errors.avatar && (
                                                    <p className="text-red-500 text-sm">{errors.avatar}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha */}
                            <div className="space-y-6">
                                <Input
                                    type="password"
                                    label="Contraseña"
                                    placeholder="••••••••"
                                    value={userData.password || ''}
                                    onValueChange={(value) => handleInputChange('password', value)}
                                    errorMessage={errors.password}
                                    startContent={<Lock className="text-gray-400 w-5 h-5" />}
                                    description="Dejar en blanco para mantener la contraseña actual"
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 12px",
                                    }}
                                />

                                <Input
                                    type="password"
                                    label="Confirmar Contraseña"
                                    placeholder="••••••••"
                                    value={userData.password_confirmation || ''}
                                    onValueChange={(value) => handleInputChange('password_confirmation', value)}
                                    errorMessage={errors.password_confirmation}
                                    startContent={<Lock className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 12px 0 12px",
                                    }}
                                />

                                <Select
                                    label="Rol"
                                    placeholder="Seleccione un rol"
                                    selectedKeys={userData.role ? [userData.role] : []}
                                    onSelectionChange={(keys) =>
                                        handleInputChange('role', Array.from(keys)[0])
                                    }
                                    errorMessage={errors.role}
                                    startContent={<Shield className="text-gray-400 w-5 h-5" />}
                                >
                                    <SelectItem key="administrator">Administrador</SelectItem>
                                    <SelectItem key="reader">Lector</SelectItem>
                                    <SelectItem key="creator">Creador</SelectItem>
                                </Select>

                                <div className="flex items-center gap-2">
                                    <Switch
                                        isSelected={userData.status === "active"}
                                        onValueChange={(isActive) =>
                                            handleInputChange('status', isActive ? "active" : "inactive")
                                        }
                                        size="sm"
                                        color="primary"
                                    />
                                    <span className="text-sm">
                                        Estado: {userData.status === "active" ? "Activo" : "Inactivo"}
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