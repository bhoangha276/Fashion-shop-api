const router = require("express").Router(); // khởi tạo object
const productController = require("./product.controller");

router.get('/', productController.getAllProducts);
router.get("/:productId", productController.getProduct);
router.post(
    '/',
    // validateInput(postValid.createPostSchema, 'body'),
    // isAuth,
    productController.createProduct
);
router.put("/:productId", productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

module.exports = router;