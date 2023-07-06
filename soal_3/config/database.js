const mongoose = require('mongoose');

// Menghubungkan aplikasi dengan database MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1); // Menghentikan aplikasi jika koneksi gagal
  }
};

module.exports = connectDB;
