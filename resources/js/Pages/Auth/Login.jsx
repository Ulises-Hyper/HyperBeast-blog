import { Link, useForm } from '@inertiajs/react';
import { Lock, Mail } from 'lucide-react';

function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <Link
                    href="/"
                    className="mb-4 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-bold"
                >
                    ← Volver atrás
                </Link>

                <div className="mb-8 text-center">
                    <h2 className="mb-2 text-2xl font-bold">
                        Bienvenido de nuevo
                    </h2>
                    <p className="text-gray-600">
                        Inicia sesión en tu cuenta para continuar
                    </p>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-4">
                    {/* Botones de inicio de sesión con Google y GitHub */}
                </div>

                <div className="relative my-6">{/* Separador */}</div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                placeholder="correo@ejemplo.com"
                                aria-label="Correo electrónico"
                                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                        </div>
                        {errors.email && (
                            <div className="mt-2 text-red-500">
                                {errors.email[0]}
                            </div>
                        )}
                    </div>

                    <div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                aria-label="Contraseña"
                                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                            />
                        </div>
                        {errors.password && (
                            <div className="mt-2 text-red-500">
                                {errors.password[0]}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 block text-sm text-gray-600"
                            >
                                Recordarme
                            </label>
                        </div>
                        <Link
                            href="/password/reset"
                            className="text-sm text-blue-500 hover:text-blue-600"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        disabled={processing}
                    >
                        Iniciar sesión
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    ¿No tienes una cuenta?{' '}
                    <Link
                        href="/register"
                        className="font-medium text-blue-500 hover:text-blue-600"
                    >
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
