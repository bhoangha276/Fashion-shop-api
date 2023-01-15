const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {type: String, reqiured: true},
    sex: { type: String, enum: ["Nam","Nữ"] },
    discription: {type: String, reqiured: false},
  },
  { timestamps: true }
);
const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;