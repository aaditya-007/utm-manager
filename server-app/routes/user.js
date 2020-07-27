const express = require("express");
const { body } = require('express-validator/check');
const userController = require('../contollers/user');

const router = express.Router();


// [
//   body("email")
//     .isEmail()
//     .withMessage("Please enter valid email")
//     .custom((value, { res }) => {
//       return User.findOne({ email: value }).then((userDoc) => {
//         if (userDoc) {
//           return Promise.reject("Email Exits");
//         }
//       });
//     })
//     .normalizeEmail(),

//   body("password").trim().isLength({
//     min: 5,
//   }),
//   body("name").trim().not().isEmpty(),
// ],

router.post(
  "/signup",
  userController.signup
);


router.post(
  "/signin",
  userController.signin
);

module.exports = router;
