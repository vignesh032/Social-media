import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { X, Menu, XIcon, MenuIcon } from "lucide-react";

const Layout = () => {
  const [sidebarOpen, setSeidebarOpen] = useState(false);

  return (
    <div className="w-full flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-slate-50">
        <Outlet />
      </div>
      {sidebarOpen ? (
        <XIcon
          className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-grey-600 sm:hidden"
          onClick={() => setSeidebarOpen(false)}
        />
      ) : (
        <MenuIcon
          className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-grey-600 sm:hidden"
          onClick={() => setSeidebarOpen(true)}
        />
      )}
    </div>
  );
};

export default Layout;
