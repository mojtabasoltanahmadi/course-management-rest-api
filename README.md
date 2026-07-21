![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
<!-- ![GitHub last commit](https://img.shields.io/github/last-commit/mojtabasoltanahmadi/course-management-rest-api) -->


<h1 align="center">Course Management REST API</h1> 

<p align="center">
Scalable RESTful API for an online learning platform built with Node.js, Express.js and MongoDB.
</p>

<!-- # 🎓 Course Management REST API -->

A scalable RESTful API for an online course management platform built with **Node.js**, **Express.js**, and **MongoDB**.

The project follows a modular architecture with authentication, authorization, request validation, and clean separation of concerns.

---

## ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 👑 Role-Based Authorization (Admin / User)
- 📚 Course Management
- 📝 Article Management
- 💬 Comment System
- 🏷️ Categories
- 🔔 Notifications
- 🎫 Ticket System
- 🎁 Discount (Off) Codes
- 📩 Contact Us
- 🔍 Search API
- 📧 Email Sending with Nodemailer
- ✅ Request Validation
- 🛡️ Middleware-Based Security
- 🌐 RESTful API

---

## 🛠 Tech Stack

| Technology | Description |
|------------|-------------|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| Nodemailer | Email Service |
| dotenv | Environment Variables |
| Express Validator | Input Validation |
| Git & GitHub | Version Control |

---

## 📁 Project Structure

```text
course-management-rest-api
│
├── config/
├── controllers/
│   └── v1/
├── middlewares/
├── models/
├── routes/
│   └── v1/
├── utils/
├── validators/
├── .env.example
├── app.js
├── package.json
└── README.md
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/mojtabasoltanahmadi/course-management-rest-api.git
```

Navigate to the project directory:

```bash
cd course-management-rest-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm start
```

or

```bash
node app.js
```

---

## ⚙ Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASS=your_gmail_app_password
```

---

## 🔐 Authentication

Protected routes require a valid JWT access token.

Example:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## 📌 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/v1/auth/register` | Register a new user |
| POST | `/v1/auth/login` | User login |
| GET | `/v1/users` | Get users |
| POST | `/v1/users` | Create user |
| GET | `/v1/course` | Get courses |
| POST | `/v1/course` | Create course |
| GET | `/v1/article` | Get articles |
| POST | `/v1/article` | Create article |
| GET | `/v1/comments` | Get comments |
| POST | `/v1/comments` | Create comment |
| GET | `/v1/category` | Get categories |
| POST | `/v1/category` | Create category |
| GET | `/v1/search` | Search resources |
| GET | `/v1/notification` | Get notifications |
| POST | `/v1/contact-us` | Submit contact form |
| POST | `/v1/off` | Create discount code |

---

## 🛡 Middlewares

- JWT Authentication
- Role-Based Authorization
- Request Validation
- Global Error Handling

---

## 📧 Email Service

The project uses **Nodemailer** with Gmail SMTP to send emails.

---

## 📦 Main Dependencies

- Express.js
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv
- Nodemailer
- Multer
- Express Validator

---

## 📈 Future Improvements

- 📄 Swagger / OpenAPI Documentation
- 🐳 Docker Support
- 🧪 Unit & Integration Testing
- 🔄 Refresh Token Authentication
- 📄 Pagination
- 📊 Logging
- 🚦 Rate Limiting
- ⚡ Redis Cache
- 📁 File Storage Service

---

## 👨‍💻 Author

**Mojtaba Ahmadi**

Backend Developer

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ If you like this project

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.