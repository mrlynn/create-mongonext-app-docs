---
id: quickstart
title: Quickstart
sidebar_label: 🚀 Quickstart
---

# Quickstart

Get up and running with MongoNext in just a few minutes!

## 1. Scaffold a New Project

Open your terminal and run:

```bash
npx create-mongonext-app@latest my-app
cd my-app
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
MONGODB_URI=your-mongodb-atlas-connection-string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret
```

- [How to get your MongoDB Atlas connection string](https://www.mongodb.com/docs/atlas/getting-started/)
- Generate a random secret: `openssl rand -base64 32`

## 4. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see your new MongoNext app!

---

For more details, see the [Installation Guide](installation.md) and [Environment Setup](environment-setup.md). 