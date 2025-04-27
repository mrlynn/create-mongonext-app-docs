---
id: mongodb-atlas
title: MongoDB Atlas Deployment
sidebar_label: 📓 MongoDB Atlas
---

# MongoDB Atlas Deployment

For production, it's important to secure and optimize your MongoDB Atlas cluster. This guide covers best practices for a robust, secure, and reliable deployment.

## 1. Security Configuration
- **Restrict IP Whitelist:** Only allow trusted IPs (e.g., Vercel, your office, or VPN). Avoid `0.0.0.0/0` in production.
- **Strong Database Users:** Use strong, unique passwords for all database users. Grant only the permissions needed (least privilege).
- **Enable TLS/SSL:** Atlas uses TLS by default—ensure your app connects securely.
- **Rotate Secrets:** Regularly update your database user passwords and environment secrets.

## 2. Backup Strategies
- **Enable Backups:** Use Atlas's built-in backup features (daily snapshots, point-in-time recovery for paid tiers).
- **Test Restores:** Periodically test restoring from backup to ensure your data is safe.
- **Monitor Storage:** Set up alerts for storage usage to avoid running out of space.

## 3. Performance & Scaling
- **Cluster Tier:** Choose a cluster tier that matches your production workload. Start with M0 (free) for testing, but upgrade for real traffic.
- **Indexes:** Add indexes to frequently queried fields (e.g., email, product/category IDs).
- **Connection Pooling:** Use a single, shared Mongoose connection (see Data Operations doc).
- **Monitor Performance:** Use Atlas's monitoring tools to track slow queries and resource usage.

## 4. Additional Tips
- **Set Environment Variables:** Make sure your production environment (e.g., Vercel) has the correct `MONGODB_URI` and secrets.
- **Audit Logs:** Enable and review Atlas audit logs for suspicious activity.
- **Compliance:** Use Atlas features for GDPR, HIPAA, or other compliance needs if required.

---

For more on deploying your app, see [Vercel Deployment](vercel.md) and [Performance Optimization](performance-optimization.md). 