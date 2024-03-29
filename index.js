require("dotenv").config();
const express = require("express"); // lấy module bên thứ 3
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require('./modules/product');
const categoryRoute = require('./modules/category');
const auhthRoute = require('./modules/auth');

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("DB connection successfuly!");

  const app = express();
  app.use(cors())
  app.use(express.json());

  app.use("/api/products", productRoute);
  app.use("/api/categories", categoryRoute);
  app.use("/api/auth", auhthRoute);

  app.get('/doc', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  })

  app.get('/', (req, res) => {
    res.json({msg:"fashion-shop api is working! => Go to the /doc for details"})
  })

  app.listen(process.env.PORT || 8800, (err) => {
    if (err) throw err;
    console.log("Backend server is running!");
  });
}

main();