---
id: vercel
title: Vercel Deployment
sidebar_label: 📓 Vercel Deployment
---

# Vercel Deployment

MongoNext is optimized for deployment on [Vercel](https://vercel.com/), the recommended platform for Next.js applications.

## 1. Connect Your Repository
- Push your MongoNext project to GitHub, GitLab, or Bitbucket.
- Go to [vercel.com/import](https://vercel.com/import) and import your repository.

## 2. Set Environment Variables
- In the Vercel dashboard, go to your project's **Settings > Environment Variables**.
- Add the following variables (copy from your `.env.local`):
  - `MONGODB_URI`
  - `NEXTAUTH_URL` (set to your Vercel domain, e.g., `https://your-app.vercel.app`)
  - `NEXTAUTH_SECRET`
  - Any OAuth provider secrets (e.g., `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`)

## 3. Deploy
- Click **Deploy** in the Vercel dashboard.
- Vercel will build and deploy your app automatically.
- After deployment, your app will be live at `https://your-app.vercel.app`.

## 4. Best Practices
- Use the **Production** environment for your live app, and **Preview** for branches/PRs.
- Restrict MongoDB Atlas IP whitelist to Vercel's IPs for security.
- Monitor logs and analytics in the Vercel dashboard.
- Set up custom domains as needed.

## 5. Troubleshooting
- If you see build errors, check your environment variables and MongoDB Atlas connection.
- Ensure your MongoDB Atlas cluster is accessible from Vercel (update IP whitelist if needed).
- Review [Vercel's Next.js docs](https://vercel.com/docs/concepts/frameworks/next-js) for more tips.

---

For more on production database setup, see [MongoDB Atlas Deployment](mongodb-atlas.md). 