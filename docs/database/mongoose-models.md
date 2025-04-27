---
id: mongoose-models
title: Mongoose Models
sidebar_label: 📓 Mongoose Models
---

# Mongoose Models

MongoNext uses [Mongoose](https://mongoosejs.com/) to define and interact with MongoDB collections. Each model represents a key entity in your application, such as users, products, blog posts, and categories.

## Main Models

### 1. User
Represents registered users, including authentication details and roles.
```js
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Hashed
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});
```

### 2. Product
Represents products in the catalog, with support for images, categories, and pricing.
```js
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  createdAt: { type: Date, default: Date.now },
});
```

### 3. BlogPost
Represents blog articles, supporting markdown content and author references.
```js
const BlogPostSchema = new mongoose.Schema({
  title: String,
  content: String, // Markdown
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});
```

### 4. Category
Represents product or blog categories for filtering and organization.
```js
const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
});
```

## Extending Models
- Add new fields or relationships by editing the schema in `src/app/models/`.
- Use Mongoose middleware for validation, hooks, or custom logic.
- Reference other models using `ref` for population (e.g., product categories, blog authors).

## Best Practices
- Always hash passwords before saving user documents.
- Use Mongoose validation for required fields and data types.
- Keep models organized in the `models/` directory for maintainability.

---

Continue to [Data Operations](data-operations.md) for CRUD and advanced data handling in MongoNext. 