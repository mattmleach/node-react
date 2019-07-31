require("dotenv").config();
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models").User;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: req => req.cookies.jwt,
      secretOrKey: process.env.JWT_SECRET
    },
    (payload, done) => {
      return done(null, payload);
    }
  )
);

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      User.findOne({ where: { email: email } }).then(user => {
        if (!user) return done("Incorrect username or password");

        user.isCorrectPassword(password, isMatch => {
          if (!isMatch) return done("Incorrect username or password");
          delete user.dataValues.password;
          return done(null, user);
        });
      });
    }
  )
);

module.exports = passport;
