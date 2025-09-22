# BarberConnect :scissors:

A modern web application connecting barbers with clients for seamless appointment scheduling and management.

![BarberConnect Screenshot](https://via.placeholder.com/800x400?text=BarberConnect+Screenshot)

## 🌟 Features

- **User Authentication**
  - Secure login/signup for both barbers and clients
  - Role-based access control
  - JWT authentication

- **Appointment Management**
  - Real-time booking system
  - Calendar integration
  - Appointment reminders
  - Service selection and pricing

- **Barber Profiles**
  - Professional profiles with portfolios
  - Service listings
  - Ratings and reviews
  - Availability management

- **Client Dashboard**
  - Appointment history
  - Favorite barbers
  - Review system
  - Profile management

## 🚀 Tech Stack

### Frontend
- **Framework**: React.js
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Form Handling**: Formik & Yup
- **Icons**: React Icons

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT & bcrypt
- **Validation**: Express Validator

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/udayanalone/BarberConnect.git
   cd BarberConnect
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the backend directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. **Start the application**
   ```bash
   # Start backend server
   cd backend
   npm run dev
   
   # In a new terminal, start frontend
   cd frontend
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📂 Project Structure

```
BarberConnect/
├── backend/               # Backend server code
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── server.js         # Server entry point
├── frontend/             # Frontend React application
│   ├── public/           # Static files
│   └── src/              # Source files
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── store/        # Redux store
│       ├── styles/       # Global styles
│       └── App.js        # Main App component
├── .gitignore           # Git ignore file
└── README.md            # Project documentation
```

## 🧪 Testing

Run tests with the following commands:

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)

---

<div align="center">
  Made with ❤️ by Your Name
</div>
