require("dotenv").config();
const router = require("express").Router();

const passport = require("passport");
const validator = require("express-joi-validation").createValidator();
const usersService = require("../services/users");
const usersValidation = require("./users-validation");
const wrapAsync = require("../middleware/wrap-async");

router.get(
  "/",
  wrapAsync(async (req, res) => {
    res.json(await usersService.getUsers());
  })
);

router.post(
  "/register",
  wrapAsync(async (req, res) => {
    const user = await usersService.register(
      ({ email, password, name } = req.body)
    );

    res.json(user);
  })
);

router.post(
  "/login",
  validator.body(usersValidation.loginSchema),
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const jwt = usersService.getToken(req.user.toJSON());

    res.cookie("jwt", jwt, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true
    });

    res.json(req.user.toJSON());
  }
);

module.exports = router;
