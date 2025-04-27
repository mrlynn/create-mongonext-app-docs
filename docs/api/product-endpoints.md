---
id: product-endpoints
title: Product Endpoints
sidebar_label: 🛍️ Product Endpoints
---

# Product Endpoints

MongoNext provides RESTful API endpoints for managing products in your catalog. These endpoints support listing, retrieving, creating, updating, and deleting products.

## 1. List Products
- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Description:** Returns a list of all products (optionally filtered by category, search, etc.).
- **Query Params:**
  - `category` (optional): Filter by category ID
  - `search` (optional): Search by product name/description
- **Response:**
  ```json
  [
    { "_id": "...", "name": "Shirt", "price": 29.99, ... },
    ...
  ]
  ```

## 2. Get Product by ID
- **Endpoint:** `/api/products/{id}`
- **Method:** `GET`
- **Description:** Returns a single product by its ID.
- **Response:**
  ```json
  { "_id": "...", "name": "Shirt", "price": 29.99, ... }
  ```

## 3. Create Product
- **Endpoint:** `/api/products`
- **Method:** `POST`
- **Description:** Creates a new product (admin only).
- **Request Body:**
  ```json
  { "name": "Shirt", "price": 29.99, "category": "...", "image": "..." }
  ```
- **Response:**
  - 201 Created with product info
  - 400 Bad Request on validation error

## 4. Update Product
- **Endpoint:** `/api/products/{id}`
- **Method:** `PUT`
- **Description:** Updates an existing product (admin only).
- **Request Body:**
  ```json
  { "name": "New Name", "price": 24.99 }
  ```
- **Response:**
  - 200 OK with updated product info
  - 400 Bad Request on validation error

## 5. Delete Product
- **Endpoint:** `/api/products/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a product by ID (admin only).
- **Response:**
  - 204 No Content on success
  - 404 Not Found if product does not exist

---

**Notes:**
- Creating, updating, and deleting products requires admin authentication.
- Validate all input and handle errors gracefully.
- Use pagination for large product lists.

_Coming soon!_ 