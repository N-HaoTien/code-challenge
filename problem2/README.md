# code-challenge problem 5

# Problem2 Project

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Environment Setup](#environment-setup)
5. [Docker Setup](#docker-setup)
6. [Prisma Setup](#prisma-setup)
7. [Running the API](#running-the-api)
8. [API Endpoints](#api-endpoints)

---

## Project Overview

This is a **Node.js + TypeScript + Express API** project with **PostgreSQL** as the database and **Prisma** as the ORM. It supports CRUD operations for `Resource` entities.

---

## Prerequisites

* Node.js >= 20
* npm >= 9
* Docker & Docker Compose
* PostgreSQL client (optional, for DB management)

---

## Project Structure

```
problem2/
├─ src/
│  ├─ controllers/       # Controllers
│  ├─ database/          # Database connection and Prisma setup
│  ├─ middlewares/       # Express middlewares
│  ├─ routes/            # API routes
│  ├─ services/          # Business logic
│  └─ server.ts          # Entry point
├─ tests/                # Test files
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## Environment Setup

1. Create`.env` file in the root directory:

```
DATABASE_URL=postgresql://username:password@host:5432/problem2db
NODE_ENV=development
PORT=5002
```

2. Install dependencies:

```bash
npm install
```

---

## Docker Setup

### 1️⃣ Build and start containers

```bash
docker-compose up --build
```

* `problem2-db` → PostgreSQL database
* `problem2-app` → Node.js API server

### 2️⃣ Stop containers

```bash
docker-compose down
```

---

## Prisma Setup

Ensure DATABASE_URL matches your Docker database service name (`problem2-db`).

1. Generate Prisma client:

```bash
npx prisma generate
```

2. Apply database migrations (if any):

```bash
npx prisma migrate dev --name init
```

---

## Running the API

Start the server (local dev mode):

```bash
npm run dev:setup
```

* Server listens on `http://localhost:5002`

---

## API Endpoints

### 1️⃣ Test Endpoint

```bash
curl http://localhost:5002/api/test
```

**Response:**

```json
{
  "message": "API is working!"
}
```

---

### 2️⃣ Resources CRUD

#### Get all resources

```bash
curl http://localhost:5002/api/resource
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "Test Resource",
    "description": "Sample description",
    "createdAt": "2025-10-02T05:00:00.000Z",
    "updatedAt": "2025-10-02T05:00:00.000Z"
  }
]
```

#### Get single resource by ID

```bash
curl http://localhost:5002/api/resource/1
```

#### Create a new resource

```bash
curl -X POST http://localhost:5002/api/resource \
-H "Content-Type: application/json" \
-d '{"name": "New Resource", "description": "Example"}'
```

#### Update a resource

```bash
curl -X PUT http://localhost:5002/api/resource/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Resource", "description": "Updated"}'
```

#### Delete a resource

```bash
curl -X DELETE http://localhost:5002/api/resource/1
```
