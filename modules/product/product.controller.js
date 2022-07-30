const ProductModel = require("./product");

// GET ALL

// GET
const getProduct = async (req, res) => {
  const { productId } = req.params;

  const foundProduct = await ProductModel.findById(productId);

  res.send({
    success: 1,
    data: foundProduct,
  });
};

// CREATE
const createProduct = async (req, res) => {
  const newProductData = req.body;
  const newProduct = await ProductModel.create({
    ...newProductData,
  });

  res.send({
    success: 1,
    data: newProduct,
  });
};

// UPDATE

//DELETE

module.exports = {
  getProduct,
  createProduct,
};
