import { Link, useForm, Head } from '@inertiajs/react';
import { Github, Lock, Mail, User } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';


function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    })
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Title Tab */}
      <Head title="Register"/>
      
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {/* Botón de Volver Atrás */}
        <Link
          href="/"
          className="mb-4 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-bold"
        >
          ← Volver atrás
        </Link>
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">Crea una cuenta</h2>
          <p className="text-gray-600">
            Regístrate para comenzar a explorar el contenido
          </p>
        </div>

        {/* Social Register */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <button
            className="flex items-center justify-center gap-2 rounded-md border border-gray-300 p-2 transition-colors hover:bg-gray-50"
            onClick={() => { }}
          >
            <FcGoogle className="h-5 w-5" />
            <span>Google</span>
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-md border border-gray-300 p-2 transition-colors hover:bg-gray-50"
            onClick={() => { }}
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </button>
        </div>

        {/* Separator */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              O regístrate con
            </span>
          </div>
        </div>

        {/* Register Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre de usuario"
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoComplete="name"
                value={data.name}
                onChange={(e) =>
                  setData('name', e.target.value)
                }
                required
              />

              <InputError message={errors.name} className="mt-2" />
            </div>
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.email}
                onChange={(e) =>
                  setData('email', e.target.value)
                }
                required
              />

              <InputError message={errors.email} className="mt-2" />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Contraseña"
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                required
              />

              <InputError message={errors.password} className="mt-2" />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                placeholder="Confirmar contraseña"
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={data.password_confirmation}
                onChange={(e) =>
                  setData('password_confirmation', e.target.value)
                }
              />

              <InputError message={errors.password_confirmation} className='mt-2' />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-600">
            <Link href={route('login')}
              className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Ya registrado?
            </Link>
          </p>
          <PrimaryButton className="ms-4" disabled={processing}>
            Register
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
}

export default Register;
