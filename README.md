# API Documentation: Tech Talk Blog

## Overview

The **Tech Talk Blog API** is a backend service built with Node.js, Express, and MongoDB. It provides endpoints for managing blog posts, subscriptions, comments, and more. The API leverages Firebase, Multer for file uploads, and additional tools for enhanced functionality.

---

## Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
- **Firebase configuration** (if applicable)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-user-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables in a `.env` file:
   ```
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   FIREBASE_CONFIG=<your-firebase-config>
   ```
5. Start the server:
   - Development mode:
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

---

## Dependencies

| Package            | Version   | Description                                           |
|--------------------|-----------|-------------------------------------------------------|
| `express`          | `^4.19.2` | Web framework for building RESTful APIs.             |
| `mongoose`         | `^8.5.1`  | MongoDB object modeling for Node.js.                 |
| `multer`           | `^1.4.5`  | Middleware for handling `multipart/form-data`.       |
| `dotenv`           | `^16.4.5` | Loads environment variables from `.env`.             |
| `firebase`         | `^11.0.1` | Firebase integration for authentication and storage. |
| `node-cron`        | `^3.0.3`  | Scheduler for running tasks periodically.            |
| `@faker-js/faker`  | `^8.4.1`  | Library for generating fake data (e.g., names, posts).|
| `cors`             | `^2.8.5`  | Middleware for enabling CORS.                        |
| `nodemon`          | `^3.1.4`  | Utility for auto-restarting the server during development. |

---

## API Endpoints

### 1. Posts

#### **GET /api/posts**
Retrieve all published blog posts.

- **Response:**
  ```json
  [
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "author": "string",
      "status_post": "published",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
  ```

#### **GET /api/posts/:id**
Retrieve a specific blog post by ID.

- **Response:**
  ```json
  {
    "_id": "string",
    "title": "string",
    "content": "string",
    "author": "string",
    "status_post": "published",
    "createdAt": "date",
    "updatedAt": "date"
  }
  ```

#### **POST /api/posts**
Create a new blog post.

- **Request Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "author": "string",
    "status_post": "published"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Post created successfully",
    "post": {
      "_id": "string",
      "title": "string",
      "content": "string",
      "author": "string",
      "status_post": "published",
      "createdAt": "date",
      "updatedAt": "date"
    }
  }
  ```

#### **PUT /api/posts/:id**
Update a specific blog post.

- **Request Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "status_post": "published"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Post updated successfully",
    "post": {
      "_id": "string",
      "title": "string",
      "content": "string",
      "status_post": "published",
      "createdAt": "date",
      "updatedAt": "date"
    }
  }
  ```

#### **DELETE /api/posts/:id**
Delete a specific blog post by ID.

- **Response:**
  ```json
  {
    "message": "Post deleted successfully"
  }
  ```

---

### 2. Comments

#### **GET /api/comments/:postId**
Retrieve all comments for a specific post.

- **Response:**
  ```json
  [
    {
      "_id": "string",
      "postId": "string",
      "user": "string",
      "text": "string",
      "createdAt": "date"
    }
  ]
  ```

#### **POST /api/comments**
Add a comment to a post.

- **Request Body:**
  ```json
  {
    "postId": "string",
    "user": "string",
    "text": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Comment added successfully",
    "comment": {
      "_id": "string",
      "postId": "string",
      "user": "string",
      "text": "string",
      "createdAt": "date"
    }
  }
  ```

---

### 3. Subscriptions

#### **POST /api/subscriptions**
Subscribe to updates.

- **Request Body:**
  ```json
  {
    "email_subscription": "string",
    "whats_app_subscription": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Subscription created successfully",
    "subscription": {
      "_id": "string",
      "email_subscription": "string",
      "whats_app_subscription": "string",
      "createdAt": "date"
    }
  }
  ```

---

### 4. Utility Endpoints

#### **GET /api/userId**
Generate a new user ID.

- **Response:**
  ```json
  {
    "userId": "string"
  }
  ```

#### **DELETE /api/messages**
Delete all messages.

- **Response:**
  ```json
  {
    "message": "All messages deleted successfully"
  }
  ```

---

## Environment Variables

| Variable         | Description                    | Example                      |
|------------------|--------------------------------|------------------------------|
| `PORT`           | Server port                   | `3000`                       |
| `MONGO_URI`      | MongoDB connection string      | `mongodb://localhost:27017`  |
| `FIREBASE_CONFIG`| Firebase configuration object  | JSON string                  |

---

## License

This project is licensed under the **MIT License**.

For contributions or issues, feel free to submit a pull request or raise an issue in the repository.

