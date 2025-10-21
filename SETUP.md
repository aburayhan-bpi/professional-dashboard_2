# Setup Guide

## Quick Start

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

This will install all required dependencies:
- Next.js 15.5.4
- React 19.1.0
- Tailwind CSS 4.1.9
- next-themes for theme management
- TypeScript 5.x

### 2. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Login

Use any of the demo credentials:

**Admin:**
- Email: `admin@example.com`
- Password: `admin123`

**Manager:**
- Email: `manager@example.com`
- Password: `manager123`

**User:**
- Email: `user@example.com`
- Password: `user123`

## Project Structure Overview

### Authentication Flow
1. User lands on `/` (redirects to `/login`)
2. User enters credentials on `/login`
3. User data is stored in localStorage
4. User is redirected to `/dashboard`
5. Dashboard checks user role and shows appropriate content

### Role-Based Access
- **Admin**: Full access to all pages
- **Manager**: Access to dashboard, users, analytics, reports
- **User**: Access to dashboard and profile only

### Theme System
- Theme preference is stored in localStorage
- Supports: light, dark, system
- System mode respects OS preference
- Theme changes are instant with smooth transitions

## File Descriptions

### Core Files

**app/layout.tsx**
- Root layout component
- Imports global styles
- Wraps app with ThemeProvider

**app/globals.css**
- Tailwind CSS configuration
- Color variables for light/dark modes
- Custom utilities (sr-only, text-balance, etc.)
- Font configuration

**providers/theme-provider.tsx**
- Custom theme context provider
- Manages theme state
- Persists theme to localStorage
- Handles system preference detection

### Authentication

**lib/auth.ts**
- User type definitions
- Role permissions mapping
- Helper functions: hasPermission, canAccess, getUser

**hooks/use-auth.ts**
- useAuth hook for accessing user data
- Logout functionality

**app/login/page.tsx**
- Login form with email and password
- Demo credentials display
- Error handling

**app/forgot-password/page.tsx**
- Forgot password flow
- OTP verification

### Dashboard

**app/dashboard/layout.tsx**
- Dashboard layout wrapper
- Sidebar and header integration
- Responsive layout management

**components/dashboard/sidebar.tsx**
- Navigation sidebar
- Collapse/expand functionality
- Role-based menu filtering
- Mobile overlay with blur effect

**components/dashboard/header.tsx**
- Top header bar
- Theme switcher (light/dark/system)
- User profile dropdown
- Logout button

**components/dashboard/layout.tsx**
- Dashboard content wrapper
- Manages sidebar state

### Components

**components/dashboard/pagination.tsx**
- Reusable pagination component
- URL-based page navigation
- Previous/next buttons

**components/dashboard/search-bar.tsx**
- Search input with debouncing
- Filtering functionality

**components/dashboard/data-table.tsx**
- Reusable data table component
- Sortable columns
- Responsive design

**components/icons.tsx**
- Custom SVG icons
- No external icon library dependency
- All icons as React components

## Configuration Files

**package.json**
- Project metadata
- Dependencies and dev dependencies
- Scripts: dev, build, start, lint

**tsconfig.json**
- TypeScript configuration
- Path aliases (@/*)
- Strict mode enabled

**next.config.mjs**
- Next.js configuration
- Image optimization settings
- Build settings

**postcss.config.mjs**
- PostCSS configuration
- Tailwind CSS plugin

**.eslintrc.json**
- ESLint configuration
- Next.js recommended rules

## Common Tasks

### Add a New Page

1. Create a new folder in `app/dashboard/`
2. Create `page.tsx` inside
3. Add route to `SIDEBAR_ITEMS` in `lib/constants.ts`
4. Add role permissions if needed

### Add a New Role

1. Update `UserRole` type in `lib/auth.ts`
2. Add permissions in `rolePermissions` object
3. Update `SIDEBAR_ITEMS` with new role

### Customize Colors

Edit `app/globals.css`:

\`\`\`css
@theme inline {
  --color-primary: #your-color;
  --color-success: #your-color;
  /* ... */
}
\`\`\`

### Add New Icons

Add SVG to `components/icons.tsx`:

\`\`\`tsx
export const Icons = {
  // ... existing icons
  YourIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props}>
      {/* SVG content */}
    </svg>
  ),
}
\`\`\`

## Troubleshooting

### Theme not persisting
- Check if localStorage is enabled
- Clear browser cache and try again

### Sidebar not collapsing
- Check if JavaScript is enabled
- Verify `isCollapsed` state in dashboard layout

### Icons not showing
- Verify icon name in `SIDEBAR_ITEMS`
- Check if icon exists in `components/icons.tsx`

### Build errors
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check TypeScript errors: `npm run lint`

## Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Code Splitting**: Use dynamic imports for large components
3. **Caching**: Leverage Next.js caching strategies
4. **Debouncing**: Search and filter operations are debounced
5. **Memoization**: Use React.memo for expensive components

## Security Notes

- This is a demo application with localStorage-based auth
- For production, use proper backend authentication
- Implement proper session management
- Use HTTPS in production
- Validate all user inputs on the backend

## Next Steps

1. Replace demo authentication with real backend
2. Add database integration
3. Implement proper error handling
4. Add loading states and skeletons
5. Set up proper logging and monitoring
6. Add unit and integration tests
7. Deploy to production

---

For more information, see [README.md](./README.md)
