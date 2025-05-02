import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import {
  FileText,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Tag,
  Users,
  Inbox,
  LogOut,
  Settings
} from "lucide-react";

function DashboardSideBar({ isCollapsed, setIsCollapsed }) {
  const { url: currentPath } = usePage();
  const { auth } = usePage().props;
  const [isMobile, setIsMobile] = useState(false);

  // Persistir estado del sidebar
  useEffect(() => {
    const savedState = localStorage.getItem('sidebar-collapsed');
    if (savedState) {
      setIsCollapsed(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Solo colapsar automáticamente si no hay estado guardado
      if (mobile && !localStorage.getItem('sidebar-collapsed')) {
        setIsCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setIsCollapsed]);

  const menuSections = [
    {
      title: "Principal",
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: <LayoutDashboard size={22} />,
          link: "/dashboard",
        },
        {
          id: "posts",
          label: "Posts",
          icon: <FileText size={22} />,
          link: "/dashboard/posts",
        },
      ]
    },
    {
      title: "Gestión",
      items: [
        {
          id: "users",
          label: "Users",
          icon: <Users size={22} />,
          link: "/dashboard/users"
        },
        {
          id: "categories",
          label: "Categories",
          icon: <Tag size={22} />,
          link: "/dashboard/categories"
        },
      ]
    },
    {
      title: "Comunicación",
      items: [
        {
          id: "comments",
          label: "Comments",
          icon: <MessageCircle size={22} />,
          link: "/dashboard/comments"
        },
        {
          id: "feedback",
          label: "Feedback",
          icon: <Inbox size={22} />,
          link: "/dashboard/feedback",
        },
      ]
    }
  ];

  const isActive = (link) => {
    if (link === "/dashboard") return currentPath === "/dashboard";
    return currentPath.startsWith(link);
  };

  const Tooltip = ({ children, label }) => (
    <div className="group relative flex">
      {children}
      {isCollapsed && (
        <div className="absolute left-full ml-4 px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {label}
          <div className="absolute -left-1 top-3 w-2 h-2 bg-gray-800 rotate-45" />
        </div>
      )}
    </div>
  );

  // Guardar estado al cambiar
  const handleToggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar-collapsed', JSON.stringify(newState));
  };

  return (
    <>
      {!isCollapsed && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-40 h-screen bg-gray-900 backdrop-blur-lg border-r border-gray-700 flex flex-col transition-all duration-300 ease-out ${isCollapsed ? "w-20" : "w-64"
          } ${isMobile && isCollapsed ? "-translate-x-full" : "translate-x-0"}`}
      >
        {/* Encabezado corregido */}
        <div className={`p-4 border-b border-gray-700 flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <img
                src="/images/logos/white_logo_transparent_background.png"
                alt="Hyperbeast"
              />
            </div>
          )}
          <button
            onClick={handleToggleCollapse}
            className={`p-2 hover:bg-gray-700/50 rounded-lg transition-all ${isCollapsed ? "" : "hover:scale-105"}`}
          >
            <Menu
              size={22}
              className={`${isCollapsed ? "text-gray-300 mx-auto" : "text-gray-300"}`}
            />
          </button>
        </div>

        {/* Menú principal */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-700/50 scrollbar-track-transparent">
          {menuSections.map((section, idx) => (
            <div key={idx} className="mb-6">
              {!isCollapsed && (
                <h3 className="px-4 text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
              )}
              <ul className="flex flex-col gap-1 px-2">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <Tooltip label={item.label}>
                      <Link
                        href={item.link}
                        className={`group flex w-full items-center p-3 rounded-xl transition-all duration-200 ${isActive(item.link)
                          ? "bg-gradient-to-r from-blue-600/30 to-blue-400/10 text-blue-400 border-l-4 border-blue-400"
                          : ` text-gray-300 border-l-4 border-transparent ${!isCollapsed && "hover:bg-gray-700/30"
                          }`
                          } ${isCollapsed ? "justify-center" : "justify-between"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`${isActive(item.link)
                            ? "text-blue-400"
                            : "text-gray-400"
                            } ${!isCollapsed && "group-hover:text-white"}`}>
                            {item.icon}
                          </span>
                          {!isCollapsed && (
                            <span className="text-sm font-medium">
                              {item.label}
                            </span>
                          )}
                        </div>
                      </Link>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Botón móvil */}
      {isMobile && isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed bottom-6 left-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 backdrop-blur-lg transition-all"
        >
          <Menu size={20} />
        </button>
      )}
    </>
  );
}

export default DashboardSideBar;