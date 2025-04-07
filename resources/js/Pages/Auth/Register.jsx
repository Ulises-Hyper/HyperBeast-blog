import { Link, useForm, Head } from '@inertiajs/react';
import { Github, Lock, Mail, User, ArrowLeft } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { Input, Button, Card, CardBody, Divider } from "@heroui/react";

function Register() {
  const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInputChange = (field, value) => {
    setData(field, value);
    if (errors[field]) {
      clearErrors(field);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-content2 p-4">
      <Card className="w-full max-w-md">
        <CardBody className="gap-6">
          {/* Title Tab */}
          <Head title="Register" />

          {/* Back Button */}
          <Link
            href="/"
            color="foreground"
            className="inline-flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver atrás
          </Link>

          {/* Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Crea una cuenta</h2>
            <p className="text-default-500">
              Regístrate para comenzar a explorar el contenido
            </p>
          </div>

          {/* Social Register */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="bordered"
              startContent={<FcGoogle className="h-5 w-5" />}
              className="w-full"
              onClick={() => { }}
            >
              Google
            </Button>
            <Button
              variant="bordered"
              startContent={<Github className="h-5 w-5" />}
              className="w-full"
              onClick={() => { }}
            >
              GitHub
            </Button>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4">
            <Divider className="flex-1" />
            <span className="text-default-500 text-sm">O regístrate con</span>
            <Divider className="flex-1" />
          </div>

          {/* Register Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Nombre de usuario"
              placeholder="Usuario"
              value={data.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              isInvalid={!!errors.name}
              errorMessage={errors.name}
              startContent={<User className="text-default-400 h-5 w-5" />}
              style={{
                outline: "none",
                boxShadow: "none",
                border: "none",
                padding: "0 12px 0 12px",
            }}
              required
            />

            <Input
              type="email"
              label="Correo electrónico"
              placeholder="correo@ejemplo.com"
              value={data.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              isInvalid={!!errors.email}
              errorMessage={errors.email}
              startContent={<Mail className="text-default-400 h-5 w-5" />}
              style={{
                outline: "none",
                boxShadow: "none",
                border: "none",
                padding: "0 12px 0 12px",
            }}
              required
            />

            <Input
              type="password"
              label="Contraseña"
              placeholder="••••••••"
              value={data.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              isInvalid={!!errors.password}
              errorMessage={errors.password}
              startContent={<Lock className="text-default-400 h-5 w-5" />}
              style={{
                outline: "none",
                boxShadow: "none",
                border: "none",
                padding: "0 12px 0 12px",
            }}
              required
            />

            <Input
              type="password"
              label="Confirmar contraseña"
              placeholder="••••••••"
              value={data.password_confirmation}
              onChange={(e) => handleInputChange('password_confirmation', e.target.value)}
              isInvalid={!!errors.password_confirmation}
              errorMessage={errors.password_confirmation}
              startContent={<Lock className="text-default-400 h-5 w-5" />}
              style={{
                outline: "none",
                boxShadow: "none",
                border: "none",
                padding: "0 12px 0 12px",
            }}
              required
            />

            <div className="flex items-center justify-center gap-2">
              <Link
                href={route('login')}
                color="primary"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                ¿Ya tienes una cuenta?
              </Link>
            </div>
  
            <div className="flex items-center">
              <Button
                type="submit"
                color="primary"
                isLoading={processing}
                isDisabled={processing}
                className="w-full"
              >
                Registrarse
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Register;