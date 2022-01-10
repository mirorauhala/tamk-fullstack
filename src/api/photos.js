const express = require("express");
const router = express.Router();
const Photo = require("../db/Photo.js");

router.get("/", async (req, res) => {
  try {
    const photos = await Photo.all();
    res.status(200).send(photos);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = router;
