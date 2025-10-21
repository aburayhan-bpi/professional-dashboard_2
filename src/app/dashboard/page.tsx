"use client";

import { Icons } from "@/src/components/icons";

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Users",
      value: "2,543",
      change: "+12.5%",
      icon: Icons.Users,
      color:
        "bg-blue-600/10 text-blue-600 dark:bg-blue-600/20 dark:text-blue-400",
    },
    {
      label: "Revenue",
      value: "$45,231",
      change: "+8.2%",
      icon: Icons.TrendingUp,
      color:
        "bg-green-600/10 text-green-600 dark:bg-green-600/20 dark:text-green-400",
    },
    {
      label: "Active Sessions",
      value: "1,234",
      change: "+5.1%",
      icon: Icons.Clock,
      color:
        "bg-purple-600/10 text-purple-600 dark:bg-purple-600/20 dark:text-purple-400",
    },
    {
      label: "Conversion Rate",
      value: "3.24%",
      change: "+2.3%",
      icon: Icons.BarChart3,
      color:
        "bg-orange-600/10 text-orange-600 dark:bg-orange-600/20 dark:text-orange-400",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome back! Here&lsquo;s your performance overview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </h3>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  {stat.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-slate-700 last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                  <Icons.CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    User activity #{i}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    2 hours ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Quick Stats
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Completion
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  75%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-blue-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Performance
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  92%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-11/12 bg-green-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Growth
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  68%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
