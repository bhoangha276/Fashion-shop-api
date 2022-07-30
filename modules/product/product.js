const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    category: {type: String, reqiured: true},
    name: {type: String, reqiured: true},
    price: {type: String, reqiured: true},
    discount: {type: String, reqiured: false},
    discription: {type: String, reqiured: false},
    image: {type: String, reqiured: true},

  },
  { timestamps: true }
);
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;