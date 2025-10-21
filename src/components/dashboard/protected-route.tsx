"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useAuth } from "@/src/hooks/use-auth"
import { hasRole } from "@/src/lib/auth"


interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRoles?: string[]
}

export function ProtectedRoute({ children, requiredRoles = [] }: ProtectedRouteProps) {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-slate-700 border-t-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    router.push("/login")
    return null
  }

  if (requiredRoles.length > 0 && !hasRole(user.role, requiredRoles)) {
    router.push("/dashboard/unauthorized")
    return null
  }

  return <>{children}</>
}
