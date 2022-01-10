const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const User = require("./db/User");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findByUsername(username).then(async (user) => {
      console.log(user);
      if (!user) {
        return done(null, false, {
          message: "Incorrect username or password.",
        });
      }

      const match = await bcrypt.compare(password, user.password);

      if (match) {
        console.log("match");
        return done(null, user, { message: "Incorrect username or password." });
      }
      return done(null, false, { message: "Incorrect username or password." });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null, { message: "Couldn't deserialize user." });
  }
});
