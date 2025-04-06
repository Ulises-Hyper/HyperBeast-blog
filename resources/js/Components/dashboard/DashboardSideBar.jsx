import { Link, usePage } from "@inertiajs/react";
import { FileText, LayoutDashboard, Menu, MessageCircle, Tag, Users } from "lucide-react";

function DashboardSideBar({ isCollapsed, setIsCollapsed }) {
  const { url: currentPath } = usePage(); // Obtener la ruta actual

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} />, link: "/dashboard" },
    { id: "articles", label: "Articles", icon: <FileText size={20} />, link: "#articles" },
    { id: "users", label: "Users", icon: <Users size={20} />, link: "/dashboard/users" },
    { id: "categories", label: "Categories", icon: <Tag size={20} />, link: "#categories" },
    { id: "comments", label: "Comments", icon: <MessageCircle size={20} />, link: "#comments" },
  ];

  // Determinar si un ítem está activo
  const isActive = (link) => {
    if (link === "/dashboard") {
      return currentPath === "/dashboard"; // Solo activo en la ruta exacta
    }

    return currentPath.startsWith(link); // Para otros elementos
  };

  return (
    <div className={`fixed top-0 left-0 z-40 h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
      {/* Encabezado */}
      <div className="p-3 border-b border-gray-700">
        <div className={`flex items-center w-full ${isCollapsed ? "justify-center" : "justify-between"}`}>
          <img
            className={`h-14 transition-all duration-300 ${isCollapsed ? "hidden" : "block"}`}
            src="/images/logos/white_logo_transparent_background.png"
            alt="Hyperbeast logo"
          />
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <Menu size={24} /> {/* Icono del botón de menú */}
          </button>
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-2 p-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors group ${
                isActive(item.link)
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "hover:bg-gray-700 text-gray-400"
              }`}
            >
              <span
                className={`text-xl flex justify-center items-center ${
                  isCollapsed ? "w-full" : "min-w-[32px]"
                }`}
              >
                {item.icon}
              </span>
              <span className={`font-medium text-base ml-2 ${isCollapsed ? "hidden" : "block"}`}>
                {item.label}
              </span>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardSideBar;