---
id: rag-chatbot
title: RAG Chatbot Setup & Capabilities
sidebar_label: 🤖 RAG Chatbot
---

# RAG Chatbot Setup & Capabilities

## Overview

The RAG (Retrieval-Augmented Generation) Chatbot is an AI-powered assistant integrated into your MongoNext app. It leverages your own documents (RAG Documents) and combines them with OpenAI's LLMs to answer user questions with contextually relevant, up-to-date information.

---

## Features

- **Floating Chatbot UI**: Accessible from any page, with expand/collapse functionality for a larger chat window.
- **Semantic Search**: Uses OpenAI embeddings and MongoDB Atlas Vector Search to find the most relevant document chunks for a user's question.
- **LLM Synthesis**: Sends the retrieved context and user question to OpenAI's GPT model to generate a conversational, markdown-formatted answer.
- **Markdown Rendering**: Bot responses are rendered as markdown, supporting headings, lists, code, links, and more.
- **Admin Controls**: Admins can manage RAG documents and vector index settings from the admin dashboard.

---

## Administrative Features

### RAG Document Management
- **Upload Documents**: Admins can upload new documents (PDF, Markdown, HTML, TXT, etc.) via the **Admin > RAG > RAG Documents** page.
- **View & Delete**: Uploaded documents are listed with metadata (title, type, upload date, etc.), and can be deleted if needed.

### Processing & Chunk Creation
- **Process Documents**: After uploading, admins can trigger processing for each document. This will:
  1. Extract the text content from the document.
  2. Split the content into manageable chunks using the app's chunking strategy.
  3. For each chunk, generate an OpenAI embedding and store it in the database.
- **Chunk Management**: Each processed document is associated with its chunks, which are used for vector search and retrieval.
- **Status Feedback**: The admin UI provides feedback on processing status and chunk counts for each document.

### Vector Index Management
- **Check/Create Vector Index**: Admins can check if the required MongoDB Atlas vector index exists and create it if needed from the **Admin > RAG > RAG Settings** page.

---

## Setup Instructions

### 1. **Environment Variables**
Ensure the following are set in your `.env.local`:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
OPENAI_API_KEY=your_openai_api_key
ATLAS_GROUP_ID=your_atlas_project_id
ATLAS_CLUSTER_NAME=your_atlas_cluster_name
ATLAS_API_PUBLIC_KEY=your_atlas_public_key
ATLAS_API_PRIVATE_KEY=your_atlas_private_key
ATLAS_DB_NAME=your_database_name
```

### 2. **MongoDB Atlas Vector Index**
- The chatbot requires a vector index on the `ragchunks` collection, field `embedding`, named `default`.
- You can check and create this index from the **Admin > RAG > RAG Settings** page.

### 3. **Uploading and Processing Documents**
- Upload documents via the **Admin > RAG > RAG Documents** page.
- After upload, process each document to split it into chunks and generate embeddings (uses OpenAI API).
- Each chunk will be stored with its embedding in MongoDB.

### 4. **Chatbot Usage**
- The floating chatbot appears on all pages.
- Users can ask questions in natural language.
- The chatbot will:
  1. Search for the most relevant chunks using vector search.
  2. Send the context and question to OpenAI's GPT model.
  3. Display a markdown-formatted answer.
- Users can expand the chatbot window for a better view.

### 5. **Supported Document Formats**
- The system is designed to work with a variety of document formats (PDF, Markdown, HTML, TXT, etc.).
- Regardless of the original format, the chatbot's answers are always formatted as markdown for clarity and readability.

---

## Customization & Extensibility
- You can adjust the chunking strategy, embedding model, or LLM prompt in the codebase.
- Markdown rendering can be further customized (e.g., syntax highlighting, tables, etc.).
- The chatbot UI is built with Material UI and can be styled or extended as needed.

---

## Troubleshooting
- **No Answers/Errors**: Ensure embeddings are generated for all chunks and the vector index exists.
- **OpenAI Errors**: Check your API key and usage limits.
- **Formatting Issues**: The chatbot uses markdown rendering; ensure your documents are processed and chunked correctly.

---

## For Documentation Writers
- Review and expand these instructions as needed.
- Add screenshots or GIFs of the chatbot in use.
- Document any customizations or advanced use cases implemented in your project. 