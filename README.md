# 🚀 Next-Gen-CV (Full-Stack)

**Next-Gen-CV** is a powerful, full-stack resume-building platform that allows users to create, manage, and store professional CVs. Built using the **MERN Stack**, it features secure authentication, cloud image hosting, and a seamless live-editing experience.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://next-gen-cv-cmwu-f.vercel.app/)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-blue)](https://www.mongodb.com/mern-stack)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com/)

---

## ✨ Features

* **Real-time Live Preview:** Instantly see changes as you build your CV.
* **Secure Authentication:** Firebase-powered user login and registration.
* **Cloud Image Hosting:** High-performance profile picture uploads via ImageKit.io.
* **Database Persistence:** Save and edit your resumes anytime with MongoDB.
* **Modern Templates:** Clean, professional designs built with Tailwind CSS.
* **Export to PDF:** Download your completed CV in high-quality PDF format.

---

## 🛠️ Tech Stack

### Frontend
* **React.js:** UI components and state management.
* **Tailwind CSS:** Modern, responsive styling.
* **Firebase Auth:** Secure user authentication.

### Backend
* **Node.js & Express.js:** Scalable server-side logic and REST APIs.
* **MongoDB:** NoSQL database for storing user profiles and CV data.
* **ImageKit.io:** Image optimization and cloud storage for profile photos.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+)
* MongoDB Account (Atlas or Local)
* Firebase Project Credentials
* ImageKit.io API Keys

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/chanakaekanayaka/Next-Gen-CV.git](https://github.com/chanakaekanayaka/Next-Gen-CV.git)
    cd Next-Gen-CV
    ```

2.  **Environment Setup:**
    Create a `.env` file in the root and server directories and add your credentials:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    FIREBASE_API_KEY=your_firebase_key
    IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
    IMAGEKIT_URL_ENDPOINT=your_imagekit_url
    ```

3.  **Install Dependencies & Run:**
    ```bash
    # Install for Client and Server
    npm install
    cd client && npm install

    # Run Development Server
    npm run dev
    ```

---

## 🏗️ Architecture


The application uses **React** for the frontend, communicating via **Axios** with an **Express** server. **MongoDB** stores the JSON structure of the CVs, while **ImageKit** handles the heavy lifting of image transformation and delivery.

---

## 🤝 Contributing

1.  **Fork** the Project.
2.  Create your **Feature Branch** (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

---

## 👤 Author

**Chanaka Ekanayaka**
* GitHub: [@chanakaekanayaka](https://github.com/chanakaekanayaka)
* Project Link: [https://next-gen-cv-cmwu-f.vercel.app/](https://next-gen-cv-cmwu-f.vercel.app/)

---

## 📄 License

Distributed under the MIT License.
