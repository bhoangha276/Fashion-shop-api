const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {type: String, reqiured: true},
    discription: {type: String, reqiured: false},
  },
  { timestamps: true }
);
const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;