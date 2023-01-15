const CategoryModel = require("./category");

// GET ALL
const getAllCategories = async (req, res) => {
  try {
    const categories = await
      CategoryModel.find()
        // .populate({ path: 'categoryId', select: 'title' })
        // .populate('createdBy', 'username');

    res.send({
      success: 1,
      data: categories
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
const getCategory = async (req, res) => {
  const { categoryId } = req.params;

  const foundCategory = await CategoryModel.findById(categoryId);

  res.send({
    success: 1,
    data: foundCategory,
  });
};

// CREATE
const createCategory = async (req, res) => {
  const newCategoryData = req.body;
  const newCategory = await CategoryModel.create({
    ...newCategoryData,
  });

  res.send({
    success: 1,
    data: newCategory,
  });
};

// UPDATE
const updateCategory = async (req, res) => {
  const { categoryId } = req.params;

  const updateCategoryData = req.body;

  const updatedCategory = await CategoryModel.findOneAndUpdate(
    { _id: categoryId },
    updateCategoryData,
    { new: true }
  );

  if (!updatedCategory) {
    throw new Error("Not found category");
  }

  res.send({
    success: 1,
    data: updatedCategory,
  });
};

// DELETE
const deleteCategory = async (req, res) => {
  // const { categoryId } = req.params;

  // const deletedCategory = await CategoryModel.findOneAndDelete(
  //   { _id: categoryId }
  // );

  // res.send({
  //   success: 1,
  //   data: deletedCategory,
  // });
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
