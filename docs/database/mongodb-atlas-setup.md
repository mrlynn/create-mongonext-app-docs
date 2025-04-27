---
id: mongodb-atlas-setup
title: MongoDB Atlas Setup
sidebar_label: 📓 MongoDB Atlas Setup
---

# MongoDB Atlas Setup

MongoNext uses [MongoDB Atlas](https://www.mongodb.com/atlas) as its cloud database. Follow these steps to set up your Atlas cluster and connect it to your app.

## 1. Create a MongoDB Atlas Account
- Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and sign up for a free account.

## 2. Create a New Cluster
- Click **Build a Database** and choose the free tier (Shared Cluster).
- Select your preferred cloud provider and region.
- Click **Create Cluster** (it may take a few minutes).

## 3. Add a Database User
- In the Atlas dashboard, go to **Database Access**.
- Click **Add New Database User**.
- Set a username and password (save these for your `.env.local`).
- Grant **Read and Write to any database**.

## 4. Whitelist Your IP Address
- Go to **Network Access** in the Atlas dashboard.
- Click **Add IP Address**.
- For development, you can use `0.0.0.0/0` (allows all IPs), but restrict this in production.

## 5. Get Your Connection String
- In the Atlas dashboard, go to **Clusters** > **Connect** > **Connect your application**.
- Copy the connection string (it looks like `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority`).
- Replace `<user>`, `<password>`, and `<dbname>` with your values.
- Paste this string as `MONGODB_URI` in your `.env.local` file.

## 6. Test the Connection
- Start your app with `npm run dev`.
- If the connection is successful, your app will connect to MongoDB Atlas automatically.

---

**Security Tips:**
- Never commit your connection string to version control.
- Use strong passwords for your database users.
- Restrict IP access in production to only trusted sources.

Continue to [Mongoose Models](mongoose-models.md) for details on how data is structured in MongoNext. 