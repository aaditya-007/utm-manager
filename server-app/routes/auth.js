const express = require("express");

const router = express.Router();

router.post(
  "/singup",
  (req, res) => {
    res.send("This is user from router;");
  }
);

module.exports = router;
