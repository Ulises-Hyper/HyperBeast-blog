import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Avatar, Button, Textarea } from "@heroui/react";
import { Link, useForm, usePage, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            username: user.username,
            email: user.email,
            description: user.description,
            avatar: user.avatar
        });

    const [avatarFile, setAvatarFile] = useState(null);
    const [userData, setUserData] = useState(user);

    useEffect(() => {
        setUserData(user);
    }, [user]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatarFile(file);
        }
    };

    const avatarPreview = () => {
        if (avatarFile) {
            return URL.createObjectURL(avatarFile);
        }
        return userData.avatar;
    };

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('_method', 'patch');
        formData.append('name', data.name);
        formData.append('username', data.username);
        formData.append('email', data.email);
        formData.append('description', data.description);
        
        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }

        router.post(route('profile.update'), formData, {
            forceFormData: true,
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Información Personal
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Actualiza tu información básica
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Avatar
                    </label>
                    <div className="flex items-center gap-6">
                        <Avatar
                            src={avatarPreview()}
                            className="w-28 h-28 rounded-xl shadow-lg ring-2 ring-gray-700"
                        />
                        <div className="flex flex-col gap-3">
                            <label className="cursor-pointer">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <Button
                                    as="span"
                                    variant="solid"
                                    startContent={<span role="img" aria-label="Seleccionar archivo">📁</span>}
                                >
                                    Cambiar avatar
                                </Button>
                            </label>
                            <span className="text-sm text-gray-400">
                                {avatarFile ? avatarFile.name : "Ningún archivo seleccionado"}
                            </span>
                            {errors.avatar && (
                                <p className="text-sm text-red-500">{errors.avatar}</p>
                            )}
                        </div>
                    </div>
                </div>


                <div>
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="username" value="Usuario" />

                    <TextInput
                        id="username"
                        name="username"
                        autoComplete="off"
                        className="mt-1 block w-full"
                        value={data.username}
                        onChange={(e) => setData('username', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.username} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="textarea" value="Descripción corta (160 carácteres)" />

                    <Textarea
                        name="description"
                        placeholder="Escriba aquí su descripción..."
                        rows={7}
                        aria-label="Descripción del usuario"
                        className="mt-1 bg-white"
                        style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                            padding: "0 12px 0 0",
                        }}
                        onChange={(e) => setData('description', e.target.value)}
                        value={data.description}
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
