import React, { useState } from "react";
import DashboardSideBar from "@/Components/dashboard/DashboardSideBar";
import DashboardHeader from "@/Components/dashboard/DashboardHeader";
import { Head } from "@inertiajs/react";
import { User } from "lucide-react";

function DashboardLayout({ children, title, user, scrollable = true }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Head title={title || "Dashboard"} />

      <DashboardSideBar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
      />

      <div
        className={`flex-1 flex flex-col bg-gray-100 transition-all duration-300 
          ${isSidebarCollapsed ? "ml-20" : "ml-64"}`}
      >
        <div className="shrink-0">
          <DashboardHeader user={user ?? { avatar: <User/> }} />
        </div>

        <div className={`flex-1 ${scrollable ? "overflow-y-auto" : "overflow-hidden"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;