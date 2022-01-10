const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.redirect("/users/" + req.user.username);
});

module.exports = router;
