---
id: blog-endpoints
title: Blog Endpoints
sidebar_label: ✍️ Blog Endpoints
---

# Blog Endpoints

MongoNext provides RESTful API endpoints for managing blog posts. These endpoints support listing, retrieving, creating, updating, and deleting blog articles.

## 1. List Blog Posts
- **Endpoint:** `/api/blog`
- **Method:** `GET`
- **Description:** Returns a list of all blog posts (optionally filtered by tag, author, or search).
- **Query Params:**
  - `tag` (optional): Filter by tag
  - `author` (optional): Filter by author ID
  - `search` (optional): Search by title/content
- **Response:**
  ```json
  [
    { "_id": "...", "title": "First Post", "author": { ... }, ... },
    ...
  ]
  ```

## 2. Get Blog Post by ID
- **Endpoint:** `/api/blog/{id}`
- **Method:** `GET`
- **Description:** Returns a single blog post by its ID.
- **Response:**
  ```json
  { "_id": "...", "title": "First Post", "content": "...", ... }
  ```

## 3. Create Blog Post
- **Endpoint:** `/api/blog`
- **Method:** `POST`
- **Description:** Creates a new blog post (admin only).
- **Request Body:**
  ```json
  { "title": "New Post", "content": "Markdown content...", "tags": ["news"] }
  ```
- **Response:**
  - 201 Created with blog post info
  - 400 Bad Request on validation error

## 4. Update Blog Post
- **Endpoint:** `/api/blog/{id}`
- **Method:** `PUT`
- **Description:** Updates an existing blog post (admin only).
- **Request Body:**
  ```json
  { "title": "Updated Title", "content": "Updated content..." }
  ```
- **Response:**
  - 200 OK with updated blog post info
  - 400 Bad Request on validation error

## 5. Delete Blog Post
- **Endpoint:** `/api/blog/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a blog post by ID (admin only).
- **Response:**
  - 204 No Content on success
  - 404 Not Found if blog post does not exist

---

**Notes:**
- Creating, updating, and deleting blog posts requires admin authentication.
- Validate all input and handle errors gracefully.
- Use pagination for large blog lists.

_Coming soon!_ 