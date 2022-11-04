const passport = require("passport");
const GoogleStartegy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStartegy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, { id }, done) => {
      const existingUser = await User.findOne({ googleId: id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new User({ googleId: id }).save();
      done(null, newUser);
    }
  )
);
