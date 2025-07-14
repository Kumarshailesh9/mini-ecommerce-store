# 🛒 Mini Ecommerce Store

A full-stack MERN ecommerce application with basic features for users and admins.

---

## 📌 **Features**

### ✅ **User**
- Register / Login with JWT authentication
- Browse products
- Add to cart
- Checkout with shipping address
- Place orders (Cash on Delivery)
- View orders (coming soon)

### ✅ **Admin**
- Admin login
- Create, update, delete products
- View all orders (coming soon)
- Manage users (coming soon)

---

## ⚙️ **Tech Stack**

- **Frontend:** React, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Deployment:** (Add your deployment info here when live)

---

## 🗂️ **Project Structure**

/server
├─ controllers/ # Route controllers
├─ models/ # Mongoose models (User, Product, Order)
├─ routes/ # API routes (auth, product, order)
├─ middleware/ # Auth middleware
├─ config/ # DB connection
├─ server.js # Entry point

/client
├─ /src
│ ├─ /components # Reusable UI components
│ ├─ /pages # Pages: Home, Cart, Checkout, Admin
│ ├─ /services # API setup
│ ├─ App.js
│ ├─ index.js
├─ package.json


---

## 🔑 **Environment Variables**

Create a `.env` file in the **`/server`** folder:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

**How to Run**

Backend
cd server
npm install
npm run dev

 **Frontend**
cd client
npm install
npm start

**How to Use**
Register a new user.
Login to get a JWT token.
Browse products, add to cart.
Go to Cart → Checkout → Place Order.
Admin can login, create & manage products.

👨‍💻 Author
Shailesh Kumar
MERN Stack Developer
📧 theshaileshkumar9@gmail.com





