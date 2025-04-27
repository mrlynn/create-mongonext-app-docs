---
id: data-operations
title: Data Operations
sidebar_label: 💾 Data Operations
---

# Data Operations

MongoNext uses Mongoose to perform CRUD (Create, Read, Update, Delete) operations on MongoDB collections. This section covers how to interact with your data, validate input, handle errors, and ensure efficient database connections.

## 1. CRUD Operations

### Create
```js
const product = new Product({ name: 'Shirt', price: 29.99 });
await product.save();
```

### Read
```js
const products = await Product.find({ category: 'clothing' });
```

### Update
```js
await Product.updateOne({ _id: id }, { $set: { price: 24.99 } });
```

### Delete
```js
await Product.deleteOne({ _id: id });
```

## 2. Data Validation
- Use Mongoose schema validation for required fields, data types, and custom logic.
- Example:
```js
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
```

## 3. Error Handling
- Always use try/catch blocks or `.catch()` for async operations.
- Return meaningful error messages to the client, but avoid exposing sensitive details.
- Example:
```js
try {
  const user = await User.create({ email, password });
} catch (err) {
  // Handle duplicate email, validation errors, etc.
}
```

## 4. Connection Pooling
- MongoNext uses a single, shared Mongoose connection for efficiency.
- The connection logic is typically in `src/app/lib/db.js` or similar.
- Example:
```js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!global.mongoose) {
  global.mongoose = mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
export default global.mongoose;
```

## 5. Best Practices
- Validate all input on both client and server.
- Use Mongoose middleware for pre-save hooks (e.g., password hashing).
- Paginate large queries to improve performance.
- Use indexes for frequently queried fields.

---

With these patterns, you can build robust, scalable data operations in your MongoNext app.

_Coming soon!_ 