---
id: component-library
title: Component Library
sidebar_label: 📓 Component Library
---

# Component Library

MongoNext includes a growing library of reusable UI components, all built with Material UI and designed for consistency, accessibility, and easy customization.

## 1. Common Components
- **Button**: Custom-styled buttons for actions and navigation.
- **Card**: Used for product listings, blog posts, and dashboard widgets.
- **Form**: Input fields, validation, and submission handling.
- **Modal/Dialog**: For confirmations, forms, and alerts.
- **Table**: For displaying lists of products, users, etc.
- **Snackbar/Alert**: For notifications and feedback.

## 2. Using the Components Directory
- All shared components are located in `src/app/components/`.
- Import and use them in your pages or other components:

```js
import ProductCard from './components/ProductCard';

<ProductCard product={product} />
```

## 3. Styling Guidelines
- Use the Material UI theme for colors, spacing, and typography.
- Prefer the `sx` prop for quick customizations.
- For complex styles, use `styled` or `makeStyles` from MUI.
- Keep component styles colocated for maintainability.

## 4. Best Practices
- Keep components small, focused, and reusable.
- Document props and usage with comments or Storybook (optional).
- Use prop-types or TypeScript for type safety (optional).
- Test components in isolation before integrating.
- Follow accessibility best practices (labels, roles, keyboard navigation).

---

Building a robust component library, you ensure your MongoNext app is easy to maintain, extend, and scale. 