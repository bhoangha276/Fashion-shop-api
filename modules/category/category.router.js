const router = require("express").Router(); // khởi tạo object
const categoryController = require("./category.controller");

router.get('/', categoryController.getAllCategories);
router.get("/:categoryId", categoryController.getCategory);
router.post(
    '/',
    // validateInput(postValid.createPostSchema, 'body'),
    // isAuth,
    categoryController.createCategory
);
router.put("/:categoryId", categoryController.updateCategory);
router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;