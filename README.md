# Professional Dashboard

একটি সম্পূর্ণ পেশাদার ড্যাশবোর্ড যা শুধুমাত্র Tailwind CSS এবং React/Next.js ব্যবহার করে তৈরি। এটি যেকোনো React বা Next.js প্রজেক্টে সহজেই ইমপ্লিমেন্ট করা যায়।

## ✨ বৈশিষ্ট্য

### 🎨 ডিজাইন ও UI
- **সম্পূর্ণ রেসপন্সিভ** - মোবাইল, ট্যাবলেট এবং ডেস্কটপে নিখুঁত
- **ডার্ক/লাইট/সিস্টেম মোড** - থিম সুইচার সহ
- **পেশাদার ডিজাইন** - আধুনিক এবং পরিষ্কার UI
- **শুধুমাত্র Tailwind CSS** - কোনো UI লাইব্রেরি নেই

### 🔐 অথেন্টিকেশন
- **লগইন সিস্টেম** - ইমেইল এবং পাসওয়ার্ড সহ
- **ফরগট পাসওয়ার্ড ফ্লো** - OTP ভেরিফিকেশন সহ
- **OTP কম্পোনেন্ট** - সব ডিভাইসে পেস্ট সাপোর্ট সহ

### 📊 ড্যাশবোর্ড ফিচার
- **সাইডবার নেভিগেশন** - কোলাপ্স/এক্সপান্ড সিস্টেম
- **রেসপন্সিভ হেডার** - ইউজার প্রোফাইল ড্রপডাউন সহ
- **মোবাইল মেনু** - ব্লার ব্যাকগ্রাউন্ড সহ
- **ডেটা টেবিল** - সার্চ এবং পেজিনেশন সহ

### 🔍 সার্চ ও পেজিনেশন
- **URL-বেসড সার্চ** - সার্ভার-সাইড পেজিনেশন সাপোর্ট
- **রিইউজেবল পেজিনেশন কম্পোনেন্ট** - সব পেজে ব্যবহারযোগ্য
- **ডেবাউন্স সার্চ** - পারফরম্যান্স অপটিমাইজড

### 👥 রোল-বেসড এক্সেস
- **Admin, Manager, User রোল** - কাস্টমাইজেবল
- **পারমিশন সিস্টেম** - প্রতিটি রোলের জন্য আলাদা এক্সেস
- **প্রোটেক্টেড রুট** - অননুমোদিত এক্সেস ব্লক করে

### 📱 মোবাইল অপটিমাইজেশন
- **টাচ-ফ্রেন্ডলি** - সব ইন্টারঅ্যাকশন মোবাইল-অপটিমাইজড
- **রেসপন্সিভ লেআউট** - সব স্ক্রিন সাইজে পারফেক্ট
- **ফাস্ট লোডিং** - মিনিমাল বান্ডেল সাইজ

## 🚀 দ্রুত শুরু করুন

### ইনস্টলেশন

\`\`\`bash
# ক্লোন করুন বা ডাউনলোড করুন
git clone <repository-url>
cd professional-dashboard

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালান
npm run dev
\`\`\`

ব্রাউজার খুলুন এবং [http://localhost:3000](http://localhost:3000) এ যান।

### ডেমো ক্রেডেনশিয়াল

**Admin অ্যাকাউন্ট:**
\`\`\`
Email: admin@example.com
Password: admin123
\`\`\`

**Manager অ্যাকাউন্ট:**
\`\`\`
Email: manager@example.com
Password: manager123
\`\`\`

**User অ্যাকাউন্ট:**
\`\`\`
Email: user@example.com
Password: user123
\`\`\`

## 📁 প্রজেক্ট স্ট্রাকচার

\`\`\`
professional-dashboard/
├── app/
│   ├── layout.tsx                 # রুট লেআউট
│   ├── page.tsx                   # হোম পেজ (রিডিরেক্ট)
│   ├── globals.css                # গ্লোবাল স্টাইল এবং থিম
│   ├── login/
│   │   └── page.tsx              # লগইন পেজ
│   ├── forgot-password/
│   │   └── page.tsx              # ফরগট পাসওয়ার্ড পেজ
│   └── dashboard/
│       ├── layout.tsx             # ড্যাশবোর্ড লেআউট
│       ├── page.tsx               # ড্যাশবোর্ড হোম
│       ├── users/
│       │   └── page.tsx           # ইউজার লিস্ট
│       ├── analytics/
│       │   └── page.tsx           # অ্যানালিটিক্স পেজ
│       ├── reports/
│       │   └── page.tsx           # রিপোর্ট পেজ
│       ├── settings/
│       │   └── page.tsx           # সেটিংস পেজ
│       ├── profile/
│       │   └── page.tsx           # প্রোফাইল পেজ
│       └── unauthorized/
│           └── page.tsx           # এক্সেস ডিনাইড পেজ
├── components/
│   ├── icons.tsx                  # কাস্টম SVG আইকন
│   └── dashboard/
│       ├── layout.tsx             # ড্যাশবোর্ড লেআউট কম্পোনেন্ট
│       ├── sidebar.tsx            # সাইডবার নেভিগেশন
│       ├── header.tsx             # হেডার কম্পোনেন্ট
│       ├── pagination.tsx         # পেজিনেশন কম্পোনেন্ট
│       ├── search-bar.tsx         # সার্চ বার কম্পোনেন্ট
│       ├── data-table.tsx         # ডেটা টেবিল কম্পোনেন্ট
│       └── protected-route.tsx    # প্রোটেক্টেড রুট কম্পোনেন্ট
├── providers/
│   └── theme-provider.tsx         # থিম প্রোভাইডার
├── hooks/
│   └── use-auth.ts                # অথেন্টিকেশন হুক
├── lib/
│   ├── auth.ts                    # অথেন্টিকেশন ইউটিলিটি
│   └── constants.ts               # কনস্ট্যান্ট এবং ডেমো ডেটা
├── package.json                   # ডিপেন্ডেন্সি (সর্বশেষ ভার্সন)
├── tsconfig.json                  # TypeScript কনফিগ
├── next.config.mjs                # Next.js কনফিগ
├── postcss.config.mjs             # PostCSS কনফিগ
├── .eslintrc.json                 # ESLint কনফিগ
└── README.md                      # এই ফাইল
\`\`\`

## 🎯 কোর কম্পোনেন্ট

### 1. **Sidebar** (`components/dashboard/sidebar.tsx`)
- কোলাপ্স/এক্সপান্ড ফাংশনালিটি
- রোল-বেসড মেনু ফিল্টারিং
- অ্যাক্টিভ লিংক হাইলাইটিং
- মোবাইল ড্রয়ার মোড (ব্লার ব্যাকগ্রাউন্ড সহ)

### 2. **Header** (`components/dashboard/header.tsx`)
- থিম সুইচার (লাইট/ডার্ক/সিস্টেম)
- ইউজার প্রোফাইল ড্রপডাউন
- লগআউট ফাংশনালিটি
- মোবাইল মেনু টগল

### 3. **Pagination** (`components/dashboard/pagination.tsx`)
- URL-বেসড পেজিনেশন
- স্মার্ট পেজ নম্বর ডিসপ্লে
- প্রথম/শেষ পেজ জাম্প
- রেসপন্সিভ ডিজাইন

### 4. **SearchBar** (`components/dashboard/search-bar.tsx`)
- ডেবাউন্স সার্চ
- URL প্যারামিটার সিঙ্ক
- ক্লিয়ার বাটন
- রিয়েল-টাইম ফিল্টারিং

### 5. **DataTable** (`components/dashboard/data-table.tsx`)
- জেনেরিক টাইপ সাপোর্ট
- কাস্টম রেন্ডার ফাংশন
- লোডিং স্টেট
- এমপ্টি স্টেট

### 6. **ProtectedRoute** (`components/dashboard/protected-route.tsx`)
- রোল-বেসড এক্সেস চেক
- অটোমেটিক রিডিরেক্ট
- লোডিং স্টেট

## 🎨 থিম কাস্টমাইজেশন

`app/globals.css` এ থিম ভেরিয়েবল সংজ্ঞায়িত করা আছে:

\`\`\`css
@theme inline {
  --color-primary: #3b82f6;
  --color-primary-dark: #1e40af;
  --color-primary-light: #60a5fa;
  
  --color-background: #ffffff;
  --color-background-secondary: #f9fafb;
  --color-foreground: #111827;
  
  /* ডার্ক মোড */
  --color-dark-background: #0f172a;
  --color-dark-background-secondary: #1e293b;
  --color-dark-foreground: #f1f5f9;
  
  /* অ্যাক্সেন্ট কালার */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}
\`\`\`

## 🔐 অথেন্টিকেশন ফ্লো

### লগইন
1. ইমেইল এবং পাসওয়ার্ড এন্টার করুন
2. ইউজার ডেটা localStorage এ সেভ হয়
3. ড্যাশবোর্ডে রিডিরেক্ট

### ফরগট পাসওয়ার্ড
1. ইমেইল এন্টার করুন
2. OTP পান (ডেমো: যেকোনো 6 ডিজিট)
3. নতুন পাসওয়ার্ড সেট করুন
4. লগইন পেজে রিডিরেক্ট

## 👥 রোল-বেসড এক্সেস

### Admin
- সব পেজ এক্সেস করতে পারে
- ইউজার ম্যানেজমেন্ট
- সেটিংস এক্সেস

### Manager
- ড্যাশবোর্ড, ইউজার, অ্যানালিটিক্স, রিপোর্ট দেখতে পারে
- সেটিংস এক্সেস নেই

### User
- শুধুমাত্র ড্যাশবোর্ড এবং প্রোফাইল দেখতে পারে

## 📦 ডিপেন্ডেন্সি (সর্বশেষ ভার্সন)

\`\`\`json
{
  "dependencies": {
    "next": "^15.5.4",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "next-themes": "^0.4.6",
    "lucide-react": "^0.454.0",
    "date-fns": "^4.1.0"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^4.1.9",
    "@tailwindcss/postcss": "^4.1.9"
  }
}
\`\`\`

## 🎓 কোড কোয়ালিটি

- ✅ TypeScript সাপোর্ট (সর্বশেষ ভার্সন)
- ✅ ESLint কনফিগার করা
- ✅ সিমান্টিক HTML
- ✅ ARIA অ্যাট্রিবিউট
- ✅ পারফরম্যান্স অপটিমাইজড
- ✅ কোনো বিল্ড এরর নেই
- ✅ কোনো লিন্ট এরর নেই

## 🔧 কাস্টমাইজেশন গাইড

### নতুন পেজ যোগ করুন

\`\`\`tsx
// app/dashboard/new-page/page.tsx
"use client"

import { ProtectedRoute } from "@/components/dashboard/protected-route"

export default function NewPage() {
  return (
    <ProtectedRoute requiredRoles={["admin"]}>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">New Page</h1>
        {/* কন্টেন্ট এখানে */}
      </div>
    </ProtectedRoute>
  )
}
\`\`\`

### নতুন নেভিগেশন আইটেম যোগ করুন

`lib/constants.ts` এ `SIDEBAR_ITEMS` অ্যারে এডিট করুন:

\`\`\`tsx
export const SIDEBAR_ITEMS = [
  // ... existing items
  {
    id: "new-page",
    label: "New Page",
    icon: "YourIcon",
    href: "/dashboard/new-page",
    roles: ["admin"],
  },
]
\`\`\`

### রোল পারমিশন কাস্টমাইজ করুন

`lib/auth.ts` এ `rolePermissions` এডিট করুন:

\`\`\`tsx
export const rolePermissions: Record<UserRole, string[]> = {
  admin: ["view_dashboard", "manage_users", "new_permission"],
  manager: ["view_dashboard", "view_users"],
  user: ["view_dashboard"],
}
\`\`\`

## 🐛 ট্রাবলশুটিং

### লগইন পেজে স্টাক হয়েছে?
- localStorage চেক করুন: `localStorage.getItem('user')`
- ব্রাউজার কনসোল এ এরর দেখুন

### থিম পরিবর্তন হচ্ছে না?
- localStorage থেকে থিম চেক করুন: `localStorage.getItem('theme')`
- ব্রাউজার রিফ্রেশ করুন

### পেজিনেশন কাজ করছে না?
- URL প্যারামিটার চেক করুন: `?page=1&search=query`
- ডেটা লেন্থ চেক করুন

### npm install এ এরর?
- `node_modules` ফোল্ডার ডিলিট করুন
- `npm cache clean --force` চালান
- আবার `npm install` চালান

## 🚀 ডিপ্লয়মেন্ট

### Vercel এ ডিপ্লয় করুন

\`\`\`bash
npm run build
vercel deploy
\`\`\`

### অন্যান্য প্ল্যাটফর্ম

\`\`\`bash
npm run build
# আউটপুট: .next ফোল্ডার
\`\`\`

## 📝 লাইসেন্স

এই প্রজেক্ট ওপেন সোর্স এবং ফ্রি ব্যবহারের জন্য উপলব্ধ।

## 🤝 কন্ট্রিবিউশন

উন্নতির জন্য সাজেশন এবং পুল রিকোয়েস্ট স্বাগত জানাই।

---

**Happy Coding! 🚀**

আরও তথ্যের জন্য [SETUP.md](./SETUP.md) এবং [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) দেখুন।
