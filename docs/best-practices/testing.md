---
id: testing
title: Testing Strategies
sidebar_label: 📓 Testing
---

# Testing Strategies

Thorough testing ensures your MongoNext app is reliable, maintainable, and ready for production. Use a mix of unit, integration, and end-to-end (E2E) tests for full coverage.

## 1. Unit Testing
- Test individual functions, components, and utilities in isolation.
- Use [Jest](https://jestjs.io/) as the primary test runner.
- Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for React component tests.

**Example:**
```js
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders product name', () => {
  render(<ProductCard product={{ name: 'Shirt' }} />);
  expect(screen.getByText('Shirt')).toBeInTheDocument();
});
```

## 2. Integration Testing
- Test how components and modules work together (e.g., form submission, API calls).
- Mock API responses and database calls for predictable results.

## 3. End-to-End (E2E) Testing
- Simulate real user flows in the browser.
- Use [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/) for E2E tests.
- Test critical paths: login, product purchase, admin actions, etc.

## 4. Best Practices
- Write tests for new features and bug fixes.
- Use descriptive test names and keep tests independent.
- Run tests automatically in CI/CD (e.g., GitHub Actions, Vercel).
- Aim for high coverage, but prioritize critical business logic and user flows.

---

By following these strategies, you'll catch bugs early and ship with confidence. 