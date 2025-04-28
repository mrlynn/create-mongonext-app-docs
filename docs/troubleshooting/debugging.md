---
id: debugging
title: Debugging Tips
sidebar_label: 🪲 Debugging
---

# Debugging Tips

Tips and best practices for debugging MongoNext applications.

---

## 1. Check Application Logs
- **Next.js logs:**
  - Errors and warnings are printed in your terminal when running `npm run dev`, `npm run build`, or `npm run start`.
  - Look for stack traces, missing environment variables, or failed imports.
- **Browser console:**
  - Open DevTools (F12) and check the Console tab for frontend errors, failed network requests, or CORS issues.

---

## 2. Enable Verbose Logging
- Set `DEBUG=*` in your `.env.local` to enable verbose logging for many Node.js libraries.
- For Mongoose/MongoDB, you can set `MONGOOSE_DEBUG=true` (if supported) to log queries.

---

## 3. Validate Environment Variables
- Run `echo $VARIABLE_NAME` in your terminal to check if variables are loaded.
- Use a tool like [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) to print all loaded variables:
  ```bash
  npx dotenv -e .env.local -- printenv
  ```

---

## 4. Check Network and API Connectivity
- Use `ping`, `curl`, or `telnet` to test connectivity to MongoDB Atlas or external APIs.
- Example:
  ```bash
  curl https://api.openai.com/v1/models -H "Authorization: Bearer $OPENAI_API_KEY"
  ```

---

## 5. Common Debugging Commands
- **Check running processes on a port:**
  ```bash
  lsof -i :3000
  ```
- **Check MongoDB Atlas connection:**
  ```bash
  mongosh "<your-mongodb-uri>"
  ```

---

## 6. Check Build Artifacts
- If the app works in dev but not in production, check the `.next` and `build` folders for errors or missing files.

---

## 7. Update Dependencies
- Sometimes, bugs are caused by outdated packages. Run:
  ```bash
  npm outdated
  npm update
  ```

---

## 8. Reproduce with Minimal Setup
- Comment out custom code and reintroduce features one by one to isolate the problem.

---

## 9. Consult Logs in Deployment Environments
- If deploying to Vercel, Netlify, or similar, check their dashboard logs for build/runtime errors.

---

## 10. Useful Resources
- [Next.js Debugging Docs](https://nextjs.org/docs/advanced-features/debugging)
- [MongoDB Atlas Troubleshooting](https://www.mongodb.com/docs/atlas/troubleshoot-connection/)
- [OpenAI API Troubleshooting](https://platform.openai.com/docs/guides/error-codes)

---

If you're stuck, check the logs, review your environment variables, and consult the resources above. For persistent issues, open an issue on [GitHub](https://github.com/mrlynn/create-mongonext-app/issues) with details and error messages. 