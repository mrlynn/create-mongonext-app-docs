---
id: user-endpoints
title: User Endpoints
sidebar_label: 📓 User Endpoints
---

# User Endpoints

MongoNext provides RESTful API endpoints for managing users. These endpoints support listing users, retrieving user details, updating user info, and deleting users (admin only for sensitive actions).

## 1. List Users
- **Endpoint:** `/api/users`
- **Method:** `GET`
- **Description:** Returns a list of all registered users (admin only).
- **Response:**
  ```json
  [
    { "_id": "...", "name": "Jane Doe", "email": "jane@example.com", ... },
    ...
  ]
  ```

## 2. Get User by ID
- **Endpoint:** `/api/users/{id}`
- **Method:** `GET`
- **Description:** Returns details for a single user (admin or the user themselves).
- **Response:**
  ```json
  { "_id": "...", "name": "Jane Doe", "email": "jane@example.com", ... }
  ```

## 3. Update User
- **Endpoint:** `/api/users/{id}`
- **Method:** `PUT`
- **Description:** Updates user information (admin or the user themselves).
- **Request Body:**
  ```json
  { "name": "New Name", "role": "admin" }
  ```
- **Response:**
  - 200 OK with updated user info
  - 400 Bad Request on validation error

## 4. Delete User
- **Endpoint:** `/api/users/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a user by ID (admin only).
- **Response:**
  - 204 No Content on success
  - 404 Not Found if user does not exist

---

**Notes:**
- Listing, updating, and deleting users requires admin authentication (except for self-updates).
- Never expose sensitive fields (password hashes, tokens) in API responses.
- Validate all input and handle errors gracefully.

_Coming soon!_ 