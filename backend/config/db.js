const mongoose = require("mongoose");

const connectDB = async () => {
  const URL = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("mongoose connection error", error);
    throw error;
  }
};

module.exports = connectDB;
