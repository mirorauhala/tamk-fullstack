const express = require("express");
const router = express.Router();
const User = require("../db/User.js");

router.get("/", async (req, res) => {
  try {
    const users = await User.all();
    console.log(users);
    res.status(200).send(users);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    res.json(user);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
