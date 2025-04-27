---
id: installation
title: Installation Guide
sidebar_label: 📓 Installation
---

# Installation Guide

MongoNext can be installed quickly using the `create-mongonext-app` CLI, or you can set up the template manually for development and customization.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier available)

---

## Quick Start (Recommended)

To create a new project using MongoNext, run:

```bash
npx create-mongonext-app@latest my-app
cd my-app
npm install
npm run dev
```

This will scaffold a new project in the `my-app` directory with all dependencies and structure set up for you.

---

## Manual Setup (For Contributors)

If you want to clone and develop the template itself:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mongonext.git
   cd mongonext
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables**
   - Create a `.env.local` file in the root directory and add:
     ```env
     MONGODB_URI=your-mongodb-atlas-connection-string
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your-random-secret
     ```
4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

Continue to [Environment Setup](environment-setup.md) for details on configuring your environment and connecting to MongoDB Atlas. 