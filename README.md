# Notes Management System - Backend API

## Overview

This project is the backend implementation of a **Notes Management System** built using:

* Node.js
* Express.js
* MongoDB
* Mongoose

The application allows users to:

* Create Notes
* View All Notes
* View Single Note
* Update Notes
* Delete Notes
* Search Notes by Title or Content

The backend follows REST API principles and includes validation, error handling, MongoDB integration, and sorting functionality.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* cors
* nodemon

---

# Features

## Notes Management

* Create multiple notes
* View all notes
* View single note details
* Edit existing notes
* Delete notes
* Search notes

## Validation

* Title is required
* Content is required
* Proper error messages

## Database

* MongoDB
* Mongoose ODM
* CRUD Operations
* Search Support

## Additional Features

* Automatic createdAt timestamp
* Automatic updatedAt timestamp
* Sort notes by recently updated
* RESTful API design
* Error handling

---

# Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── noteController.js
│
├── models/
│   └── Note.js
│
├── routes/
│   └── noteRoutes.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

```bash
cd backend
```

---

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

## Local MongoDB

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/notes_management
```

## MongoDB Atlas

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string
```

---

# Running the Application

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

Server starts on:

```text
http://localhost:5000
```

---

# Database Schema

## Note Model

```js
{
  title: String,
  content: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

# API Endpoints

Base URL

```text
http://localhost:5000/api/notes
```

---

# 1. Create Note

Creates a new note.

### Endpoint

```http
POST /api/notes
```

### Request Body

```json
{
  "title": "Learning NodeJS",
  "content": "Building REST APIs using Express"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "687001122334455",
    "title": "Learning NodeJS",
    "content": "Building REST APIs using Express",
    "createdAt": "2026-06-14T10:00:00.000Z",
    "updatedAt": "2026-06-14T10:00:00.000Z"
  }
}
```

### Validation Error

```json
{
  "success": false,
  "message": "Title is required"
}
```

---

# 2. Get All Notes

Returns all notes sorted by recently updated.

### Endpoint

```http
GET /api/notes
```

### Success Response

```json
{
  "success": true,
  "count": 2,
  "data": []
}
```

---

# 3. Get Single Note

Returns details of a specific note.

### Endpoint

```http
GET /api/notes/:id
```

### Example

```http
GET /api/notes/687001122334455
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "687001122334455",
    "title": "Learning NodeJS",
    "content": "Building REST APIs using Express"
  }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

# 4. Update Note

Updates note title and/or content.

### Endpoint

```http
PUT /api/notes/:id
```

### Request Body

```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "_id": "687001122334455",
    "title": "Updated Title",
    "content": "Updated Content"
  }
}
```

---

# 5. Delete Note

Deletes a note permanently.

### Endpoint

```http
DELETE /api/notes/:id
```

### Success Response

```json
{
  "success": true,
  "message": "Note deleted successfully"
}
```

### Error Response

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

# 6. Search Notes

Search notes by title or content.

### Endpoint

```http
GET /api/notes/search?keyword=node
```

### Example

```http
GET /api/notes/search?keyword=node
```

### Search Explanation

The API searches both:

* title
* content

using MongoDB Regular Expressions.

The search is:

* Case-insensitive
* Partial match supported

Examples:

```text
node
Node
NODE
NoDe
```

All return matching notes.

### Success Response

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "687001122334455",
      "title": "Learning NodeJS",
      "content": "NodeJS Backend Development"
    },
    {
      "_id": "687001122334466",
      "title": "Express Tutorial",
      "content": "REST APIs using NodeJS"
    }
  ]
}
```

### No Results

```json
{
  "success": true,
  "count": 0,
  "data": []
}
```

---

# HTTP Status Codes Used

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Resource Created      |
| 400         | Validation Error      |
| 404         | Resource Not Found    |
| 500         | Internal Server Error |

---

# Postman Testing

## Create Note

```http
POST http://localhost:5000/api/notes
```

Body:

```json
{
  "title": "MongoDB Notes",
  "content": "Learning Mongoose"
}
```

---

## Get All Notes

```http
GET http://localhost:5000/api/notes
```

---

## Get Single Note

```http
GET http://localhost:5000/api/notes/<note-id>
```

---

## Update Note

```http
PUT http://localhost:5000/api/notes/<note-id>
```

Body:

```json
{
  "title": "Updated MongoDB Notes",
  "content": "Updated Content"
}
```

---

## Delete Note

```http
DELETE http://localhost:5000/api/notes/<note-id>
```

---

## Search Notes

```http
GET http://localhost:5000/api/notes/search?keyword=node
```

---

# Sample Workflow

1. Create a note
2. Create another note
3. Get all notes
4. Search notes using keyword
5. Get single note
6. Update note
7. Verify updatedAt changes
8. Delete note
9. Verify note removed from database

---

# Assignment Requirements Covered

✅ Create Multiple Notes

✅ View All Notes

✅ View Single Note

✅ Edit Note

✅ Delete Note

✅ Search Notes

✅ MongoDB Database Integration

✅ Mongoose ODM

✅ Validation

✅ Error Handling

✅ Sort by Recently Updated

✅ createdAt Timestamp

✅ updatedAt Timestamp

✅ RESTful APIs

✅ Production Folder Structure

---

# Author

Satyam Sawant

Full Stack Developer

Node.js | Express.js | MongoDB | React.js
