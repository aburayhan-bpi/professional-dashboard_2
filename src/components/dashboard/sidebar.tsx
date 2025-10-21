"use client";

import type React from "react";

import { useAuth } from "@/src/hooks/use-auth";
import { SIDEBAR_ITEMS } from "@/src/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, isCollapsed, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();

  const visibleItems = SIDEBAR_ITEMS.filter((item) =>
    item.roles.includes(user?.role || "user")
  );

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      LayoutDashboard: <Icons.LayoutDashboard className="w-5 h-5" />,
      Users: <Icons.Users className="w-5 h-5" />,
      BarChart3: <Icons.BarChart3 className="w-5 h-5" />,
      FileText: <Icons.FileText className="w-5 h-5" />,
      Settings: <Icons.Settings className="w-5 h-5" />,
      User: <Icons.User className="w-5 h-5" />,
    };
    return iconMap[iconName];
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-slate-950 border-r border-gray-200 dark:border-slate-800 transition-all duration-300 z-40 lg:relative lg:z-0 ${
          isOpen ? "w-64" : "-translate-x-full lg:translate-x-0"
        } ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-slate-800">
            <div
              className={`flex items-center gap-2 ${
                isCollapsed ? "lg:justify-center lg:w-full" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                D
              </div>
              {!isCollapsed && (
                <span className="font-bold text-gray-900 dark:text-white hidden lg:inline">
                  Dashboard
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-label="Close sidebar"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
            {visibleItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => onClose()}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                  } ${isCollapsed ? "lg:justify-center lg:px-2" : ""}`}
                  title={isCollapsed ? item.label : undefined}
                >
                  {getIcon(item.icon)}
                  {!isCollapsed && (
                    <span className="hidden lg:inline text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-slate-800">
            <div
              className={`text-xs text-gray-500 dark:text-gray-400 ${
                isCollapsed ? "lg:hidden" : ""
              }`}
            >
              v1.0.0
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
