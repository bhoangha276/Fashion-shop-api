require("dotenv").config();
const express = require("express"); // lấy module bên thứ 3
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require('./modules/product');
const categoryRoute = require('./modules/category');

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("DB connection successfuly!");

  const app = express();
  app.use(cors())
  app.use(express.json());

  app.use("/api/products", productRoute);
  app.use("/api/categories", categoryRoute);

  app.listen(process.env.PORT || 8800, (err) => {
    if (err) throw err;
    console.log("Backend server is running!");
  });
}

main();