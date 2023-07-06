const express = require('express');
const connectDB = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = 3000;
connectDB();

app.use(express.json());

const defaultRoutes = require('./routes/defaultRoutes');
const productRoutes = require('./routes/productRoutes');
const { errorHandler, notFoundHandler } = require('./middleware/error');

// Rute default
app.use('/', defaultRoutes);
// Rute untuk produk
app.use('/products', productRoutes);
// Rute tidak ditemukan
app.use(notFoundHandler);
app.use(errorHandler);

// Mulai server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server;
