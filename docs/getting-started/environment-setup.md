---
id: environment-setup
title: Environment Setup
sidebar_label: 📓 Environment Setup
---

# Environment Setup

Proper environment setup is essential for running MongoNext locally and in production. This guide covers configuring environment variables, connecting to MongoDB Atlas, and preparing your development environment.

## 1. Environment Variables

MongoNext uses a `.env.local` file to manage sensitive configuration. In your project root, create a file named `.env.local` and add the following:

```env
MONGODB_URI=your-mongodb-atlas-connection-string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

- **MONGODB_URI**: Your MongoDB Atlas connection string. [How to get this?](https://www.mongodb.com/docs/atlas/getting-started/)
- **NEXTAUTH_URL**: The base URL of your app (use `http://localhost:3000` for local development).
- **NEXTAUTH_SECRET**: A random string used to sign authentication tokens. You can generate one with `openssl rand -base64 32`.

## 2. MongoDB Atlas Setup

1. **Create a free MongoDB Atlas account** at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. **Create a new cluster** (the free tier is fine for development).
3. **Add a database user** with read/write access.
4. **Whitelist your IP address** (or 0.0.0.0/0 for development, but restrict in production).
5. **Get your connection string** from the Atlas dashboard and use it as `MONGODB_URI` in your `.env.local`.

## 3. Local Development Tips

- Restart your dev server after changing environment variables.
- Never commit `.env.local` to version control (it's in `.gitignore` by default).
- For production, set these variables in your deployment platform (e.g., Vercel dashboard).

---

You are now ready to run MongoNext locally! Continue to the next section for a deep dive into the project architecture and core concepts. 