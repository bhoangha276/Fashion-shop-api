const ProductModel = require("./product");

// GET ALL
const getAllProducts = async (req, res) => {
  try {
    const products = await
      ProductModel.find()
        // .populate({ path: 'productId', select: 'title' })
        // .populate('createdBy', 'username');

    res.send({
      success: 1,
      data: products
    })
  } catch (err) {
    res
      .status(400)
      .send({
        success: 0,
        data: null,
        message: err.message || 'Something went wrong'
      })
  }
}

// GET By ID
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
const updateProduct = async (req, res) => {
  const { productId } = req.params;

  const updateProductData = req.body;

  const updatedProduct = await ProductModel.findOneAndUpdate(
    { _id: productId },
    updateProductData,
    { new: true }
  );

  if (!updatedProduct) {
    throw new Error("Not found product");
  }

  res.send({
    success: 1,
    data: updatedProduct,
  });
};

// DELETE
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  const deletedProduct = await ProductModel.findOneAndDelete(
    { _id: productId }
  );

  res.send({
    success: 1,
    data: deletedProduct,
  });
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
