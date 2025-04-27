---
id: project-architecture
title: Project Architecture
sidebar_label: 📓 Project Architecture
---

# Project Architecture

MongoNext is organized to provide a clean, scalable foundation for full-stack applications. Below is an overview of the main project structure and how the core pieces fit together.

## Folder Structure

```
template/
├── src/
│   ├── app/
│   │   ├── components/      # Navbar, Footer, shared UI
│   │   ├── admin/           # Admin dashboard pages
│   │   ├── products/        # Product catalog
│   │   ├── blog/            # Blog pages
│   │   ├── api/             # API routes (Next.js)
│   │   ├── terms/           # Terms of Service page
│   │   ├── privacy/         # Privacy Policy page
│   │   ├── models/          # Mongoose models
│   │   ├── lib/             # DB connection, helpers
│   ├── .env.local.example   # Example environment variables
│   ├── .gitignore
│   ├── README.md
```

## Key Directories

- **app/**: Uses Next.js App Router for routing, layouts, and server components.
- **components/**: Shared React components (header, footer, forms, etc.) using Material UI.
- **admin/**: Admin dashboard pages for managing products, users, categories, and blog posts.
- **products/**: Product catalog and related pages.
- **blog/**: Blog system with markdown support.
- **api/**: API routes for CRUD operations, authentication, etc. (Next.js API routes).
- **models/**: Mongoose models for MongoDB collections (User, Product, BlogPost, Category, etc.).
- **lib/**: Utility functions, database connection logic, and helpers.

## Architecture Highlights

- **Next.js App Router**: Modern file-based routing, layouts, and server components for scalable apps.
- **Material UI**: All UI is built with Material UI for consistency and easy customization.
- **MongoDB Atlas + Mongoose**: Data is persisted in MongoDB Atlas using Mongoose models and schemas.
- **NextAuth.js**: Handles authentication, session management, and social login providers.
- **API Routes**: RESTful endpoints for products, users, authentication, and more.

---

Continue to [Key Features](key-features.md) for a summary of what MongoNext provides out of the box. 