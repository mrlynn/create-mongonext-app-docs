---
id: layout-system
title: Layout System
sidebar_label: 📓 Layout System
---

# Layout System

MongoNext uses the Next.js App Router to provide a flexible, modern layout system. This ensures consistent navigation, headers, footers, and page structure across your app.

## 1. App Router & Layouts
- Pages are organized in the `src/app/` directory using the [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing).
- Shared layouts (e.g., header, footer, sidebar) are defined in layout files (e.g., `src/app/layout.js`).
- Layouts wrap all pages and can include providers (e.g., ThemeProvider, AuthProvider).

**Example:**
```js
// src/app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

## 2. Navigation
- The main navigation is implemented in the `Header` component using Material UI's `AppBar` and `Toolbar`.
- Navigation links are managed with Next.js `<Link>` for client-side routing.
- The footer provides secondary navigation and site info.

## 3. Customizing Layouts
- To add new layouts (e.g., for the admin dashboard), create a new layout file in the relevant directory (e.g., `src/app/admin/layout.js`).
- You can nest layouts for different sections of your app.

**Example:**
```js
// src/app/admin/layout.js
export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      {/* Admin sidebar, header, etc. */}
      {children}
    </div>
  );
}
```

## 4. Best Practices
- Keep layout components (Header, Footer, Sidebar) in the `components/` directory.
- Use the App Router's nested layouts for section-specific UI.
- Keep navigation accessible and mobile-friendly with Material UI components.

---

Continue to [Component Library](component-library.md) for reusable UI patterns and best practices. 