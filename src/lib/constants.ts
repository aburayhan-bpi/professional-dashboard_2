export const SIDEBAR_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
    roles: ["admin", "manager", "user"],
  },
  {
    id: "users",
    label: "Users",
    href: "/dashboard/users",
    icon: "Users",
    roles: ["admin", "manager"],
  },
  {
    id: "analytics",
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: "BarChart3",
    roles: ["admin", "manager"],
  },
  {
    id: "reports",
    label: "Reports",
    href: "/dashboard/reports",
    icon: "FileText",
    roles: ["admin"],
  },
  {
    id: "settings",
    label: "Settings",
    href: "/dashboard/settings",
    icon: "Settings",
    roles: ["admin", "manager", "user"],
  },
  {
    id: "profile",
    label: "Profile",
    href: "/dashboard/profile",
    icon: "User",
    roles: ["admin", "manager", "user"],
  },
];
