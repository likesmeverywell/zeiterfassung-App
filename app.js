const express = require('express');
const connectDB = require('./models/mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const timeCategoryRoutes = require('./routes/timeCategoryRoutes');
const dotenv = require('dotenv');
const path = require("path")

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/time-categories', timeCategoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});
