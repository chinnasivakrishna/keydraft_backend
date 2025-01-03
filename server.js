require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const branchRoutes = require('./routes/branchRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
    origin:'https://keydraft-beta.vercel.app',
    credentials: true
  }));
app.use(express.json());

// Routes
app.use('/api/branches', branchRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 