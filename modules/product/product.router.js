const router = require("express").Router(); // khởi tạo object
const productController = require("./product.controller");


router.get("/:productId", productController.getProduct);
router.post(
    '/',
    // validateInput(postValid.createPostSchema, 'body'),
    // isAuth,
    productController.createProduct
);

module.exports = router;