# 🚀 Full Stack Real-Time Chat Application 🚀

A modern, feature-packed chat application built using the MERN stack with real-time messaging and seamless user experience.

---

## 📋 Key Features:

- 🔧 **Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI.
- 🔐 **Secure Authentication & Authorization**: Powered by JSON Web Tokens (JWT).
- 💬 **Real-Time Messaging**: Chat in real-time using Socket.io.
- 🟢 **Live User Status**: Instantly view who’s online.
- 📦 **State Management**: Efficient global state handled with Zustand.
- 🛠️ **Robust Error Handling**: Managed on both client and server sides.


---

## 🛠️ Environment Setup

Create a `.env` file in the root of your project and add the following environment variables:

```plaintext
MONGODB_URI=your-mongodb-connection-string
PORT=4500
JWT_SECRET=your-jwt-secret

CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

NODE_ENV=development

```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm run start
```
