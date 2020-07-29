const express = require("express");
const { body } = require('express-validator/check');
const userController = require('../contollers/user');
const resetController = require('../contollers/password');

const router = express.Router();


router.post(
  "/email",
  resetController.sendPasswordResetEmail
);

router.post(
  "/newPass",
  resetController.receiveNewPassword
);

router.post(
  "/signup",
  userController.signup
);


router.post(
  "/signin",
  userController.signin
);

module.exports = router;
