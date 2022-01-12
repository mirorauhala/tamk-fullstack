const express = require("express");
const router = express.Router();
const User = require("../db/User.js");

router.get("/", async (req, res) => {
  try {
    const users = await User.findById(1);

    const { password, ...user } = users[0];

    res.status(200).send(user);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
