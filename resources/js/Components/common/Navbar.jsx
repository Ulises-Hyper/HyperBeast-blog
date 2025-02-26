import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from "lucide-react";
import { usePage } from "@inertiajs/react";
import { router } from '@inertiajs/react'

export const HyperLogo = () => {
  return (
    <img
      className="h-14 w-auto transition-opacity"
      src="images/logos/white_logo_transparent_background.png"
      alt="Hyper Logo"
    />
  );
};

function NavbarMenu() {
  const { auth } = usePage().props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "CTF", href: "/ctf" },
    { label: "Reviews", href: "#" },
    { label: "Feedback", href: "/feedback" },
    { label: "Sobre mi", href: "/about" },
  ];

  return (
    <>
      <Navbar disableAnimation maxWidth="2xl" className="bg-gray-900 relative h-20 items-center">
        {/* Desktop Layout */}
        <NavbarContent className="hidden sm:flex" justify="start">
          <HyperLogo />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.label}>
              <Link className="text-white hover:text-blue-300 transition-colors" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="end">
          {auth.user ? (
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex items-center gap-2 dark:hover:bg-gray-700 rounded-full p-1 pr-2 transition-colors"
                aria-label="Menú de usuario"
                aria-expanded={isUserMenuOpen}
              >
                <img
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-600"
                  src="https://picsum.photos/80"
                  alt="Admin Hyper"
                />
                <ChevronDown className="w-4 h-4 text-gray-300" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600">
                  <div className="p-2">
                    <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        Admin Hyper
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        admin@hyperbeast.es
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
          ) : (
            <NavbarContent as="div" justify="end" className="gap-4">
              <NavbarItem>
                <Link
                  href="/login"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-sm"
                >
                  Iniciar Sesión
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  href="/register"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors text-sm"
                >
                  Registrarse
                </Link>
              </NavbarItem>
            </NavbarContent>
          )}
        </NavbarContent>

        {/* Mobile Layout */}
        <NavbarContent className="sm:hidden" justify="start">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="center">
          <HyperLogo />
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          {auth.user && (
            <button
              onClick={toggleUserMenu}
              className="text-white focus:outline-none"
            >
              <img
                src="/img/525556c2c672b57db3138e12c1b5d44b.jpg"
                alt="Usuario"
                className="w-8 h-8 rounded-full"
              />
            </button>
          )}
        </NavbarContent>
      </Navbar>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-gray-900 z-50 overflow-y-auto">
          <div className="p-4 flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-xl hover:text-blue-300"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            {!auth.user && (
              <div className="flex flex-col gap-4 mt-8 w-full px-4">
                <Link
                  href="/login"
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg text-center"
                  onClick={toggleMobileMenu}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="bg-gray-800 text-white py-3 px-6 rounded-lg text-center"
                  onClick={toggleMobileMenu}
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarMenu;