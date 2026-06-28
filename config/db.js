const mongoose = require("mongoose")
const colors = require('colors')


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB connection error ${error}`.bgRed.white);
    process.exit(1);
  }
};

module.exports = connectDB;