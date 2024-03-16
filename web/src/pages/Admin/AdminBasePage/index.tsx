import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import SideBar from "../../../components/SideBar";

export default function AdminBasePage() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <div className="flex min-h-screen relative">
      <button
        className="absolute md:hidden bg-gray-800 text-white px-4 py-2"
        onClick={toggleSidebar}
      >
        {sidebarExpanded ? 
            <ChevronLeftIcon className="w-6 h-6 "/> 
            : 
            <ChevronRightIcon className="w-6 h-6 "/>}
      </button>
      <SideBar expanded={sidebarExpanded} />

      <div
        className={`flex-1 overflow-x-hidden overflow-y-auto ${
          sidebarExpanded ? "ml-64" : "" 
        }`}
      >
        <main className="w-full px-10 py-12 h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
