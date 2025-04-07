import React from "react";
import { useForm } from "@inertiajs/react";
import { Input, Button, Link, Card, CardBody, Checkbox, Divider } from "@heroui/react";
import { Lock, ArrowLeft, Mail } from "lucide-react";
import { Icon } from "@iconify/react";

export default function Login() {
    const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    const handleInputChange = (field, value) => {
        setData(field, value);
        if (Object.keys(errors).length > 0) {
            clearErrors();
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-content2 p-4">
            <Card className="w-full max-w-md">
                <CardBody className="gap-6">
                    <Link
                        href="/"
                        color="foreground"
                        className="inline-flex items-center gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver atrás
                    </Link>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">
                            Bienvenido de nuevo
                        </h2>
                        <p className="text-default-500">
                            Inicia sesión en tu cuenta para continuar
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            variant="bordered"
                            startContent={<Icon icon="logos:google-icon" className="h-5 w-5" />}
                            className="w-full"
                        >
                            Google
                        </Button>
                        <Button
                            variant="bordered"
                            startContent={<Icon icon="logos:github-icon" className="h-5 w-5" />}
                            className="w-full"
                        >
                            GitHub
                        </Button>
                    </div>

                    <div className="flex items-center gap-4">
                        <Divider className="flex-1" />
                        <span className="text-default-500 text-sm">O continúa con</span>
                        <Divider className="flex-1" />
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            label="Correo electrónico"
                            placeholder="correo@ejemplo.com"
                            value={data.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email}
                            startContent={
                                <Mail className="text-default-400 h-5 w-5" />
                            }
                            style={{
                                outline: "none",
                                boxShadow: "none",
                                border: "none",
                                padding: "0 12px 0 12px",
                            }}
                        />

                        <Input
                            type="password"
                            label="Contraseña"
                            placeholder="••••••••"
                            value={data.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password}
                            startContent={
                                <Lock className="text-default-400 h-5 w-5" />
                            }
                            style={{
                                outline: "none",
                                boxShadow: "none",
                                border: "none",
                                padding: "0 12px 0 12px",
                            }}
                        />

                        <div className="flex items-center justify-between">
                            <Checkbox 
                                isSelected={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            >
                                Recordarme
                            </Checkbox>
                            <Link href="/password/reset" color="primary" size="sm">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            color="primary"
                            className="w-full"
                            isLoading={processing}
                            isDisabled={processing}
                        >
                            Iniciar sesión
                        </Button>
                    </form>

                    <div className="text-center text-sm text-default-500">
                        ¿No tienes una cuenta?{' '}
                        <Link href="/register" color="primary">
                            Regístrate
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}