# Quick Reference Guide

## Common Commands

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
\`\`\`

## Key Hooks

### useAuth
\`\`\`tsx
import { useAuth } from '@/hooks/use-auth'

const { user, logout, isAuthenticated } = useAuth()
\`\`\`

### useTheme
\`\`\`tsx
import { useTheme } from '@/providers/theme-provider'

const { theme, setTheme } = useTheme()
// theme: 'light' | 'dark' | 'system'
\`\`\`

## Key Functions

### hasPermission
\`\`\`tsx
import { hasPermission } from '@/lib/auth'

if (hasPermission('admin', 'manage_users')) {
  // Show admin features
}
\`\`\`

### canAccess
\`\`\`tsx
import { canAccess } from '@/lib/auth'

if (canAccess(['admin', 'manager'])) {
  // Show for admin or manager
}
\`\`\`

### getUser
\`\`\`tsx
import { getUser } from '@/lib/auth'

const user = getUser()
\`\`\`

## Component Props

### Sidebar
\`\`\`tsx
<Sidebar
  isOpen={boolean}
  onClose={() => void}
  isCollapsed={boolean}
/>
\`\`\`

### Header
\`\`\`tsx
<Header
  onMenuClick={() => void}
  isCollapsed={boolean}
  onCollapseToggle={() => void}
/>
\`\`\`

### Pagination
\`\`\`tsx
<Pagination
  currentPage={number}
  totalPages={number}
  onPageChange={(page: number) => void}
/>
\`\`\`

### SearchBar
\`\`\`tsx
<SearchBar
  placeholder={string}
  onSearch={(query: string) => void}
/>
\`\`\`

## Tailwind Classes

### Common Utilities
\`\`\`tsx
// Flexbox
className="flex items-center justify-between"

// Grid
className="grid grid-cols-3 gap-4"

// Spacing
className="p-4 m-2 gap-3"

// Colors
className="bg-primary text-white"
className="dark:bg-slate-950 dark:text-white"

// Responsive
className="md:grid-cols-2 lg:grid-cols-3"

// Transitions
className="transition-colors duration-300"

// Hover
className="hover:bg-gray-100 dark:hover:bg-slate-800"
\`\`\`

## File Locations

| Feature | File |
|---------|------|
| Authentication | `lib/auth.ts` |
| Constants | `lib/constants.ts` |
| Theme | `providers/theme-provider.tsx` |
| Sidebar | `components/dashboard/sidebar.tsx` |
| Header | `components/dashboard/header.tsx` |
| Icons | `components/icons.tsx` |
| Styles | `app/globals.css` |

## Routes

| Route | Purpose | Roles |
|-------|---------|-------|
| `/` | Home (redirects to login) | Public |
| `/login` | Login page | Public |
| `/forgot-password` | Forgot password | Public |
| `/dashboard` | Dashboard home | All |
| `/dashboard/users` | Users list | Admin, Manager |
| `/dashboard/analytics` | Analytics | Admin, Manager |
| `/dashboard/reports` | Reports | Admin, Manager |
| `/dashboard/settings` | Settings | Admin |
| `/dashboard/profile` | Profile | All |
| `/dashboard/unauthorized` | Access denied | All |

## Color Variables

\`\`\`css
/* Light Mode */
--color-primary: #3b82f6
--color-success: #10b981
--color-warning: #f59e0b
--color-error: #ef4444
--color-background: #ffffff
--color-foreground: #111827

/* Dark Mode */
--color-dark-background: #0f172a
--color-dark-foreground: #f1f5f9
\`\`\`

## Demo Users

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@example.com | admin123 |
| Manager | manager@example.com | manager123 |
| User | user@example.com | user123 |

## Permissions by Role

| Permission | Admin | Manager | User |
|------------|-------|---------|------|
| view_dashboard | ✅ | ✅ | ✅ |
| manage_users | ✅ | ❌ | ❌ |
| view_users | ✅ | ✅ | ❌ |
| view_analytics | ✅ | ✅ | ❌ |
| manage_reports | ✅ | ❌ | ❌ |
| view_reports | ✅ | ✅ | ❌ |
| manage_settings | ✅ | ❌ | ❌ |

## Tips & Tricks

1. **Theme Switching**: Click the sun/moon/monitor icon in the header
2. **Sidebar Toggle**: Click the menu icon in the header
3. **Mobile Menu**: Sidebar opens with blur overlay on mobile
4. **Search**: Type to filter data (debounced)
5. **Pagination**: Click page numbers to navigate
6. **Logout**: Click user avatar → Logout

## Debugging

\`\`\`tsx
// Check current user
console.log(getUser())

// Check theme
console.log(localStorage.getItem('theme'))

// Check permissions
console.log(hasPermission('admin', 'manage_users'))
\`\`\`

---

For detailed information, see [README.md](./README.md) and [SETUP.md](./SETUP.md)
