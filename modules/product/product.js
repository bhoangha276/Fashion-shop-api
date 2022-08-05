const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    categoryId: {type: mongoose.Types.ObjectId, required: true, ref: 'Category'},
    name: {type: String, reqiured: true},
    image: {type: String, reqiured: true},
    quantity: {type: Number, reqiured: true},
    price: {type: String, reqiured: true},
    discount: {type: String, reqiured: false},
    discription: {type: String, reqiured: false},
    likeCount: {type: Number, default: 0}
  },
  { timestamps: true }
);
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;