"use client";

import { useAuth } from "@/src/hooks/use-auth";

import { ModeToggle } from "@/src/hooks/themeToggler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icons } from "../icons";
interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
  isCollapsed: boolean;
  onCollapseToggle: () => void;
}

export function Header({
  onMenuClick,
  sidebarOpen,
  isCollapsed,
  onCollapseToggle,
}: HeaderProps) {
  const router = useRouter();

  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="h-16 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-500 p-2 rounded-md transition-all bg-gray-50 dark:bg-gray-800 hover:cursor-pointer transform  duration-300"
          aria-label="Toggle menu"
        >
          {/* <Icons.Menu className="w-5 h-5" /> */}
          {sidebarOpen ? (
            <Icons.TbLayoutSidebarLeftCollapseFilled />
          ) : (
            <Icons.TbLayoutSidebarRightCollapseFilled />
          )}
        </button>

        <button
          onClick={onCollapseToggle}
          className="hidden lg:flex -ml-7 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-500 p-2 rounded-r-lg transition-colors bg-gray-50 dark:bg-gray-800 hover:cursor-pointer"
          aria-label="Toggle sidebar collapse"
        >
          {/* <Icons.Menu className="w-5 h-5" /> */}

          {isCollapsed ? (
            <Icons.TbLayoutSidebarRightCollapseFilled />
          ) : (
            <Icons.TbLayoutSidebarLeftCollapseFilled />
          )}
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Switcher */}
        <ModeToggle className="hidden md:inline-flex" />

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors hover:cursor-pointer"
            aria-label="User menu"
          >
            {user?.avatar && (
              <Image
                width={200}
                height={200}
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {user?.role}
              </p>
            </div>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>

              <div className="p-2 space-y-1">
                <button
                  onClick={() => {
                    router.push("/dashboard/profile");
                    setShowDropdown(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors hover:cursor-pointer"
                >
                  <Icons.User className="w-4 h-4" />
                  Profile
                </button>
                <button
                  onClick={() => {
                    router.push("/dashboard/settings");
                    setShowDropdown(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors hover:cursor-pointer"
                >
                  <Icons.Settings className="w-4 h-4" />
                  Settings
                </button>
              </div>

              <div className="p-2 border-t border-gray-200 dark:border-slate-700">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors hover:cursor-pointer"
                >
                  <Icons.LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
