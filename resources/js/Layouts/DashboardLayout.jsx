import React, { useState } from "react";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { Head } from "@inertiajs/react";
import { User } from "lucide-react";

function DashboardLayout({ children, title, user }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Head title={title || "Dashboard"} />

      <DashboardSideBar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

      <div
        className={`flex-1 flex flex-col bg-gray-100 overflow-y-auto transition-all duration-300 
          ${isSidebarCollapsed ? "ml-20" : "ml-64"}`}
      >
        <div className="top-0 z-10">
          <DashboardHeader user={user ?? { avatar: <User/> }} />
        </div>

        <main className="container mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;