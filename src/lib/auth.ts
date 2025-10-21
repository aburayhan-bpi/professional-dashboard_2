export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "user";
  avatar?: string;
}

export const DEMO_USERS: Record<string, User & { password: string }> = {
  admin: {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    password: "admin123",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
  },
  manager: {
    id: "2",
    name: "Manager User",
    email: "manager@example.com",
    role: "manager",
    password: "manager123",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=manager",
  },
  user: {
    id: "3",
    name: "Regular User",
    email: "user@example.com",
    role: "user",
    password: "user123",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
  },
};

export function validateCredentials(
  email: string,
  password: string
): User | null {
  const user = Object.values(DEMO_USERS).find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
}

export function hasRole(userRole: string, requiredRoles: string[]): boolean {
  return requiredRoles.includes(userRole.toLowerCase());
}
