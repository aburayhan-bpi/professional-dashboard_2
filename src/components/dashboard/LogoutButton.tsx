import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Icons } from "../icons";

export function LogoutButton({ isCollapsed }: { isCollapsed: boolean }) {
  const handleLogout = () => {
    toast.info("Logging you out...", {
      description: "Redirecting to login page shortly.",
      duration: 2000,
    });

    // Simulate delay before redirect (or call logout function)
    setTimeout(() => {
      toast.success("Logout successful!");
      // router.push("/login"); // Uncomment when real logout logic is added
    }, 2000);
  };

  return (
    <div className=" dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <Button
        onClick={handleLogout}
        variant="outline"
        className="w-full flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 hover:cursor-pointer hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30 dark:hover:text-red-400"
      >
        {isCollapsed ? (
          <Icons.LogOut className="w-4 h-4" />
        ) : (
          <>
            <Icons.LogOut className="w-4 h-4" />
            Logout
          </>
        )}
      </Button>
    </div>
  );
}
