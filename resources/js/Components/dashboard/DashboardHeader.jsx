import React, { useState } from "react";
import { Bell, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import { router } from "@inertiajs/react";
import "../common/SearchBar";
import SearchBar from "../common/SearchBar";

function DashboardHeader({ user }) {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
        setIsUserMenuOpen(false);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        setIsNotificationsOpen(false);
    };

    return (
        <header className="dark:bg-gray-800 mb-4 border-b border-gray-200 dark:border-gray-700 h-16">
            <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
                {/* Search Bar */}
                <div className="flex-1 max-w-2xl">
                    <SearchBar />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 ml-6">
                    {/* Notifications */}
                    {/* Notifications */}
                    <div className="relative">
                        <button
                            onClick={toggleNotifications}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
                            aria-label="Notificaciones"
                            aria-expanded={isNotificationsOpen}
                        >
                            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            <span className="absolute top-0.5 right-0.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-medium text-white bg-red-500 rounded-full">
                                3
                            </span>
                        </button>

                        {/* Dropdown de notificaciones */}
                        {isNotificationsOpen && (
                            <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600">
                                <div className="p-2">
                                    <h3 className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white">
                                        Notificaciones
                                    </h3>
                                    <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                                        {[1, 2, 3].map((item) => (
                                            <li key={item}>
                                                <button
                                                    className="w-full flex items-center px-3 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                                                >
                                                    <div className="flex-1 min-w-0 text-left">
                                                        <p className="truncate">Nueva actualización disponible</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                            Hace 2 horas
                                                        </p>
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Menu */}
                    <div className="relative">
                        <button
                            onClick={toggleUserMenu}
                            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1 pr-2 transition-colors"
                            aria-label="Menú de usuario"
                        >
                            {/* Avatar del usuario */}
                            <img
                                className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-600"
                                src={user?.avatar || "https://picsum.photos/80"}
                                alt="Avatar"
                            />
                            <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </button>

                        {/* Dropdown */}
                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600">
                                <div className="p-2">
                                    <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                            {user.email}
                                        </p>
                                    </div>
                                    <ul className="py-1">
                                        <li>
                                            <a
                                                href="/profile"
                                                className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                                            >
                                                <User className="w-4 h-4 mr-2" />
                                                Perfil
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/dashboard"
                                                className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                                            >
                                                <LayoutDashboard className="w-4 h-4 mr-2" />
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => router.post(route('logout'))}
                                                className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors w-full"
                                            >
                                                <LogOut className="w-4 h-4 mr-2" />
                                                Cerrar sesión
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
