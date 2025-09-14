# MERN E-Commerce Application

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a customer frontend, admin panel, and RESTful API.

## 🚀 Features

### Customer Frontend
- Product browsing and search
- User authentication (login/signup)
- Shopping cart functionality
- Product categories (Women's, Men's, Kids)
- Popular products and new collections
- Responsive design

### Admin Panel
- Product management (add, edit, delete)
- User management
- Order management
- Image upload functionality
- Dashboard analytics

### Backend API
- RESTful API endpoints
- JWT authentication
- MongoDB integration
- File upload handling
- CORS configuration
- Environment-based configuration

## 🛠️ Technology Stack

- **Frontend:** React.js 18, React Router DOM
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **File Upload:** Multer
- **Styling:** CSS3
- **Package Manager:** npm

## 📁 Project Structure

```
MERN_Ecommerce/
├── e-commerce-backend/     # Backend API server
│   ├── upload/            # Image upload directory
│   ├── index.js           # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env               # Environment variables
├── e-commerce-frontend/    # Customer-facing React app
│   ├── src/               # React source files
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── .env               # Environment variables
├── e-commerce-admin/       # Admin panel React app
│   ├── src/               # Admin React source files
│   ├── public/            # Static assets
│   ├── package.json       # Admin dependencies
│   └── .env               # Environment variables
├── package.json           # Root package.json for managing all services
└── README.md              # Project documentation
```

## 🚦 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd MERN_Ecommerce
```

### 2. Install all dependencies
```bash
npm run install-all
```

### 3. Set up environment variables

#### Backend (.env in e-commerce-backend/)
```env
MONGODB_URI=mongodb://127.0.0.1:27017/e-commerce
JWT_SECRET=secret_ecom
PORT=4000
FRONTEND_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001
UPLOAD_PATH=./upload/images
IMAGE_BASE_URL=http://localhost:4000/images
```

#### Frontend (.env in e-commerce-frontend/)
```env
REACT_APP_API_URL=http://localhost:4000
REACT_APP_ENV=development
PORT=3000
```

#### Admin Panel (.env in e-commerce-admin/)
```env
REACT_APP_API_URL=http://localhost:4000
REACT_APP_ENV=development
PORT=3001
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
mongod --dbpath /path/to/your/data/db
```

### 5. Run the application

#### Option 1: Run all services together
```bash
npm run dev
```

#### Option 2: Run services individually
Open three terminal windows:

**Terminal 1 - Backend:**
```bash
npm run start-backend
```

**Terminal 2 - Frontend:**
```bash
npm run start-frontend
```

**Terminal 3 - Admin Panel:**
```bash
npm run start-admin
```

## 🌐 Access Points

After starting the application:

- **Customer Frontend:** http://localhost:3000
- **Admin Panel:** http://localhost:3001
- **Backend API:** http://localhost:4000

## 📡 API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /login` - User login

### Products
- `GET /allproducts` - Get all products
- `GET /newcollections` - Get new collections
- `GET /popularinwomen` - Get popular women's products
- `POST /addproduct` - Add new product (admin)
- `POST /removeproduct` - Remove product (admin)

### Cart Management
- `POST /addtocart` - Add item to cart
- `POST /removefromcart` - Remove item from cart
- `POST /getcart` - Get user's cart

### File Upload
- `POST /upload` - Upload product images

## 🧪 Testing

To test the API endpoints, you can use tools like:
- Postman
- Insomnia
- cURL commands

Example API test:
```bash
curl http://localhost:4000/allproducts
```

## 🛠️ Available Scripts

From the root directory:

- `npm run install-all` - Install dependencies for all services
- `npm run dev` - Run all services concurrently
- `npm run start-backend` - Start backend server only
- `npm run start-frontend` - Start frontend only
- `npm run start-admin` - Start admin panel only
- `npm run build-frontend` - Build frontend for production
- `npm run build-admin` - Build admin panel for production

## 🔧 Configuration

### Database Configuration
The application uses MongoDB as the database. Update the `MONGODB_URI` in the backend `.env` file to match your MongoDB setup.

### JWT Configuration
Update the `JWT_SECRET` in the backend `.env` file for production use. Never use the default secret in production.

### CORS Configuration
The backend is configured to allow requests from the frontend and admin panel URLs. Update the `FRONTEND_URL` and `ADMIN_URL` variables if you're using different ports.

## 📦 Building for Production

### Frontend
```bash
npm run build-frontend
```

### Admin Panel
```bash
npm run build-admin
```

The build artifacts will be in the respective `build/` directories.

## 🔒 Security Considerations

1. **Environment Variables:** Never commit `.env` files to version control
2. **JWT Secret:** Use a strong, unique JWT secret in production
3. **CORS:** Configure CORS properly for production domains
4. **Input Validation:** Implement proper input validation and sanitization
5. **HTTPS:** Use HTTPS in production

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check the `MONGODB_URI` in the `.env` file
   - Verify MongoDB is accessible on the specified port

2. **Port Already in Use:**
   - Change the port numbers in the respective `.env` files
   - Kill any processes using the required ports

3. **Module Not Found:**
   - Run `npm run install-all` to ensure all dependencies are installed
   - Delete `node_modules` and `package-lock.json`, then reinstall

4. **CORS Errors:**
   - Verify the frontend/admin URLs in the backend `.env` file
   - Check that all services are running on the correct ports

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with setup, please create an issue in the GitHub repository.

## 🔮 Future Enhancements

- Payment gateway integration
- Email notifications
- Advanced search and filtering
- Product reviews and ratings
- Wishlist functionality
- Order tracking
- Mobile app development
- Docker containerization

---

**Note:** This application is set up for development purposes. For production deployment, additional security measures and optimizations are recommended.
