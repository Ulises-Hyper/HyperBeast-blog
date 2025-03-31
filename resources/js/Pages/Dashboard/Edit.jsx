import React from "react";
import { Form, Input, Button, Select, SelectItem, Avatar, Switch } from "@heroui/react";
import { User, Mail, Lock, Shield, X, Save } from "lucide-react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Inertia } from '@inertiajs/inertia';

export default function App() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: "admin",
        status: "active",
        avatar: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({ ...formData, avatar: URL.createObjectURL(file) });
        }
    };

    const handleCancel = () => {
        Inertia.visit(window.history.back());
    };

    return (
        <DashboardLayout>
            <div className="flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-6xl">
                    <h1 className="text-2xl font-bold mb-8 text-gray-800">Editar Usuario</h1>
                    <Form onSubmit={handleSubmit} className="items-end">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
                            {/* Columna Izquierda */}
                            <div className="space-y-6">
                                <Input
                                    label="Nombre"
                                    placeholder="Ingrese su nombre"
                                    value={formData.name}
                                    onValueChange={(value) => setFormData({ ...formData, name: value })}
                                    startContent={<User className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 6px 0 6px",
                                    }}
                                />

                                <Input
                                    type="email"
                                    label="Email"
                                    placeholder="correo@ejemplo.com"
                                    value={formData.email}
                                    onValueChange={(value) => setFormData({ ...formData, email: value })}
                                    startContent={<Mail className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 6px 0 6px",
                                    }}
                                />

                                <Input
                                    label="Nombre de usuario"
                                    placeholder="Ingrese su usuario"
                                    value={formData.username}
                                    onValueChange={(value) => setFormData({ ...formData, username: value })}
                                    startContent={<User className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 6px 0 6px",
                                    }}
                                />
                                {/* Sección Avatar */}
                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <div className="flex flex-col md:flex-row items-center gap-8">
                                        <Avatar
                                            src={formData.avatar || "https://i.pravatar.cc/150"}
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
                                                    {formData.avatar
                                                        ? "Archivo seleccionado"
                                                        : "Ningún archivo seleccionado"}
                                                </span>
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
                                    value={formData.password}
                                    onValueChange={(value) => setFormData({ ...formData, password: value })}
                                    startContent={<Lock className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 6px 0 6px",
                                    }}
                                />

                                <Input
                                    type="password"
                                    label="Confirmar Contraseña"
                                    placeholder="••••••••"
                                    value={formData.confirmPassword}
                                    onValueChange={(value) => setFormData({ ...formData, confirmPassword: value })}
                                    startContent={<Lock className="text-gray-400 w-5 h-5" />}
                                    style={{
                                        outline: "none",
                                        boxShadow: "none",
                                        border: "none",
                                        padding: "0 6px 0 6px",
                                    }}
                                />

                                <Select
                                    label="Rol"
                                    placeholder="Seleccione un rol"
                                    selectedKeys={[formData.role]}
                                    onSelectionChange={(keys) => setFormData({ ...formData, role: Array.from(keys)[0] })}
                                    startContent={<Shield className="text-gray-400 w-5 h-5" />}
                                >
                                    <SelectItem key="administrator">Administrador</SelectItem>
                                    <SelectItem key="reader">Lector</SelectItem>
                                    <SelectItem key="creator">Creador</SelectItem>
                                </Select>

                                <div className="flex items-center gap-2">
                                    <Switch
                                        isSelected={formData.status === "active"}
                                        onValueChange={(isActive) => 
                                            setFormData ({
                                                ...formData,
                                                status: isActive ? "active" : "inactive"
                                            })
                                        }
                                        size="sm"
                                        color="primary"
                                    />
                                    <span className="text-sm">Estado: {formData.status === "active" ? "Activo" : "Inactivo"}</span>
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
                                onPress={handleCancel}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                color="primary"
                                className="px-8 py-3"
                                startContent={<Save className="w-5 h-5" />}
                            >
                                Guardar Cambios
                            </Button>
                        </div>

                    </Form>
                </div>
            </div>
        </DashboardLayout>
    );
}