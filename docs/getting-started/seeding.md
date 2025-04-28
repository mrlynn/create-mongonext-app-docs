---
id: seeding
title: Seeding Your Database
sidebar_label: "🌱 Seeding Demo Data"
---

# 🌱 Seeding Your Database with Demo Data

MongoNext includes a CLI command to quickly populate your MongoDB Atlas database with demo data for development and testing.

---

## How to Use

1. **Run the seed command:**
   ```bash
   npm run seed
   ```
   You will be prompted for your MongoDB Atlas connection URI.

2. **(Optional) Clear existing data before seeding:**
   ```bash
   npm run seed -- --clear
   ```
   This will delete all existing documents in the `categories`, `products`, `blogposts`, and `ragdocuments` collections before inserting demo data.

3. **(Optional) Provide the URI as a flag:**
   ```bash
   npm run seed -- --uri="your_mongodb_atlas_connection_string"
   ```

---

## What Gets Seeded?

- **Categories:** Example categories for products and blogs.
- **Products:** Sample products with images and prices.
- **Blog Posts:** Demo blog articles with categories and content.
- **RagDocuments:** Example document metadata (no file processing).

---

## Why Seed?

- Instantly see a working dashboard and UI with real-looking data.
- Test features and UI without manual data entry.
- Great for demos, onboarding, and local development.

---

## Notes

- The seed data is for development and demo purposes only.
- You can safely run the seed command multiple times; use `--clear` to reset collections.
- The seed command does **not** process or upload files for RagDocuments—it only creates metadata.

---

## Need Help?

If you have questions or want to customize the seed data, check the CLI documentation or [open an issue on GitHub](https://github.com/yourusername/mongonext/issues)! 