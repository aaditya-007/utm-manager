const express = require("express");

const router = express.Router();

router.get("/auth", (req, res) => {
  res.send("This auth from router;");
});

module.exports = router;
