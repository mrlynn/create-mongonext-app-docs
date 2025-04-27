---
id: general
title: General API Information
sidebar_label: 📓 General
---

# General API Information

This section covers general usage patterns, authentication, error handling, and best practices for working with the MongoNext API.

## 1. Authentication
- Most endpoints require authentication via NextAuth.js (session or JWT).
- Admin-only endpoints require the user to have an `admin` role.
- Pass authentication tokens via cookies (handled automatically by NextAuth.js) or in the `Authorization` header for API requests.

## 2. Request/Response Format
- All endpoints accept and return JSON.
- Use appropriate HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
- Always set `Content-Type: application/json` for requests with a body.

## 3. Error Handling
- Errors are returned with appropriate HTTP status codes (`400`, `401`, `403`, `404`, `500`).
- Error responses include a message field for debugging.

**Example:**
```json
{
  "error": "Unauthorized",
  "message": "You must be signed in to access this resource."
}
```

## 4. Rate Limiting
- Sensitive endpoints (auth, user management) should implement rate limiting to prevent abuse.
- Use libraries like [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) or similar in custom API routes.

## 5. Security Tips
- Always validate and sanitize input on both client and server.
- Never expose sensitive data (passwords, tokens) in API responses.
- Use HTTPS in production to encrypt all traffic.

## 6. Versioning
- For breaking changes, consider versioning your API endpoints (e.g., `/api/v1/products`).

---

For details on specific endpoints, see the other API documentation sections. 