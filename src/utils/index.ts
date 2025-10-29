/* eslint-disable @typescript-eslint/no-explicit-any */

// export function cn(...inputs: unknown[]) {
//   return twMerge(clsx(inputs));
// }

export const storage = {
  get: (key: string) => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch {
        return null;
      }
    }
    return null;
  },
  set: (key: string, value: any) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // Handle storage error
      }
    }
  },
  remove: (key: string) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.removeItem(key);
      } catch {
        // Handle storage error
      }
    }
  },
  clear: () => {
    if (typeof window !== "undefined") {
      try {
        localStorage.clear();
      } catch {
        // Handle storage error
      }
    }
  },
};
