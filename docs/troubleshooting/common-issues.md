---
id: common-issues
title: Common Issues
sidebar_label: 📓 Common Issues
---

# Common Issues

Frequently encountered issues and how to resolve them in MongoNext.

---

## 🌱 Seeding Troubleshooting

- **Seed command fails to connect to MongoDB Atlas:**
  - Double-check your `MONGODB_URI` in `.env.local`.
  - Ensure your IP is whitelisted in your Atlas cluster Network Access settings.
  - Make sure your cluster is running and not paused.
- **Demo data not appearing:**
  - Use the `--clear` flag to reset collections before seeding.
  - Check for errors in the CLI output for missing permissions or invalid URIs.

---

## ☁️ MongoDB Atlas Troubleshooting

- **Cannot connect to Atlas:**
  - Verify your connection string format and credentials.
  - Ensure your cluster is accessible from your current IP address.
  - Check Atlas dashboard for cluster health and network access errors.
- **Timeouts or slow connections:**
  - Try connecting from a different network.
  - Check for VPN/firewall issues.

---

## 🤖 OpenAI API Key Troubleshooting

- **OpenAI API key not found or invalid:**
  - Make sure `OPENAI_API_KEY` is set in your `.env.local` file.
  - The key should start with `sk-` and have no extra spaces or quotes.
  - If you see 401/403 errors, regenerate your key in the OpenAI dashboard.
- **API quota exceeded:**
  - Check your OpenAI account usage and limits.

---

## 🛑 Port Conflicts

- **App fails to start due to port in use:**
  - Default port is `3000`. Make sure nothing else is running on this port.
  - On macOS/Linux, run: `lsof -i :3000` to find and kill the process.
  - Or set a different port: `PORT=4000 npm run dev`

---

## ⚙️ Required `.env.local` Variables

Your `.env.local` file must include the following variables:

```env
# MongoDB connection string
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority

# NextAuth.js secret key - generate a secure random string
# You can generate one using `openssl rand -base64 32`
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Next Auth Site URL
NEXTAUTH_URL=http://localhost:3000

# Sample database (optional, for demos)
SAMPLE_MFLIX_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database?retryWrites=true&w=majority

# OpenAI API Key (if using AI features)
OPENAI_API_KEY=sk-...
```

- **All variables are required unless noted.**
- Restart your app after changing `.env.local`.
- Never commit your `.env.local` to version control.

---

If you encounter an issue not listed here, check the logs for error messages and consult the [MongoNext GitHub Issues](https://github.com/mrlynn/create-mongonext-app/issues) page for more help. 