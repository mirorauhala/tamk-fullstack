require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const login = require("./src/api/login.js");
const users = require("./src/api/users.js");
const me = require("./src/api/me.js");
const photos = require("./src/api/photos.js");
const comments = require("./src/api/comments.js");
const passport = require("passport");
const session = require("express-session");
const { Strategy: LocalStrategy } = require("passport-local");
require("./src/passport.js");

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", login);
app.use("/api/me", me);
app.use("/api/users", users);
app.use("/api/photos", photos);
app.use("/api/comments", comments);

// Handle requests for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const server = app.listen(port, async () => {
  console.log(`Listening on port ${server.address().port}`);
});

process.on("SIGTERM", () => {
  server.close(() => console.log("Server closed"));
  process.exit(0);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Server closed"));
  process.exit(0);
});

process.on("STOP", () => {
  server.close(() => console.log("Server closed"));
  process.exit(0);
});
