// server.js

const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());

// Route imports
const authRoutes = require('./routes/authRoutes');
const priceRoutes = require('./routes/priceRoutes');
const alertRoutes = require('./routes/alertRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/alerts', alertRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
