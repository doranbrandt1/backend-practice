require('dotenv').config();
const express = require('express');
const morgan  = require('morgan');
const { connectDB } = require('./config/db');
const dataRouter  = require('./routes/data');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// connect to Mongo
connectDB(process.env.MONGO_URI);

// mount routes
app.use('/api/data', dataRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));