const dotenv = require("dotenv");

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Load env vars
dotenv.config({ path: "./config/.env" });

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  
// Mount routes with versioning
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/cart', cartRoutes);

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// connect to db
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`port is running ${PORT}`));