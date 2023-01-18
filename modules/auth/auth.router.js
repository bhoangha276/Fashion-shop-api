// api/auth
const router = require('express').Router();
const authController = require('./auth.controller');


// đăng ký, post
// req.query
router.post(
  '/signup',
  authController.signUp);

router.post(
  '/login',
  authController.login
);

// router.get(
//   '/me',
//   getUser,
//   authController.getUserInfo,
// );

module.exports = router;