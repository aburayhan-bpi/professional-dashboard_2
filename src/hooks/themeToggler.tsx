"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx"; // optional but recommended for cleaner class merge
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={clsx(
        " items-center gap-1 bg-gray-100 dark:bg-slate-800 rounded-lg p-1",
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={clsx(
          "p-2 rounded transition-all duration-200 cursor-pointer",
          theme === "light"
            ? "bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700/50"
        )}
        title="Light mode"
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={clsx(
          "p-2 rounded transition-all duration-200 cursor-pointer",
          theme === "dark"
            ? "bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700/50"
        )}
        title="Dark mode"
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className={clsx(
          "p-2 rounded transition-all duration-200 cursor-pointer",
          theme === "system"
            ? "bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700/50"
        )}
        title="System mode"
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  );
}
