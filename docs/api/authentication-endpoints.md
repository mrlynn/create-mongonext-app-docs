---
id: authentication-endpoints
title: Authentication Endpoints
sidebar_label: 📓 Authentication Endpoints
---

# Authentication Endpoints

MongoNext provides a set of API endpoints for authentication, powered by NextAuth.js. These endpoints handle login, logout, registration, and session management.

## 1. Login
- **Endpoint:** `/api/auth/signin`
- **Method:** `POST`
- **Description:** Authenticates a user with credentials or OAuth provider.
- **Request Body (credentials):**
  ```json
  { "email": "user@example.com", "password": "yourpassword" }
  ```
- **Response:**
  - 200 OK with session info or redirect
  - 401 Unauthorized on failure

## 2. Logout
- **Endpoint:** `/api/auth/signout`
- **Method:** `POST`
- **Description:** Logs out the current user and destroys the session.
- **Response:**
  - 200 OK

## 3. Register (if enabled)
- **Endpoint:** `/api/auth/signup` (custom, if implemented)
- **Method:** `POST`
- **Description:** Registers a new user with email and password.
- **Request Body:**
  ```json
  { "name": "Jane Doe", "email": "jane@example.com", "password": "yourpassword" }
  ```
- **Response:**
  - 201 Created with user info
  - 400 Bad Request on validation error

## 4. Session
- **Endpoint:** `/api/auth/session`
- **Method:** `GET`
- **Description:** Returns the current session (if authenticated).
- **Response:**
  ```json
  {
    "user": { "name": "Jane Doe", "email": "jane@example.com" },
    "expires": "2024-12-31T23:59:59.999Z"
  }
  ```

## 5. OAuth Providers
- **Endpoint:** `/api/auth/{provider}` (e.g., `/api/auth/google`)
- **Method:** `GET`
- **Description:** Initiates OAuth login flow for the specified provider.

---

**Notes:**
- All authentication endpoints are managed by NextAuth.js and may be customized in your project.
- Protect sensitive endpoints and validate all input.
- See [NextAuth.js API docs](https://next-auth.js.org/getting-started/rest-api) for more details. 