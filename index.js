const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      // console.log(refreshToken);
      // console.log(profile);
    }
  )
);

app.get("/", function(req, res) {
  res.send("hi");
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server has started", process.env.IP);
});
