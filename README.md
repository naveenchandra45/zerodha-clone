# 📈 Zerodha Clone - Full Stack Trading Platform

A comprehensive stock trading platform clone that replicates core features of Zerodha, India's largest stock broker. Built with the **MERN Stack** (MongoDB, Express, React, Node.js) and designed for scalability and performance.

🔴 **Live Demo:** [https://zerodha-clone-plum.vercel.app]  
⚙️ **Backend API:** [https://zerodha-clone-ukx9.onrender.com/fetchuser]

## 🚀 Key Features

* **Real-time Dashboard:** Dynamic stock data visualization using **Chart.js** and **React Context API**.
* **Secure Authentication:** implemented robust user login/signup using **express-session**, **bcrypt**, **connect-mongo** and **Cookies**.
* **Buy/Sell Simulation:** Interactive order placement system with instant portfolio updates.
* **Database Architecture:** Complex relationships between Users, Holdings, and Positions using **MongoDB Schema references**.
* **Production Deployment:** Fully deployed frontend on **Vercel** and backend on **Render** with cross-origin security (CORS) configured.

## 🛠️ Tech Stack

* **Frontend:** React.js, Material UI, Bootstrap, Vite.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB Atlas, Mongoose.
* **Tools:** Hopscotch (API Testing), Git/GitHub (Version Control).

## 🔧 Installation & Run Locally

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/naveenchandra45/zerodha-clone.git](https://github.com/naveenchandra45/zerodha-clone.git)
    ```
2.  **Install Backend Dependencies:**
    ```bash
    cd backend
    npm install
    ```
3.  **Install Frontend Dependencies:**
    ```bash
    cd frontend
    npm install
    ```
4.  **Set up Environment Variables:**
    Create a `.env` file in `backend/` and add:
    ```env
    MONGO_URL=your_mongodb_string
    PORT=8080
    SESSION_SECRET=your_secret_key
    ```
5.  **Run the App:**
    ```bash
    # Terminal 1 (Backend)
    cd backend && npm start

    # Terminal 2 (Frontend)
    cd frontend && npm run dev
    ```
### 1. Authentication Module
* **Signup:** * Fields: Username, Email, Password, Age.
    * **Validation:** Age must be ≥ 18 and < 120. Password must be min 8 characters. Checks for unique username/email in real-time.
    * **Security:** Users already logged in are redirected to the dashboard (cannot access signup/login pages).
* **Login:** Secure session-based login. Invalid credentials trigger immediate error feedback.

### 2. Dashboard & Trading
* **Market Data:** Fetches live-simulated data for Holdings, Positions, and Funds directly from the API.
* **Profile Management:** * **View Profile:** See account details.
    * **My Account:** Users can edit Username, Email, and Age.
    * **My Account:** Securely deletes the user and clears all session data/cookies.
* **Navigation:** Intuitive "Hamburger Menu" grants access to the trading dashboard only after successful authorization.
  
*Developed by **Naveen Chand** as a demonstration of Full Stack Engineering skills.*
