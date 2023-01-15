const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    categoryId: {type: mongoose.Types.ObjectId, required: true, ref: 'Category'},
    name: {type: String, reqiured: true},
    imageUrl: {type: String, reqiured: true},
    size: {type: String, reqiured: true},
    quantity: {type: Number, reqiured: true},
    price: {type: Number, reqiured: true},
    discount: {type: Number, reqiured: false},
    discription: {type: String, reqiured: false},
    likeCount: {type: Number, default: 0}
  },
  { timestamps: true }
);
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;