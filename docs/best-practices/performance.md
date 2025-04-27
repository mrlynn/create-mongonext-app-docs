---
id: performance
title: Performance Optimization
sidebar_label: 📓 Performance
---

# Performance Optimization

Writing performant code and designing for scalability ensures your MongoNext app remains fast as it grows. Here are best practices for code-level and architectural performance:

## 1. Efficient Data Fetching
- Use server-side data fetching (SSR/SSG) for critical data to improve initial load times.
- Use client-side caching libraries (React Query, SWR) for non-critical or frequently updated data.
- Paginate large data sets to reduce load and improve UX.

## 2. Minimize Re-renders
- Use React's `useMemo` and `useCallback` to avoid unnecessary re-renders.
- Split large components into smaller, focused components.
- Use key props and memoization for lists and dynamic content.

## 3. Lazy Loading
- Lazy load images and non-critical components with `React.lazy` and `Suspense`.
- Use Next.js dynamic imports for code splitting.
- Load third-party scripts only when needed.

## 4. Next.js & Material UI Features
- Use Next.js `<Image />` for optimized images.
- Take advantage of automatic code splitting and static asset optimization.
- Import only the Material UI components you use to reduce bundle size.

## 5. Monitor & Profile
- Use browser dev tools and [Lighthouse](https://developers.google.com/web/tools/lighthouse) to profile performance.
- Monitor production performance with Vercel Analytics and MongoDB Atlas monitoring.

---

Following these practices, you'll keep your MongoNext app fast and responsive for all users.

_Coming soon!_ 